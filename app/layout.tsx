import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { CookieConsent } from "@/components/cookie-consent"
import { Analytics } from "@vercel/analytics/next"
import { LeadsyScript } from "@/components/leadsy-script"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "IA4PYMES | Agencia de Automatización con IA en España · ROI +360%",
  description:
    "Agencia de Inteligencia Artificial para PYMES y empresas en España. Eliminamos tareas repetitivas y reducimos costes operativos con agentes de IA a medida. +1.000h ahorradas/mes y +360% ROI medio.",
  keywords: [
    // Intención comercial y entidad corporativa
    "IA4PYMES",
    "agencia de automatización con IA España",
    "agencia inteligencia artificial para empresas",
    "agentes de IA para PYMES",
    "consultoría inteligencia artificial PYME Madrid Barcelona Valencia",
    "integración agentes IA ERP CRM",
    "automatizar procesos empresa con IA",
    // Long-tail por sector y caso de uso B2B
    "automatización tareas repetitivas pequeña empresa",
    "automatizar atención al cliente con IA",
    "agente IA para ventas y gestión comercial",
    "cuánto cuesta implementar IA en una empresa España",
    "reducir costes operativos con inteligencia artificial",
    "ROI inteligencia artificial PYME",
  ],
  authors: [{ name: "IA4PYMES" }],
  creator: "IA4PYMES",
  publisher: "IA4PYMES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ia4pymes.tech"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "IA4PYMES | Agencia de Automatización con IA en España · ROI +360%",
    description:
      "Agencia de Inteligencia Artificial para PYMES y empresas en España. Eliminamos tareas repetitivas y reducimos costes operativos con agentes de IA a medida. +1.000h ahorradas/mes.",
    url: "https://ia4pymes.tech",
    siteName: "IA4PYMES",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IA4PYMES - Agencia de Automatización con IA para PYMES en España",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA4PYMES | Agencia de Automatización con IA en España · ROI +360%",
    description:
      "Agencia de Inteligencia Artificial para PYMES y empresas en España. Eliminamos tareas repetitivas y reducimos costes operativos con agentes de IA a medida.",
    images: ["/og-image.png"],
    creator: "@ia4pymes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "TU-CODIGO-AQUI", // Añade tu código de Google Search Console
  // },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Inline bot detection — runs before React hydration to instantly hide splash for Lighthouse/Googlebot */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(navigator.webdriver || /Lighthouse|Headless|Googlebot|bingbot/i.test(navigator.userAgent)){window.__IS_BOT=true;var s=document.createElement('style');s.textContent='.splash-overlay{display:none!important}';document.head.appendChild(s)}}catch(e){}})()`,
          }}
        />
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://r2.leadsy.ai" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8255889676002687"
          crossOrigin="anonymous"
        />

        {/* Agentic Web & WebMCP Declarations */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM documentation" />
        <meta name="ai-agent" content="enabled" />

        {/* Favicon optimizado */}
        <link rel="icon" href="/LOGO.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/LOGO.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* WebSite Schema — habilita Sitelinks Searchbox en Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "IA4PYMES",
              url: "https://ia4pymes.tech",
              description: "Automatización con Inteligencia Artificial para PYMES en España",
              inLanguage: "es-ES",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://ia4pymes.tech/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IA4PYMES",
              alternateName: "IA 4 PYMES",
              description: "Agencia de automatización de procesos e Inteligencia Artificial a medida para PYMES en España",
              url: "https://ia4pymes.tech",
              logo: "https://ia4pymes.tech/LOGO.png",
              knowsAbout: [
                "Inteligencia Artificial para PYMES",
                "Automatización de Procesos Empresariales",
                "Chatbots Empresariales RAG",
                "Agentes de Voz con Inteligencia Artificial",
                "Despliegue de LLMs Privados y Locales",
                "Reducción de Costes Operativos",
                "Cumplimiento RGPD y EU AI Act"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English"],
                email: "contacto@ia4pymes.tech",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
              sameAs: [
                "https://es.linkedin.com/company/ia4pymestech", 
                "https://twitter.com/ia4pymes",
                "https://www.facebook.com/profile.php?id=61560704600913",
                "https://www.instagram.com/ia4pymes/"
              ],
              offers: {
                "@type": "Offer",
                name: "Consultoría de Inteligencia Artificial para PYMEs",
                description: "Sesión estratégica para auditar procesos y calcular el ROI esperado antes de desarrollar",
                price: "0",
                priceCurrency: "EUR",
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "IA4PYMES",
              description: "Automatización con IA para PYMES - Soluciones personalizadas",
              url: "https://ia4pymes.tech",
              email: "contacto@ia4pymes.tech",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "€€",
              serviceArea: {
                "@type": "Country",
                name: "España",
              },
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Automatización con IA para PYMES",
              description:
                "Desarrollo de herramientas de inteligencia artificial personalizadas para pequeñas y medianas empresas",
              provider: {
                "@type": "Organization",
                name: "IA4PYMES",
                url: "https://ia4pymes.tech",
              },
              serviceType: "Automatización empresarial",
              areaServed: "España",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de IA",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Chatbots Personalizados",
                      description: "Desarrollo de chatbots específicos para tu negocio",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Automatización de Procesos",
                      description: "Automatización de tareas repetitivas empresariales",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* FAQPage Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es IA4PYMES?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IA4PYMES es una agencia especializada en automatización de procesos para PYMES mediante Inteligencia Artificial. Desarrollamos chatbots, automatizamos tareas repetitivas y creamos herramientas de IA personalizadas para cada negocio, con un ROI medio del +360%.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto cuesta automatizar mi negocio con IA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El coste depende del proyecto específico. Ofrecemos una consulta gratuita de 30 minutos para analizar tus necesidades y darte un presupuesto personalizado sin compromiso. Antes de desarrollar nada, calculamos el ROI esperado: si los números no te benefician, no avanzamos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipo de empresas pueden beneficiarse de vuestros servicios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cualquier PYME que quiera reducir tiempo en tareas repetitivas, mejorar la atención al cliente con chatbots, o automatizar procesos internos. Trabajamos con empresas de todos los sectores en España: comercio, logística, servicios profesionales, hostelería, inmobiliaria y más.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo tarda en implementarse una solución de IA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Un chatbot básico puede estar listo en 2-3 semanas. Los proyectos de automatización de procesos suelen tardar entre 1 y 4 meses. Siempre trabajamos de forma colaborativa y con seguimiento continuo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Necesito conocimientos técnicos para usar vuestras soluciones de IA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Nuestras soluciones están diseñadas para que cualquier persona las use sin formación técnica. Nos encargamos de toda la implementación y formamos a tu equipo paso a paso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué diferencia a IA4PYMES de otras agencias de IA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nos especializamos exclusivamente en PYMES españolas. No ofrecemos soluciones genéricas: cada proyecto se construye desde cero para tu negocio concreto. Además, solo iniciamos el desarrollo si el ROI calculado es favorable para ti.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es seguro para mis datos trabajar con IA4PYMES?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Cumplimos con el RGPD, firmamos un acuerdo de confidencialidad y tus datos jamás se usan para entrenar modelos de IA públicos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puéis automatizar la atención al cliente de mi empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, es uno de nuestros casos de uso más frecuentes. Desarrollamos chatbots y agentes de IA que responden a clientes 24/7 por WhatsApp, web o email, reduciendo el tiempo de respuesta y liberando a tu equipo para tareas de mayor valor.",
                  },
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://ia4pymes.tech",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Proceso",
                  item: "https://ia4pymes.tech/#proceso",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Casos de Éxito",
                  item: "https://ia4pymes.tech/#casos-exito",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Beneficios",
                  item: "https://ia4pymes.tech/#beneficios",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contacto",
                  item: "https://ia4pymes.tech/#contacto",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans text-slate-900`}>
        {children}
        <Analytics />
        <CookieConsent />
        <CustomCursor />
        <LeadsyScript />
      </body>
    </html>
  )
}

