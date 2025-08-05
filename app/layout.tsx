import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "I4PYMES - Automatización con IA para PYMES | Soluciones Personalizadas",
  description:
    "Automatiza tu PYME con herramientas de IA 100% personalizadas. Reducimos el 80% del tiempo en tareas repetitivas. Chatbots, automatización de procesos y más. Consulta gratuita.",
  keywords: [
    "automatización PYMES",
    "inteligencia artificial empresas",
    "chatbots personalizados",
    "automatización procesos",
    "IA para pequeñas empresas",
    "herramientas IA medida",
    "consultoría IA",
    "transformación digital PYMES",
    "software personalizado IA",
    "automatización tareas repetitivas",
  ],
  authors: [{ name: "I4PYMES" }],
  creator: "I4PYMES",
  publisher: "I4PYMES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ia4pymes.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    title: "I4PYMES - Automatización con IA para PYMES | Soluciones 100% Personalizadas",
    description:
      "Transformamos tu PYME con IA personalizada. Automatizamos procesos, creamos chatbots y herramientas específicas para tu negocio. 80% menos tiempo en tareas repetitivas.",
    url: "https://ia4pymes.com",
    siteName: "I4PYMES",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "I4PYMES - Automatización con IA para PYMES",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I4PYMES - Automatización con IA para PYMES",
    description:
      "Herramientas de IA 100% personalizadas para PYMES. Automatiza procesos, crea chatbots y reduce 80% el tiempo en tareas repetitivas.",
    images: ["/twitter-image.jpg"],
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
  verification: {
    google: "tu-codigo-google-search-console",
    // yandex: "tu-codigo-yandex",
    // yahoo: "tu-codigo-yahoo",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />

        {/* Preload Calendly resources */}
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />

        {/* Favicon optimizado */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "I4PYMES",
              description: "Soluciones de Inteligencia Artificial personalizadas para PYMES",
              url: "https://ia4pymes.com",
              logo: "https://ia4pymes.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34-XXX-XXX-XXX",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
              sameAs: ["https://linkedin.com/company/ia4pymes", "https://twitter.com/ia4pymes"],
              offers: {
                "@type": "Offer",
                name: "Consulta Gratuita de IA",
                description: "Consulta gratuita de 30 minutos para analizar tu negocio",
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
              name: "I4PYMES",
              description: "Automatización con IA para PYMES - Soluciones personalizadas",
              url: "https://ia4pymes.com",
              telephone: "+34-XXX-XXX-XXX",
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
                name: "I4PYMES",
                url: "https://ia4pymes.com",
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
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-slate-800`}>{children}</body>
    </html>
  )
}
