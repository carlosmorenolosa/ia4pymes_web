"use client"

import { HomeHeader } from "./home-header"
import { HeroES } from "./hero-es"

export function HomeHeroWrapper() {
  return (
    <>
      <HomeHeader />
      <HeroES splashFinished={true} />
    </>
  )
}
