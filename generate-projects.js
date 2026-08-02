const fs = require('fs');
const path = require('path');

// ─── Project data ────────────────────────────────────────────────────────────
// mediaDir points at media/<dir>. Structured dirs have images/ (+ images/thumbs/)
// and video/ subfolders; legacy dirs are flat. Hero = bg-* image if present,
// else first video, else first image.
const projects = [
  {
    slug: 'hometopia',
    title: 'HOMETOPIA',
    year: '2022–2024',
    role: 'Lead Technical Artist',
    client: 'Hometopia Inc.',
    tags: ['Game Development', 'Technical Art', 'Tools'],
    description: `Lead Technical Artist on Hometopia, a sandbox home-building game released on Steam on April 2, 2025. Responsibilities spanned technical art pipeline development, custom tooling, and procedural systems designed to support a growing team of artists. Work included shader authoring, LOD and performance optimization, and developing Blender and Houdini tools to accelerate asset production.

The game gives players thousands of assets and customization options across a variety of environments, with no budget limits — free-form building in sandbox mode, real-time multiplayer so friends can design entire neighborhoods together, ready-made homes to build on, landscaping tools for outdoor spaces, and a built-in camera and portfolio system for sharing creations with the community. GamesRadar+ called it "the best parts of The Sims 4 and House Flipper."`,
    mediaDir: 'hometopia',
    cardSub: 'Sandbox home-building game on Steam',
    links: [
      { label: 'View on Steam', url: 'https://store.steampowered.com/app/1138640/Hometopia/' },
      { label: 'hometopia.com', url: 'https://www.hometopia.com' },
    ],
  },
  {
    slug: 'voidclimber',
    title: 'VOID CLIMBER',
    year: '2025',
    role: 'Technical Artist',
    client: 'FuturePerfect Studios',
    studio: 'INCworks',
    tags: ['Game Development', 'Technical Art', 'Procedural'],
    description: `Technical art for FuturePerfect Studios' 2025 video game Void Climber — a roguelike platformer in which the player climbs to the top of a collapsing universe and must survive its hazardous, decaying environment. Designed the game's procedural level generators in Blender and Python, building systems that assemble levels from modular assets and reshuffle the skybox, background, and environment on every playthrough. The generators were built to support the game's four historical "epochs" — prehistory, antiquity, industrial, and contemporary — so that each run produces a distinct climb while holding to the art direction.`,
    mediaDir: 'void-climber',
    cardSub: 'Procedural level generation — FuturePerfect Studios',
  },
  {
    slug: 'miumiu',
    title: 'MIU MIU FALL/WINTER 2024',
    year: '2024',
    role: 'VFX Artist',
    client: 'Miu Miu',
    director: 'Cecile B Evans',
    tags: ['Fashion', 'VFX', '3D Animation'],
    studio: 'INCworks',
    description: `VFX for Miu Miu's Fall/Winter 2024 collection, directed by Cecile B Evans. Created a variety of 3D assets and animations for the short film "Reception!", which played before and during Miu Miu's show at Paris Fashion Week 2024. The film centers on a speculative future in which one of the last living translators on earth receives a series of messages in a mysterious storage center, and features challenging 3D animations and simulations — including a procedural static system designed to mimic the murmuration of flocks of birds.`,
    mediaDir: 'miu-miu-fall-winter-2024',
    cardSub: 'Directed by Cecile B Evans',
  },
  {
    slug: 'moncler',
    title: 'MONCLER × SALEHE BEMBURY',
    year: '2023',
    role: 'Lead VFX Artist',
    client: 'Moncler',
    tags: ['Fashion Campaign', 'VFX', 'CG'],
    studio: 'INCworks',
    youtube: ['HgMMMktXVLw'],
    description: `Lush CG forests created for the Moncler × Salehe Bembury 2023 release campaign, shown on billboards in Los Angeles and New York City. Built with Blender, Nuke, and SpeedTree.`,
    mediaDir: 'moncler-x-salehe-bembury',
    cardSub: 'Summer 2023 Campaign',
  },
  {
    slug: 'megan',
    title: 'MEGAN THEE STALLION',
    subtitle: 'Cobra',
    year: '2023',
    role: 'VFX Artist',
    studio: 'INCworks',
    tags: ['Music Video', 'VFX', '3D'],
    youtube: ['DOZNRoL0310'],
    description: `Custom backdrops, a snake animation, and visual effects for the music video accompanying Megan Thee Stallion's single "Cobra" — produced at INCworks in partnership with ThermoNuclear's creative team, using Unreal Engine, Blender, and After Effects.`,
    mediaDir: 'megan-thee-stallion-cobra',
    cardSub: 'Cobra — Studio: INCworks',
  },
  {
    slug: 'realityornot',
    title: 'CECILE B. EVANS',
    subtitle: 'Reality or Not',
    year: '2023',
    role: 'VFX Artist',
    director: 'Cecile B. Evans',
    studio: 'INCworks',
    tags: ['Film', 'VFX', 'AI'],
    description: `A series of special effects for artist Cecile B. Evans' 2023 film "Reality Or Not", which premiered at MAMbo — Museo d'Arte Moderna di Bologna and has since been featured at the Singapore Art Museum, SODA Manchester, and Lafayette Anticipations. Work included AI-assisted character animation for ML — live-action performances by Hayett McCarthy run through Stable Diffusion's ControlNet and EbSynth to map a hand-drawn character onto the footage — plus the Anti-Verity Factory, a flooded, post-apocalyptic take on CERN's ELENA particle collider staged in Unreal Engine 5 with swarms of CG butterflies, and the Collective of Renders, a fictional K-Pop group built with MetaHuman.`,
    mediaDir: 'cecile-b-evans-reality-or-not',
    cardSub: 'Reality or Not — Film VFX',
  },
  {
    slug: 'bmth',
    title: 'BRING ME THE HORIZON',
    subtitle: 'AmEN!',
    year: '2023',
    role: 'VFX Artist',
    director: 'Weston Allen',
    tags: ['Music Video', 'VFX', 'Character Animation'],
    studio: 'INCworks',
    youtube: ['2TjcPpasesA'],
    description: `Custom character creation and animation of Lil Uzi Vert, a perspective-defying communion wafer consumption sequence, and more for Bring Me The Horizon's "AmEN!" (featuring Lil Uzi Vert, Daryl Palumbo, and Glassjaw), directed by Weston Allen.`,
    mediaDir: 'bring-me-the-horizon-amen',
    cardSub: 'AmEN! — Directed by Weston Allen',
  },
  {
    slug: 'elena',
    title: 'ELENA VELEZ',
    subtitle: 'YR003 — HOW\'S MY DRIVING?',
    year: '2023',
    role: 'VFX Artist',
    client: 'Elena Velez',
    tags: ['Fashion', 'AI', 'NYFW'],
    description: `Campaign video for CFDA award winner Elena Velez's Autumn/Winter 2023 fashion show "YR003 — HOW'S MY DRIVING?" at New York Fashion Week. The video was installed across eight screens as the backdrop for the catwalk and the introduction to the designer's visual and conceptual world. Graphics were created using a combination of AI imagery, AI-generated depth maps, and 3D modeling in Blender. In partnership with Ophelia & Company.`,
    mediaDir: 'elena-velez-yr-003-how-s-my-driving',
    cardSub: 'YR003 — HOW\'S MY DRIVING? NYFW 2023',
  },
  {
    slug: 'lakings',
    title: 'LA KINGS',
    year: '2023',
    role: 'Lead VFX Artist',
    client: 'LA Kings / AEG',
    tags: ['Sports', 'Virtual Production', 'Volumetric Capture'],
    description: `Props, environments, physics simulations, and set pieces for a series of cinematic Unreal Engine animations featuring volumetric captures of LA Kings players, built on Yoom's volumetric capture technology. The videos were presented on the Crypto.com Arena jumbotron during LA Kings games. In partnership with Yoom and the LA Kings.`,
    mediaDir: 'la-kings-jumbotron',
    cardSub: 'Volumetric Capture — Crypto.com Arena',
  },
  {
    slug: 'procedural',
    title: 'PROCEDURAL WORKS',
    year: 'Various',
    role: 'Technical Artist',
    tags: ['Technical Tools', 'Blender', 'Procedural', 'Houdini'],
    description: `Custom tools and dynamic systems for procedural animation and generative art workflows. Includes a published Blender plugin for geometry-node-driven animation systems, Houdini procedural rigs, and various experimental real-time generative systems built in Unreal Engine.`,
    mediaDir: 'procedural-works',
    cardSub: 'Custom tools and dynamic systems',
  },
  {
    slug: 'pitstop',
    title: 'PITSTOP',
    subtitle: 'Album Promos',
    year: '2022',
    role: 'Creative Direction, Typography, Animation',
    tags: ['Music', 'Animation', 'Typography'],
    description: `A collection of music video teasers — "Missing One", "FRAME", and "ANALOG Remote" — for Pressure Fit & David Ben-Porat's collaborative album PITSTOP. Each video was themed around the music within, created in collaboration with the musicians.`,
    mediaDir: 'pitstop-album-promos',
    cardSub: 'Teasers for the album PITSTOP',
  },
  {
    slug: 'ultraman',
    title: 'ULTRAMAN CONNECTION',
    year: '2023',
    role: 'Lead Unreal Artist',
    client: 'Ultraman Connection',
    tags: ['Virtual Production', 'Unreal Engine 5', 'Game Engine'],
    description: `Virtual production sets and environments built in Unreal Engine 5 for the Ultraman Connection project. As Lead Unreal Artist, responsibilities included set design, real-time lighting, and performance optimization for use across live-streamed virtual productions.`,
    mediaDir: 'ultraman-connection',
    cardImage: 'images/ultraman.jpg',
    cardSub: 'Virtual Production — Unreal Engine 5',
  },
  {
    slug: '1000deaths',
    title: '1000 DEATHS',
    year: '2022',
    role: 'Character Artist',
    client: 'Pariah Interactive',
    tags: ['Game Development', 'Character Art', 'Shaders'],
    description: `Character creation, rigging, and custom shader effects for the video game 1000 Deaths, developed by Pariah Interactive. Work spanned concepting, high-poly sculpting, retopology, texturing, and implementation of stylized real-time shaders within the game engine.`,
    mediaDir: '1000-deaths',
    cardImage: 'images/1000deaths.jpg',
    cardSub: 'Character Creation — Pariah Interactive',
  },
];

// ─── Media scanning ───────────────────────────────────────────────────────────
const IMG_RE = /\.(webp|jpe?g|png)$/i;
const VID_RE = /\.(mp4|webm)$/i;

function scanMedia(dir) {
  const root = path.join(__dirname, 'media', dir);
  const m = { images: [], videos: [], hasThumbs: false, flat: false };
  if (!fs.existsSync(root)) return m;

  const imgDir = path.join(root, 'images');
  const vidDir = path.join(root, 'video');

  if (fs.existsSync(imgDir) || fs.existsSync(vidDir)) {
    if (fs.existsSync(imgDir)) {
      m.images = fs.readdirSync(imgDir).filter(f => IMG_RE.test(f)).sort();
      m.hasThumbs = fs.existsSync(path.join(imgDir, 'thumbs'));
    }
    if (fs.existsSync(vidDir)) {
      m.videos = fs.readdirSync(vidDir).filter(f => VID_RE.test(f)).sort();
    }
  } else {
    m.flat = true;
    const files = fs.readdirSync(root);
    m.images = files.filter(f => IMG_RE.test(f)).sort();
    m.videos = files.filter(f => VID_RE.test(f)).sort();
  }
  return m;
}

function imgPath(p, f)  { return p.flatMedia ? `../media/${p.mediaDir}/${f}` : `../media/${p.mediaDir}/images/${f}`; }
function vidPath(p, f)  { return p.flatMedia ? `../media/${p.mediaDir}/${f}` : `../media/${p.mediaDir}/video/${f}`; }

// Resolve hero + gallery for a project
function resolveMedia(project) {
  const m = scanMedia(project.mediaDir);
  project.flatMedia = m.flat;
  project.hasThumbs = m.hasThumbs;

  const bg     = m.images.find(f => f.startsWith('bg-'));
  const plain  = m.images.filter(f => !f.startsWith('bg-') && !f.startsWith('poster.'));
  const poster = m.images.find(f => f.startsWith('poster.'));

  let hero;
  if (m.videos.length)      hero = { type: 'video', file: m.videos[0], poster: bg || plain[0] || poster || null };
  else if (bg)              hero = { type: 'image', file: bg };
  else if (plain.length)    hero = { type: 'image', file: plain[0] };
  else if (poster)          hero = { type: 'image', file: poster };
  else                      hero = null;

  const galleryVideos = m.videos.slice(1);
  let galleryImages = plain;
  if (hero && hero.type === 'image' && !hero.file.startsWith('bg-')) {
    galleryImages = plain.filter(f => f !== hero.file);
  }

  const gallery = [
    ...galleryVideos.map(f => ({ type: 'video', file: f })),
    ...galleryImages.map(f => ({ type: 'image', file: f })),
  ];

  // Card thumbnail (site-root-relative)
  let card;
  if (project.cardImage) {
    card = project.cardImage;
  } else if (m.hasThumbs) {
    const t = bg || plain[0] || poster;
    card = `media/${project.mediaDir}/images/thumbs/${t}`;
  } else if (bg || plain[0] || poster) {
    const t = bg || plain[0] || poster;
    card = m.flat ? `media/${project.mediaDir}/${t}` : `media/${project.mediaDir}/images/${t}`;
  } else {
    card = '';
  }
  project.card = card;

  return { hero, gallery };
}

// ─── HTML template ────────────────────────────────────────────────────────────
function renderMeta(label, value) {
  if (!value) return '';
  return `
        <div class="meta-item">
          <label>${label}</label>
          <span>${value}</span>
        </div>`;
}

function renderTags(tags) {
  return tags.map(t => `<span>${t}</span>`).join('\n              ');
}

// Blank lines in a description become separate paragraphs
function renderDescription(text) {
  return text
    .split(/\n\s*\n/)
    .map(p => `<p class="proj-description">${p.trim()}</p>`)
    .join('\n    ');
}

function renderLinks(links) {
  if (!links || !links.length) return '';
  const items = links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`
  ).join('\n      ');
  return `
    <div class="proj-links">
      ${items}
    </div>
`;
}

function renderHero(project, hero) {
  if (!hero) return '';
  if (hero.type === 'video') {
    const poster = hero.poster ? ` poster="${imgPath(project, hero.poster)}"` : '';
    return `<video src="${vidPath(project, hero.file)}" autoplay muted loop playsinline${poster}></video>`;
  }
  return `<img src="${imgPath(project, hero.file)}" alt="${project.title}" loading="lazy">`;
}

function renderGallery(project, gallery) {
  const embeds = (project.youtube || []).map(id => `
        <div class="gallery-item wide">
          <iframe src="https://www.youtube.com/embed/${id}" title="${project.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>`).join('');

  return embeds + gallery.map((item, i) => {
    const cls = i === 0 && item.type === 'video' ? 'gallery-item wide' : 'gallery-item';
    if (item.type === 'video') {
      return `
        <div class="${cls}">
          <video src="${vidPath(project, item.file)}" autoplay muted loop playsinline></video>
        </div>`;
    }
    return `
        <div class="${cls}">
          <img src="${imgPath(project, item.file)}" alt="${project.title} still" loading="lazy">
        </div>`;
  }).join('');
}

function buildPage(project, index, media) {
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const prevLink = prev
    ? `<a href="${prev.slug}.html" class="nav-prev">${prev.title}</a>`
    : `<span></span>`;
  const nextLink = next
    ? `<a href="${next.slug}.html" class="nav-next">${next.title}</a>`
    : `<span></span>`;

  const subtitle = project.subtitle ? `<p class="card-sub" style="margin-top:6px;color:#777;">${project.subtitle}</p>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${project.title} — Mitchell Craft</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body class="project-page">

  <!-- Desktop Navigation -->
  <nav class="nav-desktop">
    <ul>
      <li><a href="../work.html">Work</a></li>
      <li><a href="../about.html">About</a></li>
    </ul>
  </nav>

  <!-- Mobile Header -->
  <div class="mobile-header">
    <span class="mobile-site-name">Mitchell Craft</span>
    <button class="burger" id="burger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <ul>
      <li><a href="../work.html">Work</a></li>
      <li><a href="../about.html">About</a></li>
    </ul>
  </div>

  <main>

    <a href="../work.html" class="back-link">Work</a>

    <!-- Project Header -->
    <div class="proj-header">
      <h1>${project.title}</h1>
      ${subtitle}
      <div class="tags">
        ${renderTags(project.tags)}
      </div>
    </div>

    <!-- Meta -->
    <div class="proj-meta">
      ${renderMeta('Year', project.year)}
      ${renderMeta('Role', project.role)}
      ${renderMeta('Client', project.client || null)}
      ${renderMeta('Director', project.director || null)}
      ${renderMeta('Studio', project.studio || null)}
    </div>

    <!-- Hero -->
    <div class="proj-hero">
      ${renderHero(project, media.hero)}
    </div>

    <!-- Description -->
    ${renderDescription(project.description)}
${renderLinks(project.links)}
    <!-- Gallery -->
    <div class="proj-gallery">
      ${renderGallery(project, media.gallery)}
    </div>

    <!-- Prev / Next -->
    <div class="proj-nav">
      ${prevLink}
      ${nextLink}
    </div>

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <a href="mailto:mitchell.a.craft@gmail.com">mitchell.a.craft@gmail.com</a>
    <span class="footer-sep">·</span>
    <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a>
  </footer>

  <script src="../script.js"></script>
</body>
</html>
`;
}

// ─── work.html (grid) ─────────────────────────────────────────────────────────
function buildCard(project) {
  const sub = project.cardSub ? `\n              <p class="card-sub">${project.cardSub}</p>` : '';
  return `
        <article class="card span-3">
          <a href="projects/${project.slug}.html">
            <div class="card-img" style="background-color:#0d0d0d;">
              <img src="${project.card}" alt="${project.title}" loading="lazy">
            </div>
            <div class="card-info">
              <h2>${project.title}</h2>${sub}
              <div class="tags">
                ${renderTags(project.tags.slice(0, 3))}
              </div>
            </div>
          </a>
        </article>`;
}

function buildWorkPage() {
  const effectMakerCard = `
        <article class="card span-3">
          <a href="#" target="_blank">
            <div class="card-img" style="background-color:#0a0a0a;">
              <img src="media/effect-maker/images/maxresdefault.webp" alt="YouTube: Effect Maker" loading="lazy">
            </div>
            <div class="card-info">
              <h2>YOUTUBE: EFFECT MAKER</h2>
              <p class="card-sub">Tutorial series on procedural VFX & real-time effects</p>
              <div class="tags">
                <span>YouTube</span>
              <span>Tutorials</span>
              <span>VFX</span>
              </div>
            </div>
          </a>
        </article>`;

  const cards = [effectMakerCard, ...projects.map(buildCard)].join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Work — Mitchell Craft</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Desktop Navigation -->
  <nav class="nav-desktop">
    <ul>
      <li><a href="work.html" class="nav-active">Work</a></li>
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
      <li><a href="work.html">Work</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </div>

  <main>

    <!-- Site Header -->
    <header class="site-header">
      <div class="header-name">
        <h1>Mitchell Craft</h1>
        <p class="tagline">Creative Technologist + 3D Artist</p>
        <p class="tagline-sub">Creative Technologist at YouTube · Technical 3D &amp; VFX Artist based in NYC</p>
      </div>
      <div class="header-contact">
        <a href="mailto:mitchell.a.craft@gmail.com">mitchell.a.craft@gmail.com</a>
        <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a>
      </div>
    </header>

    <!-- Portfolio Grid -->
    <section class="portfolio">
      <div class="grid">
${cards}

      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <a href="mailto:mitchell.a.craft@gmail.com">mitchell.a.craft@gmail.com</a>
    <span class="footer-sep">·</span>
    <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a>
  </footer>

  <script src="script.js"></script>
  <script src="webgl-fx.js"></script>
</body>
</html>
`;
}

// ─── Generate files ───────────────────────────────────────────────────────────
const outDir = path.join(__dirname, 'projects');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const warnings = [];

projects.forEach((project, i) => {
  const media = resolveMedia(project);
  if (!media.hero) warnings.push(`NO MEDIA: ${project.slug} (media/${project.mediaDir})`);
  const html = buildPage(project, i, media);
  fs.writeFileSync(path.join(outDir, `${project.slug}.html`), html, 'utf8');
  const m = scanMedia(project.mediaDir);
  console.log(`✓  projects/${project.slug}.html  (${m.videos.length} videos, ${m.images.filter(f => !f.startsWith('bg-')).length} images)`);
});

fs.writeFileSync(path.join(__dirname, 'work.html'), buildWorkPage(), 'utf8');
console.log('✓  work.html');

if (warnings.length) {
  console.log('\n⚠ Warnings:');
  warnings.forEach(w => console.log('  ' + w));
}
console.log(`\nDone — ${projects.length} project pages generated.`);
