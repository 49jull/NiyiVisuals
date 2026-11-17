# Niyi Visuals — product and implementation specification

<!-- impeccable:product-schema 1 -->

**Version:** 2.1 · **Prepared:** 15 November 2026 · **Status:** planning specification for review; no implementation or publication authorized by this document alone.

**Creative direction:** On Both Sides. **Existing website:** [Niyi Visuals](https://niyivisuals.mypixieset.com/)

This is the primary specification for a future Codex implementation. It consolidates the completed research into requirements; do not repeat the discovery crawl, regenerate concepts, or treat the client as fictional. Read this document and its supplied evidence before implementation. Execute a build only when a subsequent user instruction authorizes it. A deployment, client-domain change, form test message, or edit to the existing Pixieset website is not authorized by the present planning task.

The canonical copy belongs at `PRODUCT.md` in the project root. `outputs/PRODUCT.md` is an identical distribution copy; edit the root copy and regenerate the distribution copy together. All project paths below resolve from the project root, including when this file is opened through the distribution copy. The handoff archive includes this file at its root and the referenced `outputs/` files beneath it. Do not upload these planning files, research captures or registers into a public website build.

This deliberately extended PRODUCT.md includes visual requirements, page structures and QA because the user requested one comprehensive implementation specification. Later skill workflows may derive supporting design records from it, but must not discard these requirements or replace this direction with a new concept exercise.

## Link removal — current user instruction

Remove all visitor links and redirects to the old Pixieset website, including the original-collection actions and Services handoff. Keep the service descriptions as plain content. Do not replace these destinations or change other content, layouts or interactions. This overrides earlier requirements to link to the original collections/services; research and provenance references remain private and intact.

## Authorized interaction refinement — 17 November 2026

The user likes the existing editorial world and requested a focused interaction/presentation pass, using Lena Harrer’s live website as the main behavioral reference. Preserve content, identity, routes, filtering and the useful layouts below. This revision augments the current motion contract rather than introducing another visual direction.

- Interactive covers enlarge inside their fixed frame by 1.03 on fine-pointer hover and keyboard focus; captions shift by 2px and a small “View selection” cue clarifies the action. Touch/phone cues remain visible without hover. Reduced motion keeps colour/focus/action feedback without spatial zoom.
- Photographs/captions below the initial viewport settle once through a 14px / 0.72→1 entrance over 460ms, with no stagger or initial full hiding. Cache arrivals through filtering/reopening. First-view and JavaScript-free content remain immediately visible. Use native scrolling and the existing Motion system; no parallax, cursor effect, loop or extra animation dependency.
- Add a fixed, click-through progressive BACKDROP blur: five overlapping masked layers, 0.5/1/2/4/8px, in a bounded desktop strip of 80–132px. Phone strip is about 64px plus safe-area, capped at 94px, with 0.6 blur strength. No colour wash or opaque gradient; preserve underlying imagery. Fade it out where captions/action cues or readable sections meet that strip, for keyboard focus, and while menus/projects are open. Suppress for reduced motion/transparency and forced colours; unsupported backdrop/mask browsers retain a sharp edge.
- Keep shared photographic identities and layout spring continuity. Prevent duplicate close requests; exits release pointer interception while focus/scroll restoration stays reliable. Preserve exact zero and nonzero scroll positions, Grid/Index, filters, direct URLs, refresh and browser Back.
- Slightly shorten the opening and selected inter-image gaps to reach photography earlier, preserving all crops/aspect decisions and the eight-selection composition. Maintain safe areas and clear mobile targets.
- Save the prior version at `backup/before-interaction-refinement-2026-11-17` (ae925e7). Verify desktop/mobile scroll, hover/focus/tap, blur contexts, project transitions, Back/rapid input, footer and reduced motion. No deployment or new factual content is authorized.

## Current authorized redesign — 16 November 2026

The user explicitly replaced the earlier dark homepage direction with a complete, local editorial portfolio experience. This section supersedes conflicting visual, scope, component and motion requirements in the historical specification below. All factual content, contact, provenance and no-publication constraints still apply.

- Preserve Astro 7 and TypeScript; add a React island using Motion through `motion/react` for connected gallery layouts and shared photograph transitions. No framework migration, CMS, WebGL, GSAP, Atelier, registration or deployment is needed.
- Visual world: near-white #F7F7F2, charcoal #24251F, muted #66675F, fine #D0D1C8 rules and restrained vermilion #BD361E. One self-hosted Plus Jakarta Sans family supplies every role. Retire the old dark/coral system and Roboto Mono usage.
- An image register brought to life: compact Niyi Scholten / Work / About / Contact header; the original action/emotion headline and real Apeldoorn introduction; eight photographic selections in an asymmetric editorial grid, with real work visible in the first viewport. Grid/Index controls and category filters share stable image identities and interruptible Motion layout springs. Index shows category and descriptive title, omitting unsupplied years/client metadata.
- Eight descriptive selections are drawn from registered client photographs. Titles describe visible subjects, not asserted commissions or historical events. Selections may combine images from one source category without implying they depict one event. The full source collections remain reachable through explicitly labelled original-site archive links; the 100 original placements remain accounted for in the ledger. Do not substitute demonstration or stock media for the client's available work.
- Local project URLs `/work/[slug]/` are statically rendered and refreshable. From the gallery, the selected photograph expands into a full-window reading panel. Closing, Escape and browser Back restore the exact view, category, scroll position and focus. Next-selection links work; modifier-click and JavaScript-free links retain normal navigation. Direct project visits have an obvious return to work.
- Preserve all five original Home introductory paragraphs, supporting text, invitation, portrait, category/service links, real email/phone/socials and source photo treatments. About and contact are readable sections with their existing paths as entry points. `/portfolio/` and category paths are local entry points. `/services/` continues to the authoritative existing service page; unresolved prices/terms are not reinterpreted. No working form integration existed; contact uses honest mailto/tel links.
- The user now authorizes implementing the complete core experience, superseding the earlier homepage-only gate. No additional factual biography, client names, dates, endorsements or filmmaking service claims may be invented. Film support can be added when actual video media is supplied; none exists in the current package.
- Use ordinary scroll, clear touch targets, visible focus, native modal navigation, inert project background, keyboard containment/return, responsive optimized images, stable dimensions, image failure states and reduced motion. No sphere, cursor trick, parallax, sound or decorative animation.
- Verify desktop/mobile in one batched review, correct meaningful issues, confirm, then finish. Record checks and limits in QA.md. Public launch remains unauthorized.

The earlier design rules below are retained as a research and migration baseline, not the current visual acceptance target. The factual contract remains authoritative wherever this revision does not change it.

## 1. How to use this specification

### Requirement vocabulary and authority

- **MUST / MUST NOT:** acceptance requirements for the future implementation.
- **SHOULD:** preferred approach; document a concrete reason for any departure.
- **OPTIONAL:** excluded from the initial build unless deliberately selected later.
- **Observed:** recorded from the client's public website on 15 November 2026.
- **Specified:** a design or development decision derived from that research and the user's request; not a claim about the existing website.
- **OPEN:** missing information, an unresolved owner decision or an unverified integration. Do not invent its answer.

Authority order: current user instructions; this specification's chosen design and functional requirements; the content inventory for observed information; asset/link registers for recorded IDs and destinations; the strategy for rationale and optional alternatives; evidence screenshots for the incumbent appearance. When factual sources conflict, flag the specific discrepancy and preserve the original record. Do not quietly turn a proposal into a business fact.

On Both Sides is the direction to specify and later implement. Matchday Notice and The Personal Edit remain research alternatives, not an invitation to change the selected direction or mix three styles. The existing screenshots show the old site, not approved redesign mockups.

### Evidence on hand

| Root-relative file | Purpose | Required use |
|---|---|---|
| `outputs/redesign-strategy.md` | Full audit, creative reasoning, three concepts and recommendations | Background/rationale; this file resolves initial implementation choices |
| `outputs/content-inventory.md` | Eight pages, section order, factual content, original short labels/prices, functions and omissions | Content preservation reference; its summaries are not replacement website copy |
| `outputs/asset-register.md` | Human-readable list of all 100 image placements | Cross-check image identity and original page association |
| `outputs/asset-register.json` | Machine-readable IDs, URLs, srcset variants and capture metadata | Primary asset reference; never substitute guessed URLs |
| `outputs/link-register.json` | Distinct observed label/destination combinations by source page | Audit baseline; repair known bad mappings rather than copying them |
| `outputs/evidence/` | Nine existing-site screenshots | Desktop/mobile/tablet composition, menu, form and linked-error evidence |

Evidence files are `home-desktop.jpg`, `home-mobile.jpg`, `home-tablet.jpg`, `portfolio-desktop.jpg`, `services-desktop.jpg`, `contact-desktop.jpg`, `contact-mobile.jpg`, `menu-mobile.jpg`, and `gallery-4-error.jpg`.

**Access contract:** keep these source documents and registers in the same checkout or copy the supplied handoff archive intact. Verify the accompanying handoff manifest when relocating the package. Do not rely on earlier chat context, a machine-specific absolute path or a skill-cache version being available elsewhere. If a required source file is missing, locate the supplied package or report the exact missing file; do not restart broad research or fill the gap with generic content.

**Availability limit:** the package contains image URLs and existing-site screenshots, not the 100 original photo binaries, master files, publication permissions, or a complete owner-approved prose export. Long prose was inventoried by content and source location in the research. Obtain the owner's original export for verbatim migration. Focused retrieval/verification of a missing source paragraph or asset during implementation is permitted when needed; it is not a reason to repeat the eight-page audit. Do not publish inventory summaries as client copy.

## Platform

web

## Stack

**OPEN.** No framework, package manager, application scaffold or hosting target has been selected. The existing site is on Pixieset; it is not an identified OpenAI Sites project. There is no current application codebase to preserve in this planning workspace.

The architecture SHOULD be pre-rendered or server-rendered pages with small progressive enhancements for navigation, image viewing and inquiry. A client-heavy application is unnecessary for eight mostly static pages. React, Next.js, Tailwind, a CMS, an animation library, a database and a new hosting service are not requirements merely because supporting skills exist.

At implementation start, reuse a suitable existing codebase if one has been supplied. Otherwise resolve Pixieset versus a custom site, then select a stack consistent with that decision. Ask one focused question if the user has not selected or delegated this consequential choice. Independent content mapping and design preparation can continue. Do not turn a recommendation into a recorded user decision.

If remaining on Pixieset, verify its actual layout, font, URL, accessibility, form and attribution capabilities before promising custom behavior. If implementing through Sites, apply the installed Sites workflow and the user's current build/preview/publication scope. Do not infer permission to register or publish a Site from this planning document.

## 2. Users, purpose and positioning

### Users

The following audience groups are interpretations supported by the published categories, not measured customer segments:

| Audience | Job on the site | Needed evidence | Desired path |
|---|---|---|---|
| Athletes, teams and sports organizers | Assess action, timing and personal understanding | Action, athlete portraits, atmosphere, celebrations, photographer's sporting perspective | Sport → Services or Contact |
| Party hosts/event organizers | Assess atmosphere, people and coverage options | Real groups, crowds and spontaneous interactions; duration options | Parties → Services → Contact |
| Individuals seeking lifestyle images | Assess portrait style and fit | Outdoor/studio-style portraits and personal moments | Lifestyle → Contact |
| Social referrals | Confirm identity and find relevant work quickly | Consistent name/handle, obvious category links and contact | Home or gallery → inquiry |

Audience proportions, budgets, primary acquisition channel, geographic reach and commercial usage needs are OPEN. Balance all three existing categories, with Sport first; do not reposition the business as exclusively elite football or luxury portraiture.

### Product purpose

Enable visitors to understand who Niyi is, see relevant photography, understand the published offer and send a relevant inquiry. The site supports inquiry and discussion; it MUST NOT imply an instant reservation, confirmed availability or a purchase without an actual approved process.

Success means correct and understandable navigation, effective image exploration, readable service information, accessible contact and confirmed inquiry delivery. Later measurement may consider gallery-to-contact and services-to-contact usage; no current conversion baseline or numerical improvement promise exists. Analytics are optional and require a deliberate privacy-aware decision.

### Positioning and brand commitments

Observed identity: **Niyi Scholten**; website/copyright identity **Niyi.visuals**; public profiles use **Niyi Visuals** / **niyi.visuals**. Base: **Apeldoorn, The Netherlands**. Preserve these relationships and first-person tone. This is a personal photography business, not an invented multi-person agency.

The distinguishing story is an athlete's understanding of meaningful moments: the site describes football, injuries and a move behind the camera. The resulting design should feel confident, energetic, human and carefully edited. Premium means photographic editing, readability and craft; it does not mean unsupported luxury claims or artificially exclusive language.

The website states football experience involving FC Twente, Ajax and Vitesse and mentions Ryan Gravenberch, Brian Brobbey and Kenneth Taylor. Treat these as existing biographical claims. Preserve original wording from the owner export; verify any updates to changing affiliations. These names MUST NOT become clients, endorsements, partner logos or a credibility wall.

### Product principles

1. The client's real photographs and personal story supply the distinction.
2. Relevant work and contact must be easy to reach; art direction cannot obscure the task.
3. Preserve factual information and content provenance; make editorial changes traceable.
4. Use page-specific composition inside one coherent system.
5. The website must remain effective with motion disabled, slow images or keyboard-only use.

## 3. Scope, constraints and existing defects

### Initial implementation scope, once authorized

Eight content routes; shared navigation/footer; three category collections; responsive real photography; accessible image enlargement; existing service/price information and two FAQs; contact form and direct contacts; metadata/canonical/sitemap handling; branded 404; applicable cookie preferences and owner-supplied privacy information.

MUST NOT add a store, client account/login, blog, booking calendar, checkout, deposits, newsletter, social feed, chatbot, translations, testimonials, awards, statistics, fictitious case studies or a fourth paid service without new instructions and real content. Portraits remains part of the current capability story and Lifestyle content; it does not justify `/gallery-4/`.

### Defects that MUST be corrected

| ID | Observed problem | Required behavior |
|---|---|---|
| FIX-01 | Portfolio category image/text links disagree; Lifestyle text reaches Gallery 4 | Image, full category title and relevant action share the same correct destination |
| FIX-02 | All three gallery inquiry CTAs point to `#` | All reach `/contact/`, optionally with editable category context |
| FIX-03 | Home Sport/Party's text initials link to the opposite gallery; only initials are linked | Entire labels are operable and use the correct category route |
| FIX-04 | Three form fields lack associated accessible labels; required state is only visual | Persistent associated labels, programmatic required state and useful validation |
| FIX-05 | All 100 inspected image elements have empty alt attributes | Meaningful photographic text alternatives and named image-viewer actions |
| FIX-06 | Numbered gallery document titles and empty descriptions | Specific titles/descriptions and unchanged meaningful route identity |
| FIX-07 | Mobile menu lacks a useful accessible name/accurate open state; Escape did not close it | Named controls, correct state, Escape, contained modal focus and focus return |
| FIX-08 | Small mono body text and text on inconsistent photographic backgrounds | Proportional readable body type and reliable solid-ground text contrast |
| FIX-09 | Mobile Contact portrait delays fields | Contact methods and form precede the supporting photograph |

No speed, full accessibility conformance or form-delivery score was established by the original inspection. Do not repeat these findings as if they are measurements of the later implementation.

## 4. Content contract

### Immutable known information

| Item | Required preservation |
|---|---|
| Photographer | Niyi Scholten |
| Brand | Niyi Visuals / source identity Niyi.visuals; do not invent a new logo |
| Base | Apeldoorn, The Netherlands; no studio street address or service radius supplied |
| Categories | Sport; source label Party's; Lifestyle; About additionally mentions Portraits |
| Email | `shotsbyniyi@gmail.com` — source displays uppercase; use a working `mailto:` link |
| Telephone | `06-42818825` — preserve display; make callable after validating normalized link format |
| Instagram | `https://www.instagram.com/niyi.visuals?igsh=MXViMG52OGQ3ejFuNw==` |
| TikTok | `https://www.tiktok.com/@niyi.visuals?_t=ZN-8wWRryr8KpT&_r=1` |
| Booking | Inquiry through social media, WhatsApp or email; discuss shoot type, preferred date and location |
| Delivery | Existing FAQ states final photos within two weeks following the shoot |
| Original hero heading | “Where action meets emotion every frame tells a story” |

Preserve existing social destinations initially. Removing tracking parameters is optional only after checking that a cleaned URL resolves to the same account. Do not add a WhatsApp deep link until the owner confirms the intended number/account; the FAQ's mention alone does not establish that mapping.

### Exact existing service strings

The dollar symbol is observed; currency code is not confirmed. MUST NOT replace it with euros, infer USD, recalculate, add taxes or turn the strings into a price calculator.

| Category | Duration/deliverables | Displayed prices — preserve literally until clarified |
|---|---|---|
| Sport | `Up to 2 Hours`; number of photos varies by match, with no fixed minimum/maximum | `$ 125 FOR 70 MIN`; `$ 150 FOR 70 MIN +` |
| Party's | `Up to 10 Hours`; `50/100+ Edited Photos` | `$ 130 FOR 1 HOUR`; `$ 650 FOR 5 HOUR`; `$ 1300 FOR 10 HOUR` |
| Lifestyle | `Up to 3 Hours`; `10/100+ Edited Photos` | `$ 65 FOR 30 MIN`; `$ 195 FOR 3 HOUR` |

Meaning of 70 MIN +, photo-count slash notation, duration bounds, currency, taxes, travel, usage rights, payment/deposit, editing/delivery format and rescheduling terms are OPEN. Layout may show the current strings without normalizing them; public commercial copy must be confirmed before launch. Cleanup of blank formatting and stray U+FEFF characters must not alter commercial meaning.

Existing FAQ questions: **How do I book a photo session with you?** and **How long does it take to receive the final photos?** Preserve both answers from the owner export, including the booking information and two-week commitment above. Keep both answers open in the initial design.

### Copy policy

- Retain English. Do not infer a Dutch translation requirement from the location.
- Retain all original factual information and original long copy until an owner-approved edit exists. Reordering sections is authorized by the redesign specification; inventing or deleting business claims is not.
- Functional UI vocabulary specified here includes **Work**, **View work**, **Let's connect**, and the corrected plural **Parties**. These are planned presentation changes, not claims about source wording; retain the source label Party's in the migration ledger.
- A new hero descriptor may state the existing services and Apeldoorn base. New gallery introductions must use confirmed service facts or clearly observable subjects only. Do not fabricate project names, match dates, venues, relationships or named people.
- Keep a source-to-approved-copy mapping by page and section. About has five original narrative paragraphs; Home has its own five introductory prose blocks. Preserve both before proposing condensation.
- READU, headline punctuation, first-person consistency and repeated WHAT WE DO are editorial cleanup candidates. Log changes; do not rewrite long passages automatically because a design skill encourages new copy.
- The developer may write functional error/focus/loading labels needed for accessibility; these cannot introduce business promises.

### Data separation

Use maintainable content records, not text scattered across templates. Each source content block needs page/section ID, original source reference, exact source text when supplied, approved display text, approval status and revision note. Each service needs the original price display string; normalized amount/currency/duration fields remain unset until confirmed. An inventory summary is never an approved source-text field.

## 5. Route and navigation contract

| Route | Display identity | Function | Source image placements |
|---|---|---|---:|
| `/` | Home / Niyi Scholten | Introduce, show work, lead to inquiry | 6 |
| `/about/` | About | Personal story and photographic perspective | 5 |
| `/services/` | Services | Categories, price options, FAQs | 9 |
| `/portfolio/` | Work | Three-category entry point | 5 |
| `/gallery-1/` | Sport | Sports collection | 30 |
| `/gallery-2/` | Parties | Party/social collection | 17 |
| `/gallery-3/` | Lifestyle | Portrait/lifestyle/personal moments | 27 |
| `/contact/` | Contact | Direct methods and inquiry | 1 |

Keep all eight routes. Deep links and browser refresh must work. Do not create new clean gallery URLs simply for aesthetics. Trailing-slash handling must be consistent without redirect loops. `/gallery-4/` is an existing error destination, not a ninth content page; repair internal links and render a useful 404. Do not redirect it permanently without resolving its historical purpose. If unknown, retain an honest 404 status.

### Header

Desktop: Niyi Scholten text identity at left, **Work / Services / About / Contact** at right; header 88px initially, up to 96px if needed. Brand leads Home. Work is a real `/portfolio/` link with a separate **Open work categories** disclosure control. Dropdown order: Sport, Parties, Lifestyle. Contact is the clear inquiry action. Use one stable header height; no oversized duplicate wordmark.

Mobile/tablet when needed: 72px header with brand and 48px menu control. Full-screen modal overlay contains ordinary navigation links: Home, Work, Services, About, Contact, plus the independent Work category disclosure. Use Open menu / Close menu names, `aria-expanded`, `aria-controls`, inert background, initial focus inside, Escape to close and return focus. Overlay itself scrolls on short screens. Do not use application-menu roles for ordinary site navigation.

Desktop disclosure opens by its button, works by keyboard/touch and closes with Escape, outside activation or navigation. Hover may enhance it but cannot be the sole mechanism. Show current page semantically and visually. Sticky header must be opaque, compact and reserve/offset space so neither body text nor anchor targets pass invisibly beneath it.

### Footer and contextual links

Footer includes identity/base, Home and main pages, three category links, existing email/phone, named Instagram/TikTok links, copyright and actual applicable policy/preferences links. Do not invent a legal address or policy text. Preserve Pixieset attribution where platform terms require it; determine permitted changes instead of assuming it can be removed. A client-domain migration does not automatically require Pixieset branding, but that must be resolved rather than guessed.

All gallery inquiry actions lead to `/contact/?shoot=sport`, `/contact/?shoot=parties`, or `/contact/?shoot=lifestyle`. `/contact/` without a query works equally well. The category is an editable optional preference, not a price selection or reservation. Ignore unknown values without error. Never place personal inquiry data in a URL.

Use `/services/#sport`, `/services/#parties` and `/services/#lifestyle` for relevant service crosslinks; implement those real IDs with header-aware scroll offsets. Ordinary navigation uses native links/history, not fake buttons or hash-only actions.

## 6. Creative direction and design system

### On Both Sides — binding design intent

Create a carefully edited sports-and-people portfolio: dark photographic settings, warm typography, strong changes in image scale, understandable captions and calm light information pages. The athlete's perspective connects action with personal meaning across all three categories. This is not a concept name that must be printed on the public website.

**Memorable first impression:** an unmistakably real team-celebration photograph beneath a wide editorial treatment of the original action/emotion headline, with clear personal identity. Essential text sits on solid ground. The visitor can identify the work and enter it without waiting for an animated intro.

**Composition:** vary a large landscape, offset portrait pair and narrower reading passage inside one grid. Use thin rules, short category labels and disciplined alignment. Strong typography and image editing supply the personality. Services uses aligned comparison rows; About uses readable personal narrative; Contact prioritizes completing a task.

MUST NOT use generic purple/blue gradients, glow, floating glass panels, decorative blobs, random grids of rounded cards, fake perspective browser mockups, stock portraits, heavy shadows, enormous empty spacers, gratuitous horizontal scrolling or novelty cursors. Do not borrow another photographer's palette, exact layout, assets or identity. Do not introduce military/supremacist symbols or decorative club emblems from sports imagery.

### Colors

| Token | HEX | Required role |
|---|---|---|
| `ink` | `#0C0C0C` | Home, About, Work and gallery ground |
| `surface-dark` | `#171715` | Menu / restrained raised surface / viewer chrome |
| `paper` | `#F3EFE9` | Text/action on dark; Services and Contact background |
| `text-muted-dark` | `#B8B1A8` | Supporting text on ink, without extra opacity |
| `rule-decorative` | `#34332F` | Decorative separators only |
| `control-border-dark` | `#6F6C67` | Meaningful outlined controls on dark |
| `text-light-page` | `#22211F` | Main text on paper |
| `text-muted-light` | `#605C56` | Supporting text on paper |
| `control-border-light` | `#827D75` | Inputs/outlines on paper |
| `focus-dark` | `#F0C28C` | Focus on dark; not a gold branding theme |
| `focus-light` | `#22211F` | Focus on paper |

Flat-color reference ratios: paper/ink 17.08:1; muted-dark/ink 9.21:1; light-page text/paper 14.05:1; muted-light/paper 5.80:1. Control-border pairs against ink/paper are 3.74:1 and 3.57:1. Decorative rule/ink is only 1.55:1 and cannot identify an interactive boundary. Check actual adjacent surfaces, transparency and rendered states separately.

Muted coral is the primary action accent; most chromatic color still comes from photography. Use `accent` #DFA080 for filled primary actions and small category arrows, `accent-hover` #EFB99A for their hover fill, and `accent-on-paper` #984B30 for a small arrow on paper. Large backgrounds and headings retain ink/paper neutrals. Main text MUST NOT depend on contrast against a changing image crop. Prefer solid text panels; any local image scrim must be tested for the actual crops and must not flatten the whole photograph.

### Typography

Use **Plus Jakarta Sans variable** for headings, body and UI; **Roboto Mono 400** only for short metadata, indices and image counts. This user-requested font revision follows the verified typography of https://docs.aponic.org (15 November 2026), superseding the earlier Archivo recommendation. Do not substitute Inter/Geist by habit. Do not ship Barlow/Instrument Serif/DM Sans from the unselected alternatives.

| Role | Mobile | Tablet | Laptop | Wide desktop | Weight / leading / tracking |
|---|---:|---:|---:|---:|---|
| Home display | 40–60px | 50–66px | 80–88px | 88px | Plus Jakarta Sans 600; 1.08; −0.035em |
| Page H1 | 40–44px | 56px | 64px | 72px | Plus Jakarta Sans 600; 1.08; −0.025em |
| H2 | 30–34px | 40px | 48px | 56px | Plus Jakarta Sans 600; 1.1; −0.02em |
| H3 | 24px | 26px | 28px | 32px | Plus Jakarta Sans 600; 1.2; −0.01em |
| Body | 17px | 18px | 18px | 18px | Plus Jakarta Sans 400; 1.55–1.65; normal tracking |
| UI / button | 16px | 16px | 15–16px | 16px | Plus Jakarta Sans 500; 1.3 |
| Metadata | 12–13px | 13px | 13px | 13px | Roboto Mono 400; 1.45; +0.02em |
| Price | 28–32px | 32px | 36px | 36px | Plus Jakarta Sans 600; 1.15; −0.015em |

Use fluid interpolation, not device-specific hard breaks alone. At 320px, reduce display size toward 40–42px if needed; never clip text to preserve an oversized heading. Body measure 50–65 characters on wider screens; use available width on mobile. Use normal font width throughout; Plus Jakarta Sans has a weight axis (200–800), with no width axis or horizontal transforms. Short labels may be uppercase; paragraphs may not be all-caps/tracked mono.

Self-host appropriate WOFF2 subsets when feasible, preserve supplied OFL notices and confirm the files support the chosen axes. Use a resilient sans-serif/monospace fallback and visible text during loading. Preload only truly critical font files. Font budgets are in section 13. Sources already researched: `https://github.com/google/fonts/tree/main/ofl/plusjakartasans` and `https://github.com/googlefonts/RobotoMono`.

### Layout, spacing and shape

| Range | Grid | Outer margin | Gutter | Section rhythm |
|---|---|---|---|---|
| <768px | 4 alignment columns; one reading column | 20px; 16px only at very narrow widths if needed | 12–16px | 64–80px |
| 768–1023px | 8 columns | 24–32px | 20–24px | 80–96px |
| 1024–1599px | 12 columns | 40–48px | 24–32px | 96–128px |
| ≥1600px | 12 columns, normally max 1440px | Centered; minimum 64–96px | 32px | 96–128px, not endlessly scaled |

Base spacing 4px; use 8/12/16/24/32/48/64/96/128px steps. Within a topic use 16–32px; larger gaps signal a new section. No blank paragraphs used as spacers. Heading and its paragraph/action remain visually associated even when images are offset.

Photographs/surfaces: 0 radius. Buttons: 2px. Fields: 2–4px. Do not add shadows unless they solve a specific overlay-separation problem. Selected landscapes may bleed to the viewport while reading content remains bounded.

### Components

- **Primary link/button:** minimum 48px height, 20–24px horizontal padding, paper/ink color inversion by page theme. Desktop primary actions normally fit content; mobile may fill width when useful.
- **Secondary:** 1px meaningful border; same hit area. Hover strengthens tone/underline without reducing contrast. Disabled controls remain readable and use real semantics.
- **Text link:** identifiable underline or clear action treatment; visible keyboard focus. Use links for destinations and buttons for state changes. No nested anchors/buttons or first-letter-only targets.
- **Focus:** minimum 2px visible ring with about 3px offset; use ink on paper, warm focus accent on dark, and a two-tone ring where backgrounds vary.
- **Icons:** consistent SVG line weight around 1.5px at 18–20px; close, chevron, arrow and social marks suffice. Icon-only controls require names and 44–48px hit areas.
- **Photo figure:** image, dimensions, crop/focal data, meaningful alt, optional verified caption/credit. No global recoloring or decorative rounded frame.
- **Inquiry closure:** compact heading/context plus one primary inquiry action. Avoid a giant nearly empty area separating heading and button.

## 7. Photography and asset implementation

### Asset identity and completeness

The eight source-page counts total **100 placements**. These are placement records, not proof of 100 unique original photographs. Stable IDs are in `outputs/asset-register.json`: `NV-HOME-*`, `NV-ABOUT-*`, `NV-SERVICES-*`, `NV-PORTFOLIO-*`, `NV-SPORT-*`, `NV-PARTIES-*`, `NV-LIFESTYLE-*`, `NV-CONTACT-*`.

Every record includes page, image order, Pixieset asset ID, an observed variant URL, a sitemap variant URL, srcset when exposed, original empty alt and capture metadata. Use exact stored URLs. Hashes differ between derivatives: MUST NOT synthesize a URL by changing a width suffix/hash. A captured natural dimension of zero means unloaded at capture, not necessarily a failed source. Verify downloaded-file metadata rather than treating capture dimensions as master dimensions.

### Initial role map

| IDs | Initial redesign use |
|---|---|
| `NV-HOME-01` (`NS508538`) | Opening team celebration; retain as preferred Home hero |
| `NV-HOME-02` (`IMG_0308`) | Personal introduction / photographer image |
| `NV-HOME-03`, `04`, `05` | Parties, Sport and Lifestyle features respectively; display Sport first |
| `NV-HOME-06` (`NS506970-Edit-Recovered`) | Closing running/action photograph |
| `NV-ABOUT-01` | Biographical image |
| `NV-ABOUT-02`–`05` | Four capability-related images; retain alongside Sport/Parties/Lifestyle/Portraits story |
| `NV-SERVICES-01` | Existing monochrome portrait, smaller editorial placement rather than tall cover |
| `NV-SERVICES-02`–`04` | Sport, Parties, Lifestyle service images |
| `NV-SERVICES-05`–`09` | Supporting five-image montage; place after practical service/FAQ information |
| `NV-PORTFOLIO-02`, `03`, `04` | Sport, Parties and Lifestyle category features |
| `NV-PORTFOLIO-01`, `05` | Retain as secondary editorial/closing images rather than a tall empty title cover |
| `NV-SPORT-01`–`30` | Sport collection including cover/lead |
| `NV-PARTIES-01`–`17` | Parties collection including cover/lead |
| `NV-LIFESTYLE-01`–`27` | Lifestyle collection including cover/lead |
| `NV-CONTACT-01` (`IMG_0306`) | Supporting photographer image; after fields on mobile |

This is a design-role mapping, not an assertion of a person's identity or client status. View the actual files before writing alt text or choosing tighter crops. Where cover subject identification was uncertain in the research, retain that uncertainty.

### Asset handling requirements

- Start with the client's registered photography. No stock or generated portfolio replacements, synthetic portraits or invented logos.
- Keep every source placement accounted for. Default to retaining the existing gallery photographs publicly and their source ordering; adjusting scale/layout is allowed. Do not silently ship a smaller selection. Any removal, replacement or recategorization needs a recorded owner/editorial decision.
- Preserve all original files supplied later in an immutable source location; generate web derivatives separately. Repeated placements can share a confirmed master but retain their own crops/order. Do not deduplicate by filename alone.
- Obtain publication/credit information and masters from the owner before final migration. Existing hosted derivatives may be useful in an authorized private preview; do not assume permanent third-party hotlinking or complete reuse rights.
- Use distinct desktop/mobile focal points. Preserve faces, hands, ball, gesture and movement direction. Group celebration should normally retain a landscape crop on mobile rather than sacrifice people to a tall crop.
- Keep source color and monochrome choices. Do not apply a universal cinematic filter/desaturation. Never imply adjacent photographs depict the same match/event unless confirmed.
- Meaningful alt describes visible subject/action/setting. Do not guess names, location, client, score or date. Decorative repetition may use empty alt only when equivalent meaning is adjacent; the portfolio as a whole is not decorative.
- Explicit width/height or aspect-ratio must reserve space. Opening image loads eagerly with appropriate priority; below-fold images are lazy. Failure fallback retains the frame/description and allows navigation to continue, without silently substituting unrelated imagery.
- Full-size enlargement uses contain behavior; thumbnails can crop deliberately. Use actual recorded/supplied variants or generate approved local variants; select sizes for rendered width and pixel density.

## 8. Page specifications

All pages include the shared header/footer, one H1, correct landmarks, page metadata, working deep links and the responsive/failure behavior defined elsewhere. Page composition differs intentionally. Preserve source copy through the content contract instead of pasting research summaries into the website.

### P01 — Home `/`

**Goal:** identify photographer, services and perspective, show authentic work early, lead to a category or inquiry. **Mode:** Experience; inquiry is the secondary outcome. **Theme:** ink, with a warm-paper personal-story chapter.

**Revision note — 15 November 2026:** after reviewing the first local homepage, the user requested clearer visual separation from the original site while retaining On Both Sides. The following wide opening, restructured work spread and paper biography chapter supersede the initial five/seven hero and dark biography layout. Original copy, photographs, route mapping, accessibility and restrained-motion requirements remain binding.

**Order and composition**

1. Compact shared header.
2. Hero: short category/location descriptor using known facts; existing hero heading; original supporting prose; View work → `/portfolio/`; secondary Let's connect → `/contact/`; `NV-HOME-01`. Use a wide typographic opening: the original action/emotion phrase spans the desktop width, with the remaining original headline beneath it and actions alongside. Place the landscape celebration photograph below, followed by the original supporting prose. Text sits on solid ink. Avoid a full-screen height requirement.
3. Work sequence: dominant Sport feature using `NV-HOME-04`, with its photograph on the left and a large linked category title/action beside it; then an offset Parties/Lifestyle pair using `03`/`05`, contrasting a broader Parties crop with a portrait-led Lifestyle feature. Each complete title/image/action shares its correct route. Vary scale without three uniform cards.
4. Personal introduction on a warm-paper chapter using `NV-HOME-02`, the original five Home prose blocks and link to About. Use a continuous reading column on the left and an inset photographer portrait on the right; stack in reading order on mobile. Put the section heading before its related prose.
5. Compact service guide in three rows: category and a confirmed description, leading to corresponding Services anchors. Do not show invented starting prices or normalize the ambiguous existing ones.
6. `NV-HOME-06` closing photograph, source closing invitation and one clear inquiry action.
7. Footer.

**Mobile:** heading/descriptor before image; include category access without a long intro delay. Prefer landscape treatment for the celebration when needed to preserve faces. Stack work as Sport, Parties, Lifestyle with title/action tightly grouped. Keep the personal story readable and avoid forced image/text overlaps. No fixed bottom CTA strip.

**Motion:** one restrained opening entrance, selective image hover, optional one-time entrance for the first major work feature. The prose/prices/links are visible immediately.

### P02 — About `/about/`

**Goal:** explain the person and the athlete-to-photographer motivation. **Mode:** Read; inquiry is the secondary outcome. **Theme:** ink.

**Order:** Niyi Scholten H1 and opening identity paragraph → `NV-ABOUT-01` → complete five-paragraph original biography in logical sequence → capability section with Sport, Parties, Lifestyle and Portraits and four existing related images → relevant work/Services links → inquiry → footer.

Desktop opening can use a 5/7 portrait/introduction split. Long narrative uses a continuous 50–65-character column instead of disconnected newspaper columns. Keep source injury/personal history respectful and first person. A pull quote is optional and must be drawn from approved source copy; do not invent an attributed quotation. Consolidate duplicate WHAT WE DO treatments without erasing capability information.

**Connections:** Sport → `/gallery-1/`; Parties → `/gallery-2/`; Lifestyle → `/gallery-3/`; Services → `/services/`; inquiry → `/contact/`. Portraits may point to relevant Lifestyle work after confirming its placement; no fourth package or gallery.

**Mobile:** title/opening paragraph, appropriately sized portrait, continuous biography, capability images/links. Do not pin the story or require horizontal scrolling. At most one portrait fade; paragraphs remain static.

### P03 — Services `/services/`

**Goal:** understand the actual services, current options and inquiry/delivery process. **Mode:** Persuade; readable comparison supports the decision. **Theme:** paper.

**Order:** concise H1/introduction containing the three source service descriptions → Sport row → Parties row → Lifestyle row → verified shared booking/delivery information → both open FAQs → supporting montage/Work link → compact inquiry closure → footer.

Use three substantial rows, not equal feature cards. Name/description/price schedule/inclusions occupy about seven desktop columns, relevant image five. Use consistent price schedule alignment even if image placement alternates. Each row has the exact source price strings and duration/photo-count information. `NV-SERVICES-01` is a secondary editorial strip or supporting portrait; `02`–`04` accompany the rows; `05`–`09` form the supporting montage after practical information. Do not place a screen-height image before the offer.

**Connections:** service IDs `sport`, `parties`, `lifestyle`; each View related work goes to the matching gallery, Discuss this shoot goes to Contact with editable category context. Keep a general Contact route too. Do not interpret discussion as confirmed booking.

**FAQ:** answers open initially. An accordion is optional only if approved content later materially grows; essential price/delivery terms must not be hidden inside it.

**Mobile row order:** category → description → price schedule → inclusions → photograph → relevant links. No horizontal comparison table, slider or hover-dependent condition. Prices/service terms use body/price sizing, never mono captions. No motion on price lines or FAQ prose. Currency/terms remain launch dependencies.

### P04 — Work `/portfolio/`

**Goal:** enter the right photographic collection quickly. **Mode:** Experience. **Theme:** ink.

**Order:** compact Work H1/short factual introduction → Sport feature → Parties feature → Lifestyle feature → secondary editorial imagery/source closing sentiment → Services/Contact closure → footer.

Use the original three category pictures `NV-PORTFOLIO-02`–`04`. Sport can occupy eight columns, Parties an offset six-column feature and Lifestyle a portrait-led feature. A title, photograph and action remain one obvious group and destination. Retain `01` and `05` as smaller secondary/closing placements instead of a tall cover delaying category access. Correct READU in an approved copy pass.

**Routes:** Sport `/gallery-1/`, Parties `/gallery-2/`, Lifestyle `/gallery-3/`; no category action to Gallery 4. Use descriptive accessible link purposes rather than three isolated indistinguishable “View Gallery” names.

**Mobile:** one clear category sequence; natural aspect-ratio variety inside consistent margins. No huge arbitrary spacer offsets. **Motion:** scale ≤1.02 on precise-pointer hover; focus indication supplies the nonpointer equivalent. Nothing important appears only on hover.

### P05 — Sport `/gallery-1/`

**Goal:** show timing, energy and human meaning across the observed sports work. **Mode:** Experience. **Theme:** ink.

**Order:** Sport H1/approved short introduction/category navigation → lead photograph → collection → Sport service link → inquiry → adjacent-category navigation/footer.

Retain all 30 source placements, including the lead. Begin with the recorded cover/lead unless a documented editorial choice improves it. Remaining photographs keep source order initially. Use two/three desktop columns with occasional large landscape breaks based on actual image dimensions; do not repeat the incumbent six narrow columns. Give portrait, atmosphere and celebration images room alongside action; do not label unconfirmed event sequences or create fake projects.

**CTAs:** `/services/#sport`, `/contact/?shoot=sport`, other galleries. **Mobile:** two-column portrait overview with full-width landscape breaks, sufficiently large subjects, no obligatory horizontal carousel. Collection images open the shared viewer. All images remain reachable; no unexplained reduced edit or endless scroll dependency.

### P06 — Parties `/gallery-2/`

**Goal:** demonstrate people, social atmosphere and coverage style. **Mode:** Experience. **Theme:** ink.

**Order:** Parties H1/approved introduction/category navigation → scene-setting lead → collection → party service link → inquiry → next-category/footer.

Retain all 17 placements including cover/lead. Use generous landscape crowd scenes with paired portraits and a justified-row rhythm on desktop; avoid imposing Sport's dense action rhythm. On mobile use mostly full-width landscapes and occasional two-portrait rows. Keep direct-flash character and real expressions; no artificial nightclub lighting effect or desaturation.

**CTAs:** `/services/#parties`, `/contact/?shoot=parties`. No claims of wedding packages, corporate coverage, named venues or event dates without supplied evidence. Viewer/hover behavior is shared; no strobes, audio or autoplay.

### P07 — Lifestyle `/gallery-3/`

**Goal:** show portrait expression and the actual range of personal moments. **Mode:** Experience. **Theme:** ink.

**Order:** Lifestyle H1/approved introduction/category navigation → large portrait/lead → collection of portraits and personal occasions → lifestyle service link → inquiry → next-category/footer.

Retain all 27 placements. Use two-column portrait pairings with occasional wider personal-event photographs, more vertical breathing room than Sport, and consistent caption positions where confirmed captions exist. Keep color and monochrome work as authored. Do not remove the personal-event photographs merely to create an exclusively fashion-like edit.

**CTAs:** `/services/#lifestyle`, `/contact/?shoot=lifestyle`. Do not infer newborn, wedding or commercial-fashion services from a photograph. **Mobile:** a large opening portrait; natural-ratio one/two-column rhythm; faces must not become tiny. No filters or swipe gestures required to discover work. Shared viewer and restrained entrances only.

### P08 — Contact `/contact/`

**Goal:** send a useful inquiry or contact directly. **Mode:** Operate. **Theme:** paper.

**Order:** personal inquiry H1/invitation → linked email/telephone → three required fields and optional shoot details → submit/status → confirmed next-step guidance if supplied → supporting `NV-CONTACT-01` → footer.

Desktop: form about seven columns, direct contact/image five; image never dominates the fields. Mobile: direct contacts and fields before the supporting image. Preserve existing source contact details and three required fields. A singular personal voice is the planned presentation direction; do not invent response time or availability promises.

**Fields and states:** see section 10. The form must have a real configured delivery path before it can be called complete. Direct contact is always visible. Show an actual owner-approved privacy link when handling inquiries; no placeholder legal link, prechecked marketing permission or newsletter checkbox.

### P09 — Unavailable route / Gallery 4

Do not create content for `/gallery-4/`. Fix all originating Lifestyle links. Provide a branded 404 with a clear unavailable-page explanation and actual Home, Work and Contact links. Return HTTP 404; do not disguise it as a successful content page. A permanent Gallery 4 → Lifestyle redirect requires confirmation that it will not replace a different historical destination. Do not redirect all missing URLs to Home.

## 9. Gallery and navigation interaction contract

**Viewer behavior:** activating a photographic thumbnail opens an accessible modal image viewer. Each page's collection includes its lead image; avoid duplicates in the count. Display the selected image at natural ratio using contain, a useful image count, a named Close button and named Previous/Next controls. All controls stay visible/reachable on mobile, with safe-area clearance and ≥44px targets.

On open, store the triggering element and put focus inside. Background is inert and scroll is locked without layout shift. Escape closes; arrow keys change images when viewer focus is active; close returns focus and preserves underlying scroll. Stop at the first/last image with disabled boundary controls instead of cycling unexpectedly. Keep the selected image displayed while the next image loads; announce loading/failure concisely and allow navigation/closing. Preload only immediate neighbors after the selected image.

Swipe is OPTIONAL enhancement, never the only navigation. Browser zoom must work. Do not add a custom cursor, autoplay, automatic cycling, forced sound, download/store controls or new client-proofing functionality. With JavaScript unavailable, images/link targets still provide a usable direct image route or equivalent static access. Ordinary site navigation works without client JavaScript.

## 10. Inquiry form contract

### Fields

| Field | Required | Semantics / behavior |
|---|---|---|
| Name | Yes | Persistent associated label, text input, name autocomplete; accept international names |
| Email address | Yes | Associated label, email input/autocomplete, email keyboard; validate reasonably without rejecting legitimate formats |
| Message | Yes | Associated label, multiline/resizable, about 160px initial height; allow useful detail |
| Shoot type | No | Proposed Add shoot details disclosure; options Sport, Parties, Lifestyle, Other / not sure; query context editable |
| Preferred date | No | Accessible native date or simple supported input; do not infer availability or reservation |
| Location | No | Plain text; no geolocation request or map dependency |

Only the original three fields are required. Add shoot details is a button with accurate expanded state and visible label; disclose optional fields together. Closed fields must not introduce hidden required validation. Input text ≥17px, height ≥48px, consistent contrast and clearly visible focus. Explain required indicators in text. Submit label: Send message, with CSS capitalization optional.

### State and delivery requirements

| State | Required outcome |
|---|---|
| Idle | Fields and direct contact visible; no fake success or hidden automatic send |
| Invalid | Field-specific useful errors + linked summary; preserve input; focus first invalid field or summary consistently |
| Sending | Communicate progress, prevent duplicate submissions, maintain understandable control state |
| Accepted by configured delivery service | Announce confirmed acceptance only; no response deadline or booking confirmation |
| Network/server failure | Preserve input; offer retry and direct email/phone; do not falsely acknowledge receipt |
| Spam/rate-limit rejection | Neutral useful error; accessible recovery/direct contact; no inaccessible puzzle as default |
| Missing integration in private development | Keep implementation guarded and report the incomplete dependency in the review handoff; never claim completion or simulate success in the visitor flow |

Delivery provider/endpoint, receiving address configuration, privacy/retention, spam controls and credentials are OPEN. A visible Gmail address does not prove the existing form's backend configuration. Do not scrape/reuse Pixieset CSRF tokens, impersonate the old endpoint or expose email-service credentials in the client. Credentials belong in the chosen secure environment, not this document or the repository.

Use client and server validation, appropriate input length limits and rate/spam protection after selecting the backend. Escape user content and reject unsafe payloads. Do not persist inquiry content in browser storage or analytics by default. Confirm success with the provider's actual accepted result; a successful visual animation is not evidence of delivery. Real receipt is a separate release test with owner-agreed test destination/data. Do not send a real inquiry during planning or as an unsolicited QA action.

## 11. Responsive and accessibility requirements

### Responsive behavior

The break ranges in section 6 are design defaults, not fixed device identities. Test 320, 390, 768, 1024, 1366 and 1920px, intermediate widths, landscape phone, text expansion and browser zoom. Collapse navigation when content needs it, before labels crowd or overflow.

Large screens use bounded content, narrow reading measures and occasional image bleed. Laptops keep relevant imagery and actions within a reasonable first-screen composition. Tablets simplify offsets rather than compress desktop artboards. Phones prioritize description/work access, source service facts and contact fields; imagery gets separate crop decisions. DOM reading order must match the meaningful visual order. Do not use CSS rearrangement that makes focus jump across the page.

Images reserve space before loading. Menus/viewer/forms must fit dynamic viewport heights and safe areas. Avoid a bottom-fixed action layer competing with the keyboard/browser UI. No horizontal overflow for normal pages or price schedules. Image enlargement can contain a wide photograph without causing page overflow.

### Accessibility acceptance

Target WCAG 2.2 AA; do not claim certification. One H1 per page; logical H2/H3 sections; landmarks; skip-to-content link; active-page state; descriptive destinations. Asterisk markers and contact details are not headings simply to style them.

Normal text ≥4.5:1; large text ≥3:1; meaningful control boundaries and focus treatments require appropriate nontext contrast. 44–48px touch targets are the project's usability preference, not a claim that WCAG universally mandates that exact size. Validate real image-overlay states separately.

Keyboard must operate all navigation, disclosures, image viewer and form. Visible focus cannot hide under sticky chrome. Modal overlays require correct focus containment/return and inert background. Use native semantics where suitable and accurate names/states. Do not remove browser focus without an equivalent replacement.

Meaningful photographs require image descriptions; image actions require accessible names. Do not guess identities or label every portfolio image decorative. Avoid redundant spoken labels on a single category link. Native/browser text zoom remains enabled. No essential content only on hover, through color, behind motion or inside an inaccessible image canvas.

Perform an actual keyboard and screen-reader pass on menus, viewer and form; automated scanning is supplementary. Check 200% text zoom and reflow equivalent to a 320-CSS-pixel viewport. Reduced-motion behavior must remain fully functional.

## 12. Motion specification

Use CSS opacity/transform and a small intersection observer where genuinely useful. No animation framework is required. Content is visible by default if JavaScript fails. Never wait for every image/font before showing the page. Motion must not postpone LCP or the primary task.

| Component | Trigger / behavior | Timing / easing | Reduced motion / mobile |
|---|---|---|---|
| Home opening | Once on initial visible render; text rises ≤8px and fades; loaded image settles 1.015 → 1 | 400ms; `cubic-bezier(0.22,1,0.36,1)`; stagger ≤60ms | Static immediately for reduced motion; mobile fade only or static |
| Selected major editorial image | First entry only; fade with movement ≤12px; not every gallery thumbnail | 400ms, same ease-out | No movement; visible static frame |
| Nav underline | Hover/focus; current-page marker always present | 180ms ease-out | Instant indicator |
| Category photograph | Fine-pointer hover; inside crop 1 → at most 1.02 | 360ms ease-out | No scaling on touch or reduced motion; visible focus alternative |
| Button | Hover tone; pressed displacement ≤1px | 160ms hover; 100–120ms press | Tone/focus without movement |
| Mobile menu | Toggle; restrained overlay fade, links appear together | 220ms open / 160ms close | Instant, same focus behavior |
| Viewer | Activation/close | 180ms open / 140ms close | Instant |
| Viewer image change | Next/previous; brief crossfade after image is available | 160ms ease-out | Immediate replacement; keep status/count |
| Form | Focus/status changes | Border 120ms; status immediately announced | Same information without motion |

Initial implementation MUST NOT include page-transition choreography, parallax, pinned scenes, infinite marquees, per-word split headings, magnetic buttons, cursor followers, bouncing, simulated shutter flashes or continuous background motion. A native/progressive cross-page fade of ≤150ms is OPTIONAL after the core works, preserving history/focus and disabled under reduced motion. An accordion is not required for two FAQs.

Cap concurrent focal motion at one image/composition plus ordinary control feedback. Animations run once where specified, not on every scroll reversal. If motion is disabled entirely, hierarchy and page quality must hold.

## 13. Technical, SEO and performance requirements

### Technical architecture

Use shared tokens/components and maintainable content/asset data. Keep static page content in rendered HTML for discoverability and resilience. Defer interactive code until needed. No mandatory CMS/database/authentication or site visitor account. The chosen form backend is the only demonstrated server interaction; choose its implementation with hosting constraints in mind.

Suggested reusable elements: SiteHeader, WorkDisclosure, MobileNavigation, SiteFooter, ActionLink, PhotoFigure, CategoryFeature, ServiceRow/PriceSchedule, BiographySection, InquiryClosure, GalleryGrid, ImageViewer, InquiryForm/Field/ErrorSummary, CookiePreferences and NotFound. These are responsibility names, not required file/framework names. Reuse behavior without forcing all page compositions into a generic Card.

Photo records need source placement ID, verified master reference, derivatives, dimensions/aspect ratio, category, order, desktop/mobile focal points, alt, optional approved caption/credit and publication status. Preserve original/approved content separately. Approved public content only belongs in the production bundle; internal status notes, personal inquiry records, captures and this planning package must not be exposed.

### SEO and routes

Render unique titles, accurate nonempty descriptions, canonical URLs and share previews. Use the selected deployment's real origin; do not invent a future domain or retain Pixieset canonicals if the owner intentionally migrates to a different canonical origin. Retain source paths and establish old-domain redirects only where actual control/hosting makes them possible. A local preview cannot redirect the client's Pixieset domain.

| Route | Specified title |
|---|---|
| `/` | Niyi Visuals — Sport, Event & Lifestyle Photography in Apeldoorn |
| `/about/` | About Niyi Scholten — Niyi Visuals |
| `/services/` | Photography Services & Prices — Niyi Visuals |
| `/portfolio/` | Sport, Parties & Lifestyle Portfolio — Niyi Visuals |
| `/gallery-1/` | Sport Photography — Niyi Visuals |
| `/gallery-2/` | Party & Event Photography — Niyi Visuals |
| `/gallery-3/` | Lifestyle & Portrait Photography — Niyi Visuals |
| `/contact/` | Contact Niyi Scholten — Niyi Visuals |

Descriptions use confirmed page purpose/name/services/base, not invented ranking claims, travel radius, awards or response promises. Keep English language metadata. Supply a sitemap with the eight canonical content pages and approved images; exclude 404 and draft/internal files. Keep photographs as crawlable image elements and direct links with appropriate context. Structured data may contain only confirmed public identity/contact information; no invented address, ratings, clients or partnerships.

### Performance targets — future measurements, not observed scores

- Core Web Vitals goals: LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile when sufficient field data exists. Record lab results separately; do not claim field success from one local run.
- Opening image target ≤250–350KB mobile / ≤500KB desktop where quality permits. Verify actual faces, grass/detail and shadows before compressing further.
- Target initial mobile Home/Contact transfer around ≤1MB; initial client JS around ≤100KB compressed and fonts around ≤120KB compressed. Document platform-driven exceptions and their impact.
- Eager/high-priority first meaningful photograph; lazy below-fold images; explicit geometry; responsive srcset/sizes; AVIF/WebP with suitable fallback where owned processing permits.
- Derivative widths around 480/768/1280/1920/2560px only where actual display/source resolution warrants. Do not upscale thumbnails as substitutes for masters.
- Gallery collection remains reachable in HTML; lazy-load below-fold assets. Load selected viewer image and immediate neighbors, not every high-resolution file at startup.
- Keep third parties minimal. No automatic social embed, map, tracker or analytics package. Respect actual consent choices before nonessential scripts run.
- Avoid layout animation, huge filters, continuous scroll listeners and unnecessary global application hydration. Test slow image loading, font swap, broken image and no-JavaScript navigation.

Existing consent banner is evidence of cookie controls, not proof that every new implementation needs the same tracking categories. Inventory the actual new data/scripts. If nonessential tracking is retained, support accept/reject/manage, persistent choices and reopening preferences with genuine policy links. Do not add advertising or a decorative consent banner to mimic the old site. Owner-approved privacy/data handling remains a launch dependency.

## 14. Installed skill usage plan

All five requested SKILL.md files were inspected for this specification. Names are stable references; resolve installed paths again in a new environment because plugin cache versions can change. Skill availability does not select a stack, authorize publication or supply missing business facts. Current user instructions and the client's content constraints take precedence over generic skill defaults.

| Skill | Implementation status | Required use / boundary |
|---|---|---|
| `impeccable` | Required for frontend design work | Load project context once per implementation session and relevant references. Honor this pinned direction; do not reopen a settled concept tournament. Read craft-floor immediately before UI edits, not during this planning-only task. Apply typography/layout/responsive/motion craft; inspect desktop/mobile in a bounded review/fix cycle. Derive supporting design records only if useful/required by that workflow, preserving this specification. |
| `web-design-guidelines` | Required for implemented UI review | At the actual code review, fetch its current official guideline source and review the changed UI files. Use its actionable file/line findings. There is no UI code to audit in this planning task; do not manufacture one. |
| `vercel-react-best-practices` | Conditional: required if React/Next.js is selected | Read relevant rules while writing/reviewing React code: avoid waterfalls and broad bundles; render static content on server/build; isolate client interactions; defer heavy viewer code and third parties; avoid unnecessary state/effects. Do not choose React just to use the skill, or force React-only patterns into another stack. |
| `sites:sites` / installed `sites` | Conditional on later website work through Sites | Use supported source/preview/package workflows for an authorized Sites build. Read its presentation-led guidance and applicable local/managed preview reference before preview. Preserve actual project IDs/audience if an existing Site is identified; this Pixieset URL supplies neither. Honor a user's local-only/save-only/no-publication instruction. No Sites creation or deploy calls now. |
| `sites:sites-remix` / installed `sites-remix` | Not applicable to the current source | Only use after the user identifies an existing Sites-built source and requests a remix. A Pixieset redesign is not a Sites remix. Do not call remix tools, infer a project ID or expect Pixieset runtime/content to be cloned automatically. |

Installed locations inspected here:

- `impeccable`: `/Users/julians/.agents/skills/impeccable/SKILL.md` — version 4.6.0.
- `web-design-guidelines`: `/Users/julians/.agents/skills/web-design-guidelines/SKILL.md` — version 1.0.0.
- `vercel-react-best-practices`: `/Users/julians/.agents/skills/vercel-react-best-practices/SKILL.md` — version 1.0.0; 70 rules across eight categories.
- `sites`: `/Users/julians/.codex/plugins/cache/openai-curated-remote/sites/1.1.6/skills/sites/SKILL.md`.
- `sites-remix`: `/Users/julians/.codex/plugins/cache/openai-curated-remote/sites/1.1.6/skills/sites-remix/SKILL.md`.

Web-interface review source recorded by its skill: `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`. Fetch at review time, not as a substitute for rendering/testing. For React, read the applicable rule files or compiled guide rather than treating the summary headings as full rules. If a needed skill is unavailable elsewhere, report the exact missing skill and follow the user's instruction on installation; do not silently replace the selected design or pretend its review ran.

The implementation agent should use skill-directed collaboration only when authorized by the user's instructions, applicable skill workflow and current environment. This document does not require unrelated parallel work or agents merely to increase activity.

## 15. Open decisions and stage gates

| OPEN item | What it affects | Safe behavior until resolved |
|---|---|---|
| Pixieset vs custom build; stack/hosting | Architecture/integrations/publication | Resolve before platform-dependent implementation; do not scaffold a guessed stack |
| Original owner prose export | Verbatim content migration | Keep source references; do not publish summaries or invented filler |
| Master image files and publication/credit information | Final image quality/migration | Retain exact asset references; source derivatives only for appropriate authorized preview; record missing masters |
| Currency/70 MIN +/photo counts/taxes/travel | Public commercial accuracy | Preserve literal source strings, no normalization; owner confirmation before release |
| Service area/payment/rights/rescheduling | Additional offer/FAQ copy | Omit new claims until supplied |
| Inquiry backend, credentials, receiving configuration | Real form delivery | Implement guarded adapter after choice; no fake success; no launch as a complete form |
| Response expectations | Contact text | No response-time promise |
| WhatsApp account/number | Optional direct button | Keep existing FAQ mention; no unverified deep link |
| Privacy/consent/retention and actual scripts | Inquiry/data handling | Owner supplies truthful applicable content; do not fabricate legal boilerplate |
| Canonical deployment origin and legacy control | Canonicals/redirects | Keep paths; resolve origin before production indexing |
| Gallery 4 historical purpose | Permanent redirect | Correct internal links; honest 404 until confirmed |

These are not reasons to repeat completed research or ask every question before useful independent work. They are gates for the work that actually depends on them. Preparing this specification is complete without deciding them; a future production-ready site is not complete until relevant launch dependencies are resolved or explicitly deferred by the owner with the resulting scope understood.

### Future implementation sequence

1. Read this file, all three research documents, the two JSON registers and available evidence. Verify source accessibility/counts. Do not recrawl the website or reroll concepts.
2. Confirm actual repository/platform/stack and current user authorization. Load applicable installed skills. Separate available source content from missing owner material.
3. Establish data/tokens/routes and the shared navigation. Correct destination mapping first. Preserve all content/asset provenance.
4. Implement Home, Work and category collections with real photographs, then About, Services and Contact using their own page-specific composition. Use source copy where available, not generic placeholder sections.
5. Connect/validate actual inquiry behavior and applicable privacy/preferences. Add restrained motion only after static structure and navigation work.
6. Run appropriate build/type checks and the targeted tests below. Perform one batched desktop/mobile review, fix observed material issues together, then confirm. Follow any further skill-required review without an open-ended polish loop.
7. Report what works, what was tested, remaining dependencies and reviewable preview/artifacts. Publish or modify client hosting only within the later user's actual instruction; this document grants no such permission.

## 16. Verification and definition of done

### Planning handoff checks

This planning delivery MUST contain the root PRODUCT.md, its identical distribution copy, three original research documents, both JSON registers and the nine existing evidence images. A portable archive and manifest may package them. Verify 100 unique placement IDs, eight source-page counts summing to 100, required source files and unchanged supplied research. No website source, dependency install, scaffold, mockup or deployment is part of this planning delivery.

### Targeted future automated checks

Use meaningful tests tied to failure risk, not dozens of tests mirroring CSS or implementation details:

- Route/link test for all eight routes and matching category image/title/action destinations; no gallery inquiry remains `#`; real Services anchors exist; Gallery 4 behaves intentionally.
- Asset reconciliation verifies every source placement is retained or has an explicitly approved disposition; no invented asset URL, broken reference or accidental filename-only deduplication.
- Form validation/adapter tests cover missing required input, invalid email, accepted send, duplicate prevention, network/server rejection and input preservation using controlled test fixtures. No real client message without arranged testing.
- Keyboard/focus tests for modal menu, Work disclosure, image viewer boundaries/Escape and returning focus. Verify optional shoot query is editable and unknown values are ignored.
- Production build/deep-link refresh checks appropriate to the chosen stack. Check titles/canonicals/sitemap and absence of draft/internal files in shipped output.

### Manual/rendered acceptance matrix

| Area | Required evidence |
|---|---|
| Real brand/content | No fabricated claims/logos/testimonials; original contact, categories, seven price lines and both FAQs preserved; copy differences logged |
| Photographic completeness | 100 placements reconciled, masters/rights issues reported honestly; correct crops, source color/monochrome and usable image alternatives |
| All pages | Every page-specific order/composition present; real links; no missing sections, template filler or equal-card repetition |
| Desktop/mobile/tablet | Checks at specified widths, small-screen reflow, landscape/zoom and slow image loading; no clipped nav, prices or fields |
| Navigation/viewer | Mouse, touch and keyboard paths; named accurate states, visible focus, Escape, containment/return, safe-area controls |
| Contact | Fields before image on mobile; direct contacts usable; labels/errors/status understandable; server acceptance and arranged real receipt checked separately |
| Accessibility | Keyboard + screen reader; contrast at real rendered states; semantic headings; image/action text; reduced motion; no-JS navigation |
| Performance | Recorded lab conditions/results and asset/bundle checks; field goals stated as pending when field data is unavailable |
| Visual direction | Plus Jakarta Sans/Roboto Mono roles, ink/paper palette with restrained coral accents, strong real imagery, intentional density, warm practical pages, no generic AI-template decoration |
| Motion | Optional enhancement, small amplitude/timing, no hidden content when disabled/failed; static pages still convincing |
| Release | All relevant owner/hosting/copy/form/privacy gates resolved or explicitly scoped; no invented readiness claim |

A developer saying “the build passed” is insufficient evidence of correct image routes, working delivery, accessible overlays or professional art direction. Conversely, screenshots alone cannot establish backend delivery or commercial correctness. The final implementation handoff must distinguish implemented, tested, unverified and owner-dependent items.

**Completion rule:** the future website is done only when its agreed scope satisfies this specification and relevant dependencies. This planning document is done when it faithfully consolidates the research, makes development choices explicit, preserves unresolved facts and supplies accessible source references. Stop after delivering the planning handoff for the current task.

### User-requested typography and accent revision — 15 November 2026

Version 1.2 adopts Plus Jakarta Sans, verified from Aponic’s computed heading, paragraph and navigation styles, while retaining the On Both Sides composition, authentic photography and exact client copy. Use 600 for portfolio headings, 400 for prose and 500 for actions; the reference documentation uses 700 for its main heading and 600 for sections. Preserve sparse Roboto Mono metadata. Self-host the Latin variable font, retune long headlines for its natural width, and keep coral limited to primary actions, small arrows and their states. No remaining pages or deployment are authorized.
