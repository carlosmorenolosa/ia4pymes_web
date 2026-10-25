"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { AnchorLink } from "@/components/anchor-link"

type Lang = "es" | "en"

/**
 * One header, two languages. The labels and the anchors are the only thing that
 * changes: the markup, the classes and the order are shared, so the English page
 * cannot drift from the Spanish one again.
 */
const COPY = {
  es: {
    home: "/",
    nav: [
      { href: "/#que-hacemos", label: "Qué hacemos", mobile: "Qué hacemos" },
      { href: "/#proceso", label: "Proceso", mobile: "Proceso" },
      { href: "/#casos-exito", label: "Casos", mobile: "Casos de Éxito" },
      { href: "/#calculadora", label: "Calculadora", mobile: "Calculadora" },
      { href: "/blog", label: "Blog", mobile: "Blog" },
    ],
    cta: { href: "/#consultoria", label: "Reservar Consultoría" },
    switchTo: { href: "/en", label: "EN" },
    current: "ES",
    logoLabel: "Ir al inicio de IA4PYMES",
    navAria: "Navegación principal",
    openAria: "Abrir menú",
    closeAria: "Cerrar menú",
  },
  en: {
    home: "/en",
    nav: [
      { href: "/en#what-we-do", label: "What we do", mobile: "What we do" },
      { href: "/en#process", label: "Process", mobile: "Process" },
      { href: "/en#cases", label: "Cases", mobile: "Case Studies" },
      { href: "/en#calculator", label: "Calculator", mobile: "Calculator" },
      { href: "/en/blog", label: "Blog", mobile: "Blog" },
    ],
    cta: { href: "/en#consultoria", label: "Book a Consultation" },
    switchTo: { href: "/", label: "ES" },
    current: "EN",
    logoLabel: "Back to the IA4PYMES home page",
    navAria: "Main navigation",
    openAria: "Open menu",
    closeAria: "Close menu",
  },
}

export function HomeHeader({ splashFinished, lang = "es" }: { splashFinished: boolean; lang?: Lang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = COPY[lang]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 w-full ${ isScrolled ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "py-6 md:py-10 bg-transparent" }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between md:justify-center relative">
          {/* Logo */}
          <div className="relative md:absolute md:left-4 lg:left-6 pointer-events-auto z-10">
            <Link
              href={t.home}
              onClick={(e) => {
                if (window.location.pathname === t.home) {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
              className="flex items-center group cursor-pointer transition-all hover:opacity-80 active:scale-95"
              aria-label={t.logoLabel}
            >
              <div className="flex items-center relative tracking-[-0.04em]">
                <span className="text-3xl sm:text-3xl md:text-6xl font-extrabold text-blue-600">IA</span>
                <span className="text-3xl sm:text-3xl md:text-6xl font-black text-slate-900">4</span>
              </div>
            </Link>
          </div>

          {/* Centered Navigation Pill */}
          <nav
            className="flex items-center bg-white/70 backdrop-blur-xl border-slate-200/60 rounded-lg p-1.5 sm:p-2 shadow-slate-200/50 hover:bg-white/90 transition-all duration-300 pointer-events-auto z-10"
            aria-label={t.navAria}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {t.nav.map(({ href, label }) => (
                <AnchorLink
                  key={href}
                  href={href}
                  className="group relative text-slate-700 text-base md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-lg hover:bg-slate-100/50 whitespace-nowrap"
                >
                  {label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </AnchorLink>
              ))}
              <div className="w-px h-6 bg-slate-200 mx-2" />
              <div className="flex items-center gap-1 px-2">
                <span className="text-base font-bold text-blue-600 cursor-default">{t.current}</span>
                <span className="text-slate-300 text-xs">|</span>
                <Link href={t.switchTo.href} className="text-base font-semibold text-slate-600 hover:text-slate-700 transition-colors">{t.switchTo.label}</Link>
              </div>
              <div className="w-px h-6 bg-slate-200 mx-2" />
              <div className="hover:scale-105 active:scale-95 transition-transform duration-300">
                <AnchorLink
                  href={t.cta.href}
                  className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-lg text-base md:text-base font-bold transition-all text-white bg-blue-600 hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.3)] px-6 py-2"
                >
                  {t.cta.label}
                </AnchorLink>
              </div>
            </div>

            {/* Mobile burger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center size-10 rounded-full text-slate-800 transition-all active:scale-95"
                aria-label={t.openAria}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[99999] animate-in fade-in slide-in-from-top-4 duration-300 pt-32 px-6 flex flex-col gap-6 items-center pointer-events-auto overflow-y-auto">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-3 text-slate-800 bg-slate-100/80 rounded-lg hover:bg-slate-200 transition-colors active:scale-95"
            aria-label={t.closeAria}
          >
            <X className="w-7 h-7" />
          </button>
          <div className="w-full flex flex-col gap-4 items-center">
            {t.nav.map(({ href, mobile }) => (
              <AnchorLink
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold text-slate-900 tracking-tight py-2 hover:text-blue-600 transition-colors"
              >
                {mobile}
              </AnchorLink>
            ))}
          </div>
          <div className="w-full h-px bg-slate-100 my-4 max-w-xs" />
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-blue-600">{t.current}</span>
            <span className="text-slate-300">|</span>
            <Link href={t.switchTo.href} onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-600 hover:text-slate-700 transition-colors">{t.switchTo.label}</Link>
          </div>
          <div className="w-full h-px bg-slate-100 my-4 max-w-xs" />
          <AnchorLink
            href={t.cta.href}
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-lg text-xl font-bold transition-all text-white bg-blue-600 px-8 py-4 w-full max-w-xs shadow-[0_8px_20px_rgba(37,99,235,0.3)] active:scale-95"
          >
            {t.cta.label}
          </AnchorLink>
        </div>
      )}
    </>
  )
}
