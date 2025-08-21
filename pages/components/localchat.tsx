'use client';
import React, { useEffect, useRef, useState } from 'react';

// Lazy-import inside the browser only
type Generator = (prompt: string, opts?: Record<string, any>) => Promise<any[]>;

export default function LocalChat() {
  const generatorRef = useRef<{ generate: Generator } | null>(null);
  const [loadingModel, setLoadingModel] = useState(true);
  const [messages, setMessages] = useState<{ role: 'user'|'assistant'; text: string }[]>([
    { role: 'assistant', text: 'Hey! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    (async () => {
      setLoadingModel(true);
      const { pipeline } = await import('@xenova/transformers');

      // Small demo model: fast and works in-browser (not chat-tuned but fine for a helper)
      const pipe = await pipeline('text-generation', 'Xenova/gpt2');
      generatorRef.current = {
        generate: async (prompt: string, opts?: any) => pipe(prompt, opts),
      };
      setLoadingModel(false);
      console.log('✅ Local model loaded');
    })();
  }, []);

  async function send() {
    const text = input.trim();
    if (!text || !generatorRef.current) return;
    setInput('');
    const nextMessages = [...messages, { role: 'user' as const, text }];
    setMessages(nextMessages);

    // Simple chat prompt format
    const prompt =
      nextMessages
        .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
        .join('\n') + '\nAssistant:';

    // Generate locally
    const out = await generatorRef.current.generate(prompt, {
      max_new_tokens: 120,
      temperature: 0.8,
      top_k: 50,
      repetition_penalty: 1.1,
    });

    // transformers.js returns an array with { generated_text }
    const full = out?.[0]?.generated_text ?? '';
    const i = full.lastIndexOf('Assistant:');
    const reply = (i >= 0 ? full.slice(i + 'Assistant:'.length) : full).trim();

    setMessages([...nextMessages, { role: 'assistant' as const, text: reply || '(no output)' }]);
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-3">
      <div className="border rounded-lg p-3 h-96 overflow-y-auto text-sm">
        {messages.map((m, idx) => (
          <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span className="font-medium">{m.role === 'user' ? 'You' : 'Assistant'}:</span> {m.text}
          </div>
        ))}
        {loadingModel && <div className="mt-2 italic opacity-70">Loading local model… first load may take a bit.</div>}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type your message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' ? send() : undefined}
          disabled={loadingModel}
        />
        <button
          className="border rounded px-4 py-2"
          onClick={send}
          disabled={loadingModel || !input.trim()}
        >
          Send
        </button>
      </div>
      <div className="text-xs opacity-70">
        Runs entirely in your browser via <code>@xenova/transformers</code> (no API keys).
      </div>
    </div>
  );
}
