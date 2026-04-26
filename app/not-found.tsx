import { Metadata } from "next"
import { NotFoundClient } from "./not-found-client"

export const metadata: Metadata = {
    title: "404 - Página no encontrada | IA4PYMES",
    description: "La página que buscas no existe. Vuelve al inicio para seguir explorando soluciones de Inteligencia Artificial para PYMES.",
    robots: {
        index: false,
        follow: true,
    }
}

export default function NotFound() {
    return <NotFoundClient />
}
