"use client"

import { HomeHeader } from "./home-header"
import { HeroES } from "./hero-es"

export function HomeHeroWrapper() {
  return (
    <>
      <HomeHeader splashFinished={true} />
      <HeroES splashFinished={true} />
    </>
  )
}
