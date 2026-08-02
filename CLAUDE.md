# CLAUDE.md

Personal website for Chuan Law — https://chuanlaw.me — built with **Astro 5** + **Keystatic** CMS, deployed to **GitHub Pages**.

## Commands
- `npm run dev` — dev server at localhost:4321; Keystatic admin at `/keystatic`
- `npm run build` — static build to `dist/`
- `npm run optimize:images` — resize/compress images under `public/images/`

## Architecture
- **Content** is managed by Keystatic (`storage: local`) under `content/`. Blog posts live in `content/posts/*/index.mdoc`; edit them via the `/keystatic` admin.
- **Custom blog blocks** (single image, photo row, gallery, split) are defined once in `src/lib/blocks.tsx` — the single source of truth for both the Keystatic editor (`postComponents`) and the Markdoc→HTML rendering (`markdocTags`). Styles: `src/styles/blocks.css`. Posts render via `src/pages/blog/[slug].astro`.
- `src/pages/blog/travel-2018.astro` and `travel-2019.astro` are static gallery/index pages (year → album grids), **not** CMS posts.
- **Keystatic is dev-only**: `astro.config.mjs` enables the `keystatic()` integration only during `astro dev`, so the production build is fully static (no adapter needed). Content is still read at build time via `createReader`.
- **Images** are committed to `public/images/` and optimized on the way in by a `sharp` script wired to a git pre-commit hook (`.githooks/pre-commit`). Keep committed images web-optimized; external image hosting was intentionally deferred.

## Deployment
Push to `main` → GitHub Actions builds and deploys to GitHub Pages. Active development happens on the `astro-rebuild` branch (rebuild from the old Vue 2 site), not yet merged.

## Conventions
- Prefer honest, direct assessments and plain-language explanations.
