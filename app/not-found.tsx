"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Animated 404 */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="mb-8"
                >
                    <h1 className="text-[150px] sm:text-[200px] font-black leading-none">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            404
                        </span>
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4">
                        ¡Ups! Página no encontrada
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                        Parece que esta página se ha perdido en el ciberespacio.
                        Pero no te preocupes, podemos ayudarte a encontrar lo que buscas.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <Home className="w-5 h-5" />
                        Volver al Inicio
                    </Link>

                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300"
                    >
                        <Sparkles className="w-5 h-5" />
                        Contactar con IA
                    </Link>
                </motion.div>

                {/* Helpful links */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-12 pt-8 border-t border-slate-200"
                >
                    <p className="text-slate-500 mb-4">Enlaces útiles:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/#proceso" className="text-indigo-600 hover:underline">
                            Nuestro Proceso
                        </Link>
                        <Link href="/#casos-exito" className="text-indigo-600 hover:underline">
                            Casos de Éxito
                        </Link>
                        <Link href="/#beneficios" className="text-indigo-600 hover:underline">
                            Beneficios
                        </Link>
                        <Link href="/#contacto" className="text-indigo-600 hover:underline">
                            Contacto
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
