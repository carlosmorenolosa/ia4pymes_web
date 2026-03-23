"use client"

import { useEffect, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return

    const cursor = cursorRef.current
    if (!cursor) return

    // Add class to body to hide default cursor only when custom cursor is active
    document.body.classList.add("has-custom-cursor")

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, input, textarea, [role='button']")) {
        cursor?.classList.add("hover")
      } else {
        cursor?.classList.remove("hover")
      }
    }

    const handleMouseDown = () => cursor?.classList.add("click")
    const handleMouseUp = () => cursor?.classList.remove("click")

    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.body.classList.remove("has-custom-cursor")
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isMobile])

  if (isMobile) return null

  return <div ref={cursorRef} className="custom-cursor" />
}
