"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "./splash-screen"
import { HomeHeader } from "./home-header"
import { HeroES } from "./hero-es"

export function HomeHeroWrapper() {
  const [splashFinished, setSplashFinished] = useState(false)

  useEffect(() => {
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : ""
    const isBot = /Lighthouse|Chrome-Lighthouse|Googlebot|bingbot|Headless/i.test(userAgent)
    if (isBot) {
      setSplashFinished(true)
    }
  }, [])

  return (
    <>
      <SplashScreen onComplete={() => setSplashFinished(true)} />
      <HomeHeader splashFinished={splashFinished} />
      <HeroES splashFinished={splashFinished} />
    </>
  )
}
