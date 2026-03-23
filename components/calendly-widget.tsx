"use client"

import { useEffect, useState, useRef } from "react"

export function CalendlyWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Lazy load - only load when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" } // Start loading 200px before visible
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Load Calendly script only when visible
  useEffect(() => {
    if (!isVisible) return

    const loadCalendlyScript = () => {
      if (document.querySelector('script[src*="calendly.com"]')) {
        setScriptLoaded(true)
        setIsLoading(false)
        return
      }

      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.defer = true

      script.onload = () => {
        setScriptLoaded(true)
        setIsLoading(false)
      }

      script.onerror = () => {
        setTimeout(loadCalendlyScript, 2000)
      }

      document.head.appendChild(script)
    }

    loadCalendlyScript()

    const timeout = setTimeout(() => setIsLoading(false), 10000)
    return () => clearTimeout(timeout)
  }, [isVisible])

  useEffect(() => {
    if (scriptLoaded && !isLoading) {
      const timer = setTimeout(() => {
        const widget = document.querySelector(".calendly-inline-widget") as HTMLElement
        const loading = document.getElementById("calendly-loading") as HTMLElement
        if (widget && loading) {
          loading.style.display = "none"
          widget.style.display = "block"
        }
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [scriptLoaded, isLoading])

  return (
    <div
      ref={containerRef}
      className="max-w-5xl mx-auto"
      onMouseEnter={() => document.body.classList.add("calendly-hover")}
      onMouseLeave={() => document.body.classList.remove("calendly-hover")}
    >
      <div className="bg-white p-3 sm:p-4 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-2 bg-blue-600"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-4 right-4 w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse"
          aria-hidden="true"
        ></div>

        <div className="relative">
          {(isLoading || !isVisible) && (
            <div
              id="calendly-loading"
              className="flex items-center justify-center h-[600px] bg-gradient-to-br from-white to-blue-50/20 rounded-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Cargando calendario</h3>
                <p className="text-sm text-gray-600">Preparando tu consulta gratuita</p>
              </div>
            </div>
          )}

          {isVisible && (
            <div
              className="calendly-inline-widget relative z-10 transition-opacity duration-500"
              data-url="https://calendly.com/ia4pymes/30min"
              style={{
                minWidth: "280px",
                height: "600px",
                display: isLoading ? "none" : "block",
                opacity: isLoading ? 0 : 1,
              }}
              title="Agendar consulta gratuita con IA4PYMES"
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}
