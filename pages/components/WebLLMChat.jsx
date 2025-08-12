'use client';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { CreateMLCEngine } from '@mlc-ai/web-llm';

const MODEL = 'Llama-3.2-1B-Instruct-q4f32_1-MLC';

const SYSTEM_PROMPT = `You are a helpful, concise, and respectful assistant. Refuse toxic content.
You answer questions about Beatriz (computer engineering student at ucf; full-stack + embedded; loves AI/ML).
Ask the user if they want you to tell them  about Beatriz's interests, skills, and projects when the conversation starts.
offer to tell them about some of your favorite projects or experiences.
Share fun facts only if they say they want one (share one or two at a time):
- loves to cook
- traveled to 16 countries; favorite: Morocco
- likes "Forrest Gump"
- from Madrid, Spain
- studies Computer Engineering at UCF
- upcoming embedded software internship
- worked on AI projects and embedded systems
- launched a tiny research rocket.`;

export default function ChatBotLocal({ setOpen }) {
  const engineRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  // keep your original message shape: { sender: 'user'|'bot', text: string }
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hey! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    (async () => {
      // load the local model in-browser
      const engine = await CreateMLCEngine(MODEL, { initProgressCallback: console.log });
      engineRef.current = engine;
      setReady(true);
    })();
  }, []);

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setInput('');

    // quick client-side blocklist
    const banned = /\b(nigg|fag|kike|retard|kill yourself)\b/i;
    if (banned.test(text)) {
      setMessages((m) => [...m, { sender: 'user', text }, { sender: 'bot', text: "I can't help with that." }]);
      return;
    }

    const next = [...messages, { sender: 'user', text }];
    setMessages(next);
    setLoading(true);

    try {
      // convert your UI messages -> WebLLM chat format
      const chatMsgs = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...next.map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text,
        })),
      ];

      const completion = await engineRef.current.chat.completions.create({
        messages: chatMsgs,
        temperature: 0.2,
        top_p: 0.9,
        max_tokens: 200,
        stop: ['User:', 'Assistant:'],
      });

      const reply = completion?.choices?.[0]?.message?.content?.trim() || '(no output)';
      setMessages((m) => [...m, { sender: 'bot', text: reply }]);
    } catch (e) {
      console.error(e);
      setMessages((m) => [...m, { sender: 'bot', text: 'Oops! Something went wrong locally.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white border border-pink-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-pink-200 text-pink-900 font-semibold rounded-t-2xl">
        <span>💬 Chat with me!</span>
        <button onClick={() => setOpen?.(false)} className="hover:text-pink-600" aria-label="Close chat">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="h-64 p-3 overflow-y-auto space-y-2 bg-pink-50 text-sm">
        {!ready && (
          <div className="text-xs text-gray-400">Loading local model… first load may take a minute.</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl max-w-[75%] ${
              msg.sender === 'user'
                ? 'bg-pink-300 text-white self-end ml-auto'
                : 'bg-white border border-pink-100 text-gray-700'
            }`}
            // keep same behavior as your old bot
            dangerouslySetInnerHTML={{ __html: msg.text }}
          />
        ))}
        {loading && <div className="text-xs text-gray-400">Typing...</div>}
      </div>

      {/* Input */}
      <div className="flex items-center border-t px-3 py-2 bg-white">
        <input
          type="text"
          className="flex-grow text-sm px-3 py-2 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder={ready ? 'Type a message...' : 'Loading model…'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && ready && !loading && sendMessage()}
          disabled={!ready || loading}
        />
        <button
          className="ml-2 bg-[#FFC1CB] hover:bg-pink-400 transition text-white text-sm px-4 py-2 rounded-full shadow disabled:opacity-60"
          onClick={sendMessage}
          disabled={!ready || loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
