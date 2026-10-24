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
      {
        company: "Asociación de Hostelería y Turismo de Navarra",
        rating: 5,
        text: "Desarrollaron un chatbot con IA que atiende al instante las consultas de asociados y visitantes en nuestra web. El equipo ha sido extraordinariamente diligente, rápido y resolutivo en cada ajuste.",
        tag: "Chatbot IA & Atención 24/7",
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
      {
        company: "Navarra Hospitality & Tourism Association",
        rating: 5,
        text: "They developed an AI chatbot that instantly answers inquiries from members and visitors on our website. Their team has been remarkably fast, diligent, and responsive to every need.",
        tag: "AI Chatbot & 24/7 Support",
      },
    ],
  },
}

export function ReviewsSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = i18n[lang]

  return (
    <section
      id="opiniones"
      className="py-20 sm:py-28 relative"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto px-5 sm:px-8 max-w-[1360px]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <h2
            id="reviews-heading"
            className="lg:col-span-4 text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
          >
            {t.heading} <span className="text-signal">{t.headingHighlight}</span>
          </h2>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {t.reviews.map((review, idx) => (
              <figure key={idx} className="m-0">
                <blockquote className="text-ink-soft text-[15px] leading-[1.65]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm font-semibold tracking-[-0.01em] text-ink">
                    {review.company}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                    {review.rating}.0
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
