import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, ArrowRight, Terminal } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import ReadingProgressBar from "./reading-progress-bar"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: "Post no encontrado | I4PYMES",
            description: "El artículo que buscas no existe."
        }
    }

    return {
        title: `${post.title} | I4PYMES Blog`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: post.image ? [post.image] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: post.image ? [post.image] : [],
        },
        alternates: {
            canonical: `https://ia4pymes.tech/blog/${post.slug}`
        }
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
            {/* Article JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "description": post.description,
                        "image": post.image ? `https://ia4pymes.tech${post.image}` : "https://ia4pymes.tech/og-image.png",
                        "datePublished": new Date(post.date).toISOString(),
                        "dateModified": new Date(post.date).toISOString(),
                        "author": [{
                            "@type": "Organization",
                            "name": post.author,
                            "url": "https://ia4pymes.tech"
                        }],
                        "publisher": {
                            "@type": "Organization",
                            "name": "I4PYMES",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://ia4pymes.tech/LOGO.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://ia4pymes.tech/blog/${post.slug}`
                        }
                    })
                }}
            />

            <ReadingProgressBar />

            {/* Hero Header Inmersivo (Dark & Elegant) */}
            <header className="relative bg-slate-950 min-h-[50vh] flex flex-col justify-end pb-16 pt-32 overflow-hidden border-b border-white/5">
                {/* Background Image with overlay */}
                {post.image && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover opacity-20 mix-blend-luminosity"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                    </div>
                )}

                <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                    {/* Navigation */}
                    <nav className="mb-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800/80 backdrop-blur-md transition-all cursor-pointer group text-sm font-medium"
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {post.title}
                    </h1>

                    {/* Author & Date Card */}
                    <div className="inline-flex items-center gap-6 p-4 rounded-xl bg-slate-900/40 border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                                <span className="font-bold text-blue-400 text-lg leading-none">I4</span>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-300 text-sm">{post.author}</p>
                                <p className="text-xs text-slate-500 font-mono">Research Team</p>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString("es-ES", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </time>
                        </div>
                    </div>
                </div>
            </header>

            {/* Reading Area - Dark and elegant */}
            <article className="py-16 sm:py-24 bg-slate-950 relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-[800px]">
                    {/* Contenedor principal con estilos de lectura para dark mode */}
                    <div className="blog-article-content prose prose-invert prose-lg md:prose-xl prose-slate max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                table: ({ children }) => (
                                    <div className="my-10 overflow-x-auto rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                                        <table className="w-full text-left border-collapse text-base">
                                            {children}
                                        </table>
                                    </div>
                                ),
                                thead: ({ children }) => (
                                    <thead className="bg-slate-800/50 border-b border-white/10">
                                        {children}
                                    </thead>
                                ),
                                th: ({ children }) => (
                                    <th className="px-6 py-4 font-semibold text-sm text-slate-300 uppercase tracking-wider">
                                        {children}
                                    </th>
                                ),
                                td: ({ children }) => (
                                    <td className="px-6 py-4 border-b border-white/5 text-slate-400">
                                        {children}
                                    </td>
                                ),
                                tr: ({ children }) => (
                                    <tr className="hover:bg-slate-800/30 transition-colors">
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
