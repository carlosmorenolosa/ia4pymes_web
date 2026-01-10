import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, User, Share2, ArrowRight, Sparkles, BookOpen } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: "Artículo no encontrado",
        }
    }

    return {
        title: `${post.title} | Blog I4PYMES`,
        description: post.description,
        keywords: [
            post.category.toLowerCase(),
            "automatización pymes",
            "inteligencia artificial",
            "chatbot empresas",
        ],
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            url: `https://ia4pymes.tech/blog/${post.slug}`,
            images: [post.image],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
        },
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    // Article Schema for SEO
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: `https://ia4pymes.tech${post.image}`,
        datePublished: post.date,
        author: {
            "@type": "Organization",
            name: post.author,
            url: "https://ia4pymes.tech",
        },
        publisher: {
            "@type": "Organization",
            name: "I4PYMES",
            url: "https://ia4pymes.tech",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://ia4pymes.tech/blog/${post.slug}`,
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero Header with Image */}
                <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
                    {/* Background Image */}
                    {post.image && (
                        <div className="absolute inset-0">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover opacity-20"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                        </div>
                    )}

                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 py-16 sm:py-20 lg:py-24">
                        {/* Breadcrumb */}
                        <nav className="mb-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors cursor-pointer group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Volver al blog
                            </Link>
                        </nav>

                        {/* Category & Reading time */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-sm font-semibold rounded-full shadow-lg">
                                <BookOpen className="w-3.5 h-3.5" />
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-blue-200 text-sm">
                                <Clock className="w-4 h-4" />
                                {post.readingTime} de lectura
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-blue-200 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{post.author}</p>
                                    <p className="text-sm">Equipo de automatización</p>
                                </div>
                            </div>
                            <div className="h-8 w-px bg-white/20 hidden sm:block" />
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString("es-ES", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Featured Image (visible on mobile) */}
                {post.image && (
                    <div className="md:hidden relative h-56 w-full">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <article className="py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                        {/* Article content with enhanced styling */}
                        <div
                            className="
                prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-200
                prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-800
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg
                prose-a:text-blue-600 prose-a:font-semibold prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-blue-800
                prose-strong:text-slate-800 prose-strong:font-bold
                prose-ul:text-slate-600 prose-ul:text-lg prose-ul:my-6
                prose-ol:text-slate-600 prose-ol:text-lg prose-ol:my-6
                prose-li:my-2 prose-li:marker:text-blue-500
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-slate-700
                prose-hr:my-12 prose-hr:border-slate-200
              "
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    table: ({ children }) => (
                                        <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                                            <table className="w-full text-left border-collapse">
                                                {children}
                                            </table>
                                        </div>
                                    ),
                                    thead: ({ children }) => (
                                        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                            {children}
                                        </thead>
                                    ),
                                    th: ({ children }) => (
                                        <th className="px-6 py-4 font-bold text-sm uppercase tracking-wide border-b border-blue-500">
                                            {children}
                                        </th>
                                    ),
                                    td: ({ children }) => (
                                        <td className="px-6 py-4 border-b border-slate-100 text-slate-600">
                                            {children}
                                        </td>
                                    ),
                                    tr: ({ children }) => (
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            {children}
                                        </tr>
                                    ),
                                }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Share Section */}
                        <div className="mt-16 pt-8 border-t-2 border-slate-100">
                            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <Share2 className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800">¿Te ha sido útil?</p>
                                            <p className="text-slate-500 text-sm">Compártelo con otros empresarios</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ia4pymes.tech/blog/${post.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 bg-[#0077B5] text-white rounded-xl text-sm font-bold hover:bg-[#006399] transition-colors shadow-lg cursor-pointer"
                                        >
                                            LinkedIn
                                        </a>
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=https://ia4pymes.tech/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
                                        >
                                            X (Twitter)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            Consulta sin compromiso
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            ¿Quieres implementar esto en tu negocio?
                        </h2>
                        <p className="text-xl text-blue-200 mb-10 leading-relaxed">
                            Te ayudamos a automatizar tu PYME con soluciones de IA 100% personalizadas. Sin plantillas genéricas.
                        </p>
                        <Link
                            href="/#contacto"
                            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer"
                        >
                            Agendar Consulta Gratuita
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-10 bg-slate-950 text-slate-400">
                    <div className="container mx-auto px-4 sm:px-6 max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p>© {new Date().getFullYear()} I4PYMES - Automatización con IA para PYMES</p>
                        <div className="flex items-center gap-6">
                            <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                                Más artículos
                            </Link>
                            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                                Inicio
                            </Link>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}
