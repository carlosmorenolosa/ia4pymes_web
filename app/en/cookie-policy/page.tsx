import Link from "next/link"
import { Cookie, BarChart3, Users, CalendarClock, Settings, ShieldCheck, RefreshCw } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { LegalFooter } from "@/components/legal-footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | IA4PYMES",
  description: "Cookie policy of IA4PYMES: analytical and third-party cookies and tools used, in compliance with the Spanish LSSI and GDPR regulations.",
  alternates: {
    canonical: "https://ia4pymes.tech/en/cookie-policy",
    languages: {
      "es": "https://ia4pymes.tech/politica-cookies",
      "en": "https://ia4pymes.tech/en/cookie-policy",
      "x-default": "https://ia4pymes.tech/politica-cookies",
    },
  },
}

export default function CookiePolicyEN() {
  return (
    <>
      <HomeHeader splashFinished={true} lang="en" />

      <main className="min-h-screen bg-white text-slate-800 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
              Cookie <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
              This website uses cookies and similar technologies in accordance with Spanish Law 34/2002 (LSSI) and Regulation (EU) 2016/679 (GDPR). Below we explain in detail which cookies we use, for what purpose, and how you can manage them.
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
                  <Cookie className="w-5 h-5" />
                </span>
                1. What are cookies?
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                Cookies are small files stored on the user's device when visiting a website that allow information about the browsing performed to be stored and retrieved. We also use similar local storage technologies (such as <strong className="text-slate-900 font-bold">localStorage</strong>) to remember your preferences, for example, your decision about the use of cookies.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Settings className="w-5 h-5" />
                </span>
                2. Technical cookies (first-party, exempt from consent)
              </h2>
              <div className="pl-13 max-w-[70ch]">
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        <th className="px-4 py-3 font-bold">Name / storage</th>
                        <th className="px-4 py-3 font-bold">Purpose</th>
                        <th className="px-4 py-3 font-bold">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="px-4 py-3 font-mono text-xs">cookie-consent (localStorage)</td>
                        <td className="px-4 py-3">Store your decision about non-essential cookies (accepted or rejected) so the banner is not shown again.</td>
                        <td className="px-4 py-3">Persistent, until you delete it</td>
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
                3. Third-party analytical cookies (consent required)
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                We use Google Analytics to measure aggregate website usage. These cookies are only installed if you accept their use through the cookie banner.
              </p>
              <div className="pl-13 max-w-[70ch]">
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        <th className="px-4 py-3 font-bold">Provider</th>
                        <th className="px-4 py-3 font-bold">Cookie</th>
                        <th className="px-4 py-3 font-bold">Purpose</th>
                        <th className="px-4 py-3 font-bold">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="px-4 py-3">Google (Google Ireland Ltd.)</td>
                        <td className="px-4 py-3 font-mono text-xs">_ga</td>
                        <td className="px-4 py-3">Distinguish users in aggregate form for usage statistics.</td>
                        <td className="px-4 py-3">2 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Google (Google Ireland Ltd.)</td>
                        <td className="px-4 py-3 font-mono text-xs">_ga_&lt;container-id&gt;</td>
                        <td className="px-4 py-3">Maintain session state and measure interactions.</td>
                        <td className="px-4 py-3">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  You can review how Google processes data in its privacy policy: https://policies.google.com/privacy
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Users className="w-5 h-5" />
                </span>
                4. Business audience analytics tool (LeaDSY)
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                We use the LeaDSY analytics tool (Leadsy.ai), which is activated only if the user has accepted non-essential cookies through the cookie banner, and allows us to analyze in aggregate which type of visiting company shows interest in our services, for B2B commercial prospecting purposes. This tool may store browsing identifiers on your device.
              </p>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                You can review this provider's data processing in its privacy policy: https://leadsy.ai. If you wish to object to this processing, you can reject non-essential cookies through the banner or clear the site's local storage from your browser.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <CalendarClock className="w-5 h-5" />
                </span>
                5. Consultation booking widgets (Cal.com / Calendly)
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The consultation booking section embeds third-party widgets (Cal.com and Calendly) that load only when the user accesses that section. These services may set their own cookies necessary for the calendar and booking process to work, in accordance with their respective policies:
              </p>
              <ul className="space-y-2 pl-13 max-w-[70ch] text-base text-slate-600 list-disc list-inside">
                <li>
                  <a href="https://cal.com/policies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Cal.com cookie policy</a>
                </li>
                <li>
                  <a href="https://calendly.com/pages/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Calendly privacy policy</a>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Settings className="w-5 h-5" />
                </span>
                6. How to manage or disable cookies
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                When you first access this website, a banner is displayed that allows you to accept or reject non-essential cookies. If you reject, third-party analytical cookies will not be loaded. You can change your decision at any time by clearing the site's local storage from your browser, and configure or learn more about cookies from your browser's options:
              </p>
              <ul className="space-y-2 pl-13 max-w-[70ch] text-base text-slate-600 list-disc list-inside">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/en-us/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Microsoft Edge</a></li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                7. Legal basis and data sharing
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                The installation of non-essential cookies is based on the user's consent (Art. 6.1.a GDPR and Art. 22.2 LSSI). The third-party providers mentioned act as data processors or independent controllers depending on the service, and may carry out international data transfers covered by the European Commission's Standard Contractual Clauses or the EU-U.S. Data Privacy Framework. Further information is available in our <Link href="/en/privacy-policy" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 transition-colors">Privacy Policy</Link>.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <RefreshCw className="w-5 h-5" />
                </span>
                8. Updates to this policy
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-[70ch] pl-13">
                This Cookie Policy may be updated based on regulatory changes or on the cookies used on the site. We recommend reviewing it each time you access the website.
              </p>
            </div>

          </div>
        </section>

        <LegalFooter lang="en" />
      </main>
    </>
  )
}
