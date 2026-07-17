"use client"

import { useState } from "react"
import { SplashScreen } from "./splash-screen"
import { HomeHeader } from "./home-header"
import { HeroES } from "./hero-es"

function checkIsBot() {
  if (typeof window === "undefined") return false
  return !!(window as any).__IS_BOT
}

export function HomeHeroWrapper() {
  const [splashFinished, setSplashFinished] = useState(checkIsBot)

  return (
    <>
      <SplashScreen onComplete={() => setSplashFinished(true)} />
      <HomeHeader splashFinished={splashFinished} />
      <HeroES splashFinished={splashFinished} />
    </>
  )
}
