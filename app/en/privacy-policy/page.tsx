import { Shield, Lock, Eye, FileText, CheckCircle, Cpu } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | IA4PYMES",
  description: "Privacy policy, personal data protection, and EU AI Act compliance guidelines of IA4PYMES.",
  alternates: {
    canonical: "https://ia4pymes.tech/en/privacy-policy",
    languages: {
      "es": "https://ia4pymes.tech/politica-privacidad",
      "en": "https://ia4pymes.tech/en/privacy-policy",
      "x-default": "https://ia4pymes.tech/politica-privacidad",
    },
  },
}

export default function PrivacyPolicyEN() {
  return (
    <>
      <HomeHeader splashFinished={true} lang="en" />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              At IA4PYMES, we ensure data confidentiality, strict GDPR compliance, and maximum transparency in accordance with the European Union Artificial Intelligence Act (EU AI Act).
            </p>
            <p className="text-xs font-bold text-slate-600 max-w-[70ch]">
              Last updated: November 2026
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
                1. Data Controller Identity
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The data controller responsible for personal data processed through this platform is <strong className="text-slate-900 font-bold">IA4PYMES</strong>. You can contact our Data Protection Officer at:{" "}
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
                2. Purpose of Data Processing
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                We process provided personal data for the following operational purposes:
              </p>
              <ul className="space-y-3 pl-13 max-w-[70ch]">
                {[
                  "Manage and respond to information requests received through contact forms and consultation bookings.",
                  "Deliver custom Artificial Intelligence integration and automation services contracted by your organization.",
                  "Send newsletters and commercial updates about our services, provided prior explicit consent is given."
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
                3. Legal Basis for Processing
              </h2>
              <ul className="space-y-3 pl-13 max-w-[70ch]">
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">User consent:</strong> For managing information requests, queries via contact forms, and assistant interactions.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-base font-medium">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Contractual relationship:</strong> For executing contracts related to software development and technology consulting services.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                4. Data Retention
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Personal data will be stored strictly as long as necessary to fulfill the purposes for which they were collected, and to determine any potential liabilities arising from those purposes.
              </p>
            </div>

            {/* Section 5 Callout */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Lock className="w-5 h-5" />
                </span>
                5. Confidentiality and Security
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13 mb-4">
                In compliance with GDPR, IA4PYMES applies technical and organizational security measures to prevent unauthorized alteration, loss, or access.
              </p>
              <div className="ml-13 p-6 rounded-2xl bg-blue-50/80 text-slate-800 space-y-1  max-w-[70ch]">
                <div className="font-black text-slate-900 flex items-center gap-2 text-base">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  Sovereignty & Artificial Intelligence Commitment
                </div>
                <p className="text-slate-600 text-base leading-relaxed max-w-[70ch]">
                  Sensitive data and code integrated into our clients' AI agents or pipelines are never used to train public LLM models.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                6. User Rights
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                You may exercise your rights to access, rectification, erasure, restriction of processing, data portability, and objection by sending an email to{" "}
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
                7. Transparency & EU AI Act Compliance (Art. 50)
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                In compliance with the transparency obligations specified under <strong className="text-slate-900">Article 50 of Regulation (EU) 2024/1689 (EU AI Act)</strong>, users are informed that interactive conversational widgets on this site (such as assistant <strong className="text-slate-900">PymerIA</strong>) are systems powered by Artificial Intelligence.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                These assistants serve solely for general commercial guidance and scheduling consultation sessions. They do not execute automated decision-making producing legal effects or perform high-risk profiling.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Shield className="w-5 h-5" />
                </span>
                8. Cookies & Advertising Policy
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                This website uses technical and analytical first-party and third-party cookies solely to optimize user navigation, measure website performance, and manage advertising campaign analytics. You may configure or reject non-essential cookies at any time through your browser settings without restricting access to primary platform features.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="en" />
      </main>
    </>
  )
}
