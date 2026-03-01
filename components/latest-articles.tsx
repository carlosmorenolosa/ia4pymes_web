import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Terminal } from "lucide-react"

import { blogPosts } from "@/lib/blog-data"

// Obtenemos los 3 artículos más recientes directamente de nuestra base de datos ordenados por fecha
// Al estar en un dynamic import en page.tsx, esto se carga en su propio chunk sin bloquear la vista inicial
const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(post => ({
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        readingTime: post.readingTime,
        category: post.category,
        image: post.image,
    }))

export function LatestArticles() {
    return (
        <section className="py-20 relative bg-slate-950 overflow-hidden text-slate-300">
            {/* Dark elegant background grid & accents */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono rounded-md mb-4">
                            <Terminal className="w-3.5 h-3.5" />
                            INTELLIGENCE_HUB
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">IA4PYMES</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-lg font-light">
                            Perspectivas técnicas y análisis estratégico sobre cómo la Inteligencia Artificial redefine el tejido empresarial.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors whitespace-nowrap font-medium"
                    >
                        Ver Documentación
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="cursor-pointer block group">
                            <article className="h-full flex flex-col bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden backdrop-blur-md hover:bg-slate-800/60 hover:border-white/10 transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden bg-slate-800">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

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
                                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(post.date).toLocaleDateString("es-ES", {
                                                day: "2-digit",
                                                month: "short",
                                            })}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readingTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider group-hover:text-slate-400 transition-colors">
                                            Leer Artículo
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 text-slate-500 transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
