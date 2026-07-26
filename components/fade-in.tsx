"use client"

import { motion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, className = "w-full" }: FadeInProps) {
  return <div className={className}>{children}</div>
}
