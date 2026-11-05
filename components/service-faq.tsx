"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"
import Link from "next/link"

/**
 * FAQ accordion for service pages. Same markup and classes as the home
 * `FaqSection`, but the questions come in as props so each service shows its own
 * (and the FAQPage schema can mirror exactly what is visible).
 */
export function ServiceFaq({
  headingLead,
  headingHighlight,
  subtitle,
  items,
  ctaQuestion,
  ctaLabel,
  ctaHref,
}: {
  headingLead: string
  headingHighlight: string
  subtitle: string
  items: { question: string; answer: string }[]
  ctaQuestion: string
  ctaLabel: string
  ctaHref: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-4">
            {headingLead} <span className="text-blue-600">{headingHighlight}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-4 mb-12">
          {items.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-blue-600" : "border-slate-200 hover:border-blue-200"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-xl sm:text-xl pr-8 ${isOpen ? "text-blue-600" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" aria-hidden="true" /> : <Plus className="w-5 h-5" aria-hidden="true" />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed text-base sm:text-xl max-w-[70ch]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-6 font-medium max-w-[70ch] mx-auto">{ctaQuestion}</p>
          <Link
            href={ctaHref}
            className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer"
          >
            {ctaLabel}
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
