# QA smoke suite

One command, no manual steps:

```bash
pnpm build      # required once; the suite starts and stops the server itself
pnpm qa:smoke
```

Exit code is `0` when everything passes and `1` when anything fails, so it can gate a push
or a CI job.

## What it covers

- The five entry pages: `/`, `/en`, `/blog`, `/en/blog`, `/politica-privacidad`.
- Each page answers 200, ships its `h1` and its content **in the HTML** (not only after
  hydration), has no broken `#anchor`, and logs no console error.
- Both home pages render the same number of sections. This is the check that catches one
  language silently losing a whole block.
- Every internal link reachable from those pages resolves below 400.
- Desktop: cookie banner appears, accepting dismisses and stores the choice, header CTA
  reaches consulting, language switch reaches `/en`, FAQ questions toggle, the calculator
  updates its figures, the contact form submits and shows its confirmation, the chat sends
  and paints a reply.
- Mobile 390x844: the cookie close button has a touch area of at least 36px, the hamburger
  opens the menu, choosing an option closes it and scrolls to the target.

## What it does not cover

- **The form and the chat are tested against intercepted responses.** No email is sent and
  the real chatbot is never called. The endpoints are checked separately with `curl`.
- Copy, claims and design quality. It verifies shape, not judgement.
- Pages outside the five above. A full sweep of all 380 sitemap routes is a separate, slower
  run and is not written yet.

## Browser

No browser is downloaded. The suite uses, in order: `QA_CHROMIUM`, Playwright's own cache,
Chrome, Edge. On Windows the last two are already installed.

## Options

| variable | meaning |
| --- | --- |
| `QA_BASE_URL` | Test a server that is already running instead of starting one |
| `QA_CHROMIUM` | Explicit path to a browser binary |

## Two things the suite had to learn the hard way

The site swaps the chat for a static placeholder when it detects automation, and the check
is `navigator.webdriver` plus a `Headless` substring in the user agent. The suite neutralises
both, otherwise the chat looks missing when it is fine.

The contact form validates with zod across five fields including a `select`. Filling only the
text inputs leaves it invalid and nothing is submitted, which reads as a broken form. Fill
every visible field.
