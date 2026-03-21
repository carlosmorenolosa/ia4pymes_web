"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calculator, ArrowRight, Euro, Clock, Users } from "lucide-react"

export function CostCalculator() {
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
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center md:text-left mb-12 sm:mb-16"
            >
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tighter mb-6 relative z-10">
                    ¿Cuánto <span className="text-blue-600">dinero pierdes</span><br className="hidden lg:block"/> por no automatizar?
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                    Descubre el coste real de los procesos manuales y repetitivos en tu empresa. Cada hora invertida en tareas rutinarias es margen de beneficio que dejas sobre la mesa.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* Inputs Section (Left / Top) */}
                <div className="lg:col-span-7 space-y-10 lg:pr-8">
                    
                    {/* Input: Horas a la semana */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-5"
                    >
                        <label className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-800">
                            <span className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600"><Clock className="w-5 h-5" /></span>
                                Horas a la semana por empleado
                            </span>
                            <span className="text-2xl font-black text-blue-600">{hoursPerWeek} h</span>
                        </label>
                        <div className="relative">
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={hoursPerWeek}
                                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all shadow-inner"
                            />
                        </div>
                    </motion.div>

                    {/* Input: Número de empleados */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-5"
                    >
                        <label className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-800">
                            <span className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600"><Users className="w-5 h-5" /></span>
                                Trabajadores afectados
                            </span>
                            <span className="text-2xl font-black text-indigo-600">{employees}</span>
                        </label>
                        <div className="relative">
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={employees}
                                onChange={(e) => setEmployees(Number(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-700 transition-all shadow-inner"
                            />
                        </div>
                    </motion.div>

                    {/* Input: Salario por hora */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-5"
                    >
                        <label className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-800">
                            <span className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600"><Euro className="w-5 h-5" /></span>
                                Coste por hora / empleado
                            </span>
                            <span className="text-2xl font-black text-green-600">{hourlyWage} €</span>
                        </label>
                        <div className="relative">
                            <input
                                type="range"
                                min="5"
                                max="100"
                                step="1"
                                value={hourlyWage}
                                onChange={(e) => setHourlyWage(Number(e.target.value))}
                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-700 transition-all shadow-inner"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Results Section (Right / Bottom) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="lg:col-span-5 relative"
                >
                    {/* Glow effect behind the results card */}
                    <div className="absolute inset-0 bg-blue-600/10 blur-[60px] rounded-[3rem] -z-10 transform scale-105"></div>
                    
                    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white shadow-2xl overflow-hidden relative group border border-white/10">
                        {/* Decorative background grid/lines */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform group-hover:scale-110 duration-1000"></div>

                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <h4 className="text-xl font-bold text-blue-300 mb-8 uppercase tracking-widest text-center">
                                Gasto Estimado
                            </h4>

                            <div className="space-y-8 mb-10">
                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <span className="text-slate-400 font-medium text-lg">Por semana</span>
                                    <span className="text-3xl font-bold text-white tracking-tight">{results.week.toLocaleString('es-ES')} €</span>
                                </div>

                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <span className="text-slate-400 font-medium text-lg">Por mes</span>
                                    <span className="text-4xl font-extrabold text-white tracking-tight">{results.month.toLocaleString('es-ES')} €</span>
                                </div>

                                <div className="pt-4 flex flex-col items-center">
                                    <span className="text-slate-400 font-medium text-lg mb-2">Pérdida Anual Total</span>
                                    <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-rose-600 tracking-tighter drop-shadow-lg">
                                        {results.year.toLocaleString('es-ES')} €
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-auto text-center">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="w-full"
                                >
                                    <Link
                                        href="#contacto"
                                        className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group shadow-[0_10px_20px_-5px_rgba(37,99,235,0.39)]"
                                    >
                                        Frenar estas pérdidas
                                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                                <p className="text-xs text-slate-400 mt-4 text-center">
                                    Diagnóstico 100% gratuito para analizar tu caso.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
