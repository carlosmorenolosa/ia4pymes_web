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
  MessageCircle,
  Mail,
  Clock,
  Calendar,
} from "lucide-react"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticlesBackground } from "@/components/particles-background"
import { SuccessCasesCarousel } from "@/components/success-cases-carousel"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
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
  }

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="bg-white">
      <CustomCursor />

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-transparent"></div>
        <ParticlesBackground />
        <div className="relative z-10">
          {/* Navigation */}
          <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center group">
                <div className="flex items-center relative">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 transition-all duration-300 group-hover:scale-105 drop-shadow-sm">
                    I
                  </span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 transition-all duration-300 group-hover:scale-105 drop-shadow-sm">
                    A
                  </span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 transition-all duration-300 group-hover:scale-105 drop-shadow-sm">
                    4
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
                <div className="ml-3 lg:ml-4">
                  <div className="text-xs lg:text-sm font-semibold text-slate-600 uppercase tracking-wider">PYMES</div>
                  <div className="text-xs text-slate-500">Soluciones IA</div>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-4 lg:gap-8">
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                >
                  Proceso
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </button>
                <button
                  onClick={() => scrollToSection("casos-exito")}
                  className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                >
                  Casos de Éxito
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </button>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-slate-700 font-medium text-lg lg:text-xl hover:text-blue-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50/50 whitespace-nowrap relative group"
                >
                  Por Qué Nosotros
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="bg-blue-800 text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-800 hover:border-blue-900 hover:bg-blue-900 relative overflow-hidden group ml-4 lg:ml-6 text-sm lg:text-base whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Agendar Llamada
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                </button>
              </nav>
            </div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-92px)] flex items-center pt-12 pb-16 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 self-center lg:self-start max-w-fit">
                  <Zap className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">Soluciones IA 100% Personalizadas</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent animate-gradient-slow break-words">
                  Automatiza tu PYME con IA
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Reducimos drásticamente el tiempo de tus tareas repetitivas con herramientas de IA diseñadas{" "}
                  <span className="font-bold text-blue-600">específicamente para tu negocio</span>, no soluciones
                  genéricas.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-blue-600">Multi</div>
                    <div className="text-sm text-slate-600">Sector</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-slate-600">Personalizado</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-slate-600">Acompañamiento</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 self-center lg:self-start">
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="bg-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-xl text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Consulta Gratuita
                      <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("casos-exito")}
                    className="border-2 border-slate-300 text-slate-700 font-bold py-4 px-8 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg"
                  >
                    Ver Casos Reales
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center p-4">
                <div className="w-full max-w-lg h-full flex flex-col justify-center p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <MessageCircle className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Asistente IA</h3>
                      <p className="text-sm text-slate-600">Hecho a medida</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-2xl rounded-bl-sm shadow-sm self-start max-w-sm">
                      <p className="text-slate-800">¡Hola! 👋 ¿Qué tareas repetitivas te quitan más tiempo cada día?</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-br-sm shadow-sm self-end max-w-sm ml-auto border border-gray-200">
                      <p className="text-slate-600">
                        Generar presupuestos me lleva horas, y responder emails de clientes todo el día...
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-2xl rounded-bl-sm shadow-sm self-start max-w-sm">
                      <p className="text-slate-800">
                        Perfecto! Podemos automatizar ambos procesos. Te creo herramientas específicas para tu negocio
                        🚀
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <Target className="w-5 h-5 mr-2" />
              <span>¿Por Qué Somos Diferentes?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient leading-relaxed py-4">
              ¿Por Qué Elegir I4PYMES?
            </h2>
            <p className="max-w-4xl mx-auto text-xl lg:text-2xl text-slate-600 leading-relaxed">
              No vendemos software genérico.{" "}
              <span className="font-bold text-blue-600 relative">
                Creamos la herramienta exacta que necesitas
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></span>
              </span>
              , diseñada específicamente para tu negocio y tus procesos únicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
                <div key={index} className="group" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Main Card with enhanced effects */}
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 h-full flex flex-col relative overflow-hidden group-hover:border-gray-200">
                    {/* Animated gradient border on hover */}
                    <div
                      className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r ${
                        benefit.color === "blue"
                          ? "from-blue-400/20 via-blue-500/20 to-blue-600/20"
                          : benefit.color === "green"
                            ? "from-green-400/20 via-green-500/20 to-green-600/20"
                            : benefit.color === "orange"
                              ? "from-orange-400/20 via-orange-500/20 to-orange-600/20"
                              : "from-purple-400/20 via-purple-500/20 to-purple-600/20"
                      } animate-gradient`}
                    ></div>

                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
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
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700">
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
                    <div className="mb-6 relative z-10">
                      <div
                        className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 ${
                          benefit.color === "blue"
                            ? "bg-gradient-to-br from-blue-500 to-blue-700 group-hover:from-blue-400 group-hover:to-blue-600"
                            : benefit.color === "green"
                              ? "bg-gradient-to-br from-green-500 to-green-700 group-hover:from-green-400 group-hover:to-green-600"
                              : benefit.color === "orange"
                                ? "bg-gradient-to-br from-orange-500 to-orange-700 group-hover:from-orange-400 group-hover:to-orange-600"
                                : "bg-gradient-to-br from-purple-500 to-purple-700 group-hover:from-purple-400 group-hover:to-purple-600"
                        } shadow-lg group-hover:shadow-xl`}
                      >
                        <IconComponent className="w-10 h-10 text-white transform group-hover:scale-110 transition-all duration-300" />

                        {/* Pulsing ring effect */}
                        <div
                          className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 animate-ping ${
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
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-base group-hover:text-gray-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Enhanced Stats Badge */}
                    <div className="mt-auto text-center relative z-10">
                      <div
                        className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                          benefit.color === "blue"
                            ? "bg-blue-100 text-blue-700 group-hover:bg-blue-200 group-hover:text-blue-800"
                            : benefit.color === "green"
                              ? "bg-green-100 text-green-700 group-hover:bg-green-200 group-hover:text-green-800"
                              : benefit.color === "orange"
                                ? "bg-orange-100 text-orange-700 group-hover:bg-orange-200 group-hover:text-orange-800"
                                : "bg-purple-100 text-purple-700 group-hover:bg-purple-200 group-hover:text-purple-800"
                        }`}
                      >
                        <span className="text-lg mr-1 font-extrabold">{benefit.stat}</span>
                        <span className="text-xs opacity-80">{benefit.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
              <CheckCircle className="w-6 h-6 mr-3 relative z-10 group-hover:animate-pulse" />
              <span className="font-semibold text-lg relative z-10">¿Listo para una solución 100% personalizada?</span>
              <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-600">
              Desarrollo colaborativo donde tú decides cada detalle de tu herramienta
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 relative">
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
                <div
                  key={index}
                  className={`text-center bg-white p-8 rounded-3xl shadow-xl border border-${process.color}-100 hover:transform hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden hover:shadow-${process.color}-500/20 hover:shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  >
                    <div
                      className={`absolute inset-0 rounded-3xl border-2 border-${process.color}-400 shadow-[0_0_30px_rgba(${
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
                      className={`w-20 h-20 bg-gradient-to-r from-${process.color}-500 to-${process.color}-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div
                      className={`w-8 h-8 bg-${process.color}-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold`}
                    >
                      {process.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">{process.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{process.description}</p>
                    <div className={`flex items-center justify-center gap-2 text-${process.color}-600 font-semibold`}>
                      <CheckCircle className="w-5 h-5" />
                      <span>{process.benefit}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos-exito" className="py-20 bg-gradient-to-b from-gray-50 to-white relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Casos de Éxito Destacados</h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-600">
              Soluciones reales que transformaron estos sectores clave
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-slate-600">Sectores Diferentes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-slate-600">Éxito en Entregas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-slate-600">Tipos de IA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-slate-600">Soporte Continuo</div>
            </div>
          </div>

          <SuccessCasesCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 text-center relative z-10 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              ¿Listo para Tu Herramienta Personalizada?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              En una llamada de 30 minutos analizamos tus procesos específicos y te explicamos exactamente cómo podemos
              automatizar las tareas que más tiempo te quitan.
            </p>

            {/* Compact benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Consulta gratuita de 30 min</span>
              </div>
              <div className="flex items-center text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Análisis de procesos específicos</span>
              </div>
              <div className="flex items-center text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Presupuesto personalizado</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("contacto")}
              className="inline-flex items-center bg-white text-slate-800 font-bold py-4 px-8 rounded-xl shadow-lg text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                Quiero Mi Consulta Gratuita
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Agenda tu Consulta Gratuita</h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-600">
              Selecciona el día y la hora que mejor te convenga. Analizaremos tu caso específico y te daremos un
              presupuesto personalizado.
            </p>
          </div>
          <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/ia4pymes/30min"
              style={{ minWidth: "320px", height: "650px" }}
            ></div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg hover:underline transition-colors duration-300"
            >
              ↑ Volver al Inicio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-20 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  <span className="text-5xl font-bold text-blue-400">I</span>
                  <span className="text-5xl font-bold text-blue-400">A</span>
                  <span className="text-5xl font-bold text-white">4</span>
                </div>
              </div>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-6">
                Desarrollamos herramientas de IA 100% personalizadas para PYMES. No vendemos software genérico, creamos
                la solución exacta que tu negocio necesita.
              </p>
            </div>
            <div>
              <h5 className="font-bold tracking-wide uppercase text-slate-300 mb-6 text-lg">Servicios</h5>
              <nav className="flex flex-col space-y-4">
                <span className="text-slate-400 text-lg">Automatización de Procesos</span>
                <span className="text-slate-400 text-lg">Chatbots Personalizados</span>
                <span className="text-slate-400 text-lg">Modelos Predictivos</span>
                <span className="text-slate-400 text-lg">Herramientas de Gestión</span>
              </nav>
            </div>
            <div>
              <h5 className="font-bold tracking-wide uppercase text-slate-300 mb-6 text-lg">Contacto</h5>
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:contacto@ia4pymes.tech"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 text-lg"
                >
                  <Mail className="w-6 h-6" />
                  contacto@ia4pymes.tech
                </a>
                <div className="text-slate-400 flex items-center gap-3 text-lg">
                  <Clock className="w-6 h-6" />
                  <span>Lunes - Viernes, 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p className="text-lg">
              © 2025 I4PYMES. Todos los derechos reservados. | Herramientas de IA hechas a medida para tu PYME
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
