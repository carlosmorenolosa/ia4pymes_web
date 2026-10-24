"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"

import { getAllPosts, getEnPosts } from "@/lib/blog-data"

const i18n = {
    es: {
        heading: "Blog y Guías de",
        brand: "IA4PYMES",
        subtitle: "Guías técnicas, casos reales y arquitecturas de automatización con IA para PYMEs. Aprende a integrar agentes autónomos, desplegar LLMs privados y reducir costes operativos en tu empresa.",
        cta: "Ver Todas las Guías",
        ctaHref: "/blog",
        readLabel: "Leer Artículo",
        locale: "es-ES",
        postHref: (slug: string) => `/blog/${slug}`,
    },
    en: {
        heading: "Articles & Guides:",
        brand: "IA4PYMES",
        subtitle: "Technical guides, real-world case studies, and AI automation architectures for SMEs. Learn how to integrate autonomous agents, deploy private LLMs, and cut operational costs in your business.",
        cta: "View All Articles",
        ctaHref: "/en/blog",
        readLabel: "Read Article",
        locale: "en-US",
        postHref: (slug: string) => `/en/blog/${slug}`,
    },
}

const monthsES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const monthsEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDeterministicDate(dateStr: string, lang: "es" | "en") {
    try {
        const parts = dateStr.split("-");
        if (parts.length !== 3) return dateStr;
        const [_, month, day] = parts;
        const monthIdx = parseInt(month, 10) - 1;
        if (monthIdx < 0 || monthIdx > 11) return dateStr;
        if (lang === "es") {
            return `${day} ${monthsES[monthIdx]}`;
        } else {
            return `${monthsEN[monthIdx]} ${day}`;
        }
    } catch (e) {
        return dateStr;
    }
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
        <section className="py-20 relative bg-card overflow-hidden text-ink-soft">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-ink mb-4">
                            {t.heading} <span className="text-signal">{t.brand}</span>
                        </h2>
                        <p className="text-ink-soft max-w-2xl text-lg font-light">
                            {t.subtitle}
                        </p>
                    </div>

                    <div>
                        <Link
                            href={t.ctaHref}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-line text-ink hover:bg-sunken transition-colors whitespace-nowrap font-bold shadow-sm"
                        >
                            {t.cta}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {latestPosts.length === 0 ? (
                    <div className="text-center py-16 text-ink-faint text-sm font-medium">
                        {lang === "en" ? "No English articles published yet." : "No hay artículos publicados aún."}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestPosts.map((post, index) => (
                            <div key={post.slug}>
                                <Link href={t.postHref(post.slug)} className="cursor-pointer block group h-full">
                                    <article className="h-full flex flex-col bg-card rounded-2xl border border-line overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        {/* Image */}
                                        <div className="relative h-52 overflow-hidden bg-sunken">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60" />

                                            <div className="absolute top-4 left-4 flex gap-2">
                                                {index === 0 && (
                                                    <span className="px-2.5 py-1 bg-signal text-white border border-signal/20 text-xs font-mono rounded-md shadow-sm">
                                                        LATEST
                                                    </span>
                                                )}
                                                <span className="px-2.5 py-1 bg-card/90 text-ink border border-line text-xs font-medium rounded-md backdrop-blur-md shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs font-mono text-ink-soft mb-4">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {formatDeterministicDate(post.date, lang)}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readingTime}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-signal transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-ink-soft text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                                                {post.description}
                                            </p>

                                            <div className="flex items-center justify-between border-t border-line pt-4 mt-auto">
                                                <span className="text-xs font-mono text-ink-soft uppercase tracking-wider group-hover:text-signal transition-colors">
                                                    {t.readLabel}
                                                </span>
                                                <div className="w-8 h-8 rounded-full bg-sunken flex items-center justify-center group-hover:bg-signal-wash group-hover:text-signal text-ink-faint transition-colors border border-line group-hover:border-signal/15">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
