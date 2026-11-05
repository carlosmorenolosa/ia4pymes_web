import type { LucideIcon } from "lucide-react"
import {
  BarChart2,
  Calculator,
  Code,
  Factory,
  MessageSquare,
  Phone,
  Scale,
  Server,
  Settings,
  ShoppingBag,
  Stethoscope,
  Truck,
} from "lucide-react"

/**
 * Service landing pages. Each service has one entry per language; the page
 * component renders any of them with the home page's markup and classes.
 * Adding a service means adding a `ServiceContent` entry here and a thin route.
 *
 * Copy rule: only claims already published on the site (home, FAQ, consulting
 * section, contact form, llms.txt). No new figures.
 */

export type ServiceLang = "es" | "en"
export type ServiceId = "ai-agents"

export const SITE_URL = "https://ia4pymes.tech"

export interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
  benefit?: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceArticle {
  title: string
  href: string
}

export interface ServiceContent {
  id: ServiceId
  lang: ServiceLang
  /** Path without domain, e.g. "/agentes-ia-empresas". */
  path: string
  /** Path of the same service in the other language. */
  alternatePath: string
  meta: {
    title: string
    description: string
    ogTitle: string
  }
  /** Short name used in breadcrumbs and the Service schema. */
  name: string
  serviceType: string
  hero: {
    h1Lead: string
    h1Highlight: string
    intro: string
    secondaryCta: { label: string; href: string }
  }
  what: {
    headingLead: string
    headingHighlight: string
    intro: string
    cards: ServiceCard[]
  }
  useCases: {
    id: string
    headingLead: string
    headingHighlight: string
    intro: string
    cards: ServiceCard[]
    example?: { text: string; link?: ServiceArticle }
  }
  pricing: {
    headingLead: string
    headingHighlight: string
    intro: string
  }
  articles: {
    headingLead: string
    headingHighlight: string
    items: ServiceArticle[]
  }
  faq: {
    headingLead: string
    headingHighlight: string
    subtitle: string
    items: ServiceFaq[]
  }
  finalCta: {
    headingLead: string
    headingHighlight: string
    text: string
  }
}

/** Strings shared by every service page in one language. */
export const SERVICE_UI = {
  es: {
    homePath: "/",
    homeLabel: "Inicio",
    backHome: "Volver al Inicio",
    backHomeAria: "Volver a la página de inicio",
    cta: { label: "Reservar Consultoría", href: "/#consultoria" },
    readArticle: "Leer artículo",
    faqCtaQuestion: "¿Tienes alguna otra duda?",
    offerName: "Consultoría de diagnóstico y hoja de ruta de IA",
    process: {
      headingLead: "Metodología en 3 Pasos:",
      headingHighlight: "Auditoría, Integración y Despliegue",
      intro:
        "Un proceso de ingeniería transparente diseñado para maximizar el retorno de inversión y blindar la privacidad de tus datos.",
      steps: [
        {
          icon: BarChart2,
          step: "01",
          title: "Auditoría Técnica y Diagnóstico de Fugas",
          description:
            "Estudiamos a fondo los flujos operativos de tu empresa para identificar cuellos de botella y cuantificar las horas desperdiciadas en tareas manuales que la IA puede automatizar.",
          benefit: "Fugas de Tiempo Cuantificadas",
        },
        {
          icon: Code,
          step: "02",
          title: "Arquitectura de Agentes e Integración ERP/CRM",
          description:
            "Diseñamos y desarrollamos agentes de IA privados conectando directamente con tus sistemas de gestión (ERP, CRM, bases de datos), garantizando un ROI positivo en tiempo récord.",
          benefit: "Integración con tus sistemas",
        },
        {
          icon: Settings,
          step: "03",
          title: "Despliegue Privado y Escalado Continuo",
          description:
            "Implementamos la solución bajo los más estrictos estándares de privacidad de datos, monitorizando el rendimiento en tiempo real y optimizando los modelos periódicamente.",
          benefit: "Privacidad y Control Total",
        },
      ],
    },
    pricing: {
      stats: [
        { value: "299 €", label: "Consultoría de diagnóstico + IVA, descontada al 100% si desarrollas con nosotros" },
        { value: "2-3 sem.", label: "Diagnóstico inicial de tus procesos" },
        { value: "1-4 meses", label: "Desarrollo y puesta en marcha" },
      ],
      guaranteeTitle: "Garantía de Viabilidad de 15 Minutos",
      guaranteeText:
        "Si en los primeros 15 minutos de la videollamada vemos que tu negocio no se puede beneficiar directamente de la IA, cancelamos la sesión y te reembolsamos el 100% del importe.",
      budgetTitle: "Rangos de inversión del proyecto",
      budgetIntro: "Al pedirnos presupuesto eliges uno de estos rangos:",
      budgetRanges: ["2.000 € - 10.000 €", "10.000 € - 30.000 €", "30.000 € - 50.000 €", "Más de 50.000 €"],
    },
  },
  en: {
    homePath: "/en",
    homeLabel: "Home",
    backHome: "Back to Home",
    backHomeAria: "Back to the home page",
    cta: { label: "Book a Consultation", href: "/en#consultoria" },
    readArticle: "Read article",
    faqCtaQuestion: "Have any other questions?",
    offerName: "AI diagnosis and roadmap consultation",
    process: {
      headingLead: "3-Step Methodology:",
      headingHighlight: "Audit, Integration & Deployment",
      intro:
        "A transparent engineering process designed to maximize return on investment and protect your data privacy.",
      steps: [
        {
          icon: BarChart2,
          step: "01",
          title: "Technical Audit & Inefficiency Diagnosis",
          description:
            "We deeply analyze your company's operational workflows to pinpoint bottlenecks and quantify wasted hours on manual tasks that AI can automate.",
          benefit: "Quantified Time Savings",
        },
        {
          icon: Code,
          step: "02",
          title: "Agent Architecture & ERP/CRM Integration",
          description:
            "We design and build private AI agents connecting directly to your management systems (ERP, CRM, databases), ensuring positive ROI in record time.",
          benefit: "Integration with your systems",
        },
        {
          icon: Settings,
          step: "03",
          title: "Private Deployment & Continuous Scaling",
          description:
            "We deploy the solution under the strictest data privacy standards, monitoring performance in real time and regularly optimizing the models.",
          benefit: "Total Privacy & Control",
        },
      ],
    },
    pricing: {
      stats: [
        { value: "299 €", label: "Diagnosis consultation + VAT, 100% deducted if we build your project" },
        { value: "2-3 wk", label: "Initial diagnosis of your processes" },
        { value: "1-4 mo", label: "Development and deployment" },
      ],
      guaranteeTitle: "15-Minute Viability Guarantee",
      guaranteeText:
        "If in the first 15 minutes of the video call we see that your business cannot benefit from AI, we cancel the session and refund 100% of the cost.",
      budgetTitle: "Project investment ranges",
      budgetIntro: "When you request a quote, you pick one of these ranges:",
      budgetRanges: ["2,000 € - 10,000 €", "10,000 € - 30,000 €", "30,000 € - 50,000 €", "More than 50,000 €"],
    },
  },
} as const

export type ServiceUi = (typeof SERVICE_UI)[ServiceLang]

const aiAgentsEs: ServiceContent = {
  id: "ai-agents",
  lang: "es",
  path: "/agentes-ia-empresas",
  alternatePath: "/en/ai-agents-for-business",
  meta: {
    title: "Agentes de IA para Empresas y PYMES con RGPD | IA4PYMES",
    description:
      "Agentes de IA que atienden WhatsApp, web, correo y teléfono con los datos de tu empresa. Nube europea u on-premise. Calculamos el ROI antes de desarrollar.",
    ogTitle: "Agentes de IA para empresas y pymes | IA4PYMES",
  },
  name: "Agentes de IA para empresas",
  serviceType: "Desarrollo de agentes de IA",
  hero: {
    h1Lead: "Agentes de IA para empresas,",
    h1Highlight: "privados y conectados a tus sistemas",
    intro:
      "IA4PYMES desarrolla agentes de IA para pymes en España: chatbots que responden por WhatsApp, web y correo con tus tarifas, catálogos y manuales, y agentes de voz que atienden llamadas y reservan citas en tu calendario. Calculamos el ROI de tu proyecto antes de escribir la primera línea de código.",
    secondaryCta: { label: "Ver casos de uso", href: "#casos-de-uso" },
  },
  what: {
    headingLead: "Qué hace un agente de IA",
    headingHighlight: "en tu PYME",
    intro:
      "Un agente de IA consulta la información de tu empresa y la usa para atender clientes o completar tareas que hoy hace una persona a mano. Desarrollamos tres tipos.",
    cards: [
      {
        icon: MessageSquare,
        title: "Agentes conversacionales 24/7",
        description:
          "Atienden WhatsApp, el chat de tu web y el correo. Responden con tus tarifas, catálogos, normativas internas y manuales técnicos, que buscan en la base de conocimiento de tu empresa.",
        benefit: "WhatsApp, web y correo",
      },
      {
        icon: Phone,
        title: "Agentes de voz con IA",
        description:
          "Reciben y hacen llamadas en lenguaje natural con una latencia inferior a 300 ms. Cualifican oportunidades comerciales y reservan citas en Google Calendar, Cal.com o tu CRM.",
        benefit: "Citas en tu calendario",
      },
      {
        icon: Server,
        title: "Modelos de IA privados",
        description:
          "Desplegamos modelos abiertos como Qwen, DeepSeek, Llama o Mistral en la nube europea o en tus servidores. Tus datos quedan aislados y el coste es predecible, sin pagar por token a terceros.",
        benefit: "Nube europea u on-premise",
      },
    ],
  },
  useCases: {
    id: "casos-de-uso",
    headingLead: "Casos de uso de agentes de IA",
    headingHighlight: "por sector",
    intro:
      "Estos son los sectores en los que nos especializamos y las tareas que un agente asume en cada uno.",
    cards: [
      {
        icon: Stethoscope,
        title: "Clínicas médicas y dentales",
        description:
          "Un agente de voz atiende el teléfono, resuelve las dudas habituales de los pacientes y reserva la cita en la agenda de la clínica.",
      },
      {
        icon: Scale,
        title: "Despachos de abogados",
        description:
          "El agente recibe las consultas por la web o WhatsApp, recoge los datos del caso y agenda la primera reunión en el CRM del despacho.",
      },
      {
        icon: Calculator,
        title: "Asesorías y gestorías",
        description:
          "Responde a los clientes con la información de tus procedimientos internos y ordena la bandeja de correo para que el equipo revise solo lo que necesita su criterio.",
      },
      {
        icon: Truck,
        title: "Logística y distribución",
        description:
          "Contesta por WhatsApp y correo a las consultas de clientes con tus tarifas y condiciones de servicio, sin esperar a que alguien de la oficina esté libre.",
      },
      {
        icon: Factory,
        title: "Comercio industrial B2B",
        description:
          "Busca en catálogos y manuales técnicos y responde a clientes y comerciales con la referencia y la ficha correctas.",
      },
      {
        icon: ShoppingBag,
        title: "Retail",
        description:
          "Un chatbot en tu web y en WhatsApp responde preguntas sobre productos y condiciones de compra a partir de tu catálogo.",
      },
    ],
    example: {
      text: "Para la Asociación de Hostelería y Turismo de Navarra desarrollamos un chatbot con IA que atiende al instante las consultas de asociados y visitantes en su web.",
      link: {
        title: "Lee el caso completo",
        href: "/blog/caso-real-chatbots-ia-hosteleria-navarra",
      },
    },
  },
  pricing: {
    headingLead: "Precio y plazos de un",
    headingHighlight: "agente de IA",
    intro:
      "El coste depende de los canales, las integraciones y el volumen de consultas. Por eso empezamos con una consultoría que fija el alcance y el retorno esperado antes de presupuestar el desarrollo.",
  },
  articles: {
    headingLead: "Artículos sobre",
    headingHighlight: "agentes de IA",
    items: [
      {
        title: "¿Cómo automatizar la atención telefónica de tu negocio con IA de voz sin que tus clientes se enfaden?",
        href: "/blog/como-automatizar-atencion-telefonica-agentes-voz-ia-pymes",
      },
      {
        title: "La batalla del minuto: Análisis de ROI de Agentes de Voz con IA vs. Call Center Tradicional para PYMEs",
        href: "/blog/roi-agentes-de-voz-ia-vs-call-center-pymes",
      },
      {
        title: "De PDFs Olvidados a Decisiones Inteligentes: Cómo crear la Base de Conocimiento de tu PYME con IA",
        href: "/blog/base-de-conocimiento-ia-pymes-rag-documentos",
      },
    ],
  },
  faq: {
    headingLead: "Dudas frecuentes sobre",
    headingHighlight: "agentes de IA",
    subtitle: "Lo que suelen preguntarnos las pymes antes de poner un agente a trabajar.",
    items: [
      {
        question: "¿Qué es un agente de IA para empresas?",
        answer:
          "Es un programa que usa la información de tu empresa para atender consultas o completar tareas. Puede responder por WhatsApp, web o correo con tus tarifas y manuales, atender llamadas en lenguaje natural o reservar citas en tu calendario.",
      },
      {
        question: "¿Tengo que cambiar los programas que ya utilizo?",
        answer:
          "No. El agente se conecta a los sistemas que ya usas (ERP, CRM, correo, calendario o WhatsApp Business) y se adapta a tu forma de trabajar actual, sin cortes operativos ni migraciones.",
      },
      {
        question: "¿Están a salvo los datos de mi empresa?",
        answer:
          "Sí. Cumplimos con el RGPD, firmamos un acuerdo de confidencialidad y tu información nunca se usa para entrenar modelos de IA públicos. El agente se despliega en la nube europea o en tus propios servidores.",
      },
      {
        question: "¿Qué pasa si el agente se equivoca?",
        answer:
          "En los flujos sensibles, como facturación, contratos o presupuestos comerciales, una persona de tu equipo valida la respuesta antes de enviarla.",
      },
      {
        question: "¿Cuánto cuesta un agente de IA para una pyme?",
        answer:
          "Empezamos con una consultoría de diagnóstico de 299 € + IVA que te descontamos al 100% si desarrollamos el proyecto. El presupuesto del agente depende del alcance; al solicitarlo eliges entre los rangos de 2.000-10.000 €, 10.000-30.000 €, 30.000-50.000 € o más de 50.000 €.",
      },
      {
        question: "¿Cuáles son los plazos de entrega?",
        answer:
          "El diagnóstico inicial nos toma unas 2 o 3 semanas. Después, el desarrollo y la puesta en marcha del agente dura entre 1 y 4 meses.",
      },
      {
        question: "¿Mis empleados necesitan entender de Inteligencia Artificial?",
        answer:
          "No. Al ser proyectos a medida, les explicamos el funcionamiento de viva voz y paso a paso para que lo manejen sin problema.",
      },
    ],
  },
  finalCta: {
    headingLead: "Reserva tu consultoría y",
    headingHighlight: "calcula el ROI de tu agente",
    text:
      "En una sesión de 60 minutos analizamos la viabilidad técnica de tu caso y te entregamos un plan de desarrollo con fases y costes. Tú decides si lo implementas por tu cuenta o si lo desarrollamos nosotros.",
  },
}

const aiAgentsEn: ServiceContent = {
  id: "ai-agents",
  lang: "en",
  path: "/en/ai-agents-for-business",
  alternatePath: "/agentes-ia-empresas",
  meta: {
    title: "AI Agents for Business and SMEs, GDPR-Compliant | IA4PYMES",
    description:
      "AI agents that answer WhatsApp, web chat, email and phone calls using your company's data. European cloud or on-premise. ROI calculated before we build.",
    ogTitle: "AI agents for business and SMEs | IA4PYMES",
  },
  name: "AI agents for business",
  serviceType: "AI agent development",
  hero: {
    h1Lead: "AI agents for business,",
    h1Highlight: "private and connected to your systems",
    intro:
      "IA4PYMES builds AI agents for SMEs in Spain: chatbots that answer on WhatsApp, web chat and email using your price lists, catalogs and manuals, and voice agents that take calls and book appointments in your calendar. We calculate your project's ROI before we write the first line of code.",
    secondaryCta: { label: "See use cases", href: "#use-cases" },
  },
  what: {
    headingLead: "What an AI agent does",
    headingHighlight: "for your SME",
    intro:
      "An AI agent reads your company's information and uses it to serve customers or finish tasks that someone on your team now does by hand. We build three kinds.",
    cards: [
      {
        icon: MessageSquare,
        title: "24/7 conversational agents",
        description:
          "They handle WhatsApp, your website chat and email. They answer with your price lists, catalogs, internal policies and technical manuals, which they look up in your company's knowledge base.",
        benefit: "WhatsApp, web and email",
      },
      {
        icon: Phone,
        title: "AI voice agents",
        description:
          "They take and make calls in natural language with latency under 300 ms. They qualify sales leads and book appointments in Google Calendar, Cal.com or your CRM.",
        benefit: "Bookings in your calendar",
      },
      {
        icon: Server,
        title: "Private AI models",
        description:
          "We deploy open models such as Qwen, DeepSeek, Llama or Mistral on European cloud or on your own servers. Your data stays isolated and costs are predictable, with no per-token fees to third parties.",
        benefit: "European cloud or on-premise",
      },
    ],
  },
  useCases: {
    id: "use-cases",
    headingLead: "AI agent use cases",
    headingHighlight: "by industry",
    intro: "These are the industries we specialize in and the work an agent takes over in each one.",
    cards: [
      {
        icon: Stethoscope,
        title: "Medical and dental clinics",
        description:
          "A voice agent answers the phone, handles patients' common questions and books the appointment in the clinic's calendar.",
      },
      {
        icon: Scale,
        title: "Law firms",
        description:
          "The agent receives inquiries through the website or WhatsApp, collects the case details and schedules the first meeting in the firm's CRM.",
      },
      {
        icon: Calculator,
        title: "Accounting and advisory firms",
        description:
          "It answers clients using your internal procedures and sorts the inbox so your team only reviews the emails that need their judgment.",
      },
      {
        icon: Truck,
        title: "Logistics and distribution",
        description:
          "It replies to customer questions on WhatsApp and email with your rates and service terms, without waiting for someone in the office to be free.",
      },
      {
        icon: Factory,
        title: "Industrial B2B trade",
        description:
          "It searches catalogs and technical manuals and gives customers and sales reps the right part number and spec sheet.",
      },
      {
        icon: ShoppingBag,
        title: "Retail",
        description:
          "A chatbot on your website and WhatsApp answers questions about products and purchase terms from your catalog.",
      },
    ],
    example: {
      text: "For the Hospitality and Tourism Association of Navarra we built an AI chatbot that answers questions from members and visitors on their website, instantly.",
    },
  },
  pricing: {
    headingLead: "AI agent",
    headingHighlight: "pricing and timelines",
    intro:
      "Cost depends on the channels, the integrations and the volume of inquiries. That is why we start with a consultation that sets the scope and the expected return before we quote the build.",
  },
  articles: {
    headingLead: "Articles about",
    headingHighlight: "AI agents",
    items: [
      {
        title: "How to Automate Your Business's Phone Support with AI Voice Agents Without Annoying Customers",
        href: "/en/blog/how-to-automate-phone-support-ai-voice-agents-smes",
      },
      {
        title: "The Battle of the Minute: ROI Analysis of AI Voice Agents vs. Traditional Call Centers for SMEs",
        href: "/en/blog/voice-ai-agents-vs-traditional-call-center-roi",
      },
      {
        title: "From Forgotten PDFs to Smart Decisions: How to Build Your SME's AI Knowledge Base",
        href: "/en/blog/ai-knowledge-base-sme-rag-documents",
      },
    ],
  },
  faq: {
    headingLead: "Frequently asked questions about",
    headingHighlight: "AI agents",
    subtitle: "What SMEs usually ask us before putting an agent to work.",
    items: [
      {
        question: "What is an AI agent for business?",
        answer:
          "It is a program that uses your company's information to answer inquiries or complete tasks. It can reply on WhatsApp, web chat or email with your price lists and manuals, take calls in natural language or book appointments in your calendar.",
      },
      {
        question: "Do I have to change the software I already use?",
        answer:
          "No. The agent connects to the systems you already use (ERP, CRM, email, calendar or WhatsApp Business) and adapts to how you work today, without operational disruption or migrations.",
      },
      {
        question: "Is my company's data safe?",
        answer:
          "Yes. We comply with GDPR, sign a confidentiality agreement, and your information is never used to train public AI models. The agent runs on European cloud or on your own servers.",
      },
      {
        question: "What happens if the agent gets something wrong?",
        answer:
          "In sensitive workflows such as invoicing, contracts or sales quotes, a person on your team approves the answer before it goes out.",
      },
      {
        question: "How much does an AI agent cost for an SME?",
        answer:
          "We start with a 299 € + VAT diagnosis consultation, which we deduct in full if we build the project. The agent's budget depends on scope; when you request a quote you choose between 2,000-10,000 €, 10,000-30,000 €, 30,000-50,000 € or more than 50,000 €.",
      },
      {
        question: "What are the delivery timelines?",
        answer:
          "The initial diagnosis takes about 2 to 3 weeks. After that, building and deploying the agent takes between 1 and 4 months.",
      },
      {
        question: "Do my employees need to understand Artificial Intelligence?",
        answer:
          "No. Since these are custom projects, we walk them through how it works in person, step by step, so they can use it without trouble.",
      },
    ],
  },
  finalCta: {
    headingLead: "Book your consultation and",
    headingHighlight: "calculate your agent's ROI",
    text:
      "In a 60-minute session we assess the technical feasibility of your case and hand you a development plan with phases and costs. You decide whether to build it yourself or have us build it.",
  },
}

export const SERVICES: Record<ServiceId, Record<ServiceLang, ServiceContent>> = {
  "ai-agents": { es: aiAgentsEs, en: aiAgentsEn },
}

export function getService(id: ServiceId, lang: ServiceLang): ServiceContent {
  return SERVICES[id][lang]
}

/** Page metadata: unique title/description, canonical, hreflang es/en and Open Graph. */
export function buildServiceMetadata(service: ServiceContent) {
  const url = `${SITE_URL}${service.path}`
  const alternateUrl = `${SITE_URL}${service.alternatePath}`
  const esUrl = service.lang === "es" ? url : alternateUrl
  const enUrl = service.lang === "en" ? url : alternateUrl

  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: {
      canonical: url,
      languages: {
        es: esUrl,
        en: enUrl,
        "x-default": esUrl,
      },
    },
    openGraph: {
      title: service.meta.ogTitle,
      description: service.meta.description,
      url,
      siteName: "IA4PYMES",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: service.meta.ogTitle }],
      locale: service.lang === "es" ? "es_ES" : "en_US",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: service.meta.ogTitle,
      description: service.meta.description,
      images: ["/og-image.png"],
    },
  }
}

/** Service, BreadcrumbList and FAQPage schemas. The FAQ schema mirrors the visible FAQ. */
export function buildServiceJsonLd(service: ServiceContent) {
  const ui = SERVICE_UI[service.lang]
  const url = `${SITE_URL}${service.path}`
  const homeUrl = service.lang === "es" ? SITE_URL : `${SITE_URL}/en`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.serviceType,
    description: service.meta.description,
    url,
    inLanguage: service.lang === "es" ? "es-ES" : "en",
    provider: {
      "@type": "Organization",
      name: "IA4PYMES",
      url: SITE_URL,
      logo: `${SITE_URL}/LOGO.png`,
      email: "contacto@ia4pymes.tech",
    },
    areaServed: { "@type": "Country", name: "Spain" },
    offers: {
      "@type": "Offer",
      name: ui.offerName,
      price: "299",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "299",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
      url: `${SITE_URL}${ui.cta.href}`,
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.homeLabel, item: homeUrl },
      { "@type": "ListItem", position: 2, name: service.name, item: url },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return [serviceSchema, breadcrumbSchema, faqSchema]
}
