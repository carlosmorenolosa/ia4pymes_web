import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Terminal } from "lucide-react"

import { blogPosts } from "@/lib/blog-data"

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
        <section className="py-20 relative bg-white overflow-hidden text-slate-600 border-t border-slate-100">
            {/* Elegant background grid & accents for light mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono rounded-md mb-4 shadow-sm">
                            <Terminal className="w-3.5 h-3.5" />
                            INTELLIGENCE_HUB
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                            Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">IA4PYMES</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl text-lg font-light">
                            Perspectivas técnicas y análisis estratégico sobre cómo la Inteligencia Artificial redefine el tejido empresarial.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors whitespace-nowrap font-medium shadow-sm"
                    >
                        Ver Documentación
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="cursor-pointer block group">
                            <article className="h-full flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden bg-slate-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60" />

                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {index === 0 && (
                                            <span className="px-2.5 py-1 bg-blue-600 text-white border border-blue-500/30 text-xs font-mono rounded-md shadow-sm">
                                                LATEST
                                            </span>
                                        )}
                                        <span className="px-2.5 py-1 bg-white/90 text-slate-800 border border-slate-200 text-xs font-medium rounded-md backdrop-blur-md shadow-sm">
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

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                                            Leer Artículo
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-400 transition-colors border border-slate-100 group-hover:border-blue-100">
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
