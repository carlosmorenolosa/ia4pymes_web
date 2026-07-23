# Project Rules for IA4PYMES

## Blog Writing & SEO Strategy
All blog articles written for this repository must comply with the following criteria to ensure high business asset valuation and client acquisition:
1. **SEO Optimization (CTR & Position Focus)**: Well-structured with clear hierarchy (H1, H2, H3), targeted keywords, and proper metadata. Since the site ranks well (avg. position under 10) but has a low CTR (under 1%), titles and meta-descriptions must be highly compelling, pain-point-driven, and designed to capture clicks from higher-ranked results. Proactively practice deep internal linking between articles to distribute authority.
2. **High-Ticket Client Acquisition**: Content must be written and framed to appeal to high-ticket B2B clients (SMEs seeking professional integrations, automation, and custom consulting). Focus on business-grade architecture, ROI calculations, process modeling (digital twins), and scalable integration patterns (CRM, ERP, private LLMs).
3. **Asset Valuation & Sellability**: Frame all solutions under the corporate brand "IA4PYMES" rather than individual names, ensuring the codebase, articles, and documentation remain independent, reusable, and highly transferable for future acquisition/exit strategies.
4. **Deep Web Research & Technical Depth**: Before writing any article, perform a thorough web search to gather the latest technical details, actual software versions, hardware costs, or real-world use cases. Avoid superficial summaries; the content must dive deep into operational realities, technical challenges, and concrete solutions to establish unquestionable authority.
5. **Anti-AI Slop Editing (`no-ai-slop` skill)**: All blog articles, technical guides, and social media copy must strictly follow the rules in `.agents/skills/no-ai-slop/SKILL.md`. Eliminate all AI buzzwords (*delve, leverage, foster, robust, cutting-edge, game changer, elevate, supercharge, harness, etc.*), throat-clearing openers, binary contrasts (*'It's not X, it's Y'*), colon reveals, and fake-profound summary kickers. Always write with direct, active, concrete human voice supported by exact numbers and real-world mechanics.

## Search Console Learnings (June 2026)
Based on Google Search Console performance data (7.5K impressions, 68 clicks, 0.9% CTR, 9.7 avg. position):
- **Impressions Momentum**: The site is gaining quick indexing traction, indicating Google trust in our niche topics (AI + SMEs). Maintain a steady publishing cadence to preserve this positive slope.
- **Click-Through-Rate (CTR) Optimization**: Prioritize writing highly click-enticing titles and meta-descriptions over dry, purely academic ones to capture clicks while ranking in positions 5-10.
- **Deep Interlinking**: Proactively link new technical guides (e.g., Local LLM deployment, Digital Twins, CRM integration) with older posts to distribute authority and help rank higher.

## CTR & Impressions Conversion Strategy (July 2026)
To systematically convert high Google search impressions into actual website visits (clicks), follow these rules:
- **Enticing Title & Meta Hooks**: Never write dry, purely descriptive titles (e.g., "Explanation of Grok 4.5 features"). Instead, frame the titles to target high-ticket B2B pain points, financial ROI, and strategic opportunities (e.g., "Presentamos Grok 4.5: La era de la verdadera autonomía operativa para las PYMEs").
- **Intent-Driven Meta Descriptions**: Craft meta descriptions that clearly state what the reader will save, earn, or automate by clicking. Focus on the value proposition.
- **Link Juice Distribution (Internal Linking)**: For every new article published, identify at least 2-3 existing posts in `lib/blog-data.ts` and add internal links within the text. This helps push those posts from positions 5-10 into the top 3 spots, where click conversion rates increase exponentially.
- **Visual Call-to-Actions (CTAs)**: Always include contextually integrated CTA boxes pointing to `/#consultoria` or `/en#consultoria` to capture high-intent leads visiting the blog.

## Video Script & Programmatic Shorts Strategy (July 2026)
Whenever a new blog article is published, the user will request an advanced, production-grade prompt/script to generate a corresponding YouTube Short / TikTok video using HeyGen HyperFrames. Always follow these rules:
- **Narrative Storytelling Hook**: Avoid boring "problem-solution" formats. Start the script in-media-res with an engaging hook or visual interruption (glitch/flash) that speaks directly to B2B pains (e.g., money wasted, memory issues, SaaS traps).
- **Tone**: Professional yet accessible to non-technical business owners, utilizing engaging metaphors (e.g., slicing cakes or comparing items).
- **High-Quality Visual Layering**: Design the prompt for the AI agent to compose multiple layers (moving grid/particles, display text, data charts/KPI count-ups, animations with GSAP/Lottie, shader transitions) rather than static screens.
- **Audio & SFX Integration**: Synchronize narrator voiceover (via Nan Builders Kokoro API `em_alex`/`ef_dora` or ElevenLabs `Alvaro`), background music (usually `bg-tech.mp3` at a soft `0.08` or `0.1` volume), and timed sound effects (glitches, whooshes).
- **Outro Consistency**: Always end the video with the corporate identity: `logo.png` centered and the `banner.png` asset right below it (e.g., seconds 52–60 for a 1-minute video), prompting the viewer to visit `ia4pymes.tech`.

