"use client"

import dynamic from "next/dynamic"

// Estos componentes necesitan ssr:false (Three.js, formularios, UI compleja)
// y deben definirse en un Client Component
export const SuccessCasesCarousel = dynamic(
  () => import("@/components/success-cases-carousel").then((mod) => mod.SuccessCasesCarousel),
  { loading: () => <div className="h-[400px] bg-slate-50/50 rounded-3xl animate-pulse" />, ssr: false }
)

export const AnimatedChip = dynamic(
  () => import("@/components/three-animated-chip").then((mod) => mod.ThreeAnimatedChip),
  { loading: () => <div className="w-full max-w-sm aspect-square bg-slate-100 rounded-3xl animate-pulse mx-auto" /> }
)

export const ContactForm = dynamic(
  () => import("@/components/contact-form").then((mod) => mod.ContactForm),
  { ssr: false }
)

export const CostCalculator = dynamic(
  () => import("@/components/cost-calculator").then((mod) => mod.CostCalculator),
  { ssr: false }
)

export const ConsultingSection = dynamic(
  () => import("@/components/consulting-section").then((mod) => mod.ConsultingSection),
  { ssr: false, loading: () => <div className="h-[600px] bg-slate-50/50 rounded-3xl animate-pulse" /> }
)

