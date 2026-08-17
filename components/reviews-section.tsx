"use client"

import { Star, Quote } from "lucide-react"

const i18n = {
  es: {
    heading: "La Experiencia de Trabajar con",
    headingHighlight: "IA4PYMES",
    subtitle: "Opiniones de empresas que han transformado sus plataformas y procesos con nuestras soluciones de desarrollo e inteligencia artificial.",
    reviews: [
      {
        company: "Apartamento Club — Creative Agency",
        rating: 5,
        text: "Buscábamos una web de agencia con máximo rendimiento sin los presupuestos inflados ni retrasos habituales. La comunicación con IA4PYMES fue directa y la entrega, impecable y en tiempo récord.",
        tag: "Desarrollo Web Impulsado por IA",
      },
      {
        company: "Vandalverse",
        rating: 5,
        text: "Montaron un e-commerce rápido y automatizaron la gestión de pedidos a una fracción del coste de otros proveedores. El soporte post-lanzamiento ha sido inmejorable.",
        tag: "E-Commerce & Automatización con IA",
      },
    ],
  },
  en: {
    heading: "The Experience of Working with",
    headingHighlight: "IA4PYMES",
    subtitle: "Real feedback from businesses that have transformed their platforms and workflows with our custom development and AI automation solutions.",
    reviews: [
      {
        company: "Apartamento Club — Creative Agency",
        rating: 5,
        text: "We needed a high-performance agency website without inflated agency fees or delays. Communication with IA4PYMES was direct, fast, and delivered on time.",
        tag: "AI-Powered Web Development",
      },
      {
        company: "Vandalverse",
        rating: 5,
        text: "They built a blazing-fast e-commerce platform and automated order management at a fraction of traditional agency quotes. Outstanding post-launch support.",
        tag: "AI E-Commerce & Automation",
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

              {/* Bottom footer: Company name */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {review.company}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {review.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
