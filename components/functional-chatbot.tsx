"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const MarkdownRenderer = dynamic(() => import("./markdown-renderer"), {
  ssr: false,
  loading: () => <span className="animate-pulse">...</span>,
})

interface Message {
  sender: string
  content: string
}

export function FunctionalChatbot({ 
  is3D = false, 
  onInteractionChange,
  visible = true,
  minimal = false,
  lang = "es"
}: { 
  is3D?: boolean, 
  onInteractionChange?: (active: boolean) => void,
  visible?: boolean,
  minimal?: boolean,
  lang?: "es" | "en"
}) {
  const i18n = {
    es: {
      welcome1: "¿Te gustaría saber qué tareas repetitivas podrías automatizar en tu empresa ahora mismo? ⚡",
      welcome2: "¡Cuéntame tu sector o qué procesos te quitan más tiempo y te diré cómo optimizarlos! 👇",
      online: "En línea",
      typing: "PymerIA está escribiendo",
      thinking: "PymerIA está pensando...",
      placeholder: "Escribe tu mensaje...",
      ariaContainer: "Ejemplo de conversación con asistente IA",
      ariaInput: "Escribe tu mensaje",
      ariaSend: "Enviar mensaje",
      errRateLimit: "Has enviado muchos mensajes. Por favor, espera un minuto.",
      errServer: "Error al conectar con el servidor",
      errGeneric: "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.",
      errNoResponse: "No tengo una respuesta para eso en este momento.",
    },
    en: {
      welcome1: "Would you like to know which repetitive tasks you could automate in your business right now? ⚡",
      welcome2: "Tell me about your industry or which processes take up most of your time, and I'll show you how to optimize them! 👇",
      online: "Online",
      typing: "PymerIA is typing",
      thinking: "PymerIA is thinking...",
      placeholder: "Type your message...",
      ariaContainer: "AI assistant conversation example",
      ariaInput: "Type your message",
      ariaSend: "Send message",
      errRateLimit: "You have sent too many messages. Please wait a minute.",
      errServer: "Error connecting to the server",
      errGeneric: "There was a problem processing your request. Please try again later.",
      errNoResponse: "I don't have an answer for that right now.",
    },
  }[lang]

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      sender: "PymerIA",
      content: i18n.welcome1,
    },
    {
      sender: "PymerIA",
      content: i18n.welcome2,
    },
  ])

  // Reset initial messages if lang prop changes dynamically
  useEffect(() => {
    setMessages([
      {
        sender: "PymerIA",
        content: i18n.welcome1,
      },
      {
        sender: "PymerIA",
        content: i18n.welcome2,
      },
    ])
  }, [lang])

  const [currentInput, setCurrentInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialTyping, setIsInitialTyping] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const pymeriaResponseRef = useRef<HTMLDivElement>(null)
  const sessionIdRef = useRef<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    sessionIdRef.current = crypto.randomUUID()
  }, [])

  useEffect(() => {
    if (onInteractionChange) {
      onInteractionChange(isFocused && !isLoading)
    }
  }, [isFocused, isLoading, onInteractionChange])

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
    setIsFocused(false)
    
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          conversation: updatedMessages.slice(-20),
          session_id: sessionIdRef.current,
          lang
        }),
      })

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(i18n.errRateLimit)
        }
        throw new Error(i18n.errServer)
      }

      const data = await response.json()
      const pymerIAResponse: Message = {
        sender: "PymerIA",
        content: data.response || i18n.errNoResponse,
      }

      setMessages((prev) => [...prev, pymerIAResponse])
    } catch (error) {
      const errorMessage: Message = {
        sender: "PymerIA",
        content: error instanceof Error ? error.message : i18n.errGeneric,
      }
      setMessages((prev) => [...prev, errorMessage])
      console.error("Chat API error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current && messages.length > 2) {
      const scrollContainer = scrollAreaRef.current

      if (isLoading) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: "smooth",
        })
      } else if (
        pymeriaResponseRef.current &&
        messages[messages.length - 1].sender === "PymerIA"
      ) {
        const pymeriaResponseElement = pymeriaResponseRef.current
        const adjustedTop = Math.max(0, pymeriaResponseElement.offsetTop - 20)

        scrollContainer.scrollTo({
          top: adjustedTop,
          behavior: "smooth",
        })
      }
    }
  }, [messages, isLoading])

  return (
    <div
      className={`w-full h-full flex flex-col relative ${
        minimal ? "bg-white p-3" :
        is3D ? "bg-white/95 backdrop-blur-md p-3 border border-white/40 shadow-2xl" : "bg-white/90 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 justify-center rounded-2xl sm:rounded-3xl border border-white/40 shadow-2xl"
      } ${is3D ? "rounded-none" : ""}`}
      role="complementary"
      aria-label={i18n.ariaContainer}
    >

      {!minimal && (
        <div className={`flex items-center justify-between ${is3D ? "mb-2" : "mb-4 sm:mb-6"}`}>
          <div className="flex items-center">
            <div
              className={`${is3D ? "w-8 h-8" : "w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14"} bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-3 shrink-0 shadow-lg shadow-blue-500/20`}
              aria-hidden="true"
            >
              <MessageCircle className={`text-white ${is3D ? "w-4 h-4" : "w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7"}`} />
            </div>
            <div>
              <div className={`${is3D ? "text-sm" : "text-base sm:text-lg lg:text-xl"} font-black text-slate-900 tracking-tight`}>PymerIA</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{i18n.online}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        ref={scrollAreaRef}
        className={`space-y-2 flex-1 overflow-y-auto ${minimal ? "max-h-full" : is3D ? "max-h-full" : "max-h-60 sm:max-h-72 lg:max-h-80"}`}
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
              className={`inline-block p-2.5 rounded-[1rem] shadow-sm max-w-[85%] sm:max-w-[90%] break-words ${
                msg.sender === "User"
                  ? minimal
                    ? "bg-slate-100 ml-auto border border-slate-200 text-slate-700"
                    : "bg-white ml-auto border border-slate-100 text-slate-600"
                  : minimal
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-gradient-to-br from-blue-50 to-white border border-blue-50"
              } ${msg.sender === "User" ? "rounded-tr-none" : "rounded-tl-none"}`}
            >
              <div className={`prose prose-sm max-w-none ${msg.sender === "User"
                ? "text-slate-600 prose-strong:text-slate-700"
                : "text-slate-800 prose-strong:text-blue-600"
                }`}>
                <MarkdownRenderer content={msg.content} minimal={minimal} isUser={msg.sender === "User"} />
              </div>
            </div>
          </motion.div>
        ))}

        {(isLoading || isInitialTyping) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-left"
          >
            <div className={`inline-block p-2.5 rounded-[1rem] rounded-tl-none shadow-sm max-w-xs bg-blue-50 border border-blue-200`}>
              <div className="flex items-center space-x-2">
                <span className="text-slate-700 text-xs font-medium">{i18n.typing}</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className={`mt-4 flex items-center gap-2 p-1 bg-slate-50 border border-slate-100 rounded-2xl transition-all ${
        messages.length === 2 && !isFocused ? "ring-2 ring-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)] animate-pulse" : "focus-within:ring-2 focus-within:ring-blue-500/20"
      }`}>
        <Input
          ref={inputRef}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder={isLoading ? i18n.thinking : i18n.placeholder}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}
          className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 text-sm text-slate-900 placeholder:text-slate-400 h-10"
          disabled={isLoading}
          name="message"
          autoComplete="off"
          aria-label={i18n.ariaInput}
        />
        <Button
          type="submit"
          size="icon"
          className="h-10 w-10 bg-blue-600 hover:bg-blue-700 rounded-xl shrink-0 shadow-lg shadow-blue-600/20"
          disabled={isLoading || !currentInput.trim()}
          aria-label={i18n.ariaSend}
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  )
}
