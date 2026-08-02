import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Cpu } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | IA4PYMES",
  description: "Privacy policy, personal data protection, and EU AI Act compliance guidelines of IA4PYMES.",
}

export default function PrivacyPolicyEN() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* Top Header Navigation Bar */}
      <header className="w-full py-4 sm:py-6 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
          <Link href="/en" className="flex items-center group cursor-pointer transition-all hover:opacity-80 active:scale-95" aria-label="Go to IA4PYMES home">
            <div className="flex items-center relative tracking-[-0.04em]">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600">IA</span>
              <span className="text-3xl sm:text-4xl font-black text-slate-900">4</span>
              <span className="ml-1 text-2xl sm:text-3xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
            </div>
          </Link>

          <Link
            href="/en"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 px-4 py-2.5 rounded-full border border-slate-200/60 transition-all duration-300 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 flex-1">
        
        {/* Page Hero Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            Data Protection & Governance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1]">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Confidentiality guarantees, strict GDPR compliance, and EU AI Act transparency.
          </p>
          <div className="pt-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
            Last updated: August 2026
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
              <h2>1. Data Controller Identity</h2>
            </div>
            <p>
              The data controller responsible for processing personal data obtained through this platform is <strong className="text-slate-900">IA4PYMES</strong>. You can contact our Data Protection Officer at:{" "}
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
              <h2>2. Purpose of Data Processing</h2>
            </div>
            <p>
              At IA4PYMES, we process provided personal data for the following operational purposes:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "Manage and respond to information requests received through contact forms and consultation bookings.",
                "Deliver custom Artificial Intelligence integration services contracted by your organization.",
                "Send newsletters and commercial updates about our services, provided you have given prior explicit consent."
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
              <h2>3. Legal Basis for Processing</h2>
            </div>
            <p>
              The legal bases for processing your data are:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">User consent:</strong> For managing information requests, queries via the contact form, and assistant interactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Contractual relationship:</strong> For executing contracts related to software development and technology consulting services.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h2>4. Data Retention</h2>
            </div>
            <p>
              Personal data will be stored as long as necessary to fulfill the purposes for which they were collected, and to determine any potential liabilities arising from those purposes.
            </p>
          </section>

          {/* Section 5 Highlight Box (Landing Blue Callout) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2>5. Confidentiality and Security</h2>
            </div>
            <p>
              In compliance with the General Data Protection Regulation (GDPR), IA4PYMES applies appropriate technical and organizational security measures to protect personal data.
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/80 border-l-4 border-blue-600 text-slate-800 text-base space-y-1 shadow-sm">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                Sovereignty & Artificial Intelligence Commitment
              </div>
              <p className="text-slate-600 text-sm">
                The sensitive data and code integrated into our clients' AI agents or pipelines are never used to train public LLM models.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2>6. User Rights</h2>
            </div>
            <p>
              You have the right to exercise your rights to access, rectification, erasure, restriction of processing, data portability, and objection by sending an email to{" "}
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
              <h2>7. Transparency & EU AI Act Compliance (Regulation EU 2024/1689 - Art. 50)</h2>
            </div>
            <p>
              In compliance with the transparency obligations specified under <strong className="text-slate-900">Article 50 of Regulation (EU) 2024/1689 (EU AI Act)</strong>, users are informed that the interactive conversational widgets on this site (such as the assistant <strong className="text-slate-900">PymerIA</strong>) are systems powered by Artificial Intelligence.
            </p>
            <p>
              These assistants serve solely for general commercial guidance and scheduling consultation sessions. They do not execute automated decision-making producing legal effects or perform high-risk profiling.
            </p>
          </section>

        </div>

      </main>

      {/* Landing Footer */}
      <footer className="bg-white border-t border-slate-200/60 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/en" className="flex items-center group cursor-pointer" aria-label="IA4PYMES">
              <div className="flex items-center relative tracking-[-0.04em]">
                <span className="text-2xl font-extrabold text-blue-600">IA</span>
                <span className="text-2xl font-black text-slate-900">4</span>
                <span className="ml-1 text-xl font-bold text-slate-900 uppercase tracking-tight">PYMES</span>
              </div>
            </Link>

            <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
              <Link href="/en" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/en/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/en#consultoria" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">Book Consulting</Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>© 2026 IA4PYMES. All rights reserved.</p>
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


