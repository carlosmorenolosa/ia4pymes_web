import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ThreeAnimatedChip } from "./hero-chip-client"

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
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-slate-900 text-balance"
              >
                Software a medida para PYMES:{" "}
                <span className="underline decoration-red-500 decoration-4 underline-offset-[2px]">reduce</span> costes y{" "}
                <span className="underline decoration-blue-600 decoration-4 underline-offset-[2px]">multiplica</span> tus márgenes con IA
              </h1>

              <p 
                className="text-xl md:text-xl lg:text-[1.35rem] mb-8 text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-[1.5] tracking-tight text-pretty"
              >
                <strong className="font-bold text-slate-900">IA4PYMES</strong> es una empresa de desarrollo de software especializada en inteligencia artificial: diseñamos y desarrollamos software a medida, agentes de IA privados y automatizaciones de procesos para pequeñas y medianas empresas en España. <strong className="font-bold text-slate-900 border-b-2 border-blue-600/30">Calculamos el ROI de tu proyecto antes de escribir la primera línea de código</strong>.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 self-center lg:self-start relative z-30"
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

            <div className="flex items-center justify-center p-2 sm:p-4 order-2 lg:order-2 w-full lg:mb-12 perspective-[1000px]">
              <div className="w-full max-w-lg sm:max-w-xl min-h-[400px]">
                {isBot ? (
                  <div className="w-full max-w-sm aspect-[380/540] bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/80 rounded-[40px] mx-auto flex items-center justify-center text-slate-400 font-semibold">
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
