import Link from "next/link"
import { Mail, Instagram, Linkedin, Youtube, Facebook } from "lucide-react"
import { AnchorLink } from "@/components/anchor-link"

type FooterLang = "es" | "en"

/**
 * The home page footer for pages other than the home. Markup and classes are a
 * faithful copy of the footer inlined in `app/page.tsx` (ES) and `app/en/page.tsx`
 * (EN). Section links are absolute (`/#faq`, `/en#faq`) because these pages do
 * not contain those sections. The home pages keep their own inline footer.
 */
const COPY = {
  es: {
    home: "/",
    description:
      "Empresa de desarrollo de software con IA para PYMES: diseñamos, desarrollamos e integramos el software que reduce tus costes operativos. Resultados reales y ROI medible.",
    badgeTitle: "Sello kriterion de Kribaia - Proveedor Verificado de IA",
    // The ES home heading class has a typo (`text-slate-900st`) that renders as plain
    // bold inherited slate-900 text; this reproduces that look without the typo.
    headingClass: "text-base font-black text-slate-900",
    mailIconClass: "rounded-full",
    socialExtraClass: "",
    solutionsTitle: "Soluciones",
    solutions: [
      { href: "/agentes-ia-empresas", label: "Agentes de IA para empresas" },
      { href: "/desarrollo-software-a-medida-pymes", label: "Software a medida" },
      { href: "/automatizacion-procesos-ia", label: "Automatización de procesos" },
      { href: "/consultoria-ia-pymes", label: "Consultoría de IA" },
    ],
    blog: { href: "/blog", label: "Blog de Noticias" },
    exploreTitle: "Explorar",
    explore: [
      { href: "/#que-hacemos", label: "Sobre nosotros" },
      { href: "/#faq", label: "Preguntas Frecuentes" },
      { href: "/#consultoria", label: "Reservar Consultoría" },
      { href: "/#newsletter", label: "Newsletter Semanal" },
    ],
    legalTitle: "Legal",
    legal: [
      { href: "/aviso-legal", label: "Aviso Legal" },
      { href: "/politica-privacidad", label: "Privacidad" },
      { href: "/politica-cookies", label: "Cookies" },
      { href: "/terminos", label: "Términos" },
    ],
    connectTitle: "Conecta",
    rights: "© 2026 IA4PYMES. Todos los derechos reservados.",
    contact: { href: "/#contacto", label: "Contacto" },
    consult: { href: "/#consultoria", label: "Reservar Consultoría" },
  },
  en: {
    home: "/en",
    description:
      "AI software development company for SMEs: we design, build and integrate the software that cuts your operational costs. Real results and measurable ROI.",
    badgeTitle: "Kribaia Kriterion Quality Seal - Verified AI Provider",
    headingClass: "text-base font-black text-slate-900 uppercase tracking-widest",
    mailIconClass: "rounded-lg",
    socialExtraClass: " shadow-sm",
    solutionsTitle: "Solutions",
    solutions: [
      { href: "/en/ai-agents-for-business", label: "AI Agents for Business" },
      { href: "/en/custom-software-development-smes", label: "Custom Software" },
      { href: "/en/ai-process-automation", label: "Process Automation" },
      { href: "/en/ai-consulting-smes", label: "AI Consulting" },
    ],
    blog: { href: "/en/blog", label: "News Blog" },
    exploreTitle: "Explore",
    explore: [
      { href: "/en#what-we-do", label: "About Us" },
      { href: "/en#faq", label: "FAQ" },
      { href: "/en#consultoria", label: "Book Consultation" },
      { href: "/en#newsletter", label: "Weekly Newsletter" },
    ],
    legalTitle: "Legal",
    legal: [
      { href: "/en/legal-notice", label: "Legal Notice" },
      { href: "/en/privacy-policy", label: "Privacy" },
      { href: "/en/cookie-policy", label: "Cookies" },
      { href: "/en/terms", label: "Terms" },
    ],
    connectTitle: "Connect",
    rights: "© 2026 IA4PYMES. All rights reserved.",
    contact: { href: "/en#contact", label: "Contact" },
    consult: { href: "/en#consultoria", label: "Book Consultation" },
  },
} as const

const LINK_CLASS = "text-slate-500 hover:text-blue-600 transition-colors text-base font-medium"
const COLUMN_CLASS = "space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
const SOCIAL_CLASS =
  "w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"

export function SiteFooter({ lang = "es" }: { lang?: FooterLang }) {
  const t = COPY[lang]
  const social = `${SOCIAL_CLASS}${t.socialExtraClass}`

  return (
    <footer className="bg-white pt-20 pb-12 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className={COLUMN_CLASS}>
            <Link href={t.home} className="inline-flex items-center group">
              <div className="flex items-center relative tracking-tighter">
                <span className="text-xl font-extrabold text-blue-600">IA</span>
                <span className="text-xl font-black text-slate-900">4</span>
                <span className="ml-1 text-xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
              </div>
            </Link>
            <p className="text-slate-500 text-base leading-relaxed max-w-xs">{t.description}</p>
            <div className="pt-1">
              <a
                href="https://kribaia.com/proveedor/ia4pymes-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105 active:scale-95"
                title={t.badgeTitle}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://kribaia.com/badge/ia4pymes-tech.svg"
                  alt="Sello kriterion de Kribaia"
                  width={180}
                  height={48}
                  className="h-auto w-auto max-w-[180px]"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className={COLUMN_CLASS}>
            <h4 className={t.headingClass}>{t.solutionsTitle}</h4>
            <ul className="space-y-4">
              {t.solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={t.blog.href} className={LINK_CLASS}>
                  {t.blog.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className={COLUMN_CLASS}>
            <h4 className={t.headingClass}>{t.exploreTitle}</h4>
            <ul className="space-y-4">
              {t.explore.map((item) => (
                <li key={item.href}>
                  <AnchorLink href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className={COLUMN_CLASS}>
            <h4 className={t.headingClass}>{t.legalTitle}</h4>
            <ul className="space-y-4">
              {t.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LINK_CLASS}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className={COLUMN_CLASS}>
            <h4 className={t.headingClass}>{t.connectTitle}</h4>
            <div className="space-y-4">
              <a
                href="mailto:contacto@ia4pymes.tech"
                className="flex items-center justify-center md:justify-start gap-3 text-slate-500 hover:text-blue-600 transition-colors group"
              >
                <div
                  className={`w-8 h-8 ${t.mailIconClass} bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors`}
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-base font-medium tracking-tight">contacto@ia4pymes.tech</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                <a
                  href="https://es.linkedin.com/company/ia4pymestech?trk=public_post_feed-actor-image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social} hover:bg-blue-600`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61560704600913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social} hover:bg-[#1877F2]`}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/ia4pymes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social} hover:bg-pink-600`}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.tiktok.com/@ia4pymes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social} hover:bg-black`}
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
                  className={`${social} hover:bg-red-600`}
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://x.com/Ia4Pymes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social} hover:bg-black`}
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
          <p className="text-slate-600 text-xs font-semibold max-w-[70ch]">{t.rights}</p>
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            <AnchorLink href={t.contact.href} className="text-slate-600 hover:text-blue-600 text-xs font-semibold transition-colors">
              {t.contact.label}
            </AnchorLink>
            <AnchorLink href={t.consult.href} className="text-blue-600 hover:text-blue-700 text-xs font-bold transition-colors">
              {t.consult.label}
            </AnchorLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
