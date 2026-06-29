import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, Terminal } from "lucide-react"
import { BlogChatWidgetLoader } from "@/components/blog-chat-widget-loader"

export const metadata: Metadata = {
    title: "Blog de IA para PYMES | Casos de Uso, Herramientas y Análisis · IA4PYMES",
    description: "Artículos semanales sobre cómo aplicar IA en tu empresa hoy mismo. Casos reales, comparativas de herramientas, automatizaciones paso a paso y análisis de los últimos modelos de IA.",
    keywords: [
        "blog inteligencia artificial empresas",
        "casos de uso IA para PYMES",
        "herramientas IA 2026",
        "automatización con IA ejemplos reales",
        "tendencias inteligencia artificial empresas",
        "chatbots para empresas españa",
        "agentes IA autónomos empresas",
        "cómo aplicar IA en mi negocio",
    ],
    openGraph: {
        title: "Blog de IA para PYMES | Casos Reales y Herramientas · IA4PYMES",
        description: "Artículos semanales sobre cómo aplicar IA en tu empresa. Casos reales, herramientas y automatizaciones paso a paso.",
        url: "https://ia4pymes.tech/blog",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Blog IA4PYMES" }],
    },
}

export default function BlogPage() {
    const posts = getAllPosts()

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Blog de IA4PYMES — Inteligencia Artificial para Empresas",
        "description": "Artículos sobre IA, automatización y transformación digital para PYMES",
        "url": "https://ia4pymes.tech/blog",
        "itemListElement": posts.map((post, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://ia4pymes.tech/blog/${post.slug}`,
            "name": post.title,
        })),
    }

    return (
        <main className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            {/* Elegant Header (Dark Theme) */}
            <header className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors cursor-pointer group text-sm font-semibold uppercase tracking-widest"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Volver al sistema principal
                    </Link>

                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 border border-blue-100 text-blue-600 w-fit text-sm font-mono font-bold uppercase tracking-wider">
                            <Terminal className="w-4 h-4" />
                            <span>/blog-ia4pymes</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                            Blog de <span className="text-blue-500">IA4PYMES</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
                            Perspectivas técnicas, investigación operativa y análisis estratégico sobre cómo la Inteligencia Artificial está redefiniendo el tejido empresarial.
                        </p>
                    </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            </header>

            {/* Posts Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    {posts.length === 0 ? (
                        <div className="text-center py-24 border border-white/5 rounded-3xl bg-white/[0.02]">
                            <Terminal className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                            <p className="text-slate-500 font-mono text-sm font-bold">
                                [Sistema vacío] Esperando la inicialización de los primeros protocolos de datos.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="cursor-pointer block group">
                                    <article className="h-full flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ease-out">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden bg-slate-100">
                                            {post.image && (
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                                                />
                                            )}
                                            
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                {index === 0 && (
                                                    <span className="px-2.5 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">
                                                        LATEST
                                                    </span>
                                                )}
                                                <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-grow">
                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-5">
                                                <span className="flex items-center gap-1.5 uppercase tracking-widest">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(post.date).toLocaleDateString("es-ES", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                    })}
                                                </span>
                                                <span className="flex items-center gap-1.5 uppercase tracking-widest">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readingTime}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight line-clamp-3 tracking-tight">
                                                {post.title}
                                            </h2>
                                            
                                            {/* Description */}
                                            <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow font-medium">
                                                {post.description}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                                                    Leer Documento
                                                </span>
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-white/10">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
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
            <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2.5rem] bg-blue-50 border border-blue-100 mb-10 shadow-xl shadow-blue-500/10">
                        <Sparkles className="w-10 h-10 text-blue-600" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tighter drop-shadow-sm">
                        Eleva tu infraestructura <span className="text-blue-500">operativa</span>
                    </h2>

                    <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                        Implementamos ecosistemas de IA a medida que devuelven a tu equipo el activo más valioso: el tiempo. Agenda una exploración técnica sin compromiso.
                    </p>

                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-blue-600/20 cursor-pointer text-lg"
                    >
                        Iniciar Despliegue
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-[#030712] border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 text-slate-500 font-mono text-xs font-bold tracking-widest uppercase">
                        <Terminal className="w-4 h-4" />
                        <span>IA4PYMES // BLOG_IA4PYMES_2026</span>
                    </div>
                    <Link href="/" className="text-sm font-bold text-slate-400 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                        Retornar al Core
                    </Link>
                </div>
            </footer>
            <BlogChatWidgetLoader lang="es" />
        </main>
    )
}

