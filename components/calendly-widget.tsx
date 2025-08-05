"use client"

import { useEffect, useState } from "react"

export function CalendlyWidget() {
  const [isLoading, setIsLoading] = useState(true)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const loadCalendlyScript = () => {
      // Check if script already exists
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
        console.log("Calendly script loaded successfully")
        setScriptLoaded(true)
        setIsLoading(false)
      }

      script.onerror = () => {
        console.error("Failed to load Calendly script")
        // Retry loading after 2 seconds
        setTimeout(() => {
          loadCalendlyScript()
        }, 2000)
      }

      document.head.appendChild(script)
    }

    // Load immediately
    loadCalendlyScript()

    // Set a timeout to hide loading after 10 seconds even if script doesn't load
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // Additional effect to handle widget visibility
  useEffect(() => {
    if (scriptLoaded && !isLoading) {
      // Small delay to ensure Calendly widget is fully rendered
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
    <div className="max-w-5xl mx-auto">
      <div className="bg-white p-3 sm:p-4 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-4 right-4 w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-6 sm:top-8 right-6 sm:right-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        ></div>

        {/* Calendly Widget Container with Loading State */}
        <div className="relative">
          {/* Loading placeholder */}
          {isLoading && (
            <div
              id="calendly-loading"
              className="flex items-center justify-center h-[600px] bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl animate-pulse border border-gray-100"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 rounded-full mx-auto animate-ping"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Cargando tu calendario personalizado</h3>
                <p className="text-sm text-gray-600 mb-4">Preparando tu consulta gratuita de 30 minutos</p>
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Actual Calendly Widget */}
          <div
            className="calendly-inline-widget relative z-10 transition-opacity duration-500"
            data-url="https://calendly.com/ia4pymes/30min"
            style={{
              minWidth: "280px",
              height: "600px",
              display: isLoading ? "none" : "block",
              opacity: isLoading ? 0 : 1,
            }}
            title="Agendar consulta gratuita con I4PYMES"
          ></div>
        </div>
      </div>
    </div>
  )
}
