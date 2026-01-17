import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react"

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
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Header */}
            <header className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-24 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors cursor-pointer group"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Volver a inicio
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                            <BookOpen className="w-7 h-7" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Blog</h1>
                            <div className="flex items-center gap-2 mt-1 text-blue-200">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm font-medium">Recursos para tu transformación digital</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                        Guías prácticas, casos de éxito y las últimas tendencias en <strong className="text-white">inteligencia artificial</strong> y <strong className="text-white">automatización</strong> para PYMES.
                    </p>
                </div>
            </header>

            {/* Posts Grid */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-500 text-lg">
                                Próximamente publicaremos nuestros primeros artículos.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="cursor-pointer block">
                                    <article className="group bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                                            {post.image && (
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                            {index === 0 && (
                                                <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                                                    <Sparkles className="w-3 h-3" />
                                                    NUEVO
                                                </div>
                                            )}
                                            <span className="absolute bottom-3 left-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-grow">
                                            {/* Meta */}
                                            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(post.date).toLocaleDateString("es-ES", {
                                                        day: "numeric",
                                                        month: "short",
                                                    })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readingTime}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                                                {post.description}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                                                Leer más
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        Automatiza tu negocio hoy
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        ¿Listo para transformar tu PYME con IA?
                    </h2>
                    <p className="text-xl text-blue-200 mb-10 leading-relaxed">
                        Agenda una consulta gratuita y descubre cómo la inteligencia artificial puede reducir un 80% tus tareas repetitivas.
                    </p>
                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer"
                    >
                        Consulta Gratuita
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 bg-slate-950 text-slate-400">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} I4PYMES - Automatización con IA para PYMES</p>
                    <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                        Volver a inicio
                    </Link>
                </div>
            </footer>
        </main>
    )
}
