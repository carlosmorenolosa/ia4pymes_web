
"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Message {
  sender: string
  content: string
}

const sampleMessages: Message[] = [
  {
    sender: "PymerIA",
    content: "¡Hola! 👋 ¿Qué tareas repetitivas te quitan más tiempo cada día?",
  },
]

const LAMBDA_URL = "https://go066mldzb.execute-api.eu-west-1.amazonaws.com/prod"
const API_KEY = "jR72QE1yTW2gMIvIy5IZt5YJsVaN9Puz7X7PxcaF"

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages)
  const [currentInput, setCurrentInput] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return

    const newMessage: Message = {
      sender: "User",
      content: currentInput.trim(),
    }

    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    setCurrentInput("")

    try {
      const response = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({ conversation: updatedMessages.slice(-20) }),
      })

      if (!response.ok) {
        throw new Error("Error al conectar con el servidor")
      }

      const data = await response.json()

      const pymerIAResponse: Message = {
        sender: "PymerIA",
        content: data.response || "No tengo una respuesta para eso en este momento.",
      }
      setMessages((prev) => [...prev, pymerIAResponse])
    } catch (error) {
      const errorMessage: Message = {
        sender: "PymerIA",
        content: "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.",
      }
      setMessages((prev) => [...prev, errorMessage])
      console.error("Error al llamar a la Lambda:", error)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="w-full max-w-lg h-full flex flex-col justify-center p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4 shrink-0">
          <MessageCircle className="text-white w-7 h-7" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">Asistente IA</h3>
          <p className="text-sm text-slate-600">Hecho a medida</p>
        </div>
      </div>
      <div ref={scrollAreaRef} className="flex-1 p-4 flex flex-col space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-[#f0f4ff]">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`my-2 px-4 py-3 rounded-2xl break-words shadow-md w-fit max-w-[90%] ${
              msg.sender === "User"
                ? "bg-blue-800 self-end ml-auto text-right text-white rounded-br-sm"
                : "bg-gradient-to-r from-blue-100 to-blue-50 self-start text-left text-slate-800 rounded-bl-sm"
            }`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className={`prose prose-sm max-w-none ${
                msg.sender === "User"
                  ? "text-white prose-strong:text-white"
                  : "text-slate-800 prose-strong:text-blue-600"
              }`}
            >
              {msg.content}
            </ReactMarkdown>
          </motion.div>
        ))}
      </div>
      <div className="w-full bg-gray-100/50 border-t border-gray-200/80 px-4 pt-3 pb-2 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <input
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            className="flex-1 h-10 bg-white text-gray-800 border border-gray-300 rounded-lg px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
          />
          <button
            onClick={handleSendMessage}
            className="h-10 w-10 p-0 bg-blue-800 text-white hover:bg-blue-900 rounded-full flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-110 shadow-md"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
