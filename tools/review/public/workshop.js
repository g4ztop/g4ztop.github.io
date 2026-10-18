const $ = selector => document.querySelector(selector);
const frame = $('#preview');
let bootstrap, state, activePage = '/index.html', anchor = null, anchorPage = activePage, mode = false, width = 1440;
let editingId = null;
const timers = new Map();
const draftKey = 'mc-portfolio-review-draft';
const answerVersions = new Map();
const categories = { context: 'Context', correction: 'Correction', design: 'Design / wording', asset: 'Asset / link' };
const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
const error = message => { $('#error').textContent = message; $('#error').hidden = !message; };
const current = () => bootstrap.brief.pages.find(p => p.path === activePage);
const send = data => frame.contentWindow?.postMessage({ source: 'portfolio-workshop', ...data }, location.origin);
async function api(route, method, input) {
  const response = await fetch(route, { method, headers: { 'Content-Type': 'application/json', 'X-Review-Token': bootstrap.token }, body: JSON.stringify(input) });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'Could not save. Please retry.');
  error(''); return result;
}
function fitFrame() {
  const canvas = $('#canvas'), shell = $('#frame-shell');
  const styles = getComputedStyle(canvas);
  const available = canvas.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
  const height = canvas.clientHeight - parseFloat(styles.paddingBottom);
  const deviceHeight = width === 390 ? 844 : width === 768 ? 1024 : null;
  const scale = Math.min(1, Math.max(.1, available / width), deviceHeight ? height / deviceHeight : 1);
  shell.style.width = `${width * scale}px`; shell.style.height = `${Math.max(100, deviceHeight ? deviceHeight * scale : height)}px`;
  frame.style.width = `${width}px`; frame.style.height = `${deviceHeight || Math.max(100, height / scale)}px`;
  frame.style.transform = `scale(${scale})`;
  $('#viewport-label').textContent = `${width}px · ${Math.round(scale * 100)}%`;
}
function setMode(next) {
  mode = next; $('#mode').setAttribute('aria-pressed', String(mode));
  $('#mode').textContent = mode ? '⌖ Click a section' : '⌖ Add a pin';
  $('#preview-hint').textContent = mode ? 'Click a section, image, video or heading in the preview. Press Escape to cancel.' : 'Browse the site, or choose Add a pin and click anything you want to discuss.';
  send({ type: 'mode', enabled: mode });
}
function updateSelection() {
  const label = anchor ? anchor.label || 'Selected section' : 'Whole page';
  $('#selection-label').textContent = label + (anchorPage !== activePage ? ' · ' + (bootstrap.brief.pages.find(p => p.path === anchorPage)?.title || anchorPage) : '');
}
function saveDraft() {
  try { sessionStorage.setItem(draftKey, JSON.stringify({ text: $('#note-text').value, category: $('#category').value, anchor, page: anchorPage })); } catch {}
}
function syncFrame() { send({ type: 'sync', enabled: mode, comments: state.comments.filter(c => c.page === activePage && c.status === 'open') }); }
function setPage(page, navigate = true) {
  if (!bootstrap.brief.pages.some(p => p.path === page)) return;
  activePage = page; $('#page').value = page; $('#page-path').textContent = page;
  $('#clean-preview').href = '/__preview' + page;
  if (navigate) frame.src = '/__preview' + page;
  try { localStorage.setItem('mc-review-page', page); } catch {}
  if (!$('#note-text').value.trim()) { anchor = null; anchorPage = page; }
  updateSelection(); renderNotes(); renderQuestions(); updateCounts();
}
function updateCounts() {
  $('#note-count').textContent = state.comments.filter(c => c.status === 'open' && c.page === activePage).length;
  $('#answer-count').textContent = current().questions.filter(q => state.answers[q.id]?.text.trim()).length + '/' + current().questions.length;
}
function tab(name) {
  for (const value of ['notes', 'context']) { $(`#${value}-tab`).setAttribute('aria-selected', String(value === name)); $(`#${value}-panel`).hidden = value !== name; }
}
function jump(comment) {
  if (comment.anchor?.viewportWidth) {
    width = comment.anchor.viewportWidth;
    document.querySelectorAll('[data-width]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.width) === width)));
    fitFrame();
  }
  setMode(false);
  if (activePage === comment.page) send({ type: 'jump', comment });
  else { pendingJump = comment; setPage(comment.page); }
}
let pendingJump;
function renderNotes() {
  const list = $('#notes-list'); list.replaceChildren();
  const filter = $('#filter').value;
  const comments = state.comments.filter(c => filter === 'all' ? c.status === 'open' : filter === 'page' ? c.page === activePage && c.status === 'open' : c.status === filter);
  if (!comments.length) {
    const empty = el('div', 'empty'); empty.append(el('span', 'empty-icon', '⌖'), el('p', '', filter === 'page' ? 'A fresh page for your perspective.' : 'No notes in this view.'), el('small', '', 'Pin a section or add a note for the whole page.')); list.append(empty); return;
  }
  comments.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  for (const comment of comments) {
    const index = state.comments.filter(c => c.page === comment.page && c.status !== 'archived').findIndex(c => c.id === comment.id) + 1;
    const card = el('article', `note-card ${comment.status}`), meta = el('div', 'note-meta');
    meta.append(el('span', 'note-number', String(index).padStart(2, '0')), el('span', '', categories[comment.category] || 'Context'), el('span', '', comment.status));
    card.append(meta);
    const place = el('button', 'note-anchor', `${bootstrap.brief.pages.find(p => p.path === comment.page)?.title || comment.page} / ${comment.anchor?.label || 'Whole page'} ↗`);
    place.type = 'button'; place.title = comment.anchor?.quote || 'Jump to this page'; place.addEventListener('click', () => jump(comment)); card.append(place);
    if (editingId === comment.id) {
      const input = el('textarea', 'note-edit'); input.value = comment.text; input.setAttribute('aria-label', 'Edit note');
      const actions = el('div', 'note-edit-actions'), save = el('button', '', 'Save changes'), cancel = el('button', '', 'Cancel');
      save.onclick = async () => { save.disabled = true; try { Object.assign(comment, await api('/api/comments/' + comment.id, 'PATCH', { text: input.value })); editingId = null; renderNotes(); syncFrame(); } catch (e) { error(e.message); save.disabled = false; } };
      cancel.onclick = () => { editingId = null; renderNotes(); }; actions.append(save, cancel); card.append(input, actions);
    } else {
      card.append(el('p', '', comment.text));
      const actions = el('div', 'note-actions');
      const edit = el('button', '', 'Edit'); edit.onclick = () => { editingId = comment.id; renderNotes(); }; actions.append(edit);
      const status = el('button', '', comment.status === 'open' ? 'Resolve ✓' : 'Reopen');
      status.onclick = async () => { status.disabled = true; try { Object.assign(comment, await api('/api/comments/' + comment.id, 'PATCH', { status: comment.status === 'open' ? 'resolved' : 'open' })); renderNotes(); updateCounts(); syncFrame(); } catch (e) { error(e.message); status.disabled = false; } }; actions.append(status);
      if (comment.status !== 'archived') {
        const archive = el('button', '', 'Archive'); archive.onclick = async () => { archive.disabled = true; try { Object.assign(comment, await api('/api/comments/' + comment.id, 'PATCH', { status: 'archived' })); renderNotes(); updateCounts(); syncFrame(); } catch (e) { error(e.message); archive.disabled = false; } }; actions.append(archive);
      }
      card.append(actions);
    }
    list.append(card);
  }
}
async function persistAnswer(id, text, version) {
  const label = document.getElementById('status-' + id);
  if (label) label.textContent = 'Saving…';
  try {
    // Serialize saves for each question so a slower response cannot overwrite newer text.
    const previous = answerQueues.get(id) || Promise.resolve();
    const pending = previous.catch(() => {}).then(() => api('/api/answers', 'POST', { id, text }));
    answerQueues.set(id, pending);
    await pending;
    if (answerVersions.get(id) === version) {
      sessionStorage.removeItem('mc-answer-' + id);
      const currentLabel = document.getElementById('status-' + id); if (currentLabel) currentLabel.textContent = 'Saved locally ✓';
    }
  } catch (e) { const currentLabel = document.getElementById('status-' + id); if (currentLabel) currentLabel.textContent = 'Not saved — retry'; error(e.message + ' Your draft is retained in this tab.'); }
}
const answerQueues = new Map();
function renderQuestions() {
  const box = $('#questions'); box.replaceChildren();
  for (const question of current().questions) {
    const wrap = el('div', 'question'), label = el('label', '', question.label), hint = el('p', 'hint', question.hint), input = el('textarea'), status = el('span', 'answer-status');
    const id = 'answer-' + question.id; input.id = id; label.htmlFor = id; input.rows = 4; input.maxLength = 20000;
    const retained = sessionStorage.getItem('mc-answer-' + question.id);
    input.value = retained ?? state.answers[question.id]?.text ?? '';
    status.id = 'status-' + question.id; status.setAttribute('role', 'status'); status.textContent = retained !== null ? 'Draft retained — editing will retry save' : input.value ? 'Saved locally ✓' : 'Saves as you type';
    input.addEventListener('input', () => {
      const text = input.value; state.answers[question.id] = { text };
      const version = (answerVersions.get(question.id) || 0) + 1; answerVersions.set(question.id, version);
      sessionStorage.setItem('mc-answer-' + question.id, text); status.textContent = 'Saving…'; updateCounts();
      clearTimeout(timers.get(question.id)); timers.set(question.id, setTimeout(() => persistAnswer(question.id, text, version), 500));
    });
    input.addEventListener('blur', () => { if (sessionStorage.getItem('mc-answer-' + question.id) !== null) { clearTimeout(timers.get(question.id)); persistAnswer(question.id, input.value, answerVersions.get(question.id)); } });
    wrap.append(label, hint, input, status); box.append(wrap);
  }
}

$('#note-form').addEventListener('submit', async event => {
  event.preventDefault(); const button = $('#save-note'); button.disabled = true; $('#save-status').textContent = 'Saving…';
  const submittedText = $('#note-text').value;
  try {
    const comment = await api('/api/comments', 'POST', { page: anchorPage, anchor, text: submittedText, category: $('#category').value });
    state.comments.push(comment);
    if ($('#note-text').value === submittedText) { $('#note-text').value = ''; anchor = null; anchorPage = activePage; sessionStorage.removeItem(draftKey); }
    else saveDraft();
    updateSelection(); renderNotes(); updateCounts(); syncFrame(); setMode(false); $('#save-status').textContent = 'Saved locally ✓';
  } catch (e) { error(e.message); $('#save-status').textContent = 'Not saved — your text is still here.'; saveDraft(); }
  finally { button.disabled = false; }
});
$('#whole-page').onclick = () => { anchor = null; anchorPage = activePage; updateSelection(); saveDraft(); send({ type: 'clear-selection' }); };
$('#note-text').addEventListener('input', saveDraft); $('#category').addEventListener('change', saveDraft);
$('#mode').onclick = () => setMode(!mode); $('#refresh').onclick = () => frame.contentWindow.location.reload();
$('#filter').onchange = renderNotes;
$('#page').onchange = () => setPage($('#page').value);
$('#notes-tab').onclick = () => tab('notes'); $('#context-tab').onclick = () => tab('context');
document.querySelectorAll('[data-width]').forEach(button => button.onclick = () => { width = Number(button.dataset.width); document.querySelectorAll('[data-width]').forEach(b => b.setAttribute('aria-pressed', String(b === button))); fitFrame(); });
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.source !== 'portfolio-preview') return;
  const data = event.data;
  if (data.type === 'ready') { setPage(data.page, false); syncFrame(); if (pendingJump && pendingJump.page === data.page) { send({ type: 'jump', comment: pendingJump }); pendingJump = null; } }
  if (data.type === 'selected') { anchor = data.anchor; anchorPage = data.page; updateSelection(); tab('notes'); $('#note-text').focus(); saveDraft(); setMode(false); $('#save-status').textContent = 'Selection attached. Add the context you want me to know.'; }
  if (data.type === 'pin') { const comment = state.comments.find(c => c.id === data.id); if (comment) { tab('notes'); jump(comment); $('#filter').value = 'page'; renderNotes(); } }
  if (data.type === 'cancel') setMode(false);
  if (data.type === 'anchor-missing') $('#save-status').textContent = 'That section changed. Showing the saved page position; use the note’s context to find it.';
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMode(false); });
new ResizeObserver(fitFrame).observe($('#canvas'));
window.addEventListener('beforeunload', e => {
  const dirty = $('#note-text').value.trim() || [...document.querySelectorAll('.question textarea')].some(t => sessionStorage.getItem('mc-answer-' + t.id.slice(7)) !== null);
  if (dirty) { e.preventDefault(); e.returnValue = ''; }
});

try {
  const response = await fetch('/api/bootstrap'); if (!response.ok) throw new Error('Could not open the local review files.');
  bootstrap = await response.json(); state = bootstrap.state;
  const groups = new Map();
  for (const page of bootstrap.brief.pages) { if (!groups.has(page.group)) { const group = document.createElement('optgroup'); group.label = page.group; groups.set(page.group, group); $('#page').append(group); } const option = el('option', '', page.title); option.value = page.path; groups.get(page.group).append(option); }
  $('#resume-link').href = bootstrap.brief.resume.url;
  bootstrap.brief.changes.forEach(change => $('#changes').append(el('li', '', change)));
  let savedPage; try { savedPage = localStorage.getItem('mc-review-page'); } catch {}
  setPage(bootstrap.brief.pages.some(p => p.path === savedPage) ? savedPage : '/index.html');
  try { const draft = JSON.parse(sessionStorage.getItem(draftKey)); if (draft?.text) { $('#note-text').value = draft.text; $('#category').value = draft.category; anchor = draft.anchor; anchorPage = draft.page; updateSelection(); $('#save-status').textContent = 'Unsaved draft restored.'; } } catch {}
  fitFrame();
} catch (e) { error(e.message); }
