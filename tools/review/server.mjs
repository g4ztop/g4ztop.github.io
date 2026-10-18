import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { reviewBrief } from './brief.mjs';

const toolRoot = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(toolRoot, '../..');
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.pdf': 'application/pdf' };
const emptyState = () => ({ version: 1, comments: [], answers: {} });
const fail = (status, message) => Object.assign(new Error(message), { status });
const bounded = (v, max = 1000) => typeof v === 'string' ? v.slice(0, max) : '';
const pagePath = value => {
  if (typeof value !== 'string' || !/^\/?(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.html$/.test(value)) throw fail(400, 'Choose a portfolio page.');
  return '/' + value.replace(/^\//, '');
};

export function createReviewServer({ root = defaultRoot, dataDir = path.join(root, '.review') } = {}) {
  const token = crypto.randomBytes(32).toString('hex');
  const stateFile = path.join(dataDir, 'comments.json');
  const readState = () => {
    if (!fs.existsSync(stateFile)) return emptyState();
    const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    if (state.version !== 1 || !Array.isArray(state.comments) || !state.answers || typeof state.answers !== 'object' || Array.isArray(state.answers)) throw new Error('Review data needs attention; existing notes have not been overwritten.');
    return state;
  };
  const writeState = state => {
    fs.mkdirSync(dataDir, { recursive: true, mode: 0o700 });
    const temp = stateFile + '.tmp';
    fs.writeFileSync(temp, JSON.stringify(state, null, 2) + '\n', { mode: 0o600 });
    fs.renameSync(temp, stateFile);
  };
  async function body(req) {
    let raw = '';
    for await (const chunk of req) {
      raw += chunk;
      if (Buffer.byteLength(raw) > 100_000) throw fail(413, 'This note is too large.');
    }
    try { return JSON.parse(raw); } catch { throw fail(400, 'The note could not be read.'); }
  }
  const json = (res, data, status = 200) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(data)); };

  async function serveFile(req, res, base, relative, inject = false) {
    if (relative.split('/').some(s => !s || s.startsWith('.') || s === 'node_modules')) throw fail(404, 'Not found');
    const absolute = path.resolve(base, relative);
    const resolvedBase = fs.realpathSync(base);
    let actual;
    try { actual = fs.realpathSync(absolute); } catch { throw fail(404, 'Not found'); }
    if (!actual.startsWith(resolvedBase + path.sep) || !fs.statSync(actual).isFile()) throw fail(404, 'Not found');
    const type = mime[path.extname(actual)];
    if (!type) throw fail(404, 'Not found');
    res.setHeader('Content-Type', type);
    if (inject && actual.endsWith('.html')) {
      let html = fs.readFileSync(actual, 'utf8');
      html = html.replace('</body>', '<script src="/__review/bridge.js"></script></body>');
      res.setHeader('Content-Length', Buffer.byteLength(html));
      res.writeHead(200); res.end(req.method === 'HEAD' ? undefined : html); return;
    }
    const size = fs.statSync(actual).size;
    res.setHeader('Accept-Ranges', 'bytes');
    let start = 0, end = size - 1, status = 200;
    if (req.headers.range) {
      const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (!range || (!range[1] && !range[2])) throw fail(416, 'Invalid range');
      if (!range[1]) start = Math.max(0, size - Number(range[2]));
      else { start = Number(range[1]); if (range[2]) end = Math.min(size - 1, Number(range[2])); }
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) { res.setHeader('Content-Range', `bytes */${size}`); throw fail(416, 'Invalid range'); }
      status = 206; res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`);
    }
    res.setHeader('Content-Length', Math.max(0, end - start + 1));
    res.writeHead(status);
    if (req.method === 'HEAD' || !size) { res.end(); return; }
    await pipeline(fs.createReadStream(actual, { start, end }), res);
  }

  const server = http.createServer(async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'same-origin');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    try {
      const port = server.address().port;
      const allowedHosts = [`127.0.0.1:${port}`, `localhost:${port}`];
      if (!allowedHosts.includes(req.headers.host)) throw fail(403, 'Local review only.');
      const origin = `http://${req.headers.host}`;
      if (req.headers.origin && req.headers.origin !== origin) throw fail(403, 'Use the local review tab.');
      const url = new URL(req.url, origin);
      const route = decodeURIComponent(url.pathname);
      const mutation = !['GET', 'HEAD'].includes(req.method);
      if (mutation && (req.headers['x-review-token'] !== token || !req.headers['content-type']?.startsWith('application/json'))) throw fail(403, 'Reload the review tool before saving.');
      if (route === '/api/bootstrap' && req.method === 'GET') { json(res, { token, brief: reviewBrief, state: readState() }); return; }
      if (route === '/api/state' && req.method === 'GET') { json(res, readState()); return; }
      if (route === '/api/comments' && req.method === 'POST') {
        const input = await body(req);
        const text = bounded(input.text, 20_000).trim();
        if (!text) throw fail(400, 'Write a note before saving.');
        const state = readState();
        const comment = { id: crypto.randomUUID(), page: pagePath(input.page), text, category: ['context', 'correction', 'design', 'asset'].includes(input.category) ? input.category : 'context', status: 'open', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), anchor: input.anchor && typeof input.anchor === 'object' ? { selector: bounded(input.anchor.selector), quote: bounded(input.anchor.quote, 2000), label: bounded(input.anchor.label, 240), media: bounded(input.anchor.media, 1000), viewportWidth: Math.max(0, Math.min(10000, Number(input.anchor.viewportWidth) || 0)), scrollRatio: Math.max(0, Math.min(1, Number(input.anchor.scrollRatio) || 0)) } : null };
        state.comments.push(comment); writeState(state); json(res, comment, 201); return;
      }
      if (route.startsWith('/api/comments/') && req.method === 'PATCH') {
        const input = await body(req), state = readState();
        const comment = state.comments.find(c => c.id === route.split('/').pop());
        if (!comment) throw fail(404, 'Note not found.');
        if (input.text !== undefined) { if (typeof input.text !== 'string' || !input.text.trim()) throw fail(400, 'A note cannot be empty.'); comment.text = bounded(input.text.trim(), 20_000); }
        if (input.status !== undefined) { if (!['open', 'resolved', 'archived'].includes(input.status)) throw fail(400, 'Invalid status.'); comment.status = input.status; }
        comment.updatedAt = new Date().toISOString(); writeState(state); json(res, comment); return;
      }
      if (route === '/api/answers' && req.method === 'POST') {
        const input = await body(req);
        const question = reviewBrief.pages.flatMap(p => p.questions).find(q => q.id === input.id);
        if (!question || typeof input.text !== 'string') throw fail(400, 'Question not found.');
        const state = readState(); state.answers[question.id] = { text: bounded(input.text, 20_000), updatedAt: new Date().toISOString() }; writeState(state); json(res, state.answers[question.id]); return;
      }
      if (route === '/api/export' && req.method === 'GET') {
        const state = readState();
        if (url.searchParams.get('format') === 'json') { res.setHeader('Content-Disposition', 'attachment; filename="portfolio-review.json"'); json(res, state); return; }
        const lines = ['# Portfolio review', '', 'Local feedback for the next editing pass. Historical résumé: 2025; dates and scope need confirmation.', ''];
        for (const page of reviewBrief.pages) {
          const comments = state.comments.filter(c => c.page === page.path && c.status !== 'archived');
          const answers = page.questions.filter(q => state.answers[q.id]?.text.trim());
          if (!comments.length && !answers.length) continue;
          lines.push(`## ${page.title}`, `Page: ${page.path}`, '');
          for (const c of comments) lines.push(`### ${c.category} · ${c.status} · ${c.id}`, c.anchor?.selector ? `Selector: ${c.anchor.selector}` : 'Whole page', c.anchor?.quote ? `Selected: ${c.anchor.quote}` : '', '', c.text, '');
          for (const q of answers) lines.push(`### ${q.label}`, state.answers[q.id].text, '');
        }
        res.writeHead(200, { 'Content-Type': 'text/markdown; charset=utf-8', 'Content-Disposition': 'attachment; filename="portfolio-review.md"' }); res.end(lines.join('\n')); return;
      }
      if (route.startsWith('/api/')) throw fail(404, 'Unknown review action.');
      if (!['GET', 'HEAD'].includes(req.method)) throw fail(405, 'Method not allowed');
      if (route === '/') { res.writeHead(302, { Location: '/__review/' }); res.end(); return; }
      if (route.startsWith('/__review/')) { await serveFile(req, res, path.join(toolRoot, 'public'), route.slice('/__review/'.length) || 'index.html'); return; }
      if (route.startsWith('/__preview/__drafts/')) { await serveFile(req, res, path.join(toolRoot, 'drafts'), route.slice('/__preview/__drafts/'.length), true); return; }
      if (route.startsWith('/__preview/')) {
        const relative = route.slice('/__preview/'.length) || 'index.html';
        if (!/^(?:[a-zA-Z0-9_-]+\.html|(?:style\.css|script\.js|webgl-fx\.js)|(?:projects|media|images)\/.+)$/.test(relative)) throw fail(404, 'Not found');
        await serveFile(req, res, root, relative, true); return;
      }
      throw fail(404, 'Not found');
    } catch (error) {
      if (res.headersSent) { res.destroy(); return; }
      json(res, { error: error.status ? error.message : 'Could not access the local review files. Your existing notes are unchanged.' }, error.status || 500);
      if (!error.status) console.error(error.message);
    }
  });
  return server;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.REVIEW_PORT || 4317);
  const server = createReviewServer();
  server.on('error', error => { console.error(error.code === 'EADDRINUSE' ? `Port ${port} is busy. Open http://127.0.0.1:${port}/ or use REVIEW_PORT=4318 npm run review.` : error.message); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`Portfolio workshop: http://127.0.0.1:${server.address().port}/\nNotes: ${path.join(defaultRoot, '.review/comments.json')}`));
}
