"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ThreeAnimatedChip } from "./three-animated-chip"

interface HeroESProps {
  splashFinished: boolean
}

function checkIsBot() {
  if (typeof window === "undefined") return false
  return !!(window as any).__IS_BOT
}

export function HeroES({ splashFinished }: HeroESProps) {
  const isBot = checkIsBot()

  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col justify-start" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-transparent pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex-col flex h-full">
        <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-120px)] flex items-center pt-24 md:pt-32 pb-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            
            <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-1 relative z-10">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-slate-900 drop-shadow-sm text-balance"
              >
                Reduce Costes Operativos y Multiplica tus Márgenes con <span className="text-blue-600">IA para PYMES</span>
              </h1>

              <p 
                className="text-lg md:text-xl lg:text-[1.35rem] mb-8 text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-[1.5] tracking-tight text-pretty"
              >
                <strong className="font-bold text-slate-900">IA4PYMES</strong> es la consultora y agencia líder en España especializada en automatización de procesos, agentes de IA privados e integración de sistemas para pequeñas y medianas empresas. <strong className="font-bold text-slate-900 border-b-2 border-blue-600/30">+360% ROI medio y +1.000h ahorradas al mes</strong>.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 self-center lg:self-start relative z-30"
              >
                <Link
                  href="/#consultoria"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4 active:scale-95"
                >
                  Diseñar Hoja de Ruta
                </Link>
                <Link
                  href="#casos-exito"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 shadow-sm px-8 py-4 group active:scale-95"
                >
                  Explorar casos reales
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center p-2 sm:p-4 order-2 lg:order-2 w-full lg:mb-12 perspective-[1000px]">
              <div className="w-full max-w-lg sm:max-w-xl min-h-[400px]">
                {isBot ? (
                  <div className="w-full max-w-sm aspect-[380/540] bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/80 rounded-[40px] shadow-sm mx-auto flex items-center justify-center text-slate-400 font-semibold">
                    IA4PYMES Chatbot
                  </div>
                ) : (
                  <ThreeAnimatedChip visible={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
