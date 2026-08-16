import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Terminal, Sparkles, ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import { BlogChatWidgetLoader } from "@/components/blog-chat-widget-loader"
import ReadingProgressBar from "@/components/reading-progress-bar"
import { BlogAuthorAvatar } from "@/components/blog-author-avatar"

interface PageProps {
  params: Promise<{ sector: string; ciudad: string }>
}

// Configuración de rutas estáticas estrictas
export const dynamicParams = false

// Helper de normalización para admitir URLs con o sin acentos de forma robusta
function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function getSectorName(sector: string): string {
  const s = normalizeKey(sector)
  if (s === "clinicas") return "Clínicas"
  if (s === "abogados") return "Abogados"
  if (s === "gestorias") return "Gestorías"
  return sector
}

function getCityName(ciudad: string): string {
  const c = normalizeKey(ciudad)
  if (c === "madrid") return "Madrid"
  if (c === "barcelona") return "Barcelona"
  if (c === "valencia") return "Valencia"
  return ciudad.charAt(0).toUpperCase() + ciudad.slice(1)
}

// Mapa de contenidos con los párrafos segmentados en bloques más legibles
const contentMap: Record<
  string, // sector
  Record<
    string, // ciudad
    {
      paragraphs: string[]
      benefits: string[]
    }
  >
> = {
  clinicas: {
    madrid: {
      paragraphs: [
        "La implementación de inteligencia artificial en las clínicas de Madrid está revolucionando la gestión de la salud privada y la atención al paciente. En una urbe con alta competitividad y ritmo de vida acelerado, la integración de agentes conversacionales inteligentes permite automatizar la recepción de llamadas y la reserva de citas de manera ininterrumpida las 24 horas del día.",
        "Esto optimiza la productividad del personal administrativo y minimiza drásticamente las horas perdidas por citas no canceladas a tiempo. Los algoritmos predictivos analizan la demanda asistencial para ajustar las agendas médicas en tiempo real, garantizando una atención más rápida y personalizada.",
        "Al implementar estas tecnologías, los centros de salud madrileños logran reducir costes de operación, agilizar los flujos de trabajo internos y ofrecer una experiencia digital fluida que fideliza a los pacientes, mejorando la rentabilidad global de la consulta médica mediante una gestión moderna y adaptada al entorno tecnológico actual madrileño."
      ],
      benefits: [
        "Automatización de citas y recordatorios por WhatsApp 24/7 sin intervención manual.",
        "Reducción del absentismo de pacientes en hasta un 45% mediante alertas predictivas.",
        "Digitalización y transcripción automática de historiales médicos en tiempo real.",
        "Optimización de la agenda médica diaria para maximizar la ocupación de consultas."
      ]
    },
    barcelona: {
      paragraphs: [
        "La transformación digital y el uso de inteligencia artificial en las clínicas de Barcelona están redefiniendo el sector sanitario privado catalán. En una ciudad referente en innovación tecnológica, las clínicas implementan asistentes virtuales capaces de gestionar la atención al paciente multilingüe de forma ágil y automatizada.",
        "La automatización de citas y el seguimiento posoperatorio mediante IA garantizan una comunicación constante y sin demoras. Estas soluciones inteligentes minimizan las tareas manuales del equipo médico, permitiendo centrar los esfuerzos en el diagnóstico clínico y la atención directa.",
        "Además, el análisis de datos masivos ayuda a prever picos de demanda y organizar los recursos de forma óptma. Las clínicas barcelonesas que adoptan IA consiguen diferenciarse en un mercado altamente competitivo, logrando reducir los tiempos de espera y optimizando los costes de administración de forma sustancial, garantizando la máxima calidad en cada servicio de salud."
      ],
      benefits: [
        "Atención al paciente multilingüe automatizada para dar soporte inmediato y fluido.",
        "Seguimiento posoperatorio proactivo por canales digitales para mejorar el cuidado.",
        "Reducción sustancial del tiempo administrativo invertido en la recepción del centro.",
        "Planificación óptima de recursos médicos y boxes de consulta mediante análisis predictivo."
      ]
    },
    valencia: {
      paragraphs: [
        "Las clínicas de Valencia están adoptando la inteligencia artificial como una herramienta estratégica para optimizar su gestión diaria y mejorar la relación con el paciente. En el dinámico mercado sanitario valenciano, los sistemas inteligentes de automatización permiten coordinar las agendas de los médicos, gestionar los recordatorios de consulta de forma automática y procesar datos administrativos sin errores humanos.",
        "Los asistentes de IA responden preguntas frecuentes de manera inmediata por WhatsApp, liberando al personal de recepción para tareas complejas. Esta optimización operativa reduce las cancelaciones de última hora y maximiza el uso de las instalaciones médicas de la clínica.",
        "Con la integración de soluciones de IA, las clínicas valencianas logran un retorno de inversión inmediato a través del ahorro de tiempo, posicionándose a la vanguardia de la innovación médica y ofreciendo una atención rápida y de confianza a todos sus pacientes locales."
      ],
      benefits: [
        "Coordinación inteligente de agendas médicas para evitar solapamientos y huecos vacíos.",
        "Resolución instantánea de dudas frecuentes por chat 24 horas al día, 7 días a la semana.",
        "Disminución drástica de cancelaciones imprevistas mediante recordatorios interactivos.",
        "Aumento inmediato del retorno de inversión al liberar horas del personal administrativo."
      ]
    }
  },
  abogados: {
    madrid: {
      paragraphs: [
        "El sector legal en Madrid está experimentando una profunda evolución gracias a la adopción de la inteligencia artificial en despachos de abogados. En el centro neurálgico administrativo de España, los bufetes madrileños utilizan IA para agilizar el análisis exhaustivo de miles de contratos y jurisprudencia compleja en pocos segundos.",
        "Esto optimiza los tiempos de investigación judicial y permite redactar escritos jurídicos de manera más ágil y precisa. Los asistentes virtuales inteligentes atienden las consultas preliminares de los clientes web las 24 horas, filtrando y preclasificando los casos antes de la primera reunión.",
        "Con esta automatización de procesos repetitivos, los abogados de Madrid incrementan significativamente su productividad y reducen costes operativos internos. Adoptar tecnologías cognitivas no solo mejora el rendimiento del despacho, sino que garantiza una respuesta más rápida y eficiente a clientes exigentes que valoran la inmediatez y la excelencia jurídica."
      ],
      benefits: [
        "Análisis automatizado de miles de páginas de contratos y jurisprudencia en segundos.",
        "Redacción ágil y sin errores de escritos jurídicos y documentos de trámite repetitivos.",
        "Preclasificación automática de consultas de clientes mediante un asistente virtual web.",
        "Aumento de la facturación y la eficiencia general por hora de cada letrado."
      ]
    },
    barcelona: {
      paragraphs: [
        "La inteligencia artificial se ha consolidado como un factor diferencial indispensable para los despachos de abogados en Barcelona que buscan liderar la abogacía moderna. En el dinámico entorno empresarial barcelonés, la automatización legal mediante IA facilita el procesamiento automático de contratos, la revisión ágil de litigios y el análisis predictivo de resoluciones judiciales previas.",
        "Los asistentes virtuales automatizados optimizan la relación con los representados, respondiendo consultas básicas de manera inmediata y gestionando la agenda del despacho sin fricciones. Esto ahorra valiosas horas semanales que los letrados pueden destinar a la estrategia de defensa y a la negociación directa.",
        "Al integrar sistemas avanzados de IA, los bufetes en Barcelona mejoran su competitividad, reducen drásticamente los gastos generales y ofrecen un servicio jurídico adaptado a la velocidad digital que el tejido empresarial actual requiere para sus gestiones."
      ],
      benefits: [
        "Procesamiento ágil y automático de documentos y contratos en entorno corporativo.",
        "Análisis predictivo de sentencias judiciales basadas en históricos de resoluciones.",
        "Soporte inmediato y sin esperas a clientes para resolver cuestiones jurídicas básicas.",
        "Reducción directa de costes administrativos mediante flujos de trabajo inteligentes."
      ]
    },
    valencia: {
      paragraphs: [
        "Los despachos de abogados en Valencia están incorporando la inteligencia artificial para automatizar procesos administrativos y mejorar la rentabilidad de sus servicios legales. Los bufetes valencianos utilizan soluciones de automatización inteligente para redactar borradores contractuales, clasificar expedientes y analizar jurisprudencia local con una precisión sin precedentes.",
        "Los asistentes virtuales con IA atienden a clientes potenciales en la web corporativa, resolviendo dudas iniciales y recopilando información clave de forma segura y automatizada. Esto reduce las horas invertidas en tareas administrativas de bajo valor, permitiendo a los abogados valencianos focalizarse en la resolución de litigios y la asesoría personalizada.",
        "El uso estratégico de la IA en el sector legal valenciano no solo incrementa la eficiencia operativa de las firmas, sino que eleva la satisfacción del cliente al ofrecer un soporte legal más rápido, moderno, transparente y de altísima calidad."
      ],
      benefits: [
        "Reducción del tiempo de investigación legal mediante procesamiento inteligente.",
        "Clasificación automática e inteligente de expedientes y correos del despacho.",
        "Captación y filtrado automatizado de leads y clientes potenciales en la web corporativa.",
        "Mayor satisfacción del cliente gracias a respuestas ágiles y soporte de alta calidad."
      ]
    }
  },
  gestorias: {
    madrid: {
      paragraphs: [
        "Las gestorías de Madrid están transformando sus flujos de trabajo tradicionales mediante la implantación de tecnologías de inteligencia artificial. En un entorno regulatorio exigente y con una gran concentración de empresas y autónomos, la automatización inteligente es clave.",
        "Los sistemas de IA permiten el procesamiento automático de facturas y la extracción inmediata de datos contables mediante OCR inteligente, eliminando el registro manual propenso a errores. Además, la conciliación bancaria y la preparación de declaraciones fiscales se realizan de manera automática y segura.",
        "Los canales de comunicación con los clientes se agilizan gracias a asistentes virtuales de IA que aclaran dudas sobre plazos, normativas y estado de trámites las 24 horas del día. Al adoptar estas herramientas avanzadas, las gestorías madrileñas reducen sus costes de gestión, aumentan su capacidad operativa para captar nuevos clientes y garantizan un servicio de asesoramiento fiscal rápido y eficiente."
      ],
      benefits: [
        "Extracción automática y lectura inteligente de facturas (OCR) sin introducción manual.",
        "Conciliación bancaria automatizada con detección inmediata de descuadres contables.",
        "Atención automatizada 24/7 sobre plazos de impuestos y estados de trámites recurrentes.",
        "Reducción del tiempo de tramitación fiscal y aumento de la capacidad de captación."
      ]
    },
    barcelona: {
      paragraphs: [
        "La inteligencia artificial se ha convertido en el principal motor de eficiencia para las gestorías en Barcelona que buscan digitalizar sus procesos operativos. Los despachos de asesoría catalanes integran herramientas cognitivas para procesar grandes volúmenes de documentación fiscal, contable y laboral en cuestión de minutos.",
        "La extracción de datos inteligente mediante IA automatiza el asiento de facturas y la conciliación de cuentas bancarias sin intervención manual. Esto disminuye drásticamente el margen de error y optimiza el tiempo de entrega en la presentación de impuestos.",
        "Además, los asistentes virtuales responden consultas rutinarias de autónomos y pymes de forma instantánea, elevando la calidad de la atención al cliente. Con estas automatizaciones, las gestorías de Barcelona consiguen liberarse del papeleo administrativo pesado, enfocándose en la consultoría estratégica de alto valor y mejorando significativamente su rentabilidad operativa en el mercado local."
      ],
      benefits: [
        "Procesamiento masivo de documentación contable en minutos y con alta fiabilidad.",
        "Automatización del asiento diario de facturas directamente al software de gestión.",
        "Soporte inmediato por chat para resolver consultas frecuentes de autónomos y pymes.",
        "Aumento directo de la rentabilidad del despacho al eliminar tareas de bajo valor añadido."
      ]
    },
    valencia: {
      paragraphs: [
        "Las gestorías en Valencia están liderando la adopción de la inteligencia artificial para simplificar la contabilidad y la gestión laboral de sus clientes. Las asesorías valencianas emplean sistemas inteligentes para la lectura automática de facturas y recibos, lo que acelera el cierre contable mensual de forma exponencial.",
        "La automatización mediante IA optimiza los trámites administrativos ante la administración pública y facilita la conciliación de múltiples cuentas bancarias de manera simultánea y segura. Asimismo, la integración de agentes conversacionales permite dar respuestas inmediatas a preguntas frecuentes de clientes sobre nóminas o impuestos.",
        "El resultado para las gestorías valencianas es un incremento notable en su productividad diaria, logrando una drástica reducción de costes operativos y permitiendo ofrecer una asesoría financiera más ágil, proactiva y orientada a los resultados reales de cada pequeña y mediana empresa."
      ],
      benefits: [
        "Aceleración exponencial del cierre contable mensual y confección automática de libros.",
        "Automatización en la presentación de trámites ante la Seguridad Social y Hacienda.",
        "Respuestas automatizadas al instante sobre convenios laborales, nóminas e impuestos.",
        "Reducción directa de costes de personal administrativo en tareas contables rutinarias."
      ]
    }
  }
}

// Generación estática de parámetros para Next.js 15
export function generateStaticParams() {
  const sectors = ["clinicas", "abogados", "gestorias"]
  const cities = ["madrid", "barcelona", "valencia"]

  const paths: { sector: string; ciudad: string }[] = []
  for (const sector of sectors) {
    for (const city of cities) {
      paths.push({ sector, ciudad: city })
    }
  }
  return paths
}

// Generación de metadatos dinámica y adaptada al SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sector, ciudad } = await params
  const sectorName = getSectorName(sector)
  const cityName = getCityName(ciudad)

  return {
    title: `Soluciones de IA para ${sectorName} en ${cityName} · IA4PYMES`,
    description: `Optimiza tu negocio de ${sectorName.toLowerCase()} en ${cityName} con inteligencia artificial a medida. Automatiza procesos, citas 24/7 y aumenta tu ROI.`,
    alternates: {
      canonical: `https://ia4pymes.tech/sectores/${normalizeKey(sector)}/${normalizeKey(ciudad)}`,
    },
    openGraph: {
      title: `Soluciones de IA para ${sectorName} en ${cityName} · IA4PYMES`,
      description: `Optimiza tu negocio de ${sectorName.toLowerCase()} en ${cityName} con inteligencia artificial a medida.`,
      url: `https://ia4pymes.tech/sectores/${normalizeKey(sector)}/${normalizeKey(ciudad)}`,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IA4PYMES Sectores" }],
    },
  }
}

// Componente principal de la página
export default async function SectorCityPage({ params }: PageProps) {
  const { sector, ciudad } = await params
  
  const normSector = normalizeKey(sector)
  const normCity = normalizeKey(ciudad)

  const data = contentMap[normSector]?.[normCity]

  if (!data) {
    notFound()
  }

  const sectorName = getSectorName(sector)
  const cityName = getCityName(ciudad)

  const sectorFaqs = [
    {
      question: `¿Cómo ayuda la IA a las ${sectorName.toLowerCase()} en ${cityName}?`,
      answer: data.paragraphs[0] || `La inteligencia artificial permite automatizar la atención a clientes, la gestión de citas y el procesamiento de documentos para ${sectorName.toLowerCase()} en ${cityName}.`
    },
    {
      question: `¿Cuáles son los principales beneficios de automatizar una empresa de ${sectorName.toLowerCase()} en ${cityName}?`,
      answer: data.benefits.join(" ")
    },
    {
      question: `¿Cuánto tiempo lleva implementar un sistema de IA para ${sectorName.toLowerCase()}?`,
      answer: `El diagnóstico inicial toma entre 1 y 2 semanas, seguido de un despliegue modular de 2 a 4 semanas adaptado a la operativa de tu negocio en ${cityName}.`
    },
    {
      question: `¿Están protegidos los datos de clientes y expedientes bajo el RGPD?`,
      answer: `Absolutamente. Todas las soluciones implementadas por IA4PYMES cumplen con el RGPD y el Reglamento de IA de la UE de 2026, con opción de despliegue 100% privado en servidores locales.`
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `IA4PYMES - Soluciones de IA para ${sectorName} en ${cityName}`,
    "url": `https://ia4pymes.tech/sectores/${normSector}/${normCity}`,
    "image": "https://ia4pymes.tech/og-image.png",
    "description": `Automatización de procesos, agentes conversacionales y modelos de IA a medida para ${sectorName.toLowerCase()} en ${cityName}.`,
    "priceRange": "€€",
    "telephone": "+34-600-000-000",
    "email": "contacto@ia4pymes.tech",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "ES"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "provider": {
      "@type": "Organization",
      "name": "IA4PYMES",
      "url": "https://ia4pymes.tech",
      "logo": "https://ia4pymes.tech/LOGO.png"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": sectorFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sectores",
        "item": "https://ia4pymes.tech/sectores"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${sectorName} en ${cityName}`,
        "item": `https://ia4pymes.tech/sectores/${normSector}/${normCity}`
      }
    ]
  }

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ReadingProgressBar />

      {/* Hero Header (Light & Professional) */}
      <header className="relative bg-[#020617] min-h-[40vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          {/* Navigation */}
          <nav className="mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer group text-sm font-bold uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retornar al sistema
            </Link>
          </nav>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">
              <Terminal className="w-3.5 h-3.5" />
              <span>/sectores/{normSector}/{normCity}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-blue-400" />
              {cityName.toUpperCase()}
            </div>
          </div>

          {/* Title (H1) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(37,99,235,0.3)] mb-6">
            Soluciones de IA para {sectorName} en {cityName}
          </h1>

          {/* Author & Date Card */}
          <div className="inline-flex flex-wrap items-center gap-8 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-4">
              <BlogAuthorAvatar />
              <div>
                <p className="font-black text-white text-sm uppercase tracking-tight">IA4PYMES</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Research Team</p>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-slate-100/10" />
            <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <Calendar className="w-5 h-5 text-blue-500" />
              <time dateTime={new Date().toISOString().split('T')[0]}>
                {new Date().toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>

        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      </header>

      {/* Reading Area - Clean & High Readability */}
      <article className="py-20 sm:py-32 bg-[#020617] relative border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-[820px]">
          {/* Contenedor principal con estilos de lectura refinados del blog */}
          <div className="blog-article-content prose prose-lg md:prose-xl max-w-none 
              prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:font-medium
              prose-strong:text-white prose-strong:font-black
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 transition-colors">
            
            {data.paragraphs.map((p, idx) => (
              <p 
                key={idx} 
                className={idx === 0 ? "lead text-xl sm:text-2xl text-slate-200 leading-relaxed font-semibold mb-8 text-pretty" : "text-slate-300 leading-relaxed font-medium mb-6 text-pretty"}
              >
                {p}
              </p>
            ))}

            <h2 className="text-3xl font-black text-white mt-16 mb-8 tracking-tighter">
              4 Beneficios clave de la IA para {sectorName.toLowerCase()} en {cityName}
            </h2>

            <ul className="space-y-6 list-none pl-0">
              {data.benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex gap-5 items-start bg-white/[0.02] border border-white/5 hover:border-blue-500/20 p-6 rounded-3xl transition-all duration-300 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-mono text-xs font-black text-blue-400">0{index + 1}</span>
                  </div>
                  <span className="text-slate-300 font-medium leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 mx-auto shadow-lg shadow-blue-600/20">
            <Terminal className="w-4 h-4" />
            initiating_deployment...
          </div>

          <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter leading-tight">
            Pasa de la teoría a la <span className="text-blue-500">ejecución</span>
          </h2>

          <p className="text-xl text-slate-400 mb-14 leading-relaxed font-medium max-w-2xl mx-auto text-pretty">
            El conocimiento sin implementación técnica es solo entretenimiento. Auditamos los procesos de tu empresa en {cityName} para integrar arquitecturas de IA que escalan tu productividad de forma empírica.
          </p>

          <Link
            href="/#contacto"
            className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-full font-black hover:bg-blue-700 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-blue-600/30 cursor-pointer text-lg uppercase tracking-wide"
          >
            Quiero una demo gratuita
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Blog floating chat widget */}
      <BlogChatWidgetLoader lang="es" />

      {/* Premium Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3 text-slate-500 font-mono text-xs font-black uppercase tracking-widest">
            <Terminal className="w-5 h-5" />
            <span>IA4PYMES_CORE_SYSTEM // {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/blog" className="text-sm font-black text-slate-500 hover:text-blue-500 transition-colors cursor-pointer uppercase tracking-widest">
              Documentación
            </Link>
            <Link href="/" className="text-sm font-black text-slate-500 hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-widest">
              Retornar al sistema
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
