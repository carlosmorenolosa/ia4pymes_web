import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, Terminal } from "lucide-react"

export const metadata: Metadata = {
    title: "Intelligence Hub - I4PYMES | Vanguardia en IA para Empresas",
    description: "Análisis estratégico, noticias de frontera y casos de uso avanzados sobre Inteligencia Artificial para el sector empresarial.",
    keywords: [
        "blog inteligencia artificial",
        "automatización pymes",
        "tendencias IA 2026",
        "agentes autónomos",
        "innovación empresarial",
    ],
    openGraph: {
        title: "Intelligence Hub - I4PYMES | Vanguardia en IA",
        description: "Análisis estratégico y casos de uso avanzados sobre Inteligencia Artificial para el sector empresarial.",
        url: "https://ia4pymes.tech/blog",
        type: "website",
    },
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 selection:bg-blue-500/30">
            {/* Elegant Tech Header */}
            <header className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

                {/* Soft glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-blue-600/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors cursor-pointer group text-sm font-medium"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Volver al sistema principal
                    </Link>

                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit text-sm font-mono">
                            <Terminal className="w-4 h-4" />
                            <span>/intelligence-hub</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                            Vanguardia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Inteligente</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
                            Perspectivas técnicas, investigación operativa y análisis estratégico sobre cómo la Inteligencia Artificial está redefiniendo el tejido empresarial.
                        </p>
                    </div>
                </div>
            </header>

            {/* Posts Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    {posts.length === 0 ? (
                        <div className="text-center py-24 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <Terminal className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                            <p className="text-slate-400 font-mono text-sm">
                                [Sistema vacío] Esperando la inicialización de los primeros protocolos de datos.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="cursor-pointer block group">
                                    <article className="h-full flex flex-col bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden backdrop-blur-md hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-500">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden bg-slate-800">
                                            {post.image && (
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                                />
                                            )}
                                            {/* Subjet gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                                            <div className="absolute top-4 left-4 flex gap-2">
                                                {index === 0 && (
                                                    <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono rounded-md backdrop-blur-md">
                                                        LATEST
                                                    </span>
                                                )}
                                                <span className="px-2.5 py-1 bg-slate-950/60 text-slate-300 border border-white/10 text-xs font-medium rounded-md backdrop-blur-md">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-4">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(post.date).toLocaleDateString("es-ES", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                    })}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readingTime}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors leading-snug line-clamp-3">
                                                {post.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-light">
                                                {post.description}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                                                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                                                    Leer Documento
                                                </span>
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter / CTA Section (Elegant Tech) */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-slate-900/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />

                <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 mb-8 shadow-2xl">
                        <Sparkles className="w-8 h-8 text-blue-400" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Eleva tu infraestructura operativa
                    </h2>

                    <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                        Implementamos ecosistemas de IA a medida que devuelven a tu equipo el activo más valioso: el tiempo. Agenda una exploración técnica sin compromiso.
                    </p>

                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] cursor-pointer"
                    >
                        Iniciar Despliegue
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                        <Terminal className="w-4 h-4" />
                        <span>I4PYMES // INTELLIGENCE_HUB_2026</span>
                    </div>
                    <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                        Retornar al Core
                    </Link>
                </div>
            </footer>
        </main>
    )
}
