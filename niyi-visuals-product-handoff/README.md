# Niyi Visuals — editorial portfolio

A local, pre-rendered Astro/TypeScript portfolio with a focused React island and Motion (`motion/react`). Real client photography and verified content are preserved. Vercel client-preview configuration is included; no form backend is configured. See the repository-root README for the Git deployment setup.

## Preview

From `/Users/julians/Desktop/Niyi redesign/niyi-visuals-product-handoff`:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:4321/. Astro 7 runs the development server as a background service; use `npx astro dev status`, `npx astro dev logs` or `npx astro dev stop` as needed. The current preview is already running.

## Experience

- Eight descriptive photographic selections in an asymmetric Grid or compact Index.
- Category filters, stable project identities, interruptible layout springs and a shared photograph-to-detail expansion.
- Static `/work/[slug]/` pages support direct links, refresh and JavaScript-free reading.
- Closing/Escape/Back restore the gallery view, filter, exact scroll position and originating focus. Next-selection navigation resets reading position and focus.
- Native mobile menu, keyboard containment, meaningful image descriptions, responsive WebP sources, reserved dimensions, loading/error/retry states and reduced motion.
- About/contact use their existing paths as entry points into the connected publication. `/portfolio/` and the three gallery paths remain local entry points. Original-site Services links and redirects have been removed at the user’s request; service descriptions remain plain content.
- Direct email, telephone and genuine social links. No simulated form submission, fabricated film or invented project history.

Add `?motion=reduce` to preview the calm variant independently of system preferences. OS reduced motion is respected automatically.

## Replace or extend content

The clear content entry point is **`src/content/portfolio.ts`**. It contains the image register and ordered selection records, and aggregates the preserved copy/contact records from `home.ts` and `site.ts`. Only public text and optimized image properties cross into the React island.

1. Add owned source photographs under `src/assets/photography/` or `src/assets/collections/` and import them into the image register. Provide a unique ID, visible-subject alt text and focal point. Preserve source provenance separately in `migration/`.
2. Edit `projectRecords`: stable URL slug, descriptive title, category, description, ordered image keys and composition role. The first image is both gallery cover and opening detail photograph. Update the collection note when the selection count changes. Years/client names are intentionally absent until supplied and verified.
3. Edit `portfolioContent` for identity/location and its referenced `home.ts`/`site.ts` for original copy, email, telephone, socials and services. No demonstration content needs replacing: the existing photographs and business information are authentic.
4. `src/lib/portfolio.ts` generates appropriately sized responsive image properties at build time. Do not hotlink guessed variants or put the research/registers in `public/`.
5. Add actual film assets, descriptions/captions and accessible playback controls before introducing film work. None is currently supplied; there is no fabricated video or filmmaker service claim.

`PRODUCT.md` v2.0 governs the current authorized redesign. `DESIGN.md` and `.impeccable/design.json` document the actual visual system; `QA.md` records verification and limits. The 14 original research/register/evidence files remain unchanged. All 100 original placements remain accounted for, with original-site visitor links removed at the user’s request.

## Recovery and checks

The previous version is recoverable at Git tag **`backup/before-publication-redesign-2026-11-16`**, commit `2f8eac8`.

```sh
npm run check
npm run lint
npm run build
npm run test
```

The build creates static HTML and responsive images, then preserves photographic provenance. Tests inspect the real built output, static project routes, preserved copy/contact, image geometry, migration exclusion and source integrity. Full-resolution masters, publication information, production origin/hosting and any future form integration remain owner-dependent. The user has authorized GitHub upload and a Vercel client preview; client-domain migration remains unapproved.

## Photographic interaction refinement

Hover or keyboard-focus a cover for fixed-frame zoom and a View selection cue; the cue stays visible on phones. Scroll entrances run once per photographic identity. A small transparent progressive backdrop edge softens approaching imagery and clears around captions, reading passages, focus, menus/projects and the footer. Reduced motion/transparency and unsupported rendering keep a sharp edge. Native scrolling remains unchanged. Prior version: `backup/before-interaction-refinement-2026-11-17` (`ae925e7`).
