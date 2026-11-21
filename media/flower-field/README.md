# Real-time flower field

The homepage uses the original eight Blender flower specimens. Its 60-second procedural orbit repeats indefinitely; source-derived focus stutter repeats every 30 seconds. Time and specimen placement remain stable across quality changes.

`field.js` is the entry point. `bootstrap.js` keeps unsupported/reduced-motion visits on the poster, and imports the renderer only when needed. `engine.js` owns lifecycle, quality, shader warmup, rendering, context recovery, and cleanup.

## Quality

| Setting | High | Balanced | Low |
| --- | --- | --- | --- |
| Target | 60 FPS | 60 FPS | 30 FPS |
| Drawing buffer cap | 8.3 MP / DPR 1.5 | 1.6 MP / DPR 1.25 | 0.75 MP / DPR 1 |
| Flower material | Physical + clearcoat | Physical + clearcoat | Standard |
| Texture | Original 1024 JPEG | 1024 KTX2 | 512 KTX2 |
| Shadow map | 2048 | 1024 | 512 |
| Focus | Full-size, 16 taps | Full-size, 16 taps | Full-size, 16 taps |

Auto starts Balanced (Low for save-data), then uses sustained measured frame cost to reduce resolution before reducing detail. Upgrades require longer evidence and cooldown. A visible quality selector supports manual overrides, saved for the browser session. Targets are budgets, not performance guarantees.

Projected flower size selects one of four mesh levels; conservative wave depth preserves close silhouettes. Spatial batches have wave-aware bounds, independent view/shadow culling, and cheaper shadow proxies. Compatible shadow batches are merged independently of the beauty LOD groups to limit draw calls. A tiny per-instance GPU motion atlas computes the noise/deformation once and shares it across beauty and shadows, instead of reevaluating it at every mesh vertex.

HDR is probed with a real framebuffer. MSAA is chosen from sample counts supported by the exact color/depth formats. Devices without floating-point color use packed motion and a tone-mapped LDR path. Unsupported WebGL2, failed initialization, or unrecoverable context loss retain the poster and working homepage. Reduced motion starts with a still and an explicit Play button. Hidden pages stop requesting animation frames; restored pages preserve time. Transient context loss rebuilds resources without reloading the page; repeated loss reduces automatic quality.

The approved full-resolution lens blur is retained on every tier. The experimental half-resolution blur/composite was rejected for its fuzzy appearance. Pixel budgets still apply to the scene; focus cadence and depth weighting remain unchanged.

## Diagnostics

On localhost the temporary HUD shows FPS, frame time, visible scene triangles, all-pass triangles/calls, flower count, drawing-buffer size and quality. Expand Timing details for CPU, GPU, per-pass costs, p95, readiness and estimated asset memory. GPU timings are asynchronous and display `n/a` where unsupported. Asset memory excludes framebuffer/driver overhead. S toggles the HUD; `?stats=0` hides it and `?stats=1` enables it on a hosted site.

Build and verification instructions, fixture URLs, and the physical-device acceptance matrix are in [the development guide](../../tools/flower-field/README.md). Optimized mesh/texture payloads (excluding runtime/vendor code): High ~3.68 MB, Balanced ~2.77 MB, Low ~1.34 MB, compared with 5.11 MB of original mesh/textures; environment is included in new totals. JPEG compatibility fallback increases the cheaper tiers' downloads.

Source video and flower artwork © Mitchell Craft. Three.js and meshoptimizer are MIT licensed. The Basis transcoder uses Apache 2.0. Bundled licenses accompany the vendor files.

## Temporary scene editor

On localhost, **Scene controls** opens a temporary editor with 224 live settings. The hosted homepage temporarily offers the editor after the entrance; `?controls=1` opens it immediately. `?controls=0` suppresses it, including stored editor overrides. QA fixtures suppress the editor by default to keep comparisons reproducible.

The editor includes paired sliders/numeric fields for render budgets, all mesh levels, field distribution and specimen weights, terrain motion, camera, full-resolution focus and stutter, material roughness/clearcoat, shadows, particles, and each light. Colors, visibility, and categorical settings use appropriate controls. Scene changes are stored in sessionStorage for that browser session. Reset all restores defaults. Copy settings JSON / Apply JSON support reusable configurations; no external service receives the settings. World/layout changes are debounced, and geometry resources are replaced transactionally.

Four shadow-free point lights drift gently by up to 12% of their base intensity over one minute, with different phases. They repeat with the field's 60-second motion. The pale-blue **RectAreaLight** faces upward and defaults to the full 90 × 39 field footprint. Its Match field footprint toggle follows field width and depth; editing Width or Length unlinks it. The original key, pool, rim, reflections, and ambient light remain editable independently.

The latest mesh build locks the flower-head vertices and their original attributes for LOD 0/1, simplifying lower stems first. It verifies that protected head triangles survive. Distant levels use fewer faces; the smallest representation omits concealed stem bottoms. Across eight specimens, triangle totals changed from 32,761 / 8,835 / 3,769 / 1,476 to **26,190 / 6,510 / 2,801 / 849**. Original source assets remain untouched.

The lens retains the approved full-size 16-tap disk by default. Its fixed offsets are precomputed and foreground rejection compares raw projected depth, avoiding repeated per-sample depth inversion. Depth precision is restored to 24 bits, and grainy quality cross-fades are removed. These address potential sources of shimmer; intentional focus stutter and the new slow light drift remain independently adjustable. Additional live lights carry a shading cost, so mesh savings do not translate directly to a guaranteed FPS gain.

## Published startup preset

`defaults.js` records the 188 values approved on October 25, 2026. The engine applies these bindings before it creates the field, prepares materials, or renders the first frame. The temporary editor's **Reset all** uses the same preset. Automatic quality remains enabled; stats stay hidden unless requested with `?stats=1`. The temporary editor is collapsed on the hosted page; `?controls=1` opens it.

The October 25 release was cloned from the existing live Firebase Hosting version and patched only with `index.html`, `coming-soon.html`, and `media/flower-field/` runtime files. Other hosted paths were checked against their original content hashes before release. Local release records are in `.review/flowers/`.

## Pointer and touch interaction

Mouse movement draws nearby flowers toward the projected pointer position with an 8-unit falloff and eased, bounded rotation (maximum about 29°). Touch/pen requires contact: drag across the field to guide it; lift/cancel to let the flowers settle back. Links and controls keep their normal behavior. The fixed canvas owns its touch gesture; no device orientation permissions are needed. Reduced-motion visitors keep the existing static poster until they explicitly play.

Facing rotates positions, normals, and shadow geometry together in the existing instanced vertex shaders; no meshes or per-flower CPU updates are added. The idle uniform bypasses the rotation calculations. The editor exposes enable, reach, and turn strength. The original 188 approved settings are unchanged; three interaction defaults are added.

## Homepage entrance

`arrival.js` coordinates the homepage-only loading overlay with renderer readiness. A small pastel petal spinner runs on black while assets and shaders prepare (minimum 650 ms). The field fades in for 1.2 seconds; after 1.3 seconds of scene-only time, the centered captions play in order: “You've made it”, “But it's under construction”, “I'm sorry”. Each fades in and out before the homepage UI fades in. Page links remain inert and renderer controls stay hidden until the entrance ends. Skip intro becomes available once the scene is revealed.

Space Grotesk is self-hosted as a 133 KiB variable font with its SIL Open Font License in `fonts/`. The font also styles the homepage UI. Reduced-motion visitors get a static flower poster, a stationary loader and unanimated caption changes. GPU failure uses the poster; a 20-second startup deadline prevents an endless loader. With JavaScript disabled, the poster and page remain available. QA/benchmark pages omit the overlay and continue normally.

## Temporary intro art direction

**Scene controls** is temporarily available on the hosted homepage after the entrance (collapsed by default). `?controls=1` opens it immediately and keeps the editor accessible during replay; `?controls=0` hides it. The existing scene controls remain below the new intro groups.

Intro groups expose ten typefaces (Space Grotesk, Syne, Unbounded, Outfit, Manrope, Sora, Archivo Black, DM Serif Display, Space Mono, Georgia), font weight, desktop/mobile size, tracking, line height, maximum width, alignment, color, case, offsets, all three captions and hold times, text fades, scene/UI fades, scene-only pause, message gaps, loader minimum, spinner size/speed, entrance blur/travel/scale, and easing. Self-hosted extra font files are fetched by the browser only when chosen; individual OFL licenses are bundled.

**Live text preview** holds a selected caption on screen and updates its styling immediately. **Replay entrance** replays the whole entrance using current values; repeated replay cancels older sequences safely. **Show homepage** exits preview. Settings join the existing session storage and JSON import/export. Reset all restores original intro defaults along with the approved scene preset. Editing changes only that browser session until a new default preset is explicitly published.

## Latest approved defaults

The full 224-setting export is now centralized in `defaults.js`, including the intro defaults consumed by `intro-settings.js`. The chosen intro uses DM Serif Display, 700 weight, 15vw desktop size, lowercase first/second captions, “I'm sorry.”, 2-second text entrances, 800ms exits, 10px blur and 0.95 scale. The scene uses exposure 0.65, reflections 0.29, fog density 0.039 and background #36003d. Reset all restores this full preset. The chosen intro face is preloaded in both homepage HTML files. The verified export and release records are under `.review/flowers/approved-dm-serif/`.

The subsequent approved 224-setting export switches the default to High, spaces flowers at 0.65 across width 102, varies scale 0.5–1.5 with tilt 0.5, uses LOD multiplier 0.5, stronger lean, an eight-sample lens, heavier blur/vignette, fully rough petals/stems, and disables shadows. Intro typography remains DM Serif Display. The complete verified export and scoped release record are under `.review/flowers/approved-high-preset/`. Live UI export comparison: all 224 values match; rendered quality reports High.

## Clean homepage mode

The homepage is currently marked `data-field-ui="off" data-quality-lock="high"`. It always initializes High regardless of saved quality or URL overrides, suppresses runtime HUD/editor creation, and omits the pause button from the HTML. Repeated GPU recovery also preserves High. Reduced-motion visitors retain the still-image fallback. QA fixtures keep their configurable controls because they do not use these homepage flags. The approved 224-value preset is unchanged.
