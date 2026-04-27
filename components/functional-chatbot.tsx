"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  sender: string
  content: string
}

export function FunctionalChatbot({ 
  is3D = false, 
  onInteractionChange,
  visible = true 
}: { 
  is3D?: boolean, 
  onInteractionChange?: (active: boolean) => void,
  visible?: boolean
}) {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialTyping, setIsInitialTyping] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const pymeriaResponseRef = useRef<HTMLDivElement>(null)
  const sessionIdRef = useRef<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Eliminamos el auto-focus automático que causaba saltos de scroll en móviles
  // El foco ahora se gestionará solo tras una interacción explícita del usuario


  useEffect(() => {
    sessionIdRef.current = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }, [])

  useEffect(() => {
    if (!visible) {
      setIsInitialTyping(false);
      return;
    }

    setIsInitialTyping(true);

    // Stage 1: First high-impact CTA after a longer typing period (3s)
    const t1 = setTimeout(() => {
      setIsInitialTyping(false);
      setMessages([{ 
        sender: "PymerIA", 
        content: "¿Te gustaría saber qué tareas repetitivas podrías automatizar en tu empresa ahora mismo? ⚡" 
      }]);
    }, 3000)

    // Stage 2: Second typing block starts shortly after first message (4.5s total)
    const t2 = setTimeout(() => {
      setMessages(prev => {
        if (prev.length === 1) setIsInitialTyping(true)
        return prev
      })
    }, 4500)

    // Stage 3: Second direct CTA after more typing (8s total)
    const t3 = setTimeout(() => {
      setIsInitialTyping(false);
      setMessages(prev => {
        if (prev.length === 1) {
          return [...prev, { 
            sender: "PymerIA", 
            content: "¡Cuéntame tu sector o qué procesos te quitan más tiempo y te diré cómo optimizarlos! 👇" 
          }]
        }
        return prev
      });
    }, 8000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [visible])

  useEffect(() => {
    // Determine active interaction: input is focused AND we aren't waiting for a response.
    // This allows the chatbot to rotate while PymerIA is "thinking".
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
    
    // Force the browser to drop focus from the input so it doesn't get stuck later
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
      className={`w-full h-full flex flex-col border border-white/40 shadow-2xl relative ${
        is3D ? "bg-white/95 backdrop-blur-md p-3" : "bg-white/90 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 justify-center rounded-2xl sm:rounded-3xl"
      } ${is3D ? "rounded-none" : ""}`}
      role="complementary"
      aria-label="Ejemplo de conversación con asistente IA"
    >

      <div className={`flex items-center justify-between ${is3D ? "mb-2" : "mb-4 sm:mb-6"}`}>
        <div className="flex items-center">
          <div
            className={`${is3D ? "w-8 h-8" : "w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14"} bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-3 shrink-0 shadow-lg shadow-blue-500/20`}
            aria-hidden="true"
          >
            <MessageCircle className={`text-white ${is3D ? "w-4 h-4" : "w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7"}`} />
          </div>
          <div>
            <h3 className={`${is3D ? "text-sm" : "text-base sm:text-lg lg:text-xl"} font-black text-slate-900 tracking-tight`}>PymerIA</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">En línea</span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollAreaRef}
        className={`space-y-3 flex-1 overflow-y-auto ${is3D ? "max-h-full" : "max-h-60 sm:max-h-72 lg:max-h-80"}`}
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
              className={`inline-block p-3 sm:p-4 rounded-[1.25rem] shadow-sm max-w-[85%] sm:max-w-[90%] break-words ${msg.sender === "User"
                ? "bg-white ml-auto border border-slate-100 text-slate-600"
                : "bg-gradient-to-br from-blue-50 to-white border border-blue-50"
                } ${msg.sender === "User" ? "rounded-tr-none" : "rounded-tl-none"}`}
            >
              <div className={`prose prose-sm max-w-none ${msg.sender === "User"
                ? "text-slate-600 prose-strong:text-slate-700"
                : "text-slate-800 prose-strong:text-blue-600"
                }`}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
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
            <div className="inline-block p-3 sm:p-4 rounded-[1.25rem] rounded-tl-none shadow-sm max-w-xs sm:max-w-sm bg-gradient-to-br from-blue-50 to-white border border-blue-50">
              <div className="flex items-center space-x-2">
                <span className="text-slate-800 text-xs sm:text-sm font-medium">PymerIA está escribiendo</span>
                <div className="flex space-x-1">
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className={`mt-4 flex items-center gap-2 p-1 bg-slate-50 border border-slate-100 rounded-2xl transition-all ${
        messages.length === 2 && !isFocused ? "ring-2 ring-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)] animate-pulse" : "focus-within:ring-2 focus-within:ring-blue-500/20"
      }`}>
        <Input
          ref={inputRef}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isLoading ? "PymerIA está pensando..." : "Escribe tu mensaje..."}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}
          className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 text-sm h-10"
          disabled={isLoading}
          name="message"
          autoComplete="off"
          aria-label="Escribe tu mensaje"
        />
        <Button
          onClick={handleSendMessage}
          size="icon"
          className="h-10 w-10 bg-blue-600 hover:bg-blue-700 rounded-xl shrink-0 shadow-lg shadow-blue-600/20"
          disabled={isLoading}
          aria-label="Enviar mensaje"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
