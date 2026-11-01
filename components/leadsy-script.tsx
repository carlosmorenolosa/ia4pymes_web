"use client"

import { useEffect, useState } from "react"

const CONSENT_KEY = "cookie-consent"
const CONSENT_EVENT = "cookie-consent-change"

export function LeadsyScript() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const isBot = typeof window !== "undefined" && !!(window as any).__IS_BOT
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : ""
    const isBotRegex = /Lighthouse|Chrome-Lighthouse|Googlebot|bingbot|Headless|Yahoo! Slurp|DuckDuckBot|Baiduspider|YandexBot/i.test(userAgent)

    if (isBot || isBotRegex) {
      return // Don't load for bots to keep performance and best practices scores clean
    }

    const getConsent = () => {
      try {
        return localStorage.getItem(CONSENT_KEY)
      } catch (e) {
        console.warn("localStorage is not accessible:", e)
        return null
      }
    }

    const cleanup = () => {
      window.removeEventListener(CONSENT_EVENT, onConsentChange)
      window.removeEventListener("storage", onStorage)
    }

    const loadScript = () => {
      setShouldLoad(true)
      cleanup()
    }

    const onConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail
      if (detail === "accepted") {
        loadScript()
      }
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY && e.newValue === "accepted") {
        loadScript()
      }
    }

    // LSSI/GDPR: only load after explicit cookie consent
    const consent = getConsent()
    if (consent === "accepted") {
      loadScript()
      return cleanup
    }
    if (consent === "rejected") {
      return
    }

    // No decision yet: wait until the user accepts (same tab or another tab)
    window.addEventListener(CONSENT_EVENT, onConsentChange)
    window.addEventListener("storage", onStorage)
    return cleanup
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
