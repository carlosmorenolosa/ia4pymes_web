"use client"

import dynamic from "next/dynamic"

export const ThreeAnimatedChip = dynamic(
  () => import("./three-animated-chip").then((mod) => mod.ThreeAnimatedChip),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex items-center justify-center p-2 sm:p-4">
        <div className="w-[280px] h-[400px] xs:w-[320px] xs:h-[450px] sm:w-[380px] sm:h-[540px] bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(37,99,235,0.12)] border border-slate-200/80 animate-pulse" />
      </div>
    ),
  }
)
