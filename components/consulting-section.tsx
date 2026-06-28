"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ShieldCheck, HelpCircle, Check, Sparkles } from "lucide-react"

const i18n = {
  es: {
    heading: "Diseña tu ",
    headingHighlight: "Roadmap Técnico",
    headingSuffix: " con IA",
    subtitle: "Reserva una sesión estratégica de 60 minutos. Analizamos la viabilidad técnica de tu proyecto y trazamos un plano arquitectónico de desarrollo con las tecnologías idóneas.",
    includedHeading: "¿Qué definimos en la sesión?",
    included1Title: "1. Arquitectura y Viabilidad",
    included1Desc: "Analizamos la viabilidad del proyecto y diseñamos la arquitectura técnica ideal (servidores, LLMs, integraciones de datos) para tus necesidades.",
    included2Title: "2. Componentes y Tecnologías",
    included2Desc: "Especificamos qué componentes técnicos, APIs y modelos de IA (locales o en la nube) son los más rentables y eficientes para desplegar.",
    included3Title: "3. Estimación y Roadmap",
    included3Desc: "Te entregamos un plan de desarrollo detallado con fases y costes. Tú decides si lo implementas por tu cuenta o si lo desarrollamos nosotros.",
    guarantee1Title: "Garantía de Reembolso en Proyecto",
    guarantee1Desc: (
      <span>
        Si decides contratar el desarrollo e implementación del proyecto de IA con nosotros, <strong className="font-bold text-slate-900">te descontamos el 100% de la consultoría (361,79€)</strong> del presupuesto final. La sesión te saldrá completamente gratis.
      </span>
    ),
    guarantee2Title: "Garantía de Viabilidad de 15 Minutos",
    guarantee2Desc: "Si en los primeros 15 minutos de la videollamada vemos que tu negocio no se puede beneficiar directamente de la IA, cancelamos la sesión y te reembolsamos el 100% del importe de inmediato. Sin explicaciones.",
    priceTitle: "Precio de la Sesión",
    price: "299 €",
    plusVat: "+ IVA",
    totalVat: "(Total: 361,79 € IVA incluido)",
    titleIframe: "Reserva tu Consultoría con IA4PYMES",
    calUrl: "https://cal.eu/ia4pymes.tech/consultoria-diagnostica-y-roadmap-de-ia?embed=true&locale=es",
    secureText: "Pasarela de pago y reserva segura",
  },
  en: {
    heading: "Design Your ",
    headingHighlight: "Technical Roadmap",
    headingSuffix: " with AI",
    subtitle: "Book a 60-minute strategic session. We analyze your project's technical feasibility and map out a development architecture with the ideal technologies.",
    includedHeading: "What do we define in the session?",
    included1Title: "1. Architecture & Feasibility",
    included1Desc: "We analyze project feasibility and design the ideal technical architecture (servers, LLMs, data integrations) for your needs.",
    included2Title: "2. Components & Stack",
    included2Desc: "We specify which technical components, APIs, and AI models (local or cloud-based) are the most cost-effective and efficient to deploy.",
    included3Title: "3. Estimation & Roadmap",
    included3Desc: "We deliver a detailed development plan with phases and costs. You decide whether to build it yourself or have us build it.",
    guarantee1Title: "Project Refund Guarantee",
    guarantee1Desc: (
      <span>
        If you decide to hire the development and implementation of the AI project with us, <strong className="font-bold text-slate-900">we deduct 100% of the consultancy cost (361.79€)</strong> from the final budget. The session is completely free.
      </span>
    ),
    guarantee2Title: "15-Minute Viability Guarantee",
    guarantee2Desc: "If in the first 15 minutes of the video call we see that your business cannot benefit from AI, we cancel the session and refund 100% of the cost immediately. No questions asked.",
    priceTitle: "Session Price",
    price: "299 €",
    plusVat: "+ VAT",
    totalVat: "(Total: 361.79 € VAT included)",
    titleIframe: "Book your Consultation with IA4PYMES",
    calUrl: "https://cal.eu/ia4pymes.tech/consultoria-diagnostica-y-roadmap-de-ia?embed=true&locale=en",
    secureText: "Secure checkout and booking",
  }
}

export function ConsultingSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = i18n[lang]

  useEffect(() => {
    let originalScrollY = window.scrollY;
    let isIframeFocused = false;
    let isUserScrolling = false;
    let userScrollTimeout: any = null;

    const handleUserInput = () => {
      isUserScrolling = true;
      if (userScrollTimeout) clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 150);
    };

    const handleScroll = () => {
      if (isIframeFocused && !isUserScrolling) {
        if (window.scrollY !== originalScrollY) {
          window.scrollTo(0, originalScrollY);
        }
      } else {
        originalScrollY = window.scrollY;
      }
    };

    const handleFocusChange = () => {
      setTimeout(() => {
        const activeEl = document.activeElement;
        isIframeFocused = !!(activeEl && activeEl.tagName === "IFRAME" && activeEl.getAttribute("title") === t.titleIframe);
        if (isIframeFocused) {
          originalScrollY = window.scrollY;
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleUserInput, { passive: true });
    window.addEventListener("touchmove", handleUserInput, { passive: true });
    window.addEventListener("keydown", handleUserInput, { passive: true });
    window.addEventListener("blur", handleFocusChange);
    window.addEventListener("focus", handleFocusChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleUserInput);
      window.removeEventListener("touchmove", handleUserInput);
      window.removeEventListener("keydown", handleUserInput);
      window.removeEventListener("blur", handleFocusChange);
      window.removeEventListener("focus", handleFocusChange);
      if (userScrollTimeout) clearTimeout(userScrollTimeout);
    };
  }, [t.titleIframe]);

  return (
    <section id="consultoria" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background grid (subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Text and Copywriting Column (Left) */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                {t.heading}<span className="text-blue-600">{t.headingHighlight}</span>{t.headingSuffix}
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                {t.subtitle}
              </p>
            </motion.div>

            {/* What's included checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6 sm:p-8 space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                {t.includedHeading}
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <strong className="text-slate-900 block">{t.included1Title}</strong>
                    <span className="text-slate-600 text-sm">{t.included1Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <strong className="text-slate-900 block">{t.included2Title}</strong>
                    <span className="text-slate-600 text-sm">{t.included2Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <strong className="text-slate-900 block">{t.included3Title}</strong>
                    <span className="text-slate-600 text-sm">{t.included3Desc}</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Strategic Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex gap-4 items-start bg-blue-50/50 border border-blue-100/60 rounded-2xl p-5">
                <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t.guarantee1Title}</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    {t.guarantee1Desc}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-slate-50 border border-slate-200/60 rounded-2xl p-5">
                <HelpCircle className="w-8 h-8 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t.guarantee2Title}</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    {t.guarantee2Desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Price Tag Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex lg:hidden items-center gap-6 pt-2"
            >
              <div>
                <span className="text-sm font-semibold text-slate-500 block uppercase tracking-wider">{t.priceTitle}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">{t.price}</span>
                  <span className="text-lg font-bold text-slate-500">{t.plusVat}</span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">{t.totalVat}</span>
              </div>
            </motion.div>
          </div>

          {/* Cal.com Embed / Booking Widget Column (Right) */}
          <div className="lg:col-span-6 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full bg-slate-50 rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl relative"
            >
              {/* Top bar styling to make it look like a web app */}
              <div className="h-12 bg-slate-100 border-b border-slate-200 flex items-center px-6 gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400 block"></span>
                <span className="text-xs font-semibold text-slate-400 ml-4 select-none">{t.secureText}</span>
              </div>
              
              {/* Iframe embedding the booking calendar */}
              <div className="w-full bg-white" style={{ height: "720px" }}>
                <iframe
                  src={t.calUrl}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  className="w-full h-full"
                  title={t.titleIframe}
                />
              </div>
            </motion.div>

            {/* Price Tag Details (Desktop Only, Centered) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex flex-col items-center text-center mt-12"
            >
              <div>
                <span className="text-sm font-semibold text-slate-500 block uppercase tracking-wider">{t.priceTitle}</span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">{t.price}</span>
                  <span className="text-lg font-bold text-slate-500">{t.plusVat}</span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">{t.totalVat}</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

