"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
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

export function FunctionalChatbot() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages)
  const [currentInput, setCurrentInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const pymeriaResponseRef = useRef<HTMLDivElement>(null)

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
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current

      if (isLoading) {
        // Scroll automático cuando el usuario envía un mensaje
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: "smooth",
        })
      } else if (
        pymeriaResponseRef.current &&
        messages.length > 0 &&
        messages[messages.length - 1].sender === "PymerIA"
      ) {
        // Cuando PymerIA responde, anclar justo antes de la respuesta
        const pymeriaResponseElement = pymeriaResponseRef.current
        const scrollContainer = scrollAreaRef.current

        // Calcular la posición justo antes de la respuesta de PymerIA
        const containerRect = scrollContainer.getBoundingClientRect()
        const messageRect = pymeriaResponseElement.getBoundingClientRect()
        const relativeTop = messageRect.top - containerRect.top + scrollContainer.scrollTop

        // Posicionar justo antes de la respuesta (con un pequeño margen)
        const adjustedTop = Math.max(0, relativeTop - 20)

        scrollContainer.scrollTo({
          top: adjustedTop,
          behavior: "smooth",
        })
      }
    }
  }, [messages, isLoading])

  return (
    <div
      className="w-full h-full flex flex-col justify-center p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl"
      role="complementary"
      aria-label="Ejemplo de conversación con asistente IA"
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <div
          className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0"
          aria-hidden="true"
        >
          <MessageCircle className="text-white w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800">PymerIA</h3>
        </div>
      </div>

      <div
        ref={scrollAreaRef}
        className="space-y-3 sm:space-y-4 flex-1 overflow-y-auto max-h-60 sm:max-h-72 lg:max-h-80"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#2563eb #dbeafe",
        }}
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            ref={msg.sender === "PymerIA" && index === messages.length - 1 ? pymeriaResponseRef : null}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`${msg.sender === "User" ? "text-right" : "text-left"}`}
          >
            <div
              className={`inline-block p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm max-w-xs sm:max-w-sm break-words ${
                msg.sender === "User"
                  ? "bg-white ml-auto border border-gray-200"
                  : "bg-gradient-to-r from-blue-100 to-blue-50"
              } ${msg.sender === "User" ? "rounded-br-sm" : "rounded-bl-sm"}`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className={`prose prose-sm max-w-none ${
                  msg.sender === "User"
                    ? "text-slate-600 prose-strong:text-slate-700"
                    : "text-slate-800 prose-strong:text-blue-600"
                }`}
                components={{
                  p: ({ children }) => <p className="mb-1 sm:mb-2 last:mb-0 text-xs sm:text-sm">{children}</p>,
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm">{children}</ol>
                  ),
                  strong: ({ children }) => (
                    <strong className={msg.sender === "User" ? "text-slate-700 font-bold" : "text-blue-600 font-bold"}>
                      {children}
                    </strong>
                  ),
                }}
              >
                {msg.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-left"
          >
            <div className="inline-block p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-bl-sm shadow-sm max-w-xs sm:max-w-sm bg-gradient-to-r from-blue-100 to-blue-50">
              <div className="flex items-center space-x-2">
                <span className="text-slate-800 text-xs sm:text-sm">PymerIA está pensando</span>
                <div className="flex space-x-1">
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                  <div
                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-600 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-600 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
        <input
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isLoading ? "PymerIA está pensando..." : "Escribe tu mensaje..."}
          className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          <Send className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </div>
    </div>
  )
}
