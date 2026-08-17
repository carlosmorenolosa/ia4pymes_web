"use client"

import { Star, Quote, CheckCircle } from "lucide-react"

const i18n = {
  es: {
    badge: "Opiniones de Clientes",
    heading: "La Experiencia de Trabajar con",
    headingHighlight: "IA4PYMES",
    subtitle: "Opiniones de empresas que han transformado sus plataformas y procesos con nuestras soluciones de desarrollo e inteligencia artificial.",
    verifiedBadge: "Proyecto Verificado",
    reviews: [
      {
        company: "Apartamento Club — Creative Agency",
        rating: 5,
        text: "Buscábamos renovar la web de la agencia con un estándar visual y de rendimiento muy exigente, pero sin entrar en los típicos presupuestos inflados ni los meses de retraso de las agencias de desarrollo habituales. Con IA4PYMES la comunicación fue directa de ingeniero a cliente: estructuraron la arquitectura, optimizaron los tiempos de carga al milisegundo y tuvimos la plataforma lista en tiempo récord. Da gusto trabajar con gente tan resolutiva.",
        tag: "Desarrollo Web & Arquitectura",
      },
      {
        company: "Vandalverse",
        rating: 5,
        text: "Lanzar la tienda online de figuras decorativas nos generaba muchas dudas por la complejidad del catálogo y las pasarelas de pago. IA4PYMES no solo nos montó un e-commerce impecable y rápido, sino que automatizó los flujos de gestión de pedidos para que no perdiéramos horas en tareas manuales. Nos costó una fracción de lo que nos presupuestaban otros proveedores y el soporte post-lanzamiento ha sido inmejorable.",
        tag: "E-Commerce & Automatización",
      },
    ],
  },
  en: {
    badge: "Client Reviews",
    heading: "The Experience of Working with",
    headingHighlight: "IA4PYMES",
    subtitle: "Real feedback from businesses that have transformed their platforms and workflows with our custom development and AI automation solutions.",
    verifiedBadge: "Verified Project",
    reviews: [
      {
        company: "Apartamento Club — Creative Agency",
        rating: 5,
        text: "We needed a high-performance website that matched our agency’s design standards without the usual inflated quotes or endless delays from traditional dev shops. Working with IA4PYMES was direct, transparent, and remarkably fast. They delivered a blazing-fast architecture and met every single deadline flawlessly.",
        tag: "Web Development & Architecture",
      },
      {
        company: "Vandalverse",
        rating: 5,
        text: "Launching our online store was daunting due to catalog complexity and payment integrations. IA4PYMES built an ultra-fast e-commerce platform and automated our order management workflows from day one. It cost a fraction of traditional agency quotes, and their post-launch support has been outstanding.",
        tag: "E-Commerce & Automation",
      },
    ],
  },
}

export function ReviewsSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = i18n[lang]

  return (
    <section
      id="opiniones"
      className="py-16 sm:py-24 bg-transparent relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <header className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{t.badge}</span>
          </div>

          <h2
            id="reviews-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
          >
            {t.heading} <span className="text-blue-600">{t.headingHighlight}</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
            {t.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {t.reviews.map((review, idx) => (
            <article
              key={idx}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-10 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top header: Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5" aria-label={`${review.rating} de 5 estrellas`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-sm font-bold text-slate-700">5.0</span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Review text */}
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Bottom footer: Company name & verified badge */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {review.company}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {review.tag}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200/60 rounded-full text-green-700 text-xs font-semibold self-start sm:self-auto">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                  <span>{t.verifiedBadge}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
