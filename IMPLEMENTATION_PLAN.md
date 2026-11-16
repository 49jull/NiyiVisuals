# Niyi Visuals implementation plan

Prepared 15 November 2026. Preparation and the local homepage implementation are complete. This document supplements the supplied PRODUCT.md rather than replacing it.

## Current implementation status

The user’s first visual feedback requested clearer differentiation from the incumbent site. The revised Home uses a wide typographic opening above landscape photography, a larger Sport category treatment, and a warm-paper personal-story chapter. PRODUCT.md v1.1 records these authorized layout changes.

Astro, strict TypeScript and plain CSS are implemented in the application root. All six Home photographs and exact original Home copy are present. Shared navigation, responsive image components, the full homepage, provenance records, build/lint/type checks and five preservation/scope tests are complete. Desktop/mobile browser inspection and the independent Impeccable review are complete; the reviewer scored four typography fixes resolved. See application README.md, QA.md, DESIGN.md and .impeccable/review/ for current evidence.

**User homepage approval is pending. Do not begin other pages or deploy.** The dev server is local at http://127.0.0.1:4321/. Pending pages use a documented dev/preview-only 302 to the exact existing website paths. Home copy and local photo derivative availability are now resolved for the prototype; owner masters/publication information and all production integration decisions remain open. Owner editing workflow is still deferred until after homepage review. The sections below retain the original staged plan and preparation baseline for reference.

## Project understanding and source map

Niyi Scholten is an Apeldoorn-based photographer whose sporting background connects action with the personal value of an image. Preserve the English first-person identity, Sport/Parties/Lifestyle breadth, original story, service information, direct contact and inquiry process. “On Both Sides” is the selected creative direction, not a proposed public tagline. The goal is relevant photographic exploration followed by an informed inquiry.

Repository root: the current `Niyi redesign` workspace. Application/specification root: `niyi-visuals-product-handoff/`. Keep that extracted package intact; future `src/`, package files and build configuration belong beside its PRODUCT.md. This avoids moving supplied evidence or creating competing specification copies.

| Requested source | Actual supplied location relative to repository root |
| --- | --- |
| Primary PRODUCT.md | `niyi-visuals-product-handoff/PRODUCT.md` |
| research/redesign-strategy.md | `niyi-visuals-product-handoff/outputs/redesign-strategy.md` |
| research/content-inventory.md | `niyi-visuals-product-handoff/outputs/content-inventory.md` |
| research/asset-register.md | `niyi-visuals-product-handoff/outputs/asset-register.md` |
| Supporting records | `niyi-visuals-product-handoff/outputs/{asset-register,link-register}.json` |
| Incumbent screenshots | `niyi-visuals-product-handoff/outputs/evidence/` |

Read all four specification/research documents in full and inspected all nine screenshots. Verified every byte count and SHA-256 in HANDOFF-MANIFEST.json: all 16 entries pass, including the identical PRODUCT.md copies. The asset register has 100 distinct placement IDs, contiguous per-page ordering and counts 6/5/9/5/30/17/27/1 across the eight routes. All records contain observed srcset variants; 25 have zero captured dimensions, which means unloaded at capture, not proven broken. All source alt attributes are empty. The link register contains 156 observed records across eight pages and confirms the three fragment-only gallery inquiry links.

There is no existing application, package manifest, framework, Git repository, hosting configuration or backend to preserve. Node v24.19.0, npm 11.17.0 and Git 2.54.0 are available locally. Compatibility and exact dependency versions will be checked when implementation begins; nothing was installed in preparation.

## Technical direction

Recommend a custom **Astro + strict TypeScript + plain CSS** implementation for the local prototype. The user delegated technical selection, but moving the live site away from Pixieset remains a separate client decision. A Pixieset-only implementation would require a capability check before promising this custom design.

- Pre-render all eight content routes to HTML. Keep existing route names and consistent trailing slashes, with a proper 404. Native links/history and content work without application hydration.
- Use reusable Astro components for shared behavior and photographic primitives, with deliberately different page compositions. Use small TypeScript modules for the Work disclosure, modal mobile navigation, image viewer and inquiry enhancement. No React runtime is needed for current requirements.
- Use CSS custom properties for the specified palette, typography, spacing, grid, geometry, focus and timing. Component CSS handles local layout. Start with CSS transitions; add a small intersection observer only for the selected one-time entrances.
- Use Astro's image pipeline for owned local web sources, producing responsive sizes/formats without upscaling. Preserve immutable masters separately outside public output. Exact registered derivatives may support an appropriate private prototype; record provenance and verify actual image dimensions before use. Production must not depend on assumed permanent Pixieset hotlinking.
- Self-host the selected Plus Jakarta Sans variable and Roboto Mono 400 WOFF2 subsets with their OFL notices and font-display behavior. Verify actual axes and file sizes before selecting preload hints.
- Start with build-time typed content files. The user chose **“Decide after homepage review”** for the owner editing workflow. Do not select or add a CMS yet; keep records independent of templates so a later editing integration has a clear boundary.
- Use npm and a committed package lock for a single small app. At implementation, select compatible supported releases and pin through the lockfile. Plan `astro check` and a production build, plus focused integration/browser checks as functionality arrives.
- Hosting, canonical origin and form provider remain open. The frontend remains static; a real inquiry endpoint needs either a secure external service/function or an Astro server route with a hosting adapter. A build-time static endpoint cannot receive messages at runtime. Choose that adapter/provider together during integration, keeping secrets off the client.

Astro's official documentation confirms [static HTML by default and optional on-demand routes](https://docs.astro.build/en/guides/on-demand-rendering/), [strict TypeScript configurations](https://docs.astro.build/en/guides/typescript/), and [responsive image processing](https://docs.astro.build/en/guides/images/). This supports the recommendation without adding a CMS, database, animation framework or React dependency merely because a skill is installed.

Planned application structure, to create only when implementation is authorized:

```text
niyi-visuals-product-handoff/
  PRODUCT.md / outputs/ / HANDOFF-MANIFEST.json  # existing development evidence
  src/
    pages/             # eight route templates plus 404, added in gated stages
    layouts/           # base document, metadata and dark/paper theme
    components/        # navigation, links, figures, features and later viewer/form
    content/           # approved public page/category/service/FAQ records
    assets/            # approved web image sources processed at build time
    styles/            # tokens, base, typography and responsive utilities
    scripts/           # small browser enhancements
  migration/           # internal copy/asset decisions; never imported into client code
  public/              # only deliberate public files, fonts and license notices
  tests/               # focused behavior and reconciliation checks as needed
  package.json / package-lock.json / astro.config.mjs / tsconfig.json
```

Internal content records retain source page/section, exact original text when available, approved display text and approval/revision status. Photo records retain placement ID, verified master relation, derivatives/dimensions, ordering, desktop/mobile focal points, alt and approved credit/publication state. Service records preserve literal original strings; unconfirmed normalized commercial fields stay unset. A build-time projection emits only public fields; no migration ledger or entire research register is serialized into browser data.

## Visual execution

Follow PRODUCT.md sections 6–8 and 12 exactly for design values and page order. Ink `#0C0C0C` frames Home/About/Work/galleries; paper `#F3EFE9` gives Services and Contact calm practical surfaces. Plus Jakarta Sans supplies expressive display typography and readable 17–18px prose; Roboto Mono is restricted to short metadata. Images remain rectangular and preserve source color/monochrome choices. Typography, cropping and image scale carry the identity.

Home opens with the compact opaque header, factual service/location descriptor and a wide treatment of the original headline on solid ink. The two actions sit alongside its secondary line on desktop; the registered `NV-HOME-01` celebration image spans the container beneath it, followed by the original supporting copy. “View work” and “Let's connect” have clear hierarchy. Keep the celebration landscape on phones when needed to preserve people. No forced fullscreen hero or delayed intro.

The scroll moves through dominant Sport (`NV-HOME-04`), offset Parties/Lifestyle (`03`/`05`), the photographer introduction (`02`) with all five original prose blocks, three compact service rows, then the running photograph (`06`) and source inquiry invitation. The personal introduction is a warm-paper chapter with copy first and an inset portrait, as requested in the differentiation revision. Keep titles/actions tightly associated with each photograph and use correct category destinations. This is six source photo placements with page-specific crops, not three repeating cards.

Implement a fluid four/eight/twelve-column alignment system, bounded wide-screen content and 50–65-character reading measures. Collapse navigation before it crowds. Motion stays within the specified small distances/timings, with static reduced-motion behavior and content visible on failure. Do not add parallax, scroll pinning, novelty cursors, text splitting, generated imagery, gradients or glass decoration.

No DESIGN.md, mockup or UI is authored in preparation. At implementation, record the homepage surface contract from this pinned direction without reopening concept selection, read the applicable Impeccable mode/craft guidance, and document actual implemented tokens after review. Additional skill workflows must respect the user's scope and original photography/copy constraints.

## Skill availability and use

All five named SKILL.md files exist and are readable in this environment; none is missing. Resolve installed locations again if this project moves machines.

| Skill | Planned application |
| --- | --- |
| impeccable 4.6.0 | Applied to preparation: ran context once in the application root and read new-work/shape guidance. Honor the pinned direction. At UI work, read craft-floor immediately before editing; apply typography/layout/responsive/motion guidance and bounded rendered review. No mechanical UI detector or build review was claimed during planning. |
| web-design-guidelines 1.0.0 | Read. Fetch its current official rules when UI exists, then report actionable file/line findings. No UI audit today. |
| vercel-react-best-practices 1.0.0 | Read. Conditional only if React is later introduced; then read the relevant detailed rule files while implementing/reviewing. Not active for the recommended Astro-only components. |
| sites | Read with presentation-led guidance. Use local-only guidance for local work. Read its local preview reference before a future preview; use hosting/source/package tools only if Sites hosting is selected and authorized. No registration, synchronization or publication today. |
| sites-remix | Available and read to verify its boundary; not invoked. The existing Pixieset portfolio is not a Sites-built source and no remix was requested. |

## Stages and acceptance gates

| Stage | Deliverables | Exit evidence / gate |
| --- | --- | --- |
| 1. Foundation and design system | Scaffold Astro/TypeScript when authorized; package scripts and lock; exact tokens/font setup; semantic base layout; authoritative route/category data; source/approved content and photo records; responsive PhotoFigure, links, shared header/footer, accessible menu/disclosure. Resolve Home copy/assets through owner material or focused retrieval of exact missing source. | Type checks/build pass; source IDs and routes reconcile; font/image dimensions verified; keyboard navigation and reduced-motion defaults work. Homepage dependencies explicitly recorded. No other content pages developed. |
| 2. Working homepage prototype | Build the complete specified Home sequence with six real photo placements, original prose, corrected category destinations and restrained motion. Add a local review preview. Keep remaining page routes in the route model; identify them as pending in the review handoff rather than inventing pages or misleading substitute destinations. | Desktop/mobile/tablet composition is reviewable; all implemented controls work; no invented copy or photographic substitutes. Homepage-only scope remains explicit. |
| 3. Visual review and refinement | Review imagery/crops, hierarchy, story completeness, responsive density, navigation, contrast and performance. Apply fresh interface guidelines. Batch screenshot review and material fixes, then confirm. Record actual design system and remaining dependencies. Revisit owner editing workflow after homepage review. | **User reviews the homepage before Stage 4 begins.** A technical/design self-check does not substitute for this user gate. Obtain acceptance or requested corrections before expanding page scope. |
| 4. Remaining pages | Build Work, Sport, Parties and Lifestyle, then About, Services and Contact, plus branded 404. Preserve all eight source routes, all source placements and page-specific composition. Implement shared accessible viewer, source price strings and both open FAQs. Contact delivery can remain guarded pending Stage 5. | Route/category/anchor tests pass; 100 placements accounted for; viewer/menu focus works; original copy and commercial ambiguities remain traceable. Gallery 4 returns an honest 404. |
| 5. Functionality and integration | Select hosting/form delivery with owner; implement server validation, spam/rate controls and honest send/failure states; editable category context; direct contacts; approved privacy and applicable consent; real metadata origin, sitemap and share previews. Decide whether a CMS is in scope based on post-review editing choice. | Controlled adapter tests pass, errors preserve input and duplicates are prevented. Real receipt is tested only through an arranged destination/data authorization. Hosting/canonical/privacy and commercial gates resolved before a production readiness claim. |
| 6. Testing and final quality assurance | Production build/deep-link/status checks; route and asset reconciliation; keyboard/screen-reader review; contrast, zoom, no-JS, reduced-motion and slow/broken media; lab performance/bundle/image checks; output audit for internal/secret leakage. | Document implemented/tested/unverified/owner-dependent items. Check 320/390/768/1024/1366/1920px, intermediate widths and landscape/zoom. No deployment is included unless later requested. |

Build behavior checks as each risky interaction lands; Stage 6 is final verification, not the first accessibility test. Use meaningful tests for link mappings, asset reconciliation, modal focus and form state/delivery boundaries, not tests that merely repeat CSS values. Target PRODUCT.md budgets (initial compressed JS about 100KB, fonts about 120KB, initial mobile Home/Contact transfer about 1MB) and distinguish lab results from unmeasured field Core Web Vitals.

## Missing material and decisions

| Item | Current handling | When it matters |
| --- | --- | --- |
| Complete original prose export | Home hero support, five introduction blocks and closure; full About; service descriptions, FAQ answers and other page prose are not fully exported. Preserve references. Owner export is preferred; narrowly retrieve exact source paragraphs if needed. Never publish inventory summaries as copy. | Home material before its complete prototype; remaining prose before its page migration. |
| Photo binaries/masters, rights and credits | Only URLs and screenshots are bundled. Six Home derivative candidates are registered but were not fetched/tested for live availability today. Verify exact variants privately; obtain masters/publication information for migration. | Private prototype quality; final release and media independence. |
| Alt text and focal points | None supplied as descriptive source alt; inspect each actual photo and write visible-subject descriptions without guessed identities. Confirm credits where needed. | Each implemented photograph. |
| Webfont binaries/licenses | Families are specified, but no font files are included. Obtain the correct subsets/axes and preserve OFL notices. | Stage 1. |
| Currency and commercial terms | Seven literal price strings preserved. Currency code, “70 MIN +”, slash photo counts, taxes/travel and other policies remain open. Do not convert dollars to euros or invent terms. | Before final public commercial copy/release; does not block Home without prices. |
| Platform migration, host/domain and legacy control | Custom local prototype recommended; no live migration decision recorded. Keep original paths. Resolve origin, redirects and any attribution obligations with actual control/platform terms. | Integration/release; does not block local art direction. |
| Inquiry provider and receiving configuration | No endpoint/credentials/delivery contract supplied; visible Gmail does not establish backend configuration. No real inquiry or test message sent. | Stage 5, before claiming a working delivered form. |
| Privacy, retention and actual tracking | Owner-approved information missing. Add consent controls only for actual nonessential technology; no decorative banner or invented policy. | Data integration/release. |
| Owner editing workflow | Explicitly deferred by user until after homepage review. Keep a content adapter boundary; no CMS selected. | Post-review decision. |
| WhatsApp and response expectations | FAQ mention retained; number/account and response time unconfirmed. No new deep link or response promise. | Only if these features/copy are requested. |
| Gallery 4 history and changing biography affiliations | Repair internal Lifestyle links; retain 404, no guessed permanent redirect. Preserve original biography wording and request confirmation for factual updates. | Remaining pages/release; no new discovery crawl. |

These dependencies do not require a broad questionnaire before foundation work. Ask only when a factual choice blocks its dependent work. Unanswered questions do not authorize business claims or publication.

## Documentation differences resolved for this plan

- The requested `research/` paths are absent; complete supplied equivalents live under `outputs/`. Do not create duplicate editable research copies.
- PRODUCT.md is more specific than the strategy: all gallery placements remain public by default, and supporting About/Services/Work imagery remains in the page specification. The strategy's shorter gallery edit and optional montage are not current implementation instructions.
- PRODUCT.md requires all five Home prose blocks, whereas the strategy permits a shortened excerpt only with approval. Preserve the full Home copy until an approved edit exists.
- The older PRODUCT.md sequence combines Home/Work/galleries. The current user explicitly requires homepage review first; the six-stage plan above supersedes that sequence.
- The dollar signs in a Netherlands-based offer are unresolved source content, not an implementation typo. Public price meaning requires owner clarification.
- The original-site screenshots are audit evidence, not redesign comps or a layout constraint. On Both Sides is already chosen; no new concept tournament is needed.

## Preparation handoff (historical baseline)

This section records the initial preparation delivery; see the current implementation status above.

Added repository-level AGENTS.md, this plan and .gitignore; initialized local Git with a baseline commit after verification. Supplied documentation/evidence remains byte-identical. No application source, dependency installation, dev server, mockup, external Site, deployment, client-site change or message submission was performed. The next implementation task should begin Stage 1 and then build Home for Stage 3 review, stopping before remaining pages.

## Current typography revision

User requested the typeface from docs.aponic.org and small color accents. PRODUCT.md v1.2 records verified Plus Jakarta Sans variable for headings/prose/UI, continued sparse Roboto Mono metadata, and restrained muted coral actions/arrows. This supersedes the original font and action-color recommendation; the homepage review gate remains.

## Superseding implementation — 16 November 2026

User authorized a complete editorial portfolio redesign, replacing the dark visual system and earlier homepage-only gate. Recoverable baseline: Git tag `backup/before-publication-redesign-2026-11-16` at `2f8eac8`. Preserve Astro, add a React/Motion island for Grid/Index/filtering/shared detail expansion, build eight static descriptive selection URLs, preserve factual content/contact and original service page, and review desktop/mobile plus history/focus/reduced motion. PRODUCT.md v2.0 governs current scope; no deployment.
