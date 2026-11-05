import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getService, type ServiceLang } from "@/lib/services-data"
import { mapPostToServices } from "@/lib/blog-service-map"

interface RelatedServiceProps {
    post: { slug: string; title: string; category: string; description?: string }
    lang: ServiceLang
}

const COPY = {
    es: { heading: "Servicios relacionados", also: "Ver también:" },
    en: { heading: "Related services", also: "See also:" },
} as const

export function RelatedService({ post, lang }: RelatedServiceProps) {
    const match = mapPostToServices(post)
    const primary = getService(match.primary, lang)
    const secondary = match.secondary ? getService(match.secondary, lang) : null
    const copy = COPY[lang]

    return (
        <section className="py-20 bg-[#020617] border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter mb-8">
                    {copy.heading}
                </h2>

                <Link
                    href={primary.path}
                    className="group block p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                >
                    <span className="flex items-center justify-between gap-4 text-xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {primary.name}
                        <ArrowRight className="w-5 h-5 shrink-0 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="block mt-3 text-slate-400 font-medium leading-relaxed">
                        {primary.meta.description}
                    </span>
                </Link>

                {secondary && (
                    <p className="mt-6 text-sm font-bold text-slate-400">
                        {copy.also}{" "}
                        <Link href={secondary.path} className="text-blue-400 hover:text-blue-300 transition-colors">
                            {secondary.name}
                        </Link>
                    </p>
                )}
            </div>
        </section>
    )
}
