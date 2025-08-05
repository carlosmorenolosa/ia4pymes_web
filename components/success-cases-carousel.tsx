"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Heart, Sliders, MessageCircle, Shield, CheckCircle } from "lucide-react"

const successCases = [
  {
    title: "IA Dermatológica",
    company: "Hospital de Toledo",
    description:
      "Implementación de visión por computadora para análisis médico, demostrando cómo la IA puede asistir a profesionales de la salud en diagnósticos más precisos y eficientes.",
    icon: Heart,
    color: "blue",
    benefit: "Diagnósticos más rápidos y precisos",
  },
  {
    title: "Automatizador de Presupuestos",
    company: "Constructora CORSAM",
    description:
      "Sistema inteligente de cálculo automático para el sector construcción, eliminando errores humanos y acelerando significativamente los procesos de cotización comercial.",
    icon: Sliders,
    color: "orange",
    benefit: "Presupuestos en minutos, no horas",
  },
  {
    title: "Chatbot de Atención al Cliente",
    company: "Viajes Rascado",
    description:
      "Asistente conversacional avanzado para el sector turismo, capaz de manejar consultas complejas y proporcionar atención personalizada las 24 horas del día.",
    icon: MessageCircle,
    color: "green",
    benefit: "Atención 24/7 sin interrupciones",
  },
  {
    title: "Predicción de Daños",
    company: "Puerto de Alicante",
    description:
      "Modelo de machine learning para logística portuaria que anticipa incidencias, optimiza recursos y reduce costes operativos mediante análisis predictivo.",
    icon: Shield,
    color: "purple",
    benefit: "Prevención proactiva de incidencias",
  },
]

// 3D Tilt Card Component
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20 // Reducido de /10 a /20 para ser más sutil
    const rotateY = (centerX - x) / 20 // Reducido de /10 a /20 para ser más sutil
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)` // Reducido translateZ de 20px a 10px
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  }

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-500 ease-out ${className}`} // Cambiado de duration-300 a duration-500
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}

export const SuccessCasesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % successCases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % successCases.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + successCases.length) % successCases.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  return (
    <div className="relative max-w-5xl mx-auto py-16 px-8" style={{ zIndex: 100 }}>
      <div className="relative" style={{ zIndex: 100 }}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {successCases.map((case_, index) => {
            const IconComponent = case_.icon
            return (
              <div key={index} className="w-full flex-shrink-0 px-8 sm:px-12">
                <div className="mx-auto max-w-3xl" style={{ zIndex: 1000 }}>
                  <TiltCard className="relative" style={{ zIndex: 1000 }}>
                    <div
                      className="flex flex-col p-8 sm:p-10 lg:p-12 rounded-3xl h-full text-left bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group relative"
                      style={{
                        zIndex: 1000,
                        position: "relative",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 50%, rgba(255,255,255,0.95) 100%)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        isolation: "isolate",
                      }}
                    >
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none ${
                          case_.color === "blue"
                            ? "shadow-[0_0_60px_rgba(59,130,246,0.3)] border-2 border-blue-400/50"
                            : case_.color === "orange"
                              ? "shadow-[0_0_60px_rgba(249,115,22,0.3)] border-2 border-orange-400/50"
                              : case_.color === "green"
                                ? "shadow-[0_0_60px_rgba(34,197,94,0.3)] border-2 border-green-400/50"
                                : "shadow-[0_0_60px_rgba(147,51,234,0.3)] border-2 border-purple-400/50"
                        }`}
                        style={{ zIndex: -1 }}
                      ></div>
                      {/* Animated background gradient */}
                      <div
                        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-500 ${
                          case_.color === "blue"
                            ? "bg-gradient-to-br from-blue-100 via-blue-50 to-transparent"
                            : case_.color === "orange"
                              ? "bg-gradient-to-br from-orange-100 via-orange-50 to-transparent"
                              : case_.color === "green"
                                ? "bg-gradient-to-br from-green-100 via-green-50 to-transparent"
                                : "bg-gradient-to-br from-purple-100 via-purple-50 to-transparent"
                        }`}
                        style={{ zIndex: -1 }}
                      ></div>
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-6 relative z-10 gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 break-words group-hover:text-slate-900 transition-colors duration-300">
                            {case_.title}
                          </h3>
                          <p className="text-lg sm:text-xl font-semibold text-slate-600 break-words group-hover:text-slate-700 transition-colors duration-300">
                            {case_.company}
                          </p>
                        </div>
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 backdrop-blur-sm border rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-all duration-500 group-hover:scale-125 ${
                            case_.color === "blue"
                              ? "text-blue-600 bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40"
                              : case_.color === "orange"
                                ? "text-orange-600 bg-orange-500/10 border-orange-500/20 group-hover:bg-orange-500/20 group-hover:border-orange-500/40"
                                : case_.color === "green"
                                  ? "text-green-600 bg-green-500/10 border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/40"
                                  : "text-purple-600 bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40"
                          }`}
                        >
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-grow mb-6 sm:mb-8 text-base sm:text-lg relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                        {case_.description}
                      </p>
                      <div className="mt-auto pt-6 sm:pt-8 border-t border-gray-200/80 relative z-10 group-hover:border-gray-300/80 transition-colors duration-300">
                        <div className="flex items-center gap-3">
                          <CheckCircle
                            className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-all duration-500 group-hover:scale-110 ${
                              case_.color === "blue"
                                ? "text-blue-600 group-hover:text-blue-700"
                                : case_.color === "orange"
                                  ? "text-orange-600 group-hover:text-orange-700"
                                  : case_.color === "green"
                                    ? "text-green-600 group-hover:text-green-700"
                                    : "text-purple-600 group-hover:text-purple-700"
                            }`}
                          />
                          <p className="text-base sm:text-lg font-semibold text-slate-700 break-words group-hover:text-slate-800 transition-colors duration-300">
                            {case_.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 xl:-left-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm shadow-2xl rounded-full hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-3xl border border-gray-200/50"
        style={{ zIndex: 1001 }}
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-0 xl:-right-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm shadow-2xl rounded-full hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-3xl border border-gray-200/50"
        style={{ zIndex: 1001 }}
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </button>
      {/* Dot Navigation */}
      <div className="flex justify-center mt-8 gap-3" style={{ zIndex: 1001 }}>
        {successCases.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide ? "bg-blue-600 shadow-lg scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
      {/* Progress Bar */}
      <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden" style={{ zIndex: 1001 }}>
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / successCases.length) * 100}%` }}
        />
      </div>
      {/* Case Counter */}
      <div className="text-center mt-4 text-sm text-gray-600" style={{ zIndex: 1001 }}>
        <span className="font-semibold text-blue-600">{currentSlide + 1}</span> de{" "}
        <span className="font-semibold">{successCases.length}</span> casos de éxito
      </div>
    </div>
  )
}
