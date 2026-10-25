"use client"

import Link from "next/link"
import type { MouseEvent, ReactNode } from "react"

/**
 * A link to a section of the current page.
 *
 * A plain anchor does nothing the second time: the URL already carries the hash,
 * so the browser has nothing to change and the page does not move. This scrolls
 * on every click and keeps the hash in the URL so the section stays shareable.
 *
 * It exists as its own component because the pages that use it are server
 * components, which cannot pass event handlers down.
 */
export function AnchorLink({
  href,
  className,
  children,
  ariaLabel,
  onClick,
}: {
  href: string
  className?: string
  children: ReactNode
  ariaLabel?: string
  onClick?: () => void
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const id = href.split("#")[1]
    const target = id ? document.getElementById(id) : null
    if (!target) {
      onClick?.()
      return
    }
    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.pushState(null, "", href.startsWith("#") ? href : `${window.location.pathname}${href.slice(href.indexOf("#"))}`)
    onClick?.()
  }

  return (
    <Link href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
