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
import { BlogChatWidgetLoader } from "@/components/blog-chat-widget-loader"
import { ScrollTopLink } from "@/components/scroll-top-link"

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

const ThreeAnimatedChip = dynamic(
  () => import("@/components/three-animated-chip").then((mod) => mod.ThreeAnimatedChip),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex items-center justify-center p-2 sm:p-4">
        <div className="w-[280px] h-[400px] xs:w-[320px] xs:h-[450px] sm:w-[380px] sm:h-[540px] bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(37,99,235,0.12)] border border-slate-200/80 animate-pulse" />
      </div>
    ),
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

const ReviewsSection = dynamic(() => import("@/components/reviews-section").then((mod) => mod.ReviewsSection), {
  ssr: false,
})

import { ConsultingSection } from "@/components/consulting-section"
import { FadeIn } from "@/components/fade-in"
import { Counter } from "@/components/counter"

export default function HomeEN() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToConsulting = (e?: React.MouseEvent) => {
    const target = document.getElementById("consultoria") || document.getElementById("consulting")
    if (target) {
      if (e) e.preventDefault()
      target.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", "/en#consultoria")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const homeFaqsEN = [
    {
      question: "Is this solution useful for my industry?",
      answer: "The key is not what you do, but what slow or inefficient processes you have. If there are repetitive tasks in your business, we can optimize them.",
    },
    {
      question: "Do I have to change the software I already use?",
      answer: "Not at all. We adapt the AI to your current way of working, integrating it into your existing systems without operational disruptions or painful migrations.",
    },
    {
      question: "Do my employees need to understand Artificial Intelligence?",
      answer: "Zero. Since these are custom projects, we take care of explaining everything step by step, clearly and in person, so they can handle it without any issues.",
    },
    {
      question: "What if the investment doesn't pay off?",
      answer: "Before creating anything, we map out a roadmap to calculate the expected return on investment. If we see the numbers don't benefit you, we simply don't proceed.",
    },
    {
      question: "Is my company's data safe?",
      answer: "Absolutely. We comply with GDPR, sign a confidentiality agreement, and your information is never used to train public AI models.",
    },
    {
      question: "What are the delivery timelines?",
      answer: "The initial diagnosis takes about 2 to 3 weeks. After that, development and deployment of the systems takes between 1 and 4 months.",
    },
  ]

  const organizationSchemaEN = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IA4PYMES",
    "url": "https://ia4pymes.tech/en",
    "logo": "https://ia4pymes.tech/LOGO.png",
    "description": "AI & Process Automation Consultancy and Engineering for Small and Medium-Sized Enterprises in Europe.",
    "email": "contacto@ia4pymes.tech",
    "sameAs": [
      "https://es.linkedin.com/company/ia4pymestech",
      "https://www.instagram.com/ia4pymes/",
      "https://www.youtube.com/@IA4PYMES",
      "https://x.com/Ia4Pymes",
      "https://www.tiktok.com/@ia4pymes",
      "https://www.facebook.com/profile.php?id=61560704600913"
    ]
  }

  const professionalServiceSchemaEN = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "IA4PYMES - AI Consulting & Custom Agent Development",
    "url": "https://ia4pymes.tech/en",
    "image": "https://ia4pymes.tech/og-image.png",
    "priceRange": "€€",
    "telephone": "+34-600-000-000",
    "email": "contacto@ia4pymes.tech",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "areaServed": [
      { "@type": "Country", "name": "Spain" },
      { "@type": "AdministrativeArea", "name": "European Union" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Apartamento Club — Creative Agency"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We needed a high-performance agency website without inflated agency fees or delays. Communication with IA4PYMES was direct, fast, and delivered on time."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Vandalverse"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "They built a blazing-fast e-commerce platform and automated order management at a fraction of traditional agency quotes. Outstanding post-launch support."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI and Business Process Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Process Automation (BPA + AI)",
            "description": "Intelligent invoice extraction, accounting reconciliation, and quote generation connected to ERP/CRM."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Conversational RAG Agents",
            "description": "WhatsApp, web, and email chatbots connected to private company knowledge bases with zero hallucinations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Calling & Call Centers",
            "description": "Natural language call handling (<300ms latency) and automated appointment scheduling."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private & On-Premise LLM Infrastructure",
            "description": "Deployment of open-weights models locally for strict GDPR compliance and zero token costs."
          }
        }
      ]
    }
  }

  const faqSchemaEN = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqsEN.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  const breadcrumbSchemaEN = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ia4pymes.tech/en"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaEN) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaEN) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaEN) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaEN) }}
      />
      <main className="bg-transparent">
        {/* Navigation */}
        <header
          className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 w-full ${
            isScrolled ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "py-6 md:py-10 bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between md:justify-center relative">
            {/* Logo */}
            <div className="relative md:absolute md:left-4 lg:left-6 pointer-events-auto z-10">
              <Link
                href="/en"
                onClick={(e) => {
                  if (window.location.pathname === "/en") {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                }}
                className="flex items-center group cursor-pointer transition-all hover:opacity-80 active:scale-95"
                aria-label="Go to IA4PYMES home"
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
                <div>
                  <Link
                    href="/en#consultoria"
                    onClick={scrollToConsulting}
                    className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-sm md:text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.3)] px-6 py-2 cursor-pointer"
                  >
                    Book Consultation
                  </Link>
                </div>
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
            </nav>
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
              href="/en#consultoria"
              onClick={(e) => {
                setMobileMenuOpen(false)
                scrollToConsulting(e)
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full text-lg font-bold transition-all text-white bg-blue-600 px-8 py-4 w-full max-w-xs shadow-[0_8px_20px_rgba(37,99,235,0.3)] active:scale-95 cursor-pointer"
            >
              Book Consultation
            </Link>
          </div>
        )}

        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col justify-start" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-transparent pointer-events-none z-0"></div>
          <div className="relative z-10 flex-col flex h-full">
            <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-120px)] flex items-center pt-24 md:pt-32 pb-12 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-1 relative z-10">
                  <h1
                    id="hero-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-slate-900 drop-shadow-sm text-balance"
                  >
                    <span className="underline decoration-red-500 decoration-4 underline-offset-[2px]">Cut</span> Operational Costs & <span className="underline decoration-blue-600 decoration-4 underline-offset-[2px] text-blue-600">Scale</span> Your Margins with <span className="text-blue-600">AI for SMEs</span>
                  </h1>

                  <p
                    className="text-lg md:text-xl lg:text-[1.35rem] mb-8 text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-[1.5] tracking-tight text-pretty"
                  >
                    <strong className="font-bold text-slate-900">IA4PYMES</strong> is an agency specialized in AI automation, private AI agents, and system integration for SMEs in Spain.{" "}
                    <strong className="font-bold text-slate-900 border-b-2 border-blue-600/30">
                      +360% average ROI and 1,000+ hours saved monthly
                    </strong>.
                  </p>

                  <div
                    className="flex flex-col sm:flex-row gap-4 self-center lg:self-start relative z-30"
                  >
                    <Link
                      href="/en#consultoria"
                      onClick={scrollToConsulting}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4 active:scale-95 cursor-pointer"
                    >
                      Design AI Roadmap
                    </Link>

                    <Link
                      href="/en#cases"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 shadow-sm px-8 py-4 group active:scale-95"
                    >
                      <span className="flex items-center justify-center relative overflow-hidden">
                        Explore real cases
                      </span>
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center p-2 sm:p-4 order-2 lg:order-2 w-full lg:mb-12 perspective-[1000px]"
                >
                  <div className="w-full max-w-lg sm:max-w-xl">
                    {typeof window !== "undefined" && (window as any).__IS_BOT ? (
                      <div className="w-full max-w-sm aspect-[380/540] bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/80 rounded-[40px] shadow-sm mx-auto flex items-center justify-center text-slate-400 font-semibold">
                        IA4PYMES Chatbot
                      </div>
                    ) : (
                      <ThreeAnimatedChip visible={true} lang="en" />
                    )}
                  </div>
                </div>
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

        {/* Consulting Section */}
        <ConsultingSection lang="en" />


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
                    AI Newsletter: <span className="text-blue-600">Actionable Case Studies for Your Business</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0">
                    We explain how to apply Artificial Intelligence and process automation in real-world operations every week. Get architectures, prompts, and tools ready to implement today.
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
                    <div className="relative group/btn w-full mt-8 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300">
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
                    </div>
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
                  3-Step Methodology: <span className="text-blue-600">Audit, Integration & Deployment</span>
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                  A transparent engineering process designed to maximize your return on investment and protect corporate data privacy.
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
                  title: "Technical Audit & Inefficiency Diagnosis",
                  description:
                    "We deeply analyze your company's operational workflows to pinpoint bottlenecks and quantify wasted hours on manual tasks that AI can automate.",
                  benefit: "Quantified Time Savings",
                },
                {
                  icon: Code,
                  step: "02",
                  title: "Agent Architecture & ERP/CRM Integration",
                  description:
                    "We design and build private AI agents connecting directly to your management systems (ERP, CRM, databases), ensuring positive ROI in record time.",
                  benefit: "Guaranteed Custom Integration",
                },
                {
                  icon: Settings,
                  step: "03",
                  title: "Private Deployment & Continuous Scaling",
                  description:
                    "We deploy the solution under the strictest data privacy standards, monitoring performance in real time and regularly optimizing the models.",
                  benefit: "Total Privacy & Control",
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
                          <span aria-hidden="true" className="text-6xl sm:text-7xl font-black text-blue-600 mb-2 leading-none group-hover:text-blue-700 transition-colors duration-500">
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
                  href="/en#consultoria"
                  onClick={scrollToConsulting}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4 cursor-pointer"
                >
                  <span>Book Consultation</span>
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
                  Case Studies: <span className="text-blue-600">Real-World AI & Automation for SMEs</span>
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                  Audited results across clinics, logistics, law firms, and construction: error reduction and ROIs exceeding +200%.
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
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <div 
                      className={`relative group bg-white border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] text-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ${stat.bg}`}
                      itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
                    >
                      <div className={`text-5xl sm:text-6xl font-black tracking-tighter mb-3 ${stat.color} drop-shadow-sm`} itemProp="name">
                        <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                      </div>
                      <div className="text-slate-500 text-sm sm:text-base font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
                      <meta itemProp="position" content={(idx + 1).toString()} />
                      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </FadeIn>
                ))}
              </div>
              <SuccessCasesCarousel lang="en" />

              <div className="mt-12 sm:mt-16 text-center">
                <Link
                  href="/en#consultoria"
                  onClick={scrollToConsulting}
                  className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                  aria-label="Book Consultation"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Reviews Section */}
        <ReviewsSection lang="en" />

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
                  Request Your Free Diagnosis: <span className="text-blue-600">Let&apos;s Discuss Your Project</span>
                </h2>
                <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed px-4">
                  Start your operational transformation today by sharing details about your processes. Our engineering team will evaluate your case to design the optimal Artificial Intelligence architecture.
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
                  href="/en"
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

        {/* Latest Articles EN */}
        <LatestArticles lang="en" />

        {/* Footer */}
        <footer className="bg-white pt-20 pb-12 relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

              {/* Column 1: Brand */}
              <div
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
              </div>

              {/* Column 2: Solutions */}
              <div
                className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Solutions</h4>
                <ul className="space-y-4">
                  <li><Link href="/en#process" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Our Process</Link></li>
                  <li><Link href="/en#cases" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Success Cases</Link></li>
                  <li><Link href="/en#calculator" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">ROI Calculator</Link></li>
                  <li><Link href="/en/blog" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">News Blog</Link></li>
                </ul>
              </div>

              {/* Column 3: Explore */}
              <div
                className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Explore</h4>
                <ul className="space-y-4">
                  <li><ScrollTopLink href="/en" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">About Us</ScrollTopLink></li>
                  <li><Link href="/en#faq" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">FAQ</Link></li>
                  <li><Link href="/en#consultoria" onClick={scrollToConsulting} className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer">Book Consultation</Link></li>
                  <li><Link href="/en#newsletter" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Weekly Newsletter</Link></li>
                </ul>
              </div>

              {/* Column 4: Connect */}
              <div
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
                    <a href="https://es.linkedin.com/company/ia4pymestech?trk=public_post_feed-actor-image" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61560704600913" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/ia4pymes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.tiktok.com/@ia4pymes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="TikTok">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a9.14 9.14 0 0 0 5.25 1.63V7.23a5.27 5.27 0 0 1-1.34-.54z" />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@IA4PYMES" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="YouTube">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/Ia4Pymes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 text-[13px] font-semibold">
                © 2026 IA4PYMES. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="#contact" className="text-slate-600 hover:text-blue-600 text-[13px] font-semibold transition-colors">Contact</Link>
                <Link href="/en#consultoria" onClick={scrollToConsulting} className="text-blue-600 hover:text-blue-700 text-[13px] font-bold transition-colors cursor-pointer">Book Consultation</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <BlogChatWidgetLoader lang="en" />
    </>
  )
}
