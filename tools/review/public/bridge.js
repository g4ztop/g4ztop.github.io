(() => {
  if (window.parent === window) return;
  let enabled = false, selected = null, hovered = null, comments = [];
  const page = location.pathname.replace(/^\/__preview/, '') || '/index.html';
  const send = data => parent.postMessage({ source: 'portfolio-preview', page, ...data }, location.origin);
  const style = document.createElement('style');
  style.textContent = '.review-hover-ring,.review-selected-ring{position:fixed;pointer-events:none;border:2px solid #b299ff;border-radius:4px;z-index:2147483645;background:#8d6cfa0b}.review-selected-ring{border-color:#bcffbb;background:#9affad09}.review-pin{position:fixed;z-index:2147483646;background:#bcffbb;color:#19321d;border:2px solid #172a1b;box-shadow:0 2px 10px #0005;border-radius:50%;height:28px;width:28px;min-height:28px;font:600 11px -apple-system,sans-serif;cursor:pointer;padding:0;display:grid;place-items:center;line-height:1}.review-pin:focus-visible{outline:3px solid #b299ff;outline-offset:3px}html.review-pick-mode *{cursor:crosshair!important}html.review-pick-mode iframe{pointer-events:none!important}';
  document.head.append(style);
  const hoverRing = document.createElement('div'), selectRing = document.createElement('div');
  hoverRing.className = 'review-hover-ring'; selectRing.className = 'review-selected-ring'; hoverRing.hidden = true; selectRing.hidden = true;
  document.body.append(hoverRing, selectRing);
  let pins = [];
  function selectorFor(element) {
    const parts = [];
    for (let node = element; node && node !== document.body; node = node.parentElement) {
      if (node.id) { parts.unshift('#' + CSS.escape(node.id)); break; }
      if (node.dataset.reviewId) { parts.unshift(`[data-review-id="${CSS.escape(node.dataset.reviewId)}"]`); break; }
      const siblings = [...node.parentElement.children].filter(s => s.tagName === node.tagName);
      parts.unshift(node.tagName.toLowerCase() + (siblings.length > 1 ? `:nth-of-type(${siblings.indexOf(node) + 1})` : ''));
    }
    return parts.join(' > ');
  }
  function candidate(target) {
    if (!(target instanceof Element) || target.closest('.review-pin')) return null;
    return target.closest('.card, .gallery-item, .proj-hero, .case-section, .practice-item, .cv-item') || target.closest('h1,h2,h3,p,nav,a,button,section,header,footer,main') || target;
  }
  function rectRing(ring, target) {
    if (!target?.isConnected) { ring.hidden = true; return; }
    const rect = target.getBoundingClientRect();
    ring.hidden = false; Object.assign(ring.style, { left: rect.left + 'px', top: rect.top + 'px', width: rect.width + 'px', height: rect.height + 'px' });
  }
  function draw() {
    rectRing(hoverRing, enabled ? hovered : null); rectRing(selectRing, selected);
    for (const { pin, target } of pins) {
      if (!target?.isConnected) { pin.hidden = true; continue; }
      const rect = target.getBoundingClientRect(); pin.hidden = rect.bottom < 0 || rect.top > innerHeight || !rect.width || !rect.height;
      pin.style.left = Math.max(2, Math.min(innerWidth - 30, rect.left + 8)) + 'px'; pin.style.top = Math.max(2, rect.top + 8) + 'px';
    }
  }
  function setMode(value) { enabled = !!value; document.documentElement.classList.toggle('review-pick-mode', enabled); if (!enabled) hovered = null; draw(); }
  function find(anchor) {
    if (!anchor?.selector) return null;
    try { return document.querySelector(anchor.selector); } catch { return null; }
  }
  function makePins() {
    pins.forEach(p => p.pin.remove()); pins = [];
    const counts = new Map();
    comments.forEach((comment, index) => {
      const target = find(comment.anchor); if (!target) return;
      const pin = document.createElement('button'); pin.className = 'review-pin'; pin.textContent = String(index + 1); pin.setAttribute('aria-label', `Review note ${index + 1}: ${comment.text.slice(0, 100)}`); pin.title = comment.text;
      const count = counts.get(target) || 0; counts.set(target, count + 1); pin.style.marginLeft = count * 30 + 'px';
      pin.onclick = event => { event.preventDefault(); event.stopPropagation(); send({ type: 'pin', id: comment.id }); };
      document.body.append(pin); pins.push({ pin, target });
    }); draw();
  }
  document.addEventListener('pointermove', event => { if (!enabled) return; hovered = candidate(event.target); draw(); }, true);
  document.addEventListener('click', event => {
    if (event.target.closest('.review-pin')) return;
    if (!enabled) return;
    const target = candidate(event.target); if (!target) return;
    event.preventDefault(); event.stopImmediatePropagation(); selected = target;
    const media = target.matches('img,video,iframe') ? target : target.querySelector('img,video,iframe');
    const quote = (target.innerText || media?.alt || target.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 2000);
    const heading = target.querySelector('h1,h2,h3');
    const label = (heading?.textContent || target.getAttribute('aria-label') || quote || media?.getAttribute('src')?.split('/').pop() || target.tagName.toLowerCase()).trim().slice(0, 140);
    send({ type: 'selected', anchor: { selector: selectorFor(target), quote, label, media: media?.getAttribute('src') || media?.getAttribute('data-src') || '', viewportWidth: innerWidth, scrollRatio: scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight) } }); setMode(false);
  }, true);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { setMode(false); send({ type: 'cancel' }); } });
  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== parent || event.data?.source !== 'portfolio-workshop') return;
    const data = event.data;
    if (data.type === 'mode') setMode(data.enabled);
    if (data.type === 'sync') { comments = data.comments || []; makePins(); setMode(data.enabled); }
    if (data.type === 'clear-selection') { selected = null; draw(); }
    if (data.type === 'jump') {
      selected = find(data.comment.anchor);
      if (selected) selected.scrollIntoView({ block: 'center', behavior: 'instant' });
      else { scrollTo({ top: (data.comment.anchor?.scrollRatio || 0) * (document.documentElement.scrollHeight - innerHeight), behavior: 'instant' }); if (data.comment.anchor) send({ type: 'anchor-missing' }); }
      draw();
    }
  });
  window.addEventListener('scroll', draw, { passive: true }); window.addEventListener('resize', draw);
  new ResizeObserver(draw).observe(document.body);
  // Preview links stay in the workshop. Public links keep their normal destination.
  document.addEventListener('click', event => {
    if (enabled || event.defaultPrevented) return;
    const link = event.target.closest('a[href]'); if (!link) return;
    const url = new URL(link.href, location.href);
    if (url.origin === location.origin && url.pathname.startsWith('/__preview/')) return;
    if (url.origin !== location.origin) { link.target = '_blank'; link.rel = 'noopener'; }
  });
  send({ type: 'ready', title: document.title });
})();
