import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'static',
  site: 'https://chuanlaw.me',
  integrations: [
    react(),
    markdoc(),
    keystatic(),
  ],
});
