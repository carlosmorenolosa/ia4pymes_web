"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles, Terminal, BookOpenText } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useEffect, useState } from "react"
import { use } from "react"

// Mover exportaciones de lado del servidor a un archivo layout o manejar client-side hydration
// Por simplicidad en esta demo, lo mantendremos como client component para la progress bar.
// En producción, extraer la progress bar a un componente aparte.

interface PageProps {
    params: Promise<{ slug: string }>
}

export default function BlogPostPage({ params }: PageProps) {
    const { slug } = use(params)
    const post = getPostBySlug(slug)
    const [readingProgress, setReadingProgress] = useState(0)

    useEffect(() => {
        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setReadingProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    if (!post) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white selection:bg-blue-500/30">
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 transition-all duration-150 ease-out"
                style={{ width: \`\${readingProgress}%\` }}
            />

            {/* Hero Header Inmersivo (Tech Dark) */}
            <header className="relative bg-slate-950 text-white min-h-[70vh] flex flex-col justify-end pb-16 pt-32 overflow-hidden border-b border-white/5">
                {/* Background Image with Overlay */}
                {post.image && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover opacity-30 mix-blend-luminosity"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                    </div>
                )}

                <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                    {/* Navigation */}
                    <nav className="mb-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all cursor-pointer group text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Retornar al sistema
                        </Link>
                    </nav>

                    {/* Meta badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono rounded-md">
                            <Terminal className="w-3.5 h-3.5" />
                            {post.category}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime} ETA
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-lg">
                        {post.title}
                    </h1>

                    {/* Author & Date Card */}
                    <div className="inline-flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="font-bold text-white text-lg leading-none">I4</span>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-200 text-sm">{post.author}</p>
                                <p className="text-xs text-slate-400 font-mono">Research Team</p>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-mono">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            {new Date(post.date).toLocaleDateString("es-ES", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                        </div>
                    </div>
                </div>
            </header>

            {/* Reading Area - Clean, High Contrast for long sessions */}
            <article className="py-16 sm:py-24 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-[800px]">
                    {/* Contenedor principal con estilos de lectura impecables */}
                    <div className="blog-article-content prose prose-lg md:prose-xl prose-slate max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                table: ({ children }) => (
                                    <div className="my-10 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                                        <table className="w-full text-left border-collapse text-base">
                                            {children}
                                        </table>
                                    </div>
                                ),
                                thead: ({ children }) => (
                                    <thead className="bg-slate-50 border-b border-slate-200">
                                        {children}
                                    </thead>
                                ),
                                th: ({ children }) => (
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-600 uppercase tracking-wider">
                                        {children}
                                    </th>
                                ),
                                td: ({ children }) => (
                                    <td className="px-6 py-4 border-b border-slate-100 text-slate-700">
                                        {children}
                                    </td>
                                ),
                                tr: ({ children }) => (
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        {children}
                                    </tr>
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>

            {/* Tech CTA Section - Dark & Premium */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs font-mono text-blue-400 mb-8 mx-auto">
                        <Terminal className="w-3.5 h-3.5" />
                        initiating_deployment...
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
                        Pasa de la teoría a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">ejecución</span>
                    </h2>

                    <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                        El conocimiento sin implementación técnica es solo entretenimiento. Auditamos los procesos de tu empresa para integrar arquitecturas de IA que escalan tu productividad de forma empírica.
                    </p>

                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer"
                    >
                        Agendar Despliegue Técnico
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Premium Footer */}
            <footer className="py-8 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                        <Terminal className="w-4 h-4" />
                        <span>I4PYMES_CORE_SYSTEM // {new Date().getFullYear()}</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                            Más documentación
                        </Link>
                        <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                            Retornar al sistema
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    )
}
