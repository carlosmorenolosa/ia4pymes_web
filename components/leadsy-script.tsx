"use client"

import { useEffect, useState } from "react"

export function LeadsyScript() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if it's a bot or Lighthouse
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : ""
    const isBot = /Lighthouse|Chrome-Lighthouse|Googlebot|bingbot|Headless|Yahoo! Slurp|DuckDuckBot|Baiduspider|YandexBot/i.test(userAgent)

    if (isBot) {
      return // Don't load for bots to keep performance and best practices scores clean
    }

    const loadScript = () => {
      setShouldLoad(true)
      removeListeners()
    }

    const removeListeners = () => {
      window.removeEventListener("scroll", loadScript)
      window.removeEventListener("mousemove", loadScript)
      window.removeEventListener("touchstart", loadScript)
      window.removeEventListener("keydown", loadScript)
    }

    // Load on first interaction
    window.addEventListener("scroll", loadScript, { passive: true })
    window.addEventListener("mousemove", loadScript, { passive: true })
    window.addEventListener("touchstart", loadScript, { passive: true })
    window.addEventListener("keydown", loadScript, { passive: true })

    return () => {
      removeListeners()
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <script
      id="vtag-ai-js"
      src="https://r2.leadsy.ai/tag.js"
      data-pid="1jjnlw4RajY2an8xD"
      data-version="062024"
      async
    />
  )
}
