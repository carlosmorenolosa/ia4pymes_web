---
name: IA4PYMES
description: Software development with AI for Spanish SMEs — technical, credible, unhyped.
colors:
  primary: "#2563eb"
  primary-deep: "#1d4ed8"
  primary-wash: "#eff6ff"
  ink: "#0f172a"
  body: "#475569"
  muted: "#64748b"
  surface: "#ffffff"
  sunken: "#f8fafc"
  border: "#e2e8f0"
  accent-signal: "#ef4444"
typography:
  display-xl:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  display-lg:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(1.9rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
---

## Overview

IA4PYMES sells engineering credibility: the company builds software for SMEs, so the
interface is the first sample of its craft. The visual language is technical and
editorial rather than promotional. It avoids the current defaults of AI-generated
SaaS sites (Inter everywhere, an icon tile above every heading, purple or blue
gradients, glass panels, pulsing status dots) and earns attention through
typography, spacing and precision instead of decoration.

Mode for the marketing surface: **Persuade**. Mode for product and admin surfaces:
**Operate** — there, ambition shows as restraint.

## Colors

One blue, one signal red, and a slate neutral ramp. Nothing else.

- `primary` (#2563eb) is the only action colour. It marks links, primary buttons,
  icon glyphs, and the emphasised span inside a headline.
- `primary-deep` is the hover and pressed state. Never introduce a second blue.
- `primary-wash` is the only tinted background allowed, for icon glyphs and quiet
  emphasis blocks.
- `accent-signal` (#ef4444) is reserved for the underline of the “Reduce” word in
  the hero headline. It is a signature, not a semantic colour: never use it for
  status, errors or statistics.
- Statistics, counters and metric labels are `ink` or `primary`. Do not colour
  individual stats green, orange or amber to differentiate them — that
  multi-colour stat row is a recognisable template and it is banned here.

## Typography

Two families, one idea: the code is the brand.

- **JetBrains Mono** carries display and headings (h1–h3, statistics, blog headings)
  and also inline code. A monospace headline states "we write software" before the
  visitor reads a word, and it cannot be imitated by a template.
- **Instrument Sans** carries everything that is read at length or operated: body
  copy, navigation, buttons, forms, labels, captions.
- Weights in use: JetBrains 700/800 for display, Instrument 400/500/600 for text.
  JetBrains Mono loads 500/700/800 — never call for 900, the browser synthesises it.
- **Monospace is wider**: display steps sit two sizes below a proportional scale.
  Headings run `text-2xl sm:text-3xl lg:text-4xl`, never `text-6xl`. If a headline
  needs more than three lines, shorten the copy rather than shrinking the type.
- Tight tracking (`-0.03em` to `-0.04em`) is required on mono display to keep words
  readable as word-shapes; body copy keeps normal tracking.
- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`. A heading
  whose last line is a single word must be rewrapped, not left.
- Body copy sits between 65 and 75 characters per line. Never below 16px for body
  and never below 14px for interface labels.

## Layout

- Content column: `max-w-7xl` with `1.5rem` horizontal padding, never less than
  16px at any width.
- Sections breathe at `6rem` vertical rhythm on desktop and `4rem` on mobile.
- Related items sit close (8–16px); independent groups separate at 40px or more.
  Equal spacing everywhere is a defect, not consistency.
- Text never touches the viewport edge and never overflows it horizontally.

## Elevation & Depth

- **One depth signal per surface.** A card has either a hairline border
  (`colors.border`) or a shadow — never both, because a thin border plus a wide
  shadow describes the same edge twice and reads as noise.
- The default card is border-only on white. Shadow is reserved for elements that
  genuinely float above the page: the sticky header, popovers, and cards that lift
  on hover.
- Cards do not nest inside cards. Inner grouping uses spacing, a divider, or a
  `sunken` background instead of another rounded container.

## Shapes

- Radius scale: `sm` 12px for inputs and small chips, `md` 16px for inner blocks,
  `lg` 24px for medium panels, `xl` 40px for the main marketing cards, `pill` for
  buttons and badges. Values outside this scale are a finding.
- The generous `xl` radius is deliberate brand geometry, not an accident: it stays
  on marketing cards, but it does not spread to inputs, tables or app chrome.
- No side-tab accent stripes, no coloured left borders on rounded cards, no
  decorative grid or stripe backgrounds.

## Components

- **Button primary**: pill, solid `primary`, white label, no gradient, no glow.
  Hover darkens to `primary-deep`. Motion is a 150–200ms colour and 2px lift only.
- **Button secondary**: pill, white with a `border` hairline, `ink` label.
- **Card**: `surface` background, `border` hairline, `rounded.xl`, `2rem` padding.
  Icon glyphs sit **inline with the heading** inside a `primary-wash` square, or in
  flow without a container — never stacked above the heading as a standalone tile.
- **Input**: `rounded.md`, `border`, white; placeholder text uses `muted` at 4.5:1
  minimum against white, never a lighter grey.
- **Statistic**: Schibsted numeral at 800 in `ink` or `primary`, label in `body`
  at 500, no decorative dot, no coloured variant per stat.

## Do's and Don'ts

**Do**
- Lead with the specific mechanism and the number that can be defended on a call.
- Keep the header's `primary` call to action as the only competing element in the
  first viewport.
- Let whitespace and type size create hierarchy before reaching for colour.
- Verify text contrast at 4.5:1 for body and 3:1 for large text.

**Don't**
- Don't use Inter, Roboto or Geist as the interface font.
- Don't set a monospace headline above `text-4xl`; it overflows and reads as a wall.

- Don't put an icon tile above a heading.
- Don't animate a status dot to imply liveness.
- Don't use gradient text, glow, glassmorphism, or radial halos.
- Don't colour individual statistics differently from one another.
- Don't claim aggregate ROI or hours-saved figures that the owner cannot verify.
