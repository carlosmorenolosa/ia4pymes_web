import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Cpu } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | IA4PYMES",
  description: "Privacy policy, data protection guidelines, and EU AI Act compliance of IA4PYMES.",
}

export default function PrivacyPolicyEN() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-600/15 via-blue-900/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Header Navigation Bar */}
      <header className="w-full py-6 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl flex items-center justify-between">
          <Link href="/en" className="flex items-center gap-1 group" aria-label="Go to IA4PYMES home">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-500 group-hover:text-blue-400 transition-colors">IA</span>
            <span className="text-2xl sm:text-3xl font-black text-white">4</span>
          </Link>

          <Link
            href="/en"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-full border border-slate-800 transition-all duration-300 shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16">
        
        {/* Page Hero Title */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            Data Protection & Governance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Confidentiality guarantees, GDPR compliance, and EU AI Act transparency.
          </p>
          <p className="text-xs text-slate-500 font-medium">Last updated: August 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-800 p-6 sm:p-10 md:p-12 shadow-2xl space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2>1. Data Controller Identity</h2>
            </div>
            <p>
              The data controller responsible for the processing of your personal data obtained through this platform is <strong className="text-white">IA4PYMES</strong>. You can contact our Data Protection Officer at:{" "}
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
              <h2>2. Purpose of Data Processing</h2>
            </div>
            <p>
              At IA4PYMES, we process provided personal data for the following operational purposes:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                "Manage and respond to information requests received through contact forms and consultation bookings.",
                "Deliver custom Artificial Intelligence integration services contracted by your organization.",
                "Send newsletters and commercial updates about our services, provided you have given prior explicit consent."
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
              <h2>3. Legal Basis for Processing</h2>
            </div>
            <p>
              The legal bases for processing your data are:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <span><strong className="text-white">User consent:</strong> For managing information requests, queries via the contact form, and assistant interactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <span><strong className="text-white">Contractual relationship:</strong> For executing contracts related to software development and technology consulting services.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h2>4. Data Retention</h2>
            </div>
            <p>
              Personal data will be stored as long as necessary to fulfill the purposes for which they were collected, and to determine any potential liabilities arising from those purposes.
            </p>
          </section>

          {/* Section 5 Highlight Box */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2>5. Confidentiality and Security</h2>
            </div>
            <p>
              In compliance with the General Data Protection Regulation (GDPR), IA4PYMES applies appropriate technical and organizational security measures to protect personal data.
            </p>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-500/30 text-blue-200 text-sm space-y-1 shadow-inner">
              <div className="font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                Sovereignty & Artificial Intelligence Commitment
              </div>
              <p>
                The sensitive data and code integrated into our clients' AI agents or pipelines are never used to train public LLM models.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl pb-2 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2>6. User Rights</h2>
            </div>
            <p>
              You have the right to exercise your rights to access, rectification, erasure, restriction of processing, data portability, and objection by sending an email to{" "}
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
              <h2>7. Transparency & EU AI Act Compliance (Regulation EU 2024/1689 - Art. 50)</h2>
            </div>
            <p>
              In compliance with the transparency obligations specified under <strong className="text-white">Article 50 of Regulation (EU) 2024/1689 (EU AI Act)</strong>, users are informed that the interactive conversational widgets on this site (such as the assistant <strong className="text-white">PymerIA</strong>) are systems powered by Artificial Intelligence.
            </p>
            <p>
              These assistants serve solely for general commercial guidance and scheduling consultation sessions. They do not execute automated decision-making producing legal effects or perform high-risk profiling.
            </p>
          </section>

        </div>

        {/* Page Footer */}
        <div className="mt-12 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 IA4PYMES. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-slate-400 font-semibold">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <Link href="/en/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>•</span>
            <Link href="/en#consultoria" className="hover:text-white transition-colors">Consulting</Link>
          </div>
        </div>

      </main>
    </div>
  )
}

