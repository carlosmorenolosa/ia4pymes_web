import type { LucideIcon } from "lucide-react"
import {
  BarChart2,
  Briefcase,
  Calculator,
  Code,
  Compass,
  Database,
  Factory,
  FileText,
  Layers,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Phone,
  Plug,
  Receipt,
  Route,
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
export type ServiceId = "ai-agents" | "custom-software" | "process-automation" | "ai-consulting"

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

const customSoftwareEs: ServiceContent = {
  id: "custom-software",
  lang: "es",
  path: "/desarrollo-software-a-medida-pymes",
  alternatePath: "/en/custom-software-development-smes",
  meta: {
    title: "Desarrollo de Software a Medida para PYMES con IA | IA4PYMES",
    description:
      "Desarrollo de software a medida para pymes: aplicaciones web, herramientas internas y sistemas conectados a Holded, Sage u Odoo. El código es tuyo, sin lock-in.",
    ogTitle: "Desarrollo de software a medida para pymes | IA4PYMES",
  },
  name: "Desarrollo de software a medida para pymes",
  serviceType: "Desarrollo de software a medida",
  hero: {
    h1Lead: "Desarrollo de software a medida para pymes,",
    h1Highlight: "integrado con tu ERP y tu CRM",
    intro:
      "IA4PYMES diseña y desarrolla aplicaciones web, herramientas internas y sistemas de gestión para pymes en España. Nuestro equipo interno escribe el código, lo conecta con Holded, Sage, Odoo o tu CRM y te entrega el código fuente, que pasa a ser propiedad de tu empresa.",
    secondaryCta: { label: "Ver casos de uso", href: "#casos-de-uso" },
  },
  what: {
    headingLead: "Qué software a medida",
    headingHighlight: "desarrollamos",
    intro:
      "Hacemos software para las tareas que tus programas actuales y tus hojas de cálculo no cubren. Trabajamos en tres frentes.",
    cards: [
      {
        icon: LayoutDashboard,
        title: "Aplicaciones web y herramientas internas",
        description:
          "Aplicaciones que tu equipo usa a diario, diseñadas a partir de cómo trabaja hoy. Cuando aporta valor, incorporan IA para leer documentos o buscar en tus manuales.",
        benefit: "Hechas para tu proceso",
      },
      {
        icon: Plug,
        title: "Integración con ERP y CRM",
        description:
          "Conectamos el software con Holded, Sage, A3, Odoo, SAP, Salesforce o HubSpot mediante APIs y webhooks, para que nadie copie datos a mano de un programa a otro.",
        benefit: "Holded, Sage, Odoo y más",
      },
      {
        icon: Code,
        title: "Código propio, sin lock-in",
        description:
          "Te entregamos el código fuente y las configuraciones llave en mano. Tu empresa es la propietaria y puede seguir ampliándolo con nosotros o con otro equipo.",
        benefit: "Código propio, sin lock-in",
      },
    ],
  },
  useCases: {
    id: "casos-de-uso",
    headingLead: "Software a medida",
    headingHighlight: "por sector",
    intro: "Aplicaciones típicas en los sectores en los que nos especializamos.",
    cards: [
      {
        icon: Stethoscope,
        title: "Clínicas médicas y dentales",
        description:
          "Una herramienta interna para gestionar agenda, fichas y comunicaciones con pacientes, conectada a los programas que ya usa la clínica.",
      },
      {
        icon: Scale,
        title: "Despachos de abogados",
        description:
          "Un portal interno para seguir expedientes, plazos y documentación de cada cliente, enlazado con el CRM del despacho.",
      },
      {
        icon: Calculator,
        title: "Asesorías y gestorías",
        description:
          "Paneles que reúnen los datos contables de cada cliente desde Holded, Sage o A3, sin consolidarlos a mano en hojas de cálculo.",
      },
      {
        icon: Truck,
        title: "Logística y distribución",
        description:
          "Aplicaciones para registrar pedidos, albaranes y entregas que vuelcan cada dato directamente en el ERP.",
      },
      {
        icon: Factory,
        title: "Comercio industrial B2B",
        description:
          "Un configurador de presupuestos que parte de tu catálogo y aplica los precios de tu tarifa del ERP.",
      },
      {
        icon: ShoppingBag,
        title: "Retail",
        description:
          "Sincronización de stock, pedidos y precios entre la tienda online, el punto de venta y el ERP.",
      },
    ],
    example: {
      text: "Si lo que buscas es que un proceso que ya existe se haga solo, como leer facturas o clasificar correos, tenemos un servicio específico.",
      link: {
        title: "Ver automatización de procesos con IA",
        href: "/automatizacion-procesos-ia",
      },
    },
  },
  pricing: {
    headingLead: "Precio y plazos del",
    headingHighlight: "software a medida",
    intro:
      "El precio depende de las funcionalidades y de los sistemas que haya que integrar. Empezamos con una consultoría que fija el alcance y el retorno esperado antes de presupuestar el desarrollo.",
  },
  articles: {
    headingLead: "Artículos sobre",
    headingHighlight: "software e integraciones",
    items: [
      {
        title: "La muerte de las licencias SaaS por usuario: ¿Por qué la IA está obligando al software a cobrar por resultados?",
        href: "/blog/la-muerte-de-las-licencias-saas-por-usuario-precio-ia",
      },
      {
        title: "Por qué no necesitas más herramientas de IA, sino conectar tu CRM y ERP primero",
        href: "/blog/conectar-crm-erp-antes-de-ia-pymes",
      },
      {
        title: "Caso de Éxito: Sistema de Presupuestación Automática con RAG Vectorial para el Sector Construcción",
        href: "/blog/caso-exito-ia-presupuestos-obras-construccion-rag-vectorial",
      },
    ],
  },
  faq: {
    headingLead: "Dudas frecuentes sobre",
    headingHighlight: "software a medida",
    subtitle: "Lo que suelen preguntarnos las pymes antes de encargar un desarrollo.",
    items: [
      {
        question: "¿Qué es el desarrollo de software a medida?",
        answer:
          "Es crear una aplicación pensada para los procesos de tu empresa en lugar de adaptarte a un programa genérico. En IA4PYMES incluye el diseño, el desarrollo, la integración con tus sistemas y la entrega del código.",
      },
      {
        question: "¿El código es de mi empresa?",
        answer:
          "Sí. Te entregamos el código fuente y las configuraciones llave en mano, sin dependencias cautivas. Puedes seguir evolucionándolo con nosotros o con otro equipo.",
      },
      {
        question: "¿Se integra con Holded, Sage u Odoo?",
        answer:
          "Sí. Nos conectamos mediante APIs y webhooks con Holded, Sage, Odoo, SAP, Salesforce, HubSpot, Gmail, Outlook y WhatsApp Business, entre otros.",
      },
      {
        question: "¿Tengo que cambiar los programas que ya utilizo?",
        answer:
          "No. El software se integra en tus sistemas de siempre y se adapta a tu forma de trabajar actual, sin cortes operativos ni migraciones.",
      },
      {
        question: "¿Cuánto cuesta un software a medida para una pyme?",
        answer:
          "Empezamos con una consultoría de diagnóstico de 299 € + IVA que te descontamos al 100% si desarrollamos el proyecto. El presupuesto depende del alcance; al solicitarlo eliges entre los rangos de 2.000-10.000 €, 10.000-30.000 €, 30.000-50.000 € o más de 50.000 €.",
      },
      {
        question: "¿Cuánto se tarda en desarrollarlo?",
        answer:
          "El diagnóstico inicial nos toma unas 2 o 3 semanas. Después, el desarrollo y la puesta en marcha duran entre 1 y 4 meses.",
      },
      {
        question: "¿Quién se ocupa del software después de la entrega?",
        answer:
          "Tras la puesta en producción te damos soporte técnico directo, monitorizamos el sistema y ajustamos lo necesario durante la fase de estabilización.",
      },
    ],
  },
  finalCta: {
    headingLead: "Reserva tu consultoría y",
    headingHighlight: "define tu software a medida",
    text:
      "En una sesión de 60 minutos analizamos la viabilidad técnica del proyecto y te entregamos un plan de desarrollo con fases y costes. Tú decides si lo implementas por tu cuenta o si lo desarrollamos nosotros.",
  },
}

const customSoftwareEn: ServiceContent = {
  id: "custom-software",
  lang: "en",
  path: "/en/custom-software-development-smes",
  alternatePath: "/desarrollo-software-a-medida-pymes",
  meta: {
    title: "Custom Software Development for SMEs with AI | IA4PYMES",
    description:
      "Custom software development for SMEs: web apps, internal tools and systems connected to Holded, Sage or Odoo. You own the code, with no vendor lock-in.",
    ogTitle: "Custom software development for SMEs | IA4PYMES",
  },
  name: "Custom software development for SMEs",
  serviceType: "Custom software development",
  hero: {
    h1Lead: "Custom software development for SMEs,",
    h1Highlight: "integrated with your ERP and CRM",
    intro:
      "IA4PYMES designs and builds web applications, internal tools and management systems for SMEs in Spain. Our in-house team writes the code, connects it to Holded, Sage, Odoo or your CRM and hands over the source code, which your company owns.",
    secondaryCta: { label: "See use cases", href: "#use-cases" },
  },
  what: {
    headingLead: "The custom software",
    headingHighlight: "we build",
    intro:
      "We build software for the work your current tools and spreadsheets don't cover. We work on three fronts.",
    cards: [
      {
        icon: LayoutDashboard,
        title: "Web apps and internal tools",
        description:
          "Applications your team uses every day, designed around how it works today. Where it adds value, they use AI to read documents or search your manuals.",
        benefit: "Built for your process",
      },
      {
        icon: Plug,
        title: "ERP and CRM integration",
        description:
          "We connect the software to Holded, Sage, A3, Odoo, SAP, Salesforce or HubSpot through APIs and webhooks, so nobody copies data by hand from one program to another.",
        benefit: "Holded, Sage, Odoo and more",
      },
      {
        icon: Code,
        title: "Your own code, no lock-in",
        description:
          "We hand over the source code and configuration, ready to run. Your company owns it and can keep extending it with us or with another team.",
        benefit: "Your own code, no lock-in",
      },
    ],
  },
  useCases: {
    id: "use-cases",
    headingLead: "Custom software",
    headingHighlight: "by industry",
    intro: "Typical applications in the industries we specialize in.",
    cards: [
      {
        icon: Stethoscope,
        title: "Medical and dental clinics",
        description:
          "An internal tool to manage the schedule, patient records and patient communications, connected to the software the clinic already uses.",
      },
      {
        icon: Scale,
        title: "Law firms",
        description:
          "An internal portal to track each client's cases, deadlines and documents, linked to the firm's CRM.",
      },
      {
        icon: Calculator,
        title: "Accounting and advisory firms",
        description:
          "Dashboards that pull each client's accounting data from Holded, Sage or A3, so nobody consolidates it by hand in spreadsheets.",
      },
      {
        icon: Truck,
        title: "Logistics and distribution",
        description:
          "Apps to record orders, delivery notes and deliveries that write every entry straight into the ERP.",
      },
      {
        icon: Factory,
        title: "Industrial B2B trade",
        description: "A quote configurator that starts from your catalog and applies the prices from your ERP price list.",
      },
      {
        icon: ShoppingBag,
        title: "Retail",
        description: "Stock, order and price sync between your online store, your point of sale and your ERP.",
      },
    ],
    example: {
      text: "If what you need is for an existing process to run on its own, such as reading invoices or sorting emails, we have a dedicated service.",
      link: {
        title: "See AI process automation",
        href: "/en/ai-process-automation",
      },
    },
  },
  pricing: {
    headingLead: "Custom software",
    headingHighlight: "pricing and timelines",
    intro:
      "Price depends on the features and on the systems to integrate. We start with a consultation that sets the scope and the expected return before we quote the build.",
  },
  articles: {
    headingLead: "Articles about",
    headingHighlight: "software and integrations",
    items: [
      {
        title: "The Death of Seat-Based SaaS Pricing: Why AI is Forcing Software to Charge for Outcomes",
        href: "/en/blog/death-of-seat-based-saas-pricing-models-ai-era",
      },
      {
        title: "Why You Don't Need More AI Tools, but to Connect Your CRM and ERP First",
        href: "/en/blog/connect-crm-erp-before-ai-smes",
      },
      {
        title: "Case Study: Automated Construction Bidding and Quote Estimation Powered by Vector RAG",
        href: "/en/blog/case-study-ai-construction-bidding-quote-automation-vector-rag",
      },
    ],
  },
  faq: {
    headingLead: "Frequently asked questions about",
    headingHighlight: "custom software",
    subtitle: "What SMEs usually ask us before commissioning a build.",
    items: [
      {
        question: "What is custom software development?",
        answer:
          "It means building an application around your company's processes instead of bending them to fit a generic program. At IA4PYMES it covers design, development, integration with your systems and handover of the code.",
      },
      {
        question: "Does my company own the code?",
        answer:
          "Yes. We hand over the source code and configuration ready to run, with no vendor lock-in. You can keep developing it with us or with another team.",
      },
      {
        question: "Does it integrate with Holded, Sage or Odoo?",
        answer:
          "Yes. We connect through APIs and webhooks to Holded, Sage, Odoo, SAP, Salesforce, HubSpot, Gmail, Outlook and WhatsApp Business, among others.",
      },
      {
        question: "Do I have to change the software I already use?",
        answer:
          "No. The new software plugs into your existing systems and adapts to how you work today, without operational disruption or migrations.",
      },
      {
        question: "How much does custom software cost for an SME?",
        answer:
          "We start with a 299 € + VAT diagnosis consultation, which we deduct in full if we build the project. The budget depends on scope; when you request a quote you choose between 2,000-10,000 €, 10,000-30,000 €, 30,000-50,000 € or more than 50,000 €.",
      },
      {
        question: "How long does it take to build?",
        answer:
          "The initial diagnosis takes about 2 to 3 weeks. After that, development and deployment take between 1 and 4 months.",
      },
      {
        question: "Who looks after the software after delivery?",
        answer:
          "Once it is in production we give you direct technical support, monitor the system and fine-tune it during the stabilization phase.",
      },
    ],
  },
  finalCta: {
    headingLead: "Book your consultation and",
    headingHighlight: "scope your custom software",
    text:
      "In a 60-minute session we assess the technical feasibility of the project and hand you a development plan with phases and costs. You decide whether to build it yourself or have us build it.",
  },
}

const processAutomationEs: ServiceContent = {
  id: "process-automation",
  lang: "es",
  path: "/automatizacion-procesos-ia",
  alternatePath: "/en/ai-process-automation",
  meta: {
    title: "Automatización de Procesos con IA para PYMES | IA4PYMES",
    description:
      "Automatización de procesos con IA para pymes: facturas, albaranes, presupuestos y correos procesados con validación en un clic y registrados en tu ERP.",
    ogTitle: "Automatización de procesos con IA para pymes | IA4PYMES",
  },
  name: "Automatización de procesos con IA",
  serviceType: "Automatización de procesos de negocio con IA",
  hero: {
    h1Lead: "Automatización de procesos con IA para pymes,",
    h1Highlight: "del documento a tu ERP sin teclear",
    intro:
      "Automatizamos las tareas repetitivas de tu pyme: leer facturas, albaranes y contratos, conciliar movimientos en tu ERP, preparar presupuestos y ordenar el correo. Antes de desarrollar nada cuantificamos las horas manuales que consume cada proceso y lo que te cuestan en euros.",
    secondaryCta: { label: "Ver casos de uso", href: "#casos-de-uso" },
  },
  what: {
    headingLead: "Qué procesos",
    headingHighlight: "automatizamos",
    intro:
      "En el diagnóstico localizamos las tareas que más horas manuales consumen. Las automatizaciones que desarrollamos se agrupan en tres tipos.",
    cards: [
      {
        icon: FileText,
        title: "Extracción de datos de documentos",
        description:
          "Leemos facturas, albaranes, nóminas y contratos con OCR multimodal y modelos de lenguaje, y pasamos los datos a tu ERP sin que nadie los teclee.",
        benefit: "Facturas, albaranes y contratos",
      },
      {
        icon: Receipt,
        title: "Conciliación contable y bancaria",
        description:
          "Cruzamos de forma automática los movimientos del banco con las facturas en Holded, Sage, A3, Odoo o SAP.",
        benefit: "Conectada a tu ERP",
      },
      {
        icon: Mail,
        title: "Presupuestos y bandeja de correo",
        description:
          "Generamos presupuestos y clasificamos el correo entrante. Una persona de tu equipo valida cada resultado en un clic antes de enviarlo.",
        benefit: "Validación humana en un clic",
      },
    ],
  },
  useCases: {
    id: "casos-de-uso",
    headingLead: "Automatización de procesos",
    headingHighlight: "por sector",
    intro: "Procesos típicos que se automatizan en los sectores en los que nos especializamos.",
    cards: [
      {
        icon: Stethoscope,
        title: "Clínicas médicas y dentales",
        description:
          "Pasar a la ficha del paciente los datos de formularios y documentos que hoy el equipo copia a mano.",
      },
      {
        icon: Scale,
        title: "Despachos de abogados",
        description:
          "Clasificar la documentación que llega por correo y extraer de cada contrato las partes, las fechas y las cláusulas clave.",
      },
      {
        icon: Calculator,
        title: "Asesorías y gestorías",
        description:
          "Leer las facturas y nóminas de cada cliente y contabilizarlas en Holded, Sage o A3, con una revisión humana antes de cerrar.",
      },
      {
        icon: Truck,
        title: "Logística y distribución",
        description: "Extraer los datos de albaranes y pedidos y registrarlos en el ERP sin volver a teclearlos.",
      },
      {
        icon: Factory,
        title: "Comercio industrial B2B",
        description:
          "Convertir las peticiones de oferta que llegan por correo en presupuestos con los precios de tu tarifa.",
      },
      {
        icon: ShoppingBag,
        title: "Retail",
        description: "Registrar las facturas de proveedores y cuadrar los pagos con los movimientos del banco.",
      },
    ],
    example: {
      text: "Cuando el proceso consiste en atender a clientes por WhatsApp, web o teléfono, lo resolvemos con un agente de IA.",
      link: {
        title: "Ver agentes de IA para empresas",
        href: "/agentes-ia-empresas",
      },
    },
  },
  pricing: {
    headingLead: "Precio y plazos de una",
    headingHighlight: "automatización con IA",
    intro:
      "El coste depende del número de procesos, del volumen de documentos y de los sistemas que haya que conectar. Empezamos con una consultoría que estima el ahorro y fija el alcance antes de presupuestar.",
  },
  articles: {
    headingLead: "Artículos sobre",
    headingHighlight: "automatización con IA",
    items: [
      {
        title: "El coste de picar datos: Cómo ahorrar 1.600€ al mes por empleado automatizando presupuestos con IA",
        href: "/blog/automatizacion-presupuestos-email-roi-pymes",
      },
      {
        title: "VeriFactu y Factura Electrónica B2B en España: Cómo la IA Automatiza la Contabilidad Sin Multas de la AEAT",
        href: "/blog/verifactu-factura-electronica-ia-pymes-automatizacion-contable-2026",
      },
      {
        title: "Automatización Inteligente de Documentos: Cómo Ahorrar Cientos de Horas en Contratos, Gestorías, Inmobiliarias y Seguros",
        href: "/blog/automatizacion-ia-gestion-documental-contratos-pymes-2026",
      },
    ],
  },
  faq: {
    headingLead: "Dudas frecuentes sobre",
    headingHighlight: "automatización de procesos",
    subtitle: "Lo que suelen preguntarnos las pymes antes de automatizar un proceso.",
    items: [
      {
        question: "¿Qué procesos se pueden automatizar con IA en una pyme?",
        answer:
          "Los que se repiten y siguen pasos parecidos cada vez: lectura de facturas, albaranes, nóminas y contratos, conciliación bancaria, preparación de presupuestos y clasificación del correo. Si hay tareas repetitivas en tu negocio, podemos optimizarlas.",
      },
      {
        question: "¿Qué pasa si la IA se equivoca al leer un documento?",
        answer:
          "En los flujos sensibles, como facturación, contratos o presupuestos comerciales, una persona de tu equipo valida el resultado en un clic antes de que se registre o se envíe.",
      },
      {
        question: "¿Funciona con mi ERP?",
        answer:
          "Nos conectamos con Holded, Sage, A3, Odoo y SAP, y con herramientas como Gmail, Outlook o HubSpot. No tienes que cambiar los programas que ya usas.",
      },
      {
        question: "¿Qué pasa si la inversión no sale a cuenta?",
        answer:
          "Antes de crear nada calculamos el retorno de inversión esperado de la automatización. Si los números no te benefician, no avanzamos.",
      },
      {
        question: "¿Cuánto cuesta automatizar un proceso?",
        answer:
          "Empezamos con una consultoría de diagnóstico de 299 € + IVA que te descontamos al 100% si desarrollamos el proyecto. El presupuesto depende del alcance; al solicitarlo eliges entre los rangos de 2.000-10.000 €, 10.000-30.000 €, 30.000-50.000 € o más de 50.000 €.",
      },
      {
        question: "¿Cuáles son los plazos de entrega?",
        answer:
          "El diagnóstico inicial nos toma unas 2 o 3 semanas. Después, el desarrollo y la puesta en marcha de la automatización duran entre 1 y 4 meses.",
      },
      {
        question: "¿Están a salvo los datos de mi empresa?",
        answer:
          "Sí. Cumplimos con el RGPD, firmamos un acuerdo de confidencialidad y tu información nunca se usa para entrenar modelos de IA públicos. Los documentos se procesan en la nube europea o en tus propios servidores.",
      },
    ],
  },
  finalCta: {
    headingLead: "Reserva tu consultoría y",
    headingHighlight: "calcula cuánto ahorras",
    text:
      "En una sesión de 60 minutos revisamos tus procesos, analizamos la viabilidad técnica y te entregamos un plan con fases y costes. Tú decides si lo implementas por tu cuenta o si lo desarrollamos nosotros.",
  },
}

const processAutomationEn: ServiceContent = {
  id: "process-automation",
  lang: "en",
  path: "/en/ai-process-automation",
  alternatePath: "/automatizacion-procesos-ia",
  meta: {
    title: "AI Process Automation for SMEs | IA4PYMES",
    description:
      "AI process automation for SMEs: invoices, delivery notes, quotes and emails processed with one-click human approval and posted straight to your ERP.",
    ogTitle: "AI process automation for SMEs | IA4PYMES",
  },
  name: "AI process automation",
  serviceType: "Business process automation with AI",
  hero: {
    h1Lead: "AI process automation for SMEs,",
    h1Highlight: "from document to ERP without retyping",
    intro:
      "We automate the repetitive work in your business: reading invoices, delivery notes and contracts, reconciling transactions in your ERP, preparing quotes and sorting email. Before we build anything we measure the manual hours each process takes and what they cost you in euros.",
    secondaryCta: { label: "See use cases", href: "#use-cases" },
  },
  what: {
    headingLead: "The business processes",
    headingHighlight: "we automate",
    intro:
      "During the diagnosis we find the tasks that eat the most manual hours. The automations we build fall into three groups.",
    cards: [
      {
        icon: FileText,
        title: "Document data extraction",
        description:
          "We read invoices, delivery notes, payslips and contracts with multimodal OCR and language models, and send the data to your ERP without anyone typing it.",
        benefit: "Invoices, delivery notes, contracts",
      },
      {
        icon: Receipt,
        title: "Accounting and bank reconciliation",
        description:
          "We match bank transactions against invoices automatically in Holded, Sage, A3, Odoo or SAP.",
        benefit: "Connected to your ERP",
      },
      {
        icon: Mail,
        title: "Quotes and email inbox",
        description:
          "We generate quotes and sort incoming email. Someone on your team approves each result in one click before it goes out.",
        benefit: "One-click human approval",
      },
    ],
  },
  useCases: {
    id: "use-cases",
    headingLead: "Process automation",
    headingHighlight: "by industry",
    intro: "Typical processes that get automated in the industries we specialize in.",
    cards: [
      {
        icon: Stethoscope,
        title: "Medical and dental clinics",
        description: "Moving data from forms and documents into patient records, a job the team now does by hand.",
      },
      {
        icon: Scale,
        title: "Law firms",
        description:
          "Sorting the documents that arrive by email and pulling the parties, dates and key clauses out of each contract.",
      },
      {
        icon: Calculator,
        title: "Accounting and advisory firms",
        description:
          "Reading each client's invoices and payslips and booking them in Holded, Sage or A3, with a human review before closing.",
      },
      {
        icon: Truck,
        title: "Logistics and distribution",
        description: "Extracting data from delivery notes and orders and recording it in the ERP without retyping it.",
      },
      {
        icon: Factory,
        title: "Industrial B2B trade",
        description: "Turning requests for quotation that arrive by email into quotes with the prices from your price list.",
      },
      {
        icon: ShoppingBag,
        title: "Retail",
        description: "Recording supplier invoices and matching payments against bank transactions.",
      },
    ],
    example: {
      text: "When the process is about serving customers on WhatsApp, web chat or the phone, we handle it with an AI agent.",
      link: {
        title: "See AI agents for business",
        href: "/en/ai-agents-for-business",
      },
    },
  },
  pricing: {
    headingLead: "AI automation",
    headingHighlight: "pricing and timelines",
    intro:
      "Cost depends on the number of processes, the volume of documents and the systems to connect. We start with a consultation that estimates the savings and sets the scope before we quote.",
  },
  articles: {
    headingLead: "Articles about",
    headingHighlight: "AI automation",
    items: [
      {
        title: "The Cost of Manual Entry: How to Save €1,600/Month Per Employee by Automating Quotes with AI",
        href: "/en/blog/email-quote-automation-smes-roi-calculator",
      },
      {
        title: "VeriFactu and Mandatory B2B E-Invoicing in Spain: How AI Automates SME Accounting and Tax Compliance",
        href: "/en/blog/verifactu-electronic-invoicing-ai-smes-accounting-automation-2026",
      },
      {
        title: "AI Document Automation: Saving Hundreds of Hours on Contracts, Legal, Real Estate & Insurance Workflows",
        href: "/en/blog/ai-document-automation-contracts-real-estate-law-smes-2026",
      },
    ],
  },
  faq: {
    headingLead: "Frequently asked questions about",
    headingHighlight: "process automation",
    subtitle: "What SMEs usually ask us before automating a process.",
    items: [
      {
        question: "Which processes can an SME automate with AI?",
        answer:
          "The ones that repeat and follow similar steps each time: reading invoices, delivery notes, payslips and contracts, bank reconciliation, preparing quotes and sorting email. If there are repetitive tasks in your business, we can optimize them.",
      },
      {
        question: "What happens if the AI misreads a document?",
        answer:
          "In sensitive workflows such as invoicing, contracts or sales quotes, a person on your team approves the result in one click before it is recorded or sent.",
      },
      {
        question: "Does it work with my ERP?",
        answer:
          "We connect to Holded, Sage, A3, Odoo and SAP, and to tools such as Gmail, Outlook or HubSpot. You don't have to change the software you already use.",
      },
      {
        question: "What if the investment doesn't pay off?",
        answer:
          "Before building anything we calculate the expected return on the automation. If the numbers don't work for you, we don't proceed.",
      },
      {
        question: "How much does it cost to automate a process?",
        answer:
          "We start with a 299 € + VAT diagnosis consultation, which we deduct in full if we build the project. The budget depends on scope; when you request a quote you choose between 2,000-10,000 €, 10,000-30,000 €, 30,000-50,000 € or more than 50,000 €.",
      },
      {
        question: "What are the delivery timelines?",
        answer:
          "The initial diagnosis takes about 2 to 3 weeks. After that, building and deploying the automation takes between 1 and 4 months.",
      },
      {
        question: "Is my company's data safe?",
        answer:
          "Yes. We comply with GDPR, sign a confidentiality agreement, and your information is never used to train public AI models. Documents are processed on European cloud or on your own servers.",
      },
    ],
  },
  finalCta: {
    headingLead: "Book your consultation and",
    headingHighlight: "calculate your savings",
    text:
      "In a 60-minute session we review your processes, assess technical feasibility and hand you a plan with phases and costs. You decide whether to build it yourself or have us build it.",
  },
}

const aiConsultingEs: ServiceContent = {
  id: "ai-consulting",
  lang: "es",
  path: "/consultoria-ia-pymes",
  alternatePath: "/en/ai-consulting-smes",
  meta: {
    title: "Consultoría de IA para PYMES: Sesión de 60 Minutos | IA4PYMES",
    description:
      "Consultoría de IA para pymes en 60 minutos: viabilidad, arquitectura y hoja de ruta con fases y costes. 299 € + IVA, descontados si desarrollamos el proyecto.",
    ogTitle: "Consultoría de IA para pymes | IA4PYMES",
  },
  name: "Consultoría de IA para pymes",
  serviceType: "Consultoría de inteligencia artificial",
  hero: {
    h1Lead: "Consultoría de IA para pymes,",
    h1Highlight: "una hoja de ruta en 60 minutos",
    intro:
      "Una videollamada de 60 minutos con nuestros ingenieros por 299 € + IVA. Analizamos la viabilidad técnica de tu caso, diseñamos la arquitectura y te entregamos un plan de desarrollo con fases y costes. Si después desarrollamos el proyecto contigo, te descontamos el 100% de la sesión.",
    secondaryCta: { label: "¿Es para mi empresa?", href: "#para-quien" },
  },
  what: {
    headingLead: "Qué pasa en la",
    headingHighlight: "sesión de consultoría",
    intro:
      "La sesión tiene tres partes y termina con un plan que puedes ejecutar por tu cuenta o con nosotros.",
    cards: [
      {
        icon: Compass,
        title: "Arquitectura y viabilidad",
        description:
          "Analizamos si tu caso es viable y diseñamos la arquitectura técnica que necesita: servidores, modelos de lenguaje e integraciones de datos.",
        benefit: "Viabilidad técnica",
      },
      {
        icon: Layers,
        title: "Componentes y tecnologías",
        description:
          "Concretamos qué componentes, APIs y modelos de IA, locales o en la nube, son los más rentables y eficientes para tu caso.",
        benefit: "Modelos locales o en la nube",
      },
      {
        icon: Route,
        title: "Estimación y hoja de ruta",
        description:
          "Te entregamos un plan de desarrollo detallado con fases y costes. Tú decides si lo implementas por tu cuenta o si lo desarrollamos nosotros.",
        benefit: "Plan con fases y costes",
      },
    ],
  },
  useCases: {
    id: "para-quien",
    headingLead: "Para quién es",
    headingHighlight: "esta consultoría",
    intro:
      "La sesión está pensada para pymes con un problema operativo concreto que quieren saber si la IA lo resuelve y cuánto costaría.",
    cards: [
      {
        icon: Settings,
        title: "Tienes tareas manuales que se repiten",
        description:
          "Facturas, correos, presupuestos o llamadas que ocupan horas de tu equipo. Revisamos si se pueden automatizar y qué retorno tendría hacerlo.",
      },
      {
        icon: Briefcase,
        title: "Dudas entre hacerlo tú o contratarlo",
        description:
          "Puedes ejecutar la hoja de ruta con tu propio equipo o encargarnos el desarrollo. El plan con fases y costes te sirve en los dos casos.",
      },
      {
        icon: Database,
        title: "Ya usas un ERP o un CRM",
        description:
          "Vemos qué datos de Holded, Sage, Odoo o tu CRM se pueden conectar y qué partes del proceso cubriría la IA.",
      },
    ],
    example: {
      text: "Si el plan sigue adelante, el proyecto puede ser un software a medida, una automatización de procesos o un agente de IA.",
      link: {
        title: "Ver desarrollo de software a medida",
        href: "/desarrollo-software-a-medida-pymes",
      },
    },
  },
  pricing: {
    headingLead: "Precio de la",
    headingHighlight: "consultoría de IA",
    intro:
      "La sesión cuesta 299 € + IVA (361,79 € en total) y te descontamos el importe completo si después desarrollamos el proyecto contigo. Si sigues adelante, estos son los plazos del proyecto y los rangos de presupuesto entre los que eliges.",
  },
  articles: {
    headingLead: "Artículos para preparar",
    headingHighlight: "tu consultoría",
    items: [
      {
        title: "¿Montar la IA tú mismo o con un especialista? Cómo decidirlo",
        href: "/blog/montar-ia-por-tu-cuenta-o-con-especialista-como-decidir-pymes",
      },
      {
        title: "Prueba antes de gastar: Qué son los \"Gemelos Digitales de procesos\" y cómo ayudan a tu PYME a simular el impacto de la IA",
        href: "/blog/gemelos-digitales-procesos-ia-pymes",
      },
      {
        title: "Inteligencia Artificial para PYMEs: Dónde se Ahorra Dinero de Verdad y Dónde se Pierde el Tiempo",
        href: "/blog/inteligencia-artificial-pymes-ahorro-costes-rentabilidad-procesos-reales",
      },
    ],
  },
  faq: {
    headingLead: "Dudas frecuentes sobre la",
    headingHighlight: "consultoría de IA",
    subtitle: "Lo que suelen preguntarnos las pymes antes de reservar la sesión.",
    items: [
      {
        question: "¿Qué incluye la consultoría de IA?",
        answer:
          "Una videollamada de 60 minutos con nuestros ingenieros. Analizamos la viabilidad técnica de tu caso, definimos la arquitectura y los componentes, y te entregamos un plan de desarrollo con fases y costes.",
      },
      {
        question: "¿Cuánto cuesta la consultoría?",
        answer:
          "299 € + IVA, 361,79 € en total. Si contratas el desarrollo con nosotros, te descontamos el 100% de ese importe del presupuesto final.",
      },
      {
        question: "¿Y si la IA no encaja en mi negocio?",
        answer:
          "Si en los primeros 15 minutos de la videollamada vemos que tu negocio no se puede beneficiar directamente de la IA, cancelamos la sesión y te reembolsamos el 100% del importe.",
      },
      {
        question: "¿Estoy obligado a desarrollar el proyecto con vosotros?",
        answer: "No. Te quedas el plan y decides si lo implementas por tu cuenta o si lo desarrollamos nosotros.",
      },
      {
        question: "¿Qué plazos tiene el proyecto si sigo adelante?",
        answer:
          "El diagnóstico inicial de tus procesos nos toma unas 2 o 3 semanas. Después, el desarrollo y la puesta en marcha duran entre 1 y 4 meses.",
      },
      {
        question: "¿Cuánto cuesta el proyecto completo?",
        answer:
          "Depende del alcance que fijemos en la hoja de ruta. Al solicitar presupuesto eliges entre los rangos de 2.000-10.000 €, 10.000-30.000 €, 30.000-50.000 € o más de 50.000 €.",
      },
      {
        question: "¿Están a salvo los datos de mi empresa?",
        answer:
          "Sí. Cumplimos con el RGPD, firmamos un acuerdo de confidencialidad y tu información nunca se usa para entrenar modelos de IA públicos.",
      },
    ],
  },
  finalCta: {
    headingLead: "Reserva tu",
    headingHighlight: "consultoría de IA",
    text:
      "Elige día y hora en el calendario de la sesión. En 60 minutos sabrás si tu caso es viable, qué arquitectura necesita y cuánto costaría desarrollarlo.",
  },
}

const aiConsultingEn: ServiceContent = {
  id: "ai-consulting",
  lang: "en",
  path: "/en/ai-consulting-smes",
  alternatePath: "/consultoria-ia-pymes",
  meta: {
    title: "AI Consulting for SMEs: 60-Minute Session | IA4PYMES",
    description:
      "AI consulting for SMEs in 60 minutes: feasibility, architecture and a roadmap with phases and costs. 299 € + VAT, deducted if we build your project.",
    ogTitle: "AI consulting for SMEs | IA4PYMES",
  },
  name: "AI consulting for SMEs",
  serviceType: "Artificial intelligence consulting",
  hero: {
    h1Lead: "AI consulting for SMEs,",
    h1Highlight: "a roadmap in 60 minutes",
    intro:
      "A 60-minute video call with our engineers for 299 € + VAT. We assess the technical feasibility of your case, design the architecture and hand you a development plan with phases and costs. If we then build the project with you, we deduct 100% of the session.",
    secondaryCta: { label: "Is it right for my company?", href: "#who-its-for" },
  },
  what: {
    headingLead: "What happens in the",
    headingHighlight: "consulting session",
    intro: "The session has three parts and ends with a plan you can carry out yourself or with us.",
    cards: [
      {
        icon: Compass,
        title: "Architecture and feasibility",
        description:
          "We check whether your case is feasible and design the technical architecture it needs: servers, language models and data integrations.",
        benefit: "Technical feasibility",
      },
      {
        icon: Layers,
        title: "Components and technologies",
        description:
          "We pin down which components, APIs and AI models, local or cloud-based, are the most cost-effective and efficient for your case.",
        benefit: "Local or cloud models",
      },
      {
        icon: Route,
        title: "Estimate and roadmap",
        description:
          "We deliver a detailed development plan with phases and costs. You decide whether to build it yourself or have us build it.",
        benefit: "Plan with phases and costs",
      },
    ],
  },
  useCases: {
    id: "who-its-for",
    headingLead: "Who this",
    headingHighlight: "consultation is for",
    intro:
      "The session is meant for SMEs with a concrete operational problem that want to know whether AI solves it and what it would cost.",
    cards: [
      {
        icon: Settings,
        title: "You have repetitive manual tasks",
        description:
          "Invoices, emails, quotes or calls that take up your team's hours. We check whether they can be automated and what return that would bring.",
      },
      {
        icon: Briefcase,
        title: "You're unsure whether to build or hire",
        description:
          "You can carry out the roadmap with your own team or have us build it. The plan with phases and costs works for either choice.",
      },
      {
        icon: Database,
        title: "You already use an ERP or CRM",
        description:
          "We look at which data in Holded, Sage, Odoo or your CRM can be connected and which parts of the process AI would cover.",
      },
    ],
    example: {
      text: "If the plan goes ahead, the project can be custom software, a process automation or an AI agent.",
      link: {
        title: "See custom software development",
        href: "/en/custom-software-development-smes",
      },
    },
  },
  pricing: {
    headingLead: "AI consulting",
    headingHighlight: "pricing",
    intro:
      "The session costs 299 € + VAT (361.79 € in total), and we deduct the full amount if we then build the project with you. If you go ahead, these are the project timelines and the budget ranges you choose from.",
  },
  articles: {
    headingLead: "Articles to prepare",
    headingHighlight: "your consultation",
    items: [
      {
        title: "Build AI Yourself or Hire a Specialist? How SMEs Decide",
        href: "/en/blog/build-ai-yourself-or-hire-a-specialist-how-smes-decide",
      },
      {
        title: "Test Before You Spend: What Are \"Process Digital Twins\" and How They Help Your SME Simulate the Impact of AI",
        href: "/en/blog/process-digital-twins-ai-smes",
      },
      {
        title: "Practical AI for SMEs: Where You Truly Save Money and Where You Are Wasting Time",
        href: "/en/blog/practical-ai-smes-cost-savings-roi-real-business-processes",
      },
    ],
  },
  faq: {
    headingLead: "Frequently asked questions about",
    headingHighlight: "AI consulting",
    subtitle: "What SMEs usually ask us before booking the session.",
    items: [
      {
        question: "What does the AI consultation include?",
        answer:
          "A 60-minute video call with our engineers. We assess the technical feasibility of your case, define the architecture and components, and hand you a development plan with phases and costs.",
      },
      {
        question: "How much does the consultation cost?",
        answer:
          "299 € + VAT, 361.79 € in total. If you hire us for the build, we deduct 100% of that amount from the final budget.",
      },
      {
        question: "What if AI isn't a fit for my business?",
        answer:
          "If in the first 15 minutes of the video call we see that your business cannot benefit from AI, we cancel the session and refund 100% of the cost.",
      },
      {
        question: "Do I have to build the project with you?",
        answer: "No. You keep the plan and decide whether to build it yourself or have us build it.",
      },
      {
        question: "What are the project timelines if I go ahead?",
        answer:
          "The initial diagnosis of your processes takes about 2 to 3 weeks. After that, development and deployment take between 1 and 4 months.",
      },
      {
        question: "How much does the full project cost?",
        answer:
          "It depends on the scope we set in the roadmap. When you request a quote you choose between 2,000-10,000 €, 10,000-30,000 €, 30,000-50,000 € or more than 50,000 €.",
      },
      {
        question: "Is my company's data safe?",
        answer:
          "Yes. We comply with GDPR, sign a confidentiality agreement, and your information is never used to train public AI models.",
      },
    ],
  },
  finalCta: {
    headingLead: "Book your",
    headingHighlight: "AI consultation",
    text:
      "Pick a day and time in the session calendar. In 60 minutes you'll know whether your case is feasible, what architecture it needs and what it would cost to build.",
  },
}

export const SERVICES: Record<ServiceId, Record<ServiceLang, ServiceContent>> = {
  "ai-agents": { es: aiAgentsEs, en: aiAgentsEn },
  "custom-software": { es: customSoftwareEs, en: customSoftwareEn },
  "process-automation": { es: processAutomationEs, en: processAutomationEn },
  "ai-consulting": { es: aiConsultingEs, en: aiConsultingEn },
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
