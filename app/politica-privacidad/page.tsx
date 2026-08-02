import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Cpu } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad | IA4PYMES",
  description: "Política de privacidad, protección de datos personales y cumplimiento del EU AI Act de IA4PYMES.",
}

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-600/15 via-blue-900/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Header Navigation Bar */}
      <header className="w-full py-6 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 group" aria-label="Ir al inicio de IA4PYMES">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-500 group-hover:text-blue-400 transition-colors">IA</span>
            <span className="text-2xl sm:text-3xl font-black text-white">4</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-full border border-slate-800 transition-all duration-300 shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16">
        
        {/* Page Hero Title */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            Protección de Datos & Gobernanza
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Privacidad</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Garantías de confidencialidad, cumplimiento del RGPD y transparencia conforme al Reglamento de IA de la UE.
          </p>
          <p className="text-xs text-slate-500 font-medium">Última actualización: Agosto de 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-800 p-6 sm:p-10 md:p-12 shadow-2xl space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2>1. Identidad del Responsable del Tratamiento</h2>
            </div>
            <p>
              El responsable del tratamiento de sus datos de carácter personal obtenidos a través de esta plataforma es <strong className="text-white">IA4PYMES</strong>. Puede ponerse en contacto con nuestro Delegado de Protección de Datos a través de la siguiente dirección de correo electrónico:{" "}
              <a href="mailto:contacto@ia4pymes.tech" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 transition-colors">
                contacto@ia4pymes.tech
              </a>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <h2>2. Finalidad del Tratamiento de Datos</h2>
            </div>
            <p>
              En IA4PYMES tratamos la información facilitada con las siguientes finalidades operativas:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                "Gestionar el envío de información solicitada a través del formulario de contacto y agendamientos de consultoría.",
                "Prestar los servicios de integración de Inteligencia Artificial contratados por su organización.",
                "Remitir boletines informativos y comunicaciones comerciales sobre nuestros servicios previa autorización explícita."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2>3. Legitimación del Tratamiento</h2>
            </div>
            <p>
              La base legal para el tratamiento de sus datos depende de la finalidad correspondiente:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <span><strong className="text-white">Consentimiento del interesado:</strong> Para atender consultas enviadas en los formularios y la interacción con asistentes.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <span><strong className="text-white">Relación contractual:</strong> Para la ejecución del contrato de desarrollo de software e integración de sistemas.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h2>4. Conservación de los Datos</h2>
            </div>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que se recaban y determinar posibles responsabilidades derivadas de dicha relación.
            </p>
          </section>

          {/* Section 5 Highlight Box */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2>5. Confidencialidad y Seguridad</h2>
            </div>
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD), IA4PYMES adopta las medidas de seguridad técnicas y organizativas necesarias para proteger los datos personales.
            </p>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-500/30 text-blue-200 text-sm space-y-1 shadow-inner">
              <div className="font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                Compromiso de Soberanía e Inteligencia Artificial
              </div>
              <p>
                Los datos y código confidencial integrados en los flujos de IA de nuestros clientes jamás se utilizan para el entrenamiento de modelos de lenguaje públicos de terceros.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2>6. Derechos de los Usuarios</h2>
            </div>
            <p>
              Usted tiene derecho a ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a{" "}
              <a href="mailto:contacto@ia4pymes.tech" className="text-blue-400 hover:underline">
                contacto@ia4pymes.tech
              </a>.
            </p>
          </section>

          {/* Section 7 - EU AI Act Box */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h2>7. Transparencia y Cumplimiento del EU AI Act (Reglamento UE 2024/1689 - Art. 50)</h2>
            </div>
            <p>
              En cumplimiento de las obligaciones de transparencia estipuladas en el <strong className="text-white">Artículo 50 del Reglamento (UE) 2024/1689 (Ley de Inteligencia Artificial de la UE)</strong>, informamos a los usuarios de que los widgets conversacionales de esta web (como el asistente <strong className="text-white">PymerIA</strong>) son sistemas interactivos alimentados por Inteligencia Artificial.
            </p>
            <p>
              Dichos asistentes tienen como único fin ofrecer orientación informativa previa sobre nuestros servicios y ayudar en el agendamiento de consultorías. No ejecutan decisiones automatizadas con efectos jurídicos ni realizan perfilados de alto riesgo.
            </p>
          </section>

        </div>

        {/* Page Footer */}
        <div className="mt-12 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 IA4PYMES. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 text-slate-400 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>•</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>•</span>
            <Link href="/#consultoria" className="hover:text-white transition-colors">Consultoría</Link>
          </div>
        </div>

      </main>
    </div>
  )
}

