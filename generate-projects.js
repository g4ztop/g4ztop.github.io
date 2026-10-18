const fs = require('fs');
const path = require('path');

// Bumped whenever style.css or script.js changes, so browsers can't serve a
// stale copy of either after a deploy.
const assetVersion = ['style.css', 'script.js']
  .map(f => Math.floor(fs.statSync(path.join(__dirname, f)).mtimeMs))
  .reduce((a, b) => Math.max(a, b), 0)
  .toString(36);

// ─── Project data ────────────────────────────────────────────────────────────
// mediaDir points at media/<dir>. Structured dirs have images/ (+ images/thumbs/)
// and video/ subfolders; legacy dirs are flat. Hero = bg-* image if present,
// else first video, else first image.
const projects = [
  {
    slug: 'effectmaker',
    title: 'YOUTUBE: EFFECT MAKER',
    year: '2024–Present',
    role: 'Creative Technologist',
    client: 'YouTube',
    tags: ['YouTube', 'Product Design', 'GenAI', 'VFX', 'AR Effects'],
    description: `Creative Technologist on Effect Maker, YouTube's third-party design platform for Shorts effects and face filters. Designs and builds effects and homepage templates, and consults with engineering on best practices informed by real-world VFX production experience.

Also writes the system instructions and preamble behind the platform's generative AI features, including image and video generation.`,
    mediaDir: 'effect-maker',
    cardImage: 'media/effect-maker/images/maxresdefault.webp',
    cardSub: 'Effects, reusable templates & generative AI',
    // Creator sample clips are vertical Shorts footage; the promo previews
    // (channel_page_preview, desktop_preview, shorts_preview) stay 16:9.
    portraitVideos: f => f.endsWith('_labeled_v2.webm'),
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
    cardImage: 'media/miu-miu-fall-winter-2024/images/bg-01-429753658_18425388745049890_4814345837404597800_n-topaz-enhance-2x.webp',
    cardZoom: 1.32,
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
    videoFirst: true,
    exclude: ['03-'], // cropped repeat of the hero shot
    cardImage: 'media/moncler-x-salehe-bembury/images/bg-01-Moncler_SaleheBembury_FW23_0660_VFX_Retouched.webp',
    description: `Lush CG forests created for the Moncler × Salehe Bembury 2023 release campaign, shown on billboards in Los Angeles and New York City. Built with Blender, Nuke, and SpeedTree.`,
    mediaDir: 'moncler-x-salehe-bembury',
    cardSub: 'CG environments for a global fashion campaign',
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
    youtubeStart: 43,
    videoFirst: true,
    description: `Custom backdrops, a snake animation, and visual effects for the music video accompanying Megan Thee Stallion's single "Cobra" — produced at INCworks in partnership with ThermoNuclear's creative team, using Unreal Engine, Blender, and After Effects.`,
    mediaDir: 'megan-thee-stallion-cobra',
    cardSub: 'Cobra — Studio: INCworks',
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
    // Source still is pillarboxed; 1.45 crops past the black bars. Full-size
    // image rather than the thumb so it stays sharp at that crop.
    cardImage: 'media/elena-velez-yr-003-how-s-my-driving/images/01-Capture.webp',
    cardZoom: 1.7,
    cardSub: 'AI imagery, depth maps & Blender for NYFW',
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
    cardSub: 'AI-assisted character animation & real-time VFX',
  },
  {
    slug: 'lakings',
    title: 'YOOM × LA KINGS',
    year: '2023',
    role: 'Lead VFX Artist',
    client: 'LA Kings / AEG',
    tags: ['Sports', 'Virtual Production', 'Volumetric Capture'],
    youtube: ['JGETVhesGkw', 'IFcZWVEDKXw'],
    description: `Props, environments, physics simulations, and set pieces for a series of cinematic Unreal Engine animations featuring volumetric captures of LA Kings players, built on Yoom's volumetric capture technology. The videos were presented on the Crypto.com Arena jumbotron during LA Kings games. In partnership with Yoom and the LA Kings.`,
    mediaDir: 'la-kings-jumbotron',
    cardImage: 'media/la-kings-jumbotron/images/thumbs/02-3.webp',
    cardSub: 'Jumbotron animations — Crypto.com Arena',
  },
  {
    slug: 'hometopia',
    title: 'HOMETOPIA',
    year: '2022–2024',
    role: 'Lead Technical Artist',
    client: 'Hometopia Inc.',
    tags: ['Game Development', 'Technical Art', 'Tools'],
    description: `Lead Technical Artist on Hometopia, a sandbox home-building game released on Steam on April 2, 2025. Responsibilities spanned technical art pipeline development, custom tooling, and procedural systems designed to support a growing team of artists. Work included shader authoring, LOD and performance optimization, and developing Blender and Houdini tools to accelerate asset production.`,
    mediaDir: 'hometopia',
    cardSub: 'Artist tools, shaders & asset production pipelines',
    links: [
      { label: 'View on Steam', url: 'https://store.steampowered.com/app/1138640/Hometopia/' },
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
    slug: 'procedural',
    title: 'PROCEDURAL TOOLS & SYSTEMS',
    year: 'Various',
    role: 'Technical Artist',
    tags: ['Technical Tools', 'Blender', 'Procedural', 'Houdini'],
    description: `Custom tools and dynamic systems for procedural animation and generative art workflows. Includes a published Blender plugin for geometry-node-driven animation systems, Houdini procedural rigs, and various experimental real-time generative systems built in Unreal Engine.`,
    mediaDir: 'procedural-works',
    cardSub: 'Blender geometry nodes & procedural animation',
  },
];

const projectOrder = ['effectmaker', 'moncler', 'hometopia', 'realityornot', 'elena', 'procedural', 'voidclimber', 'miumiu', 'lakings', 'megan', 'bmth'];
projects.sort((a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug));

const caseNotes = {
  effectmaker: ['Effects and generative AI for YouTube Shorts.', 'A third-party effects platform', 'Effects, reusable templates and GenAI system instructions', 'Platform templates and interactive experiences'],
  moncler: ['CG environments for the Moncler × Salehe Bembury campaign.', 'Campaign art direction', 'Blender, SpeedTree and Nuke', 'Campaign imagery and billboard placements in LA and NYC'],
  hometopia: ['Production tools and procedural systems for a growing art team.', 'Game asset production requirements', 'Blender and Houdini tools, shader authoring and optimization', 'Artist-facing tools and game-ready assets'],
  realityornot: ['An AI-assisted character workflow within a larger film VFX production.', 'Live-action performance and a hand-drawn character', 'ControlNet and EbSynth, alongside Unreal Engine 5 work', 'Character animation and film environments'],
  elena: ['AI imagery and 3D environments for a multi-screen fashion show.', 'The visual world of YR003', 'AI-generated imagery and depth maps, with Blender modeling', 'Campaign video installed across eight NYFW screens'],
  procedural: ['Reusable controls for procedural animation and generative art.', 'Geometry, motion parameters and creative constraints', 'Blender geometry nodes, Houdini rigs and real-time systems', 'Custom tools, a Blender plugin and animated studies'],
  voidclimber: ['Procedural level generation in Blender and Python.', 'Modular assets and four historical epochs', 'Rule-based assembly and environment variation', 'Distinct level layouts within the game’s art direction']
};

function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function metadata(title, description, route) {
  const url = 'https://mitchellcraft.net/' + route;
  return `<meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="https://mitchellcraft.net/media/moncler-x-salehe-bembury/images/bg-01-Moncler_SaleheBembury_FW23_0660_VFX_Retouched.webp">
  <meta name="twitter:card" content="summary_large_image">`;
}
function renderOverview(project) {
  const notes = caseNotes[project.slug]; if (!notes) return '';
  return `<section class="case-overview" data-review-id="case-overview" aria-label="Project overview">
      <p class="case-deck">${escapeHtml(notes[0])}</p>
      <dl class="case-facts">${['Brief', 'Approach', 'Delivery'].map((label, i) => `<div><dt>${label}</dt><dd>${escapeHtml(notes[i+1])}</dd></div>`).join('')}</dl>
    </section>`;
}

// Folded into a single "Misc. Projects" page rather than individual cards.
const miscProjects = [
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

  // project.exclude drops files from the gallery, matched by filename prefix
  const excluded = f => (project.exclude || []).some(x => f.startsWith(x));

  const galleryVideos = m.videos.slice(1).filter(f => !excluded(f));
  let galleryImages = plain.filter(f => !excluded(f));
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
    return `<video src="${vidPath(project, hero.file)}" data-loop-preview muted loop playsinline controls preload="metadata"${poster}></video>`;
  }
  return `<img src="${imgPath(project, hero.file)}" alt="${project.title}" loading="lazy">`;
}

function renderEmbeds(project) {
  return (project.youtube || []).map((id, i) => {
    // Load embeds near the viewport and preserve the selected shot's start time.
    const start = i === 0 ? project.youtubeStart || 0 : 0;
    const params = `?playsinline=1&amp;rel=0${start ? `&amp;start=${start}` : ''}`;
    return `
        <div class="gallery-item wide">
          <iframe src="https://www.youtube.com/embed/${id}${params}" title="${project.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>`;
  }).join('');
}

function renderStills(project, gallery) {
  return gallery.map((item, i) => {
    const portrait = item.type === 'video' && project.portraitVideos && project.portraitVideos(item.file);
    const cls = portrait
      ? 'gallery-item video-item portrait'
      : (i === 0 && item.type === 'video' ? 'gallery-item video-item wide' : (item.type === 'video' ? 'gallery-item video-item' : 'gallery-item'));
    if (item.type === 'video') {
      return `
        <div class="${cls}">
          <video data-src="${vidPath(project, item.file)}" data-loop-preview muted loop playsinline controls preload="none"></video>
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

  const heroLast = project.videoFirst && !renderStills(project, media.gallery);
  const heroBlock = `<!-- Hero -->
    <div class="proj-hero${heroLast ? ' proj-hero-last' : ''}">
      ${renderHero(project, media.hero)}
    </div>`;

  const textBlock = `<!-- Description -->
    ${renderDescription(project.description)}${renderLinks(project.links)}`;

  const embeds = renderEmbeds(project);
  const stills = renderStills(project, media.gallery);

  const galleryWrap = inner => inner
    ? `<!-- Gallery -->
    <div class="proj-gallery">
      ${inner}
    </div>`
    : '';

  // videoFirst leads with the video, then the copy, then the hero still, then
  // whatever else is in the gallery
  const blocks = (project.videoFirst
    ? [galleryWrap(embeds), textBlock, heroBlock, galleryWrap(stills)]
    : [heroBlock, textBlock, galleryWrap(embeds + stills)]
  ).filter(Boolean).join('\n\n    ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(project.title)} — Mitchell Craft</title>
  ${metadata(project.title + " — Mitchell Craft", caseNotes[project.slug]?.[0] || project.cardSub || project.title, `projects/${project.slug}.html`)}
  <link rel="stylesheet" href="../style.css?v=${assetVersion}">
</head>
<body class="project-page">

  <!-- Desktop Navigation -->
  <nav class="nav-desktop">
    <ul>
      <li><a href="../index.html">Work</a></li>
      <li><a href="../instagram.html">Archive</a></li>
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
      <li><a href="../index.html">Work</a></li>
      <li><a href="../instagram.html">Archive</a></li>
      <li><a href="../about.html">About</a></li>
    </ul>
  </div>

  <main>

    <a href="../index.html" class="back-link">Work</a>

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

    ${renderOverview(project)}

    ${blocks}

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

  <script src="../script.js?v=${assetVersion}"></script>
</body>
</html>
`;
}

// ─── projects/misc.html (folded ultraman / 1000deaths / pitstop) ──────────────
function buildMiscSection(project) {
  const media = resolveMedia(project);
  if (!media.hero) warnings.push(`NO MEDIA: ${project.slug} (media/${project.mediaDir})`);

  const subtitle = project.subtitle ? `<p class="card-sub" style="margin-top:6px;color:#777;">${project.subtitle}</p>` : '';
  const heroBlock = media.hero ? `<!-- Hero -->
      <div class="proj-hero">
        ${renderHero(project, media.hero)}
      </div>` : '';
  const textBlock = `<!-- Description -->
      ${renderDescription(project.description)}${renderLinks(project.links)}`;
  const galleryInner = renderEmbeds(project) + renderStills(project, media.gallery);
  const galleryBlock = galleryInner ? `<!-- Gallery -->
      <div class="proj-gallery">
        ${galleryInner}
      </div>` : '';

  return `
    <section class="misc-project">
      <div class="proj-header">
        <h2>${project.title}</h2>
        ${subtitle}
        <div class="tags">
          ${renderTags(project.tags)}
        </div>
      </div>

      <div class="proj-meta">
        ${renderMeta('Year', project.year)}
        ${renderMeta('Role', project.role)}
        ${renderMeta('Client', project.client || null)}
      </div>

      ${heroBlock}

      ${textBlock}

      ${galleryBlock}
    </section>`;
}

function buildMiscPage() {
  const sections = miscProjects.map(buildMiscSection).join('\n\n    <hr class="misc-divider">\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MISC. PROJECTS — Mitchell Craft</title>
  <link rel="stylesheet" href="../style.css?v=${assetVersion}">
</head>
<body class="project-page">

  <!-- Desktop Navigation -->
  <nav class="nav-desktop">
    <ul>
      <li><a href="../index.html">Work</a></li>
      <li><a href="../instagram.html">Archive</a></li>
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
      <li><a href="../index.html">Work</a></li>
      <li><a href="../instagram.html">Archive</a></li>
      <li><a href="../about.html">About</a></li>
    </ul>
  </div>

  <main>

    <a href="../index.html" class="back-link">Work</a>

    <div class="proj-header">
      <h1>MISC. PROJECTS</h1>
      <p class="card-sub" style="margin-top:6px;color:#777;">A few smaller projects that didn't need a page of their own</p>
    </div>
    ${sections}

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <a href="mailto:mitchell.a.craft@gmail.com">mitchell.a.craft@gmail.com</a>
    <span class="footer-sep">·</span>
    <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a>
  </footer>

  <script src="../script.js?v=${assetVersion}"></script>
</body>
</html>
`;
}

// ─── index.html (grid) ─────────────────────────────────────────────────────────
function buildCard(project) {
  const sub = project.cardSub ? `\n              <p class="card-sub">${project.cardSub}</p>` : '';
  const zoom = project.cardZoom ? ` style="--card-zoom:${project.cardZoom}"` : '';
  return `
        <article class="card ${projects.indexOf(project) < 2 ? 'span-6 featured-card' : 'span-3'}" data-review-id="card-${project.slug}">
          <a href="projects/${project.slug}.html">
            <div class="card-img" style="background-color:#0d0d0d;">
              <img src="${project.card}" alt="${project.title}" ${projects.indexOf(project) === 0 ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"'}${zoom}>
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
  const miscCard = `
        <article class="card span-3">
          <a href="projects/misc.html">
            <div class="card-img" style="background-color:#0d0d0d;">
              <img src="images/ultraman.jpg" alt="Misc. Projects" loading="lazy">
            </div>
            <div class="card-info">
              <h2>MISC. PROJECTS</h2>
              <p class="card-sub">Ultraman Connection, 1000 Deaths, Pitstop</p>
              <div class="tags">
                <span>Unreal Engine</span>
              <span>Games</span>
              <span>Animation</span>
              </div>
            </div>
          </a>
        </article>`;

  const cards = projects.slice(0, 6).map(buildCard).join('\n');
  const moreCards = [...projects.slice(6).map(buildCard), miscCard].join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mitchell Craft — AI + 3D Production Pipelines</title>
  ${metadata("Mitchell Craft — AI + 3D Production Pipelines", "Creative technologist at Google on YouTube’s Effects team. AI-assisted production workflows, Blender, real-time graphics and commercial VFX. Based in NYC.", "")}
  <link rel="stylesheet" href="style.css?v=${assetVersion}">
</head>
<body>

  <!-- Desktop Navigation -->
  <nav class="nav-desktop">
    <ul>
      <li><a href="index.html" class="nav-active">Work</a></li>
      <li><a href="instagram.html">Archive</a></li>
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

    <!-- Site Header -->
    <header class="site-header home-hero" data-review-id="home-hero">
      <div class="header-name">
        <p class="site-kicker">MITCHELL CRAFT / CREATIVE TECHNOLOGIST / NYC</p>
        <h1>I build AI + 3D<br>production pipelines.</h1>
        <p class="home-intro">I’m a creative technologist at Google on YouTube’s Effects team. I combine Blender, real-time graphics, generative models and agentic coding to build visual tools and repeatable production workflows.</p>
      </div>
      <div class="header-contact">
        <a href="mailto:mitchell.a.craft@gmail.com">mitchell.a.craft@gmail.com</a>
        <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a>
      </div>
    </header>

    <!-- Portfolio Grid -->
    <section class="portfolio" aria-labelledby="selected-work-title" data-review-id="selected-work">
      <div class="section-heading"><h2 id="selected-work-title">Selected work</h2><span>Production systems, platforms &amp; visual craft</span></div>
      <div class="grid">
${cards}
      </div>
    </section>

    <section class="practice" data-review-id="current-practice" aria-labelledby="practice-title">
      <div class="section-heading"><h2 id="practice-title">Current practice</h2><span>AI, automation &amp; creative tools</span></div>
      <div class="practice-grid">
        <div class="practice-item" data-review-id="practice-agents"><h3>Agent workflows</h3><p>Blender MCP automation, Claude Code workflows with validation and failure handling, daily AI reports, and AR effects tracking.</p></div>
        <div class="practice-item" data-review-id="practice-models"><h3>Generative systems</h3><p>FLUX LoRA training on an RTX 3090, API-driven Seedance video, and co-founding Provenance: a multi-step model pipeline with a verification layer.</p></div>
        <div class="practice-item" data-review-id="practice-tools"><h3>Interactive tools</h3><p>A mobile-first 3D painting app in Three.js, alongside procedural Blender work and creative coding in p5.js and GLSL.</p></div>
      </div>
    </section>

    <section class="portfolio more-work" data-review-id="more-work" aria-labelledby="more-work-title">
      <div class="section-heading"><h2 id="more-work-title">More work</h2><span>Games, fashion, film &amp; virtual production</span></div>
      <div class="grid">${moreCards}</div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <a href="mailto:mitchell.a.craft@gmail.com">mitchell.a.craft@gmail.com</a>
    <span class="footer-sep">·</span>
    <a href="https://instagram.com/murchellcruft" target="_blank">@murchellcruft</a>
  </footer>

  <script src="script.js?v=${assetVersion}"></script>
  <script src="webgl-fx.js?v=${assetVersion}"></script>
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
  fs.writeFileSync(path.join(outDir, `${project.slug}.html`), html.replace(/[ \t]+$/gm, ''), 'utf8');
  const m = scanMedia(project.mediaDir);
  console.log(`✓  projects/${project.slug}.html  (${m.videos.length} videos, ${m.images.filter(f => !f.startsWith('bg-')).length} images)`);
});

fs.writeFileSync(path.join(outDir, 'misc.html'), buildMiscPage(), 'utf8');
console.log('✓  projects/misc.html');

fs.writeFileSync(path.join(__dirname, 'index.html'), buildWorkPage(), 'utf8');
console.log('✓  index.html');

// about.html and coming-soon.html are hand-maintained; keep their asset URLs
// on the same version stamp as the generated pages.
['about.html', 'coming-soon.html'].forEach(file => {
  const full = path.join(__dirname, file);
  if (!fs.existsSync(full)) return;
  const before = fs.readFileSync(full, 'utf8');
  const after = before.replace(
    /(href|src)="(style\.css|script\.js)(\?v=[^"]*)?"/g,
    (_, attr, asset) => `${attr}="${asset}?v=${assetVersion}"`
  );
  if (after !== before) {
    fs.writeFileSync(full, after, 'utf8');
    console.log(`\u2713  ${file} (asset version)`);
  }
});

if (warnings.length) {
  console.log('\n⚠ Warnings:');
  warnings.forEach(w => console.log('  ' + w));
}
console.log(`\nDone — ${projects.length} project pages generated.`);
