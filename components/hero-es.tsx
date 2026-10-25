"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ThreeAnimatedChip } from "./hero-chip-client"

interface HeroESProps {
  splashFinished: boolean
}

export function HeroES({ splashFinished }: HeroESProps) {
  // decided after mount: the server cannot know the user agent, and a mismatch here
  // makes React throw a hydration error instead of just swapping the visual
  const [isBot, setIsBot] = useState(false)
  useEffect(() => {
    setIsBot(!!(window as any).__IS_BOT)
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col justify-start" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-transparent pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex-col flex h-full">
        <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-120px)] flex items-center pt-24 sm:pt-32 md:pt-48 pb-16 max-w-7xl">
          <div className="w-full flex flex-col items-center">
            
            <div className="w-full max-w-4xl flex flex-col items-center text-center md:items-start md:text-left relative z-10">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900 text-balance"
              >
                <span className="block uppercase">
                  <span className="underline decoration-red-500 decoration-[5px] underline-offset-[1px] text-[1.08em]">Reduce</span> costes y{" "}
                  <span className="underline decoration-blue-600 decoration-[5px] underline-offset-[1px] text-[1.08em] text-blue-600">multiplica</span> márgenes
                </span>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-5 leading-[1.25] tracking-normal max-w-2xl">
                  <span className="block">Tu negocio no necesita más IA.</span>
                  <span className="block">Necesita mejor software<span className="text-blue-600">.</span></span>
                </span>
              </h1>

              <p 
                className="text-xl md:text-xl lg:text-[1.35rem] mb-10 text-slate-600 font-medium max-w-3xl leading-[1.5] tracking-tight text-pretty"
              >
                <strong className="font-bold text-slate-900">IA4PYMES</strong> es una empresa de desarrollo de software especializada en inteligencia artificial: diseñamos y desarrollamos software a medida, agentes de IA privados y automatizaciones de procesos para pequeñas y medianas empresas en España. <strong className="font-bold text-slate-900 border-b-2 border-blue-600/30">Calculamos el ROI de tu proyecto antes de escribir la primera línea de código</strong>.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start relative z-30"
              >
                <Link
                  href="/#consultoria"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-lg text-base font-bold transition-all text-white border-blue-600 bg-blue-600 hover:bg-blue-700 px-8 py-4 active:scale-95"
                >
                  Diseñar Hoja de Ruta
                </Link>
                <Link
                  href="/#casos-exito"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-lg text-base font-bold transition-all text-slate-700 bg-slate-50 hover:bg-slate-50 px-8 py-4 group active:scale-95"
                >
                  Explorar casos reales
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-14 flex items-center justify-center w-full perspective-[1000px]">
              <div className="w-full max-w-sm sm:max-w-md min-h-[360px]">
                {isBot ? (
                  <div className="w-full max-w-sm aspect-[380/540] bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/80 rounded-[40px] mx-auto flex items-center justify-center text-slate-600 font-semibold">
                    IA4PYMES Chatbot
                  </div>
                ) : (
                  <ThreeAnimatedChip visible={true} lang="es" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
