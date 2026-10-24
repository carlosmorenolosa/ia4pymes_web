import {
  BarChart2,
  CheckCircle,
  ArrowRight,
  Mail,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
// framer-motion removed from Server Component
import { HomeHeader } from "@/components/home-header"
import { HeroES } from "@/components/hero-es"
import { FadeIn } from "@/components/fade-in"
import { Counter } from "@/components/counter"
import { ScrollTopLink } from "@/components/scroll-top-link"
import {
  SuccessCasesCarousel,
  ContactForm,
  CostCalculator,
  ConsultingSection,
} from "@/components/home-dynamic-imports"

// SSR habilitado — contenido indexable por Google
const LatestArticles = dynamic(() =>
  import("@/components/latest-articles").then((mod) => mod.LatestArticles),
  { loading: () => <div className="h-[400px] bg-sunken/50 rounded-3xl animate-pulse" /> }
)

const FaqSection = dynamic(() =>
  import("@/components/faq-section").then((mod) => mod.FaqSection)
)

const ReviewsSection = dynamic(() =>
  import("@/components/reviews-section").then((mod) => mod.ReviewsSection)
)

export default function Home() {
  const homeFaqs = [
    {
      question: "¿Qué es IA4PYMES?",
      answer: "IA4PYMES es una empresa de desarrollo de software especializada en inteligencia artificial para PYMES. Diseñamos y desarrollamos software a medida, agentes de IA privados y automatizaciones de procesos que reducen costes operativos y aumentan márgenes. Calculamos el ROI esperado de cada proyecto antes de desarrollar: si los números no salen, no avanzamos.",
    },
    {
      question: "¿Es útil esta solución para mi sector?",
      answer: "La clave no es a qué te dedicas, sino qué procesos lentos o ineficientes tienes. Si hay tareas repetitivas en tu negocio, podemos optimizarlas.",
    },
    {
      question: "¿Tengo que cambiar los programas que ya utilizo?",
      answer: "Para nada. Adaptamos la IA a tu forma de trabajar actual, integrándola en tus sistemas de siempre sin cortes operativos ni migraciones dolorosas.",
    },
    {
      question: "¿Mis empleados necesitan entender de Inteligencia Artificial?",
      answer: "Cero. Al ser proyectos a medida, me encargo de explicarles todo el funcionamiento de viva voz, paso a paso y de forma muy clara para que lo manejen sin problema.",
    },
    {
      question: "¿Qué pasa si la inversión no sale a cuenta?",
      answer: "Antes de crear nada, trazamos un mapa de ruta para calcular el retorno de inversión esperado. Si vemos que los números no te benefician, simplemente no avanzamos.",
    },
    {
      question: "¿Están a salvo los datos de mi empresa?",
      answer: "Por supuesto. Cumplimos con el RGPD, firmamos un acuerdo de confidencialidad y tu información jamás se usa para entrenar modelos de IA públicos.",
    },
    {
      question: "¿Cuáles son los plazos de entrega?",
      answer: "El diagnóstico inicial nos toma unas 2 o 3 semanas. Después, el desarrollo y la puesta en marcha de los sistemas dura entre 1 y 4 meses.",
    },
  ]

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IA4PYMES",
    "url": "https://ia4pymes.tech",
    "logo": "https://ia4pymes.tech/LOGO.png",
    "description": "Empresa de desarrollo de software especializada en inteligencia artificial para PYMES en España: software a medida, agentes de IA privados y automatización de procesos.",
    "email": "contacto@ia4pymes.tech",
    "sameAs": [
      "https://es.linkedin.com/company/ia4pymestech",
      "https://www.instagram.com/ia4pymes/",
      "https://www.youtube.com/@IA4PYMES",
      "https://x.com/Ia4Pymes",
      "https://www.tiktok.com/@ia4pymes",
      "https://www.facebook.com/profile.php?id=61560704600913"
    ]
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "IA4PYMES - Consultoría y Desarrollo de IA para PYMEs",
    "url": "https://ia4pymes.tech",
    "image": "https://ia4pymes.tech/og-image.png",
    "priceRange": "€€",
    "telephone": "+34-600-000-000",
    "email": "contacto@ia4pymes.tech",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "areaServed": [
      { "@type": "Country", "name": "Spain" },
      { "@type": "AdministrativeArea", "name": "European Union" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Apartamento Club — Creative Agency"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Buscábamos una web de agencia con máximo rendimiento sin los presupuestos inflados ni retrasos habituales. La comunicación con IA4PYMES fue directa y la entrega, impecable y en tiempo récord."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Vandalverse"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Montaron un e-commerce rápido y automatizaron la gestión de pedidos a una fracción del coste de otros proveedores. El soporte post-lanzamiento ha sido inmejorable."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Asociación de Hostelería y Turismo de Navarra"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Desarrollaron un chatbot con IA que atiende al instante las consultas de asociados y visitantes en nuestra web. El equipo ha sido extraordinariamente diligente, rápido y resolutivo en cada ajuste."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Inteligencia Artificial y Automatización",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización de Procesos Operativos (BPA + IA)",
            "description": "Extracción OCR de facturas, conciliación contable y generación de presupuestos conectada a ERP/CRM."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agentes Conversacionales RAG 24/7",
            "description": "Chatbots para WhatsApp, web y email conectados a bases de conocimiento internas con cero alucinaciones."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Centralitas Telefónicas y Agentes de Voz con IA",
            "description": "Atención de llamadas en lenguaje natural (<300ms) y agendamiento automático de citas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infraestructura de LLMs Locales y Privados",
            "description": "Despliegue de modelos abiertos en la nube europea u on-premise para máxima confidencialidad y cumplimiento RGPD."
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://ia4pymes.tech"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomeHeader splashFinished={true} />
      <HeroES splashFinished={true} />
      <main className="bg-transparent">

        {/* What We Do Section — indexable entity definition (SEO + GEO) */}
        <section id="que-hacemos" className="py-20 sm:py-28 relative" aria-labelledby="que-hacemos-heading">
          <div className="container mx-auto px-5 sm:px-8 max-w-[1360px]">
            <FadeIn>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <h2
                  id="que-hacemos-heading"
                  className="lg:col-span-4 text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
                >
                  Qué hacemos: <span className="text-signal">software con IA</span> para tu PYME
                </h2>

                <ul className="lg:col-span-8 w-full border-t border-line">
                  {[
                    { title: "Software a medida", benefit: "Código propio, sin lock-in" },
                    { title: "Automatización de procesos", benefit: "Ahorro cuantificado en euros" },
                    { title: "Agentes de IA privados", benefit: "Nube europea u on-premise" },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-6"
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-ink">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                        {item.benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Cost Calculator Section */}
        <section id="calculadora" className="py-24 sm:py-32 bg-sunken border-y border-line relative">
          <FadeIn>
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <CostCalculator />
            </div>
          </FadeIn>
        </section>

        {/* Consulting Section */}
        <ConsultingSection />




        {/* Process Section */}
        <section
          id="proceso"
          className="py-20 sm:py-28 relative"
          aria-labelledby="process-heading"
        >
          <div className="container mx-auto px-5 sm:px-8 max-w-[1360px]">
            <FadeIn>
              <div
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
                itemScope
                itemType="https://schema.org/HowTo"
              >
                <h2
                  id="process-heading"
                  className="lg:col-span-4 text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
                >
                  Metodología en 3 pasos: <span className="text-signal">auditoría, integración y despliegue</span>
                </h2>

                <ol className="lg:col-span-8 grid sm:grid-cols-3 border-t border-line">
                  {[
                    {
                      step: "01",
                      title: "Auditoría",
                      benefit: "Fugas de tiempo cuantificadas",
                      detail:
                        "Estudiamos los flujos operativos de tu empresa para identificar cuellos de botella y cuantificar las horas desperdiciadas en tareas manuales que la IA puede automatizar.",
                    },
                    {
                      step: "02",
                      title: "Integración",
                      benefit: "Conectado a tu ERP o CRM",
                      detail:
                        "Diseñamos y desarrollamos agentes de IA privados conectando directamente con tus sistemas de gestión (ERP, CRM, bases de datos), garantizando un ROI positivo en tiempo récord.",
                    },
                    {
                      step: "03",
                      title: "Despliegue",
                      benefit: "Privacidad y control total",
                      detail:
                        "Implementamos la solución bajo los más estrictos estándares de privacidad de datos, monitorizando el rendimiento en tiempo real y optimizando los modelos periódicamente.",
                    },
                  ].map((process) => (
                    <li
                      key={process.step}
                      className="border-b border-line py-7 sm:py-8 sm:pr-8"
                      itemProp="step"
                      itemScope
                      itemType="https://schema.org/HowToStep"
                    >
                      <meta itemProp="position" content={process.step} />
                      <meta itemProp="name" content={process.title} />
                      <meta itemProp="text" content={process.detail} />

                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                        {process.step}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink">
                        {process.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-soft">{process.benefit}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Success Cases Section */}
        <section
          id="casos-exito"
          className="py-16 sm:py-24 bg-transparent relative"
          style={{ zIndex: 1 }}
          aria-labelledby="success-cases-heading"
        >
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <header className="text-center mb-16 sm:mb-20">
                <h2 
                  id="success-cases-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-ink mb-6 drop-shadow-sm"
                >
                  Casos de Éxito: <span className="text-signal">Automatización e IA en Empresas Reales</span>
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-ink-soft px-4">
                  Resultados auditados en clínicas, logística, despachos de abogados y construcción: reducción de errores y retornos de inversión superiores al +200%.
                </p>
              </header>

              {/* Stats Section - Premium Redesigned Cards */}
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-24 max-w-5xl mx-auto px-4"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                {[
                  { value: 15, prefix: "", suffix: " min", label: "Garantía de viabilidad o reembolso íntegro" },
                  { value: 100, prefix: "", suffix: "%", label: "Consultoría descontada si desarrollas con nosotros" },
                  { value: 24, prefix: "", suffix: "/7", label: "Agentes de IA operando sin turnos" }
                ].map((stat, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <div 
                      className="relative group bg-card border border-line p-8 sm:p-10 rounded-[2.5rem] text-center hover:border-signal/25 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500"
                      itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                    >
                    <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-3 text-ink group-hover:text-signal transition-colors duration-300" itemProp="name">
                      <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div className="text-ink-soft text-sm sm:text-base font-semibold tracking-wide leading-snug">{stat.label}</div>
                    <meta itemProp="position" content={(idx + 1).toString()} />
                    </div>
                  </FadeIn>
                ))}
              </div>
              <SuccessCasesCarousel />

              {/* CTA Button for Success Cases */}
              <div className="mt-12 sm:mt-16 text-center">
                <Link
                  href="/#consultoria"
                  className="inline-flex items-center justify-center bg-signal text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg hover:bg-signal-deep hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  aria-label="Reservar Consultoría"
                >
                  <span>Reservar Consultoría</span>
                  <ArrowRight
                    className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <section id="contacto" className="py-20 sm:py-32 relative bg-transparent overflow-hidden">
          {/* Aesthetic Background removed for pure white theme */}
          <div className="absolute inset-0 bg-transparent pointer-events-none" aria-hidden="true"></div>
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
              <header className="text-center mb-16 sm:mb-20">
                <h2
                  id="contact-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-ink mb-6 drop-shadow-sm"
                >
                  Solicita tu Diagnóstico Gratuito: <span className="text-signal">Hablemos de Tu Proyecto</span>
                </h2>
                <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl xl:text-2xl text-ink-soft leading-relaxed px-4">
                  Comienza hoy tu transformación operativa aportándonos detalles sobre tus procesos. Nuestro equipo de ingenieros analizará tu caso para diseñar la mejor arquitectura de Inteligencia Artificial.
                </p>
              </header>

              {/* Removed the 'What to expect' 3-column cards grid as requested */}

              {/* Custom Contact Form */}
              <ContactForm />

              {/* Trust indicators */}
              <div className="text-center mt-8 sm:mt-12">
                <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-ink-soft list-none">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                    <span className="font-medium text-sm sm:text-base">100% Gratuito</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                    <span className="font-medium text-sm sm:text-base">Sin Compromiso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                    <span className="font-medium text-sm sm:text-base">Respuesta Inmediata</span>
                  </li>
                </ul>
                <Link
                  href="#inicio"
                  className="mt-6 sm:mt-8 text-signal hover:text-blue-800 font-semibold text-base sm:text-lg hover:underline transition-colors duration-300 flex items-center gap-2 mx-auto"
                  aria-label="Volver al inicio de la página"
                >
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 rotate-180" aria-hidden="true" />
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Latest Articles Section */}
        <LatestArticles />

        {/* Footer */}
        <footer className="border-t border-line pt-16 pb-10">
          <div className="container mx-auto px-5 sm:px-8 max-w-[1360px]">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5 space-y-5">
                <Link href="/" className="inline-flex items-center tracking-tighter">
                  <span className="text-2xl font-extrabold text-signal">IA</span>
                  <span className="text-2xl font-black text-ink">4</span>
                  <span className="ml-1 text-2xl font-bold uppercase tracking-tight text-ink">PYMES</span>
                </Link>
                <p className="text-sm text-ink-soft max-w-[30ch]">
                  Desarrollo de software con IA para PYMES españolas.
                </p>
                <a
                  href="https://kribaia.com/proveedor/ia4pymes-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Sello kriterion de Kribaia - Proveedor Verificado de IA"
                  className="inline-block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://kribaia.com/badge/ia4pymes-tech.svg"
                    alt="Sello kriterion de Kribaia"
                    width={150}
                    height={40}
                    className="h-auto w-auto max-w-[150px]"
                    loading="lazy"
                  />
                </a>
              </div>

              <nav aria-label="Navegación del pie" className="md:col-span-4 grid grid-cols-2 gap-x-8 gap-y-3 content-start">
                <Link href="/#proceso" className="text-sm text-ink-soft hover:text-signal transition-colors">Proceso</Link>
                <Link href="/#casos-exito" className="text-sm text-ink-soft hover:text-signal transition-colors">Casos</Link>
                <Link href="/#calculadora" className="text-sm text-ink-soft hover:text-signal transition-colors">Calculadora</Link>
                <Link href="#faq" className="text-sm text-ink-soft hover:text-signal transition-colors">FAQ</Link>
                <Link href="/blog" className="text-sm text-ink-soft hover:text-signal transition-colors">Blog</Link>
                <Link href="/sectores" className="text-sm text-ink-soft hover:text-signal transition-colors">Sectores</Link>
                <ScrollTopLink href="/" className="text-sm text-ink-soft hover:text-signal transition-colors">Sobre nosotros</ScrollTopLink>
                <Link href="https://newsletter.ia4pymes.tech" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-soft hover:text-signal transition-colors">Newsletter</Link>
              </nav>

              <div className="md:col-span-3 space-y-5">
                <a
                  href="mailto:contacto@ia4pymes.tech"
                  className="inline-flex items-center gap-2 text-sm text-ink hover:text-signal transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  contacto@ia4pymes.tech
                </a>
                <div className="flex flex-wrap gap-2">
                  <a href="https://es.linkedin.com/company/ia4pymestech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:border-signal hover:text-signal transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61560704600913" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:border-signal hover:text-signal transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/ia4pymes/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:border-signal hover:text-signal transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.tiktok.com/@ia4pymes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:border-signal hover:text-signal transition-colors" aria-label="TikTok">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a9.14 9.14 0 0 0 5.25 1.63V7.23a5.27 5.27 0 0 1-1.34-.54z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@IA4PYMES" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:border-signal hover:text-signal transition-colors" aria-label="YouTube">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/Ia4Pymes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:border-signal hover:text-signal transition-colors" aria-label="X (Twitter)">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-3">
              <p className="text-[13px] text-ink-faint">© 2026 IA4PYMES</p>
              <div className="flex items-center gap-6">
                <Link href="#contacto" className="text-[13px] text-ink-soft hover:text-signal transition-colors">Contacto</Link>
                <Link href="/#consultoria" className="text-[13px] font-semibold text-signal hover:text-signal-deep transition-colors">Reservar consultoría</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
