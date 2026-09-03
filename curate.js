// ─── Temporary archive curation tool ─────────────────────────────────────────
//
// Add ?curate=1 to instagram.html to turn it on. Click a tile to cycle it
// through keep → remove → unmarked; marks live in this browser's localStorage.
// Export writes instagram-curation.json, which build-instagram.js reads to drop
// the removed items (IG_KEEP_ONLY=1 also drops anything left unmarked).
//
// To retire this tool: delete curate.js and its <script> tag in
// build-instagram.js. Nothing else depends on it.

(() => {
  const params = new URLSearchParams(location.search);
  const STORE = 'ig-curation-v1';
  if (params.get('curate') !== '1') return;

  const grid = document.querySelector('.ig-grid');
  if (!grid) return;

  const tiles = Array.from(grid.querySelectorAll('.ig-item img[data-base]'));
  if (!tiles.length) return;

  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(STORE)) || {};
    } catch {
      return {};
    }
  };

  let marks = load();
  const save = () => {
    try {
      localStorage.setItem(STORE, JSON.stringify(marks));
    } catch (err) {
      status.textContent = 'Could not save — storage blocked';
    }
  };

  document.body.classList.add('curating');

  const style = document.createElement('style');
  style.textContent = `
    .curating .ig-item img { cursor: pointer; }
    .curating .ig-item { outline-offset: -3px; }
    .curating .ig-item.keep   { outline: 3px solid #35c26a; }
    .curating .ig-item.remove { outline: 3px solid #d9483f; }
    .curating .ig-item.remove img { opacity: 0.22; }
    .curating .ig-item.hidden img { visibility: hidden; }

    .curate-badge {
      position: absolute; top: 8px; left: 8px; z-index: 3;
      width: 22px; height: 22px; border-radius: 50%;
      display: none; align-items: center; justify-content: center;
      font-size: 13px; line-height: 1; color: #fff;
    }
    .ig-item.keep   .curate-badge { display: flex; background: #35c26a; }
    .ig-item.remove .curate-badge { display: flex; background: #d9483f; }

    .curate-zoom {
      position: absolute; bottom: 8px; left: 8px; z-index: 3;
      width: 26px; height: 26px; padding: 0;
      border: 0; border-radius: 4px;
      background: rgba(10,10,10,0.6); color: #eee;
      font: inherit; font-size: 13px; line-height: 1;
      cursor: zoom-in; opacity: 0; transition: opacity 0.15s;
    }
    .ig-item:hover .curate-zoom { opacity: 1; }

    .curate-bar {
      position: fixed; left: 0; right: 0; bottom: 0; z-index: 300;
      display: flex; flex-wrap: wrap; align-items: center; gap: 14px;
      padding: 12px 20px;
      background: rgba(12,12,12,0.94);
      border-top: 1px solid #262626;
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      font-size: 12px; letter-spacing: 0.04em; color: #999;
    }
    .curate-bar strong { color: #fff; font-weight: 400; }
    .curate-bar button {
      padding: 6px 12px; border: 1px solid #333; border-radius: 4px;
      background: none; color: #bbb; font: inherit; font-size: 12px;
      cursor: pointer; transition: color 0.15s, border-color 0.15s;
    }
    .curate-bar button:hover { color: #fff; border-color: #666; }
    .curate-bar .spacer { flex: 1; }
    .curate-bar label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
    .curating main { padding-bottom: 90px; }
  `;
  document.head.appendChild(style);

  const bar = document.createElement('div');
  bar.className = 'curate-bar';
  bar.innerHTML = `
    <span>Curating — click a tile: keep → remove → clear</span>
    <span class="spacer"></span>
    <span id="curate-counts"></span>
    <label><input type="checkbox" id="curate-hide"> Hide removed</label>
    <button type="button" id="curate-export">Export JSON</button>
    <button type="button" id="curate-copy">Copy keep list</button>
    <button type="button" id="curate-clear">Clear marks</button>
    <span id="curate-status"></span>`;
  document.body.appendChild(bar);

  const counts = bar.querySelector('#curate-counts');
  const status = bar.querySelector('#curate-status');
  const hideBox = bar.querySelector('#curate-hide');

  const listOf = state => tiles
    .map(t => t.dataset.base)
    .filter(base => marks[base] === state);

  const render = () => {
    tiles.forEach(img => {
      const item = img.closest('.ig-item');
      const state = marks[img.dataset.base];
      item.classList.toggle('keep', state === 'keep');
      item.classList.toggle('remove', state === 'remove');
      item.classList.toggle('hidden', state === 'remove' && hideBox.checked);
      const badge = item.querySelector('.curate-badge');
      if (badge) badge.textContent = state === 'keep' ? '✓' : '✕';
    });
    const kept = listOf('keep').length;
    const removed = listOf('remove').length;
    counts.innerHTML =
      `<strong>${kept}</strong> keep · <strong>${removed}</strong> remove · ` +
      `<strong>${tiles.length - kept - removed}</strong> unmarked`;
  };

  const NEXT = { undefined: 'keep', keep: 'remove', remove: undefined };

  // Set while the zoom button replays a click, so the mark handler stands aside
  // and the lightbox's own listener on the image gets to run.
  let passThrough = false;

  tiles.forEach(img => {
    const item = img.closest('.ig-item');
    item.insertAdjacentHTML('beforeend', '<span class="curate-badge"></span>');

    // The lightbox still needs a way in, since click now marks
    const zoom = document.createElement('button');
    zoom.className = 'curate-zoom';
    zoom.type = 'button';
    zoom.title = 'Open full size';
    zoom.innerHTML = '&#10530;';
    zoom.addEventListener('click', e => {
      e.stopPropagation();
      passThrough = true;
      img.dispatchEvent(new MouseEvent('click', { bubbles: false }));
      passThrough = false;
    });
    item.appendChild(zoom);

    img.addEventListener('click', e => {
      // Capture phase on the image itself runs before the lightbox's own
      // listener, so stopping here keeps a marking click from opening it.
      if (passThrough) return;
      e.stopImmediatePropagation();
      const base = img.dataset.base;
      const next = NEXT[marks[base]];
      if (next) marks[base] = next;
      else delete marks[base];
      save();
      render();
    }, true);
  });

  hideBox.addEventListener('change', render);

  bar.querySelector('#curate-export').addEventListener('click', () => {
    const payload = {
      generated: new Date().toISOString(),
      keep: listOf('keep'),
      remove: listOf('remove'),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'instagram-curation.json';
    a.click();
    URL.revokeObjectURL(a.href);
    status.textContent = 'Saved to Downloads';
    setTimeout(() => { status.textContent = ''; }, 3000);
  });

  bar.querySelector('#curate-copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(listOf('keep').join('\n'));
      status.textContent = 'Copied';
    } catch {
      status.textContent = 'Clipboard blocked — use Export';
    }
    setTimeout(() => { status.textContent = ''; }, 3000);
  });

  bar.querySelector('#curate-clear').addEventListener('click', () => {
    if (!confirm('Clear every mark?')) return;
    marks = {};
    save();
    render();
  });

  render();
})();
