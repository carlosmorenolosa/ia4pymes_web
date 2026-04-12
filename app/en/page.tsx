"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  BarChart2,
  Code,
  Settings,
  CheckCircle,
  ArrowRight,
  Mail,
  Menu,
  X,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react"
import Link from "next/link"

import dynamic from "next/dynamic"

import { ParticlesBackground } from "@/components/particles-background"

// Lazy load heavy components
const SuccessCasesCarousel = dynamic(
  () => import("@/components/success-cases-carousel").then((mod) => mod.SuccessCasesCarousel),
  {
    loading: () => <div className="h-[400px] bg-slate-50/50 rounded-3xl animate-pulse" />,
    ssr: false,
  }
)

const AnimatedChip = dynamic(
  () => import("@/components/three-animated-chip").then((mod) => mod.ThreeAnimatedChip),
  {
    loading: () => <div className="w-full max-w-sm aspect-square bg-slate-100 rounded-3xl animate-pulse mx-auto" />,
    ssr: false,
  }
)

const ContactForm = dynamic(() => import("@/components/contact-form").then((mod) => mod.ContactForm), {
  ssr: false,
})

const LatestArticles = dynamic(() => import("@/components/latest-articles").then((mod) => mod.LatestArticles), {
  loading: () => <div className="h-[400px] bg-slate-50/50 rounded-3xl animate-pulse" />,
  ssr: false,
})

const CostCalculator = dynamic(() => import("@/components/cost-calculator").then((mod) => mod.CostCalculator), {
  ssr: false,
})

const FaqSection = dynamic(() => import("@/components/faq-section").then((mod) => mod.FaqSection), {
  ssr: false,
})

import { SplashScreen } from "@/components/splash-screen"
import { useIsMobile } from "@/hooks/use-mobile"
import { useInView, useSpring, useTransform } from "framer-motion"

function StatCounter({
  value,
  suffixContent = "",
  prefixContent = "",
  duration = 2,
}: {
  value: number
  suffixContent?: string
  prefixContent?: string
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 })
  const displayValue = useTransform(spring, (current) => Math.floor(current).toLocaleString("en-US"))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])

  return (
    <span ref={ref}>
      {prefixContent}
      <motion.span>{displayValue}</motion.span>
      {suffixContent}
    </span>
  )
}

export default function HomeEN() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const [splashFinished, setSplashFinished] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
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

      <main className="bg-transparent">
        {/* Navigation */}
        <header
          className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 w-full ${
            isScrolled ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "py-6 md:py-10 bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between md:justify-center relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={splashFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="relative md:absolute md:left-4 lg:left-6 pointer-events-auto z-10"
            >
              <Link href="#inicio" className="flex items-center group cursor-pointer transition-all hover:opacity-80 active:scale-95">
                <div className="flex items-center relative tracking-[-0.04em]">
                  <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-blue-600">IA</span>
                  <span className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900">4</span>
                </div>
              </Link>
            </motion.div>

            {/* Centered Navigation Pill */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex items-center bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-full p-1.5 sm:p-2 shadow-lg shadow-slate-200/50 hover:bg-white/90 transition-all duration-300 pointer-events-auto z-10"
              aria-label="Main navigation"
            >
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                <Link
                  href="#process"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Process
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#cases"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Cases
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#calculator"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Calculator
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="/en/blog"
                  className="group relative text-slate-700 text-sm md:text-base font-semibold hover:text-blue-600 transition-all duration-300 px-6 py-2 rounded-full hover:bg-slate-100/50 whitespace-nowrap"
                >
                  Blog EN
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <div className="w-px h-6 bg-slate-200 mx-2"></div>
                {/* Language Selector */}
                <div className="flex items-center gap-1 px-2">
                  <Link href="/" className="text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors">ES</Link>
                  <span className="text-slate-300 text-xs">|</span>
                  <span className="text-sm font-bold text-blue-600 cursor-default">EN</span>
                </div>
                <div className="w-px h-6 bg-slate-200 mx-2"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="#contact"
                    className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-sm md:text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.3)] px-6 py-2"
                  >
                    Free Diagnosis
                  </Link>
                </motion.div>
              </div>

              {/* Mobile hamburger */}
              <div className="flex md:hidden items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-center size-10 rounded-full text-slate-800 transition-all active:scale-95"
                  aria-label="Open menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </motion.nav>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-[99999] animate-in fade-in slide-in-from-top-4 duration-300 pt-32 px-6 flex flex-col gap-6 items-center pointer-events-auto overflow-y-auto">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-3 text-slate-800 bg-slate-100/80 rounded-full hover:bg-slate-200 transition-colors active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="w-full flex flex-col gap-4 items-center">
              <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 tracking-tight py-2 hover:text-blue-600 transition-colors">Process</Link>
              <Link href="#cases" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 tracking-tight py-2 hover:text-blue-600 transition-colors">Success Cases</Link>
              <Link href="#calculator" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 tracking-tight py-2 hover:text-blue-600 transition-colors">Calculator</Link>
              <Link href="/en/blog" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 tracking-tight py-2 hover:text-blue-600 transition-colors">Blog EN</Link>
            </div>
            <div className="w-full h-px bg-slate-100 my-4 max-w-xs"></div>
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-400 hover:text-slate-700 transition-colors">ES</Link>
              <span className="text-slate-300">|</span>
              <span className="text-2xl font-bold text-blue-600">EN</span>
            </div>
            <div className="w-full h-px bg-slate-100 my-4 max-w-xs"></div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full text-lg font-bold transition-all text-white bg-blue-600 px-8 py-4 w-full max-w-xs shadow-[0_8px_20px_rgba(37,99,235,0.3)] active:scale-95"
            >
              Free Diagnosis
            </Link>
          </div>
        )}

        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col justify-start" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-transparent pointer-events-none z-0"></div>
          <div className="relative z-10 flex-col flex h-full">
            <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-120px)] flex items-center pt-24 md:pt-32 pb-12 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 relative z-10">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                    id="hero-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] mb-6 text-slate-900 drop-shadow-sm"
                  >
                    Cut <span className="text-blue-600">Costs</span> &{" "}
                    <br className="hidden md:block" />
                    Grow Your <br className="hidden md:block" />
                    <span className="text-blue-600">Margins</span> with AI
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    className="text-lg md:text-xl lg:text-[1.35rem] mb-8 text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-[1.5] tracking-tight text-pretty"
                  >
                    We are an agency specialized in reducing operational costs and increasing margins for SMEs.{" "}
                    <strong className="font-bold text-slate-900 border-b-2 border-blue-600/30">
                      Tangible results and guaranteed ROI
                    </strong>{" "}
                    prove our real impact through automation.
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
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4"
                      >
                        Request Free Diagnosis
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href="#cases"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 shadow-sm px-8 py-4 group"
                      >
                        <span className="flex items-center justify-center relative overflow-hidden">
                          Explore real cases
                        </span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 5, filter: "blur(10px)" }}
                  animate={
                    splashFinished
                      ? { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }
                      : { opacity: 0, scale: 0.9, rotate: 5, filter: "blur(10px)" }
                  }
                  transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                  className="flex items-center justify-center p-2 sm:p-4 order-1 lg:order-2 w-full lg:mb-12 perspective-[1000px]"
                >
                  <div className="w-full max-w-lg sm:max-w-xl">
                    <AnimatedChip visible={splashFinished} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator Section */}
        <section id="calculator" className="py-16 sm:py-24 bg-white relative">
          <FadeIn>
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <CostCalculator lang="en" />
            </div>
          </FadeIn>
        </section>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="py-20 sm:py-32 relative overflow-hidden bg-transparent"
          aria-labelledby="newsletter-heading"
        >
          <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 text-center lg:text-left">
                  <h2
                    id="newsletter-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]"
                  >
                    The <span className="text-blue-600">competitive advantage</span> that arrives in your inbox
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0">
                    We explain every day how to apply AI in real situations. Receive practical examples and tools you can start implementing today in your business.
                  </p>
                  <ul className="space-y-5 text-slate-700 font-medium hidden sm:block text-lg">
                    <li className="flex items-center justify-center lg:justify-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      Real step-by-step use cases
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      Automations ready for your SME
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                      Tools that save real time
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 shadow-xl relative overflow-hidden group">
                    <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm relative group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center tracking-tight">
                      Join hundreds of SMEs
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative group/btn w-full mt-8"
                    >
                      <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-30 group-hover/btn:opacity-75 transition duration-500"></div>
                      <Link
                        href="https://newsletter.ia4pymes.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center gap-3 w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-full shadow-[0_10px_20px_-5px_rgba(37,99,235,0.39)] hover:bg-blue-700 transition-all duration-300 text-lg sm:text-xl"
                      >
                        Subscribe Now
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                    <p className="text-slate-500 text-sm mt-6 text-center italic">
                      * No spam, only high-value technical<br className="hidden sm:block" /> and strategic content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="py-16 sm:py-24 bg-white overflow-hidden"
          aria-labelledby="process-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <FadeIn delay={0.1}>
              <header className="text-center mb-10 sm:mb-14">
                <h2
                  id="process-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
                >
                  The <span className="text-blue-600">IA4PYMES</span> Methodology
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                  A transparent process designed to maximize your return on investment.
                </p>
              </header>
            </FadeIn>

            <div
              className="max-w-4xl mx-auto space-y-10 sm:space-y-14 relative"
              itemScope
              itemType="https://schema.org/HowTo"
            >
              <meta itemProp="name" content="AI development process for SMEs" />
              <meta itemProp="description" content="3-step process to create custom AI tools" />

              {[
                {
                  icon: BarChart2,
                  step: "01",
                  title: "We Analyze the Waste",
                  description:
                    "We deeply study your company to identify every cent of budget being lost in manual and repetitive tasks that AI can solve today.",
                  benefit: "Savings Identified",
                },
                {
                  icon: Code,
                  step: "02",
                  title: "Solution with Guaranteed ROI",
                  description:
                    "We don't develop for the sake of it. We create a custom tool specifically designed to return your investment in record time.",
                  benefit: "Guaranteed Return",
                },
                {
                  icon: Settings,
                  step: "03",
                  title: "Support & Continuous Improvement",
                  description:
                    "We implement the solution, train your team and support you to ensure the technology evolves at the pace your company grows.",
                  benefit: "24/7 Support",
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
                        <div className="flex flex-col items-center md:items-start shrink-0">
                          <span className="text-6xl sm:text-7xl font-black text-blue-600/20 mb-2 leading-none group-hover:text-blue-600/40 transition-colors duration-500">
                            {process.step}
                          </span>
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>

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

                      {index !== array.length - 1 && (
                        <div className="mt-16 sm:mt-24 border-b border-slate-100 w-full" />
                      )}
                    </article>
                  </FadeIn>
                )
              })}
            </div>

            <FadeIn delay={0.6}>
              <div className="mt-12 sm:mt-16 text-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4"
                >
                  <span>Request Free Diagnosis</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Success Cases Section */}
        <section
          id="cases"
          className="py-16 sm:py-24 bg-transparent relative"
          style={{ zIndex: 1 }}
          aria-labelledby="success-cases-heading"
        >
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <header className="text-center mb-16 sm:mb-20">
                <h2
                  id="success-cases-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
                >
                  Outstanding <span className="text-blue-600">Success Cases</span>
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                  Guaranteed real impact.
                </p>
              </header>

              {/* Stats */}
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-24 max-w-5xl mx-auto px-4"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                {[
                  { value: 360, prefix: "+", suffix: "%", label: "Average ROI", color: "text-blue-600", bg: "hover:shadow-blue-500/10" },
                  { value: 1000, prefix: "+", suffix: "h", label: "Hours saved per month", color: "text-green-600", bg: "hover:shadow-green-500/10" },
                  { value: 100, prefix: "", suffix: "%", label: "Success rate", color: "text-orange-600", bg: "hover:shadow-orange-500/10" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`relative group bg-white border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] text-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 ${stat.bg}`}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <div className={`text-5xl sm:text-6xl font-black tracking-tighter mb-3 ${stat.color} drop-shadow-sm`} itemProp="name">
                      <StatCounter value={stat.value} prefixContent={stat.prefix} suffixContent={stat.suffix} />
                    </div>
                    <div className="text-slate-500 text-sm sm:text-base font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
                    <meta itemProp="position" content={(idx + 1).toString()} />
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                ))}
              </div>
              <SuccessCasesCarousel lang="en" />

              <div className="mt-12 sm:mt-16 text-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  aria-label="Request free diagnosis"
                >
                  <span>Request Free Diagnosis</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ Section */}
        <FaqSection lang="en" />

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-32 relative bg-transparent overflow-hidden">
          <div className="absolute inset-0 bg-transparent pointer-events-none" aria-hidden="true"></div>
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
              <header className="text-center mb-16 sm:mb-20">
                <h2
                  id="contact-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
                >
                  Let&apos;s Talk About Your <span className="text-blue-600">Project</span>
                </h2>
                <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed px-4">
                  Start your digital transformation today by giving us more details about what you need. Our team will analyze your case to offer you the best Artificial Intelligence solution.
                </p>
              </header>

              <ContactForm lang="en" />

              <div className="text-center mt-8 sm:mt-12">
                <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-slate-600 list-none">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                    <span className="font-medium text-sm sm:text-base">100% Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                    <span className="font-medium text-sm sm:text-base">No Commitment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                    <span className="font-medium text-sm sm:text-base">Immediate Response</span>
                  </li>
                </ul>
                <Link
                  href="#inicio"
                  className="mt-6 sm:mt-8 text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg hover:underline transition-colors duration-300 flex items-center gap-2 mx-auto"
                  aria-label="Back to top"
                >
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 rotate-180" aria-hidden="true" />
                  Back to Top
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Latest Articles — blog content is in Spanish */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <p className="text-center text-sm text-slate-400 italic mb-2">
              📰 Our blog articles are currently published in Spanish.
            </p>
          </div>
        </section>
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
                className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <Link href="/en" className="inline-flex items-center group">
                  <div className="flex items-center relative tracking-tighter">
                    <span className="text-2xl font-extrabold text-blue-600">IA</span>
                    <span className="text-2xl font-black text-slate-900">4</span>
                    <span className="ml-1 text-2xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
                  </div>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  AI automation agency for SMEs focused on real results and guaranteed ROI. We turn operational waste into profitability.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Built with ❤️ in Spain
                </div>
              </motion.div>

              {/* Column 2: Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Solutions</h4>
                <ul className="space-y-4">
                  <li><Link href="#process" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Our Process</Link></li>
                  <li><Link href="#cases" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Success Cases</Link></li>
                  <li><Link href="#calculator" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">ROI Calculator</Link></li>
                  <li><Link href="/blog" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">News Blog</Link></li>
                </ul>
              </motion.div>

              {/* Column 3: Explore */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Explore</h4>
                <ul className="space-y-4">
                  <li><Link href="#inicio" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">About Us</Link></li>
                  <li><Link href="#faq" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">FAQ</Link></li>
                  <li><Link href="#contact" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Request Diagnosis</Link></li>
                  <li><Link href="#newsletter" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Weekly Newsletter</Link></li>
                </ul>
              </motion.div>

              {/* Column 4: Connect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Connect</h4>
                <div className="space-y-4">
                  <a href="mailto:contacto@ia4pymes.tech" className="flex items-center justify-center md:justify-start gap-3 text-slate-500 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium tracking-tight">contacto@ia4pymes.tech</span>
                  </a>
                  <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                    <a href="https://www.linkedin.com/in/alejandro-picallo-galante-543557324/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61560704600913" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
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
                © 2026 IA4PYMES. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/en" className="text-slate-400 hover:text-slate-600 text-[13px] font-medium transition-colors">Home</Link>
                <Link href="#contact" className="text-slate-400 hover:text-slate-600 text-[13px] font-medium transition-colors">Hire Us</Link>
                <Link href="https://calendly.com/ia4pymes" target="_blank" className="text-blue-600 hover:text-blue-700 text-[13px] font-bold transition-colors">Schedule a Call</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
