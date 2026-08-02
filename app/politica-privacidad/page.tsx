import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Cpu, Mail, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad | IA4PYMES",
  description: "Política de privacidad, protección de datos personales y cumplimiento del EU AI Act de IA4PYMES.",
}

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* Top Header Navigation Bar */}
      <header className="w-full py-4 sm:py-6 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center group cursor-pointer transition-all hover:opacity-80 active:scale-95" aria-label="Ir al inicio de IA4PYMES">
            <div className="flex items-center relative tracking-[-0.04em]">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600">IA</span>
              <span className="text-3xl sm:text-4xl font-black text-slate-900">4</span>
              <span className="ml-1 text-2xl sm:text-3xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 px-4 py-2.5 rounded-full border border-slate-200/60 transition-all duration-300 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 flex-1">
        
        {/* Page Hero Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            Protección de Datos & Gobernanza
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1]">
            Política de <span className="text-blue-600">Privacidad</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Garantías de confidencialidad, cumplimiento estricto del RGPD y transparencia conforme al Reglamento de IA de la UE.
          </p>
          <div className="pt-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
            Última actualización: Agosto de 2026
          </div>
        </div>

        {/* Content Card (White Theme Landing Style) */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 md:p-12 shadow-xl shadow-slate-200/50 space-y-10 text-slate-600 text-base leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2>1. Identidad del Responsable del Tratamiento</h2>
            </div>
            <p>
              El responsable del tratamiento de sus datos de carácter personal obtenidos a través de esta plataforma es <strong className="text-slate-900">IA4PYMES</strong>. Puede ponerse en contacto con nuestro Delegado de Protección de Datos a través de la siguiente dirección de correo electrónico:{" "}
              <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">
                contacto@ia4pymes.tech
              </a>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <h2>2. Finalidad del Tratamiento de Datos</h2>
            </div>
            <p>
              En IA4PYMES tratamos la información facilitada con las siguientes finalidades operativas:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "Gestionar el envío de información solicitada a través del formulario de contacto y agendamientos de consultoría.",
                "Prestar los servicios de integración de Inteligencia Artificial contratados por su organización.",
                "Remitir boletines informativos y comunicaciones comerciales sobre nuestros servicios previa autorización explícita."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2>3. Legitimación del Tratamiento</h2>
            </div>
            <p>
              La base legal para el tratamiento de sus datos depende de la finalidad correspondiente:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Consentimiento del interesado:</strong> Para atender consultas enviadas en los formularios y la interacción con asistentes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Relación contractual:</strong> Para la ejecución del contrato de desarrollo de software e integración de sistemas.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h2>4. Conservación de los Datos</h2>
            </div>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que se recaban y determinar posibles responsabilidades derivadas de dicha relación.
            </p>
          </section>

          {/* Section 5 Highlight Box (Landing Blue Callout) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2>5. Confidencialidad y Seguridad</h2>
            </div>
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD), IA4PYMES adopta las medidas de seguridad técnicas y organizativas necesarias para proteger los datos personales.
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/80 border-l-4 border-blue-600 text-slate-800 text-base space-y-1 shadow-sm">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                Compromiso de Soberanía e Inteligencia Artificial
              </div>
              <p className="text-slate-600 text-sm">
                Los datos y código confidencial integrados en los flujos de IA de nuestros clientes jamás se utilizan para el entrenamiento de modelos de lenguaje públicos de terceros.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2>6. Derechos de los Usuarios</h2>
            </div>
            <p>
              Usted tiene derecho a ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a{" "}
              <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:underline font-bold">
                contacto@ia4pymes.tech
              </a>.
            </p>
          </section>

          {/* Section 7 - EU AI Act Box */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h2>7. Transparencia y Cumplimiento del EU AI Act (Reglamento UE 2024/1689 - Art. 50)</h2>
            </div>
            <p>
              En cumplimiento de las obligaciones de transparencia estipuladas en el <strong className="text-slate-900">Artículo 50 del Reglamento (UE) 2024/1689 (Ley de Inteligencia Artificial de la UE)</strong>, informamos a los usuarios de que los widgets conversacionales de esta web (como el asistente <strong className="text-slate-900">PymerIA</strong>) son sistemas interactivos alimentados por Inteligencia Artificial.
            </p>
            <p>
              Dichos asistentes tienen como único fin ofrecer orientación informativa previa sobre nuestros servicios y ayudar en el agendamiento de consultorías. No ejecutan decisiones automatizadas con efectos jurídicos ni realizan perfilados de alto riesgo.
            </p>
          </section>

        </div>

      </main>

      {/* Landing Footer */}
      <footer className="bg-white border-t border-slate-200/60 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center group cursor-pointer" aria-label="IA4PYMES">
              <div className="flex items-center relative tracking-[-0.04em]">
                <span className="text-2xl font-extrabold text-blue-600">IA</span>
                <span className="text-2xl font-black text-slate-900">4</span>
                <span className="ml-1 text-xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
              </div>
            </Link>

            <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/#consultoria" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">Reservar Consultoría</Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>© 2026 IA4PYMES. Todos los derechos reservados.</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full font-bold text-slate-600 uppercase tracking-widest text-[10px]">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Built with ❤️ in Spain
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

