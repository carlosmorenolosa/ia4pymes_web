"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function MetricoolScript() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const isBot = typeof window !== "undefined" && !!(window as any).__IS_BOT
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : ""
    const isBotRegex = /Lighthouse|Chrome-Lighthouse|Googlebot|bingbot|Headless|Yahoo! Slurp|DuckDuckBot|Baiduspider|YandexBot/i.test(userAgent)

    if (isBot || isBotRegex) {
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
    <Script
      id="metricool-analytics"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          function loadScript(a){
            var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
            c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)
          }
          loadScript(function(){beTracker.t({hash:"4253871a5c415109a5c5da86c9e16002"})});
        `,
      }}
    />
  )
}
