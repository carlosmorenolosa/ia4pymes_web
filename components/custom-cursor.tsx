"use client"

import { useEffect, useRef } from "react"

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

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
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" />
}
