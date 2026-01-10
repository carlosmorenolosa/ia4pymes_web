import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"

export const metadata: Metadata = {
    title: "Blog - I4PYMES | Artículos sobre IA y Automatización para PYMES",
    description: "Aprende sobre inteligencia artificial, chatbots y automatización empresarial. Guías prácticas y casos de éxito para pequeñas y medianas empresas.",
    keywords: [
        "blog automatización",
        "artículos IA empresas",
        "chatbot pymes",
        "guías automatización",
        "transformación digital pymes",
    ],
    openGraph: {
        title: "Blog - I4PYMES | Artículos sobre IA y Automatización",
        description: "Guías prácticas y casos de éxito sobre automatización con IA para PYMES.",
        url: "https://ia4pymes.tech/blog",
        type: "website",
    },
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
                    >
                        ← Volver a inicio
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold">Blog</h1>
                    </div>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Artículos sobre inteligencia artificial, automatización y transformación digital para PYMES.
                    </p>
                </div>
            </header>

            {/* Posts Grid */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    {posts.length === 0 ? (
                        <p className="text-center text-slate-500 text-lg">
                            Próximamente publicaremos nuestros primeros artículos.
                        </p>
                    ) : (
                        <div className="grid gap-8">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <article className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                                        <div className="p-6 sm:p-8">
                                            {/* Category & Meta */}
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                                    {post.category}
                                                </span>
                                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {new Date(post.date).toLocaleDateString("es-ES", {
                                                            day: "numeric",
                                                            month: "long",
                                                            year: "numeric",
                                                        })}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {post.readingTime}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title & Description */}
                                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                                {post.description}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                                                Leer artículo
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        ¿Quieres automatizar tu negocio?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Te ayudamos a implementar soluciones de IA personalizadas para tu PYME.
                    </p>
                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Consulta Gratuita
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-slate-900 text-slate-400 text-center">
                <p>© {new Date().getFullYear()} I4PYMES - Automatización con IA para PYMES</p>
            </footer>
        </main>
    )
}
