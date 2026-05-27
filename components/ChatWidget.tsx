"use client"

import { useState } from "react"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Ask about tourism in Pakistan.",
    },
  ])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!message.trim()) return

    const userMessage = {
      sender: "user",
      text: message,
    }

    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: message }),
      })

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server connection failed." },
      ])
    }

    setLoading(false)
    setMessage("")
  }

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl font-bold"
      >
        AI
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-300">

          {/* HEADER (FIXED SIMPLE) */}
          <div className="bg-black text-white p-5">
            <h1 className="text-xl font-bold">AI Assistant</h1>
            <p className="text-xs text-gray-300 mt-1">
              Hidden Pakistan Tourism Guide
            </p>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-green-500 text-white"
                      : "bg-white text-black shadow"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="bg-white px-4 py-2 rounded-2xl inline-block shadow">
                Typing...
              </div>
            )}

          </div>

          {/* INPUT */}
          <div className="p-3 border-t flex gap-2 bg-white">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage()
              }}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none"
              placeholder="Ask about tourism..."
            />

            <button
              onClick={sendMessage}
              className="bg-black hover:bg-gray-800 text-white px-5 rounded-xl"
            >
              Send
            </button>

          </div>

        </div>
      )}
    </>
  )
}