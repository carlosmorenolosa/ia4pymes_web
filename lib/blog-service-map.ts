import type { ServiceId } from "@/lib/services-data"

export interface BlogServiceMatch {
    primary: ServiceId
    secondary?: ServiceId
    /** True when nothing matched and the default was used (news, model releases...). */
    isDefault: boolean
}

interface PostLike {
    slug: string
    title: string
    category: string
    description?: string
}

/** Terms are regex fragments matched against accent-free lowercase text, anchored at a word start. */
const KEYWORDS: Record<ServiceId, string[]> = {
    "ai-agents": [
        "agente", "agentes", "agent", "agents", "agentic", "agentico", "chatbot", "asistente virtual",
        "voz", "voice", "whatsapp", "rag", "atencion al cliente", "customer service", "customer support",
        "call center", "telefon", "phone", "mcp", "copilot",
    ],
    "process-automation": [
        "automatiza", "automatizacion", "automation", "automate", "factura", "invoice", "albaran",
        "delivery note", "verifactu", "documental", "document processing", "ocr", "presupuesto",
        "quote", "email", "correo", "rpa", "bpa", "n8n", "make\.com", "zapier", "workflow",
        "flujo de trabajo", "conciliacion", "back-?office", "tareas repetitivas", "repetitive",
    ],
    "custom-software": [
        "software a medida", "custom software", "erp", "crm", "integracion", "integration", "saas",
        "desarrollo de software", "software development", "vibe coding", "herramientas internas",
        "internal tools", "aplicacion(?:es)? web", "aplicaciones", "web app", "desarrollo a medida", "custom development", "desarrollador", "developer", "ingenieria de software", "software engineering", "app development", "programador", "low-?code", "no-?code", "programacion", "coding",
    ],
    "ai-consulting": [
        "consultoria", "consulting", "roi", "estrategia", "strategy", "subvencion", "grant", "kit digital",
        "plan", "cuanto cuesta", "how much", "cost", "coste", "decidir", "adopcion", "adoption",
        "rentabilidad", "viabilidad", "feasibility", "hoja de ruta", "roadmap", "pyme", "sme",
    ],
}

/** Priority used to break ties: the more specific service wins over consulting. */
const PRIORITY: ServiceId[] = ["ai-agents", "process-automation", "custom-software", "ai-consulting"]

const PATTERNS = Object.fromEntries(
    PRIORITY.map((id) => [id, KEYWORDS[id].map((k) => new RegExp(`(?:^|[^a-z0-9])${k}`))]),
) as Record<ServiceId, RegExp[]>

function normalize(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/-/g, " ")
}

function score(id: ServiceId, weighted: Array<[string, number]>): number {
    let total = 0
    for (const [text, weight] of weighted) {
        for (const re of PATTERNS[id]) {
            if (re.test(text)) total += weight
        }
    }
    return total
}

/** Deterministic keyword mapping from a post to its most relevant service pages. */
export function mapPostToServices(post: PostLike): BlogServiceMatch {
    const weighted: Array<[string, number]> = [
        [normalize(post.title), 3],
        [normalize(post.slug), 2],
        [normalize(post.category), 1],
        [normalize(post.description ?? ""), 1],
    ]

    const ranked = PRIORITY.map((id, order) => ({ id, order, value: score(id, weighted) }))
        .filter((r) => r.value > 0)
        .sort((a, b) => b.value - a.value || a.order - b.order)

    if (ranked.length === 0) return { primary: "ai-consulting", isDefault: true }

    // A lone "ai-consulting" hit coming only from broad words (pyme, plan...) is weak: still valid, not default.
    const primary = ranked[0].id
    const secondary = ranked.find((r) => r.id !== primary)?.id
    return { primary, secondary, isDefault: false }
}
