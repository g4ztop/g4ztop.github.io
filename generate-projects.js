const fs = require('fs');
const path = require('path');

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    slug: 'hometopia',
    title: 'HOMETOPIA',
    year: '2022–2024',
    role: 'Lead Technical Artist',
    client: 'Hometopia Inc.',
    tags: ['Game Development', 'Technical Art', 'Tools'],
    description: `Lead Technical Artist on Hometopia, a Sims-like house building game available on Steam. Responsibilities spanned technical art pipeline development, custom tooling, and procedural systems designed to support a growing team of artists. Work included shader authoring, LOD and performance optimization, and developing Blender and Houdini tools to accelerate asset production.`,
    images: ['hometopia', 'hometopia-2', 'hometopia-3', 'hometopia-4'],
  },
  {
    slug: 'miumiu',
    title: 'MIU MIU FALL/WINTER 2024',
    year: '2024',
    role: 'VFX Artist',
    client: 'Miu Miu',
    director: 'Cecile B Evans',
    tags: ['Fashion', 'VFX', '3D Animation'],
    description: `VFX and animation work for the Miu Miu Fall/Winter 2024 collection campaign. Created procedural static effects and large-scale bird murmuration simulations in collaboration with director Cecile B Evans. The project blended photorealistic CG environments with live-action footage to create a dreamlike visual language for the collection.`,
    images: ['miumiu', 'miumiu-2', 'miumiu-3', 'miumiu-4'],
  },
  {
    slug: 'moncler',
    title: 'MONCLER × SALEHE BEMBURY',
    year: '2023',
    role: 'Lead VFX Artist',
    client: 'Moncler',
    tags: ['Fashion Campaign', 'VFX', 'CG'],
    description: `CG forest backgrounds and environmental VFX for the Moncler × Salehe Bembury Summer 2023 campaign. Assets were deployed across commercials, digital advertising, and large-format billboards. The work involved fully procedural forest generation, photorealistic foliage rendering, and seamless integration with live-action plates.`,
    images: ['moncler', 'moncler-2', 'moncler-3', 'moncler-4'],
  },
  {
    slug: 'bmth',
    title: 'BRING ME THE HORIZON',
    subtitle: 'AmEN!',
    year: '2023',
    role: 'VFX Artist',
    director: 'Weston Allen',
    tags: ['Music Video', 'VFX', 'Character Animation'],
    description: `Character animation and perspective-defying CG sequences for Bring Me The Horizon's "AmEN!" music video, directed by Weston Allen. The project involved creating complex character rigs and fluid simulation effects that were seamlessly composited into the live-action footage.`,
    images: ['bmth', 'bmth-2', 'bmth-3', 'bmth-4'],
  },
  {
    slug: 'megan',
    title: 'MEGAN THEE STALLION',
    subtitle: 'Cobra',
    year: '2023',
    role: 'VFX Artist',
    studio: 'INCworks',
    tags: ['Music Video', 'VFX', '3D'],
    description: `VFX and 3D asset creation for Megan Thee Stallion's "Cobra" music video, produced at INCworks. Contributions included creature design and simulation, environmental effects, and the integration of CG elements with high-energy performance footage.`,
    images: ['megan', 'megan-2', 'megan-3', 'megan-4'],
  },
  {
    slug: 'elena',
    title: 'ELENA VELEZ',
    subtitle: 'YR003 — HOW\'S MY DRIVING?',
    year: '2023',
    role: 'VFX Artist',
    client: 'Elena Velez',
    tags: ['Fashion', 'AI', 'NYFW'],
    description: `AI-generated imagery composed and animated in 3D for Elena Velez's YR003 "HOW'S MY DRIVING?" runway show at New York Fashion Week 2023. The work explored the intersection of generative AI imagery and real-time 3D compositing to create an immersive backdrop for the collection.`,
    images: ['elena', 'elena-2', 'elena-3', 'elena-4'],
  },
  {
    slug: 'lakings',
    title: 'LA KINGS',
    year: '2023',
    role: 'Lead VFX Artist',
    client: 'LA Kings / AEG',
    tags: ['Sports', 'Virtual Production', 'Volumetric Capture'],
    description: `Volumetric capture cinematic animations and arena environments for the LA Kings at Crypto.com Arena. The project combined volumetric scanning of athletes with procedurally generated environments to create in-arena spectacle content viewed by tens of thousands of fans.`,
    images: ['lakings', 'lakings-2', 'lakings-3', 'lakings-4'],
  },
  {
    slug: 'ultraman',
    title: 'ULTRAMAN CONNECTION',
    year: '2023',
    role: 'Lead Unreal Artist',
    client: 'Ultraman Connection',
    tags: ['Virtual Production', 'Unreal Engine 5', 'Game Engine'],
    description: `Virtual production sets and environments built in Unreal Engine 5 for the Ultraman Connection project. As Lead Unreal Artist, responsibilities included set design, real-time lighting, and performance optimization for use across live-streamed virtual productions.`,
    images: ['ultraman', 'ultraman-2', 'ultraman-3', 'ultraman-4'],
  },
  {
    slug: '1000deaths',
    title: '1000 DEATHS',
    year: '2022',
    role: 'Character Artist',
    client: 'Pariah Interactive',
    tags: ['Game Development', 'Character Art', 'Shaders'],
    description: `Character creation, rigging, and custom shader effects for the video game 1000 Deaths, developed by Pariah Interactive. Work spanned concepting, high-poly sculpting, retopology, texturing, and implementation of stylized real-time shaders within the game engine.`,
    images: ['1000deaths', '1000deaths-2', '1000deaths-3', '1000deaths-4'],
  },
  {
    slug: 'wingedfreaks',
    title: 'WINGED FREAKS',
    subtitle: 'Adventureverse',
    year: '2022',
    role: '3D Artist',
    client: 'Elevate Pictures',
    tags: ['Television', 'Animation', 'Virtual Production'],
    description: `3D character and environment design combined with virtual production work for Winged Freaks: Adventureverse, produced by Elevate Pictures. The series utilized real-time rendering pipelines and LED volume technology to deliver a stylized animated look on a tight broadcast schedule.`,
    images: ['wingedfreaks', 'wingedfreaks-2', 'wingedfreaks-3', 'wingedfreaks-4'],
  },
  {
    slug: 'musicvideos',
    title: 'MUSIC VIDEOS',
    year: 'Various',
    role: 'VFX Artist / Animator',
    tags: ['Animation', 'VFX', 'Music'],
    description: `A collection of animation and VFX work across multiple music video productions. Projects ranged from full CG music videos to hybrid live-action/CG compositions, spanning a variety of genres, aesthetics, and production scales.`,
    images: ['musicvideos', 'musicvideos-2', 'musicvideos-3', 'musicvideos-4'],
  },
  {
    slug: 'procedural',
    title: 'PROCEDURAL WORKS',
    year: 'Various',
    role: 'Technical Artist',
    tags: ['Technical Tools', 'Blender', 'Procedural', 'Houdini'],
    description: `Custom tools and dynamic systems for procedural animation and generative art workflows. Includes a published Blender plugin for geometry-node-driven animation systems, Houdini procedural rigs, and various experimental real-time generative systems built in Unreal Engine.`,
    images: ['procedural', 'procedural-2', 'procedural-3', 'procedural-4'],
  },
  {
    slug: 'mfathesis',
    title: 'MFA THESIS',
    year: '2021',
    role: 'Artist / Researcher',
    client: 'Tulane University',
    tags: ['Academic', 'Generative Art', 'UE4', 'AI'],
    description: `MFA thesis project exploring generative artworks created through the intersection of Unreal Engine 4 and machine learning systems. The work interrogated notions of authorship and creative agency in AI-assisted art-making, presented as an interactive installation and accompanying written thesis at Tulane University's Digital Art program.`,
    images: ['mfa', 'mfa-2', 'mfa-3', 'mfa-4'],
  },
];

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

function renderGallery(images, slug) {
  // First image is hero; rest go in the gallery grid (wide + two halves)
  const [, ...rest] = images;
  return rest.map((img, i) => {
    const cls = i === 0 ? 'gallery-item wide' : 'gallery-item';
    return `
        <div class="${cls}">
          <img src="../images/${img}.jpg" alt="" loading="lazy">
        </div>`;
  }).join('');
}

function buildPage(project, index) {
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
      <li><a href="../index.html">Work</a></li>
      <li><a href="#">About</a></li>
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
      <li><a href="#">About</a></li>
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

    <!-- Hero Image -->
    <div class="proj-hero">
      <img src="../images/${project.images[0]}.jpg" alt="${project.title}" loading="lazy">
    </div>

    <!-- Description -->
    <p class="proj-description">${project.description}</p>

    <!-- Gallery -->
    <div class="proj-gallery">
      ${renderGallery(project.images, project.slug)}
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

// ─── Generate files ───────────────────────────────────────────────────────────
const outDir = path.join(__dirname, 'projects');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

projects.forEach((project, i) => {
  const html = buildPage(project, i);
  const filePath = path.join(outDir, `${project.slug}.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓  projects/${project.slug}.html`);
});

console.log(`\nDone — ${projects.length} project pages generated.`);
