# Niyi Visuals — website analysis and redesign blueprint

**Prepared 15 November 2026 · Analysis and planning only**

**Recommendation:** develop **On Both Sides**, an editorial photography direction built around Niyi's experience as both an athlete and a photographer. Retain the dark photographic setting, authentic work and existing Archivo family. Improve reading comfort, give the strongest images more room, and make the journey from a relevant gallery to a clear inquiry dependable.

The largest opportunity is to make an existing personal perspective visible. This does not require an invented luxury identity, a new set of claims or a technically elaborate showcase.

**Deliverable set**

- [Current content and preservation inventory](content-inventory.md): eight successful pages, one linked error destination, section order, factual content, short original labels, package facts and editorial decisions.
- [Photographic asset register](asset-register.md): all 100 image placements, each with inspected and sitemap URLs.
- [Asset data](asset-register.json) and [link data](link-register.json): structured reference material for a later migration.
- [Existing desktop homepage](evidence/home-desktop.jpg), [mobile homepage](evidence/home-mobile.jpg), [tablet homepage](evidence/home-tablet.jpg), [portfolio](evidence/portfolio-desktop.jpg), [services](evidence/services-desktop.jpg), [mobile contact](evidence/contact-mobile.jpg), [mobile menu](evidence/menu-mobile.jpg), and [linked 404](evidence/gallery-4-error.jpg): audit evidence, not redesign mockups.

Long original prose is referenced and described rather than fully reprinted. An owner-provided site/content export is still needed for verbatim migration. All recommendations below are proposals for review; none have been implemented.

## 1. Evidence, coverage and limits

### What was inspected

The live [website](https://niyivisuals.mypixieset.com/) was explored through its header, Portfolio dropdown, body links, footer and [XML sitemap](https://niyivisuals.mypixieset.com/sitemap.xml). All eight published sitemap pages were opened: Home, About, Services, Portfolio, Sport, Party's, Lifestyle and Contact. The additional `/gallery-4/` destination was opened and displayed an error page.

Desktop inspections included approximately 1366 × 900 and 1440 × 1000 viewports, with a wider Services check at 1920 × 1080. Mobile inspection used 390 × 844, and tablet checks used 768 × 1024. The initial browser was also a narrow viewport. Screenshot dimensions can differ slightly from the requested viewport because the browser excludes scrollbars or captures its content area. These were browser viewport checks, not a physical-device test lab.

Interactions included rejecting nonessential cookies; opening desktop and mobile menus; expanding the mobile Portfolio submenu; opening a Sport photograph; advancing the desktop lightbox; dismissing the lightbox with Escape; opening an image on mobile; focusing a form field; opening the mobile menu with Enter; trying Escape on the mobile menu; following a mismatched portfolio text link; and following a gallery's fragment-only inquiry link. All visible internal destinations were extracted into the link ledger. Public Instagram and TikTok destinations and the Pixieset attribution destination opened successfully.

### Evidence vocabulary

- **Observed:** visible content, destination, interface behavior or inspected document styling.
- **Interpretation:** a reasoned assessment of that evidence; not analytics or user research.
- **Proposed:** a future design, content or technical decision.
- **Unverified:** a fact or behavior the inspection could not establish.

### Limits that matter

No inquiry was submitted and no personal data was entered. Form delivery, validation responses, spam prevention, booking completion and email receipt remain unverified. No authenticated dashboard, original image library, analytics, Search Console or private client collection was accessed. No screen-reader session, exhaustive keyboard traversal, touch-device swipe test, laboratory performance benchmark or field Core Web Vitals measurement was performed. Browser loading delays were observed but not converted into invented speed scores.

No extra public route was found beyond the eight sitemap pages and the linked error destination. This cannot prove that unpublished or unlinked pages do not exist. Hover styles were partially assessed through rendered states and computed transitions; there was no exhaustive pointer-hover test of every element. Reduced-motion behavior on the current site was not fully verified.

A direct web-text fetch of the main site was unavailable, so the inventory relies on the rendered browser document and live sitemap. One supplementary reference, Samo Vidic's site, returned a browser certificate error; it was not bypassed and is not used as a visually verified design reference.

## 2. Business, audience and brand

### Observed business identity

The site identifies **Niyi Scholten**, based in **Apeldoorn, The Netherlands**, as a photographer. Three main public categories are Sport, Party's and Lifestyle. About additionally names Portraits. Services publishes prices, duration limits, photo-quantity descriptions and a two-week photo-delivery statement. Contact offers a form, a Gmail address and a Dutch-format mobile telephone number. The FAQ also offers social media and WhatsApp contact. These are inquiry channels; there is no observed instant booking or checkout.

The site describes a football background involving FC Twente, Ajax and Vitesse and explains that injuries led to a photographic career. It names players with whom Niyi says he shared the pitch. These are personal-history claims from the [About page](https://niyivisuals.mypixieset.com/about/), not verified endorsements, client relationships or a basis for a club-logo wall.

### Likely audiences — interpretations to validate

| Audience | Likely need | Evidence the site should surface | Useful next action |
|---|---|---|---|
| Athletes, teams and sports organizers | Assess whether the photographer can anticipate action and capture personal meaning | Relevant action, portraits, atmosphere and celebration; athlete background | Sport gallery, then service details or inquiry |
| Party hosts and event organizers | Know whether people and atmosphere will be represented naturally | Real crowds, interactions, groups and celebration; duration options | Party gallery and package information |
| Individuals seeking lifestyle images | Judge personal style and comfort with portraiture | Outdoor and studio-style portraits, genuine expressions, varied personal moments | Lifestyle work and inquiry |
| Social-media referrals | Confirm identity and quickly find relevant work or contact | Consistent name/handle, immediate categories, direct contact route | A category or short inquiry |

The site does not establish audience proportions, average budgets, geographic reach, commercial usage requirements or whether acquisition is primarily social or search. Do not design around an unverified assumption that all visitors are professional football clubs or luxury clients.

### Positioning and personality

**Interpretation:** the differentiator is empathy formed through lived sporting experience. Niyi understands the personal value of a photograph after the moment has passed. That connects the football work, party photographs and lifestyle images more naturally than a narrow “elite sports” identity.

The current writing is energetic, informal, personal and direct. The dark environment and image selection support confidence and intensity; the story adds warmth. The intended redesign should feel **premium in editing and craft, approachable in communication, and rooted in real people**. Avoid corporate-agency language, staged stock photography and exclusive luxury signals unsupported by the work or service model.

**Primary objective:** generate relevant inquiries from people who have seen suitable work and understand the offer. **Secondary objectives:** establish identity and trust, make prices and delivery basics legible, and help visitors move between related work and services. Proposed measures for a later launch are successful inquiry delivery, category-to-contact visits, pricing-to-contact visits and contact-link usage; no current conversion baseline is known.

## 3. Current design audit

### What should survive

1. **Real photographic material.** The site has a substantial body of sports action, celebration, social scenes and portraiture. The images already provide energy and color.
2. **A personal reason to care.** The football-to-photography story is more distinctive than generic claims of passion or excellence.
3. **A coherent dark base.** Black and warm gray let saturated photographs carry the visual identity.
4. **An appropriate heading family.** Archivo has directness and sufficient range to support a more disciplined layout.
5. **A small, comprehensible site.** Eight public pages and three main categories are an appropriate scale. An unnecessary mega-menu or elaborate taxonomy would add work for visitors.
6. **Visible commercial information.** Published price lines and delivery basics help visitors make a decision even though their meanings need clarification.
7. **A working image-enlargement pattern.** Keep the lightbox's practical purpose while improving its semantics and mobile controls.

### Priority findings

| Priority | Observed element | Why it matters | Proposed response |
|---|---|---|---|
| Essential | Portfolio image links and adjacent View Gallery links disagree across all three categories | A visitor can choose Sport and arrive in Party's, or choose Lifestyle and reach a 404 | One authoritative category destination shared by image, title and text link |
| Essential | All three gallery inquiry CTAs point to `#` | An interested visitor reaches a dead end at the point of inquiry | Route every gallery inquiry CTA to Contact; optionally carry a visible, editable category preference |
| Essential | Homepage Party's and Sport text initials link to the opposite galleries; only the first letters are linked | Small hit areas and misleading destinations weaken navigation | Make each complete category label a meaningful link to its correct gallery |
| Essential | Form fields have visible text labels but no inspected associated labels or accessible names; required markers lack native required semantics | Screen-reader users may not know which field they are editing; validation expectations are unclear | Explicit labels, required semantics, useful errors and tested server validation |
| High | All 100 inspected image elements have empty alt text | Most of the portfolio's meaningful content is unavailable as text; linked images can have no useful name | Human-reviewed descriptions and explicit accessible names for gallery controls |
| High | Dollar symbols and ambiguous package notation | Visitors cannot confidently understand price applicability | Owner confirmation before reformatting or changing prices |
| High | Small monospaced paragraph text, roughly 14px with 25px leading on desktop | Long biography text feels dense and unnecessarily mechanical | Proportional body text at 17–18px; reserve mono for short metadata |
| High | Copy and navigation sit on variable, sometimes bright photographic areas | Contrast changes with crop; readability is unreliable | Put essential copy on solid ground; use a small tested scrim only where needed |
| High | Mobile contact image precedes the form | Decorative content delays the primary action | Move direct contact and fields above the supporting photograph |
| High | Empty meta descriptions on all eight inspected content pages; gallery titles are numbered | Search previews and page identity miss useful context | Specific page titles/descriptions and meaningful gallery labels |
| Medium | Desktop header remains over content while scrolling; bottom attribution strip occupies viewport space | Text and photographs pass beneath interface chrome | Compact opaque header; reserve space; review permitted attribution placement |
| Medium | Services and portfolio use strong offsets but weak grouping between headings, text, links and images | Visitors must infer which elements belong together | Keep asymmetry, tighten semantic and spatial grouping |
| Medium | Repeated large contact closures with sparse space between heading and button | More scrolling without equivalent decision value | Compact inquiry closure with context and one clear action |
| Medium | Mobile menu remains reported as collapsed while open; Escape did not dismiss it in the test | Assistive-state communication and keyboard behavior are inconsistent | Named control, accurate state, focus management, Escape and focus return |
| Medium | Social links expose icon glyphs rather than clear names in the accessibility tree | Their meaning can be lost | Named text links or labeled SVG icons |

The original [Portfolio](https://niyivisuals.mypixieset.com/portfolio/), [Services](https://niyivisuals.mypixieset.com/services/) and [Contact](https://niyivisuals.mypixieset.com/contact/) pages underpin these findings. The detailed label/destination mappings are preserved in the content inventory.

### Visual composition, spacing and hierarchy

The site already attempts editorial composition: uneven image sizes, offset columns and large photographs. The problem is not a lack of visual variety. It is inconsistent relationships. On Home, the About heading can sit visually below the introduction it labels. On Portfolio, a category's title and its gallery link sit far apart and lead to different destinations. On Services, the middle package begins with its photograph while neighboring packages begin with text. This is expressive but makes comparison harder.

Keep a deliberate asymmetrical grid for showcasing images. Use a quieter, aligned structure when people compare prices, read a biography or complete a form. Give space a job: separate categories, frame a major photograph or distinguish a new topic. Remove blank spacer paragraphs and arbitrary vertical offsets where they merely lengthen a page.

Observed heading markup also uses levels for appearance: Home has multiple H1s and category H6s; Services uses H4s for package names and FAQ questions; Contact treats contact details and required asterisks as headings. These are structural issues, not evidence that every visible heading size must change.

### Typography and color baseline

The inspected desktop styles use **Archivo** for major headings at approximately **60px / 66px**, and **Roboto Mono** for paragraphs around **13.984px / 25.171px**, with navigation around **14px** and smaller controls around **12px**. Text-based branding is a simple sans-serif name treatment. These observations concern the rendered style declarations; a complete font-file delivery audit was not performed.

Visible/inspected neutral colors include:

| Existing role | Observed value | Assessment |
|---|---|---|
| Main dark background | `#0C0C0C` | Strong, recognizable foundation |
| Secondary dark surface | `#131313` | Useful minimal separation |
| Warm heading text | `#D6D1CE` | Retain the warm neutral tendency |
| Warm body text | `#E6E1DE` | Can provide strong contrast on solid dark backgrounds |
| Header text | `#FFFFFF` | Requires a controlled background over photographs |
| Button/form border gray | `#9B9A9A` | Refine by component and contrast role |
| Attribution strip | `#2A2A2A` | Keep visually subordinate where platform terms permit |

Default blue values also appear in inspected link styles, including elements whose visible children provide another color. They are not established evidence of an intentional blue brand accent. Similarly, the blue shirts, green pitches and orange banner in the photographs are image content, not proof of official brand colors.

### Current media and technical observations

The site uses a Pixieset-hosted image service with size variants and lazy-loaded images. This is an existing capability to retain, not something the redesign needs to invent. Some image regions initially remained empty and then populated; that calls for stable image dimensions, immediate hero loading and better loading feedback. It does not justify reporting a permanent image failure.

No standalone video player, store, checkout, interactive map, testimonial section, blog or client-login route appeared in the inspected content or sitemap. Do not build them by default. The public asset URLs are resized derivatives; collect originals before a migration. No claim about current total transfer size, JavaScript weight, LCP, INP, CLS or accessibility conformance can be made from this inspection alone.

### Existing motion and interface details

The incumbent is already restrained rather than an elaborate animated showcase. Computed styles exposed navigation-link opacity transitions around 200ms, submenu opacity around 300ms, header background/padding transitions around 300ms, and cookie-banner opacity around 1s. These are declared styles, not frame-by-frame timing measurements. Menu opening/closing and the Sport lightbox were visibly exercised; some images appeared after loading or scroll entry. No autoplay image sequence or video player was observed. The current FAQ answers were visible together, not behind disclosure controls. Do not describe a currently unverified hover treatment or page-transition system as an established feature to preserve.

## 4. Research translated into design decisions

### Relevant references, used selectively

**[Atiba Jefferson's portfolio](https://www.atibaphoto.com/)** was visually inspected. Its emphatic wordmark, simple navigation and decisive graphic identity demonstrate that a photographer can have a strong typographic voice alongside the work. For Niyi, take the discipline of a committed identity and direct hierarchy. Do not borrow its yellow field, oversized name composition, exact type treatment or image assets.

**[The Players' Tribune](https://www.theplayerstribune.com/)** was inspected as an athlete-centered editorial reference. Its prominent human stories and photographic hierarchy are relevant to Niyi's personal perspective. Take the priority given to the person behind a sporting moment. Do not import a publication's article density, advertising environment, large taxonomy or media-company structure into a small service portfolio.

**The incumbent site itself is the main visual evidence:** its team-celebration hero, intimate party scenes, saturated sports images, quieter monochrome portraits and athlete biography. The proposed palette, photographic pacing and tone should be derived from that material, not from reference-site decoration.

## 5. Three genuinely different creative concepts

### Concept 1 — On Both Sides · recommended

**Creative idea:** a photographer's understanding of the athlete and the person gives the work continuity across action, celebration and everyday life. The website behaves like a carefully edited sports-and-people feature.

**Visual style:** dark editorial ground, warm light typography, strong image scale changes and occasional warm-paper information sections. Confident and personal. The image, its category and the reason to contact Niyi remain closely connected.

**Fonts:** Archivo variable for headings and body; Roboto Mono for short captions, indices and image counts. Headings use a moderately condensed width when useful; normal-width text supports reading. This refines two existing families rather than importing a fashionable identity.

**Palette:** `#0C0C0C` ink; `#171715` raised surface; `#F3EFE9` paper/chalk; `#B8B1A8` secondary text; `#34332F` quiet rules. `#F0C28C` is a limited focus accent, not a luxury-gold brand theme.

**Homepage:** compact header; explicit category/location line; existing action/emotion heading refined only after copy approval; a large celebration image; a short selected-work sequence; the athlete-to-photographer story; service entry points; a single purposeful inquiry close. The strongest picture leads before the longer biography.

**Navigation:** Work, Services, About and Contact, with Home available through the brand and explicitly in the mobile menu/footer. Work links to the existing Portfolio route and has an independent category expander. Contact receives a clear outlined or filled treatment without competing with gallery exploration.

**Layout:** large landscape feature, offset portrait pair, then an orderly text section. A recurring baseline, thin rules and small category markers connect pages. Information pages are calmer than gallery pages. No uniform field of rounded cards.

**Imagery:** retain full color where the photographs use it and monochrome where the source is monochrome. Alternate action with reactions and portraits; do not imply that two photographs depict the same match unless confirmed. Preserve faces, hands, the ball and the direction of movement when cropping.

**Motion:** one restrained entrance for the opening composition; short image/link hover feedback; a responsive lightbox. No autoplay hero, ambient loops, custom cursor or scroll hijacking.

**Distinctive quality:** the relationship between athletic action and personal meaning is expressed through editing and page sequence. Warm typography and accurate small captions make the work feel authored rather than decorated.

**Brand fit:** preserves the dark atmosphere, existing typographic roots, real work and first-person sporting story. It supports all three audiences without making parties feel like an afterthought.

**Trade-offs:** requires disciplined image selection and careful crops. A dark website can still become monotonous; the warm-paper service/contact surfaces and varied image scale must be applied consistently. Personal storytelling must not overwhelm quick access to prices.

### Concept 2 — Matchday Notice · bold alternative

**Creative idea:** borrow the organizational confidence of a matchday programme or local sports poster: clear headlines, visible categories, unmistakable practical information.

**Visual style:** graphic, energetic, dense in the right places; bold condensed headlines, hard-edged photographic bands and strong rules. Contemporary local sports culture rather than a futuristic sports-tech interface.

**Fonts:** Barlow Condensed 600–700 for display; Barlow 400–500 for body/navigation. Avoid condensed paragraphs. Use numbers and tabular alignment for real prices, not decorative scores.

**Palette:** `#101820` dark ink; `#F7F4EC` chalk; `#1C4E80` deep blue; `#D84A28` orange-red for large graphic accents; `#B33A1E` for smaller accent text on chalk. Blue and orange relate to colors already present in the team's shirts and celebration banner; this is a proposed new system, not an existing brand specification.

**Homepage:** typography-led introduction in a compact band, followed immediately by a wide sports image and a vertical category index. Other categories use equally decisive image bands. Practical service facts appear as clean rows further down.

**Navigation:** one-line horizontal navigation on desktop; a direct list with visible category sublinks on mobile. Strong active underline. Avoid a novelty scoreboard or tiny sports-icon menu.

**Layout:** a tighter grid with larger type, aligned price schedules and occasional full-bleed images. The page alternates bold typographic notices with photographs rather than maintaining the editorial looseness of Concept 1.

**Imagery:** strong action crops, direct-flash parties and energetic people photography. Preserve quieter portraits as full-size pauses instead of forcing an aggressive treatment onto every picture.

**Motion:** quick 140–220ms control changes and simple directional image reveals. All critical notices remain immediately readable. No simulated countdowns, match tickers or flashing states.

**Distinctive quality:** clear graphic system and confident density. It could be highly memorable at a local or regional sports level without looking like a generic agency.

**Brand fit:** has the strongest immediate sports association and could serve a business choosing to focus primarily on athletes and clubs.

**Trade-offs:** can overstate that specialization and make private parties or gentle portraits feel secondary. Strong colors compete with photographs; the palette requires strict limits. It is a larger identity change than the evidence currently requires.

### Concept 3 — The Personal Edit · quiet alternative

**Creative idea:** a photographer's journal or small photobook, emphasizing people, sequence and the value of keeping a moment.

**Visual style:** warm daylight surfaces, small generous margins around photographs, restrained serif display typography and readable sans-serif text. Intimate, composed and human; avoid turning it into a wedding-photography template.

**Fonts:** Instrument Serif 400 for large titles and a few short reflective lines; DM Sans 400–600 for body, controls and captions. Italic used sparingly and never for prices or form instructions.

**Palette:** `#F4F0E9` warm background; `#252824` text; `#E8E1D6` secondary surface; `#5F6854` olive accent; `#64675F` secondary text. The restrained olive relates to the outdoor portraiture and pitches, without recoloring the photographs.

**Homepage:** an opening diptych pairs an action image and a personal portrait; a compact personal introduction follows. Work is presented as three image-led chapters, then a direct services/contact path. Images remain framed rather than covering the entire screen.

**Navigation:** a small conventional top bar and simple mobile overlay; understated text links, a strong current-page marker and a clear inquiry link.

**Layout:** photobook-like image pairings, short reading columns, restrained image captions and occasional full-width landscape photographs. Information pages use light, spacious rows with clear type hierarchy.

**Imagery:** natural aspect ratios, slower alternation of color and monochrome, more complete bodies/gestures and less dramatic cropping. An owner-approved selection is vital so sports action remains prominent.

**Motion:** mostly static; 180ms fades for controls and image enlargement. No page-wide reveal choreography. The softness comes from composition and pacing.

**Distinctive quality:** makes the emotional and personal aspect of the work tangible, particularly for portraits and private occasions.

**Brand fit:** connects with the current biographical emphasis on meaningful memories and personal response.

**Trade-offs:** weakens continuity with the current dark website and can make the sports work feel too gentle. Serif display typography needs restraint to avoid a fashionable but category-generic photography look. It becomes more suitable if lifestyle/portrait clients become the dominant audience.

### Selection

| Decision criterion | On Both Sides | Matchday Notice | The Personal Edit |
|---|---|---|---|
| Continuity with current identity | Strongest | Moderate | Lowest |
| Balance across three current categories | Strongest | Sports-weighted | People/lifestyle-weighted |
| Supports personal football story | Central | Strong sporting signal, less nuance | Strong emotional signal |
| Makes prices/contact practical | Strong with calm information pages | Strong | Strong, if contrast remains disciplined |
| Requires a major brand repositioning | No | Potentially | Potentially |

Choose **On Both Sides**. Borrow Concept 2's clear comparison rows for Services and Concept 3's readable personal-story pacing for About. Do not mix three palettes or alternate typographic identities. The recommended direction stands on its own without animation.

## 6. Typography directions and selection

### Three suitable systems

| Direction | Heading face | Body / UI face | Weights and scale | Why it fits / risk |
|---|---|---|---|---|
| A. Editorial continuity — recommended | Archivo variable | Archivo; Roboto Mono only for short metadata | Display 500–600; body 400; navigation 500; mono 400. Display roughly 48–96px by viewport | Preserves the existing heading voice while eliminating long mono paragraphs. Width variation gives controlled athletic energy. Avoid excessively compressed headings. |
| B. Programme graphic | Barlow Condensed | Barlow | Display 600–700; body 400; UI 500–600. Display 56–112px; body 17–18px | More explicit sports character and efficient large titles. Too much uppercase/condensation can feel promotional. |
| C. Personal photobook | Instrument Serif | DM Sans | Serif 400 Roman/occasional italic; sans 400–600. Display 48–88px; body 18px | Supports portraits and human stories. Higher risk of an overly romantic or generic photography identity. |

Archivo supports variable weight and width and is distributed under OFL according to [Google Fonts metadata](https://github.com/google/fonts/blob/main/ofl/archivo/METADATA.pb). Its foundry describes its print-and-digital purpose and heading origins in the [Archivo specimen](https://www.omnibus-type.com/fonts/archivo/). Roboto Mono's official project provides screen-oriented design and OFL information in the [project repository](https://github.com/googlefonts/RobotoMono).

Barlow Condensed's family and weight availability are documented in [Google Fonts metadata](https://github.com/google/fonts/blob/main/ofl/barlowcondensed/METADATA.pb); its [OFL file](https://github.com/google/fonts/blob/main/ofl/barlowcondensed/OFL.txt) records the license. Instrument Serif offers regular and italic at weight 400 in [its metadata](https://github.com/google/fonts/blob/main/ofl/instrumentserif/METADATA.pb). DM Sans is described as a geometric text face with a variable weight range and optical sizing in [Google Fonts' description](https://github.com/google/fonts/blob/main/ofl/dmsans/DESCRIPTION.en_us.html). Their license files are available for [DM Sans](https://github.com/google/fonts/blob/main/ofl/dmsans/OFL.txt) and [Instrument Serif](https://github.com/google/fonts/blob/main/ofl/instrumentserif/OFL.txt). The regular Barlow family also has an [OFL license file](https://github.com/google/fonts/blob/main/ofl/barlow/OFL.txt). Retain the notices supplied with the final downloaded files.

These are web-available families. For the eventual build, self-host only required web subsets/weights where appropriate, retain supplied notices, and verify the actual files rather than assuming a font on a designer's computer is licensed or suitable for web delivery. No paid font purchase is required by the recommended system.

### Recommended type specification

Sizes are proposed design values, not measured incumbent values. Interpolate within viewport ranges; do not force manual line breaks that create overflow in another language or at 200% zoom.

| Role | Font / weight | Mobile | Tablet | Laptop / wide desktop | Line height | Tracking |
|---|---|---:|---:|---:|---:|---:|
| Main display | Archivo 500, width about 88–95% | 44–48px | 60–68px | 80–96px | 1.02–1.08 | −0.025em |
| Page H1 | Archivo 500 | 40–44px | 56px | 64–72px | 1.08 | −0.025em |
| Section H2 | Archivo 500 | 30–34px | 40px | 48–56px | 1.1 | −0.02em |
| Subheading H3 | Archivo 500 | 24px | 26px | 28–32px | 1.2 | −0.01em |
| Body | Archivo 400, normal width | 17px | 18px | 18px | 1.55–1.65 | 0 |
| Navigation / button | Archivo 500 | 16px controls; 28–32px menu links | 16px | 15–16px | 1.3 | 0 to +0.01em |
| Caption / index | Roboto Mono 400 | 12–13px | 13px | 13px | 1.45 | +0.02em |
| Price | Archivo 500; tabular numerals where supported | 28–32px | 32px | 36px | 1.15 | −0.015em |

Body measure: normally 50–65 characters, never a very wide full-screen paragraph. Keep service terms and form instructions in body text, not captions. Limit all-caps tracking to short labels; do not letter-space paragraph text. Use font width as an axis choice, not a horizontal visual distortion. Primary display needs sufficient weight on photographs; avoid thin text on a busy crop.

## 7. Recommended color and component system

### Color tokens

| Token / role | HEX | Intended use |
|---|---|---|
| Ink | `#0C0C0C` | Main gallery/home/about background |
| Raised dark surface | `#171715` | Menu, lightbox chrome or a restrained information inset |
| Paper | `#F3EFE9` | Primary dark-page text; light-page background; primary dark-page button |
| Secondary dark-page text | `#B8B1A8` | Supporting prose/captions on Ink; not opacity-reduced |
| Quiet decorative rule | `#34332F` | Nonessential separators; never the sole control boundary |
| Dark-page control border | `#6F6C67` | Visible input and secondary-button boundaries |
| Light-page text | `#22211F` | Body and headings on Paper |
| Light-page secondary text | `#605C56` | Supporting prose on Paper |
| Light-page control border | `#827D75` | Form fields and outlined controls on Paper |
| Focus accent | `#F0C28C` | Focus ring on dark pages; restrained detail only |
| Focus on light ground | `#22211F` | Strong outline or two-tone focus treatment |

Calculated flat-color contrast: Paper/Ink **17.08:1**, secondary text/Ink **9.21:1**, light-page text/Paper **14.05:1**, secondary light-page text/Paper **5.80:1**. Dark control border/Ink **3.74:1**; light control border/Paper **3.57:1**. The quiet rule is only **1.55:1** against Ink and is explicitly decorative. These ratios do not validate text over photographs, opacity changes, blending or final rendered states.

Use Paper as the visual action accent. Color belongs primarily to the photography. The small warm focus accent relates to warm portrait imagery and is functional rather than a new luxury signal. No gradient, glow or colored card field is needed.

### Layout, spacing and shape

- Base spacing unit: 4px; main steps 8, 12, 16, 24, 32, 48, 64, 96 and 128px.
- Desktop grid: 12 columns with 24–32px gutters. Standard maximum content width 1440px; long-form text remains much narrower.
- Laptop outer margins: 40–48px. Large screens: centered content with 64–96px minimum margins; selected landscape photography may bleed to the viewport.
- Tablet: 8 columns, 24–32px outer margins and 20–24px gutters. Avoid desktop-sized prose gaps.
- Mobile: 4-column underlying alignment, 20px margins and 12–16px image gaps; the reading layout itself is one column.
- Section spacing: 96–128px desktop, 64–80px mobile. Within a topic, 16–32px. A gallery can use tighter image rhythm without forcing every page to match it.
- Border radius: 0 for photographs and major surfaces, 2px for buttons, 2–4px for fields. No pervasive pills, heavy shadows or artificial glass layers.
- Alignment: headings label the content that follows them. Offset imagery may cross columns, but title, description and action maintain an obvious group.

### Buttons, links and controls

Primary button: Paper fill with Ink text on dark pages; Ink fill with Paper text on light pages. Minimum 48px height; 20–24px horizontal padding; 2px radius. Hover changes fill slightly and strengthens the underline/arrow relationship; never reduce contrast merely to signal hover. Press feedback is a 1px translation for 100–120ms. Disabled state must remain legible and use actual disabled semantics where appropriate.

Secondary button: 1px control-border outline, same height. Text links use an underline or an explicit adjacent arrow; color alone is insufficient. Navigation gets a current-page underline and a current-page semantic state. A category image and title share one destination and one accessible purpose; avoid three redundant adjacent focus stops when one coherent link will do.

Use restrained, consistent 1.5px-line SVG icons at 18–20px. Arrow, close, chevron, Instagram and TikTok are sufficient. Brand/category recognition should come from photographs and labels, not arbitrary service icons. Icon-only actions need a clear accessible name and a 44–48px hit area.

### Forms

Use persistent labels above fields, 17px input text and a minimum 48px input height. Message area starts around 160px high and remains resizable. Every visible required marker has explanatory text and programmatic required semantics. Focus uses a 2px high-contrast outline with 3px offset; do not remove the browser outline without an equally visible replacement.

Retain Name, Email address and Message as the only required user inputs. Proposed optional prompts: shoot type, preferred date and location. Prefer a short expandable “Add shoot details” group or three optional fields; do not impose them on visitors who do not know the answer. Keep the service category editable if it came from a gallery link.

Error state: identify the problem beside the field, provide a linked summary after submission, preserve entered data and move focus sensibly. Pending state prevents duplicate sends and communicates progress. Success appears only after confirmed server acceptance; do not promise a response deadline unless the owner supplies one. Network failure leaves the message intact and offers retry plus the visible email/telephone alternative. Spam protection must not make the form inaccessible.

### Photography rules

Images are rectangular and unframed except where a page layout needs paper margin. Keep source color/monochrome decisions; do not apply a universal filter or convert the whole portfolio to black and white. Record focal points separately for desktop and mobile. A full-bleed image may be cropped, but gallery enlargement should reveal the original composition using contain behavior.

Use the celebration hero as the initial recommended Home candidate because it connects action and feeling. Confirm rights and crop suitability. Keep sports action, reaction, portraits and crowd context in the selection. Do not imply an athlete, club, venue or brand is a client just because it appears in a photograph. No stock images or generated replacements are recommended for the portfolio.

## 8. Information architecture and navigation blueprint

Retain the existing public routes for the initial redesign. Use clearer presentation labels rather than creating avoidable URL migration work.

| Display role | Destination | Notes |
|---|---|---|
| Brand / Home | `/` | Both names remain understandable: Niyi Visuals and Niyi Scholten |
| Work | `/portfolio/` | Label can change while route remains |
| Sport | `/gallery-1/` | Consistent from every category element |
| Parties | `/gallery-2/` | Proposed English correction; original spelling retained in inventory |
| Lifestyle | `/gallery-3/` | Portrait content included unless owner approves a split |
| Services | `/services/` | Clear access to prices, terms and FAQs |
| About | `/about/` | Personal story and approach |
| Contact / Let's connect | `/contact/` | Same destination throughout |

Desktop navigation order: **Work, Services, About, Contact**. Home remains accessible through the name and footer. Mobile menu explicitly includes Home, then the same four destinations. Work remains a real link; a separate labeled expander reveals the three galleries. Mobile submenu links must not depend on hover.

Footer: identity and Apeldoorn base, Work/Services/About/Contact, three gallery links, visible email and phone, named social links, copyright, and owner-supplied privacy/cookie information. Preserve platform attribution if required; establish any permitted change before moving or removing it. Footer contact details are a proposal to make existing information easier to find, not new contact information.

Do not add a separate Portraits page, blog, store, client portal or language switcher without a real content and maintenance need. If future category labels or URLs change, map each old route individually and preserve image search/discovery; never redirect all galleries to Home.

## 9. Page-by-page redesign blueprint

### 9.1 Home — `/`

**Goal:** establish photographer, photographic character and relevant work within the first screen; lead toward a gallery or inquiry.

**Recommended order and composition**

1. Compact opaque or carefully controlled header, about 88–96px desktop and 72px mobile.
2. Category/location introduction and the approved hero heading on a solid dark field; opening celebration photograph immediately adjacent/below. At laptop sizes, text takes roughly five columns and image seven; at wider sizes the image can extend to the right edge. This protects reading contrast and avoids burying the introductory paragraph on a bright banner.
3. Selected work: one dominant Sport landscape/portrait composition, then two offset features for Parties and Lifestyle. Every category name and image have the same destination. Keep the visual hierarchy varied, not three identical tiles.
4. A short personal introduction, with photographer image and the athlete-to-photographer motivation. Preserve all existing biographical information in About even if the Home excerpt is shortened with approval.
5. A compact service guide: three text rows with category, one verified explanatory line and service/gallery links. No unconfirmed price summary.
6. A closing action image and inquiry invitation; one clear Contact button, plus a lower-priority Services link if helpful.
7. Complete footer.

**Preserve:** celebration, personal introduction/base, three categories, first-person motivation, source closing invitation and all existing photographs in the migration archive. **Copy improvements:** clearer category/location line; approved punctuation and plural corrections; a shorter Home excerpt only through editorial sign-off. Proposed new functional labels: “View work” and “Discuss a shoot.”

**Image selection:** recommend existing `NS508538` as opening candidate and `NS506970-Edit-Recovered` as closing candidate. The category images remain candidates rather than mandatory crops. Put body text on a solid surface instead of darkening an entire picture to accommodate it.

**Interactions:** primary View work → `/portfolio/`; three category destinations; personal-story link → `/about/`; inquiry → `/contact/`. One opening text/image entrance and subtle category-image hover at most. No rotating hero.

**Mobile:** introduction, image, then actions without forcing a full-screen hero. Use a 4:5 or 3:2 crop only after focal-point review; a wide group celebration may be shown wider to preserve faces. Show the Sports category first in the proposed sequence while retaining equal access to the other two. Keep calls to action visible without a sticky bottom bar competing with browser controls.

### 9.2 About — `/about/`

**Goal:** make the personal history and approach easy to read and credible.

**Order:** page title and short identity statement → contextual photographer portrait → complete source biography in its original logical sequence → concise capability list covering Sport, Parties, Lifestyle and Portraits → relevant work links → inquiry close → footer.

**Composition:** use an opening 5/7 split between portrait and introduction. The longer story then sits in a single 55–65-character measure, with an optional short pull quote drawn from owner-approved original copy. Avoid splitting one narrative into disconnected newspaper columns. Separate the personal football history from the current photographic offer with a clear subheading.

**Preserve:** all five original paragraphs and their facts; four capability labels; personal perspective and injury-to-photography transition. Confirm names/club associations before updating them. No club badges, trophy counts, award claims or synthetic endorsements.

**Copy improvements:** consistent first person and a clearer transition between past and present; consolidate repeated WHAT WE DO text. Do not convert an informal personal introduction into an agency “we.”

**Images:** photographer portrait first; one sports and one people-focused image later to demonstrate scope. Keep the remaining existing placements in the asset archive even if the public layout is edited with approval.

**CTAs:** View Sport → `/gallery-1/`; Explore Lifestyle → `/gallery-3/`; Services → `/services/`; inquiry → `/contact/`. Portraits can point to a relevant part of Lifestyle after confirmed image selection, without implying a new package.

**Motion/mobile:** static prose; at most a one-time portrait fade. On mobile, title and opening paragraph precede an appropriately sized portrait, followed by continuous reading. No sticky story panels or horizontal reading.

### 9.3 Services — `/services/`

**Goal:** help a visitor understand which service suits them and what the published options mean.

**Order:** concise Services introduction → Sport → Parties → Lifestyle → confirmed common delivery/booking information → both existing FAQs → optional additional owner-answered FAQs → inquiry → footer.

**Composition:** use three substantial editorial rows, not three equal cards. A service name, short verified description and compact price schedule occupy roughly seven columns; an image takes five. Alternate image placement sparingly, but keep each price schedule identical in structure. Prices align by amount and duration; inclusions appear directly below their related offer.

**Preserve:** seven price lines, three duration limits, all photo-count information, both FAQs, gallery links and inquiry links. Use the original values until the owner confirms changes. Do not silently translate the dollar sign into euros or infer a starting price from ambiguous tiers.

**Required owner decisions before final price design:** currency, tax treatment, travel, 70-minute-plus interpretation, duration bounds and the slash photo counts. The designer can lay out exact current strings in the meantime, but cannot resolve them through typography.

**Copy improvements:** unify category vocabulary across navigation, service headings and galleries; describe inquiry as discussing a shoot rather than instant booking; explain terms after confirmation. Put the two-week delivery information near the packages, retaining the actual source commitment until approved otherwise.

**Images:** sport action, genuine party atmosphere, lifestyle portrait. The sunglasses hero can be retained as a smaller editorial photograph rather than forcing a screen-height cover before the offer. The five-image montage is optional placement material; retain its assets and use it only if it adds proof rather than scroll length.

**CTAs:** per-row View related work → matching gallery; per-row Discuss this shoot → Contact with optional editable context; one final contact action. Carry context transparently, without hiding a service choice or triggering a message.

**FAQs:** with only two questions, keep answers open. If approved content grows beyond roughly five questions, a keyboard-accessible accordion becomes reasonable. Avoid hiding price conditions or essential delivery information inside it.

**Mobile:** service name → summary → price schedule → inclusions → relevant image → links. All comparisons stay legible without horizontal scrolling. Forms and pricing never use 12px caption text. No scroll animation on the actual prices.

### 9.4 Portfolio / Work — `/portfolio/`

**Goal:** choose one of three bodies of work quickly and confidently.

**Order:** compact Work title and short category introduction → Sport feature → Parties feature → Lifestyle feature → service/contact links → footer.

**Composition:** start imagery in the first screen rather than using a very tall title cover. Sport can occupy eight columns; Parties a six-column offset feature; Lifestyle a portrait-led paired composition. Each feature includes a full category title and one descriptive action near the image. Use the same accessible destination for the complete feature, and avoid duplicate nested links.

**Preserve:** all three categories, source closing sentiment and five image placements in the archive. **Copy improvements:** “Work” or “Selected work” is a clearer proposed page title; correct READU and the English plural with approval; replace repeated context-free gallery labels with descriptive accessible names.

**Image candidates:** keep the yellow-shirt sports portrait, smiling party pair and urban lifestyle portrait where they remain the strongest representatives. Re-evaluate crop quality using masters rather than forcing the current thumbnails into larger formats.

**CTAs:** Sport → `/gallery-1/`; Parties → `/gallery-2/`; Lifestyle → `/gallery-3/`; Services → `/services/`; Contact → `/contact/`. No link in the redesigned category index should point to `/gallery-4/`.

**Motion/mobile:** 1.02 maximum image scale on pointer hover, with equivalent focus indication on the link; no required hover-only information. Mobile uses a clear one-column sequence with the title, picture and action grouped tightly. Keep aspect-ratio variety within a consistent reading order.

### 9.5 Sport — `/gallery-1/`

**Goal:** demonstrate anticipation, action and the person behind the athlete; turn interest into a sports inquiry.

**Order:** Sport title, a short approved descriptive introduction and category navigation → one decisive lead image → sequenced image gallery → service/price crosslink → inquiry close → next-category link/footer.

**Composition:** lead with a full-width or eight-column action photograph. Follow with a deliberate sequence: action, athlete portrait, atmosphere, celebration. These are editorial roles, not fabricated project labels. Use two to three columns for the main desktop collection; insert occasional full-width landscape breaks. Avoid displaying almost the whole portfolio as six narrow columns.

**Preserve:** all 30 existing placements in the source archive, the multi-sport scope, original Sport heading and inquiry intent. An initial public edit of 18–24 gallery images can be considered with owner approval, with all remaining work accessible through an explicit additional selection; do not auto-delete photographs or obscure them behind endless loading.

**Copy:** add only a factual category introduction using visible subject matter and the confirmed sporting perspective. Project/location/athlete captions require owner information. Never infer a club client relationship from kit.

**Images/interactions:** preserve natural aspect ratios in enlargement. Keyboard- and touch-accessible lightbox with visible close, previous and next controls and an image count. Route inquiry to Contact; the service link opens Services at the Sport section once such an anchor exists.

**Mobile:** two-column overview where portraits remain readable, with full-width landscape breaks. Lightbox fits the image with controls outside essential image content and handles portrait/landscape rotation. Large hit targets; no hover dependence.

### 9.6 Parties — `/gallery-2/`

**Goal:** show the warmth, atmosphere and variety of real social occasions and clarify the route to coverage options.

**Order:** category title and approved short introduction → broad scene-setting photograph → a varied sequence of crowd, interaction, detail and group images → party service crosslink → inquiry → footer/next category.

**Composition:** give landscape crowd images a larger share of width; pair smaller portraits without forcing every image to the same crop. A justified row rhythm works well on desktop. Avoid adopting Sport's action-led sequence mechanically.

**Preserve:** all 17 placements, party/social emphasis and existing inquiry intent. **Copy improvements:** proposed label Parties or Parties & events; do not imply corporate conferences, wedding packages or named venues without confirmation.

**Images:** retain genuine interactions and direct-flash character. Do not apply cosmetic desaturation to make the pictures conform to a luxury mood. Captions describe only confirmed context.

**CTAs:** relevant Services section and Contact, replacing the current fragment-only link. **Motion:** simple image enlargement and hover/focus feedback, no nightclub strobes or beat-based motion. **Mobile:** mostly full-width landscape images with occasional two-portrait rows, retaining social expressions at useful size. Do not use a required horizontal carousel to access the collection.

### 9.7 Lifestyle — `/gallery-3/`

**Goal:** present expressive portraits and personal moments with enough space to assess style.

**Order:** Lifestyle title and approved introduction → a large portrait → small thematic sequences of portraits and personal occasions → lifestyle service crosslink → inquiry → footer/next category.

**Composition:** more vertical breathing room than the Sport gallery, with two-column portrait pairings and occasional wider personal-event photographs. Use one consistent caption placement. Keep monochrome and color photographs as authored; do not force all images into one color treatment.

**Preserve:** all 27 placements and the breadth of portraits and personal occasions. If portraits and event photographs are grouped, use accurate descriptive headings rather than inventing additional purchasable packages. An owner can later decide whether a separate Portraits category is warranted.

**Copy improvements:** explain what Lifestyle includes using confirmed offerings and images. Do not infer availability for newborn, wedding or commercial fashion commissions from isolated photographs.

**CTAs/interactions:** Lifestyle information on Services, corrected Contact destination, and the shared accessible lightbox. **Mobile:** larger portrait openings and natural-ratio images; avoid narrow multi-column collages that make faces too small. Do not hide essential groupings behind filters.

### 9.8 Contact — `/contact/`

**Goal:** make inquiry easy, understandable and reliable.

**Order:** personal inquiry title and concise invitation → visible linked email/phone → the three required fields and optional shoot details → submit/feedback → brief next-step information once confirmed → supporting photographer image → footer.

**Composition:** warm Paper background to signal a calm practical task, with Ink text. On desktop, form occupies seven columns and direct contact/supporting image five. Keep the image smaller than the form and away from field labels. On mobile, place it after the form.

**Preserve:** `shotsbyniyi@gmail.com`, displayed telephone `06-42818825`, all three visible fields, required information, submit function, social channels and the photographer image. Proposed email/telephone anchors should work directly. An international telephone URI can be normalized to the Dutch number after owner confirmation; do not assume that a voice number is approved for a new WhatsApp link merely because the FAQ mentions WhatsApp.

**Copy improvements:** singular first person is consistent with the rest of the website. Give a short prompt requesting shoot type, date and location as helpful optional details, reflecting the existing FAQ. No invented 24-hour response promise, availability guarantee or instant booking implication.

**Interactions:** explicit labels; email input semantics; client and server validation; pending/error/success states; preserve typed content on failure; accessible status announcements. Show privacy information linked to an owner-approved policy. Do not precheck marketing consent or add a newsletter by default.

**Mobile:** input text at least 17px; fields and submit button remain fully visible at narrow widths and browser zoom; no horizontal overflow; keyboard does not obscure feedback. Keep header compact and avoid a permanent bottom action strip above the on-screen keyboard.

### 9.9 Linked error destination — `/gallery-4/`

Repair the originating Lifestyle links to `/gallery-3/` first. Provide a branded, useful 404 state for unresolved URLs: explanation, Work and Contact links, and Home. A permanent redirect from Gallery 4 to Lifestyle is an option only after confirming that the URL has no different historical purpose. Do not invent a fourth gallery or silently redirect all missing pages to Home.

## 10. Responsive strategy

| Device class | Layout decision | Typography / imagery | Navigation / interaction |
|---|---|---|---|
| Large desktop, roughly 1600px+ | Center most content within 1440px; selected image bleed; text remains narrow | Display up to 96px; do not scale body text or gaps indefinitely | Four direct top-level links; compact header; normal cursor |
| Laptop, roughly 1024–1599px | 12-column grid; collapse unnecessarily intricate offsets | Display around 72–88px; test crops at actual laptop height | Ensure all nav labels and Contact fit; real dropdown toggle |
| Tablet, roughly 768–1023px | 8 columns; 5/7 splits become 4/4 or stacked; pricing becomes vertical rows | Display 56–68px; body 18px; preserve portrait subjects | Use mobile menu if links become cramped; touch-first control behavior |
| Mobile, below roughly 768px | One reading column; 20px margins; galleries use category-specific one/two-column rhythm | Display 40–48px; body 17px; separate crop/focal decisions | Full-screen menu with explicit Home; 44–48px targets; visible lightbox controls |

These are proposed break ranges, not proof of current platform breakpoints. Let content determine exact transitions. Test at 320, 390, 768, 1024, 1366 and 1920px, plus intermediate widths and 200% zoom. Check landscape phones and text expansion rather than validating only a collection of device screenshots.

Mobile priority changes: description before ornamental layout; work access before long biography; service facts before supporting images; contact fields before portrait. Keep the document reading order aligned with the visual order. Avoid CSS rearrangements that make keyboard focus jump unpredictably.

## 11. Motion and interaction specification

**Principle:** motion helps orientation, communicates control state or improves image viewing. It must not delay access to photographs, prices or the form. Use the browser's ordinary scrolling and a normal cursor.

| Component | Trigger | Behavior | Timing / easing | Technique to consider later | Reduced motion / mobile |
|---|---|---|---|---|---|
| Opening heading + lead image | Initial visible render, once | Text fades and rises at most 8px; image settles from scale 1.015 to 1, only if already available | 360–450ms; ease-out `cubic-bezier(0.22,1,0.36,1)`; stagger at most 60ms | CSS opacity/transform; progressive enhancement | Immediately visible static composition; mobile uses fade only or none |
| Major editorial image entrance | First viewport entry, once; only selected features | Up to 12px movement with fade; no blank image masks that conceal loading | 400ms; same ease-out | Intersection observer plus CSS, if needed | No transform; content visible by default |
| Navigation underline | Hover or keyboard focus | Underline extends or increases opacity | 160–180ms ease-out | CSS transform/opacity | Instant underline; current-page marker always present |
| Category image | Pointer hover on a usable link | Scale from 1 to no more than 1.02 inside its crop | 320–420ms ease-out | CSS transform | No movement for touch; focus outline provides equivalent information |
| Button | Hover, focus, press | Small tonal change; 1px pressed offset | Hover 160ms; press 100–120ms | CSS colors/transform | Instant tone/focus feedback; no displacement |
| Mobile menu | Toggle | Overlay fades; links appear together or with a very small stagger | Open 220ms; close 160ms | CSS opacity and small panel transform; modal dialog containing ordinary navigation links; accurate expanded/controls state | Instant open/close; same focus management |
| Lightbox | Image activation | Background and selected image fade in; maintain aspect ratio | Open 180ms; close 140ms | Accessible dialog and image viewer | Instant transition; visible controls on mobile |
| Lightbox next/previous | Buttons or arrow keys | Short crossfade; no spatial spinning or large slide | 140–180ms ease-out | Opacity; preload adjacent image after current image | Immediate replacement; keep image count announced |
| Form focus/status | Focus, submit, response | Border/focus ring updates; pending status; success/error announcement | Focus 120ms; status immediate | CSS plus native/ARIA status semantics | Same information without animation |
| FAQ expansion, only if later needed | Button activation | Reveal answer; icon reflects state | 180–220ms, no bounce | Native details or accessible disclosure | Immediate content change |
| Page transition, optional | Same-site navigation | Very short content crossfade while browser history and focus remain correct | Maximum 120–150ms | Progressive cross-document/view-transition enhancement if supported | Native navigation; never required |

Cap simultaneous motion at one focal feature plus a small control response. Do not animate every gallery thumbnail on scroll. Avoid per-word text splitting, parallax, sticky scene pinning, infinite marquees, magnetic buttons, sound, WebGL and a custom cursor. They do not solve a demonstrated need here.

Reduced motion removes translations, image scaling, animated masks and page transitions, while preserving visible state changes. The default document is visible before any animation code runs. Do not leave content hidden if JavaScript fails. Animate transform and opacity rather than layout dimensions for image effects, and do not continuously repaint large filters.

## 12. Accessibility, search and performance

### Accessibility acceptance criteria

Target WCAG 2.2 AA as a design and implementation objective, not a claim about the current or unbuilt site. Use one main page title, section H2s and category/subsection H3s; make typography independent of heading level. Add a skip link, a main landmark and understandable navigation labels. Structure the personal story and price terms in a sensible reading order.

All primary functions must work by keyboard: menu open/close, submenu, gallery activation, next/previous, lightbox dismissal and inquiry. Manage focus when an overlay opens, return it to the triggering element, and keep it visible outside sticky headers. Use an appropriate focus trap for a truly modal overlay. Do not use an inaccurate collapsed state for an open control.

Normal text should reach at least 4.5:1 contrast and large text 3:1; meaningful controls and focus treatments must remain visible against adjacent colors. Use 44–48px touch targets as the design preference, with sufficient spacing. WCAG 2.2's minimum target criterion has exceptions and a different threshold; the larger preference here is a usability decision. The authoritative requirements and related keyboard, reflow, focus and labeling guidance are in [W3C's WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/).

Write useful image descriptions with the owner. Example descriptive pattern: subject + action + relevant setting; include a name, event or location only when confirmed. Linked images need an accessible action name; decorative repeats can have empty alt text when the same meaningful information is adjacent. A photograph's presence in the portfolio is normally meaningful, so making every image decorative is inappropriate. Preserve image credits and permissions where applicable.

Form tests must include empty required fields, malformed email, network failure, duplicate send prevention and confirmed success, with a safe test arrangement. A visible asterisk alone is insufficient. Test with a real screen reader and keyboard before launch, including menu states and lightbox focus.

### Search structure

The current site already has canonical links and an image sitemap. Preserve those capabilities. Replace generic numbered gallery titles and fill empty descriptions with accurate page-specific text. Suggested titles:

| Route | Proposed title |
|---|---|
| `/` | Niyi Visuals — Sport, Event & Lifestyle Photography in Apeldoorn |
| `/about/` | About Niyi Scholten — Niyi Visuals |
| `/services/` | Photography Services & Prices — Niyi Visuals |
| `/portfolio/` | Sport, Parties & Lifestyle Portfolio — Niyi Visuals |
| `/gallery-1/` | Sport Photography — Niyi Visuals |
| `/gallery-2/` | Party & Event Photography — Niyi Visuals |
| `/gallery-3/` | Lifestyle & Portrait Photography — Niyi Visuals |
| `/contact/` | Contact Niyi Scholten — Niyi Visuals |

Descriptions should state each page's actual purpose and verified information. A proposed Home description can mention the three services, photographer name, base and invitation to view work/contact; it should not add service radius, years of experience, awards or a “best photographer” claim. Google may choose a different snippet; metadata is not a ranking guarantee.

Use descriptive visible links and crawlable image elements. Keep important photographs accessible without requiring a filter action or endless client-side scrolling. Add share previews using approved images. Retain English language metadata unless a multilingual plan is approved. Use structured data only for confirmed public identity/contact information; do not invent a studio address, review ratings or partnerships.

Google's [image SEO guidance](https://developers.google.com/search/docs/appearance/google-images) supports crawlable image elements, appropriate page context and descriptive image information. An existing image sitemap is worth preserving, but it does not compensate for missing captions, empty alt text or poor destination links.

### Proposed performance budgets and handling

These are design targets for the future implementation, not current-site measurements:

- Aim for field LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile. These are the thresholds documented in [Google's Core Web Vitals guidance](https://web.dev/articles/vitals).
- Start with a ≤250–350KB mobile opening photograph and a ≤500KB desktop candidate where visual quality allows; assess actual content rather than degrading faces, grass or shadow detail to meet an arbitrary number.
- Give hero images explicit dimensions/aspect ratios and high initial priority. Do not lazy-load the opening photograph. Defer below-the-fold work and lightbox originals.
- Deliver AVIF/WebP where supported, with an appropriate fallback. Provide responsive widths roughly 480, 768, 1280, 1920 and 2560px where justified; choose actual sizes from display width and pixel density.
- Thumbnails should not preload every full-size gallery image. Load the selected lightbox image, then its immediate neighbors. Avoid prefetching an entire portfolio on mobile data.
- Target compressed initial page transfer below roughly 1MB on mobile for Home/Contact, excluding later gallery browsing. Keep gallery first-view loading similarly bounded; load remaining work progressively without hiding navigation or captions.
- Prefer little or no client JavaScript outside menu, gallery and form needs. An initial JS budget around 100KB compressed and fonts around 120KB compressed is a useful starting constraint, to be checked against the chosen platform.
- Limit font requests to the approved families and useful subsets. Use a resilient fallback and font-display behavior that does not hide text. Check layout shift and heading reflow after fonts load.
- Avoid an embedded social feed by default. Named outbound links are lighter, more stable and already serve the site's actual need.

Test once in an appropriate lab setup, then use real field data when traffic is sufficient. A high performance score alone does not prove a form works or a sports crop is usable.

## 13. Development considerations for a later phase

No framework, project, component implementation or deployment has been created. The following is a scope guide for future development.

### Reusable elements

Shared identity/header/footer; accessible desktop submenu and mobile navigation; text/button link variants; photographic figure with focal-point metadata; category feature; service row and price schedule; biography text module; inquiry closure; image grid; lightbox; form fields/status/error summary; cookie preferences; branded 404.

Reuse behavior and tokens, but let page composition vary. Home's selected-work sequence, Services' price rows, About's reading measure and Contact's form layout should not be forced into one universal card component.

### Content model and preservation

Keep pages, category records, photographs, service options and FAQs distinct. A photograph needs a stable ID, master asset, derivatives, natural dimensions, aspect ratio, category membership, display order, crop/focal points, alt text, optional confirmed caption/credit, and rights/publication status. Repeated placements can reference the same master while retaining their page-specific crop and order. The 100 current Pixieset IDs do not necessarily represent 100 unique original photographs.

A service option needs its original displayed price string as well as an owner-approved normalized amount/currency/duration if supplied. Do not parse ambiguous current strings into an invented booking calculator. Preserve the source copy separately from approved copy and keep the revision decision log.

### Platform decision

First establish whether the owner wishes to remain on Pixieset. Its current hosted images, galleries and inquiry flow are useful existing functions. Assess theme/layout, semantic labeling, form, metadata, URL and attribution capabilities before promising full custom interactions inside that platform.

If a custom site is chosen later, a pre-rendered multi-page architecture with a small image-viewer enhancement is sufficient for this scope. A client-heavy application is not justified by eight mostly static pages. Confirm form delivery, spam controls, consent, image hosting and redirects before leaving the incumbent service. Public hosted derivative URLs should not become the only asset backup or an assumed permanent cross-platform media contract.

### Complexity and risks

| Workstream | Relative complexity | Main risk / dependency |
|---|---|---|
| Neutral tokens, typography, static page layouts | Low–medium | Crop quality and complete source copy |
| Category link repair and consistent route model | Low | Preserve existing route identity |
| Accessible menu/lightbox | Medium | Focus, mobile controls and state semantics |
| Inquiry form | Medium | Server delivery, spam, error handling, privacy information |
| Image migration / responsive variants | Medium | Original files, duplicates, rights, focal points |
| Owner-confirmed service copy and terms | Content dependency | Cannot be resolved from layout or assumptions |
| Elaborate page transitions or scroll scenes | Unnecessary extra work | Added accessibility/performance and maintenance cost |

The exact effort and cost depend on platform choice and asset availability. Do not present a fabricated implementation estimate as a researched fact.

## 14. Priorities, dependencies and acceptance

### Essential before visual embellishment

1. Resolve the category destination map and fragment-only contact buttons.
2. Confirm currency, duration and photo-count meanings; preserve original strings until then.
3. Obtain original prose and master images; reconcile the eight routes and all 100 placements.
4. Specify and verify inquiry delivery and accessible field labeling.
5. Establish readable typography, reliable contrast and sensible mobile content order.
6. Preserve URLs, canonical behavior, sitemap coverage, contact details and important source information.

### Highest-impact visual work

Develop the recommended typographic system; select strong opening photographs; reduce the tall covers that delay access to work or prices; build a consistent editorial grid; give each gallery an appropriate rhythm; make services/contact calmer and clearer; standardize navigation and inquiry closures.

### Optional, only after the core works

Owner-supplied project captions; a few carefully edited case studies when context and permissions exist; richer FAQs; optional disclosure of shoot details; a restrained cross-page transition; a separate Portraits section if content and demand support it. None requires inventing customer stories or a fourth service now.

### Avoid

Stock or generated portfolio substitutes; fake awards/testimonials/client logos; an automatic euro conversion; a booking calendar without an actual booking process; hidden prices in sliders; auto-playing galleries; repeated equal feature cards; heavy shadow/glass treatments; scroll hijacking; text following the cursor; a new blog/feed without maintenance responsibility; animation that must finish before content becomes usable.

### Owner decisions that remain open

| Decision | Why it matters | Safe planning default |
|---|---|---|
| Price currency and terms | Commercial accuracy | Preserve current literal strings |
| Geographic service area / travel | Search and inquiry expectations | State Apeldoorn base only |
| Image rights, subjects and captions | Publication, trust and image accessibility | Use only approved existing work; no invented identities |
| Response timing and booking/payment process | Contact copy and form expectations | Inquiry/discussion, no response guarantee |
| Main audience emphasis | Balance of the three concepts/categories | Balance all three current categories, Sport first |
| English only or multilingual | Copy and layout | Preserve current English |
| Pixieset or custom platform | Feasibility, forms, media and URL migration | Platform undecided; preserve route/function requirements |
| Privacy/cookie information | Trust and data-handling transparency | Owner supplies accurate applicable content; no fabricated legal boilerplate |
| Original prose export | Verbatim content migration | Keep source references and preservation ledger; do not substitute summaries |

### Future implementation acceptance criteria

- Every category image/title/action reaches its correct gallery; no current body CTA remains a meaningless `#`.
- Every working route has its own title, main heading, appropriate description and canonical URL.
- Eight source pages and 100 image placements are accounted for in the migration log; approved editorial changes are traceable.
- No biography statement becomes an endorsement, and no unverified service/price policy is introduced.
- Menus and lightbox work by keyboard and touch, expose correct state, preserve visible focus and return focus when closed.
- Contact works with all intended failure/success states; server-confirmed success and actual receipt are checked through an agreed test.
- Mobile Contact reaches useful fields before a decorative image; Services can be understood without horizontal scrolling; gallery subjects remain visible.
- Text, controls and overlays pass contrast/reflow checks; meaningful photographs have suitable text alternatives.
- Motion is optional, respects reduced-motion settings and never hides failed-loading content.
- Performance is measured against the agreed budgets rather than claimed from screenshots.

## 15. Quality review of this direction

**Brand fit:** the recommendation comes from the site's own dark setting, sports-led work, varied people photography, existing heading family and personal story. It does not introduce a fictional studio history or a luxury positioning unsupported by the content.

**Meaningful improvement:** the proposed redesign removes observable route failures, improves pricing comprehension and form accessibility, and changes mobile priorities. Its value is not limited to a more fashionable surface.

**Preservation:** all published routes, source factual information, package details, contact channels and 100 image placements are accounted for. Long prose still needs an owner export for verbatim reuse; master images and rights/captions remain owner dependencies. Tightening a public edit is proposed, never silently performed.

**Distinctiveness:** the strongest design device is photographic sequence supported by an athlete's personal perspective. There is one consistent world, with page-specific composition. No generic feature-card grid, ambient gradient, artificial glow or decorative stock image is needed.

**Typography:** retaining Archivo is purposeful; moving prose away from monospacing improves the existing system without replacing its character. The two alternatives offer real differences, not just interchangeable popular sans-serifs.

**Motion:** every selected effect has a usability or orientation role. Essential pages remain convincing when all motion is disabled. More complex effects are explicitly optional or excluded.

**Realism:** an eight-page photography portfolio with a sound content model, accessible image viewer and reliable inquiry form is achievable without a large application architecture. Platform capability still needs checking before implementation commitments.

**Mobile:** composition changes are substantive: readable introduction, manageable gallery rhythm, prices before illustrative photographs, fields before portrait, named controls and visible image-viewer actions.

**Uncertainty:** target-audience proportions, commercial policies, permissions, response expectations and measured performance are not known. They are identified as decisions or unverified areas, not disguised as observations.

**Review decision:** approve or revise the creative direction and resolve the content questions before design production or development. This report does not approve copy changes, authorize publication or begin a website build.
