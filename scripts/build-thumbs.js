/**
 * Generates small WebP thumbnails for the gallery grids.
 *
 * Why: `output: 'export'` turns off next/image optimisation, so whatever sits
 * in public/ is what the browser downloads. The gallery grids were rendering
 * full-size photographs into ~300px cells — Corporates alone pulled about 4MB
 * to paint fifteen thumbnails.
 *
 * The grids now load these thumbnails; the lightbox still loads the original,
 * on demand, when someone actually opens a photo.
 *
 * Run with: node scripts/build-thumbs.js
 * Output is committed, so a deploy never needs sharp installed.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC = path.join(__dirname, '..', 'public');
const OUT_DIR = path.join(PUBLIC, 'Assets', 'thumbs');

/** Source images used by the gallery grids, relative to public/. */
const SOURCES = [
  // Stays — 22 resort photographs
  ...Array.from({ length: 22 }, (_, i) => `Assets/stay/stay-${String(i + 1).padStart(2, '0')}.jpeg`),

  // Weddings
  'Assets/wedding-slider1.jpg',
  'Assets/wedding-slider2.jpg',
  'Assets/wedding-slider3.jpg',
  'Assets/wedding-slider-4.jpg',
  'Assets/wedding-slider-5.jpg',
  'Assets/wedding-slider-6.jpg',

  // Corporates — activities and facilities
  'Assets/commando.jpg',
  'Assets/zip-line.jpg',
  'Assets/Archery-field.jpg',
  'Assets/bunji-jump.jpg',
  'Assets/adv4.jpg',
  'Assets/adventaure.jpg',
  'Assets/boat.jpg',
  'Assets/masti.jpg',
  'Assets/Fun-Filled2.jpg',
  'Assets/Fun-Filled3.jpg',
  'Assets/BulkBooking.jpg',
  'Assets/facilities.jpg',
  'Assets/facilities2.jpg',
  'Assets/customers-interactions.jpg',
  'Assets/restaurant.jpg',

  // Adventure Park
  'outdoor-games.png',
];

/** Larger images used as hero / split-row art, re-encoded in place as WebP. */
const INLINE = [
  { from: 'outdoor-games.png', to: 'Assets/webp/outdoor-games.webp', width: 1200 },
  { from: 'corporate.png', to: 'Assets/webp/corporate.webp', width: 1200 },
  { from: 'colleges.png', to: 'Assets/webp/colleges.webp', width: 900 },
  { from: 'schools.png', to: 'Assets/webp/schools.webp', width: 900 },
  { from: 'largeGroup.png', to: 'Assets/webp/largeGroup.webp', width: 900 },
  { from: 'Assets/destinationwedding.jpg', to: 'Assets/webp/destinationwedding.webp', width: 1600 },
  { from: 'Assets/stay/stay-01.jpeg', to: 'Assets/webp/stay-hero.webp', width: 1600 },
];

/** Thumbnail long edge. Grid cells never exceed ~320 CSS px, so 640 covers 2x. */
const THUMB_WIDTH = 640;

function thumbName(relative) {
  return `${path.basename(relative).replace(/\.[^.]+$/, '')}.webp`;
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(PUBLIC, 'Assets', 'webp'), { recursive: true });

  let sourceBytes = 0;
  let outputBytes = 0;
  let made = 0;
  const missing = [];

  for (const relative of SOURCES) {
    const input = path.join(PUBLIC, relative);

    if (!fs.existsSync(input)) {
      missing.push(relative);
      continue;
    }

    const output = path.join(OUT_DIR, thumbName(relative));

    await sharp(input)
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(output);

    sourceBytes += fs.statSync(input).size;
    outputBytes += fs.statSync(output).size;
    made += 1;
  }

  for (const item of INLINE) {
    const input = path.join(PUBLIC, item.from);

    if (!fs.existsSync(input)) {
      missing.push(item.from);
      continue;
    }

    const output = path.join(PUBLIC, item.to);

    await sharp(input)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(output);

    sourceBytes += fs.statSync(input).size;
    outputBytes += fs.statSync(output).size;
    made += 1;
  }

  const kb = (bytes) => `${Math.round(bytes / 1024)}KB`;
  const saved = sourceBytes - outputBytes;

  console.log(`generated ${made} files`);
  console.log(`source:   ${kb(sourceBytes)}`);
  console.log(`output:   ${kb(outputBytes)}`);
  console.log(`saved:    ${kb(saved)} (${Math.round((saved / sourceBytes) * 100)}%)`);

  if (missing.length) {
    console.log(`\nmissing (skipped): ${missing.join(', ')}`);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
