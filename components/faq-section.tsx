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
        question: "¿Qué es IA4PYMES?",
        answer:
          "IA4PYMES es una empresa de desarrollo de software especializada en inteligencia artificial para PYMES. Diseñamos y desarrollamos software a medida, agentes de IA privados y automatizaciones de procesos que reducen costes operativos y aumentan márgenes. Calculamos el ROI esperado de cada proyecto antes de desarrollar: si los números no salen, no avanzamos.",
      },
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
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-20 sm:py-28 relative" aria-labelledby="faq-heading">
            <div className="container mx-auto px-5 sm:px-8 max-w-[1360px]">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <h2
                        id="faq-heading"
                        className="lg:col-span-4 text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
                    >
                        {t.heading} <span className="text-signal">{t.headingHighlight}</span>
                    </h2>

                    <div className="lg:col-span-8 w-full border-t border-line">
                        {t.faqs.map((faq, index) => {
                            const isOpen = openIndex === index
                            return (
                                <div key={index} className="border-b border-line">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left py-5 sm:py-6 flex items-start justify-between gap-8 group focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
                                        aria-expanded={isOpen}
                                    >
                                        <span
                                            className={`text-lg sm:text-xl font-semibold tracking-[-0.02em] transition-colors ${
                                                isOpen ? "text-signal" : "text-ink group-hover:text-signal"
                                            }`}
                                        >
                                            {faq.question}
                                        </span>
                                        <span className="shrink-0 pt-1 text-ink-faint" aria-hidden="true">
                                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pb-6 pr-8 max-w-[62ch] text-ink-soft leading-[1.65] text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
