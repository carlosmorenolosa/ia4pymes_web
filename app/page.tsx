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

const FunctionalChatbot = dynamic(() => import("@/components/functional-chatbot").then((mod) => mod.FunctionalChatbot), {
  loading: () => <div className="h-[500px] bg-slate-50/50 rounded-3xl animate-pulse" />,
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
        <section id="inicio" className="relative overflow-hidden min-h-screen" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-transparent"></div>
          <ParticlesBackground />
          <div className="relative z-10">
            {/* Navigation */}
            <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-7xl">
              <nav className="flex items-center justify-between" aria-label="Navegación principal">
                <div className="flex items-center group">
                  <div className="flex items-center relative">
                    <span
                      className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-700 transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                      aria-hidden="true"
                    >
                      I
                    </span>
                    <span
                      className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-700 transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                      aria-hidden="true"
                    >
                      A
                    </span>
                    <span
                      className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                      aria-hidden="true"
                    >
                      4
                    </span>
                  </div>
                </div>
                <div className="ml-2 lg:ml-4">
                  <div className="text-xs lg:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    PYMES
                  </div>
                  <div className="text-xs text-slate-500">Soluciones IA</div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8" role="menubar">
                  <Link
                    href="#proceso"
                    className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                    role="menuitem"
                    aria-label="Ir a la sección de proceso"
                  >
                    Proceso
                    <div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      aria-hidden="true"
                    ></div>
                  </Link>
                  <Link
                    href="#casos-exito"
                    className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                    role="menuitem"
                    aria-label="Ir a la sección de casos de éxito"
                  >
                    Casos de Éxito
                    <div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      aria-hidden="true"
                    ></div>
                  </Link>

                  <Link
                    href="/blog"
                    className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                    role="menuitem"
                    aria-label="Ir al blog"
                  >
                    Blog
                    <div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      aria-hidden="true"
                    ></div>
                  </Link>
                  <Link
                    href="#contacto"
                    className="bg-blue-800 text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-800 hover:border-blue-900 hover:bg-blue-900 relative overflow-hidden group ml-4 lg:ml-6 text-sm lg:text-base whitespace-nowrap inline-flex items-center"
                    role="menuitem"
                    aria-label="Agendar una llamada de consulta"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      Solicitar Presupuesto
                    </span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"
                      aria-hidden="true"
                    ></div>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300 z-[10000] relative"
                  aria-label="Abrir menú de navegación"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </nav>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl z-[9999] animate-in slide-in-from-top duration-300">
                  <div className="container mx-auto px-4 py-6 space-y-4">
                    <Link
                      href="#proceso"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-left text-slate-700 font-medium text-lg py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      Proceso
                    </Link>
                    <Link
                      href="#casos-exito"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-left text-slate-700 font-medium text-lg py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      Casos de Éxito
                    </Link>

                    <Link
                      href="/blog"
                      className="block w-full text-left text-slate-700 font-medium text-lg py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      Blog
                    </Link>
                    <Link
                      href="#contacto"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full bg-blue-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Solicitar Presupuesto
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </header>

            {/* Hero Content */}
            <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-120px)] flex items-center pt-8 pb-12 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 self-center lg:self-start max-w-fit">
                    <Zap className="w-3 sm:w-4 h-3 sm:h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">Soluciones IA 100% Personalizadas</span>
                  </div>
                  <h1
                    id="hero-heading"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent animate-gradient-slow break-words"
                  >
                    Reduce Costes y Aumenta tus Márgenes con IA
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Somos una agencia especializada en reducir costes operativos y aumentar los márgenes de PYMES en España. Contamos con <strong className="font-bold text-blue-600">5 transformaciones exitosas</strong> donde reducimos costes y generamos beneficios reales mediante Inteligencia Artificial personalizada.
                  </p>

                  {/* Stats con schema markup */}
                  <div
                    className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0"
                    itemScope
                    itemType="https://schema.org/ItemList"
                  >
                    <div
                      className="text-center lg:text-left"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600" itemProp="name">
                        Multi
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">Sector</div>
                      <meta itemProp="position" content="1" />
                    </div>
                    <div
                      className="text-center lg:text-left"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-green-600" itemProp="name">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">Personalizado</div>
                      <meta itemProp="position" content="2" />
                    </div>
                    <div
                      className="text-center lg:text-left"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-orange-600" itemProp="name">
                        24/7
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">Acompañamiento</div>
                      <meta itemProp="position" content="3" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 self-center lg:self-start">
                    <Link
                      href="#contacto"
                      className="bg-blue-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-xl text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group inline-flex items-center"
                      aria-label="Analizar mi caso"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Analizar mi caso
                        <ArrowRight
                          className="w-4 sm:w-5 h-4 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      ></div>
                      <div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"
                        aria-hidden="true"
                      ></div>
                    </Link>
                    <Link
                      href="#casos-exito"
                      className="border-2 border-slate-300 text-slate-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-base sm:text-lg inline-flex items-center justify-center"
                      aria-label="Ver casos de éxito reales"
                    >
                      Ver Casos Reales
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 sm:p-4 order-1 lg:order-2 w-full lg:mb-12">
                  <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-3xl transform -translate-y-4 lg:-translate-y-12">
                    <FunctionalChatbot />
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
          <div className="absolute inset-0 bg-blue-900 shadow-2xl shadow-blue-500/20"></div>
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
          className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
          aria-labelledby="process-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <header className="text-center mb-12 sm:mb-16">
              <h2
                id="process-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4"
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
                aria-label="Analizar mi caso"
              >
                <span>Analizar mi caso</span>
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
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative"
          style={{ zIndex: 1 }}
          aria-labelledby="success-cases-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <header className="text-center mb-12 sm:mb-16">
              <h2
                id="success-cases-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4"
              >
                Casos de Éxito Destacados
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                Soluciones reales que transformaron estos sectores clave
              </p>
            </header>

            {/* Stats Section */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2" itemProp="name">
                  4
                </div>
                <div className="text-slate-600 text-sm sm:text-base">Sectores Diferentes</div>
                <meta itemProp="position" content="1" />
              </div>
              <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2" itemProp="name">
                  100%
                </div>
                <div className="text-slate-600 text-sm sm:text-base">Éxito en Entregas</div>
                <meta itemProp="position" content="2" />
              </div>
              <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2" itemProp="name">
                  3
                </div>
                <div className="text-slate-600 text-sm sm:text-base">Tipos de IA</div>
                <meta itemProp="position" content="3" />
              </div>
              <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2" itemProp="name">
                  24/7
                </div>
                <div className="text-slate-600 text-sm sm:text-base">Soporte Continuo</div>
                <meta itemProp="position" content="4" />
              </div>
            </div>
            <SuccessCasesCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <section
          id="contacto"
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden"
          aria-labelledby="contact-heading"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <header className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
                <span>¡El Primer Paso Hacia Tu Transformación!</span>
              </div>
              <h2
                id="contact-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent"
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
        <footer className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-12 sm:py-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="text-center">
              {/* Brand */}
              <div className="flex items-center justify-center mb-6 sm:mb-8 group">
                <div className="flex items-center relative">
                  <span
                    className="text-3xl sm:text-4xl font-bold text-blue-600 transition-all duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    I
                  </span>
                  <span
                    className="text-3xl sm:text-4xl font-bold text-blue-600 transition-all duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    A
                  </span>
                  <span
                    className="text-3xl sm:text-4xl font-bold text-slate-800 transition-all duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    4
                  </span>
                  <div
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    aria-hidden="true"
                  ></div>
                </div>
                <div className="ml-2 sm:ml-3">
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">PYMES</div>
                  <div className="text-xs text-slate-500">Soluciones IA</div>
                </div>
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
