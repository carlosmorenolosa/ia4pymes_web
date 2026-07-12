"use client"

import { useState, useEffect } from "react"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState<"ia" | "4" | "exiting" | "done">("ia")

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("4"), 500)
    const timer2 = setTimeout(() => setStage("exiting"), 900)
    const timer3 = setTimeout(() => {
      setStage("done")
      onComplete()
    }, 1200)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-all duration-500 ease-out ${
        stage === "exiting" ? "opacity-0 scale-110 blur-md pointer-events-none" : "opacity-100"
      } ${stage === "done" ? "hidden" : ""}`}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center text-9xl font-black">
        <span
          className={`text-blue-600 tracking-tighter transition-all duration-500 ease-out absolute ${
            stage === "ia" ? "opacity-0 scale-90 blur-md" : "opacity-100 scale-100 blur-none"
          }`}
        >
          IA
        </span>
        <span
          className={`text-slate-900 tracking-tighter transition-all duration-500 ease-out absolute left-[1.8em] ${
            stage === "ia" || stage === "4" ? "opacity-0 blur-md translate-x-[-20px]" : "opacity-100 blur-none translate-x-0"
          }`}
        >
          4
        </span>
      </div>
    </div>
  )
}
