"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const i18n = {
  es: {
    heading: "Dudas Frecuentes sobre",
    headingHighlight: "IA en PYMES",
    subtitle: "Resolvemos las preguntas más comunes sobre la implementación de Inteligencia Artificial en tu negocio.",
    ctaQuestion: "¿Tienes alguna otra duda?",
    ctaButton: "Reservar Consultoría",
    ctaHref: "/#consultoria",
    faqs: [
      {
        question: "¿Es útil esta solución para mi sector?",
        answer: "La clave no es a qué te dedicas, sino qué procesos lentos o ineficientes tienes. Si hay tareas repetitivas en tu negocio, podemos optimizarlas.",
      },
      {
        question: "¿Tengo que cambiar los programas que ya utilizo?",
        answer: "Para nada. Adaptamos la IA a tu forma de trabajar actual, integrándola en tus sistemas de siempre sin cortes operativos ni migraciones dolorosas.",
      },
      {
        question: "¿Mis empleados necesitan entender de Inteligencia Artificial?",
        answer: "Cero. Al ser proyectos a medida, me encargo de explicarles todo el funcionamiento de viva voz, paso a paso y de forma muy clara para que lo manejen sin problema.",
      },
      {
        question: "¿Qué pasa si la inversión no sale a cuenta?",
        answer: "Antes de crear nada, trazamos un mapa de ruta para calcular el retorno de inversión esperado. Si vemos que los números no te benefician, simplemente no avanzamos.",
      },
      {
        question: "¿Están a salvo los datos de mi empresa?",
        answer: "Por supuesto. Cumplimos con el RGPD, firmamos un acuerdo de confidencialidad y tu información jamás se usa para entrenar modelos de IA públicos.",
      },
      {
        question: "¿Cuáles son los plazos de entrega?",
        answer: "El diagnóstico inicial nos toma unas 2 o 3 semanas. Después, el desarrollo y la puesta en marcha de los sistemas dura entre 1 y 4 meses.",
      },
    ],
  },
  en: {
    heading: "Frequently Asked Questions about",
    headingHighlight: "AI for SMEs",
    subtitle: "We answer the most common questions about implementing Artificial Intelligence in your business.",
    ctaQuestion: "Have any other questions?",
    ctaButton: "Book Consultation",
    ctaHref: "/en#consultoria",
    faqs: [
      {
        question: "Is this solution useful for my industry?",
        answer: "The key is not what you do, but what slow or inefficient processes you have. If there are repetitive tasks in your business, we can optimize them.",
      },
      {
        question: "Do I have to change the software I already use?",
        answer: "Not at all. We adapt the AI to your current way of working, integrating it into your existing systems without operational disruptions or painful migrations.",
      },
      {
        question: "Do my employees need to understand Artificial Intelligence?",
        answer: "Zero. Since these are custom projects, we take care of explaining everything step by step, clearly and in person, so they can handle it without any issues.",
      },
      {
        question: "What if the investment doesn't pay off?",
        answer: "Before creating anything, we map out a roadmap to calculate the expected return on investment. If we see the numbers don't benefit you, we simply don't proceed.",
      },
      {
        question: "Is my company's data safe?",
        answer: "Absolutely. We comply with GDPR, sign a confidentiality agreement, and your information is never used to train public AI models.",
      },
      {
        question: "What are the delivery timelines?",
        answer: "The initial diagnosis takes about 2 to 3 weeks. After that, development and deployment of the systems takes between 1 and 4 months.",
      },
    ],
  },
}

export function FaqSection({ lang = "es" }: { lang?: "es" | "en" }) {
    const t = i18n[lang]
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-4">
                        {t.heading} <span className="text-blue-600">{t.headingHighlight}</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    {t.faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-blue-600 shadow-md" : "border-slate-200 hover:border-blue-200 hover:shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-semibold text-lg sm:text-xl pr-8 ${isOpen ? "text-blue-600" : "text-slate-800"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                                        }`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-slate-600 leading-relaxed text-base sm:text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-slate-600 mb-6 font-medium">{t.ctaQuestion}</p>
                    <Link
                        href={t.ctaHref}
                        onClick={(e) => {
                            const target = document.getElementById("consultoria") || document.getElementById("consulting")
                            if (target) {
                                e.preventDefault()
                                target.scrollIntoView({ behavior: "smooth" })
                                window.history.pushState(null, "", t.ctaHref)
                            }
                        }}
                        className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                        {t.ctaButton}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

