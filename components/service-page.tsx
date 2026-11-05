import Link from "next/link"
import { ArrowRight, CheckCircle, Check, ShieldCheck, Wallet } from "lucide-react"
import { HomeHeader } from "@/components/home-header"
import { FadeIn } from "@/components/fade-in"
import { AnchorLink } from "@/components/anchor-link"
import { ServiceFaq } from "@/components/service-faq"
import { SiteFooter } from "@/components/site-footer"
import { SERVICE_UI, type ServiceCard, type ServiceContent } from "@/lib/services-data"

/*
 * Every class below is copied from the home page (app/page.tsx, hero-es,
 * consulting-section, faq-section) so service pages read as part of the same site.
 * Do not introduce new sizes, colours or card styles here.
 */
const H2_CLASS = "text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]"
const SECTION_LEAD_CLASS = "max-w-3xl mx-auto text-base sm:text-xl lg:text-xl text-slate-600 px-4"
const CARD_CLASS =
  "relative group bg-slate-50 rounded-[2.5rem] p-8 sm:p-10 text-center sm:text-left transition-all duration-500"
const CARD_TITLE_CLASS =
  "text-xl sm:text-xl font-bold text-slate-900 mb-4 tracking-tight flex items-center justify-center sm:justify-start gap-2.5"
const PRIMARY_BUTTON_CLASS =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-lg font-bold transition-all duration-300 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 sm:py-4 text-base group"

function SectionHeader({ id, lead, highlight, intro }: { id: string; lead: string; highlight: string; intro?: string }) {
  return (
    <header className="text-center mb-12 sm:mb-16">
      <h2 id={id} className={H2_CLASS}>
        {lead} <span className="text-blue-600">{highlight}</span>
      </h2>
      {intro ? <p className={SECTION_LEAD_CLASS}>{intro}</p> : null}
    </header>
  )
}

function CardGrid({ cards }: { cards: ServiceCard[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div key={card.title} className={CARD_CLASS}>
            <h3 className={CARD_TITLE_CLASS}>
              <Icon className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
              {card.title}
            </h3>
            <p className={`text-slate-600 leading-relaxed max-w-[70ch]${card.benefit ? " mb-6" : ""}`}>{card.description}</p>
            {card.benefit ? (
              <div className="inline-flex items-center gap-2 mt-auto">
                <CheckCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span className="text-base font-semibold text-slate-700 group-hover:text-blue-700">{card.benefit}</span>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <AnchorLink href={href} className={PRIMARY_BUTTON_CLASS}>
      <span>{label}</span>
      <ArrowRight
        className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </AnchorLink>
  )
}

export function ServicePage({ service }: { service: ServiceContent }) {
  const ui = SERVICE_UI[service.lang]
  const { hero, what, useCases, pricing, articles, faq, finalCta } = service

  return (
    <>
      <HomeHeader splashFinished={true} lang={service.lang} />

      {/* Hero: same container, H1 and lead classes as components/hero-es.tsx */}
      <section id="inicio" className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 flex items-center pt-24 sm:pt-32 md:pt-48 pb-16 max-w-7xl">
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-4xl flex flex-col items-center text-center md:items-start md:text-left relative z-10">
                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900 text-balance"
                >
                  {hero.h1Lead} <span className="text-blue-600">{hero.h1Highlight}</span>
                </h1>

                <p className="text-xl md:text-xl lg:text-[1.35rem] mb-10 text-slate-600 font-medium max-w-3xl leading-[1.5] tracking-tight text-pretty">
                  {hero.intro}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start relative z-30">
                  <AnchorLink
                    href={ui.cta.href}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-lg text-base font-bold transition-all text-white border-blue-600 bg-blue-600 hover:bg-blue-700 px-8 py-4 active:scale-95"
                  >
                    {ui.cta.label}
                  </AnchorLink>
                  <AnchorLink
                    href={hero.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-tight rounded-lg text-base font-bold transition-all text-slate-700 bg-slate-50 hover:bg-slate-50 px-8 py-4 group active:scale-95"
                  >
                    {hero.secondaryCta.label}
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </AnchorLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-transparent">
        {/* What it is: same layout as the home "Qué hacemos" section */}
        <section className="py-16 sm:py-24 bg-white relative" aria-labelledby="service-what-heading">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <FadeIn>
              <SectionHeader id="service-what-heading" lead={what.headingLead} highlight={what.headingHighlight} intro={what.intro} />
              <CardGrid cards={what.cards} />
            </FadeIn>
          </div>
        </section>

        {/* Use cases by sector */}
        <section
          id={useCases.id}
          className="py-16 sm:py-24 bg-white relative scroll-mt-16"
          aria-labelledby="service-use-cases-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <FadeIn>
              <SectionHeader
                id="service-use-cases-heading"
                lead={useCases.headingLead}
                highlight={useCases.headingHighlight}
                intro={useCases.intro}
              />
              <CardGrid cards={useCases.cards} />
              {useCases.example ? (
                <p className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center text-base sm:text-xl text-slate-600 leading-relaxed px-4">
                  {useCases.example.text}{" "}
                  {useCases.example.link ? (
                    <Link
                      href={useCases.example.link.href}
                      className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-300"
                    >
                      {useCases.example.link.title}
                    </Link>
                  ) : null}
                </p>
              ) : null}
            </FadeIn>
          </div>
        </section>

        {/* How we work: the home 3-step methodology, same markup */}
        <section className="py-16 sm:py-24 bg-white overflow-hidden" aria-labelledby="process-heading">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <FadeIn delay={0.1}>
              <header className="text-center mb-10 sm:mb-14">
                <h2 id="process-heading" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6">
                  {ui.process.headingLead} <span className="text-blue-600">{ui.process.headingHighlight}</span>
                </h2>
                <p className={SECTION_LEAD_CLASS}>{ui.process.intro}</p>
              </header>
            </FadeIn>

            <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14 relative">
              {ui.process.steps.map((step, index, array) => {
                const Icon = step.icon
                return (
                  <FadeIn key={step.step} delay={0.2 + index * 0.15}>
                    <article className="group relative">
                      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start shrink-0">
                          <span
                            aria-hidden="true"
                            className="text-6xl sm:text-6xl font-black text-blue-600 mb-2 leading-none group-hover:text-blue-700 transition-colors duration-500"
                          >
                            {step.step}
                          </span>
                          <div className="mb-4 text-blue-600">
                            <Icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                        </div>

                        <div className="flex-grow pt-2">
                          <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                          <p className="text-xl sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-6">{step.description}</p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                            <CheckCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                            <span className="text-base font-semibold text-slate-700 group-hover:text-blue-700">{step.benefit}</span>
                          </div>
                        </div>
                      </div>

                      {index !== array.length - 1 && <div className="mt-16 sm:mt-24 border-b border-slate-100 w-full" />}
                    </article>
                  </FadeIn>
                )
              })}
            </div>

            <FadeIn delay={0.6}>
              <div className="mt-12 sm:mt-16 text-center">
                <PrimaryCta href={ui.cta.href} label={ui.cta.label} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pricing and timelines: home stat cards + consulting-section guarantee and list styles */}
        <section className="py-16 sm:py-24 bg-white relative" aria-labelledby="service-pricing-heading">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <FadeIn>
              <SectionHeader
                id="service-pricing-heading"
                lead={pricing.headingLead}
                highlight={pricing.headingHighlight}
                intro={pricing.intro}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-12 sm:mb-16 max-w-5xl mx-auto px-4">
                {ui.pricing.stats.map((stat) => (
                  <div key={stat.value} className="relative group bg-slate-50 p-8 sm:p-10 rounded-[2.5rem] text-center transition-all duration-500">
                    <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 text-base sm:text-base font-semibold tracking-wide leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto px-4 text-center lg:text-left">
                <div className="flex gap-4 items-start text-center lg:text-left bg-blue-50/50 border-blue-100/60 rounded-2xl p-5">
                  <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{ui.pricing.guaranteeTitle}</h3>
                    <p className="text-slate-600 text-base mt-1 max-w-[70ch]">{ui.pricing.guaranteeText}</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-[2rem] p-6 sm:p-8 space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 justify-center lg:justify-start">
                    <Wallet className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    {ui.pricing.budgetTitle}
                  </h3>
                  <p className="text-slate-600 text-base">{ui.pricing.budgetIntro}</p>
                  <ul className="space-y-4">
                    {ui.pricing.budgetRanges.map((range) => (
                      <li key={range} className="flex items-start gap-3 justify-center lg:justify-start text-left">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-0.5">
                          <Check className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <strong className="text-slate-900">{range}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Related blog posts */}
        <section className="py-16 sm:py-24 bg-white relative" aria-labelledby="service-articles-heading">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <FadeIn>
              <SectionHeader id="service-articles-heading" lead={articles.headingLead} highlight={articles.headingHighlight} />
              <div className="grid md:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
                {articles.items.map((article) => (
                  <Link key={article.href} href={article.href} className={`${CARD_CLASS} flex flex-col`}>
                    <h3 className="text-xl sm:text-xl font-bold text-slate-900 mb-6 tracking-tight">{article.title}</h3>
                    <span className="mt-auto inline-flex items-center justify-center sm:justify-start gap-2 text-base font-semibold text-blue-600 group-hover:text-blue-700">
                      {ui.readArticle}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <ServiceFaq
          headingLead={faq.headingLead}
          headingHighlight={faq.headingHighlight}
          subtitle={faq.subtitle}
          items={faq.items}
          ctaQuestion={ui.faqCtaQuestion}
          ctaLabel={ui.cta.label}
          ctaHref={ui.cta.href}
        />

        {/* Final CTA: same header and link styles as the home contact section */}
        <section className="py-20 sm:py-32 relative bg-transparent overflow-hidden" aria-labelledby="service-cta-heading">
          <FadeIn>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
              <header className="text-center mb-12 sm:mb-16">
                <h2 id="service-cta-heading" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 mb-6">
                  {finalCta.headingLead} <span className="text-blue-600">{finalCta.headingHighlight}</span>
                </h2>
                <p className="max-w-4xl mx-auto text-base sm:text-xl lg:text-xl xl:text-xl text-slate-600 leading-relaxed px-4">
                  {finalCta.text}
                </p>
              </header>
              <div className="text-center">
                <PrimaryCta href={ui.cta.href} label={ui.cta.label} />
                <Link
                  href={ui.homePath}
                  className="mt-6 sm:mt-8 text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-xl hover:underline transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
                  aria-label={ui.backHomeAria}
                >
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 rotate-180" aria-hidden="true" />
                  {ui.backHome}
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        <SiteFooter lang={service.lang} />
      </main>
    </>
  )
}
