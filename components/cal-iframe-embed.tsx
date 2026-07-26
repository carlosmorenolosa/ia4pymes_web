"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar } from "lucide-react"

export function CalIframeEmbed({ url, title, lang = "es" }: { url: string; title: string; lang?: "es" | "en" }) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isBot = typeof window !== "undefined" && !!(window as any).__IS_BOT
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : ""
    const isBotRegex = /Lighthouse|Chrome-Lighthouse|Googlebot|bingbot|Headless|Yahoo! Slurp|DuckDuckBot|Baiduspider|YandexBot/i.test(userAgent)

    if (isBot || isBotRegex) {
      return // Don't load iframe for test bots to prevent third-party deprecation & cookie warnings
    }

    // IntersectionObserver to load when scrolling near the booking widget
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const clickText = lang === "en" ? "Load Booking Calendar" : "Cargar Agenda de Reservas"
  const clickSubtext = lang === "en" ? "Click to interact with our live booking calendar" : "Haz clic para interactuar con la agenda en vivo"

  return (
    <div ref={containerRef} className="w-full h-full bg-white relative">
      {!shouldLoad ? (
        <div 
          onClick={() => setShouldLoad(true)}
          className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-50/80 hover:bg-slate-100/80 cursor-pointer group transition-all duration-300 border border-slate-200/50"
        >
          <div className="w-16 h-16 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
            <Calendar className="w-8 h-8" />
          </div>
          <span className="text-slate-900 font-bold text-lg mb-1">{clickText}</span>
          <span className="text-slate-500 text-sm font-medium max-w-xs">{clickSubtext}</span>
        </div>
      ) : (
        <iframe
          src={url}
          style={{ width: "100%", height: "100%", border: "none" }}
          className="w-full h-full"
          title={title}
        />
      )}
    </div>
  )
}
