# Homepage verification — 15 November 2026

Scope: local Home and shared foundation only. No deployment, client-site mutation or inquiry submission.

## Automated checks

- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run lint`: pass (ESLint 10, TypeScript and Astro rules).
- `npm run build`: pass; exactly one HTML content page.
- `npm run test`: all 5 tests pass. Includes six photographic placements, original Home text, category routes, preview semantics, research exclusion and all 16 current handoff manifest entries.
- `npm audit`: zero vulnerabilities, including development tools after a scoped transitive dependency override.
- [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) fetched and applied during UI review; PRODUCT.md controls source-copy voice, pinned typography and scope where generic guidance differs.
- Impeccable detector: the revision reports font-ramp advisories against the earlier design record. Intentional Home story/mobile/category display roles are now recorded in DESIGN.md. Earlier generic “Roboto” matching was a false positive for the prescribed Roboto Mono metadata role.
- Raster provenance scan: 54 source/build raster files checked, none missing provenance. Sources and generated derivatives are accounted for separately.

## Browser checks

Desktop and mobile layouts inspected in the in-app browser. Additional overflow/type/header checks at 320/390/768/1024/1366/1920px: no horizontal document overflow. The browser reserves a scrollbar, so capture content widths may be 15px narrower than the requested CSS viewport.

- All six image sources load. Desktop and mobile use separate responsive ratios/focal treatment; celebration remains landscape on mobile.
- Header Work disclosure opens by button; Escape closes and returns focus to its control.
- Mobile menu opens with named expanded state and initial Close focus. Native modal dialog isolates background; keyboard traversal remains within it. Closing returns focus and restores body scrolling/position.
- First Escape closes an expanded Work disclosure; next Escape closes its containing menu.
- Native Back to top now targets a static document-start marker instead of the sticky header.
- Hero actions fit together at 390px after the gap correction; narrow-screen layouts remain usable without overflow.
- Console inspection: no reported warnings/errors during the exercised paths.
- Source/role review confirms reduced-motion branches and no-JavaScript navigation fallback. Browser preference emulation and a JavaScript-disabled session were not available through this browser capability set, so those are code-reviewed rather than runtime-certified.
- Supporting prose corrected following independent review to 18px tablet/desktop and 17px mobile, with 1.6–1.65 leading (introductory identity line remains a larger heading-like paragraph).

The first screenshot attempts contained capture artifacts from unloaded/offscreen media and sticky-header positioning; they were rejected and replaced. Review evidence must show all intended image regions and be captured from the document start. Final review files supersede earlier captures.

## Performance evidence and limits

Production browser enhancement is inlined: 2,464 bytes uncompressed / 987 bytes gzipped at measurement. No React runtime or animation library. CSS approximately 23KB uncompressed; self-hosted font files total 102,784 bytes, below the specified 120KB font target. Hero responsive WebP variants range about 27–219KB (480–1920px). No high-resolution collection preloading or third-party scripts.

These are build asset measurements, not a Lighthouse score or field Core Web Vitals claim. Initial transfer varies with viewport, device pixel ratio, lazy-loading thresholds and browser cache. Field LCP/INP/CLS and a full release accessibility/device pass remain unmeasured.

## Independent review

Impeccable finish verdict: SHIP for local homepage visual review. A verdict pass scored the four named body typography corrections: 4 resolved, 0 partial, 0 unresolved. This is a review of the homepage and those fixes, not a production or whole-site certification. User visual approval is still pending.

## Scope and release dependencies

Only Home has been developed. Dev/preview 302 handoffs make pending navigation useful without claiming the other pages are ready; the future Services anchors do not exist on the original site. Gallery 4 returns HTTP 404. Production output contains no redirects or other content pages.

Original Home copy was recovered, but copy exports for other pages, owner masters/rights/credits, currency and terms, privacy, inquiry delivery, hosting/origin, redirect control and owner editing workflow still require later work. Canonical and sitemap configuration is deferred until the actual origin is chosen. The homepage stays noindex throughout local review.

## Differentiation revision — 15 November 2026

The user liked the initial homepage but requested greater visual separation from the original. Revised the opening into a full-width typographic composition with actions before a landscape image, gave Sport a photograph-left/large-caption-right spread, broadened the desktop Parties crop, and changed the complete personal story to a paper-colored chapter with copy first and an inset portrait to the right. All source copy, six photo placements, nav destinations, font families and restrained-motion behavior are retained.

PRODUCT.md v1.1 and its identical distribution copy record these user-authorized layout changes; their manifest entries were refreshed. The other 14 supplied research/register/evidence files remain unchanged. The body sizes remain 18px tablet/desktop and 17px mobile. Browser checks at 320/390/768/1024/1366/1920px show no horizontal document overflow. This revision supersedes the initial layout evidence; the homepage approval gate remains pending.

The independent refinement review also returned SHIP for local homepage visual review, with no material fix requested. The revised paper chapter was checked in-browser for its actual prose colors and dark focus treatment. See `.impeccable/review/finish-review.md` for the current review scope.
