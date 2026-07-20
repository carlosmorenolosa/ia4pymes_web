import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | IA4PYMES",
  description: "Privacy policy and personal data protection guidelines of IA4PYMES.",
}

export default function PrivacyPolicyEN() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/50 p-6 sm:p-10 md:p-12 relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Privacy Policy</h1>
            <p className="text-sm text-slate-500 mt-1">Last updated: July 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-600 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Lock className="w-4 h-4 text-blue-600" />
              <h2>1. Data Controller Identity</h2>
            </div>
            <p>
              The data controller responsible for the processing of your personal data obtained through this platform is <strong>IA4PYMES</strong>. You can contact our Data Protection Officer at the following email address: <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:underline">contacto@ia4pymes.tech</a>.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Eye className="w-4 h-4 text-blue-600" />
              <h2>2. Purpose of Data Processing</h2>
            </div>
            <p>
              At IA4PYMES, we process personal data provided by users for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manage and respond to information requests received through contact forms and consultation bookings.</li>
              <li>Provide custom Artificial Intelligence integration services contracted by your organization.</li>
              <li>Send newsletters and commercial updates about our services, provided you have given prior explicit consent.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <FileText className="w-4 h-4 text-blue-600" />
              <h2>3. Legal Basis for Processing</h2>
            </div>
            <p>
              The legal bases for processing your data are:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>User consent:</strong> For managing information requests, queries via the contact form, and newsletter subscriptions.</li>
              <li><strong>Contractual relationship:</strong> For executing contracts related to software development and technology consulting services.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Shield className="w-4 h-4 text-blue-600" />
              <h2>4. Data Retention</h2>
            </div>
            <p>
              Personal data will be stored as long as necessary to fulfill the purposes for which they were collected, and to determine any potential liabilities arising from those purposes.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <Lock className="w-4 h-4 text-blue-600" />
              <h2>5. Confidentiality and Security</h2>
            </div>
            <p>
              In compliance with the General Data Protection Regulation (GDPR) and local applicable law, IA4PYMES commits to protecting personal data. We apply appropriate technical and organizational security measures to prevent alteration, loss, unauthorized access, or processing.
            </p>
            <p className="bg-blue-50 border-l-4 border-blue-600 p-4 text-slate-700 text-sm italic rounded-r-xl">
              <strong>AI Commitment:</strong> The sensitive data and code integrated into our clients' AI agents or pipelines are never used to train public LLM models.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-lg">
              <FileText className="w-4 h-4 text-blue-600" />
              <h2>6. User Rights</h2>
            </div>
            <p>
              You have the right to confirm whether IA4PYMES is processing your personal data. You may exercise your rights to access, rectification, erasure, restriction of processing, data portability, and objection by sending an email to <a href="mailto:contacto@ia4pymes.tech" className="text-blue-600 hover:underline">contacto@ia4pymes.tech</a>, attaching a copy of your identity card or passport.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">© 2026 IA4PYMES. All rights reserved.</p>
        </div>

      </div>
    </div>
  )
}
