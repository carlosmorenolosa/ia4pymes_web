"use client"

import { useState } from "react"
import { SplashScreen } from "./splash-screen"
import { HomeHeader } from "./home-header"
import { HeroES } from "./hero-es"

export function HomeHeroWrapper() {
  const [splashFinished, setSplashFinished] = useState(false)

  return (
    <>
      <SplashScreen onComplete={() => setSplashFinished(true)} />
      <HomeHeader splashFinished={splashFinished} />
      <HeroES splashFinished={splashFinished} />
    </>
  )
}
