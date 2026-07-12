"use client"

import { useState, useEffect } from "react"
import { m } from "framer-motion"
import Link from "next/link"
import { Calculator, ArrowRight, Euro, Clock, Users } from "lucide-react"

const i18n = {
  es: {
    heading: "¿Cuánto",
    headingHighlight: "dinero pierdes",
    headingSuffix: "por no automatizar?",
    subtitle: "Descubre el coste real de los procesos manuales y repetitivos en tu empresa. Cada hora invertida en tareas rutinarias es margen de beneficio que dejas sobre la mesa.",
    labelHours: "Horas a la semana por empleado",
    labelEmployees: "Trabajadores afectados",
    labelWage: "Coste por hora / empleado",
    cardTitle: "Gasto Estimado",
    weekly: "Semanal",
    monthly: "Mensual",
    yearlyLabel: "Pérdida Anual Total",
    ctaButton: "Frenar Pérdidas",
    ctaHref: "/#consultoria",
    locale: "es-ES",
  },
  en: {
    heading: "How much",
    headingHighlight: "money are you losing",
    headingSuffix: "by not automating?",
    subtitle: "Discover the real cost of manual and repetitive processes in your company. Every hour spent on routine tasks is profit margin left on the table.",
    labelHours: "Hours per week per employee",
    labelEmployees: "Affected employees",
    labelWage: "Cost per hour / employee",
    cardTitle: "Estimated Cost",
    weekly: "Weekly",
    monthly: "Monthly",
    yearlyLabel: "Total Annual Loss",
    ctaButton: "Stop the Losses",
    ctaHref: "/en#consultoria",
    locale: "en-US",
  },
}

export function CostCalculator({ lang = "es" }: { lang?: "es" | "en" }) {
    const t = i18n[lang]
    const [hoursPerWeek, setHoursPerWeek] = useState<number>(10)
    const [employees, setEmployees] = useState<number>(1)
    const [hourlyWage, setHourlyWage] = useState<number>(15)
    const [results, setResults] = useState({ week: 0, month: 0, year: 0 })

    useEffect(() => {
        const weeklyCost = hoursPerWeek * employees * hourlyWage
        const monthlyCost = weeklyCost * 4.33 // Promedio de semanas en un mes
        const yearlyCost = weeklyCost * 52

        setResults({
            week: Math.round(weeklyCost),
            month: Math.round(monthlyCost),
            year: Math.round(yearlyCost)
        })
    }, [hoursPerWeek, employees, hourlyWage])

    return (
        <div className="w-full relative">
            <m.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center md:text-left mb-12 sm:mb-16"
            >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-6 relative z-10">
                    {t.heading} <span className="text-blue-600">{t.headingHighlight}</span><br className="hidden lg:block"/>{" "}{t.headingSuffix}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                    {t.subtitle}
                </p>
            </m.div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* Inputs Section (Left / Top) */}
                <div className="lg:col-span-7 space-y-10 lg:pr-8">
                    
                    {/* Input: Horas a la semana */}
                    <m.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-5"
                    >
                        <label htmlFor="hours-range" className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-800">
                            <span className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600"><Clock className="w-5 h-5" /></span>
                                {t.labelHours}
                            </span>
                            <span className="text-2xl font-black text-blue-600">{hoursPerWeek} h</span>
                        </label>
                        <div className="relative">
                            <input
                                id="hours-range"
                                type="range"
                                min="1"
                                max="40"
                                value={hoursPerWeek}
                                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                aria-label={t.labelHours}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all shadow-inner"
                            />
                        </div>
                    </m.div>

                    {/* Input: Número de empleados */}
                    <m.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-5"
                    >
                        <label htmlFor="employees-range" className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-800">
                            <span className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600"><Users className="w-5 h-5" /></span>
                                {t.labelEmployees}
                            </span>
                            <span className="text-2xl font-black text-blue-600">{employees}</span>
                        </label>
                        <div className="relative">
                            <input
                                id="employees-range"
                                type="range"
                                min="1"
                                max="50"
                                value={employees}
                                onChange={(e) => setEmployees(Number(e.target.value))}
                                aria-label={t.labelEmployees}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all shadow-inner"
                            />
                        </div>
                    </m.div>

                    {/* Input: Salario por hora */}
                    <m.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-5"
                    >
                        <label htmlFor="wage-range" className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-800">
                            <span className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600"><Euro className="w-5 h-5" /></span>
                                {t.labelWage}
                            </span>
                            <span className="text-2xl font-black text-green-600">{hourlyWage} €</span>
                        </label>
                        <div className="relative">
                            <input
                                id="wage-range"
                                type="range"
                                min="5"
                                max="100"
                                step="1"
                                value={hourlyWage}
                                onChange={(e) => setHourlyWage(Number(e.target.value))}
                                aria-label={t.labelWage}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-700 transition-all shadow-inner"
                            />
                        </div>
                    </m.div>

                </div>

                {/* Results Section (Right / Bottom) */}
                <m.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="lg:col-span-5 relative flex items-center justify-center p-4 lg:p-8"
                >
                    {/* 3D Perspective Wrapper */}
                    <div 
                        className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4]"
                        style={{ perspective: "2000px" }}
                    >
                        {/* 3D Object Container */}
                        <div 
                            className="w-full h-full relative transition-transform duration-1000 ease-out"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "rotateY(-12deg) rotateX(6deg) rotateZ(-1deg)",
                            }}
                        >
                            {/* Floor Shadow */}
                            <div 
                                className="absolute inset-0 bg-blue-900/10 blur-[40px] rounded-[40px] pointer-events-none"
                                style={{ transform: "translateZ(-50px) translateY(30px) translateX(-15px)" }}
                            ></div>

                            {/* 3D Extrusion Layers */}
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 rounded-[40px] pointer-events-none ${
                                        i === 0 ? "bg-slate-200" : "bg-white/80 border border-slate-200/30"
                                    }`}
                                    style={{ transform: `translateZ(${-i * 2}px)` }}
                                ></div>
                            ))}

                            {/* Main Display Face */}
                            <div 
                                className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-[40px] shadow-sm flex flex-col overflow-hidden border border-white p-8 sm:p-10"
                                style={{ transform: "translateZ(1px)" }}
                            >
                                {/* Decorative internal glow */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
                                
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="text-center mb-6">
                                        <h4 className="text-sm font-black text-blue-600 mb-1 uppercase tracking-[0.2em]">
                                            {t.cardTitle}
                                        </h4>
                                        <div className="w-12 h-1 bg-blue-100 mx-auto rounded-full"></div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                            <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">{t.weekly}</span>
                                            <span className="text-2xl font-black text-rose-500/80 tracking-tight">{results.week.toLocaleString(t.locale)} €</span>
                                        </div>

                                        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                            <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">{t.monthly}</span>
                                            <span className="text-3xl font-black text-rose-500/90 tracking-tight">{results.month.toLocaleString(t.locale)} €</span>
                                        </div>

                                        <div className="pt-2 flex flex-col items-center">
                                            <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.15em] mb-3">{t.yearlyLabel}</span>
                                            <div className="relative">
                                                <span className="text-5xl sm:text-6xl font-black text-red-600 tracking-tighter drop-shadow-sm">
                                                    {results.year.toLocaleString(t.locale)} €
                                                </span>
                                                {/* Underline accent */}
                                                <m.div 
                                                    className="absolute -bottom-2 left-0 right-0 h-2 bg-red-500/20 rounded-full blur-[1px]"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1, delay: 0.8 }}
                                                ></m.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Area */}
                                    <div className="mt-8">
                                        <m.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full"
                                        >
                                            <Link
                                                href={t.ctaHref}
                                                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 group shadow-[0_12px_24px_-8px_rgba(37,99,235,0.4)]"
                                            >
                                                {t.ctaButton}
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </m.div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Reflection layer */}
                            <div 
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-[40px] pointer-events-none"
                                style={{ transform: "translateZ(2px)" }}
                            ></div>
                        </div>
                    </div>
                </m.div>
            </div>
        </div>
    )
}
