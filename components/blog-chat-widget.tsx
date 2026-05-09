"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, ExternalLink } from "lucide-react"
import { FunctionalChatbot } from "@/components/functional-chatbot"

interface BlogChatWidgetProps {
  lang?: "es" | "en"
}

export function BlogChatWidget({ lang = "es" }: BlogChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  const copy = {
    es: {
      ctaLabel: "¿Quieres hacer tu proyecto de IA?",
      ctaBubble: "Habla con PymerIA",
      headerTitle: "PymerIA · IA4PYMES",
      headerSub: "Asistente de IA para PYMEs",
      linkText: "Visita ia4pymes.tech",
    },
    en: {
      ctaLabel: "Want to start your AI project?",
      ctaBubble: "Talk to PymerIA",
      headerTitle: "PymerIA · IA4PYMES",
      headerSub: "AI Assistant for SMEs",
      linkText: "Visit ia4pymes.tech",
    },
  }[lang]

  return (
    <>
      {/* Floating trigger — bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* CTA label above the bubble (only when closed) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              key="cta-label"
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-2xl shadow-xl border border-slate-100 whitespace-nowrap max-w-[200px] text-right leading-snug cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              {copy.ctaLabel}
              {/* Small arrow pointing down-right */}
              <span className="block text-blue-600 text-[10px] font-black mt-0.5 uppercase tracking-wider">
                {copy.ctaBubble} →
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bubble button */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl shadow-blue-600/40 flex items-center justify-center transition-colors"
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        >
          {/* Notification pulse — only when closed */}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
            </span>
          )}

          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={`
              fixed z-40 shadow-2xl
              /* Mobile: full screen minus space for header + bubble */
              bottom-24 right-0 left-0 mx-3 rounded-3xl
              /* Desktop: fixed size bottom-right panel */
              sm:left-auto sm:right-6 sm:bottom-24 sm:w-[380px] sm:mx-0
            `}
          >
            {/* Panel header with link to ia4pymes.tech */}
            <div className="flex items-center justify-between bg-blue-600 px-5 py-4 rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-sm leading-none">{copy.headerTitle}</p>
                  <p className="text-blue-200 text-[10px] font-bold uppercase tracking-wider mt-0.5">
                    {copy.headerSub}
                  </p>
                </div>
              </div>

              {/* Link to ia4pymes.tech */}
              <a
                href="https://ia4pymes.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-200 hover:text-white border border-white/20 hover:border-white/50 px-3 py-1.5 rounded-full transition-all"
              >
                <ExternalLink className="w-3 h-3" />
                {copy.linkText}
              </a>
            </div>

            {/* Chatbot body */}
            <div className="h-[400px] sm:h-[440px] bg-white rounded-b-3xl overflow-hidden">
              <div className="h-full p-3">
                <FunctionalChatbot visible={isOpen} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
