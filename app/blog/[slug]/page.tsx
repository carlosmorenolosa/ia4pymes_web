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
        <main className="min-h-screen bg-slate-950 selection:bg-blue-600/30">
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

            {/* Hero Header (Dark & Professional) */}
            <header className="relative bg-slate-900/50 min-h-[50vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden border-b border-white/5">
                {/* Background Image with subtle overlay */}
                {post.image && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover opacity-[0.1] mix-blend-overlay grayscale"
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
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 backdrop-blur-md transition-all cursor-pointer group text-sm font-bold uppercase tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Retornar al sistema
                        </Link>
                    </nav>

                    {/* Meta badges */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">
                            <Terminal className="w-3.5 h-3.5" />
                            {post.category}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-black uppercase tracking-widest">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {post.readingTime} ETA
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.05] tracking-tighter text-white">
                        {post.title}
                    </h1>

                    {/* Author & Date Card */}
                    <div className="inline-flex flex-wrap items-center gap-8 p-6 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                                <span className="font-black text-white text-xl leading-none">I4</span>
                            </div>
                            <div>
                                <p className="font-black text-white text-sm uppercase tracking-tight">{post.author}</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Research Team</p>
                            </div>
                        </div>
                        <div className="hidden sm:block h-10 w-px bg-white/10" />
                        <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest">
                            <Calendar className="w-5 h-5 text-blue-500" />
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
                
                {/* Accent Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            </header>

            {/* Reading Area - Dark & High Readability */}
            <article className="py-20 sm:py-32 bg-slate-950 relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-[820px]">
                    {/* Contenedor principal con estilos de lectura refinados para fondo oscuro */}
                    <div className="blog-article-content prose prose-lg md:prose-xl prose-invert max-w-none 
                        prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:font-medium
                        prose-strong:text-white prose-strong:font-black
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 transition-colors">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                table: ({ children }) => (
                                    <div className="my-12 overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.02] p-1">
                                        <table className="w-full text-left border-collapse text-base">
                                            {children}
                                        </table>
                                    </div>
                                ),
                                thead: ({ children }) => (
                                    <thead className="bg-white/[0.03] border-b border-white/5">
                                        {children}
                                    </thead>
                                ),
                                th: ({ children }) => (
                                    <th className="px-8 py-5 font-black text-xs text-white uppercase tracking-widest">
                                        {children}
                                    </th>
                                ),
                                td: ({ children }) => (
                                    <td className="px-8 py-5 border-b border-white/[0.02] text-slate-400 font-medium">
                                        {children}
                                    </td>
                                ),
                                tr: ({ children }) => (
                                    <tr className="hover:bg-white/[0.01] transition-colors">
                                        {children}
                                    </tr>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-blue-600 bg-blue-900/10 rounded-r-3xl p-8 my-12 not-italic text-slate-200 font-medium">
                                        {children}
                                    </blockquote>
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 mx-auto shadow-lg shadow-blue-600/20">
                        <Terminal className="w-4 h-4" />
                        initiating_deployment...
                    </div>

                    <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter leading-tight">
                        Pasa de la teoría a la <span className="text-blue-500">ejecución</span>
                    </h2>

                    <p className="text-xl text-slate-400 mb-14 leading-relaxed font-medium max-w-2xl mx-auto text-pretty">
                        El conocimiento sin implementación técnica es solo entretenimiento. Auditamos los procesos de tu empresa para integrar arquitecturas de IA que escalan tu productividad de forma empírica.
                    </p>

                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-full font-black hover:bg-blue-700 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-blue-600/30 cursor-pointer text-lg uppercase tracking-wide"
                    >
                        Agendar Despliegue Técnico
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* Premium Footer */}
            <footer className="py-12 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-3 text-slate-500 font-mono text-xs font-black uppercase tracking-widest">
                        <Terminal className="w-5 h-5" />
                        <span>I4PYMES_CORE_SYSTEM // {new Date().getFullYear()}</span>
                    </div>
                    <div className="flex items-center gap-10">
                        <Link href="/blog" className="text-sm font-black text-slate-500 hover:text-blue-500 transition-colors cursor-pointer uppercase tracking-widest">
                            Documentación
                        </Link>
                        <Link href="/" className="text-sm font-black text-slate-500 hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-widest">
                            Retornar al sistema
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    )
}
