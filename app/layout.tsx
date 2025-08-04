import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "I4PYMES - Soluciones de Inteligencia Artificial para PYMES",
  description:
    "Automatiza tu PYME con Inteligencia Artificial. Creamos soluciones a medida para que escales tu negocio, reduzcas costes y te enfoques en lo que realmente importa.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-slate-800`}>{children}</body>
    </html>
  )
}
