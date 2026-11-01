import { Shield, Lock, Eye, FileText, CheckCircle, Cpu } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | IA4PYMES",
  description: "Política de privacidad, protección de datos personales y cumplimiento del EU AI Act de IA4PYMES.",
  alternates: {
    canonical: "https://ia4pymes.tech/politica-privacidad",
    languages: {
      "es": "https://ia4pymes.tech/politica-privacidad",
      "en": "https://ia4pymes.tech/en/privacy-policy",
      "x-default": "https://ia4pymes.tech/politica-privacidad",
    },
  },
}

export default function PoliticaPrivacidad() {
  return (
    <>
      <HomeHeader splashFinished={true} />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Política de <span className="text-blue-600">Privacidad</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              En IA4PYMES garantizamos la confidencialidad, el cumplimiento estricto del RGPD y la máxima transparencia según el Reglamento de Inteligencia Artificial de la Unión Europea (EU AI Act).
            </p>
            <p className="text-xs font-bold text-slate-600 max-w-[70ch]">
              Última actualización: Noviembre de 2026
            </p>
          </div>
        </section>

        {/* Content Section (Open Layout, Same Style as Landing) */}
        <section className="py-12 sm:py-16 bg-slate-50/50 border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-16">

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Lock className="w-5 h-5" />
                </span>
                1. Identidad del Responsable del Tratamiento
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El responsable del tratamiento de sus datos de carácter personal obtenidos a través de esta plataforma es <strong className="text-slate-900 font-bold">IA4PYMES</strong>. Puede ponerse en contacto con nuestro Delegado de Protección de Datos en el correo:{" "}
                <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">
                  contacto@ia4pymes.tech
                </a>.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Eye className="w-5 h-5" />
                </span>
                2. Finalidad del Tratamiento de Datos
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Tratamos la información facilitada por las personas interesadas con las siguientes finalidades:
              </p>
              <ul className="space-y-3 pl-13 max-w-[70ch]">
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
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                3. Legitimación del Tratamiento
              </h2>
              <ul className="space-y-3 pl-13 max-w-[70ch]">
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
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                4. Conservación de los Datos
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Los datos personales se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que se recaban y para determinar las posibles responsabilidades derivadas de dicha finalidad.
              </p>
            </div>

            {/* Section 5 Callout */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Lock className="w-5 h-5" />
                </span>
                5. Confidencialidad y Seguridad
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13 mb-4">
                En cumplimiento del RGPD, IA4PYMES aplica las medidas técnicas necesarias para evitar la alteración, pérdida o acceso no autorizado a los datos personales.
              </p>
              <div className="ml-13 p-6 rounded-2xl bg-blue-50/80 text-slate-800 space-y-1  max-w-[70ch]">
                <div className="font-black text-slate-900 flex items-center gap-2 text-base">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  Compromiso de Soberanía e Inteligencia Artificial
                </div>
                <p className="text-slate-600 text-base leading-relaxed max-w-[70ch]">
                  Los datos y código confidencial integrados en los flujos de IA de nuestros clientes jamás se utilizan para el entrenamiento de modelos de lenguaje públicos de terceros.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                6. Derechos de los Usuarios
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Usted puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a{" "}
                <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:underline font-bold">
                  contacto@ia4pymes.tech
                </a>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Cpu className="w-5 h-5" />
                </span>
                7. Transparencia y Cumplimiento del EU AI Act (Art. 50)
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                En cumplimiento de las obligaciones de transparencia del <strong className="text-slate-900">Artículo 50 del Reglamento (UE) 2024/1689 (Ley de IA de la UE)</strong>, informamos a los usuarios de que los widgets conversacionales interactivos de esta web (como el asistente <strong className="text-slate-900">PymerIA</strong>) son sistemas alimentados por Inteligencia Artificial.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Dichos asistentes tienen como único fin ofrecer orientación informativa previa sobre nuestros servicios y ayudar en el agendamiento de consultorías. No ejecutan decisiones automatizadas con efectos jurídicos ni realizan perfilados de alto riesgo.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                8. Política de Cookies y Publicidad
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Este sitio web utiliza cookies propias y de terceros exclusivamente analíticas y técnicas con la finalidad de optimizar la navegación, medir el rendimiento del portal y, en su caso, gestionar la medición de campañas publicitarias. Puede configurar o rechazar en cualquier momento el uso de cookies no esenciales desde los ajustes de su navegador sin afectar a la navegación principal por la plataforma.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="es" />
      </main>
    </>
  )
}

