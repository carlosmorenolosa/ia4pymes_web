"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface BlogChatWidgetProps {
  lang?: "es" | "en"
}

export function BlogChatWidget({ lang = "es" }: BlogChatWidgetProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const copy = {
    es: {
      tooltip: "¿Hablamos por WhatsApp?",
      text: "Hola IA4PYMES, me gustaría saber más sobre vuestros servicios de IA y automatización.",
    },
    en: {
      tooltip: "Chat on WhatsApp",
      text: "Hello IA4PYMES, I would like to know more about your AI and automation services.",
    },
  }[lang]

  useEffect(() => {
    // Show the tooltip after 2 seconds for a nice micro-animation entrance
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = `https://wa.me/34629146707?text=${encodeURIComponent(copy.text)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
            className="pointer-events-auto bg-white text-slate-800 text-[13px] font-bold py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 select-none"
          >
            {/* Green active pulse inside tooltip */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors"
            >
              {copy.tooltip}
            </a>
            {/* Close tooltip button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setShowTooltip(false)
              }}
              className="text-slate-400 hover:text-slate-600 ml-1.5 focus:outline-none"
              aria-label="Cerrar"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-green-600/20 flex items-center justify-center transition-all duration-300 relative group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-green-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

        {/* WhatsApp Brand SVG */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.013-5.101-2.859-6.95S14.193 1.83 11.564 1.829c-5.442 0-9.866 4.42-9.87 9.854-.001 1.716.452 3.39 1.312 4.886L1.97 20.354l3.965-.989-.288-.171zm11.23-5.461c-.302-.15-1.788-.882-2.057-.981-.268-.1-.463-.15-.658.15-.195.3-.75.95-.918 1.15-.168.19-.337.21-.639.06-1.135-.57-1.874-.948-2.628-2.234-.199-.34.199-.315.57-.1.332-.19.382-.24.57-.49.19-.25.09-.47-.05-.62-.14-.15-.658-1.581-.902-2.171-.24-.57-.488-.49-.66-.5-1.127-.01-1.52.26-1.52.83 0 .47.2.92.51 1.34 1.89 2.58 3.73 4.29 6.29 5.22.65.24 1.25.39 1.71.49.52.11.99.09 1.36.04.41-.06 1.788-.731 2.037-1.432.25-.7.25-1.3.17-1.43-.08-.13-.302-.23-.604-.38z" />
        </svg>
      </motion.a>
    </div>
  )
}
