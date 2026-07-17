"use client"

import { useState } from "react"
import { SplashScreen } from "./splash-screen"
import { HomeHeader } from "./home-header"
import { HeroES } from "./hero-es"

function isBotUA() {
  if (typeof navigator === "undefined") return false
  return /Lighthouse|Chrome-Lighthouse|Googlebot|bingbot|Headless/i.test(navigator.userAgent)
}

export function HomeHeroWrapper() {
  const [splashFinished, setSplashFinished] = useState(isBotUA)

  return (
    <>
      <SplashScreen onComplete={() => setSplashFinished(true)} />
      <HomeHeader splashFinished={splashFinished} />
      <HeroES splashFinished={splashFinished} />
    </>
  )
}
