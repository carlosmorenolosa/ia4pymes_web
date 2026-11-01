import Link from "next/link"
import { Mail, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import { ScrollTopLink } from "@/components/scroll-top-link"

type LegalFooterLang = "es" | "en"

const COPY: Record<
    LegalFooterLang,
    {
        homeHref: string
        description: string
        solutionsTitle: string
        solutions: { href: string; label: string }[]
        exploreTitle: string
        explore: { href: string; label: string; scrollTop?: boolean }[]
        connectTitle: string
        legalLinks: { href: string; label: string }[]
        homeLabel: string
    }
> = {
    es: {
        homeHref: "/",
        description:
            "Empresa de desarrollo de software con IA para PYMES: diseñamos, desarrollamos e integramos el software que reduce tus costes operativos. Resultados reales y ROI medible.",
        solutionsTitle: "Soluciones",
        solutions: [
            { href: "/#proceso", label: "Nuestro Proceso" },
            { href: "/#casos-exito", label: "Casos de Éxito" },
            { href: "/#calculadora", label: "Calculadora ROI" },
            { href: "/blog", label: "Blog de Noticias" },
        ],
        exploreTitle: "Explorar",
        explore: [
            { href: "/", label: "Sobre nosotros", scrollTop: true },
            { href: "/#faq", label: "Preguntas Frecuentes" },
            { href: "/#consultoria", label: "Reservar Consultoría" },
            { href: "/#newsletter", label: "Newsletter Semanal" },
        ],
        connectTitle: "Conecta",
        legalLinks: [
            { href: "/aviso-legal", label: "Aviso Legal" },
            { href: "/politica-privacidad", label: "Privacidad" },
            { href: "/politica-cookies", label: "Cookies" },
            { href: "/terminos", label: "Términos" },
        ],
        homeLabel: "Inicio",
    },
    en: {
        homeHref: "/en",
        description:
            "AI software development company for SMEs: we design, build and integrate the software that cuts your operational costs. Real results and measurable ROI.",
        solutionsTitle: "Solutions",
        solutions: [
            { href: "/en#process", label: "Our Process" },
            { href: "/en#cases", label: "Case Studies" },
            { href: "/en#calculator", label: "ROI Calculator" },
            { href: "/en/blog", label: "AI Insights Blog" },
        ],
        exploreTitle: "Explore",
        explore: [
            { href: "/en", label: "About Us", scrollTop: true },
            { href: "/en#faq", label: "FAQ" },
            { href: "/en#consultoria", label: "Book Consulting" },
            { href: "/en#newsletter", label: "Weekly Newsletter" },
        ],
        connectTitle: "Connect",
        legalLinks: [
            { href: "/en/legal-notice", label: "Legal Notice" },
            { href: "/en/privacy-policy", label: "Privacy" },
            { href: "/en/cookie-policy", label: "Cookies" },
            { href: "/en/terms", label: "Terms" },
        ],
        homeLabel: "Home",
    },
}

export function LegalFooter({ lang = "es" }: { lang?: LegalFooterLang }) {
    const t = COPY[lang]

    return (
        <footer className="bg-white border-t border-slate-200/60 pt-20 pb-12 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href={t.homeHref} className="inline-flex items-center group">
                            <div className="flex items-center relative tracking-tighter">
                                <span className="text-xl font-extrabold text-blue-600">IA</span>
                                <span className="text-xl font-black text-slate-900">4</span>
                                <span className="ml-1 text-xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
                            </div>
                        </Link>
                        <p className="text-slate-500 text-base leading-relaxed max-w-xs">{t.description}</p>
                    </div>

                    {/* Column 2: Solutions */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-base font-black text-slate-900 uppercase tracking-widest">{t.solutionsTitle}</h4>
                        <ul className="space-y-4">
                            {t.solutions.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-slate-500 hover:text-blue-600 transition-colors text-base font-medium">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Explore */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-base font-black text-slate-900 uppercase tracking-widest">{t.exploreTitle}</h4>
                        <ul className="space-y-4">
                            {t.explore.map((item) => (
                                <li key={item.href}>
                                    {item.scrollTop ? (
                                        <ScrollTopLink href={item.href} className="text-slate-500 hover:text-blue-600 transition-colors text-base font-medium">
                                            {item.label}
                                        </ScrollTopLink>
                                    ) : (
                                        <Link href={item.href} className="text-slate-500 hover:text-blue-600 transition-colors text-base font-medium">
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-base font-black text-slate-900 uppercase tracking-widest">{t.connectTitle}</h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:contacto@ia4pymes.tech"
                                className="flex items-center justify-center md:justify-start gap-3 text-slate-500 hover:text-blue-600 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-base font-medium tracking-tight">contacto@ia4pymes.tech</span>
                            </a>
                            <div className="flex items-center justify-center md:justify-start gap-4 pt-2 flex-wrap">
                                <a
                                    href="https://es.linkedin.com/company/ia4pymestech?trk=public_post_feed-actor-image"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61560704600913"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/ia4pymes/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@ia4pymes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                    aria-label="TikTok"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a9.14 9.14 0 0 0 5.25 1.63V7.23a5.27 5.27 0 0 1-1.34-.54z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/@IA4PYMES"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://x.com/Ia4Pymes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                    aria-label="X (Twitter)"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs font-semibold max-w-[70ch]">
                        © 2026 IA4PYMES. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
                    </p>
                    <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
                        <Link href={t.homeHref} className="text-slate-600 hover:text-blue-600 text-xs font-semibold transition-colors">
                            {t.homeLabel}
                        </Link>
                        {t.legalLinks.map((item) => (
                            <Link key={item.href} href={item.href} className="text-slate-600 hover:text-blue-600 text-xs font-semibold transition-colors">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
