import Link from "next/link"
import { Shield, Lock, Eye, FileText, CheckCircle, Cpu, Mail, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import { HomeHeader } from "@/components/home-header"

export const metadata = {
  title: "Política de Privacidad | IA4PYMES",
  description: "Política de privacidad, protección de datos personales y cumplimiento del EU AI Act de IA4PYMES.",
}

export default function PoliticaPrivacidad() {
  return (
    <>
      <HomeHeader splashFinished={true} />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              Protección de Datos & Gobernanza
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Política de <span className="text-blue-600">Privacidad</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              En IA4PYMES garantizamos la confidencialidad, el cumplimiento estricto del RGPD y la máxima transparencia según el Reglamento de Inteligencia Artificial de la Unión Europea (EU AI Act).
            </p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Última actualización: Agosto de 2026
            </p>
          </div>
        </section>

        {/* Content Section (Open Layout, Same Style as Landing) */}
        <section className="py-12 sm:py-16 bg-slate-50/50 border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-16">

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Lock className="w-5 h-5" />
                </span>
                1. Identidad del Responsable del Tratamiento
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl pl-13">
                El responsable del tratamiento de sus datos de carácter personal obtenidos a través de esta plataforma es <strong className="text-slate-900 font-bold">IA4PYMES</strong>. Puede ponerse en contacto con nuestro Delegado de Protección de Datos en el correo:{" "}
                <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">
                  contacto@ia4pymes.tech
                </a>.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Eye className="w-5 h-5" />
                </span>
                2. Finalidad del Tratamiento de Datos
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl pl-13">
                Tratamos la información facilitada por las personas interesadas con las siguientes finalidades:
              </p>
              <ul className="space-y-3 pl-13 max-w-4xl">
                {[
                  "Gestionar la atención a solicitudes recibidas mediante el formulario de contacto y reserva de consultorías.",
                  "Ejecutar y prestar los servicios de automatización e integración de IA contratados.",
                  "Remitir novedades tecnológicas y boletines informativos siempre que se haya otorgado consentimiento previo."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-base font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                3. Legitimación del Tratamiento
              </h2>
              <ul className="space-y-3 pl-13 max-w-4xl">
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Consentimiento del interesado:</strong> Para atender consultas enviadas en los formularios y la interacción con asistentes.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Relación contractual:</strong> Para la ejecución del contrato de desarrollo de software e integración de sistemas.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                4. Conservación de los Datos
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl pl-13">
                Los datos personales se conservarán durante el tiempo strictly necesario para cumplir con la finalidad para la que se recaban y para determinar las posibles responsabilidades derivadas de dicha finalidad.
              </p>
            </div>

            {/* Section 5 Callout */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Lock className="w-5 h-5" />
                </span>
                5. Confidencialidad y Seguridad
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl pl-13 mb-4">
                En cumplimiento del RGPD, IA4PYMES aplica las medidas técnicas necesarias para evitar la alteración, pérdida o acceso no autorizado a los datos personales.
              </p>
              <div className="ml-13 p-6 rounded-2xl bg-blue-50/80 border-l-4 border-blue-600 text-slate-800 space-y-1 shadow-sm max-w-4xl">
                <div className="font-black text-slate-900 flex items-center gap-2 text-base">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  Compromiso de Soberanía e Inteligencia Artificial
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Los datos y código confidencial integrados en los flujos de IA de nuestros clientes jamás se utilizan para el entrenamiento de modelos de lenguaje públicos de terceros.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                6. Derechos de los Usuarios
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl pl-13">
                Usted puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a{" "}
                <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:underline font-bold">
                  contacto@ia4pymes.tech
                </a>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Cpu className="w-5 h-5" />
                </span>
                7. Transparencia y Cumplimiento del EU AI Act (Art. 50)
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl pl-13">
                En cumplimiento de las obligaciones de transparencia del <strong className="text-slate-900">Artículo 50 del Reglamento (UE) 2024/1689 (Ley de IA de la UE)</strong>, informamos a los usuarios de que los widgets conversacionales interactivos de esta web (como el asistente <strong className="text-slate-900">PymerIA</strong>) son sistemas alimentados por Inteligencia Artificial.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl pl-13">
                Dichos asistentes tienen como único fin ofrecer orientación informativa previa sobre nuestros servicios y ayudar en el agendamiento de consultorías. No ejecutan decisiones automatizadas con efectos jurídicos ni realizan perfilados de alto riesgo.
              </p>
            </div>

          </div>
        </section>

        {/* Complete Landing Page Footer */}
        <footer className="bg-white border-t border-slate-200/60 pt-20 pb-12 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
              
              {/* Column 1: Brand */}
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

              {/* Column 2: Soluciones */}
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

              {/* Column 3: Explorar */}
              <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Explorar</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Sobre nosotros</Link>
                  </li>
                  <li>
                    <Link href="/#faq" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Preguntas Frecuentes</Link>
                  </li>
                  <li>
                    <Link href="/#consultoria" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Reservar Consultoría</Link>
                  </li>
                  <li>
                    <Link href="/#newsletter" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Newsletter Semanal</Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Conecta */}
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
                    <a href="https://www.linkedin.com/in/alejandro-picallo-galante-543557324/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61560704600913" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/ia4pymes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.tiktok.com/@ia4pymes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="TikTok">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a9.14 9.14 0 0 0 5.25 1.63V7.23a5.27 5.27 0 0 1-1.34-.54z" />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@IA4PYMES" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="YouTube">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/Ia4Pymes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm" aria-label="X (Twitter)">
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
                © 2026 IA4PYMES. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/" className="text-slate-600 hover:text-blue-600 text-[13px] font-semibold transition-colors">Inicio</Link>
                <Link href="/politica-privacidad" className="text-slate-600 hover:text-blue-600 text-[13px] font-semibold transition-colors">Privacidad</Link>
                <Link href="/#consultoria" className="text-blue-600 hover:text-blue-700 text-[13px] font-bold transition-colors">Reservar Consultoría</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

