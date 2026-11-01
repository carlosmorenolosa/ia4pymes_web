import Link from "next/link"
import { Building2, Scale, FileText, Shield, Mail, Gavel, AlertTriangle } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Notice | IA4PYMES",
  description: "Legal notice of IA4PYMES: owner identification, terms of use, intellectual property, and legal framework in compliance with the Spanish LSSI.",
  alternates: {
    canonical: "https://ia4pymes.tech/en/legal-notice",
    languages: {
      "es": "https://ia4pymes.tech/aviso-legal",
      "en": "https://ia4pymes.tech/en/legal-notice",
      "x-default": "https://ia4pymes.tech/aviso-legal",
    },
  },
}

export default function LegalNoticeEN() {
  return (
    <>
      <HomeHeader splashFinished={true} lang="en" />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Legal <span className="text-blue-600">Notice</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              In compliance with Article 10 of Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI), the following general information about this website is made available to users.
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
                  <Building2 className="w-5 h-5" />
                </span>
                1. Owner identification
              </h2>
              <div className="pl-13 space-y-2 max-w-[70ch] text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">Owner:</strong> Carlos Moreno Losa
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Tax ID (NIF):</strong> 46081080M
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Address:</strong> Calle Médico Antonio Porpeta Clérigo, 8, Elda (Alicante), Spain
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Contact email:</strong>{" "}
                  <a href="mailto:carlos@ia4pymes.tech" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">
                    carlos@ia4pymes.tech
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Trade name:</strong> IA4PYMES
                </p>
                <p>
                  <strong className="text-slate-900 font-bold">Website:</strong> https://ia4pymes.tech
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                2. Purpose
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The purpose of this website is to present the software development, technology consulting, and Artificial Intelligence integration services for SMEs provided by the owner, as well as to facilitate contact and requests for information and consultations.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Scale className="w-5 h-5" />
                </span>
                3. Terms of use
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Access to and browsing of this website confer the status of user and imply full and unreserved acceptance of all the provisions included in this Legal Notice, as well as the <Link href="/en/privacy-policy" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Privacy Policy</Link> and the <Link href="/en/cookie-policy" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Cookie Policy</Link>.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The user undertakes to make appropriate use of the contents and services offered through the website and not to use them for unlawful activities or activities contrary to good faith and the legal system.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                4. Intellectual and industrial property
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                All contents of the website (including, by way of example, texts, graphics, logos, images, design, and source code) are owned by the owner or by third parties who have authorized their use, and are protected by intellectual and industrial property regulations.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The reproduction, distribution, public communication, transformation, or any other form of exploitation, in whole or in part, of such contents without the prior, express, and written authorization of the owner is expressly prohibited.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <AlertTriangle className="w-5 h-5" />
                </span>
                5. Liability
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The owner shall not be liable, under any circumstances, for damages of any nature that may arise from errors or omissions in the contents, from the unavailability of the website, or from the transmission of viruses or malicious programs, despite having adopted all the necessary technological measures to prevent them.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The informational contents published on this website (including blog articles) are purely informative and do not constitute binding professional advice.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Gavel className="w-5 h-5" />
                </span>
                6. Third-party links
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                This website may contain links to third-party websites. The owner assumes no responsibility for the contents, privacy policies, or practices of such external sites, and access to them is carried out under the sole responsibility of the user.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </span>
                7. Data protection
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The processing of users' personal data is carried out in accordance with the provisions of the <Link href="/en/privacy-policy" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Privacy Policy</Link> of this website, in compliance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Gavel className="w-5 h-5" />
                </span>
                8. Applicable law and jurisdiction
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                This Legal Notice is governed entirely by Spanish law. For the resolution of any dispute arising from access to or use of the website, the parties submit to the courts of Elda (Alicante), Spain, expressly waiving any other jurisdiction to which they may be entitled.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="en" />
      </main>
    </>
  )
}
