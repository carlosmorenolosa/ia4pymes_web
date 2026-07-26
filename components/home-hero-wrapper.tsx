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
  return (
    <>
      <HomeHeader splashFinished={true} />
      <HeroES splashFinished={true} />
    </>
  )
}
