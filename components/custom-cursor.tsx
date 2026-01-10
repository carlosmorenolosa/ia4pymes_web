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
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
      }
    }

    const handleMouseEnter = () => {
      if (cursor) cursor.classList.add("hover")
    }

    const handleMouseLeave = () => {
      if (cursor) cursor.classList.remove("hover")
    }

    const handleMouseDown = () => {
      if (cursor) cursor.classList.add("click")
    }

    const handleMouseUp = () => {
      if (cursor) cursor.classList.remove("click")
    }

    // Event listeners básicos
    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Hover effects para elementos interactivos
    const interactiveElements = document.querySelectorAll("button, a")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    // Cleanup
    return () => {
      document.body.classList.remove("has-custom-cursor")
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isMobile])

  if (isMobile) return null

  return <div ref={cursorRef} className="custom-cursor" />
}
