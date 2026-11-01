import Link from "next/link"
import { FileText, UserCheck, Scale, Shield, Briefcase, Link2, Gavel } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | IA4PYMES",
  description: "Terms and conditions for the use of the IA4PYMES website and the contracting of its services: consulting, software development, and AI integration.",
  alternates: {
    canonical: "https://ia4pymes.tech/en/terms",
    languages: {
      "es": "https://ia4pymes.tech/terminos",
      "en": "https://ia4pymes.tech/en/terms",
      "x-default": "https://ia4pymes.tech/terminos",
    },
  },
}

export default function TermsEN() {
  return (
    <>
      <HomeHeader splashFinished={true} lang="en" />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Terms and <span className="text-blue-600">Conditions</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              These terms govern the use of this website, as well as the general terms applicable to the professional consulting, software development, and Artificial Intelligence integration services provided by IA4PYMES.
            </p>
            <p className="text-xs font-bold text-slate-600 max-w-[70ch]">
              Last updated: November 2026
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
                1. Purpose and acceptance
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Access to this website and use of its contents confer the status of user and imply full and unreserved acceptance of these Terms and Conditions, the <Link href="/en/legal-notice" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Legal Notice</Link>, and the <Link href="/en/privacy-policy" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Privacy Policy</Link> in force at any given time.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <UserCheck className="w-5 h-5" />
                </span>
                2. Service provider identification
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The professional services offered through this website are provided by <strong className="text-slate-900 font-bold">Carlos Moreno Losa</strong> (Tax ID / NIF 46081080M), with professional address at Calle Médico Antonio Porpeta Clérigo, 8, Elda (Alicante), Spain, under the trade name <strong className="text-slate-900 font-bold">IA4PYMES</strong>. Contact email:{" "}
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
                3. Professional services and contracting
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The information, quotations, and demonstrations offered through the website, the conversational assistant, or the initial consultations are purely informational and do not constitute a binding offer or a service provision contract.
              </p>
              <ul className="space-y-3 pl-13 max-w-[70ch]">
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span>The contracting of services is formalized through a commercial proposal and a written contract or acceptance (including email) specifying scope, timelines, price, and specific conditions.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span>Prices indicated in quotations are expressed in euros and, unless expressly stated otherwise, do not include indirect taxes (VAT or equivalent).</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                  <span>The particular conditions agreed in the contract with each client always prevail over these general conditions.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                4. Intellectual property of the solutions
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Unless otherwise agreed in the service provision contract, the client acquires rights of use over the deliverables developed for them once the full price has been paid, while the provider retains the rights over the tools, methodologies, reusable code, and prior knowledge used in their development. All contents of this website are protected in accordance with the <Link href="/en/legal-notice" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Legal Notice</Link>.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Scale className="w-5 h-5" />
                </span>
                5. Use of the website and the conversational assistant
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The user undertakes to use the website, its forms, and the conversational assistant (PymerIA) lawfully and diligently, refraining from entering third parties' data without their authorization, sending unlawful or malicious content, or attempting to breach the security or availability of the platform.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The conversational assistant's responses are generated using Artificial Intelligence, are indicative in nature, and do not constitute binding professional advice or a firm commercial proposal.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Scale className="w-5 h-5" />
                </span>
                6. Limitation of liability
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The provider shall not be liable for damages arising from the unavailability of the website, from users' interpretation or use of the published information, or from business decisions made on the basis of informational contents, calculators, ROI estimates, or website demonstrations.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Link2 className="w-5 h-5" />
                </span>
                7. External links
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                This website may contain links to third-party sites (including social networks and booking platforms). The provider does not control or assume responsibility for their contents or policies; access to them is carried out under the user's sole responsibility.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Gavel className="w-5 h-5" />
                </span>
                8. Amendments and applicable law
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The provider may amend these Terms and Conditions at any time, publishing the current version on this page. The relationship between the provider and users shall be governed by Spanish law, and for any dispute the parties submit to the courts of Elda (Alicante), Spain, unless consumer protection law provides otherwise.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="en" />
      </main>
    </>
  )
}
