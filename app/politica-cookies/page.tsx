import Link from "next/link"
import { Cookie, BarChart3, CalendarClock, Settings, ShieldCheck, RefreshCw } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | IA4PYMES",
  description: "Política de cookies de IA4PYMES: cookies analíticas, de terceros y herramientas utilizadas, conforme a la LSSI y la normativa RGPD.",
  alternates: {
    canonical: "https://ia4pymes.tech/politica-cookies",
    languages: {
      "es": "https://ia4pymes.tech/politica-cookies",
      "en": "https://ia4pymes.tech/en/cookie-policy",
      "x-default": "https://ia4pymes.tech/politica-cookies",
    },
  },
}

export default function PoliticaCookies() {
  return (
    <>
      <HomeHeader splashFinished={true} />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Política de <span className="text-blue-600">Cookies</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              Este sitio web utiliza cookies y tecnologías similares conforme a la Ley 34/2002 (LSSI) y al Reglamento (UE) 2016/679 (RGPD). A continuación le informamos con detalle sobre qué cookies utilizamos, con qué finalidad y cómo puede gestionarlas.
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
                  <Cookie className="w-5 h-5" />
                </span>
                1. ¿Qué son las cookies?
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario al visitar un sitio web y que permiten almacenar y recuperar información sobre la navegación realizada. También utilizamos tecnologías similares de almacenamiento local (como <strong className="text-slate-900 font-bold">localStorage</strong>) para recordar sus preferencias, por ejemplo, su decisión sobre el uso de cookies.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Settings className="w-5 h-5" />
                </span>
                2. Cookies técnicas (propias, exentas de consentimiento)
              </h2>
              <div className="pl-13 max-w-[70ch]">
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        <th className="px-4 py-3 font-bold">Nombre / almacenamiento</th>
                        <th className="px-4 py-3 font-bold">Finalidad</th>
                        <th className="px-4 py-3 font-bold">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="px-4 py-3 font-mono text-xs">cookie-consent (localStorage)</td>
                        <td className="px-4 py-3">Almacenar su decisión sobre el uso de cookies no esenciales (aceptadas o rechazadas) para no volver a mostrar el banner.</td>
                        <td className="px-4 py-3">Persistente, hasta que usted la borre</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <BarChart3 className="w-5 h-5" />
                </span>
                3. Cookies analíticas de terceros (requieren consentimiento)
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Utilizamos Google Analytics para medir de forma agregada el uso del sitio web. Estas cookies solo se instalan si usted acepta su uso mediante el banner de cookies.
              </p>
              <div className="pl-13 max-w-[70ch]">
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        <th className="px-4 py-3 font-bold">Proveedor</th>
                        <th className="px-4 py-3 font-bold">Cookie</th>
                        <th className="px-4 py-3 font-bold">Finalidad</th>
                        <th className="px-4 py-3 font-bold">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="px-4 py-3">Google (Google Ireland Ltd.)</td>
                        <td className="px-4 py-3 font-mono text-xs">_ga</td>
                        <td className="px-4 py-3">Distinguir a los usuarios de forma agregada para estadísticas de uso.</td>
                        <td className="px-4 py-3">2 años</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Google (Google Ireland Ltd.)</td>
                        <td className="px-4 py-3 font-mono text-xs">_ga_&lt;container-id&gt;</td>
                        <td className="px-4 py-3">Mantener el estado de la sesión y medir interacciones.</td>
                        <td className="px-4 py-3">2 años</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  Puede consultar cómo trata Google los datos en su política de privacidad: https://policies.google.com/privacy
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <CalendarClock className="w-5 h-5" />
                </span>
                4. Widget de reserva de consultorías (Cal.com)
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                La sección de reserva de consultorías incorpora un widget de terceros (Cal.com) que se carga únicamente cuando el usuario accede a dicha sección. Este servicio puede establecer sus propias cookies necesarias para el funcionamiento del calendario y del proceso de reserva, conforme a su política:
              </p>
              <ul className="space-y-2 pl-13 max-w-[70ch] text-base text-slate-600 list-disc list-inside">
                <li>
                  <a href="https://cal.com/policies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Política de cookies de Cal.com</a>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Settings className="w-5 h-5" />
                </span>
                5. Cómo gestionar o desactivar las cookies
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Al acceder por primera vez a este sitio web, se muestra un banner que le permite aceptar o rechazar las cookies no esenciales. Si rechaza, no se cargarán las cookies analíticas de terceros. Puede cambiar su decisión en cualquier momento borrando el almacenamiento local del sitio desde su navegador, y configurar u obtener más información sobre las cookies desde las opciones del mismo:
              </p>
              <ul className="space-y-2 pl-13 max-w-[70ch] text-base text-slate-600 list-disc list-inside">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Microsoft Edge</a></li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                6. Base jurídica y cesión de datos
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                La instalación de cookies no esenciales se realiza sobre la base del consentimiento del usuario (art. 6.1.a RGPD y art. 22.2 LSSI). Los proveedores de terceros mencionados actúan como encargados del tratamiento o responsables independientes según el servicio, pudiendo realizar transferencias internacionales de datos amparadas en las cláusulas contractuales tipo de la Comisión Europea o en el Marco de Privacidad de Datos UE-EE. UU. Puede obtener más información en nuestra <Link href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Política de Privacidad</Link>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <RefreshCw className="w-5 h-5" />
                </span>
                7. Actualización de esta política
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Esta Política de Cookies puede actualizarse en función de cambios normativos o de las cookies utilizadas en el sitio. Le recomendamos revisarla cada vez que acceda al sitio web.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="es" />
      </main>
    </>
  )
}
