# Niyi Visuals

Editorial photography portfolio built with Astro, TypeScript, React and Motion. Source code, registered client photographs, font licensing, configuration and project documentation are included. The application lives in **`niyi-visuals-product-handoff/`**.

## Run locally

Use Node.js 24:

```sh
cd niyi-visuals-product-handoff
npm ci
npm run dev
```

## Vercel client preview

Import `49jull/NiyiVisuals` into Vercel and use these settings:

| Setting | Value |
| --- | --- |
| Root Directory | `niyi-visuals-product-handoff` |
| Framework | Astro |
| Node.js | 24.x |
| Install | `npm ci` |
| Build | `npm run build` |
| Output | `dist` |
| Production branch | `main` |

The checked-in `vercel.json` supplies the build settings. No environment variables, server adapter or form provider are required. Paths are rooted at `/`, not `/NiyiVisuals/`. Keep the Vercel GitHub connection enabled: each push to `main` rebuilds the client preview automatically, and other branches receive Vercel preview deployments. No GitHub Pages publishing workflow is installed because Vercel is the selected host.

The preview retains `noindex, nofollow` metadata and headers. This discourages indexing; it does not password-protect the site. The client's existing Pixieset website and domain remain unchanged.

Run `npm run check`, `npm run lint`, `npm run build` and `npm test` in the application directory to validate changes. Vercel runs a fresh production build for every deployment. Dependencies, generated builds, private `.env` files, Vercel account state, local review captures and private exports are ignored. Existing Git history is preserved.

See [the application README](niyi-visuals-product-handoff/README.md) for content editing and [QA](niyi-visuals-product-handoff/QA.md) for verification details.
