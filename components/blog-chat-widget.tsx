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
      tooltip: "¿Arrancamos tu proyecto de IA?",
      linkText: "ia4pymes.tech",
    },
    en: {
      tooltip: "Ready to start your AI project?",
      linkText: "ia4pymes.tech",
    },
  }[lang]

  return (
    <>
      {/* ── Floating trigger ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Tooltip — visible only when closed */}
        <AnimatePresence>
          {!isOpen && (
            <motion.p
              key="tooltip"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-sm font-bold text-white hover:text-blue-300 transition-colors select-none drop-shadow-sm"
            >
              {copy.tooltip}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Bubble */}
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center transition-colors"
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        >
          {/* Online dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 border-2 border-[#020617]" />
            </span>
          )}

          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span key="msg" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="fixed z-40 bottom-24 right-3 left-3 sm:left-auto sm:right-6 sm:w-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                {/* Avatar */}
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-none">PymerIA</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    <span className="text-[10px] text-slate-500 font-medium">En línea</span>
                  </div>
                </div>
              </div>

              {/* Link to ia4pymes.tech */}
              <a
                href="https://ia4pymes.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-bold text-white hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                {copy.linkText}
              </a>
            </div>

            {/* Chatbot body */}
            <div className="h-[400px] bg-white">
              <FunctionalChatbot visible={isOpen} minimal={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
