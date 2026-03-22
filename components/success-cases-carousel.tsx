'use client'

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MessageCircle, Heart, Sliders, Shield, CheckCircle } from "lucide-react"

const successCases = [
  {
    title: "Asociación de Hostelería y Turismo de Navarra",
    company: "Chatbot IA 24/7",
    description:
      "Chatbot de IA 24/7 que responde a todas las consultas de los asociados y no asociados, mejorando la comunicación y el acceso a la información.\n\n🎯 ROI Estimado: +240% | ⏱️ Ahorro: 35h semanales | 📅 Tiempo Activo: 5 meses",
    icon: MessageCircle,
    color: "green",
    benefit: "Atención 24/7 y respuestas instantáneas",
  },
  {
    title: "IA Dermatológica",
    company: "Hospital de Toledo",
    description:
      "Implementación de visión por computadora para análisis médico, demostrando cómo la IA puede asistir a profesionales de la salud en diagnósticos más precisos y eficientes.\n\n🎯 ROI Estimado: +380% | ⏱️ Ahorro: 60h semanales | 📅 Tiempo Activo: 1 año",
    icon: Heart,
    color: "blue",
    benefit: "Diagnósticos más rápidos y precisos",
  },
  {
    title: "Automatizador de Presupuestos",
    company: "Constructora CORSAM",
    description:
      "Sistema inteligente de cálculo automático para el sector construcción, eliminando errores humanos y acelerando significativamente los procesos de cotización comercial.\n\n🎯 ROI Estimado: +285% | ⏱️ Ahorro: 45h semanales | 📅 Tiempo Activo: 6 meses",
    icon: Sliders,
    color: "orange",
    benefit: "Presupuestos en minutos, no horas",
  },
  {
    title: "Chatbot de Atención al Cliente",
    company: "Viajes Rascado",
    description:
      "Asistente conversacional avanzado para el sector turismo, capaz de manejar consultas complejas y proporcionar atención personalizada las 24 horas del día.\n\n🎯 ROI Estimado: +420% | ⏱️ Ahorro: 40h semanales | 📅 Tiempo Activo: 2 años",
    icon: MessageCircle,
    color: "green",
    benefit: "Atención 24/7 sin interrupciones",
  },
  {
    title: "Predicción de Daños",
    company: "Puerto de Alicante",
    description:
      "Modelo de machine learning para logística portuaria que anticipa incidencias, optimiza recursos y reduce costes operativos mediante análisis predictivo.\n\n🎯 ROI Estimado: +490% | ⏱️ Ahorro: 90h semanales + reducción siniestros | 📅 Tiempo Activo: 2 años",
    icon: Shield,
    color: "purple",
    benefit: "Prevención proactiva de incidencias",
  },
]

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
    <div className="relative max-w-5xl mx-auto py-16 px-4">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {successCases.map((case_, index) => {
            const IconComponent = case_.icon
            return (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div 
                  className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tighter">
                        {case_.title}
                      </h3>
                      <p className="text-lg font-bold text-blue-600">
                        {case_.company}
                      </p>
                    </div>
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                        case_.color === "blue" ? "bg-blue-50 text-blue-600" :
                        case_.color === "orange" ? "bg-orange-50 text-orange-600" :
                        case_.color === "green" ? "bg-green-50 text-green-600" :
                        "bg-purple-50 text-purple-600"
                      }`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 whitespace-pre-line">
                    {case_.description}
                  </p>
                  <div className="pt-8 border-t border-slate-100 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg font-bold text-slate-900">{case_.benefit}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 w-12 h-12 bg-white border border-slate-200 shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 w-12 h-12 bg-white border border-slate-200 shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {successCases.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-blue-600 w-8" : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Ir al caso ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Case Counter */}
      <div className="text-center mt-8 text-sm text-slate-500">
        <span className="font-bold text-blue-600">{currentSlide + 1}</span> de{" "}
        <span className="font-bold">{successCases.length}</span> casos de éxito
      </div>
    </div>
  )
}