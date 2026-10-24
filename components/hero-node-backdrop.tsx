"use client"

import dynamic from "next/dynamic"

const NodeSystem = dynamic(() => import("./node-system"), {
  ssr: false,
  loading: () => null,
})

/**
 * Client boundary for the hero WebGL scene. Kept separate so the hero markup
 * stays a server component and the canvas never blocks the first paint.
 */
export function HeroNodeBackdrop({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <NodeSystem />
    </div>
  )
}
