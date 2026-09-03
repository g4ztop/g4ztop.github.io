// Builds instagram.html — a 3-column archive grid — from an Instaloader export.
//
// Source media is far too heavy to publish as-is (1.2 GB, mostly video), so
// every item gets a web-sized derivative in media/instagram/:
//   images  → <base>.webp        (grid + lightbox)
//   videos  → <base>.webp poster + <base>.mp4 (transcoded)
//
// Derivatives are only rebuilt when the source is newer, so re-runs are cheap.

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFile } = require('child_process');

const ARCHIVE  = process.env.IG_ARCHIVE || '/Users/mitchellcraft/Projects/instagram-archive/posts';
const OUT_DIR  = path.join(__dirname, 'media', 'instagram');
const MANIFEST = path.join(OUT_DIR, 'manifest.json');

// Derivatives build to OUT_DIR locally, but the archive is too large to ship
// via git/GitHub Pages — it's hosted separately in a public GCS bucket, so
// the HTML references it there instead of the local media/instagram/ path.
const MEDIA_BASE = 'https://storage.googleapis.com/mitchellcraft-net-media/instagram';

// 'host' transcodes every clip into the site (heavy — see the README note);
// 'link' ships posters only and sends video items to the Instagram post.
const VIDEO_MODE = process.env.IG_VIDEO === 'link' ? 'link' : 'host';

const IMG_MAX   = 900;  // long edge of the webp derivative
const IMG_Q     = 74;
const VIDEO_MAX = 640;  // long edge of the mp4 derivative
const VIDEO_CRF = 32;
const JOBS      = Math.max(2, Math.min(6, os.cpus().length - 2));

const run = (cmd, args) => new Promise((resolve, reject) => {
  execFile(cmd, args, { maxBuffer: 1 << 24 }, (err, stdout) => {
    if (err) reject(new Error(`${cmd} failed: ${err.message}`));
    else resolve(stdout.trim());
  });
});

// Run tasks with a bounded pool so 600+ conversions don't fork at once
async function pool(items, worker, onProgress) {
  const queue = items.slice();
  let done = 0;
  const results = [];
  await Promise.all(Array.from({ length: JOBS }, async () => {
    while (queue.length) {
      const item = queue.shift();
      results.push(await worker(item));
      if (onProgress) onProgress(++done, items.length);
    }
  }));
  return results;
}

// ─── Scan the archive ─────────────────────────────────────────────────────────
// Instaloader names each media slot <date>_<shortcode>[_<n>]; a video slot has
// both a .jpg (its poster) and a .mp4.
function scanArchive() {
  const slots = new Map();
  for (const file of fs.readdirSync(ARCHIVE)) {
    const m = /^(\d{4}-\d{2}-\d{2})_(\d{2}-\d{2}-\d{2})_(.+)\.(jpg|mp4)$/.exec(file);
    if (!m) continue;
    const [, date, time, rest, ext] = m;
    const base = `${date}_${time}_${rest}`;
    const slot = slots.get(base) || { base, date, shortcode: rest.replace(/_\d+$/, ''), files: {} };
    slot.files[ext] = path.join(ARCHIVE, file);
    slots.set(base, slot);
  }
  return [...slots.values()]
    .filter(s => s.files.jpg)                       // a slot with no poster can't be shown
    .map(s => ({ ...s, isVideo: Boolean(s.files.mp4) }))
    .sort((a, b) => b.base.localeCompare(a.base));  // newest first, as Instagram shows it
}

// ─── Derivatives ──────────────────────────────────────────────────────────────
const isStale = (src, out) =>
  !fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs;

async function probe(file) {
  const out = await run('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', file,
  ]);
  const [w, h] = out.split('x').map(Number);
  return { width: w, height: h };
}

async function buildItem(slot) {
  const poster = path.join(OUT_DIR, `${slot.base}.webp`);
  const video  = path.join(OUT_DIR, `${slot.base}.mp4`);

  // Ratio comes from the video itself when there is one — a poster is
  // occasionally letterboxed relative to its clip.
  const dims = await probe(slot.isVideo ? slot.files.mp4 : slot.files.jpg);

  if (isStale(slot.files.jpg, poster)) {
    // This ffmpeg build has no webp encoder, so images go through cwebp.
    // Cap the long edge, whichever way the image is oriented.
    const jpg = await probe(slot.files.jpg);
    const resize = jpg.width >= jpg.height
      ? (jpg.width > IMG_MAX ? [String(IMG_MAX), '0'] : null)
      : (jpg.height > IMG_MAX ? ['0', String(IMG_MAX)] : null);
    await run('cwebp', [
      '-quiet', '-q', String(IMG_Q),
      ...(resize ? ['-resize', ...resize] : []),
      slot.files.jpg, '-o', poster,
    ]);
    if (!fs.existsSync(poster) || fs.statSync(poster).size === 0) {
      throw new Error(`empty webp for ${slot.base}`);
    }
  }

  if (slot.isVideo && VIDEO_MODE === 'host' && isStale(slot.files.mp4, video)) {
    await run('ffmpeg', [
      '-nostdin', '-v', 'error', '-y', '-i', slot.files.mp4,
      '-vf', `scale='if(gte(iw,ih),min(${VIDEO_MAX},iw),-2)':'if(lt(iw,ih),min(${VIDEO_MAX},ih),-2)'`,
      '-c:v', 'libx264', '-crf', String(VIDEO_CRF), '-preset', 'veryfast',
      '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
      '-c:a', 'aac', '-b:a', '96k', video,
    ]);
    if (!fs.existsSync(video) || fs.statSync(video).size === 0) {
      throw new Error(`empty mp4 for ${slot.base}`);
    }
  }

  return {
    base: slot.base,
    date: slot.date,
    shortcode: slot.shortcode,
    isVideo: slot.isVideo,
    width: dims.width,
    height: dims.height,
    poster: `${MEDIA_BASE}/${slot.base}.webp`,
    video: slot.isVideo && VIDEO_MODE === 'host' ? `${MEDIA_BASE}/${slot.base}.mp4` : null,
  };
}

// ─── Rows of matching aspect ratio ────────────────────────────────────────────
// Instagram crops to a handful of ratios; snap to the nearest so near-identical
// items share a row, and fall back to the measured ratio for anything unusual.
const KNOWN_RATIOS = [0.5625, 0.75, 0.8, 1, 1.25, 1.3333, 1.7778, 1.91];

function bucketOf(item) {
  const ratio = item.width / item.height;
  const near = KNOWN_RATIOS.find(r => Math.abs(ratio - r) / r < 0.04);
  return (near || Math.round(ratio * 50) / 50).toFixed(4);
}

// Fill each row from a look-ahead window so rows stay near-chronological
// instead of being sorted into one block per ratio.
const WINDOW = 60;

function packRows(items) {
  const queue = items.slice();
  const rows = [];
  const leftovers = [];

  while (queue.length) {
    const row = [queue.shift()];
    const bucket = row[0].bucket;
    // Re-check the bound each pass: splice below shrinks the queue
    for (let i = 0; i < Math.min(queue.length, WINDOW) && row.length < 3; i++) {
      if (queue[i].bucket !== bucket) continue;
      row.push(queue.splice(i, 1)[0]);
      i--;
    }
    // A row that can't be filled would leave holes mid-page; hold those items
    // back and pack them together at the end instead.
    if (row.length === 3) rows.push(row);
    else leftovers.push(...row);
  }

  // Sorting by ratio puts the closest shapes next to each other, so a mixed
  // row crops as little as possible.
  leftovers.sort((a, b) => Number(a.bucket) - Number(b.bucket));
  while (leftovers.length) rows.push(leftovers.splice(0, 3));

  return rows;
}

// A row of identical buckets keeps that ratio. A mixed leftover row uses
// sqrt(min * max), which splits the crop evenly between the two extremes
// instead of letting the mean favour whichever shape outnumbers the other.
function rowRatio(row) {
  const ratios = row.map(item => Number(item.bucket));
  const min = Math.min(...ratios);
  const max = Math.max(...ratios);
  return (min === max ? min : Math.sqrt(min * max)).toFixed(4);
}

// ─── HTML ─────────────────────────────────────────────────────────────────────
const assetVersion = ['style.css', 'script.js']
  .map(f => Math.floor(fs.statSync(path.join(__dirname, f)).mtimeMs))
  .reduce((a, b) => Math.max(a, b), 0)
  .toString(36);

function renderItem(item) {
  const url = `https://www.instagram.com/p/${item.shortcode}/`;
  const label = item.isVideo ? `Instagram video, ${item.date}` : `Instagram post, ${item.date}`;
  const badge = item.isVideo ? '\n          <span class="ig-play" aria-hidden="true"></span>' : '';
  const media = `<img src="${item.poster}" alt="${label}" loading="lazy" data-base="${item.base}" data-post="${url}"` +
    (item.video ? ` data-video="${item.video}">` : '>');

  // Without a hosted clip there is nothing to open, so the poster links out
  if (item.isVideo && !item.video) {
    return `
        <div class="ig-item">
          <a href="${url}" target="_blank" rel="noopener">${media}</a>${badge}
        </div>`;
  }

  return `
        <div class="ig-item">
          ${media}${badge}
        </div>`;
}

function buildPage(rows, items) {
  const years = items.map(i => i.date.slice(0, 4));
  const span = `${Math.min(...years)}–${Math.max(...years)}`;
  const videos = items.filter(i => i.isVideo).length;

  const grid = rows.map(row => {
    // A trailing row with fewer than three items stretches to fill the width
    // rather than leaving empty cells.
    const cols = row.length < 3 ? `;--cols:${row.length}` : '';
    return `
      <div class="ig-row" style="--ratio:${rowRatio(row)}${cols}">${row.map(renderItem).join('')}
      </div>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Instagram Archive — Mitchell Craft</title>
  <link rel="stylesheet" href="style.css?v=${assetVersion}">
</head>
<body>

  <!-- Desktop Navigation -->
  <nav class="nav-desktop">
    <ul>
      <li><a href="index.html">Work</a></li>
      <li><a href="instagram.html" class="nav-active">Archive</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>

  <!-- Mobile Header -->
  <div class="mobile-header">
    <span class="mobile-site-name">Mitchell Craft</span>
    <button class="burger" id="burger" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <ul>
      <li><a href="index.html">Work</a></li>
      <li><a href="instagram.html">Archive</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </div>

  <main>

    <header class="site-header">
      <div class="header-name">
        <h1>Instagram Archive</h1>
        <p class="tagline">${items.length} posts · ${videos} videos · ${span}</p>
        <p class="tagline-sub">Everything posted to <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a></p>
      </div>
    </header>

    <section class="ig-grid">${grid}
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <a href="mailto:mitchell.a.craft@gmail.com">mitchell.a.craft@gmail.com</a>
    <span class="footer-sep">·</span>
    <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a>
  </footer>

  <script src="script.js?v=${assetVersion}"></script>
  <!-- Temporary curation tool: add ?curate=1 to the URL. Delete this line and
       curate.js when the archive has been culled. -->
  <script src="curate.js?v=${assetVersion}"></script>
</body>
</html>
`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  if (!fs.existsSync(ARCHIVE)) {
    console.error(`Archive not found: ${ARCHIVE}`);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let slots = scanArchive();

  // instagram-curation.json is written by the curate tool (see curate.js).
  // Removed items always drop out; IG_KEEP_ONLY also drops anything unmarked.
  const curationFile = path.join(__dirname, 'instagram-curation.json');
  if (fs.existsSync(curationFile)) {
    const curation = JSON.parse(fs.readFileSync(curationFile, 'utf8'));
    const remove = new Set(curation.remove || []);
    const keep = new Set(curation.keep || []);
    const before = slots.length;
    slots = slots.filter(s => !remove.has(s.base));
    if (process.env.IG_KEEP_ONLY && keep.size) {
      slots = slots.filter(s => keep.has(s.base));
    }
    console.log(`curation: ${before} → ${slots.length} items (${remove.size} removed, ${keep.size} kept)`);
  }
  console.log(`${slots.length} media items (${slots.filter(s => s.isVideo).length} video) — video mode: ${VIDEO_MODE}, ${JOBS} jobs`);

  let lastTick = 0;
  const items = await pool(slots, buildItem, (done, total) => {
    if (done === total || done - lastTick >= 25) {
      lastTick = done;
      process.stdout.write(`  ${done}/${total}\r`);
    }
  });

  items.sort((a, b) => b.base.localeCompare(a.base));
  items.forEach(i => { i.bucket = bucketOf(i); });

  fs.writeFileSync(MANIFEST, JSON.stringify(items, null, 2), 'utf8');

  const rows = packRows(items);
  fs.writeFileSync(path.join(__dirname, 'instagram.html'), buildPage(rows, items), 'utf8');

  const full = rows.filter(r => r.length === 3).length;
  const buckets = [...new Set(items.map(i => i.bucket))].sort();
  console.log(`\n✓  instagram.html — ${rows.length} rows (${full} full), ratios: ${buckets.join(', ')}`);
})();
