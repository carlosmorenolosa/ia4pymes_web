"use client"

import { useState, useEffect } from "react"

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

  const whatsappUrl = `https://wa.me/34680538801?text=${encodeURIComponent(copy.text)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div
          className="absolute bottom-16 right-0 whitespace-nowrap pointer-events-auto bg-white text-slate-800 text-[13px] font-bold py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 select-none animate-in fade-in zoom-in-95 duration-300"
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
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-green-600/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-green-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

        {/* WhatsApp Brand SVG */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>
  )
}
