"use client"

import { useEffect } from "react"
import {
  BarChart2,
  Code,
  Settings,
  Zap,
  Target,
  Wrench,
  Timer,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Calendar,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

import dynamic from "next/dynamic"

import { ParticlesBackground } from "@/components/particles-background"

// Lazy load heavy components
const SuccessCasesCarousel = dynamic(() => import("@/components/success-cases-carousel").then((mod) => mod.SuccessCasesCarousel), {
  loading: () => <div className="h-[400px] bg-slate-50/50 rounded-3xl animate-pulse" />,
  ssr: false
})

const AnimatedChip = dynamic(() => import("@/components/animated-chip").then((mod) => mod.AnimatedChip), {
  loading: () => <div className="w-full max-w-sm aspect-square bg-slate-100 rounded-3xl animate-pulse mx-auto" />,
  ssr: false
})


const ContactForm = dynamic(() => import("@/components/contact-form").then((mod) => mod.ContactForm), {
  ssr: false
})

const LatestArticles = dynamic(() => import("@/components/latest-articles").then((mod) => mod.LatestArticles), {
  loading: () => <div className="h-[400px] bg-slate-50/50 rounded-3xl animate-pulse" />,
  ssr: false
})

const CostCalculator = dynamic(() => import("@/components/cost-calculator").then((mod) => mod.CostCalculator), {
  ssr: false
})

const FaqSection = dynamic(() => import("@/components/faq-section").then((mod) => mod.FaqSection), {
  ssr: false
})

import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()


  return (
    <>
      {/* Skip to main content para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Saltar al contenido principal
      </a>

      <main id="main-content" className="bg-white">

        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col justify-start" aria-labelledby="hero-heading">
          {/* Aesthetic Background: Clean white with subtle blurred spheres (Refractweb style but light mode) */}
          <div className="absolute inset-0 bg-white pointer-events-none z-0">
            <div className="absolute top-[-10%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-100/50 opacity-60 blur-[150px]"></div>
            <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-slate-100/80 opacity-60 blur-[150px]"></div>
          </div>
          
          <div className="relative z-10 flex-col flex h-full">
            {/* Navigation */}
            <header className="fixed top-4 md:top-8 px-4 sm:px-6 z-[100] w-full flex justify-between items-center max-w-7xl mx-auto left-1/2 -translate-x-1/2">
              <nav className="flex items-center justify-between w-full" aria-label="Navegación principal">
                
                {/* Logo Chip */}
                <Link href="/" className="z-50 relative group">
                  <div className="text-slate-900 border border-slate-200/60 rounded-full text-sm px-4 py-2 font-medium inline-flex items-center justify-center tracking-tight cursor-pointer transition-all h-9 backdrop-blur-md bg-white/60 shadow-sm hover:shadow-md hover:bg-white/80">
                    <span className="font-extrabold flex items-center gap-1">
                      <span className="text-blue-600">I</span>A<span className="text-slate-500">4</span>
                    </span>
                    <span className="ml-1 font-semibold text-slate-600">PYMES</span>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-full p-1.5 items-center gap-2 shadow-sm">
                  <Link
                    href="#proceso"
                    className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-all duration-300 px-4 py-1.5 rounded-full hover:bg-white/80 whitespace-nowrap"
                  >
                    Proceso
                  </Link>
                  <Link
                    href="#casos-exito"
                    className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-all duration-300 px-4 py-1.5 rounded-full hover:bg-white/80 whitespace-nowrap"
                  >
                    Casos
                  </Link>
                  <Link
                    href="#calculadora"
                    className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-all duration-300 px-4 py-1.5 rounded-full hover:bg-white/80 whitespace-nowrap"
                  >
                    Calculadora
                  </Link>
                  <Link
                    href="/blog"
                    className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-all duration-300 px-4 py-1.5 rounded-full hover:bg-white/80 whitespace-nowrap"
                  >
                    Blog
                  </Link>
                </div>

                <div className="flex items-center gap-3 relative z-[70]">
                  <Link
                    href="#contacto"
                    className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-sm font-medium transition-all text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 shadow-sm px-4 py-2 h-9"
                  >
                    Diagnóstico Gratuito
                  </Link>
                  
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex items-center justify-center size-10 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/60 text-slate-800 transition-all hover:bg-white/80"
                    aria-label="Abrir menú"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </nav>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-[9999] animate-in slide-in-from-top duration-300 pt-24 px-6 flex flex-col gap-6 items-center">
                  <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 text-slate-800 bg-slate-100 rounded-full">
                     <X className="w-6 h-6" />
                  </button>
                  <Link href="#proceso" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800 tracking-tight">Proceso</Link>
                  <Link href="#casos-exito" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800 tracking-tight">Casos de Éxito</Link>
                  <Link href="#calculadora" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800 tracking-tight">Calculadora</Link>
                  <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800 tracking-tight">Blog</Link>
                  <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full text-base font-medium transition-all text-white bg-blue-600 px-6 py-3 w-full max-w-xs shadow-md">
                    Diagnóstico Gratuito
                  </Link>
                </div>
              )}
            </header>

            {/* Hero Content */}
            <div className="container mx-auto px-4 sm:px-6 pt-32 lg:pt-40 pb-20 flex-grow flex items-center justify-center max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 lg:pr-10">
                  <div className="inline-flex cursor-pointer bg-white/50 backdrop-blur-sm border border-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 rounded-full items-center gap-2 px-4 py-1.5 mb-6 self-center lg:self-start max-w-fit shadow-sm">
                    <div className="relative size-2 flex items-center justify-center">
                      <span className="size-2 rounded-full bg-blue-500 shrink-0 absolute"></span>
                      <span className="size-2 blur rounded-full bg-blue-400 shrink-0 animate-pulse absolute"></span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-slate-700">Soluciones IA 100% Personalizadas</span>
                  </div>
                  
                  <h1
                    id="hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6 text-slate-900 drop-shadow-sm"
                  >
                    Reduce Costes y Aumenta tus Márgenes con IA
                  </h1>
                  
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-[1.4] tracking-tight text-pretty">
                    Somos una agencia especializada en reducir costes operativos y aumentar márgenes de PYMES en España. <strong className="font-bold text-slate-900 border-b-2 border-blue-500/30">5 transformaciones exitosas</strong> garantizan nuestro impacto real mediante automatización.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 self-center lg:self-start relative z-30">
                    <Link
                      href="#contacto"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-medium transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-blue-700 px-8 py-3.5"
                    >
                      Solicitar Diagnóstico
                    </Link>
                    <Link
                      href="#casos-exito"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-medium transition-all text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm px-8 py-3.5 group"
                    >
                      <span className="flex items-center justify-center relative overflow-hidden">
                        Explorar casos reales
                      </span>
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center justify-center p-2 sm:p-4 order-1 lg:order-2 w-full lg:mb-12 perspective-[1000px]">
                  <div className="w-full max-w-lg sm:max-w-xl">
                    <AnimatedChip />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator Section */}

        <section id="calculadora" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <CostCalculator />
          </div>
        </section>


        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="py-12 sm:py-16 relative overflow-hidden"
          aria-labelledby="newsletter-heading"
        >
          {/* Futuristic background elements */}
          <div className="absolute inset-0 bg-blue-950 shadow-2xl shadow-blue-500/20"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25"></div>

          {/* Animated Glow Orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
              {/* Decorative scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-2 top-0 animate-[scanline_8s_linear_infinite] pointer-events-none"></div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-blue-400/30">
                    <Zap className="w-3.5 h-3.5 mr-1.5 text-yellow-400" />
                    Un caso real cada día
                  </div>
                  <h2
                    id="newsletter-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight"
                  >
                    Un <span className="text-blue-400">caso diario</span> para transformar tu empresa
                  </h2>
                  <p className="text-base sm:text-lg text-blue-50/80 leading-relaxed mb-6">
                    Explicamos cada día cómo aplicar la IA en situaciones reales. Recibe ejemplos prácticos y herramientas que puedes empezar a implementar hoy mismo en tu negocio.
                  </p>

                  <ul className="space-y-4 mb-8 hidden sm:block text-blue-100/70">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Casos de uso reales paso a paso
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Automatizaciones listas para tu PYME
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Herramientas que ahorran tiempo real
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="relative group/btn w-full max-w-md">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover/btn:opacity-75 transition duration-500 animate-gradient-slow"></div>
                    <Link
                      href="https://newsletter.ia4pymes.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl text-xl hover:bg-blue-700 transition-all duration-300 text-center transform hover:scale-[1.02] flex items-center justify-center gap-3"
                    >
                      <Mail className="w-6 h-6" />
                      Suscribirse Ahora
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <p className="text-blue-200/50 text-sm italic">
                    * Sin spam, solo contenido de alto valor técnico y estratégico.
                  </p>

                  {/* Floating Icon Decoration */}
                  <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                    <Mail className="w-64 h-64 text-white rotate-[-15deg]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scanline {
              0% { top: -10%; }
              100% { top: 110%; }
            }
          `}</style>
        </section>

        {/* Process Section */}
        <section
          id="proceso"
          className="py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100"
          aria-labelledby="process-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <header className="text-center mb-16 sm:mb-20">
              <h2
                id="process-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4"
              >
                Cómo trabajamos en IA4PYMES
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                Desarrollo colaborativo donde tú decides cada detalle de tu herramienta
              </p>
            </header>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative"
              itemScope
              itemType="https://schema.org/HowTo"
            >
              <meta itemProp="name" content="Proceso de desarrollo de IA para PYMES" />
              <meta itemProp="description" content="Proceso de 3 pasos para crear herramientas de IA personalizadas" />

              {[
                {
                  icon: BarChart2,
                  step: 1,
                  title: "Analizamos el Despilfarro",
                  description:
                    "Estudiamos a fondo tu empresa para ver el gasto que se está despilfarrando en tareas manuales y repetitivas que se podrían hacer con IA.",
                  benefit: "Identificación de ahorro",
                  color: "blue",
                },
                {
                  icon: Code,
                  step: 2,
                  title: "Solución con ROI Asegurado",
                  description:
                    "Generamos una solución personalizada que asegura un retorno de inversión (ROI) rápido y beneficios reales para tu negocio.",
                  benefit: "Beneficios garantizados",
                  color: "orange",
                },
                {
                  icon: Settings,
                  step: 3,
                  title: "Soporte y Mejora Continua",
                  description:
                    "Implementamos la herramienta, te enseñamos a usarla y te acompañamos para que tu empresa siga optimizándose continuamente.",
                  benefit: "Acompañamiento a largo plazo",
                  color: "green",
                },
              ].map((process, index) => {
                const IconComponent = process.icon
                return (
                  <article
                    key={index}
                    className={`text-center bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 group relative overflow-hidden hover:transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl ${process.color === "blue"
                      ? "border-blue-100 hover:shadow-blue-500/20"
                      : process.color === "orange"
                        ? "border-orange-100 hover:shadow-orange-500/20"
                        : "border-green-100 hover:shadow-green-500/20"
                      }`}
                    itemProp="step"
                    itemScope
                    itemType="https://schema.org/HowToStep"
                  >
                    <meta itemProp="position" content={`${process.step}`} />
                    <meta itemProp="name" content={process.title} />
                    <meta itemProp="text" content={process.description} />

                    <div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                      aria-hidden="true"
                    >
                      <div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 ${process.color === "blue"
                          ? "border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                          : process.color === "orange"
                            ? "border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                            : "border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                          }`}
                      ></div>
                    </div>
                    {/* Floating particles effect */}
                    <div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      aria-hidden="true"
                    >
                      <div
                        className={`w-2 h-2 rounded-full animate-ping ${process.color === "blue"
                          ? "bg-blue-400"
                          : process.color === "orange"
                            ? "bg-orange-400"
                            : "bg-green-400"
                          }`}
                      ></div>
                    </div>
                    <div
                      className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700"
                      aria-hidden="true"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full animate-ping ${process.color === "blue"
                          ? "bg-blue-300"
                          : process.color === "orange"
                            ? "bg-orange-300"
                            : "bg-green-300"
                          }`}
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <div className="relative z-10">
                      <div
                        className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${process.color === "blue"
                          ? "from-blue-500 to-blue-700"
                          : process.color === "orange"
                            ? "from-orange-500 to-orange-700"
                            : "from-green-500 to-green-700"
                          } rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
                        aria-hidden="true"
                      >
                        <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                        {/* Pulsing ring effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 opacity-0 group-hover:opacity-100 animate-ping ${process.color === "blue"
                            ? "border-blue-300"
                            : process.color === "orange"
                              ? "border-orange-300"
                              : "border-green-300"
                            }`}
                        ></div>
                      </div>
                      <div
                        className={`w-6 sm:w-8 h-6 sm:h-8 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xs sm:text-sm font-bold relative z-10 ${process.color === "blue"
                          ? "bg-blue-600"
                          : process.color === "orange"
                            ? "bg-orange-600"
                            : "bg-green-600"
                          }`}
                        aria-label={`Paso ${process.step}`}
                      >
                        {process.step}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-slate-800">
                        {process.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        {process.description}
                      </p>
                      <div
                        className={`flex items-center justify-center gap-2 text-${process.color}-600 font-semibold text-sm sm:text-base`}
                      >
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
                        <span>{process.benefit}</span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Added CTA button here as requested */}
            <div className="mt-12 sm:mt-16 text-center">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <span>Solicitar diagnóstico gratuito</span>
                <ArrowRight
                  className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section
          id="casos-exito"
          className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-100 relative"
          style={{ zIndex: 1 }}
          aria-labelledby="success-cases-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <header className="text-center mb-16 sm:mb-20">
              <h2
                id="success-cases-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4"
              >
                Casos de Éxito Destacados
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                Impacto real garantizado.
              </p>
            </header>

            {/* Stats Section */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-1" itemProp="name">
                  +360%
                </div>
                <div className="text-slate-600 text-base sm:text-lg">Media del ROI</div>
                <meta itemProp="position" content="1" />
              </div>
              <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600 mb-1" itemProp="name">
                  +1.000h
                </div>
                <div className="text-slate-600 text-base sm:text-lg">Horas ahorradas al mes</div>
                <meta itemProp="position" content="2" />
              </div>
              <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-600 mb-1" itemProp="name">
                  100%
                </div>
                <div className="text-slate-600 text-base sm:text-lg">Tasa de éxito</div>
                <meta itemProp="position" content="3" />
              </div>
            </div>
            <SuccessCasesCarousel />

            {/* CTA Button for Success Cases */}
            <div className="mt-12 sm:mt-16 text-center">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                aria-label="Solicitar diagnóstico gratuito"
              >
                <span>Solicitar diagnóstico gratuito</span>
                <ArrowRight
                  className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <section
          id="contacto"
          className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100"
          aria-labelledby="contact-heading"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <header className="text-center mb-16 sm:mb-20">
              <div className="inline-flex cursor-pointer bg-white border border-slate-200 shadow-sm rounded-full items-center gap-2 px-4 py-1.5 mb-6">
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" aria-hidden="true" />
                <span className="text-xs md:text-sm font-medium text-slate-700">Comienza tu Transformación</span>
              </div>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
              >
                Hablemos de Tu Proyecto
              </h2>
              <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed px-4">
                Comienza hoy tu transformación digital aportándonos más detalles sobre lo que necesitas. Nuestro equipo analizará tu caso para ofrecerte la mejor solución de Inteligencia Artificial.
              </p>
            </header>

            {/* Removed the 'What to expect' 3-column cards grid as requested */}

            {/* Custom Contact Form */}
            <ContactForm />

            {/* Trust indicators */}
            <div className="text-center mt-8 sm:mt-12">
              <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-slate-600 list-none">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                  <span className="font-medium text-sm sm:text-base">100% Gratuito</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                  <span className="font-medium text-sm sm:text-base">Sin Compromiso</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                  <span className="font-medium text-sm sm:text-base">Respuesta Inmediata</span>
                </li>
              </ul>
              <Link
                href="#inicio"
                className="mt-6 sm:mt-8 text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg hover:underline transition-colors duration-300 flex items-center gap-2 mx-auto"
                aria-label="Volver al inicio de la página"
              >
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 rotate-180" aria-hidden="true" />
                Volver al Inicio
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <LatestArticles />

        {/* Footer */}
        <footer className="bg-slate-50/50 py-12 sm:py-16 relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="text-center">
              {/* Brand */}
              <div className="flex items-center justify-center mb-6 sm:mb-8 group">
                <Link href="/" className="z-50 relative group">
                  <div className="text-slate-900 border border-slate-200/60 rounded-full text-sm px-4 py-2 font-medium inline-flex items-center justify-center tracking-tight cursor-pointer transition-all h-9 backdrop-blur-md bg-white/60 shadow-sm hover:shadow-md hover:bg-white/80">
                    <span className="font-extrabold flex items-center gap-1">
                      <span className="text-blue-600">I</span>A<span className="text-slate-500">4</span>
                    </span>
                    <span className="ml-1 font-semibold text-slate-600">PYMES</span>
                  </div>
                </Link>
              </div>

              {/* Contact */}
              <div className="mb-6 sm:mb-8">
                <a
                  href="mailto:contacto@ia4pymes.tech"
                  className="inline-flex items-center gap-2 sm:gap-3 text-slate-700 hover:text-blue-600 transition-all duration-300 text-base sm:text-lg group"
                  aria-label="Enviar email a contacto@ia4pymes.tech"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300 group-hover:scale-110">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm sm:text-base">Contáctanos</div>
                    <div className="text-xs sm:text-sm text-slate-500">contacto@ia4pymes.tech</div>
                  </div>
                </a>
              </div>

              {/* Copyright */}
              <div className="border-t border-slate-200 pt-6 sm:pt-8">
                <p className="text-slate-600 text-base sm:text-lg">© 2026 I4PYMES. Todos los derechos reservados.</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  Herramientas de IA hechas a medida para tu PYME
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
