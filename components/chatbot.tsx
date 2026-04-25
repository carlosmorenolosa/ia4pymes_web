
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

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages)
  const [currentInput, setCurrentInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const lastMessageRef = useRef<HTMLDivElement>(null)
  const sessionIdRef = useRef<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isLoading && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 50)
    }
  }, [isLoading])

  useEffect(() => {
    sessionIdRef.current = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }, [])

  const handleSendMessage = async () => {
    if (!currentInput.trim() || isLoading) return

    const newMessage: Message = {
      sender: "User",
      content: currentInput.trim(),
    }

    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    setCurrentInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          conversation: updatedMessages.slice(-20),
          session_id: sessionIdRef.current
        }),
      })

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Has enviado muchos mensajes. Por favor, espera un minuto.")
        }
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
        content: error instanceof Error ? error.message : "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.",
      }
      setMessages((prev) => [...prev, errorMessage])
      console.error("Error al llamar a la Lambda:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (lastMessageRef.current && scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current
      const lastMessageElement = lastMessageRef.current

      // Ajusta la posición del scroll para que el inicio del mensaje sea visible, subiendo 50px.
      scrollContainer.scrollTo({
        top: Math.max(0, lastMessageElement.offsetTop - 50),
        behavior: "smooth",
      })
    }
  }, [messages, isLoading])

  return (
    <div className="w-full max-w-xl h-[600px] flex flex-col justify-center p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4 shrink-0">
          <MessageCircle className="text-white w-7 h-7" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">PymerIA</h3>
        </div>
      </div>
      <div ref={scrollAreaRef} className="flex-1 p-4 flex flex-col space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-[#f0f4ff]">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            ref={index === messages.length - 1 ? lastMessageRef : null}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`my-2 px-4 py-3 rounded-2xl break-words shadow-md w-fit max-w-[90%] ${msg.sender === "User"
                ? "bg-blue-800 self-end ml-auto text-right text-white rounded-br-sm"
                : "bg-gradient-to-r from-blue-100 to-blue-50 self-start text-left text-slate-800 rounded-bl-sm"
              }`}
          >
            <div
              className={`prose prose-sm max-w-none ${msg.sender === "User"
                  ? "text-white prose-strong:text-white"
                  : "text-slate-800 prose-strong:text-blue-600"
                }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
              >
                {msg.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            ref={lastMessageRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="my-2 px-4 py-3 rounded-2xl shadow-md w-fit max-w-[90%] bg-gradient-to-r from-blue-100 to-blue-50 self-start text-left text-slate-800 rounded-bl-sm"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-medium text-slate-700">PymerIA está pensando</span>
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: "0s" }}></div>
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="w-full bg-gray-100/50 border-t border-gray-200/80 px-4 pt-3 pb-2 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <input
            ref={inputRef}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "PymerIA está pensando..." : "Escribe tu mensaje..."}
            className="flex-1 h-10 bg-white text-gray-800 border border-gray-300 rounded-lg px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 disabled:opacity-50"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            className="h-10 w-10 p-0 bg-blue-800 text-white hover:bg-blue-900 rounded-full flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-110 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
