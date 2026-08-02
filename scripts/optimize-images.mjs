#!/usr/bin/env node
// Resize + compress images in place so committed photos stay web-sized.
// Usage:
//   node scripts/optimize-images.mjs                 # all images under public/images
//   node scripts/optimize-images.mjs <file> [file..] # specific files (used by the pre-commit hook)
//
// Only shrinks — never upscales, and only writes when the result is smaller,
// so it is safe to re-run. Animated GIFs and SVGs are left untouched.

import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const MAX_WIDTH = 2000; // px — widest we ever need for the blog layout
const QUALITY = 80; // JPEG quality
const MIN_SAVING = 0.03; // only rewrite if at least 3% smaller (keeps re-runs no-ops)
const ROOT = 'public/images';
const EXTS = new Set(['.jpg', '.jpeg', '.png']);

const kb = (n) => `${Math.round(n / 1024)}KB`;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  if (!EXTS.has(ext)) return null;

  const input = await fs.readFile(file);
  let pipeline = sharp(input, { failOn: 'none' }).rotate(); // bake in EXIF orientation
  const meta = await pipeline.metadata();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  pipeline = ext === '.png'
    ? pipeline.png({ compressionLevel: 9 })
    : pipeline.jpeg({ quality: QUALITY, mozjpeg: true });

  const output = await pipeline.toBuffer();
  if (output.length <= input.length * (1 - MIN_SAVING)) {
    await fs.writeFile(file, output);
    return { before: input.length, after: output.length, changed: true };
  }
  return { before: input.length, after: input.length, changed: false };
}

const args = process.argv.slice(2);
const files = args.length ? args : await walk(ROOT);

let changed = 0;
let before = 0;
let after = 0;

for (const file of files) {
  if (!EXTS.has(path.extname(file).toLowerCase())) continue;
  try {
    const result = await optimize(file);
    if (!result) continue;
    before += result.before;
    after += result.after;
    if (result.changed) {
      changed++;
      console.log(`  ${file}  ${kb(result.before)} -> ${kb(result.after)}`);
    }
  } catch (err) {
    console.error(`  ! ${file}: ${err.message}`);
  }
}

console.log(`Optimized ${changed} image(s); saved ${kb(before - after)}.`);
