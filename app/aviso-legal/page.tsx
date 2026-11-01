import Link from "next/link"
import { Building2, Scale, FileText, Shield, Mail, Gavel, AlertTriangle } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal | IA4PYMES",
  description: "Aviso legal de IA4PYMES: identificación del titular, condiciones de uso, propiedad intelectual y marco legal conforme a la LSSI.",
  alternates: {
    canonical: "https://ia4pymes.tech/aviso-legal",
    languages: {
      "es": "https://ia4pymes.tech/aviso-legal",
      "en": "https://ia4pymes.tech/en/legal-notice",
      "x-default": "https://ia4pymes.tech/aviso-legal",
    },
  },
}

export default function AvisoLegal() {
  return (
    <>
      <HomeHeader splashFinished={true} />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Aviso <span className="text-blue-600">Legal</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se pone a disposición de los usuarios la siguiente información general de este sitio web.
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
                  <Building2 className="w-5 h-5" />
                </span>
                1. Datos identificativos del titular
              </h2>
              <div className="pl-13 space-y-2 max-w-[70ch] text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">Titular:</strong> Carlos Moreno Losa
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">NIF:</strong> 46081080M
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Domicilio:</strong> Calle Médico Antonio Porpeta Clérigo, 8, Elda (Alicante), España
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Correo electrónico de contacto:</strong>{" "}
                  <a href="mailto:carlos@ia4pymes.tech" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">
                    carlos@ia4pymes.tech
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Nombre comercial:</strong> IA4PYMES
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Sitio web:</strong> https://ia4pymes.tech
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                2. Objeto
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Este sitio web tiene por objeto dar a conocer los servicios de desarrollo de software, consultoría tecnológica e integración de soluciones de Inteligencia Artificial para pymes prestados por el titular, así como facilitar el contacto y la solicitud de información y consultorías.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Scale className="w-5 h-5" />
                </span>
                3. Condiciones de uso
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El acceso y la navegación por este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal, así como de la <Link href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Política de Privacidad</Link> y de la <Link href="/politica-cookies" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Política de Cookies</Link>.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través del sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                4. Propiedad intelectual e industrial
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Todos los contenidos del sitio web (incluyendo, a título enunciativo, textos, gráficos, logotipos, imágenes, diseño y código fuente) son titularidad del titular o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, de dichos contenidos sin la autorización previa, expresa y por escrito del titular.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <AlertTriangle className="w-5 h-5" />
                </span>
                5. Responsabilidad
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por errores u omisiones en los contenidos, por la indisponibilidad del sitio web o por la transmisión de virus o programas maliciosos, pese a haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Los contenidos informativos publicados en este sitio web (incluidos los artículos del blog) tienen carácter meramente divulgativo y no constituyen asesoramiento profesional vinculante.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Gavel className="w-5 h-5" />
                </span>
                6. Enlaces a terceros
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Este sitio web puede contener enlaces a sitios web de terceros. El titular no asume ninguna responsabilidad por los contenidos, políticas de privacidad o prácticas de dichos sitios externos, y el acceso a los mismos se realiza bajo la exclusiva responsabilidad del usuario.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </span>
                7. Protección de datos
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                El tratamiento de los datos personales de los usuarios se realiza conforme a lo establecido en la <Link href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Política de Privacidad</Link> de este sitio web, en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD).
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Gavel className="w-5 h-5" />
                </span>
                8. Legislación aplicable y jurisdicción
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Este Aviso Legal se rige íntegramente por la legislación española. Para la resolución de cualquier conflicto derivado del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales de Elda (Alicante), renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="es" />
      </main>
    </>
  )
}
