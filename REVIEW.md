# Local portfolio workshop

From this directory, run `npm run review` and open http://127.0.0.1:4317/.
Node 22+ is sufficient; there are no dependencies to install. If the port is busy, use `REVIEW_PORT=4318 npm run review`.

- Browse the real local site, including links between project pages.
- Switch Desktop / Tablet / Phone to change the iframe's actual viewport width.
- Choose **Add a pin**, click a section, then type and save a note. Use **Whole page** for general feedback.
- Use **Project context** to answer the questions. Answers save as you type; look for “Saved locally”. Unsaved text is retained in the current browser tab if saving fails.
- Notes can be edited, resolved, reopened, or archived. Archived notes remain recoverable in the filter.
- Click a note's location to jump back to its section and original viewport width. If the section has changed, the tool falls back to its saved page position.
- **Export notes** downloads Markdown; `/api/export?format=json` exports structured data.
- When ready, tell Codex **“Use my review notes.”** The tool does not send notes to a model or automatically trigger edits.

## Local data and implementation

Feedback is in `.review/comments.json` (written on first save), with comments and question answers. The historical résumé reference is `.review/resume-2025.md`. `.review/` is ignored by Git. Review code, private outlines, and notes are excluded from Firebase Hosting; nothing here publishes changes.

The server binds to 127.0.0.1 only. `/__preview/` serves allowlisted portfolio assets and injects the annotation bridge in memory. No annotation script is added to production HTML. `/__review/` serves the workshop. Draft pages live under `tools/review/drafts/` and are available only through the local server.

`tools/review/brief.mjs` defines the page list and context questions. The 2025 résumé and current site disagree on INCworks dates; the question on About records that discrepancy without silently choosing a new timeline. Do not promote private draft claims or metrics to the public site without actual evidence.

## Site edits

`generate-projects.js` is the source for `index.html` and `projects/*.html`. Edit the generator, then run `npm run generate`. `about.html` is maintained by hand. Regeneration updates its asset version. Refresh the workshop preview after source edits.

Run `npm run test:review` for persistence, exports, file isolation and media-range checks. Browser QA should cover pin capture/save/jump, context autosave, navigation, mobile preview and private draft access.
