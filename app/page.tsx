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

import { CustomCursor } from "@/components/custom-cursor"
import { ParticlesBackground } from "@/components/particles-background"
import { SuccessCasesCarousel } from "@/components/success-cases-carousel"
import { FunctionalChatbot } from "@/components/functional-chatbot"
import { CalendlyWidget } from "@/components/calendly-widget"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const middle = absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2
      window.scrollTo({
        top: middle,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    // Mobile menu close on scroll
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

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
        <CustomCursor />

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
                    <div
                      className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div className="ml-2 lg:ml-4">
                    <div className="text-xs lg:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      PYMES
                    </div>
                    <div className="text-xs text-slate-500">Soluciones IA</div>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8" role="menubar">
                  <button
                    onClick={() => scrollToSection("proceso")}
                    className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                    role="menuitem"
                    aria-label="Ir a la sección de proceso"
                  >
                    Proceso
                    <div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      aria-hidden="true"
                    ></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("casos-exito")}
                    className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                    role="menuitem"
                    aria-label="Ir a la sección de casos de éxito"
                  >
                    Casos de Éxito
                    <div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      aria-hidden="true"
                    ></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("beneficios")}
                    className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                    role="menuitem"
                    aria-label="Ir a la sección de beneficios"
                  >
                    Por Qué Nosotros
                    <div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      aria-hidden="true"
                    ></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="bg-blue-800 text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-800 hover:border-blue-900 hover:bg-blue-900 relative overflow-hidden group ml-4 lg:ml-6 text-sm lg:text-base whitespace-nowrap"
                    role="menuitem"
                    aria-label="Agendar una llamada de consulta"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      Agendar Llamada
                    </span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"
                      aria-hidden="true"
                    ></div>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300"
                  aria-label="Abrir menú de navegación"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </nav>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl z-50 animate-in slide-in-from-top duration-300">
                  <div className="container mx-auto px-4 py-6 space-y-4">
                    <button
                      onClick={() => scrollToSection("proceso")}
                      className="block w-full text-left text-slate-700 font-medium text-lg py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      Proceso
                    </button>
                    <button
                      onClick={() => scrollToSection("casos-exito")}
                      className="block w-full text-left text-slate-700 font-medium text-lg py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      Casos de Éxito
                    </button>
                    <button
                      onClick={() => scrollToSection("beneficios")}
                      className="block w-full text-left text-slate-700 font-medium text-lg py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      Por Qué Nosotros
                    </button>
                    <button
                      onClick={() => scrollToSection("contacto")}
                      className="block w-full bg-blue-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Agendar Llamada
                      </span>
                    </button>
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent animate-gradient-slow break-words"
                  >
                    Automatiza tu PYME con IA
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Reducimos drásticamente el tiempo de tus tareas repetitivas con herramientas de IA diseñadas{" "}
                    <strong className="font-bold text-blue-600">específicamente para tu negocio</strong>, no soluciones
                    genéricas.
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
                    <button
                      onClick={() => scrollToSection("contacto")}
                      className="bg-blue-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-xl text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                      aria-label="Solicitar consulta gratuita"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Consulta Gratuita
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
                    </button>
                    <button
                      onClick={() => scrollToSection("casos-exito")}
                      className="border-2 border-slate-300 text-slate-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-base sm:text-lg"
                      aria-label="Ver casos de éxito reales"
                    >
                      Ver Casos Reales
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2 sm:p-4 order-1 lg:order-2">
                  <div className="w-full max-w-sm sm:max-w-lg">
                    <FunctionalChatbot />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="beneficios"
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden relative"
          aria-labelledby="benefits-heading"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <header className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div
                className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Target className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
                <span>¿Por Qué Somos Diferentes?</span>
              </div>
              <h2
                id="benefits-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient leading-relaxed py-2 sm:py-4"
              >
                ¿Por Qué Elegir I4PYMES?
              </h2>
              <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed px-4">
                No vendemos software genérico.{" "}
                <strong className="font-bold text-blue-600 relative">
                  Creamos la herramienta exacta que necesitas
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
                    aria-hidden="true"
                  ></span>
                </strong>
                , diseñada específicamente para tu negocio y tus procesos únicos.
              </p>
            </header>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              {[
                {
                  icon: Wrench,
                  title: "100% Personalizado",
                  description: "Cada línea de código diseñada específicamente para tu negocio y procesos únicos",
                  color: "blue",
                  stat: "0%",
                  statLabel: "Código Genérico",
                },
                {
                  icon: Users,
                  title: "Soporte Completo",
                  description: "Te acompañamos durante todo el desarrollo hasta lograr exactamente lo que necesitas",
                  color: "green",
                  stat: "24/7",
                  statLabel: "Disponibilidad",
                },
                {
                  icon: Timer,
                  title: "Ahorro de Tiempo Real",
                  description: "Nuestras soluciones reducen drásticamente el tiempo de tareas repetitivas",
                  color: "orange",
                  stat: "80%",
                  statLabel: "Tiempo Ahorrado",
                },
                {
                  icon: Target,
                  title: "Enfoque PYME",
                  description: "Entendemos los retos específicos de las pequeñas y medianas empresas",
                  color: "purple",
                  stat: "100%",
                  statLabel: "Enfoque PYME",
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <article
                    key={index}
                    className="group"
                    style={{ animationDelay: `${index * 200}ms` }}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <meta itemProp="position" content={`${index + 1}`} />
                    <meta itemProp="name" content={benefit.title} />
                    <meta itemProp="description" content={benefit.description} />

                    {/* Main Card with enhanced effects */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 border border-gray-100 h-full flex flex-col relative overflow-hidden group-hover:border-gray-200">
                      {/* Animated gradient border on hover */}
                      <div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r ${
                          benefit.color === "blue"
                            ? "from-blue-400/20 via-blue-500/20 to-blue-600/20"
                            : benefit.color === "green"
                              ? "from-green-400/20 via-green-500/20 to-green-600/20"
                              : benefit.color === "orange"
                                ? "from-orange-400/20 via-orange-500/20 to-orange-600/20"
                                : "from-purple-400/20 via-purple-500/20 to-purple-600/20"
                        } animate-gradient`}
                        aria-hidden="true"
                      ></div>

                      {/* Floating particles effect */}
                      <div
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        aria-hidden="true"
                      >
                        <div
                          className={`w-2 h-2 rounded-full animate-ping ${
                            benefit.color === "blue"
                              ? "bg-blue-400"
                              : benefit.color === "green"
                                ? "bg-green-400"
                                : benefit.color === "orange"
                                  ? "bg-orange-400"
                                  : "bg-purple-400"
                          }`}
                        ></div>
                      </div>
                      <div
                        className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700"
                        aria-hidden="true"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full animate-ping ${
                            benefit.color === "blue"
                              ? "bg-blue-300"
                              : benefit.color === "green"
                                ? "bg-green-300"
                                : benefit.color === "orange"
                                  ? "bg-orange-300"
                                  : "bg-purple-300"
                          }`}
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>

                      {/* Icon with enhanced animation */}
                      <div className="mb-4 sm:mb-6 relative z-10">
                        <div
                          className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 ${
                            benefit.color === "blue"
                              ? "bg-gradient-to-br from-blue-500 to-blue-700 group-hover:from-blue-400 group-hover:to-blue-600"
                              : benefit.color === "green"
                                ? "bg-gradient-to-br from-green-500 to-green-700 group-hover:from-green-400 group-hover:to-green-600"
                                : benefit.color === "orange"
                                  ? "bg-gradient-to-br from-orange-500 to-orange-700 group-hover:from-orange-400 group-hover:to-orange-600"
                                  : "bg-gradient-to-br from-purple-500 to-purple-700 group-hover:from-purple-400 group-hover:to-purple-600"
                          } shadow-lg group-hover:shadow-xl`}
                          aria-hidden="true"
                        >
                          <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white transform group-hover:scale-110 transition-all duration-300" />
                          {/* Pulsing ring effect */}
                          <div
                            className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 opacity-0 group-hover:opacity-100 animate-ping ${
                              benefit.color === "blue"
                                ? "border-blue-300"
                                : benefit.color === "green"
                                  ? "border-green-300"
                                  : benefit.color === "orange"
                                    ? "border-orange-300"
                                    : "border-purple-300"
                            }`}
                          ></div>
                        </div>
                      </div>

                      {/* Content with enhanced typography */}
                      <div className="text-center flex-grow relative z-10">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-slate-900 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                          {benefit.description}
                        </p>
                      </div>

                      {/* Enhanced Stats Badge */}
                      <div className="mt-auto text-center relative z-10">
                        <div
                          className={`inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                            benefit.color === "blue"
                              ? "bg-blue-100 text-blue-700 group-hover:bg-blue-200 group-hover:text-blue-800"
                              : benefit.color === "green"
                                ? "bg-green-100 text-green-700 group-hover:bg-green-200 group-hover:text-green-800"
                                : benefit.color === "orange"
                                  ? "bg-orange-100 text-orange-700 group-hover:bg-orange-200 group-hover:text-orange-800"
                                  : "bg-purple-100 text-purple-700 group-hover:bg-purple-200 group-hover:text-purple-800"
                          }`}
                        >
                          <span className="text-base sm:text-lg mr-1 font-extrabold">{benefit.stat}</span>
                          <span className="text-xs opacity-80">{benefit.statLabel}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"
                  aria-hidden="true"
                ></div>
                <CheckCircle
                  className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 relative z-10 group-hover:animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-semibold text-base sm:text-lg relative z-10">
                  ¿Listo para una solución 100% personalizada?
                </span>
                <ArrowRight
                  className="w-5 sm:w-6 h-5 sm:h-6 ml-2 sm:ml-3 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
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
                Nuestro Proceso de Trabajo
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
                  title: "Análisis Profundo",
                  description:
                    "Estudiamos a fondo tus procesos actuales, identificamos exactamente qué necesitas automatizar y cómo debe funcionar tu herramienta ideal.",
                  benefit: "Análisis detallado incluido",
                  color: "blue",
                },
                {
                  icon: Code,
                  step: 2,
                  title: "Desarrollo Colaborativo",
                  description:
                    "Construimos tu solución paso a paso, con tu feedback constante. Cada funcionalidad se ajusta hasta que sea exactamente lo que necesitas.",
                  benefit: "Feedback continuo",
                  color: "orange",
                },
                {
                  icon: Settings,
                  step: 3,
                  title: "Entrega y Soporte",
                  description:
                    "Te entregamos tu herramienta funcionando perfectamente, te enseñamos a usarla y te damos soporte continuo para cualquier ajuste.",
                  benefit: "Soporte incluido",
                  color: "green",
                },
              ].map((process, index) => {
                const IconComponent = process.icon
                return (
                  <article
                    key={index}
                    className={`text-center bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-${process.color}-100 hover:transform hover:-translate-y-2 sm:hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden hover:shadow-${process.color}-500/20 hover:shadow-2xl`}
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
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-${process.color}-400 shadow-[0_0_30px_rgba(${
                          process.color === "blue"
                            ? "59,130,246"
                            : process.color === "orange"
                              ? "249,115,22"
                              : "34,197,94"
                        },0.3)]`}
                      ></div>
                    </div>
                    <div className="relative z-10">
                      <div
                        className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-${process.color}-500 to-${process.color}-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true"
                      >
                        <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                      </div>
                      <div
                        className={`w-6 sm:w-8 h-6 sm:h-8 bg-${process.color}-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xs sm:text-sm font-bold`}
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

        {/* CTA Section */}
        <section
          className="bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          {/* Subtle animated background */}
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 left-20 w-32 sm:w-48 h-32 sm:h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center relative z-10 max-w-6xl">
            <div className="max-w-4xl mx-auto">
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              >
                ¿Listo para Tu Herramienta Personalizada?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
                En una llamada de 30 minutos analizamos tus procesos específicos y te explicamos exactamente cómo
                podemos automatizar las tareas que más tiempo te quitan.
              </p>

              {/* Compact benefits */}
              <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm list-none">
                <li className="flex items-center justify-center text-blue-200">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 mr-2" aria-hidden="true" />
                  <span>Consulta gratuita de 30 min</span>
                </li>
                <li className="flex items-center justify-center text-blue-200">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 mr-2" aria-hidden="true" />
                  <span>Análisis de procesos específicos</span>
                </li>
                <li className="flex items-center justify-center text-blue-200">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 mr-2" aria-hidden="true" />
                  <span>Presupuesto personalizado</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToSection("contacto")}
                className="inline-flex items-center bg-white text-slate-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-lg text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                aria-label="Solicitar consulta gratuita personalizada"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
                  Quiero Mi Consulta Gratuita
                  <ArrowRight
                    className="w-4 sm:w-5 h-4 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                ></div>
              </button>
            </div>
          </div>
        </section>

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
                Agenda tu Consulta Gratuita
              </h2>
              <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed px-4">
                Selecciona el día y la hora que mejor te convenga. En 30 minutos analizaremos tu caso específico y te
                daremos un <strong className="font-bold text-blue-600">plan de acción personalizado</strong> para
                automatizar tu negocio.
              </p>
            </header>

            {/* What to expect section */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              <article
                className="text-center bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden hover:border-blue-200 transform hover:-translate-y-1 sm:hover:-translate-y-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Service"
                style={{ animationDelay: "0ms" }}
              >
                <meta itemProp="position" content="1" />
                <meta itemProp="name" content="Análisis Detallado" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-400/10 via-blue-500/10 to-blue-600/10 animate-gradient"></div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <div
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                    <BarChart2 className="w-8 sm:w-10 h-8 sm:h-10 text-white transform group-hover:scale-110 transition-all duration-300" />
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-blue-300 opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    Análisis Detallado
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base"
                    itemProp="description"
                  >
                    Revisamos tus procesos actuales y identificamos las mejores oportunidades de automatización
                  </p>
                </div>
              </article>

              <article
                className="text-center bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden hover:border-green-200 transform hover:-translate-y-1 sm:hover:-translate-y-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Service"
                style={{ animationDelay: "200ms" }}
              >
                <meta itemProp="position" content="2" />
                <meta itemProp="name" content="Estrategia Personalizada" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-green-400/10 via-green-500/10 to-green-600/10 animate-gradient"></div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <div
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-ping"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                    <Target className="w-8 sm:w-10 h-8 sm:h-10 text-white transform group-hover:scale-110 transition-all duration-300" />
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-green-300 opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    Estrategia Personalizada
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base"
                    itemProp="description"
                  >
                    Te presentamos un plan específico diseñado exclusivamente para tu negocio y objetivos
                  </p>
                </div>
              </article>

              <article
                className="text-center bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden hover:border-purple-200 transform hover:-translate-y-1 sm:hover:-translate-y-2 md:col-span-3 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Service"
                style={{ animationDelay: "400ms" }}
              >
                <meta itemProp="position" content="3" />
                <meta itemProp="name" content="Presupuesto Transparente" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-purple-400/10 via-purple-500/10 to-purple-600/10 animate-gradient"></div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                </div>
                <div
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                    <TrendingUp className="w-8 sm:w-10 h-8 sm:h-10 text-white transform group-hover:scale-110 transition-all duration-300" />
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-purple-300 opacity-0 group-hover:opacity-100 animate-ping"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    Presupuesto Transparente
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base"
                    itemProp="description"
                  >
                    Recibes una cotización clara y detallada, sin sorpresas ni costes ocultos
                  </p>
                </div>
              </article>
            </div>

            {/* Calendly widget with enhanced styling and preloader */}
            <CalendlyWidget />

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
              <button
                onClick={() => scrollToSection("inicio")}
                className="mt-6 sm:mt-8 text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg hover:underline transition-colors duration-300 flex items-center gap-2 mx-auto"
                aria-label="Volver al inicio de la página"
              >
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 rotate-180" aria-hidden="true" />
                Volver al Inicio
              </button>
            </div>
          </div>
        </section>

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
                <p className="text-slate-600 text-base sm:text-lg">© 2025 I4PYMES. Todos los derechos reservados.</p>
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
