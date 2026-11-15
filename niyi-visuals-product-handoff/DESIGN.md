---
name: Niyi Visuals
description: The implemented On Both Sides homepage system for local review.
colors:
  ink: "#0c0c0c"
  surface-dark: "#171715"
  paper: "#f3efe9"
  text-muted-dark: "#b8b1a8"
  rule-decorative: "#34332f"
  control-border-dark: "#6f6c67"
  text-light-page: "#22211f"
  text-muted-light: "#605c56"
  control-border-light: "#827d75"
  focus-dark: "#f0c28c"
  focus-light: "#22211f"
  action-hover: "#dcd5cb"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "clamp(48px, 7.05vw, 96px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  home-story:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "clamp(28px, 3.45vw, 48px)"
    fontWeight: 500
    lineHeight: 1.15
  home-display-mobile:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "clamp(42px, 9vw, 64px)"
    fontWeight: 500
    lineHeight: 1.06
  category-display:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "clamp(48px, 5vw, 72px)"
    fontWeight: 500
    lineHeight: 1.2
  headline:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "clamp(32px, 3.9vw, 56px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "clamp(24px, 2.2vw, 32px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-mobile:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Archivo, Helvetica Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 500
  metadata:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  photograph: "0px"
  control: "2px"
spacing:
  gutter: "clamp(20px, 3.34vw, 64px)"
  grid-gap: "clamp(16px, 2.2vw, 32px)"
  section-space: "clamp(72px, 8vw, 128px)"
  inline: "16px"
  related: "24px"
  heading: "32px"
  group: "48px"
  footer: "64px"
components:
  action-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "12px 22px"
  action-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.ink}"
  action-text:
    textColor: "{colors.paper}"
    typography: "{typography.action}"
  nav-contact:
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  nav-contact-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  work-categories:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.paper}"
    padding: "12px"
  service-arrow:
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    width: "44px"
    height: "44px"
---

# Design System: Niyi Visuals

## Overview

**Creative North Star: "On Both Sides"**

On Both Sides gives the client’s photography the greatest visual weight. Ink grounds, warm paper text, variable Archivo, sparse mono metadata, rectangular images and fine rules produce a confident, human editorial system. Color comes primarily from the registered photographs; interface ornament remains quiet.

This record describes the built homepage and shared foundation only. It is evidence for local homepage review, not a claim that the remaining pages, a viewer, a contact form or production integrations exist. The pinned direction is already selected; this document records its implementation.

**Key Characteristics:**
- Real photography leads; text stays on a solid ground.
- Asymmetric image scale with continuous readable prose.
- Quiet links, thin rules and restrained state feedback.

Source authority: `src/styles/tokens.css`, `src/styles/global.css`, `src/pages/index.astro`, `src/components/`, and `src/scripts/interactions.ts`. The visual direction lives in `PRODUCT.md`; the homepage composition lives in `.impeccable/surfaces/src-pages-index-astro.md`. The final local-review verdict is `.impeccable/review/finish-review.md`. These documents remain separate rather than being duplicated here.

## Colors

Warm neutrals keep the photographic color and human subjects prominent. The frontmatter contains the canonical values.

### Neutral

- **Ink** is the page ground, opaque sticky header, selected inverse text and backdrop.
- **Dark surface** distinguishes the native mobile navigation, category disclosure and reserved image/failure frames.
- **Warm paper** supplies primary text and filled actions; **action hover** gently darkens the filled action.
- **Muted dark-page text** softens supporting prose, captions and metadata without hiding them.
- **Decorative rule** divides sections; **dark control border** identifies interactive outlines. These have distinct roles.
- **Warm focus** is the dark-page focus indicator. It is a functional accent rather than a decorative brand color.
- **Light-page text**, **muted light-page text** and **light focus** are used in the homepage’s paper-colored biography chapter. **Light control border** is reserved for future practical pages. No separate paper-themed content page is implemented.

**The Photographic Color Rule.** Preserve the registered photographs’ original color or monochrome treatment; the interface stays neutral.

## Typography

**Display / body / UI:** Archivo, with Helvetica Neue and sans-serif fallbacks. The self-hosted WOFF2 declares weight (100–900), stretch (62%–125%), normal style and `font-display: swap`. The display uses real font stretch (90%); body and UI retain normal width. The built hierarchy uses regular prose (400) and medium headings/actions (500).

**Metadata:** Roboto Mono, monospace fallback, self-hosted normal weight (400), `font-display: swap`. Font assets and OFL notices remain in `public/fonts/`; only Archivo is preloaded by `src/layouts/BaseLayout.astro`.

- **Display:** Home uses `clamp(48px, 7.05vw, 96px)` and 1.06 leading. The original “Where action” / “meets emotion” phrase spans one desktop row; the rest of the original headline is a muted 28–48px line beneath it. Below 768px the two main phrases form opposing left/right aligned lines at `clamp(42px, 9vw, 64px)` (40px below 360px); the remaining words use 24–34px. Both actions remain before the photograph in DOM and visual order.
- **Headline / title:** reusable H2/H3 roles retain the frontmatter hierarchy. The leading Sport category has a deliberate 48–72px display treatment beside the photograph, returning to 32px on mobile. Other categories remain 26–40px. The inquiry H2 retains its 40–72px treatment. These are intentional named variants, not a replacement body scale.
- **Body:** 18px at tablet/desktop and 17px below 768px. Hero and biography prose use 1.65 leading; service and inquiry prose use 1.6. The first biography paragraph remains a distinct 24–32px introduction at 1.2 leading. Biography is bounded to 57ch, hero supporting text to 39ch (45ch mobile), and inquiry supporting text to 35ch (32ch mobile).
- **UI:** actions use the frontmatter role; desktop navigation uses 15px, with selected narrow-screen secondary actions at 14px. Minimum interactive geometry is preserved independently of text size.
- **Metadata:** default 12px; photo captions use 1.45 leading. The mobile hero context/caption and narrow footer use 10px for short non-prose labels. Do not promote those small exceptions into a general text role.

**The Reading Voice Rule.** Use Archivo for prose and UI; reserve Roboto Mono for short metadata.

## Layout

The shared container is `min(calc(100% - gutter * 2), 1440px)` and centered. Fluid gutter, grid gap and section spacing are recorded in frontmatter; gutter becomes 16px below 360px. The opaque sticky header reserves 88px, switching to 72px at 900px and below. Anchor scroll offsets add 24px to header height.

The homepage now separates the wide typographic opening from its full-width landscape celebration image, with the original supporting copy and exploration link underneath. On desktop the headline’s secondary line and the two actions share a baseline; tablet/mobile actions flow beneath the heading. No essential text overlays the photograph.

The leading Sport feature is an 8/3 image/category-caption grid with a large title and ruled action; its photograph is 1.15. The following Parties/Lifestyle spread uses a 6/5 grid, 40–144px gap and a 96px Lifestyle offset. Parties has a broader 1.05 crop while Lifestyle retains 4/5. Below 768px the lead stacks with a normal caption, Sport and Parties return to 4/5, and Lifestyle remains 86% wide and right aligned.

The personal story is a full-width paper-colored chapter. Inside its container, a 7/4 reading-column/portrait grid reverses the earlier photograph-left arrangement. The original five paragraphs precede the inset 3/4 monochrome portrait in DOM order. Mobile stacks in that same reading order, with the portrait at 80% width aligned right. Prose uses light-page color tokens; focus is dark ink on paper and selection reverses to ink/paper.

Services remains 4/8 (3/8 on tablet) on ink; inquiry remains 1/1. The service rows and footer keep their existing responsive structure. The celebration is 2.2 on desktop and 1.5 below 768px; running remains 2.35/1.5. Focal records and original color/monochrome treatments remain in `src/content/photos.ts` and are unchanged.

`PhotoFigure.astro` uses cover cropping, explicit intrinsic image dimensions and reserved aspect frames. Astro generates WebP/JPEG derivatives at supported widths among 480/768/1280/1920px with quality 83. The hero is eager/high priority; supporting images are lazy. A failed image keeps its frame and descriptive text.

## Elevation & Depth

There are no box shadows. The header and modal use solid neutral grounds; borders, contrast and spacing establish separation. The native dialog occupies the viewport above an ink backdrop. Photography sits within clipped rectangular frames rather than raised cards.

**The Flat Surface Rule.** Separate regions with tone, spacing and fine rules; do not introduce decorative shadows.

## Shapes

Photographs and content surfaces have square corners. Outlined and filled controls use the small control radius from frontmatter and a 1px border. Rules remain hairline separators. Arrows, chevrons and close controls are inline stroked SVGs; names accompany icon-only controls. No invented mark or ornamental badge extends the brand.

## Components

### Actions and service links

Primary actions are warm paper on ink, with content-sized padding and at least 48px height. Text actions use a persistent thin underline that strengthens on hover; filled actions darken gently. The outlined Contact navigation action inverts on hover. The generic outlined action variant exists in `ActionLink.astro` but is not used as a homepage content action. State feedback takes 160ms; pressed action movement is 1px over 120ms only when motion is allowed. Service rows are full destination links with a thin bottom rule, muted description and a bordered 44px arrow that inverts on hover.

### Navigation and native modal

Desktop uses the text identity and Work / Services / About / Contact. Work remains a destination link alongside an independent 44×48px category disclosure button, with accurate expanded state. Its bordered dark list closes on outside activation, focus departure and Escape; Escape returns focus to its control. The chevron turns over 180ms.

At 900px and below, a 48px Open menu button opens a native `dialog` with `showModal()`. The close control receives focus; the browser supplies modal focus containment and an inert background. Close, Escape, navigation and a return to desktop close it; the script restores scroll and opener focus. The viewport-height dark surface scrolls on short screens and respects bottom safe area. Ordinary links retain ordinary navigation semantics. Home is marked current in mobile/footer navigation. With JavaScript disabled, a separate visible link navigation replaces the menu trigger.

### Photography and category links

Each category feature is a single full-image/title/action link. Caption titles stay adjacent to their action and image. Fine-pointer hover scales only the category image to 1.02 over 360ms using the shared ease-out curve; reduced motion disables the effect. Photo records retain placement ID, alt and crop data without publishing the internal research ledgers.

### Focus and motion

The implemented focus treatment is a 2px warm outline with 5px offset on ink, overridden with dark ink inside the paper biography chapter. Skip to content appears on focus. Links remain usable without animation or scripts.

The shared easing is `cubic-bezier(0.22, 1, 0.36, 1)`. A loaded hero image can settle from 1.015 to 1 over 400ms; at widths of at least 768px the title can settle up to 8px over 400ms. The first work feature enters once by 12px over 400ms at a 0.12 intersection threshold. These are progressive enhancements with visible starting content. Menu entrance is a 220ms opacity change. Reduced motion sets animation/transition durations to zero and bypasses scripted entrances. No ambient loops or paragraph-by-paragraph reveal sequence exists.

This scope contains no image enlargement viewer or inquiry form. The inquiry closure is a link to Contact. Other content routes are local dev/preview handoffs to existing-site destinations, not completed local pages; do not use this documentation as evidence of their implementation.

## Do's and Don'ts

### Do:

- **Do** preserve photograph identity, meaningful alt text, reserved geometry and the recorded focal positions.
- **Do** keep linked image, full category name and action together as one destination.
- **Do** retain the 18px tablet/desktop and 17px mobile prose roles, with the larger biography introduction distinct.
- **Do** keep content visible before enhancement and make reduced motion static.
- **Do** use destination links and state-changing buttons with visible keyboard focus.

### Don't:

- **Don’t** substitute stock or generated portfolio photographs, invented logos or business claims.
- **Don’t** turn the work sequence into three uniform cards or put long prose in tracked mono.
- **Don’t** place readable content behind photographic overlays or depend on hover alone.
- **Don’t** infer a paper-themed page, viewer, inquiry form, hosting service, CMS or production origin from this homepage record.

## Homepage differentiation revision — 15 November 2026

The user requested clearer visual distance from the original Pixieset website while retaining On Both Sides. The wide opening, separate landscape image, leading Sport caption and paper biography chapter are the resulting approved-scope design changes. The revision keeps the same fonts, neutral palette, source copy and photographs. PRODUCT.md v1.1 records this change; the other seven pages remain behind the homepage approval gate.
