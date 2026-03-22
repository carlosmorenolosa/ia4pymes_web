"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import Link from "next/link"

import dynamic from "next/dynamic"

import { ParticlesBackground } from "@/components/particles-background"

// Lazy load heavy components
const SuccessCasesCarousel = dynamic(() => import("@/components/success-cases-carousel").then((mod) => mod.SuccessCasesCarousel), {
  loading: () => <div className="h-[400px] bg-slate-50/50 rounded-3xl animate-pulse" />,
  ssr: false
})

const AnimatedChip = dynamic(() => import("@/components/three-animated-chip").then((mod) => mod.ThreeAnimatedChip), {
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

import { SplashScreen } from "@/components/splash-screen"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const [splashFinished, setSplashFinished] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Control del scroll para el header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reusable scroll reveal wrapper
  const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  )

  return (
    <>
      <SplashScreen onComplete={() => setSplashFinished(true)} />
      
      {/* Skip to main content para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Saltar al contenido principal
      </a>

      <main id="main-content" className="bg-white">

        {/* Navigation - Moved outside of section to remain globally fixed */}
        <header 
          className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 w-full ${
            isScrolled ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "py-6 md:py-10 bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-center relative">
            {/* Logo Section - Top Left, No Container */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={splashFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="absolute left-4 sm:left-6 pointer-events-auto"
            >
              <Link href="#inicio" className="flex items-center group cursor-pointer transition-all hover:opacity-80 active:scale-95">
                <div className="flex items-center relative tracking-[-0.04em]">
                  <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent">IA</span>
                  <span className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900">4</span>
                </div>
              </Link>
            </motion.div>

            {/* Centered Navigation Pill */}
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex items-center bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-full p-2 shadow-lg shadow-slate-200/50 hover:bg-white/90 transition-all duration-300 pointer-events-auto" aria-label="Navegación principal"
            >
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                <Link
                  href="#proceso"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Proceso
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#casos-exito"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Casos
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#calculadora"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Calculadora
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="/blog"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Blog
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <div className="w-px h-6 bg-slate-200 mx-2"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="#contacto"
                    className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-sm md:text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.3)] px-6 py-2"
                  >
                    Diagnóstico Gratuito
                  </Link>
                </motion.div>
              </div>

              <div className="flex md:hidden items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-center size-10 rounded-full text-slate-800 transition-all active:scale-95"
                  aria-label="Abrir menú"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
              <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-[9999] animate-in slide-in-from-top duration-300 pt-24 px-6 flex flex-col gap-6 items-center pointer-events-auto">
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
          </div>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col justify-start" aria-labelledby="hero-heading">
          {/* Aesthetic Background removed for pure white theme */}
          <div className="absolute inset-0 bg-white pointer-events-none z-0"></div>
          
          <div className="relative z-10 flex-col flex h-full">
            {/* Hero Content */}
            <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-120px)] flex items-center pt-24 md:pt-32 pb-12 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 relative z-10">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                    id="hero-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter leading-[1] mb-6 text-slate-900"
                  >
                    Reduce <span className="text-blue-600">Costes</span> y <br className="hidden md:block" />
                    Aumenta tus <br className="hidden md:block" />
                    <span className="text-blue-600">Márgenes</span> con IA
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    className="text-lg md:text-xl lg:text-[1.35rem] mb-8 text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-[1.5] tracking-tight text-pretty"
                  >
                    Somos una agencia especializada en reducir costes operativos y aumentar márgenes de PYMES en España. <strong className="font-bold text-slate-900 border-b-2 border-blue-500/30">5 transformaciones exitosas</strong> garantizan nuestro impacto real mediante automatización.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4 self-center lg:self-start relative z-30"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href="#contacto"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4"
                      >
                        Solicitar Diagnóstico
                      </Link>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href="#casos-exito"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 shadow-sm px-8 py-4 group"
                      >
                        <span className="flex items-center justify-center relative overflow-hidden">
                          Explorar casos reales
                        </span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={splashFinished ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                  className="flex items-center justify-center p-2 sm:p-4 order-1 lg:order-2 w-full lg:mb-12 perspective-[1000px]"
                >
                  <div className="w-full max-w-lg sm:max-w-xl">
                    <AnimatedChip />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator Section */}
        <section id="calculadora" className="py-16 sm:py-24 bg-white relative">
          <FadeIn>
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <CostCalculator />
            </div>
          </FadeIn>
        </section>


        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="py-20 sm:py-32 relative overflow-hidden bg-white"
          aria-labelledby="newsletter-heading"
        >
          {/* Aesthetic Background removed for pure white theme */}
          <div className="absolute inset-0 bg-white pointer-events-none"></div>

          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                <div className="lg:col-span-7 text-center lg:text-left">
                  <h2
                    id="newsletter-heading"
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-6 leading-[1.1]"
                  >
                    La <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600">ventaja competitiva</span> que llega a tu correo
                  </h2>
                  
                  <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0">
                    Explicamos cada día cómo aplicar la IA en situaciones reales. Recibe ejemplos prácticos y herramientas que puedes empezar a implementar hoy mismo en tu negocio.
                  </p>

                  <ul className="space-y-5 text-slate-700 font-medium hidden sm:block text-lg">
                    <li className="flex items-center justify-center lg:justify-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      Casos de uso reales paso a paso
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      Automatizaciones listas para tu PYME
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      Herramientas que ahorran tiempo real
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                  {/* Aesthetic Background removed for pure white theme */}
                  
                  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent h-2 -top-10 animate-pulse pointer-events-none mix-blend-overlay"></div>
                    
                    <div className="w-20 h-20 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm relative group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-10 h-10 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center tracking-tight">
                      Únete a cientos de PYMES
                    </h3>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative group/btn w-full mt-8"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full blur opacity-30 group-hover/btn:opacity-75 transition duration-500"></div>
                      <Link
                        href="https://newsletter.ia4pymes.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center gap-3 w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-full shadow-[0_10px_20px_-5px_rgba(37,99,235,0.39)] hover:bg-blue-500 transition-all duration-300 text-lg sm:text-xl"
                      >
                        Suscribirse Ahora
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                    
                    <p className="text-slate-500 text-sm mt-6 text-center italic">
                      * Sin spam, solo contenido de alto valor<br className="hidden sm:block" /> técnico y estratégico.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </section>

        {/* Process Section */}
        <section
          id="proceso"
          className="py-16 sm:py-24 bg-white overflow-hidden"
          aria-labelledby="process-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <FadeIn delay={0.1}>
                <header className="text-center mb-16 sm:mb-20">
                  <h2
                    id="process-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-4"
                  >
                    Cómo trabajamos en <span className="text-blue-600">IA4PYMES</span>
                  </h2>
                  <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                    Desarrollo colaborativo donde tú decides cada detalle de tu herramienta
                  </p>
                </header>
              </FadeIn>

              <div
                className="max-w-4xl mx-auto space-y-16 sm:space-y-24 relative"
                itemScope
                itemType="https://schema.org/HowTo"
              >
                <meta itemProp="name" content="Proceso de desarrollo de IA para PYMES" />
                <meta itemProp="description" content="Proceso de 3 pasos para crear herramientas de IA personalizadas" />

                { [
                  {
                    icon: BarChart2,
                    step: "01",
                    title: "Analizamos el Despilfarro",
                    description:
                      "Estudiamos a fondo tu empresa para identificar cada gota de presupuesto que se está perdiendo en tareas manuales y repetitivas que la IA puede resolver hoy mismo.",
                    benefit: "Ahorro Identificado",
                  },
                  {
                    icon: Code,
                    step: "02",
                    title: "Solución con ROI Asegurado",
                    description:
                      "No desarrollamos por desarrollar. Creamos una herramienta a medida diseñada específicamente para devolverte la inversión en tiempo récord.",
                    benefit: "Retorno Garantizado",
                  },
                  {
                    icon: Settings,
                    step: "03",
                    title: "Soporte y Mejora Continua",
                    description:
                      "Implementamos la solución, formamos a tu equipo y te acompañamos para asegurar que la tecnología evolucione al ritmo que tu empresa crece.",
                    benefit: "Acompañamiento 24/7",
                  },
                ].map((process, index, array) => {
                  const IconComponent = process.icon
                  return (
                    <FadeIn key={index} delay={0.2 + index * 0.15}>
                      <article
                      className="group relative"
                      itemProp="step"
                      itemScope
                      itemType="https://schema.org/HowToStep"
                    >
                      <meta itemProp="position" content={`${index + 1}`} />
                      <meta itemProp="name" content={process.title} />
                      <meta itemProp="text" content={process.description} />

                      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                        {/* Step Indicator & Icon */}
                        <div className="flex flex-col items-center md:items-start shrink-0">
                          <span className="text-6xl sm:text-7xl font-black text-blue-600/20 mb-2 leading-none group-hover:text-blue-600/40 transition-colors duration-500">
                            {process.step}
                          </span>
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow pt-2">
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                            {process.title}
                          </h3>
                          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-6">
                            {process.description}
                          </p>
                          
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">
                              {process.benefit}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Divider logic */}
                      {index !== array.length - 1 && (
                        <div className="mt-16 sm:mt-24 border-b border-slate-100 w-full" />
                      )}
                    </article>
                  </FadeIn>
                )
              })}
              </div>

              {/* Added CTA button here as requested */}
              <FadeIn delay={0.6}>
                <div className="mt-12 sm:mt-16 text-center">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4"
                  >
                    <span>Solicitar diagnóstico gratuito</span>
                    <ArrowRight
                      className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>

        {/* Success Cases Section */}
        <section
          id="casos-exito"
          className="py-16 sm:py-24 bg-white relative"
          style={{ zIndex: 1 }}
          aria-labelledby="success-cases-heading"
        >
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <header className="text-center mb-16 sm:mb-20">
                <h2
                  id="success-cases-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-4"
                >
                  Casos de Éxito <span className="text-blue-600">Destacados</span>
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
          </FadeIn>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <section id="contacto" className="py-20 sm:py-32 relative bg-white overflow-hidden">
          {/* Aesthetic Background removed for pure white theme */}
          <div className="absolute inset-0 bg-white pointer-events-none" aria-hidden="true"></div>
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
              <header className="text-center mb-16 sm:mb-20">
                <h2
                  id="contact-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
                >
                  Hablemos de Tu <span className="text-blue-600">Proyecto</span>
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
          </FadeIn>
        </section>

        {/* Latest Articles Section */}
        <LatestArticles />

        {/* Footer */}
        <footer className="bg-white pt-20 pb-12 relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
              
              {/* Column 1: Brand */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <Link href="/" className="inline-flex items-center group">
                  <div className="flex items-center relative tracking-tighter">
                    <span className="text-2xl font-extrabold bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent">IA</span>
                    <span className="text-2xl font-black text-slate-900">4</span>
                    <span className="ml-1 text-2xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
                  </div>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Agencia de automatización con IA para PYMES enfocada en resultados reales y ROI garantizado. Transformamos el despilfarro en rentabilidad.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Made with ❤️ in Spain
                </div>
              </motion.div>

              {/* Column 2: Soluciones */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Soluciones</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="#proceso" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Nuestro Proceso</Link>
                  </li>
                  <li>
                    <Link href="#casos-exito" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Casos de Éxito</Link>
                  </li>
                  <li>
                    <Link href="#calculadora" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Calculadora ROI</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Blog de Noticias</Link>
                  </li>
                </ul>
              </motion.div>

              {/* Column 3: Explorar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Explorar</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="#inicio" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Sobre nosotros</Link>
                  </li>
                  <li>
                    <Link href="#faq" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Preguntas Frecuentes</Link>
                  </li>
                  <li>
                    <Link href="#contacto" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Solicitar Diagnóstico</Link>
                  </li>
                  <li>
                    <Link href="#newsletter" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Newsletter Semanal</Link>
                  </li>
                </ul>
              </motion.div>

              {/* Column 4: Conecta */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-6"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Conecta</h4>
                <div className="space-y-4">
                  <a href="mailto:contacto@ia4pymes.tech" className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium tracking-tight">contacto@ia4pymes.tech</span>
                  </a>
                  <div className="flex items-center gap-4 pt-2">
                    <a href="https://www.linkedin.com/in/alejandro-picallo-galante-543557324/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/ia4pymes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/@IA4PYMES" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="YouTube">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-[13px] font-medium">
                © 2026 IA4PYMES. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6">
                <Link href="#inicio" className="text-slate-400 hover:text-slate-600 text-[13px] font-medium transition-colors">Inicio</Link>
                <Link href="#contacto" className="text-slate-400 hover:text-slate-600 text-[13px] font-medium transition-colors">Contratar</Link>
                <Link href="https://calendly.com/ia4pymes" target="_blank" className="text-blue-600 hover:text-blue-700 text-[13px] font-bold transition-colors">Agendar Llamada</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
