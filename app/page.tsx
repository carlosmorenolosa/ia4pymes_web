import {
  BarChart2,
  Code,
  Settings,
  CheckCircle,
  ArrowRight,
  Mail,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
// framer-motion removed from Server Component
import { HomeHeader } from "@/components/home-header"
import { HeroES } from "@/components/hero-es"
import { BlogChatWidgetLoader } from "@/components/blog-chat-widget-loader"
import { FadeIn } from "@/components/fade-in"
import { Counter } from "@/components/counter"
import { ScrollTopLink } from "@/components/scroll-top-link"
import {
  SuccessCasesCarousel,
  ContactForm,
  CostCalculator,
  ConsultingSection,
} from "@/components/home-dynamic-imports"

// SSR habilitado — contenido indexable por Google
const LatestArticles = dynamic(() =>
  import("@/components/latest-articles").then((mod) => mod.LatestArticles),
  { loading: () => <div className="h-[400px] bg-slate-50/50 rounded-3xl animate-pulse" /> }
)

const FaqSection = dynamic(() =>
  import("@/components/faq-section").then((mod) => mod.FaqSection)
)

export default function Home() {
  return (
    <>
      <HomeHeader splashFinished={true} />
      <HeroES splashFinished={true} />
      <main className="bg-transparent">


        {/* Cost Calculator Section */}
        <section id="calculadora" className="py-16 sm:py-24 bg-white relative">
          <FadeIn>
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <CostCalculator />
            </div>
          </FadeIn>
        </section>

        {/* Consulting Section */}
        <ConsultingSection />



        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="py-20 sm:py-32 relative overflow-hidden bg-transparent"
          aria-labelledby="newsletter-heading"
        >
          {/* Aesthetic Background removed for pure white theme */}
          <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                <div className="lg:col-span-7 text-center lg:text-left">
                  <h2
                    id="newsletter-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]"
                  >
                    La <span className="text-blue-600">ventaja competitiva</span> que llega a tu correo
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
                  
                  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-12 shadow-xl relative overflow-hidden group">
                    <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm relative group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-10 h-10 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center tracking-tight">
                      Únete a cientos de PYMES
                    </h3>
                    
                    <div className="relative group/btn w-full mt-8 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300">
                      <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-30 group-hover/btn:opacity-75 transition duration-500"></div>
                      <Link
                        href="https://newsletter.ia4pymes.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center gap-3 w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-full shadow-[0_10px_20px_-5px_rgba(37,99,235,0.39)] hover:bg-blue-700 transition-all duration-300 text-lg sm:text-xl"
                      >
                        Suscribirse Ahora
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
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
                <header className="text-center mb-10 sm:mb-14">
                  <h2
                    id="process-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
                  >
                    La Metodología <span className="text-blue-600">IA4PYMES</span>
                  </h2>
                  <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                    Un proceso transparente diseñado para maximizar tu retorno de inversión.
                  </p>
                </header>
              </FadeIn>

              <div
                className="max-w-4xl mx-auto space-y-10 sm:space-y-14 relative"
                itemScope
                itemType="https://schema.org/HowTo"
              >
                <meta itemProp="name" content="Proceso de desarrollo de IA para PYMES" />
                <meta itemProp="description" content="Proceso de 3 pasos para crear herramientas de IA personalizadas" />

                { [
                  {
                    icon: BarChart2,
                    step: "01",
                    title: "Auditoría Técnica y Diagnóstico de Fugas",
                    description:
                      "Estudiamos a fondo los flujos operativos de tu empresa para identificar cuellos de botella y cuantificar las horas desperdiciadas en tareas manuales que la IA puede automatizar.",
                    benefit: "Fugas de Tiempo Cuantificadas",
                  },
                  {
                    icon: Code,
                    step: "02",
                    title: "Arquitectura de Agentes e Integración ERP/CRM",
                    description:
                      "Diseñamos y desarrollamos agentes de IA privados conectando directamente con tus sistemas de gestión (ERP, CRM, bases de datos), garantizando un ROI positivo en tiempo récord.",
                    benefit: "Integración a Medida Garantizada",
                  },
                  {
                    icon: Settings,
                    step: "03",
                    title: "Despliegue Privado y Escalado Continuo",
                    description:
                      "Implementamos la solución bajo los más estrictos estándares de privacidad de datos, monitorizando el rendimiento en tiempo real y optimizando los modelos periódicamente.",
                    benefit: "Privacidad y Control Total",
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
                          <span aria-hidden="true" className="text-6xl sm:text-7xl font-black text-blue-600 mb-2 leading-none group-hover:text-blue-700 transition-colors duration-500">
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
                    href="/#consultoria"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-full text-base font-bold transition-all text-white border border-blue-600 bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 px-8 py-4"
                  >
                    <span>Reservar Consultoría</span>
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
                  Casos de Éxito <span className="text-blue-600">Destacados</span>
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 px-4">
                  Impacto real garantizado.
                </p>
              </header>

              {/* Stats Section - Premium Redesigned Cards */}
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-24 max-w-5xl mx-auto px-4"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                {[
                  { value: 360, prefix: "+", suffix: "%", label: "Media del ROI", color: "text-blue-600", bg: "hover:shadow-blue-500/10" },
                  { value: 1000, prefix: "+", suffix: "h", label: "Horas ahorradas al mes", color: "text-green-600", bg: "hover:shadow-green-500/10" },
                  { value: 100, prefix: "", suffix: "%", label: "Tasa de éxito", color: "text-orange-600", bg: "hover:shadow-orange-500/10" }
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
                    
                    {/* Subtle Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </FadeIn>
                ))}
              </div>
              <SuccessCasesCarousel />

              {/* CTA Button for Success Cases */}
              <div className="mt-12 sm:mt-16 text-center">
                <Link
                  href="/#consultoria"
                  className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  aria-label="Reservar Consultoría"
                >
                  <span>Reservar Consultoría</span>
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
        <section id="contacto" className="py-20 sm:py-32 relative bg-transparent overflow-hidden">
          {/* Aesthetic Background removed for pure white theme */}
          <div className="absolute inset-0 bg-transparent pointer-events-none" aria-hidden="true"></div>
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
              <FadeIn delay={0.2}>
                <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                  <Link href="/" className="inline-flex items-center group">
                  <div className="flex items-center relative tracking-tighter">
                    <span className="text-2xl font-extrabold text-blue-600">IA</span>
                    <span className="text-2xl font-black text-slate-900">4</span>
                    <span className="ml-1 text-2xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
                  </div>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Agencia de automatización con IA para PYMES enfocada en resultados reales y ROI garantizado. Transformamos el despilfarro en rentabilidad.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Built with ❤️ in Spain
                </div>
                </div>
              </FadeIn>

              {/* Column 2: Soluciones */}
              <FadeIn delay={0.3}>
                <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Soluciones</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/#proceso" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Nuestro Proceso</Link>
                  </li>
                  <li>
                    <Link href="/#casos-exito" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Casos de Éxito</Link>
                  </li>
                  <li>
                    <Link href="/#calculadora" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Calculadora ROI</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Blog de Noticias</Link>
                  </li>
                </ul>
                </div>
              </FadeIn>

              {/* Column 3: Explorar */}
              <FadeIn delay={0.4}>
                <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Explorar</h4>
                <ul className="space-y-4">
                  <li>
                    <ScrollTopLink href="/" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Sobre nosotros</ScrollTopLink>
                  </li>
                  <li>
                    <Link href="#faq" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Preguntas Frecuentes</Link>
                  </li>
                  <li>
                    <Link href="/#consultoria" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Reservar Consultoría</Link>
                  </li>
                  <li>
                    <Link href="#newsletter" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Newsletter Semanal</Link>
                  </li>
                </ul>
                </div>
              </FadeIn>

              {/* Column 4: Conecta */}
              <FadeIn delay={0.5}>
                <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Conecta</h4>
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
              </FadeIn>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 text-[13px] font-semibold">
                © 2026 IA4PYMES. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/" className="text-slate-600 hover:text-blue-600 text-[13px] font-semibold transition-colors">Inicio</Link>
                <Link href="#contacto" className="text-slate-600 hover:text-blue-600 text-[13px] font-semibold transition-colors">Contacto</Link>
                <Link href="/#consultoria" className="text-blue-600 hover:text-blue-700 text-[13px] font-bold transition-colors">Reservar Consultoría</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <BlogChatWidgetLoader lang="es" />
    </>
  )
}
