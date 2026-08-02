"use client"

import type React from "react"
import Link from "next/link"

interface ScrollTopLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function ScrollTopLink({ href, className, children }: ScrollTopLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname
      // If we are already on the target home page (e.g. / or /en), scroll smoothly to top
      if (currentPath === href || (href === "/" && currentPath === "/") || (href === "/en" && currentPath === "/en")) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
