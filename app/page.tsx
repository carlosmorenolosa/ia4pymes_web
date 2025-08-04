"use client"

import { useEffect, useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  BarChart2,
  Code,
  Settings,
  Heart,
  Sliders,
  MessageCircle,
  Shield,
  Mail,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Wrench,
  Timer,
} from "lucide-react"

// Custom Cursor Component - Versión simplificada y más fluida
const CustomCursor = () => {
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

    // Hover effects para elementos interactivos - versión simplificada
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

// Particles animation component
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      opacity: number
      size: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.4 + 0.1,
          size: Math.random() * 3 + 1,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity * 0.7})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 100)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
}

// Counter animation hook
const useCounter = (end: number, duration = 1500) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, isVisible])

  return { count, ref }
}

const Counter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const { count, ref } = useCounter(target)
  return (
    <span ref={ref} className="text-3xl font-extrabold">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const successCases = [
    {
      title: "IA Dermatológica",
      company: "Hospital de Toledo",
      description:
        "Implementación de visión por computadora para análisis médico, demostrando cómo la IA puede asistir a profesionales de la salud en diagnósticos más precisos y eficientes.",
      icon: Heart,
      color: "blue",
      benefit: "Diagnósticos más rápidos y precisos",
    },
    {
      title: "Automatizador de Presupuestos",
      company: "Constructora CORSAM",
      description:
        "Sistema inteligente de cálculo automático para el sector construcción, eliminando errores humanos y acelerando significativamente los procesos de cotización comercial.",
      icon: Sliders,
      color: "orange",
      benefit: "Presupuestos en minutos, no horas",
    },
    {
      title: "Chatbot de Atención al Cliente",
      company: "Viajes Rascado",
      description:
        "Asistente conversacional avanzado para el sector turismo, capaz de manejar consultas complejas y proporcionar atención personalizada las 24 horas del día.",
      icon: MessageCircle,
      color: "green",
      benefit: "Atención 24/7 sin interrupciones",
    },
    {
      title: "Predicción de Daños",
      company: "Puerto de Alicante",
      description:
        "Modelo de machine learning para logística portuaria que anticipa incidencias, optimiza recursos y reduce costes operativos mediante análisis predictivo.",
      icon: Shield,
      color: "purple",
      benefit: "Prevención proactiva de incidencias",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % successCases.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, successCases.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % successCases.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + successCases.length) % successCases.length)
  }

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

  return (
    <main className="bg-white">
      <CustomCursor />

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-transparent"></div>
        <ParticlesBackground />

        <div className="relative z-10">
          {/* Navigation */}
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-blue-700">I</span>
                  <span className="text-4xl font-bold text-blue-700">A</span>
                  <span className="text-4xl font-bold text-slate-900">4</span>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-slate-700 font-medium text-lg hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50/50"
                >
                  Proceso
                </button>
                <button
                  onClick={() => scrollToSection("casos-exito")}
                  className="text-slate-700 font-medium text-lg hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50/50"
                >
                  Casos de Éxito
                </button>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-slate-700 font-medium text-lg hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50/50"
                >
                  Por Qué Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-800 hover:border-blue-900 hover:bg-blue-900 relative overflow-hidden group ml-4"
                >
                  <span className="relative z-10">Agendar Llamada</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
                </button>
              </nav>
            </div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-6 min-h-[calc(100vh-92px)] flex items-center pt-12 pb-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 self-center lg:self-start">
                  <Zap className="w-4 h-4 mr-2" />
                  Soluciones IA 100% Personalizadas
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent animate-gradient-slow">
                  Automatiza tu PYME con IA
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
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
      <section id="beneficios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">¿Por Qué Elegir I4PYMES?</h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-600">
              No vendemos software genérico. Creamos la herramienta exacta que necesitas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wrench,
                title: "100% Personalizado",
                description: "Cada línea de código diseñada específicamente para tu negocio y procesos únicos",
              },
              {
                icon: Users,
                title: "Acompañamiento Total",
                description: "Estamos contigo durante todo el desarrollo hasta que tengas exactamente lo que necesitas",
              },
              {
                icon: Timer,
                title: "Ahorro de Tiempo Real",
                description: "Nuestras soluciones reducen drásticamente el tiempo de tareas repetitivas",
              },
              {
                icon: Target,
                title: "Enfoque PYME",
                description: "Entendemos los retos específicos de las pequeñas y medianas empresas",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-600">
              Desarrollo colaborativo donde tú decides cada detalle de tu herramienta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="text-center bg-white p-8 rounded-3xl shadow-xl border border-blue-100 hover:transform hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden hover:shadow-blue-500/20 hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart2 className="w-10 h-10 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Análisis Profundo</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Estudiamos a fondo tus procesos actuales, identificamos exactamente qué necesitas automatizar y cómo
                  debe funcionar tu herramienta ideal.
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Análisis detallado incluido</span>
                </div>
              </div>
            </div>

            <div className="text-center bg-white p-8 rounded-3xl shadow-xl border border-orange-100 hover:transform hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden hover:shadow-orange-500/20 hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.3)]"></div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Desarrollo Colaborativo</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Construimos tu solución paso a paso, con tu feedback constante. Cada funcionalidad se ajusta hasta que
                  sea exactamente lo que necesitas.
                </p>
                <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Feedback continuo</span>
                </div>
              </div>
            </div>

            <div className="text-center bg-white p-8 rounded-3xl shadow-xl border border-green-100 hover:transform hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden hover:shadow-green-500/20 hover:shadow-2xl">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]"></div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Entrega y Soporte</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Te entregamos tu herramienta funcionando perfectamente, te enseñamos a usarla y te damos soporte
                  continuo para cualquier ajuste.
                </p>
                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Soporte incluido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos-exito" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-visible">
        <div className="container mx-auto px-6">
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

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-visible">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {successCases.map((case_, index) => {
                  const IconComponent = case_.icon

                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="flex flex-col p-10 rounded-3xl h-full text-left bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-4 cursor-pointer group relative overflow-hidden z-20 hover:z-30">
                        {/* Always visible colored border overlay */}
                        <div
                          className={`absolute inset-0 rounded-3xl border-2 opacity-30 pointer-events-none transition-all duration-300 group-hover:opacity-100 ${
                            case_.color === "blue"
                              ? "border-blue-400 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                              : case_.color === "orange"
                                ? "border-orange-400 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
                                : case_.color === "green"
                                  ? "border-green-400 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]"
                                  : "border-purple-400 group-hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]"
                          }`}
                        ></div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-2">{case_.title}</h3>
                            <p className="text-xl font-semibold text-slate-600">{case_.company}</p>
                          </div>
                          <div
                            className={`w-16 h-16 backdrop-blur-sm border rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 ${
                              case_.color === "blue"
                                ? "text-blue-600 bg-blue-500/10 border-blue-500/20"
                                : case_.color === "orange"
                                  ? "text-orange-600 bg-orange-500/10 border-orange-500/20"
                                  : case_.color === "green"
                                    ? "text-green-600 bg-green-500/10 border-green-500/20"
                                    : "text-purple-600 bg-purple-500/10 border-purple-500/20"
                            }`}
                          >
                            <IconComponent className="w-8 h-8" />
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed flex-grow mb-8 text-lg relative z-10">
                          {case_.description}
                        </p>
                        <div className="mt-auto pt-8 border-t border-gray-200/80 relative z-10">
                          <div className="flex items-center gap-3">
                            <CheckCircle
                              className={`w-6 h-6 ${
                                case_.color === "blue"
                                  ? "text-blue-600"
                                  : case_.color === "orange"
                                    ? "text-orange-600"
                                    : case_.color === "green"
                                      ? "text-green-600"
                                      : "text-purple-600"
                              }`}
                            />
                            <p className="text-lg font-semibold text-slate-700">{case_.benefit}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-20 z-10 flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-sm shadow-xl rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8 text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-20 z-10 flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-sm shadow-xl rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-8 h-8 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%3E%3Cpath%20d=%22M10%2010%20L90%2090%20M10%2090%20L90%2010%22%20strokeWidth=%220.5%22%20stroke=%22rgba(255,255,255,0.2)%22%20/%3E%3C/svg%3E')] bg-[length:30px_30px] animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">¿Listo para Tu Herramienta Personalizada?</h2>
          <p className="max-w-4xl mx-auto text-xl text-blue-100 mb-12 leading-relaxed">
            En una llamada de 30 minutos analizamos tus procesos específicos y te explicamos exactamente cómo podemos
            automatizar las tareas que más tiempo te quitan. Sin compromisos, solo información valiosa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center text-blue-100">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              <span>Consulta gratuita de 30 min</span>
            </div>
            <div className="flex items-center text-blue-100">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              <span>Análisis de tus procesos específicos</span>
            </div>
            <div className="flex items-center text-blue-100">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              <span>Presupuesto personalizado</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("contacto")}
            className="inline-block bg-white text-blue-800 font-bold py-5 px-12 rounded-xl shadow-2xl text-xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group border-2 border-white hover:border-blue-200"
          >
            <span className="relative z-10 flex items-center gap-3">
              <TrendingUp className="w-6 h-6" />
              Quiero Mi Consulta Gratuita
              <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
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
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
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
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-20">
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
