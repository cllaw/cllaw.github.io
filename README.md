# Chuan Law's Website

https://chuanlaw.me/

Built with [Astro](https://astro.build/) + [Keystatic](https://keystatic.com/) CMS.

> An earlier version of this README is preserved in [`README.legacy.md`](./README.legacy.md).

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
                  # Keystatic admin at localhost:4321/keystatic
```

## Writing blog posts (admin portal)

Blog content is managed with the Keystatic CMS. The admin portal runs locally in
development — it is **not** deployed (the live site is fully static), so there is
nothing to log into and no credentials to manage.

1. Start the dev server: `npm run dev`
2. Open the admin at **http://localhost:4321/keystatic**
3. Under **Blog Posts**, create or edit a post. Set the title, date, cover image,
   etc., then write the body in the rich-text editor.
4. To position photos and text, use the **insert** menu in the editor to add a
   content block:
   - **Single image** — one image with alignment (left/center/right/full),
     width, and an optional caption
   - **Photo row** — 2–4 images side by side (stacks on mobile)
   - **Gallery** — a grid of many images (2/3/4 columns)
   - **Split (image + text)** — an image beside a block of text, image on either side
5. Saving writes plain files into `content/posts/<slug>/` and copies images into
   `public/images/blog/`. **Commit those files to git** to publish them.

The block definitions live in `src/lib/blocks.tsx` (a single source of truth for
both the editor and how each block renders to HTML); their styles are in
`src/styles/blocks.css`.

## Build

```bash
npm run build     # Output to dist/ (static)
npm run preview   # Preview the build locally
```

Keystatic is enabled only during `npm run dev`, so the production build is fully
static and needs no server or adapter.

## Deployment

Push to `main` branch. GitHub Actions builds and deploys automatically to GitHub Pages.
