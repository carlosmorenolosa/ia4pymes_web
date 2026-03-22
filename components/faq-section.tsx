"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const faqs = [
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
]

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
            {/* Background decorations removed for pure white theme */}

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-4">
                        Dudas Frecuentes sobre <span className="text-blue-600">IA en PYMES</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Resolvemos las preguntas más comunes sobre la implementación de Inteligencia Artificial en tu negocio.
                    </p>
                </motion.div>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <p className="text-slate-600 mb-6 font-medium">¿Tienes alguna otra duda?</p>
                    <Link
                        href="#contacto"
                        className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Agendar Consulta Gratuita
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
