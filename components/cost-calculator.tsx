"use client"

import { useState, useEffect } from "react"
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
        <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100 overflow-hidden relative group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 p-8 sm:p-12">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6 shadow-sm">
                        <Calculator className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                        Calculadora de Gasto en Procesos Manuales
                    </h3>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Descubre cuánto dinero está perdiendo tu empresa al mes por no automatizar tareas repetitivas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Inputs Section */}
                    <div className="space-y-8">
                        {/* Input: Horas a la semana */}
                        <div className="space-y-4">
                            <label className="flex items-center justify-between text-sm font-semibold text-slate-700">
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-500" /> Horas a la semana por empleado
                                </span>
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-bold">{hoursPerWeek} h</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={hoursPerWeek}
                                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        {/* Input: Número de empleados */}
                        <div className="space-y-4">
                            <label className="flex items-center justify-between text-sm font-semibold text-slate-700">
                                <span className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-indigo-500" /> Trabajadores afectados
                                </span>
                                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg font-bold">{employees}</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={employees}
                                onChange={(e) => setEmployees(Number(e.target.value))}
                                className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                        {/* Input: Salario por hora */}
                        <div className="space-y-4">
                            <label className="flex items-center justify-between text-sm font-semibold text-slate-700">
                                <span className="flex items-center gap-2">
                                    <Euro className="w-4 h-4 text-green-500" /> Coste por hora / empleado (€)
                                </span>
                                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg font-bold">{hourlyWage} €</span>
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="100"
                                step="1"
                                value={hourlyWage}
                                onChange={(e) => setHourlyWage(Number(e.target.value))}
                                className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-8 border border-blue-100 shadow-inner flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-slate-800 mb-6 text-center border-b border-slate-200 pb-4">
                            Gasto Estimado
                        </h4>

                        <div className="space-y-6">
                            <div className="flex justify-between items-end border-b border-blue-100 pb-3">
                                <span className="text-slate-500 font-medium">Por Semana</span>
                                <span className="text-2xl font-bold text-slate-700">{results.week.toLocaleString('es-ES')} €</span>
                            </div>

                            <div className="flex justify-between items-end border-b border-blue-100 pb-3">
                                <span className="text-slate-500 font-medium">Por Mes</span>
                                <span className="text-3xl font-extrabold text-blue-600">{results.month.toLocaleString('es-ES')} €</span>
                            </div>

                            <div className="flex justify-between items-end pb-2">
                                <span className="text-slate-500 font-medium">Al Año</span>
                                <div className="text-right">
                                    <span className="text-4xl font-black text-red-500 drop-shadow-sm">{results.year.toLocaleString('es-ES')} €</span>
                                    <div className="text-xs text-slate-400 mt-1">Dinero que dejas de ganar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <Link
                        href="#contacto"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                        Transformar este Gasto en Beneficio
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
