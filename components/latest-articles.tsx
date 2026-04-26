"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"

import { getAllPosts, getEnPosts } from "@/lib/blog-data"

const i18n = {
    es: {
        heading: "Blog de",
        brand: "IA4PYMES",
        subtitle: "Perspectivas técnicas y análisis estratégico sobre cómo la Inteligencia Artificial redefine el tejido empresarial.",
        cta: "Ver Documentación",
        ctaHref: "/blog",
        readLabel: "Leer Artículo",
        locale: "es-ES",
        postHref: (slug: string) => `/blog/${slug}`,
    },
    en: {
        heading: "IA4PYMES",
        brand: "Blog",
        subtitle: "Technical insights and strategic analysis on how Artificial Intelligence is reshaping the business landscape.",
        cta: "View All Articles",
        ctaHref: "/en/blog",
        readLabel: "Read Article",
        locale: "en-US",
        postHref: (slug: string) => `/en/blog/${slug}`,
    },
}

export function LatestArticles({ lang = "es" }: { lang?: "es" | "en" }) {
    const t = i18n[lang]

    const latestPosts = (lang === "en" ? getEnPosts() : getAllPosts())
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

    return (
        <section className="py-20 relative bg-white overflow-hidden text-slate-600">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-4">
                            {t.heading} <span className="text-blue-600">{t.brand}</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl text-lg font-light">
                            {t.subtitle}
                        </p>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Link
                            href={t.ctaHref}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors whitespace-nowrap font-bold shadow-sm"
                        >
                            {t.cta}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>

                {latestPosts.length === 0 ? (
                    <div className="text-center py-16 text-slate-400 text-sm font-medium">
                        {lang === "en" ? "No English articles published yet." : "No hay artículos publicados aún."}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            >
                                <Link href={t.postHref(post.slug)} className="cursor-pointer block group h-full">
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
                                                    <span className="px-2.5 py-1 bg-blue-600 text-white border border-blue-600/20 text-xs font-mono rounded-md shadow-sm">
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
                                                    {new Date(post.date).toLocaleDateString(t.locale, {
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
                                                    {t.readLabel}
                                                </span>
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-400 transition-colors border border-slate-100 group-hover:border-blue-100">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
