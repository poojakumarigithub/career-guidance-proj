import React, { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  const bottomRef = useRef(null);

  const toggleChat = () => setOpen(!open);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (customMessage = null) => {
    const message = customMessage || input;
    if (!message.trim()) return;

    setMessages(prev => [...prev, { sender: "user", text: message }]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("http://localhost:5001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          session_id: sessionId
        }),
      });

      const data = await res.json();
      setTyping(false);
      setSessionId(data.session_id);

      setMessages(prev => [
        ...prev,
        { sender: "bot", text: data.reply }
      ]);
    } catch (error) {
      setTyping(false);
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠ Server error" }
      ]);
    }
  };

  // Auto greeting
  useEffect(() => {
    if (messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([
          {
            sender: "bot",
            text: "Hi 👋\n\nHow can I help you today?\n• Career advice\n• Stream guidance\n• Skill suggestions"
          }
        ]);
      }, 1000);
    }
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 
        bg-gradient-to-r from-blue-600 to-indigo-600
        dark:from-purple-600 dark:to-indigo-700
        text-white p-4 rounded-full shadow-2xl 
        z-50 hover:scale-110 transition-all duration-300"
      >
        💬
      </button>

      {open && (
        <div
          className="
          fixed bottom-24 right-6 w-[360px] h-[520px]
          backdrop-blur-xl
          bg-white/40 dark:bg-black/40
          border border-white/40 dark:border-gray-700
          rounded-3xl
          shadow-[0_25px_60px_rgba(0,0,0,0.3)]
          flex flex-col z-50
          animate-[slideUp_0.4s_ease-out]
        "
        >
          {/* Header */}
          <div
            className="
            bg-gradient-to-r from-blue-600 to-indigo-600
            dark:from-purple-700 dark:to-indigo-800
            text-white text-center py-4 font-semibold
            rounded-t-3xl shadow-md
          "
          >
            🎓 Career Counselor
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    px-4 py-2 rounded-2xl max-w-[75%]
                    whitespace-pre-line shadow-md
                    ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : "bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Animation */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/80 dark:bg-gray-800 px-4 py-2 rounded-2xl shadow-md flex space-x-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-white/30 dark:border-gray-700 p-3 bg-white/20 dark:bg-black/30 backdrop-blur-md rounded-b-3xl">
            <input
              className="
              flex-1 bg-white/80 dark:bg-gray-800
              rounded-full px-4 py-2 text-sm
              outline-none text-gray-800 dark:text-white
              "
              placeholder="Ask about your career..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={() => sendMessage()}
              className="
              ml-2 bg-gradient-to-r from-blue-600 to-indigo-600
              dark:from-purple-600 dark:to-indigo-700
              text-white px-4 py-2 rounded-full text-sm
              hover:scale-105 transition
              "
            >
              Send
            </button>
          </div>
        </div>
      )}

      <style>
        {`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </>
  );
}
