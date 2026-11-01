import Link from "next/link"
import { FileText, UserCheck, Scale, Shield, Briefcase, Link2, Gavel } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | IA4PYMES",
  description: "Términos y condiciones de uso del sitio web y de contratación de servicios de IA4PYMES: consultorías, desarrollo de software e integración de IA.",
  alternates: {
    canonical: "https://ia4pymes.tech/terminos",
    languages: {
      "es": "https://ia4pymes.tech/terminos",
      "en": "https://ia4pymes.tech/en/terms",
      "x-default": "https://ia4pymes.tech/terminos",
    },
  },
}

export default function Terminos() {
  return (
    <>
      <HomeHeader splashFinished={true} />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Términos y <span className="text-blue-600">Condiciones</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              Las presentes condiciones regulan el uso de este sitio web, así como los términos generales aplicables a los servicios profesionales de consultoría, desarrollo de software e integración de Inteligencia Artificial prestados por IA4PYMES.
            </p>
            <p className="text-xs font-bold text-slate-600 max-w-[70ch]">
              Última actualización: Noviembre de 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16 bg-slate-50/50 border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-16">

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                1. Objeto y aceptación
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El acceso a este sitio web y la utilización de sus contenidos atribuyen la condición de usuario e implican la aceptación plena y sin reservas de los presentes Términos y Condiciones, del <Link href="/aviso-legal" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Aviso Legal</Link> y de la <Link href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Política de Privacidad</Link> vigentes en cada momento.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <UserCheck className="w-5 h-5" />
                </span>
                2. Identificación del prestador de servicios
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Los servicios profesionales ofrecidos a través de este sitio web son prestados por <strong className="text-slate-900 font-bold">Carlos Moreno Losa</strong> (NIF 46081080M), con domicilio profesional en Calle Médico Antonio Porpeta Clérigo, 8, Elda (Alicante), España, bajo la marca comercial <strong className="text-slate-900 font-bold">IA4PYMES</strong>. Correo electrónico de contacto:{" "}
                <a href="mailto:carlos@ia4pymes.tech" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">
                  carlos@ia4pymes.tech
                </a>.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Briefcase className="w-5 h-5" />
                </span>
                3. Servicios profesionales y contratación
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                La información, presupuestos y demostraciones ofrecidos a través del sitio web, del asistente conversacional o de las consultorías iniciales tienen carácter meramente informativo y no constituyen oferta vinculante ni contrato de prestación de servicios.
              </p>
              <ul className="space-y-3 pl-13 max-w-[70ch]">
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span>La contratación de servicios se formaliza mediante propuesta comercial y contrato o aceptación escrita (incluido el correo electrónico) en la que se concreten alcance, plazos, precio y condiciones específicas.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span>Los precios indicados en presupuestos se expresan en euros y, salvo indicación expresa en contrario, no incluyen impuestos indirectos (IVA o equivalente).</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span>Las condiciones particulares del contrato acordado con cada cliente prevalecen siempre sobre estas condiciones generales.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                4. Propiedad intelectual de las soluciones
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Salvo pacto en contrario en el contrato de prestación de servicios, el cliente adquiere los derechos de uso sobre las entregables desarrollados a su medida una vez satisfecho el precio íntegro, conservando el prestador los derechos sobre las herramientas, metodologías, código reutilizable y conocimientos previos empleados para su elaboración. Todos los contenidos de este sitio web están protegidos conforme al <Link href="/aviso-legal" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Aviso Legal</Link>.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Scale className="w-5 h-5" />
                </span>
                5. Uso del sitio web y del asistente conversacional
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El usuario se compromete a utilizar el sitio web, sus formularios y el asistente conversacional (PymerIA) de forma lícita y diligente, abstiniéndose de introducir datos de terceros sin su autorización, de enviar contenido ilícito o malicioso y de intentar vulnerar la seguridad o disponibilidad de la plataforma.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Las respuestas del asistente conversacional son generadas mediante Inteligencia Artificial, tienen carácter orientativo y no constituyen asesoramiento profesional vinculante ni una propuesta comercial firme.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Scale className="w-5 h-5" />
                </span>
                6. Limitación de responsabilidad
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El prestador no será responsable de los daños derivados de la indisponibilidad del sitio web, de la interpretación o uso que los usuarios hagan de la información publicada, ni de las decisiones empresariales adoptadas sobre la base de contenidos informativos, calculadoras, estimaciones de ROI o demostraciones de la web.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Link2 className="w-5 h-5" />
                </span>
                7. Enlaces externos
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Este sitio web puede contener enlaces a sitios de terceros (incluidas redes sociales y plataformas de reserva). El prestador no controla ni asume responsabilidad por sus contenidos o políticas; el acceso a ellos se realiza bajo responsabilidad exclusiva del usuario.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Gavel className="w-5 h-5" />
                </span>
                8. Modificación y legislación aplicable
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El prestador podrá modificar en cualquier momento los presentes Términos y Condiciones, publicando la versión vigente en esta página. La relación entre el prestador y los usuarios se regirá por la legislación española, y para cualquier controversia las partes se someterán a los juzgados y tribunales de Elda (Alicante), salvo que la normativa de consumo disponga otra cosa.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="es" />
      </main>
    </>
  )
}
