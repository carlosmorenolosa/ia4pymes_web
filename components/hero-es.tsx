"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedChip } from "./home-dynamic-imports"

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
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-6 text-slate-900 drop-shadow-sm"
              >
                Soluciones de <span className="text-blue-600">IA para PYMES</span> <br className="hidden md:block" />
                que reducen costes y <br className="hidden md:block" />
                multiplican tus <span className="text-blue-600">márgenes</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                className="text-lg md:text-xl lg:text-[1.35rem] mb-8 text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-[1.5] tracking-tight text-pretty"
              >
                Somos una agencia especializada en automatización e <strong className="font-bold text-slate-900">Inteligencia Artificial para PYMES</strong> en España. <strong className="font-bold text-slate-900 border-b-2 border-blue-600/30">Resultados tangibles y ROI garantizado</strong> avalan nuestro impacto real mediante soluciones a medida.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={splashFinished ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 self-center lg:self-start relative z-30"
              >
                <Link
                  href="/#consultoria"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4"
                >
                  Diseñar Hoja de Ruta
                </Link>
                <Link
                  href="#casos-exito"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 shadow-sm px-8 py-4 group"
                >
                  Explorar casos reales
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5, filter: "blur(10px)" }}
              animate={splashFinished ? { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" } : { opacity: 0, scale: 0.9, rotate: 5, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="flex items-center justify-center p-2 sm:p-4 order-2 lg:order-2 w-full lg:mb-12 perspective-[1000px]"
            >
              <div className="w-full max-w-lg sm:max-w-xl min-h-[400px]">
                {splashFinished && (
                  isBot ? (
                    <div className="w-full max-w-sm aspect-[380/540] bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/80 rounded-[40px] shadow-sm mx-auto flex items-center justify-center text-slate-400 font-semibold">
                      IA4PYMES Chatbot
                    </div>
                  ) : (
                    <AnimatedChip visible={splashFinished} />
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
