/**
 * Builds web-ready park media from the photographer's originals.
 *
 * Why: the supplied photos are 5–8 MB each and most videos are raw 4K camera
 * files (100–800 MB). None of that can ship as-is. This script writes only the
 * small, web-sized outputs into public/ — the originals stay outside the repo.
 *
 *   photos  → public/Assets/media/<slug>.webp      (1600px, ~150–300 KB)
 *             public/Assets/thumbs/<slug>.webp     (640px, for grids)
 *   clips   → public/Assets/media/clips/<slug>.mp4 (540x960, silent, ~5 s loop)
 *             public/Assets/media/clips/<slug>.webp (poster frame)
 *   feature → public/Assets/media/chandrayaan.mp4  (720p with sound)
 *
 * Sources default to the folders beside the repo ("../Adventure Park",
 * "../Water Park"). Override with MEDIA_SRC. Needs ffmpeg on PATH, or FFMPEG
 * set to its full path.
 *
 * Run with: node scripts/build-media.js            (everything)
 *           node scripts/build-media.js photos     (photos only)
 *           node scripts/build-media.js clips      (clips + feature only)
 *           node scripts/build-media.js clips <slug> (one clip only)
 *           node scripts/build-media.js site       (existing site assets)
 *           node scripts/build-media.js features   (feature videos only)
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const SRC = process.env.MEDIA_SRC || path.join(ROOT, '..');
const FFMPEG = process.env.FFMPEG || 'ffmpeg';
const CHANDRAYAAN_SRC =
  process.env.CHANDRAYAAN_SRC ||
  path.join(process.env.USERPROFILE || process.env.HOME || '', 'Downloads', 'CHANDRAYAAN video Dreamasia activity.mp4');

const MEDIA = path.join(PUBLIC, 'Assets', 'media');
const CLIPS = path.join(MEDIA, 'clips');
const THUMBS = path.join(PUBLIC, 'Assets', 'thumbs');

const AP = 'Adventure Park';
const WP = 'Water Park';

/** Photographs. `width` defaults to 1600; heroes get 1920. */
const PHOTOS = [
  // Heroes
  { slug: 'water-hero', src: `${WP}/AQUA TREASURE BAY (Pirate Ship)/34.JPG`, width: 1920 },
  { slug: 'adventure-hero', src: `${AP}/TYRE TRAILS/DSC_0242.JPG`, width: 1920 },

  // Adventure Park — one lead photo per ride, plus a few extras
  { slug: '360-spinout', src: `${AP}/360 SPINOUT/DSC_0494.JPG` },
  { slug: 'archers-arena', src: `${AP}/ARCHER'S ARENA/DSC_0055.JPG` },
  { slug: 'cloud-rider', src: `${AP}/CLOUD RIDER/DSC_0001.JPG` },
  { slug: 'cyclone-360', src: `${AP}/CYCLONE 360/DSC_0101.JPG` },
  { slug: 'multi-mania', src: `${AP}/MULTI MANIA/DSC_0003.JPG` },
  { slug: 'ninja-net', src: `${AP}/NINJA NET/DSC_0234.JPG` },
  { slug: 'reflex-zone', src: `${AP}/REFLEX ZONE/DSC_0493.JPG` },
  { slug: 'rocket-ejector', src: `${AP}/ROCKET EJECTOR/DSC_0118.JPG` },
  { slug: 'skyward-swing', src: `${AP}/SKYWARD SWING/DSC_0039.JPG` },
  { slug: 'tarzan-trek', src: `${AP}/TARZAN TREK/DSC_0266.JPG` },
  { slug: 'tarzan-trek-2', src: `${AP}/TARZAN TREK/DSC_0267.JPG` },
  { slug: 'thrill-coaster', src: `${AP}/THRILL COASTER/DSC_0257.JPG` },
  { slug: 'thrill-coaster-2', src: `${AP}/THRILL COASTER/DSC_0765.JPG` },
  { slug: 'tunnel-of-terror', src: `${AP}/TUNNEL OF TERROR/DSC_0056.JPG` },
  { slug: 'tyre-trails', src: `${AP}/TYRE TRAILS/DSC_0241.JPG` },
  { slug: 'tyre-trails-2', src: `${AP}/TYRE TRAILS/DSC_0244.JPG` },
  { slug: 'vertical-voyage', src: `${AP}/VERTICAL VOYAGE/12312 (1).JPG` },
  { slug: 'wild-west', src: `${AP}/WILD WEST/34342 (1).JPG` },
  // The supplied still is 378px wide, so take a frame from the 4K video instead.
  { slug: 'wild-wrangle', video: `${AP}/WILD WRANDGLE/VID_20240530_172105.mp4`, at: 8 },
  { slug: 'zip-rush', src: `${AP}/ZIP RUSH/DSC_0763.JPG` },

  // Water Park — by zone
  { slug: 'wave-of-dreams-1', src: `${WP}/WAVE OF DREAMS (Wavepool)/DSC_0433.JPG` },
  { slug: 'wave-of-dreams-2', src: `${WP}/WAVE OF DREAMS (Wavepool)/DSC_0425.JPG` },
  { slug: 'wave-of-dreams-3', src: `${WP}/WAVE OF DREAMS (Wavepool)/DSC_0436.JPG` },
  { slug: 'aqua-beats-1', src: `${WP}/AQUA BEATS/DSC_0315.JPG` },
  { slug: 'aqua-beats-2', src: `${WP}/AQUA BEATS/DSC_0307.JPG` },
  { slug: 'aqua-drift-1', src: `${WP}/AQUA DRIFT/aq3.JPG` },
  { slug: 'aqua-drift-2', src: `${WP}/AQUA DRIFT/DSC_0139.JPG` },
  { slug: 'aqua-drift-3', src: `${WP}/AQUA DRIFT/DSC_0144.JPG` },
  { slug: 'aqua-thrill-zone-1', src: `${WP}/AQUA THRILL ZONE (Tower 1)/DSC_0134.JPG` },
  { slug: 'aqua-thrill-zone-2', src: `${WP}/AQUA THRILL ZONE (Tower 1)/DSC_0040.JPG` },
  { slug: 'aqua-thrill-zone-3', src: `${WP}/AQUA THRILL ZONE (Tower 1)/DSC_0420.JPG` },
  { slug: 'aqua-thrill-zone-4', src: `${WP}/AQUA THRILL ZONE (Tower 1)/DSC_0126.JPG` },
  { slug: 'aqua-thrill-zone-5', src: `${WP}/AQUA THRILL ZONE (Tower 1)/DSC_0218.JPG` },
  { slug: 'aqua-treasure-bay-1', src: `${WP}/AQUA TREASURE BAY (Pirate Ship)/DSC_0200.JPG` },
  { slug: 'aqua-treasure-bay-2', src: `${WP}/AQUA TREASURE BAY (Pirate Ship)/DSC_0108.JPG` },
  { slug: 'aqua-treasure-bay-3', src: `${WP}/AQUA TREASURE BAY (Pirate Ship)/DSC_0064.JPG` },
  { slug: 'aqua-treasure-bay-4', src: `${WP}/AQUA TREASURE BAY (Pirate Ship)/15.JPG` },

  ...EXTRA_PHOTOS(),
];

/**
 * Second drop — "Dream asia additional media folderwise": entrance, drone,
 * amusement park, plaza, pathway, FoodAsia, the three stay properties and
 * weddings. The "Dreamasia ENHANCED IMAGES" folder is deliberately not used
 * for photographs: much of it is AI-generated scenes of people and events that
 * did not happen at the park. Only the official Taro & Miko art is taken from
 * it (see SITE_IMAGES).
 */
function EXTRA_PHOTOS() {
  const X = 'Dream asia additional media folderwise';
  const list = (folder, pairs, width) => pairs.map(([slug, file]) => ({ slug, src: `${X}/${folder}/${file}`, ...(width ? { width } : {}) }));

  return [
    // Entrance — the castle gate
    ...list('dreamasia entrance', [['entrance-hero', 'DJI_0303.JPG']], 1920),
    ...list('dreamasia entrance', [
      ['entrance-aerial', 'DJI_0306.JPG'],
      ['entrance-day', '207A4075.JPG'],
      ['entrance-dusk', '207A4221.JPG'],
      ['ticket-counter', '207A4091.JPG'],
    ]),

    // Around the estate
    ...list('central plaza', [['plaza-1', '207A4339.JPG'], ['plaza-2', '207A4342.JPG']]),
    ...list('entrance to central plaza pathway', [
      ['pathway-1', '207A4295.JPG'],
      ['pathway-2', '207A4309.JPG'],
      ['pathway-3', '207A4303.JPG'],
      ['pathway-train', '207A4329.JPG'],
      ['pathway-bus', '207A4327.JPG'],
    ]),
    ...list('foodasia', [['foodasia-1', '207A4509.JPG'], ['foodasia-2', '207A4510.JPG']]),

    // Drone
    ...list('drone shot', [['aerial-park', 'DJI_0315.JPG'], ['aerial-resort-dusk', 'DJI_0447.JPG']], 1920),
    ...list('drone shot', [
      ['aerial-wavepool', 'DJI_0332.JPG'],
      ['aerial-slides', 'DJI_0358.JPG'],
      ['aerial-pirate', 'DJI_0359.JPG'],
      ['aerial-slide-tower', 'DJI_0373.JPG'],
      ['aerial-slides-2', 'DJI_0418.JPG'],
      ['aerial-amusement', 'DJI_0397.JPG'],
      ['aerial-adventure', 'DJI_0364.JPG'],
      ['aerial-resort-night', 'DJI_0449.JPG'],
      ['aerial-lazy-river', 'DJI_0427.JPG'],
      ['aerial-tents', 'DJI_0344.JPG'],
      ['aerial-bali', 'DJI_0381.JPG'],
    ]),

    // Amusement Park
    ...list('amusement park', [['amuse-hero', '207A4382.JPG']], 1920),
    ...list('amusement park', [
      ['amuse-rocket', '207A4377.JPG'],
      ['amuse-dragon', '207A4373.JPG'],
      ['amuse-coaster', '207A4375.JPG'],
      ['amuse-pendulum', '207A4359.JPG'],
      ['amuse-ship', '207A4393.JPG'],
      ['amuse-swinger-2', '207A4386.JPG'],
      ['amuse-torii', '207A4351.JPG'],
      ['amuse-sumo', '207A4354.JPG'],
      ['amuse-gate', '207A4370.JPG'],
      ['amuse-pavilion', '207A4365.JPG'],
      ['amuse-temple', '207A4398.JPG'],
    ]),

    // Stays — Palace Courtyard
    ...list('palace courtyard', [['palace-hero', '207A4112.JPG']], 1920),
    ...list('palace courtyard', [
      ['palace-arch', '207A4120.JPG'],
      ['palace-chhatri', '207A4135.JPG'],
      ['palace-front', '207A4140.JPG'],
      ['palace-lawn', '207A4098.JPG'],
      ['palace-court', '207A4154.JPG'],
      ['palace-court-2', '207A4166.JPG'],
      ['palace-room', '207A4182.JPG'],
      ['palace-room-2', '207A4187.JPG'],
      ['palace-bath', '207A4192.JPG'],
      ['palace-view', '207A4199.JPG'],
      ['palace-dorm', '207A4202.JPG'],
    ]),

    // Stays — Resort of Asia (Bali villas)
    ...list('resort of asia bali villas', [['bali-pool-dusk', '207A4279.JPG']], 1920),
    ...list('resort of asia bali villas', [
      ['bali-villa', '207A4250.JPG'],
      ['bali-villa-2', '207A4253.JPG'],
      ['bali-verandah', '207A4255.JPG'],
      ['bali-pool-2', '207A4282.JPG'],
      ['bali-pool-logo', '207A4277.JPG'],
      ['bali-dusk', '207A4286.JPG'],
      ['bali-night', '207A4291.JPG'],
      ['bali-path', '207A4405.JPG'],
      ['bali-cottage', '207A4411.JPG'],
      ['bali-row', '207A4234.JPG'],
      ['bali-cafe', 'bali villas cafetaria/207A4429.JPG'],
      ['bali-reception', 'reception/207A4407.JPG'],
      ['bali-lounge', 'reception/207A4410.JPG'],
    ]),

    // Stays — Wavy Stay
    ...list('wavy stay rooms', [
      ['wavy-facade', '207A4528.JPG'],
      ['wavy-pool', '207A4562.JPG'],
      ['wavy-room', '207A4579.JPG'],
      ['wavy-room-2', '207A4583.JPG'],
      ['wavy-suite', '207A4591.JPG'],
      ['wavy-theme', '207A4600.JPG'],
      ['wavy-theme-2', '207A4621.JPG'],
      ['wavy-theme-3', '207A4639.JPG'],
    ]),

    // Weddings — real ceremonies on the estate, plus venue walk-through shots
    ...list('Wedding Photos', [['wedding-hero', 'CAN09133.JPG']], 1920),
    ...list('Wedding Photos', [
      ['wedding-stage', 'CAN09139.JPG'],
      ['wedding-fireworks', 'CAN09200.JPG'],
      ['wedding-lit-stage', '773A5553.JPG'],
      ['wedding-couple', '773A0832.JPG'],
      ['wedding-couple-2', 'CAN08449.JPG'],
      ['wedding-baraat', '773A3906.JPG'],
      ['wedding-groom', 'CAN08364.JPG'],
      ['wedding-haldi', 'CAN06618.JPG'],
      ['wedding-haldi-couple', '773A0033.JPG'],
      ['wedding-haldi-decor', 'CAN05784.JPG'],
      ['wedding-dance', 'CAN05872.JPG'],
      ['wedding-mandap', 'CAN08261.JPG'],
      ['wedding-sangeet', 'CAN06914.JPG'],
      ['wedding-night-decor', 'CAN06889.JPG'],
      ['wedding-balloons', 'CAN09168.JPG'],
      ['wedding-venue-arches', '20260814_113106.jpg.jpeg'],
      ['wedding-venue-palace', '20260814_121713.jpg.jpeg'],
      ['wedding-venue-dome', '20260814_121742.jpg.jpeg'],
    ]),
  ];
}

/**
 * Short silent loops. `start` / `dur` in seconds, picked from frame strips.
 * `fit`:   'portrait' (already vertical), 'crop' (centre-crop landscape to 9:16)
 * `turn`:  ffmpeg transpose value for footage stored sideways.
 */
const CLIP_LIST = [
  { slug: 'rocket-ejector', src: `${AP}/ROCKET EJECTOR/rocket ejector.mp4`, start: 11, dur: 5, fit: 'crop' },
  { slug: 'zip-rush', src: `${AP}/ZIP RUSH/zip rush.mp4`, start: 1, dur: 6 },
  { slug: 'cloud-rider', src: `${AP}/CLOUD RIDER/VID_20240528_173814.mp4`, start: 3, dur: 6 },
  { slug: 'skyward-swing', src: `${AP}/SKYWARD SWING/VID_20240508_170020.mp4`, start: 2, dur: 5.5 },
  { slug: 'multi-mania', src: `${AP}/MULTI MANIA/VID_20240527_172219.mp4`, start: 16, dur: 6 },
  { slug: '360-spinout', src: `${AP}/360 SPINOUT/VID_20240528_172523.mp4`, start: 0.5, dur: 6 },
  { slug: 'wild-wrangle', src: `${AP}/WILD WRANDGLE/VID_20240530_172105.mp4`, start: 2, dur: 6 },
  { slug: 'vertical-voyage', src: `${AP}/VERTICAL VOYAGE/VID_20240527_174618.mp4`, start: 1, dur: 6 },
  { slug: 'reflex-zone', src: `${AP}/REFLEX ZONE/VID_20240531_171430.mp4`, start: 0.3, dur: 6 },
  { slug: 'wild-west', src: `${AP}/WILD WEST/VID_20240601_162649.mp4`, start: 3.5, dur: 5 },
  { slug: 'thrill-coaster', src: `${AP}/THRILL COASTER/Video/VID_20240523_162006.mp4`, start: 7.5, dur: 5, fit: 'crop' },
  { slug: 'tarzan-trek', src: `${AP}/TARZAN TREK/TARZAN TREK.mp4`, start: 8, dur: 6 },
  { slug: 'cyclone-360', src: `${AP}/CYCLONE 360/DSC_0133.MOV`, start: 8, dur: 6, turn: 2 },
  { slug: 'archers-arena', src: `${AP}/ARCHER'S ARENA/VID_20240601_164355.mp4`, start: 0, dur: 4 },

  { slug: 'wave-of-dreams', src: `${WP}/WAVE OF DREAMS (Wavepool)/video/IMG_4248.MOV`, start: 1, dur: 6 },
  { slug: 'aqua-drift', src: `${WP}/AQUA DRIFT/video/VID_20240518_150310.mp4`, start: 12, dur: 6 },
  { slug: 'aqua-beats', src: `${WP}/AQUA BEATS/video/Aqua Beats.mp4`, start: 10, dur: 6 },
  { slug: 'aqua-thrill-zone', src: `${WP}/AQUA THRILL ZONE (Tower 1)/video/Aqua thrill zone.mp4`, start: 12.5, dur: 6 },
  { slug: 'aqua-treasure-bay', src: `${WP}/AQUA TREASURE BAY (Pirate Ship)/video/aqua treasure bay.mp4`, start: 13.5, dur: 5.5 },
];

const ff = (args) => execFileSync(FFMPEG, ['-nostdin', '-v', 'error', '-y', ...args], { maxBuffer: 256 * 1024 * 1024 });

const kb = (file) => Math.round(fs.statSync(file).size / 1024);

async function buildPhotos() {
  for (const item of PHOTOS) {
    const input = item.video
      ? ff(['-ss', String(item.at), '-i', path.join(SRC, item.video), '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'])
      : path.join(SRC, item.src);

    if (!item.video && !fs.existsSync(input)) {
      console.warn('missing', item.src);
      continue;
    }

    const full = path.join(MEDIA, `${item.slug}.webp`);
    const small = path.join(THUMBS, `${item.slug}.webp`);

    // .rotate() applies the camera's EXIF orientation before resizing.
    await sharp(input).rotate().resize({ width: item.width || 1600, withoutEnlargement: true }).webp({ quality: 74 }).toFile(full);
    await sharp(input).rotate().resize({ width: 640, withoutEnlargement: true }).webp({ quality: 70 }).toFile(small);

    console.log(`photo  ${item.slug.padEnd(22)} ${kb(full)} KB / thumb ${kb(small)} KB`);
  }
}

async function buildClips() {
  const pick = process.argv[3];
  for (const clip of CLIP_LIST.filter((c) => !pick || c.slug === pick)) {
    const input = path.join(SRC, clip.src);
    if (!fs.existsSync(input)) {
      console.warn('missing', clip.src);
      continue;
    }

    const filters = [];
    if (clip.turn !== undefined) filters.push(`transpose=${clip.turn}`);
    if (clip.fit === 'crop') filters.push('crop=ih*9/16:ih');
    filters.push('scale=540:960:force_original_aspect_ratio=increase', 'crop=540:960', 'fps=24', 'format=yuv420p');

    const out = path.join(CLIPS, `${clip.slug}.mp4`);
    ff([
      '-ss', String(clip.start), '-t', String(clip.dur), '-i', input,
      '-vf', filters.join(','),
      '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '29', '-profile:v', 'high',
      '-movflags', '+faststart', out,
    ]);

    // Poster from the clip itself, so the still matches the first frame.
    const poster = path.join(CLIPS, `${clip.slug}.webp`);
    const png = ff(['-i', out, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-']);
    await sharp(png).webp({ quality: 68 }).toFile(poster);
    console.log(`clip   ${clip.slug.padEnd(22)} ${kb(out)} KB / poster ${kb(poster)} KB`);
  }
}

/**
 * Feature videos with sound — played only when a visitor presses play.
 * `size` is the ffmpeg scale; `poster` is the second the still is taken from.
 */
const FEATURES = [
  { slug: 'chandrayaan', src: CHANDRAYAAN_SRC, size: '1280:-2', poster: 30 },
  { slug: 'diwali', src: path.join(SRC, 'Dream asia additional media folderwise', 'Diwali promotion video.mp4'), size: '720:-2', poster: 2.3, crf: 31 },
  {
    slug: 'brand-reel',
    src: path.join(SRC, 'Dream asia additional media folderwise', 'Dreamasia ENHANCED IMAGES', 'ENHANCED Images for DA', 'WhatsApp Video 2026-08-21 at 12.18.56.mp4'),
    size: '720:-2',
    poster: 0.8,
  },
];

async function buildFeature() {
  for (const item of FEATURES) {
    if (!fs.existsSync(item.src)) {
      console.warn('missing feature source:', item.src);
      continue;
    }

    const out = path.join(MEDIA, `${item.slug}.mp4`);
    ff([
      '-i', item.src,
      '-vf', `scale=${item.size},format=yuv420p`,
      '-c:v', 'libx264', '-preset', 'slow', '-crf', String(item.crf || 26), '-profile:v', 'high',
      '-c:a', 'aac', '-b:a', '96k',
      '-movflags', '+faststart', out,
    ]);

    const png = ff(['-ss', String(item.poster), '-i', out, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-']);
    const poster = path.join(MEDIA, `${item.slug}.webp`);
    await sharp(png).webp({ quality: 74 }).toFile(poster);
    console.log(`feature ${item.slug.padEnd(14)} ${kb(out)} KB / poster ${kb(poster)} KB`);
  }
}

/**
 * Existing site assets that were shipping far above their display size:
 * mascot cut-outs (PNG, alpha kept in WebP), the floating Book Now badge
 * (500 KB shown at 55px), the ticket card photos, and two homepage videos.
 */
const SITE_IMAGES = [
  { from: 'Assets/character2.png', to: 'Assets/media/site/taro-wave.webp', width: 360 },
  { from: 'footerImg.png', to: 'Assets/media/site/taro-slide.webp', width: 240 },
  { from: 'Assets/Book-now-button.png', to: 'Assets/media/site/book-now.webp', width: 120 },
  { from: '1.png', to: 'Assets/media/site/ticket-kid.webp', width: 720 },
  { from: '2.png', to: 'Assets/media/site/ticket-adult.webp', width: 720 },
  { from: '3.png', to: 'Assets/media/site/ticket-senior.webp', width: 720 },

  // Official Taro & Miko character art, from the second media drop.
  { from: '../../Dream asia additional media folderwise/Dreamasia ENHANCED IMAGES/Taro Mico/tm 1.png', to: 'Assets/media/site/taro-miko.webp', width: 560 },
  { from: '../../Dream asia additional media folderwise/Dreamasia ENHANCED IMAGES/Taro Mico/seperate.png', to: 'Assets/media/site/taro.webp', width: 380 },
  { from: '../../Dream asia additional media folderwise/Dreamasia ENHANCED IMAGES/Taro Mico/seperate 2.png', to: 'Assets/media/site/miko.webp', width: 380 },
];

const SITE_VIDEOS = [
  // 5 s pool clip, 2230px and 14 MB in the original. Shown silent.
  { from: 'childvideo (1).mp4', to: 'Assets/media/site/dive.mp4', vf: 'scale=1600:-2', poster: 'Assets/media/site/dive.webp' },
  // Mascot animation beside the intro copy. Shown silent.
  { from: '986523140 (1).mp4', to: 'Assets/media/site/mascot.mp4', vf: 'scale=540:-2', poster: 'Assets/media/site/mascot.webp' },
];

async function buildSite() {
  fs.mkdirSync(path.join(MEDIA, 'site'), { recursive: true });

  for (const item of SITE_IMAGES) {
    const out = path.join(PUBLIC, item.to);
    await sharp(path.join(PUBLIC, item.from)).resize({ width: item.width, withoutEnlargement: true }).webp({ quality: 80, alphaQuality: 90 }).toFile(out);
    console.log(`site   ${item.to.padEnd(40)} ${kb(path.join(PUBLIC, item.from))} → ${kb(out)} KB`);
  }

  for (const item of SITE_VIDEOS) {
    const out = path.join(PUBLIC, item.to);
    ff([
      '-i', path.join(PUBLIC, item.from),
      '-vf', `${item.vf},format=yuv420p`,
      '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-profile:v', 'high',
      '-movflags', '+faststart', out,
    ]);
    const png = ff(['-i', out, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-']);
    await sharp(png).webp({ quality: 72 }).toFile(path.join(PUBLIC, item.poster));
    console.log(`site   ${item.to.padEnd(40)} ${kb(path.join(PUBLIC, item.from))} → ${kb(out)} KB`);
  }
}

/**
 * Ride-card hover clips: the same moments as CLIP_LIST, framed 4:3 to match
 * the cards instead of 9:16. Small (640×480) and silent.
 */
async function buildHover() {
  const HOVER = path.join(MEDIA, 'hover');
  fs.mkdirSync(HOVER, { recursive: true });
  const pick = process.argv[3];

  for (const clip of CLIP_LIST.filter((c) => !pick || c.slug === pick)) {
    const input = path.join(SRC, clip.src);
    if (!fs.existsSync(input)) {
      console.warn('missing', clip.src);
      continue;
    }
    const filters = [];
    if (clip.turn !== undefined) filters.push(`transpose=${clip.turn}`);
    filters.push('scale=640:480:force_original_aspect_ratio=increase', 'crop=640:480', 'fps=24', 'format=yuv420p');

    const out = path.join(HOVER, `${clip.slug}.mp4`);
    ff([
      '-ss', String(clip.start), '-t', String(clip.dur), '-i', input,
      '-vf', filters.join(','),
      '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '30', '-profile:v', 'high',
      '-movflags', '+faststart', out,
    ]);
    console.log(`hover  ${clip.slug.padEnd(22)} ${kb(out)} KB`);
  }
}

/**
 * 20-second hero loops cut from the park's own YouTube films (downloaded to
 * Desktop/Dreamasia/YouTube with yt-dlp). Silent, 1280 wide, 24 fps.
 */
const YT = path.join(SRC, 'YouTube');
const PARK_FILM = path.join(YT, 'pYwOSOUDzoU.mp4'); // "Complete Theme Park Video"
const WEDDING_FILM = path.join(YT, 'uIK4SOetsgo.mp4'); // "Destination Wedding Property"
const SCHOOL_FILM = path.join(YT, '3ce5tX1si-s.mp4'); // "School Picnic" (360p only)

const HEROES = [
  { slug: 'home', src: PARK_FILM, start: 4 },
  { slug: 'water', src: PARK_FILM, start: 90 },
  { slug: 'adventure', src: PARK_FILM, start: 254 },
  { slug: 'amusement', src: PARK_FILM, start: 336 },
  { slug: 'corporates', src: PARK_FILM, start: 410 },
  { slug: 'weddings', src: WEDDING_FILM, start: 122 },
  { slug: 'stays', src: WEDDING_FILM, start: 44 },
];

async function buildHeroes() {
  const HERO = path.join(MEDIA, 'hero');
  fs.mkdirSync(HERO, { recursive: true });
  const pick = process.argv[3];

  for (const item of HEROES.filter((h) => !pick || h.slug === pick)) {
    if (!fs.existsSync(item.src)) {
      console.warn('missing hero source:', item.src);
      continue;
    }
    const out = path.join(HERO, `${item.slug}.mp4`);
    ff([
      '-ss', String(item.start), '-t', '20', '-i', item.src,
      '-vf', 'scale=1280:-2,fps=24,format=yuv420p',
      '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '33', '-profile:v', 'high',
      '-movflags', '+faststart', out,
    ]);
    console.log(`hero   ${item.slug.padEnd(14)} ${kb(out)} KB`);
  }

  // The school-picnic film is too small for a hero; it ships whole, with
  // sound, as a click-to-play video on the Corporates page.
  if (!pick && fs.existsSync(SCHOOL_FILM)) {
    const out = path.join(MEDIA, 'school-picnic.mp4');
    ff([
      '-i', SCHOOL_FILM,
      '-vf', 'format=yuv420p',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '26', '-profile:v', 'high',
      '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', out,
    ]);
    const png = ff(['-ss', '6', '-i', out, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-']);
    await sharp(png).webp({ quality: 74 }).toFile(path.join(MEDIA, 'school-picnic.webp'));
    console.log(`feature school-picnic   ${kb(out)} KB`);
  }
}

/**
 * Guest testimonial Shorts from the park's own channel (@dreamasiaworld),
 * downloaded with yt-dlp to Desktop/Dreamasia/YouTube/testimonials. Kept with
 * sound (they play muted until a visitor taps), 540×960, plus a poster each.
 */
const TESTIMONIAL_IDS = ['b4lKHO47BAA', '2gLxpqMetgE', '1wugSNmP27Y', 'cSXkazVIlvA', 'EjBbSoUibmM'];

async function buildTestimonials() {
  const OUT = path.join(MEDIA, 'testimonials');
  fs.mkdirSync(OUT, { recursive: true });

  for (const id of TESTIMONIAL_IDS) {
    const input = path.join(YT, 'testimonials', `${id}.mp4`);
    if (!fs.existsSync(input)) {
      console.warn('missing testimonial:', input);
      continue;
    }
    const out = path.join(OUT, `${id}.mp4`);
    ff([
      '-i', input,
      '-vf', 'scale=540:960:force_original_aspect_ratio=increase,crop=540:960,fps=30,format=yuv420p',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '31', '-profile:v', 'high',
      '-c:a', 'aac', '-b:a', '80k', '-ac', '2',
      '-movflags', '+faststart', out,
    ]);
    const png = ff(['-ss', '4', '-i', out, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-']);
    const poster = path.join(OUT, `${id}.webp`);
    await sharp(png).webp({ quality: 74 }).toFile(poster);
    console.log(`testimonial ${id} ${kb(out)} KB / poster ${kb(poster)} KB`);
  }
}

/*
 * Phone heroes. On a portrait phone the hero is a tall box (about 0.62:1 for
 * PageHero, about 1:1 for the About and Contact banners), so `object-cover`
 * only ever shows a centre strip of the wide photo and video. Shipping that
 * strip alone, at phone size, cuts the LCP image to roughly a third and the
 * hero loop to roughly a quarter. Keep these lists in step with
 * PHONE_HEROES in app/_ui/PageKit.js.
 */
const PHONE_TALL = ['entrance-hero', 'water-hero', 'adventure-hero', 'amuse-hero', 'aerial-resort-dusk', 'wedding-hero', 'aerial-adventure', 'aerial-slide-tower'];
const PHONE_SQUARE = ['aerial-park', 'entrance-aerial'];

async function buildPhone() {
  const OUT = path.join(MEDIA, 'm');
  fs.mkdirSync(OUT, { recursive: true });
  const crop = async (name, ratio, maxH) => {
    const src = path.join(MEDIA, `${name}.webp`);
    const { width, height } = await sharp(src).metadata();
    const w = Math.round(height * ratio);
    const out = path.join(OUT, `${name}.webp`);
    await sharp(src)
      .extract({ left: Math.round((width - w) / 2), top: 0, width: w, height })
      .resize({ height: Math.min(height, maxH), withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(out);
    console.log(`phone  ${name.padEnd(20)} ${kb(src)} KB -> ${kb(out)} KB`);
  };
  for (const name of PHONE_TALL) await crop(name, 3 / 5, 1200);
  for (const name of PHONE_SQUARE) await crop(name, 1, 1000);

  // Tall 432x720 cuts of the hero loops, from the same moments.
  for (const item of HEROES) {
    if (!fs.existsSync(item.src)) {
      console.warn('missing hero source:', item.src);
      continue;
    }
    const out = path.join(MEDIA, 'hero', `${item.slug}-m.mp4`);
    ff([
      '-ss', String(item.start), '-t', '20', '-i', item.src,
      '-vf', 'crop=ih*3/5:ih,scale=432:720,fps=24,format=yuv420p',
      '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '34', '-profile:v', 'high',
      '-movflags', '+faststart', out,
    ]);
    console.log(`phone  hero/${item.slug}-m.mp4`.padEnd(34) + `${kb(out)} KB`);
  }
}

(async () => {
  const only = process.argv[2];
  if (only === 'phone') return buildPhone();
  if (only === 'testimonials') return buildTestimonials();
  if (only === 'hover') return buildHover();
  if (only === 'heroes') return buildHeroes();
  [MEDIA, CLIPS, THUMBS].forEach((dir) => fs.mkdirSync(dir, { recursive: true }));

  if (!only || only === 'photos') await buildPhotos();
  if (!only || only === 'clips') {
    await buildClips();
    if (!process.argv[3]) await buildFeature();
  }
  if (only === 'features') await buildFeature();
  if (!only || only === 'site') await buildSite();
})();
