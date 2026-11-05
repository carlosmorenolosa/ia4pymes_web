# Feature: blog to service page links

Branch: `feat/blog-service-links` · Engram mirror: PENDING (engram not connected).

## Objective
Make blog posts pass authority to the 4 service pages (ES + EN) with descriptive keyword anchors, automatically from the post template, without editing the 384 posts by hand.

## Scope (authorized by user 2026-11-05)
Part 1 only: template-level related-service block with descriptive anchors. Part 2 (cannibalization) is deferred; no slug, title or content changes in `lib/blog-data.ts`. Home H1/FAQ untouched (user decision).

## Constraints
- Visual parity with the existing post template and home styles; no new visual language.
- Server-rendered links in HTML. Service chosen by deterministic mapping (post category/slug/title keywords -> service id), with a sensible default; a post gets 1 primary + at most 1 secondary service link.
- No invented facts in copy. no-ai-slop for any copy.

## Tasks
- [x] T1 - Mapping helper + "related service" block in ES and EN post templates. Route: delegated direct.

## Checks
No test runner; build + tsc + fetched HTML inspection on a sample of posts. Native review unavailable (gentle-ai not installed).

## Progress
- 2026-11-05: branch and document created.
- 2026-11-05: T1 implemented (uncommitted): lib/blog-service-map.ts, components/related-service.tsx, ES/EN post templates (block before CTA, footer anchors). tsc and build pass; 20 fetched posts (ES+EN, all 4 services + default) verified on prod server. Awaiting parent review/commit.

