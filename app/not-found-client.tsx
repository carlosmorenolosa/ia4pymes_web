"use client"

import Link from "next/link"
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react"

export function NotFoundClient() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Animated 404 */}
                <div className="mb-8 animate-bounce-in">
                    <h1 className="text-[150px] sm:text-[200px] font-black leading-none">
                        <span className="text-blue-600">
                             404
                         </span>
                    </h1>
                </div>

                {/* Message */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4">
                        ¡Ups! Página no encontrada
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                        Parece que esta página se ha perdido en el ciberespacio.
                        Pero no te preocupes, podemos ayudarte a encontrar lo que buscas.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <Home className="w-5 h-5" />
                        Volver al Inicio
                    </Link>

                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-200 hover:text-blue-600 transition-all duration-300"
                    >
                        <Sparkles className="w-5 h-5" />
                        Contactar con IA
                    </Link>
                </div>

                {/* Helpful links */}
                <div className="mt-12 pt-8 border-t border-slate-200 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                    <p className="text-slate-500 mb-4">Enlaces útiles:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/#proceso" className="text-blue-600 hover:underline">
                            Nuestro Proceso
                        </Link>
                        <Link href="/#casos-exito" className="text-blue-600 hover:underline">
                            Casos de Éxito
                        </Link>
                        <Link href="/#beneficios" className="text-blue-600 hover:underline">
                            Beneficios
                        </Link>
                        <Link href="/#contacto" className="text-blue-600 hover:underline">
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
