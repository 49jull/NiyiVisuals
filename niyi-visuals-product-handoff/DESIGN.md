---
name: Niyi Visuals
description: An editorial photographic register in paper, charcoal and restrained vermilion.
colors:
  paper: "#f7f7f2"
  ink: "#24251f"
  muted: "#66675f"
  line: "#d0d1c8"
  surface: "#edede6"
  accent: "#bd361e"
  accent-hover: "#972d1a"
  contact-ground: "#eaeae2"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(48px, 5.95vw, 96px)"
    fontWeight: 500
    lineHeight: "1.035"
    letterSpacing: "-.04em"
  display-mobile:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(38px, 10vw, 68px)"
    fontWeight: 500
    lineHeight: "1.07"
    letterSpacing: "-.04em"
  story-line:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(17px, 1.75vw, 24px)"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "-.02em"
  headline:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(38px, 4.2vw, 64px)"
    fontWeight: 500
    lineHeight: "1.05"
    letterSpacing: "-.035em"
  project-title:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(42px, 5.6vw, 80px)"
    fontWeight: 500
    lineHeight: "1.05"
    letterSpacing: "-.035em"
  card-title:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(18px, 1.7vw, 24px)"
    fontWeight: 500
    lineHeight: "1.35"
    letterSpacing: "-.025em"
  perspective:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(26px, 3.1vw, 46px)"
    fontWeight: 400
    lineHeight: "1.3"
    letterSpacing: "-.03em"
  body:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  body-introduction:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "normal"
  nav:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  label:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  caption:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  wordmark:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: "1.6"
    letterSpacing: "-.04em"
  contact-display:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(48px, 7vw, 96px)"
    fontWeight: 500
    lineHeight: "1.05"
    letterSpacing: "-.04em"
  contact-email:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(22px, 3.4vw, 48px)"
    fontWeight: 400
    lineHeight: "1.3"
    letterSpacing: "-.03em"
  footer-signature:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(48px, 11.6vw, 196px)"
    fontWeight: 500
    lineHeight: "1.25"
    letterSpacing: "-.04em"
rounded:
  square: "0"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  control: "20px"
  lg: "24px"
  xl: "32px"
  xxl: "40px"
  section-small: "64px"
  section-medium: "80px"
  gutter: "clamp(20px, 3.4vw, 64px)"
  section: "clamp(80px, 10vw, 160px)"
components:
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0 0 0 12px"
    height: "44px"
  filter-selected:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    padding: "0 0 0 12px"
    height: "44px"
  view-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.caption}"
    padding: "0 13px"
    height: "38px"
  view-selected-mobile:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.caption}"
    padding: "0 10px"
    height: "44px"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    height: "48px"
  project-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.square}"
  project-index:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "18px 0"
  image-retry:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "8px 16px"
    height: "44px"
    rounded: "{rounded.square}"
  project-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    width: "100%"
  contact-link:
    textColor: "{colors.ink}"
    typography: "{typography.contact-email}"
    height: "48px"
    padding: "0 0 8px"
---
# Design System: Niyi Visuals

## Overview

**Creative North Star: "On Both Sides"**

On Both Sides expresses a personal photographic practice as a precise, independent publication. The near-white field, charcoal type and sparse vermilion details leave the registered photographs in charge. One proportional sans family moves from compact navigation to generous editorial statements without adding a second typographic voice.

The reusable signature is continuity: a photograph keeps its identity as the surrounding register changes density or opens into a reading panel. Rectangular imagery, asymmetry, fine rules and ordinary scrolling create energy without decorative effects. This is the implemented local world, extracted from source after the explicit 16 November 2026 redesign authorization; it replaces the older dark/coral and mono design record. No approved visual comp was supplied.

**Key Characteristics:**

- Real client photography and descriptive editorial selection labels.
- One Plus Jakarta Sans family with a deliberate hierarchy of display, reading and register roles.
- Flat paper surfaces, fine rules, offset image scales and restrained vermilion feedback.
- Connected Grid/Index/filtering and shared-photo detail, with static-page destinations.

## Colors

A quiet paper-and-charcoal palette gives the photographs their full color range; vermilion is a scarce navigational signal. Frontmatter values are normative and map directly to the same-named CSS custom properties, except `contact-ground`, which records the contact section’s authored literal.

### Primary

- **Vermilion** (`accent`): selected category/dot, focus outline, name and headline punctuation, small directional feedback, selection highlight.
- **Deep vermilion** (`accent-hover`): supplied companion token, currently not applied to a rendered state; retain only as an incumbent reserved accent variant.

### Neutral

- **Near-white paper** (`paper`): page, navigation dialog and project panel.
- **Charcoal** (`ink`): headings, reading text, selected layout indicator and structural dark strokes.
- **Muted olive-gray** (`muted`): secondary prose, category labels, ordinals and contextual captions.
- **Fine rule** (`line`): dividers, row boundaries and toolbar structure, never a substitute for text contrast.
- **Image surface** (`surface`): reserved photograph geometry, loading/error field and layout-control ground.
- **Contact ground** (`contact-ground`): slightly denser neutral closing chapter. Its footer uses the authored secondary rule and muted-text literals; they are local details, not new accent families.

**The Photographic Color Rule.** Preserve each registered photograph’s color or monochrome treatment; keep interface grounds neutral and vermilion confined to punctuation, selected states, focus and small action details.

## Typography

**Display Font:** Plus Jakarta Sans, with Helvetica Neue and sans-serif fallbacks.
**Body Font:** The same family.
**Label/Mono Font:** The same proportional family; no mono role.

The self-hosted Latin variable font supplies weights 200–800 with `font-display: swap`; the public hierarchy mostly uses regular, medium and semibold. Tight display tracking and balanced headings contrast with natural reading tracking. This is an optical, role-based scale rather than a fixed mathematical ratio.

### Hierarchy

- **Display:** the original action/emotion heading; the smaller story line remains a separate subordinate clause. See `display`, `display-mobile` and `story-line` tokens.
- **Headline:** personal-story and contact headings; the reading panel has its own `project-title` role.
- **Title:** descriptive gallery titles and compact Index names. Index uses (24px) desktop and (18px) mobile.
- **Body:** prose uses the `body` role, with the biography introduction enlarged through `body-introduction`. Biography paragraphs are limited to (56ch); selection descriptions to (48ch); opening introduction to (29ch). Mobile opening introduction uses (14px) without reducing the biography body.
- **Label:** filters, context and metadata use the label/caption/nav roles. Source-specific supporting sizes span (10–16px); (10–11px) are reserved for short counts or category metadata, not prose. Source also uses (15px) service descriptions/actions, (16px) mobile detail prose, (19px) mobile toolbar headings, (21px) mobile wordmark, (22px) mobile biography/service type, and (28px) mobile perspective.
- **Signature:** `footer-signature` is an intentionally oversized closing name, separate from navigational identity. It reaches its authored large display cap and uses (11.1vw) on mobile; it is `aria-hidden`, while the real identity remains in the header and copyright line. Mobile menu links use (48px).

**The One Family Rule.** Use Plus Jakarta Sans for every public type role, including labels, ordinals and navigation; do not reintroduce mono or a second display family.

The advisory detector’s generic “overused font” warning is an intentional exception because the user explicitly required this family. Its oversized-type heuristic also yields to the footer signature’s authored role. Do not infer permission to enlarge ordinary headings. Old-DESIGN palette/type warnings describe the superseded record, not a reason to restore it.

## Layout

The content frame is centered, capped at (1680px), with the fluid `gutter` token. Reading-panel content caps at (1520px). A compact header and two-column editorial opening lead into work; whitespace between chapters uses `section`. Repeated intervals use the frontmatter spacing scale, with image-sequence offsets authored per composition rather than forced into equal cards.

Desktop Grid uses twelve columns, (32px) horizontal gaps and (88px) vertical gaps, with varied spans and vertical offsets. It compresses to (24px/64px) gaps below (1100px). Below (700px), four columns and (12px/40px) gaps preserve deliberate inset portraits while most images span the width. Below (359px), gutter becomes (16px). Index uses thumbnail-plus-caption rows, (88px) thumbnails and (28px) gaps desktop; mobile uses (68px) thumbnails, (16px) gaps, hides ordinals and moves category beneath the title. The toolbar wraps filters below the heading/view controls at the middle breakpoint. It stays sticky at (top: 0; z-index: 10) on the paper ground, keeping controls reachable and above moving photographs during rapid input.

The opening landscape is cropped to (1.55) desktop and (1.5) mobile. Portraits retain differing authored ratios; the final Sport cover uses (.75) to preserve the complete head. Crops are image-specific, never universal. Detail covers use their natural image ratio, `object-fit: contain`, centered actual frame width and a viewport-height ceiling of (78vh) desktop / (70dvh) mobile. Supporting photographs retain natural geometry. Original photographic treatments remain unchanged.

The layout is ordinary document scrolling. About, services and Contact stack at the mobile breakpoint; the desktop navigation becomes a native menu dialog there. Avoid sticky decorative furniture. Exact viewport, zoom and runtime acceptance belongs in QA.md; this document records source intent and the known review corrections, not a conformance or performance certificate.

## Elevation & Depth

No decorative shadows are used. Fine neutral rules, paper-tone changes, image scale and whitespace separate chapters. The full-window project panel establishes depth by replacing the viewing plane, with a sticky paper toolbar; the native mobile dialog uses the same paper field. There is no glass, blur, texture or simulated physical card material.

**The Flat Surface Rule.** Establish hierarchy with scale, spacing, neutral tone and fine rules; do not add decorative shadows or floating card treatments.

## Shapes

Photographs, controls and reading surfaces are square-cornered. The small circular selected-filter dot is the sole repeated rounded marker; it is a state cue, not a general radius system. Fine strokes and restrained inline arrows replace boxed CTA furniture. Images reserve geometry before loading. Failure treatment occupies the same frame and must not move adjacent content.

## Components

### Navigation and destination links

Text-forward and compact. A real name link, Work count, About and Contact sit on a ruled header. Navigation anchors have (48px) minimum height and vermilion hover feedback. Mobile Menu opens a native dialog; Close receives initial focus, expanded state tracks native closure, Escape closes and focus returns to Menu. The menu is paper, with large simple links. Do not use a fabricated logo.

The single build-time public content entry is `src/content/portfolio.ts`, which aggregates the preserved `home.ts` and `site.ts` content and resolves asset metadata before rendering. Public copy reaches the React island as typed props; React imports only the erased `PortfolioCopy` type, never build-time image metadata or a second content entry. Keep provenance and internal records outside the public projection.

### Category filters

Plain state-changing buttons in a labelled group, not pill badges. Default labels are muted; pressed labels and their small dot are vermilion. The source uses (44px) minimum button height and `aria-pressed`. Each filter reserves constant (12px) left padding; its selected dot is absolutely positioned at the left edge so changing selection never shifts control widths. A polite, visually hidden status reports visible count, category and view without announcing every loading photograph.

### Grid / Index switch

A small rectangular control on the neutral `surface` ground. The active option is charcoal with paper text; the inactive option is transparent. Inline Grid/Index SVGs accompany text. Buttons use `aria-pressed`; their shared indicator uses the quick spring. Desktop buttons retain the authored (38px) minimum height; mobile buttons use (44px) with (10px) inline padding, reducing to (7px) below the narrow breakpoint. Keep the active state visible without relying on animation.

### Photographic selection card and Index row

Semantic `article` and destination anchor; a registered image, descriptive `h3`, category and arrow form one destination. No card shell, shadow or rounded clipping. Hover underlines the title and accents the arrow; fine-pointer, motion-allowed hover moves the arrow only (2px). Index retains the same identity in a compact ruled row. Numbers describe register position, not a date. Ordinary and modifier-click destination behavior must remain native when enhancement does not handle it.

### Photograph loading and recovery

Each image carries real alternative text, source dimensions, focal point, responsive sources and decoding/loading hints. Geometry stays reserved. “Loading photograph…” is visual and hidden from assistive announcements. Failure exposes a status with the image description; detail images add a (44px) minimum-height Retry photograph button. Cached requests that finish before hydration are checked for a completed image with zero natural width. Retry clears the failed state and requests another source attempt. Gallery navigation remains available after image failure.

### Shared photograph / project reading panel

The selected photograph shares its stable layout identity between the gallery and full-window reading panel. The panel has dialog semantics, an inert background, contained Tab navigation, Escape, initial Back-to-work focus and an explicit return. It includes descriptive title, category/medium, registered sequence photographs, original-collection access, Next selection and direct email. Browser Back and closing are designed to restore layout, filter, exact saved scroll (including zero) and originating link focus; direct static URLs keep an obvious return. These are behavioral requirements, not claims that the current document independently tested them.

Motion uses an interruptible layout spring (stiffness 230, damping 31, mass .85), a faster indicator spring (460/37), short filter exits and supporting text after the photograph begins moving. The sidecar records authored timings. MotionConfig follows the user preference; `?motion=reduce` supplies a calm-mode override. Shared-photo layout IDs and image/caption/indicator layout props are explicitly disabled in reduced mode, in addition to parent layout flags and zero-duration text/exit paths. Spatial transitions must vanish under reduced motion; ordinary scrolling remains unchanged. Browser confirmation is recorded separately.

### Contact and service destinations

Contact is a readable neutral chapter with the real email as its primary underlined destination, followed by callable telephone, location and supplied social links. Hover accents the email and underline. These are honest `mailto:`/`tel:` destinations, not an inquiry form or simulated receipt. Service rows link to the original authoritative commercial page while terms remain unresolved. There is no implemented input/field component to document.

## Do's and Don'ts

### Do:

- **Do** preserve photograph identity, meaningful alternatives, reserved geometry and image-specific focal positions.
- **Do** use semantic destination links and state-changing buttons, with visible focus and clear pressed states.
- **Do** retain the asymmetry of the Grid and the compact density of the Index while keeping their images and labels connected.
- **Do** keep original factual copy, direct contact methods and clearly labelled original collection links.
- **Do** make spatial motion interruptible and honor the user’s reduced-motion preference.

### Don't:

- **Don’t** substitute stock or generated portfolio images, invent logos, dates, clients, endorsements or filmmaking claims.
- **Don’t** revive the superseded dark/coral palette or mono metadata system.
- **Don’t** turn all photographs into uniform boxed cards, round their corners or place reading copy over them.
- **Don’t** use a decorative cursor, parallax, sound, a sphere or motion that obstructs ordinary scrolling.
- **Don’t** interpret this local design record as approval to publish, migrate hosting, add a CMS or send an inquiry.
