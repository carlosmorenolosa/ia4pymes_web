"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { SplashScreen } from "@/components/splash-screen"

export function HomeHeader({ splashFinished }: { splashFinished: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>


      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 w-full ${
          isScrolled
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
            : "py-6 md:py-10 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between md:justify-center relative">
          {/* Logo */}
          <div className="relative md:absolute md:left-4 lg:left-6 pointer-events-auto z-10">
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
              className="flex items-center group cursor-pointer transition-all hover:opacity-80 active:scale-95"
              aria-label="Ir al inicio de IA4PYMES"
            >
              <div className="flex items-center relative tracking-[-0.04em]">
                <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-blue-600">IA</span>
                <span className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900">4</span>
              </div>
            </Link>
          </div>

          {/* Centered Navigation Pill */}
          <nav
            className="flex items-center bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-full p-1.5 sm:p-2 shadow-lg shadow-slate-200/50 hover:bg-white/90 transition-all duration-300 pointer-events-auto z-10"
            aria-label="Navegación principal"
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {[
                { href: "/#proceso", label: "Proceso" },
                { href: "/#casos-exito", label: "Casos" },
                { href: "/#calculadora", label: "Calculadora" },
                { href: "/blog", label: "Blog" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  {label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              ))}
              <div className="w-px h-6 bg-slate-200 mx-2" />
              <div className="flex items-center gap-1 px-2">
                <span className="text-sm font-bold text-blue-600 cursor-default">ES</span>
                <span className="text-slate-300 text-xs">|</span>
                <Link href="/en" className="text-sm font-semibold text-slate-600 hover:text-slate-700 transition-colors">EN</Link>
              </div>
              <div className="w-px h-6 bg-slate-200 mx-2" />
              <div className="hover:scale-105 active:scale-95 transition-transform duration-300">
                <Link
                  href="/#consultoria"
                  className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-sm md:text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.3)] px-6 py-2"
                >
                  Reservar Consultoría
                </Link>
              </div>
            </div>

            {/* Mobile burger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center size-10 rounded-full text-slate-800 transition-all active:scale-95"
                aria-label="Abrir menú"
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
            className="absolute top-8 right-8 p-3 text-slate-800 bg-slate-100/80 rounded-full hover:bg-slate-200 transition-colors active:scale-95"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="w-full flex flex-col gap-4 items-center">
            {[
              { href: "/#proceso", label: "Proceso" },
              { href: "/#casos-exito", label: "Casos de Éxito" },
              { href: "/#calculadora", label: "Calculadora" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold text-slate-900 tracking-tight py-2 hover:text-blue-600 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="w-full h-px bg-slate-100 my-4 max-w-xs" />
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-blue-600">ES</span>
            <span className="text-slate-300">|</span>
            <Link href="/en" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-600 hover:text-slate-700 transition-colors">EN</Link>
          </div>
          <div className="w-full h-px bg-slate-100 my-4 max-w-xs" />
          <Link
            href="/#consultoria"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full text-lg font-bold transition-all text-white bg-blue-600 px-8 py-4 w-full max-w-xs shadow-[0_8px_20px_rgba(37,99,235,0.3)] active:scale-95"
          >
            Reservar Consultoría
          </Link>
        </div>
      )}
    </>
  )
}
