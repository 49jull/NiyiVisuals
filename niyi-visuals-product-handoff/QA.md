# Editorial portfolio verification — 16 November 2026

Scope: complete local editorial core. No publication, client-site mutation, form submission or film service claim. Previous dark version is recoverable through the named backup tag.

## Build and source checks

Astro 7 + strict TypeScript retained; React 19 and Motion 14 provide the requested connected interactions. Current checks: type diagnostics 0 errors/warnings/hints; ESLint pass; static build pass; all five built-output tests pass; npm audit zero vulnerabilities. Final command results are retained in the task output.

The build produces 17 HTML files: Home, six existing-path entry points, eight descriptive selection pages, Services continuation and a branded 404. Services stays linked to the authoritative original offer. Gallery 4/unknown paths remain honest 404s. All six original Home placements and all original Home prose survive. All 100 source placements remain accounted for. All 16 current handoff manifest entries match; the 14 original research/register/evidence files are unchanged. Planning, ledgers and evidence are excluded from public output.

## Browser observations

One desktop/mobile review and its correction confirmation were performed in the in-app browser. Current captures: `.impeccable/review/publication-desktop.jpg`, `publication-mobile.jpg`, the corresponding hero views, Index, portrait detail, mobile detail/menu and forced failure. Full Grid captures show all eight covers and the real portrait.

- Grid/Index and category filtering retain project identities/order. Rapid repeated normal-motion input settles to Index / All / eight selections with matching URL and live status. Controls sit above the animated photographs, stay in reach and keep stable active-label widths.
- Opening a cover changes to its static project URL and shows the same photograph. Back, Escape and the close link work. Exact restoration was observed at scroll 0 → 0 and in a filtered Index at scroll 97 → 97, with focus returned to the originating photograph.
- Direct project visits, refresh, next-selection links and return navigation work. Supporting sequences use real registered images, factual category/medium and descriptive captions; no fictional dates/clients are displayed.
- The mobile native dialog reports expanded true, initially focuses Close, closes on Escape, reports false and returns to Open menu. Project Shift+Tab wraps from the close link to the final contact link; its background is inert and body scroll is locked while open.
- A separate temporary production-output fixture deliberately returned 404 for a cover. The visible error frame retained its dimensions/description and Retry control. Retry issued a fresh URL and remained honest when failure persisted; navigation stayed available. No failure-injection code or fixture is in the public build.
- Calm mode was exercised with `?motion=reduce`: rapid view/filter changes and project opening reported the reduced flag and no spatial transform matrices. All parent, image, caption and indicator layout props explicitly disable spatial motion; MotionConfig also respects user preferences. The OS preference itself was not separately emulated by the browser tool.
- Reflow measurements at 320/390/768/1024/1366/1920px showed eight projects and no horizontal document overflow. See `publication-responsive.json`. The reserved scrollbar explains content widths 15px narrower than requested viewports. The actual default preview was also inspected.
- About and Contact entry links reach their sections with correct document titles. Email/tel/social destinations were inspected; no messages were sent.

## Visual corrections

The final Sport cover now preserves the subject’s complete head on desktop/mobile. Portrait detail fits the actual natural-ratio photograph to the viewport, removing the gray side matte (desktop observed frame 520×780px). Menu focus/state, exact scroll-zero restoration, cached image failures and explicit reduced-layout behavior were corrected. The independent reviewer’s final bounded verdict is recorded in `publication-finish-review.md`.

Fresh official Web Interface Guidelines were applied. The manual detector ran once: 41 advisories referenced the replaced type ramp, three referenced new contact neutrals, and one generic saturation warning named the explicitly requested Plus Jakarta Sans. The new design record documents those values and intentional display roles; this is not a claim of automated accessibility certification.

## Performance and limits

The earlier measured combined client JavaScript was approximately 123KB gzip (React + Motion + the island), about 23KB above the original aspirational 100KB target. This deliberate dependency cost supports the newly requested layout/shared-element interactions; there is no WebGL, GSAP, UI kit, tracker or third-party runtime. Final file-size measurements may vary slightly after source refinements. Only one self-hosted variable font is loaded. Images use generated 480/960/1600px variants bounded by source size, eager first covers, lazy supporting imagery, dimensions and reserved frames. Provenance scan: 96 source/build rasters, 0 missing.

This was local lab/browser verification, not field Core Web Vitals, physical-phone performance, a multi-browser matrix, a dedicated screen-reader session or browser 200% zoom testing. The 320px reflow path and accessibility tree were inspected. JavaScript-free links/content are verified in built HTML; JavaScript-disabled browser mode was not separately exercised. Master images, release permissions, production origin/hosting, price ambiguities and any future inquiry provider remain unresolved release dependencies. No fabricated success or production-readiness claim is made.

Final confirmation: all build/type/lint/test checks passed after cleanup; 17 pages built, five tests passed, zero npm vulnerabilities and clean diff whitespace. Route probes returned 200 for all local core paths, 302 to the exact original Services URL, and 404 for Gallery 4. Final combined client JavaScript measures 122,031 bytes gzip. Next-selection confirmation observed “In motion”, Back-to-work focus and panel scroll 0. The independent verdict pass returned **ship**, scoring all six listed fixes resolved within the documented limits. The temporary failure server was stopped; the normal preview remains running.


## Interaction refinement — 17 November 2026

Scope preserved: same world, photographs, copy, identity, routes and contacts. Saved the preceding committed version at `backup/before-interaction-refinement-2026-11-17` (`ae925e7`). No dependency, public deployment, client-site change or message submission was added.

Inspected Lena Harrer’s live homepage, project grid and detail navigation. Its computed lower-edge treatment uses overlapping transparent masks with progressively stronger backdrop blur. The implementation here is original and shorter, using five layers with context protection; no reference assets, cursor or layout were copied.

One batched desktop/mobile review and correction confirmation covered:

- Real hover observed through native pointer/scroll input: the inner image approaches scale1.03 while frame/crop/text geometry stays fixed. The small View selection cue and caption accent make the destination clear. Keyboard Tab reached the next image, supplied matching feedback and cleared the edge blur. Phone viewport showed the cue without hover.
- Offscreen photos were initially armed while first-view photos were already fully visible. Scrolling changed their arrival states once. Six previously arrived photographic IDs stayed arrived after Sport→All filtering; the cache did not replay their entrance. No stagger, scroll hijacking, parallax or animation loop is present.
- Desktop at1440×1000: actual blur strip120px, five masked filters .5/1/2/4/8px, no background fill, pointer-events none. The active edge was visually inspected without hard bands. Phone at390×844: strip64px, strength .6, no horizontal overflow. Complete source image crops/portrait-landscape identities remain intact.
- Image captions, cues and reading/footer content mute the effect; the contact screenshot measured muted=true, opacity0, visibilityhidden and pointer-eventsnone. Email/tel/social actions and final Back-to-top remain readable and accessible. Focused email received a visible outline; no email was sent. Native mobile menu focused Close, reported expanded=true and suppressed the blur, then Escape returned to the page.
- Grid/Index and Sport filtering retained identity/order, accurate status and URLs. Opened a selection, used browser Back, and observed exactly69.5px→69.5px restored scroll plus originating focus in filtered Index. Phone project entry worked; Escape followed by another native Escape left the user on the correct gallery URL. Exiting panels are inert/aria-hidden and stop intercepting input; close requests are guarded.
- `?motion=reduce` exercised rapid Grid/Index/filter/open/close: reduced=true, blur muted, photographed arrivals at opacity1 / transformnone, all functionality retained. OS preference was not independently emulated; the existing useReducedMotion/MotionConfig and CSS media path remain active. Reduced transparency, forced colours and unsupported CSS use the sharp fallback by source inspection.
- Reflow checks at320/390/768/1366/1920 and844×390 landscape: all8 selections and no horizontal document overflow. Measured edge heights were64/64/122.875/108/129.594 and80px respectively. Safe-area/dynamic-height CSS is present; actual changing mobile browser chrome was not hardware-tested.

Current evidence: `.impeccable/review/interaction-desktop-edge.jpg`, `interaction-mobile.jpg`, `interaction-mobile-footer.jpg`, `interaction-responsive.json`. The earlier independent publication verdict applies to the previous layout revision; this refinement was reviewed by the implementing agent and does not claim a new independent certification.

Type check: zero errors/warnings/hints. ESLint and static build pass; all five meaningful built-output/source-integrity tests pass. Fresh official Web Interface Guidelines were applied. The one manual detector pass reported contextual type advisories and mask-alpha/existing-neutral color advisories, documented narrowly in DESIGN.md. Images remain responsive, lazy below the first covers, with original geometry and provenance. New work uses existing Motion and native IntersectionObserver; resize listeners rebuild only the bounded edge geometry, with no scrolling listener or per-frame React updates. The current combined client JavaScript measures 123,071 bytes gzip, an increase of 1,040 bytes over the previous revision.

No physical-phone FPS, dedicated screen reader, broader browser matrix, older-browser rendering or field Core Web Vitals claim is made. The CSS feature fallback and preference branches are source-verified; local viewport and keyboard/pointer paths were exercised. The preview remains local.
