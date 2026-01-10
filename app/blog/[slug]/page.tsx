import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react"
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
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
                    <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                        {/* Breadcrumb */}
                        <nav className="mb-6">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Volver al blog
                            </Link>
                        </nav>

                        {/* Category */}
                        <span className="inline-block px-3 py-1 bg-white/20 text-sm font-medium rounded-full mb-4">
                            {post.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-blue-100">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString("es-ES", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readingTime} de lectura
                            </span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <article className="py-12 sm:py-16">
                    <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-ul:text-slate-600 prose-ol:text-slate-600 prose-table:text-sm prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-slate-200">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Share */}
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <p className="text-slate-500 flex items-center gap-2">
                                    <Share2 className="w-5 h-5" />
                                    ¿Te ha sido útil? ¡Compártelo!
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ia4pymes.tech/blog/${post.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#0077B5] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=https://ia4pymes.tech/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                    >
                                        X (Twitter)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            ¿Listo para automatizar tu negocio?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Agenda una consulta gratuita y te mostramos cómo la IA puede transformar tu PYME.
                        </p>
                        <Link
                            href="/#contacto"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Consulta Gratuita
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 bg-slate-900 text-slate-400 text-center">
                    <p>© {new Date().getFullYear()} I4PYMES - Automatización con IA para PYMES</p>
                </footer>
            </main>
        </>
    )
}
