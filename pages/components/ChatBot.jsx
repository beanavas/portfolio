import { useState } from 'react';
import { X } from 'lucide-react'; // Optional for close icon if you're using lucide-react

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hey! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true); // Optional toggle

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: newMessages })
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#FFC1CB] text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-400 transition"
      >
        Chat
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white border border-pink-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-pink-200 text-pink-900 font-semibold rounded-t-2xl">
        <span>💬 Chat with me!</span>
        <button onClick={() => setOpen(false)} className="hover:text-pink-600">
          <X size={18} />
        </button>
      </div>

      {/* Message area */}
      <div className="h-64 p-3 overflow-y-auto space-y-2 bg-pink-50 text-sm">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl max-w-[75%] ${
              msg.sender === 'user'
                ? 'bg-pink-300 text-white self-end ml-auto'
                : 'bg-white border border-pink-100 text-gray-700'
            }`}
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
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="ml-2 bg-[#FFC1CB] hover:bg-pink-400 transition text-white text-sm px-4 py-2 rounded-full shadow"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
