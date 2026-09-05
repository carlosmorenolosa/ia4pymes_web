import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowRight, Building2, Scale, Calculator, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Soluciones de Inteligencia Artificial por Sector y Ciudad | IA4PYMES",
  description: "Descubre cómo la IA y la automatización agéntica transforman clínicas, despachos de abogados y gestorías en Madrid, Barcelona y Valencia. Auditoría e integración a medida.",
  keywords: [
    "IA para clínicas",
    "IA para abogados",
    "IA para gestorías",
    "automatización IA Madrid",
    "automatización IA Barcelona",
    "automatización IA Valencia",
    "agentes IA PYMEs España",
  ],
  alternates: {
    canonical: "https://ia4pymes.tech/sectores",
  },
  openGraph: {
    title: "Soluciones de Inteligencia Artificial por Sector | IA4PYMES",
    description: "Casos de uso y guías de implantación de IA para clínicas, abogados y gestorías en las principales ciudades de España.",
    url: "https://ia4pymes.tech/sectores",
    siteName: "IA4PYMES",
    locale: "es_ES",
    type: "website",
  },
}

const SECTORS = [
  {
    key: "clinicas",
    name: "Clínicas y Salud Privada",
    icon: Building2,
    description: "Automatización 24/7 de citación médica, gestión inteligente de agendas y transcripción asistida de historiales clínicos.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    key: "abogados",
    name: "Despachos de Abogados",
    icon: Scale,
    description: "Búsqueda jurídica automatizada sobre bases de datos locales, resumen de expedientes complejos y análisis regulatorio.",
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30",
  },
  {
    key: "gestorias",
    name: "Gestorías y Asesorías",
    icon: Calculator,
    description: "Extracción OCR inteligente de facturas, cuadre contable asistido por IA e integración directa con ERPs corporativos.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
]

const CITIES = [
  { key: "madrid", name: "Madrid" },
  { key: "barcelona", name: "Barcelona" },
  { key: "valencia", name: "Valencia" },
]

export default function SectoresPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Soluciones de Inteligencia Artificial por Sector | IA4PYMES",
    "description": "Soluciones de automatización e integración de IA privada para clínicas, despachos de abogados y gestorías en España.",
    "url": "https://ia4pymes.tech/sectores",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://ia4pymes.tech"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sectores",
          "item": "https://ia4pymes.tech/sectores"
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": SECTORS.map((sector, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": sector.name,
        "description": sector.description,
        "url": `https://ia4pymes.tech/sectores/${sector.key}/madrid`
      }))
    }
  }

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "IA4PYMES - Consultoría de IA por Sectores",
    "url": "https://ia4pymes.tech/sectores",
    "image": "https://ia4pymes.tech/og-image.png",
    "description": "Especialización sectorial en ingeniería de inteligencia artificial para clínicas, abogados y gestorías en Madrid, Barcelona y Valencia.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "areaServed": [
      { "@type": "City", "name": "Madrid" },
      { "@type": "City", "name": "Barcelona" },
      { "@type": "City", "name": "Valencia" }
    ]
  }

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />

      {/* Header Bar */}
      <header className="border-b border-white/10 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between max-w-7xl">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
              IA
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              IA4PYMES<span className="text-blue-500">.tech</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/#consultoria"
              className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-600/20"
            >
              Consultoría Gratuita
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Especialización por Sector & Ciudad
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight mb-6">
            Soluciones de IA Adaptadas a Tu <span className="text-blue-500">Sector</span> y <span className="text-cyan-400">Ciudad</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Modelos de IA privada, automatización de procesos y agentes autónomos configurados para los requerimientos operativos de tu empresa en España.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="pb-24 container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {SECTORS.map((sector) => {
            const Icon = sector.icon
            return (
              <div
                key={sector.key}
                className={`rounded-3xl bg-slate-900/60 border ${sector.borderColor} p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300`}
              >
                <div className={`absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br ${sector.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {sector.name}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {sector.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    Selecciona tu Ciudad:
                  </h3>
                  <div className="flex flex-col gap-2">
                    {CITIES.map((city) => (
                      <Link
                        key={city.key}
                        href={`/sectores/${sector.key}/${city.key}`}
                        className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-blue-600/20 hover:border-blue-500/40 text-slate-300 hover:text-white text-sm font-semibold transition-all group/link"
                      >
                        <span>{sector.name.split(" ")[0]} en {city.name}</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover/link:text-blue-400 group-hover/link:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿No encuentras tu sector o ciudad?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Diseñamos arquitecturas de IA a medida para cualquier tipo de negocio con integración directa en tus sistemas existentes.
          </p>
          <Link
            href="/#consultoria"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-600/25"
          >
            Solicitar Auditoría de Procesos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
