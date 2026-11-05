# Feature: service landing pages

Locator: `odd/tasks/service-landing-pages.md` · Engram mirror `odd/service-landing-pages/tasks`: **PENDING** (engram MCP not connected this session).
Branch: `feat/service-landing-pages`

## Objective
Give each commercial service its own indexable URL (ES + EN) so the site can rank for commercial queries ("desarrollo de software a medida para pymes", "automatización de procesos con IA", "agentes de IA para empresas", "consultoría de IA para pymes") instead of relying on home-page anchors.

## Problem / why
- Services exist only as anchors on the home page (`#que-hacemos`, `#consultoria`). Google ranks URLs, not anchors.
- ia4pymes.tech does not appear for these queries; the SERPs are mostly guides and vendor blogs, with few agency landing pages (weak competition).

## Scope (authorized by user 2026-11-05)
- 4 service pages in ES and their 4 EN equivalents.
- Pages must match the home page EXACTLY in style, format, fonts, sizes and typography (reuse the home's header, footer, section wrappers, heading/body classes and components; no new visual language).
- Integration: sitemap, links from home "Qué hacemos" cards and footer "Soluciones", llms.txt.

Out of scope (later features): blog internal-link rework, cannibalization fixes, about page/E-E-A-T, schema clean-up on home, technical fixes (`<html lang>` on /en, etc.).

## Constraints
- Copy: no invented facts. Only reuse claims already published on the site (home, FAQ, consulting section, llms.txt, existing case studies). Prices: consultation 299 € + IVA; project budget ranges from the contact form (2.000–10.000 €, 10.000–30.000 €, 30.000–50.000 €, >50.000 €). Timelines per home FAQ (diagnosis 2–3 weeks; build 1–4 months).
- Copy style: apply the no-ai-slop skill (structural patterns in Spanish; word ban list in English).
- Pages server-rendered (Server Components); client components only where the home already uses them.
- Each page: unique `<title>`/meta description with the target keyword, keyword H1, canonical + hreflang ES↔EN, `Service` + `BreadcrumbList` + `FAQPage` JSON-LD, CTA to `/#consultoria` (`/en#consultoria`).

## Routes
| Service | ES | EN |
|---|---|---|
| Custom software | `/desarrollo-software-a-medida-pymes` | `/en/custom-software-development-smes` |
| Process automation | `/automatizacion-procesos-ia` | `/en/ai-process-automation` |
| AI agents | `/agentes-ia-empresas` | `/en/ai-agents-for-business` |
| AI consulting | `/consultoria-ia-pymes` | `/en/ai-consulting-smes` |

## Tasks
- [x] T1 — Shared service-page template + pilot page "agentes de IA" (ES + EN). Checkpoint: user reviews style before the rest. Route: delegated direct (writer trigger: 2+ non-trivial files; preparation trigger: reading home components to replicate the style).
- [x] T2 — Remaining 3 services (ES + EN) on the same template. Route: delegated direct.
- [ ] T3 — Integration: `app/sitemap.ts`, home "Qué hacemos" cards + footer "Soluciones" links (ES + EN), `public/llms.txt`. Route: delegated direct.

## Acceptance criteria
- `pnpm build` passes; `pnpm lint` shows no new errors in touched files.
- Each route returns 200 with server-rendered H1, metadata, canonical, hreflang and valid JSON-LD.
- Visual parity with the home (same header/footer, fonts, heading sizes, section spacing, buttons).

## Checks
- Test-first exception: no test runner in the repo (only `qa:smoke`); verification is build + lint + `qa:smoke` + rendered HTML inspection.
- Native review (gentle-ai): CLI not installed in this environment → unavailable; ordinary checks only.

## Delivery
Forecast ~1,200 authored lines across T1–T3 (above the ~400 budget). Delivery strategy: ask-on-risk; ask the user the chain strategy before opening any PR. Push/PR remain the user's decisions.

## Progress
- 2026-11-05: branch created, feature document created.
- 2026-11-05: T1 implemented (delegated writer), pending parent review. Files: `lib/services-data.ts` (typed ES/EN service content + shared UI strings + `buildServiceMetadata`/`buildServiceJsonLd`), `components/service-page.tsx` (server template, home classes), `components/service-faq.tsx` (client FAQ accordion, copy of home `FaqSection` markup with props), `components/site-footer.tsx` (faithful copy of the home inline footer with absolute section links; home pages NOT modified), `app/agentes-ia-empresas/page.tsx`, `app/en/ai-agents-for-business/page.tsx`. Verification: `pnpm build` passes (both routes static); `pnpm exec tsc --noEmit` 0 errors in touched files (2 pre-existing in `.next/dev/types/validator.ts` for missing `app/sectores`); `pnpm lint` unavailable (`next lint` removed in Next 16, pre-existing); `pnpm start` + fetch: both routes 200, one H1 each, unique title/description, canonical, hreflang es/en/x-default, Service + BreadcrumbList + FAQPage (7 Q, matches visible FAQ) JSON-LD parse; 7 linked blog posts return 200.
- 2026-11-05: T1 style approved by user after visual review on dev server. Committed as work unit (see git log: feat(services): service page template and AI agents landing).
- 2026-11-05: T2 implemented (delegated writer), pending parent review. Files: `lib/services-data.ts` (`ServiceId` extended; ES+EN entries for custom-software, process-automation, ai-consulting), new thin routes `app/desarrollo-software-a-medida-pymes/page.tsx`, `app/automatizacion-procesos-ia/page.tsx`, `app/consultoria-ia-pymes/page.tsx`, `app/en/custom-software-development-smes/page.tsx`, `app/en/ai-process-automation/page.tsx`, `app/en/ai-consulting-smes/page.tsx`. `components/service-page.tsx` unchanged. Cross-links via `useCases.example`: software → automation, automation → agents, consulting → software. Verification: `pnpm exec tsc --noEmit` exit 0; `pnpm build` passes with all 8 service routes static; `pnpm start -p 3100` + fetch: 8/8 routes 200, one H1 each, 8 unique titles and descriptions, canonical + hreflang es/en/x-default to the correct twin, Service + BreadcrumbList + FAQPage (7 Q each, all visible) JSON-LD parse; 37 internal links on the 6 new pages all 200. Copy checked against no-ai-slop eval.
- 2026-11-05: T2 parent spot check on dev server: 4 routes 200 with expected H1. Committed as work unit (feat(services): custom software, automation and consulting landings).
