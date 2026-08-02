import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// The Keystatic admin UI needs on-demand (SSR) rendering, which a fully static
// build can't produce without an adapter. Storage is local, so the admin is
// only useful in dev anyway — enable it for `astro dev` only and keep the
// production build pure static. Content is still read at build time via
// createReader, independent of this integration.
const enableKeystatic = process.argv.includes('dev');

export default defineConfig({
  output: 'static',
  site: 'https://chuanlaw.me',
  integrations: [
    react(),
    markdoc(),
    ...(enableKeystatic ? [keystatic()] : []),
  ],
});
