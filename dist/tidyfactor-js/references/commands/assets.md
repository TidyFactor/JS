# Command: `assets` — Asset Organization & Cache-Busting

## Purpose
Consolidate and lightly optimize CSS/images (JS is already organized by
`compo`/`modules`), and make sure browsers don't serve stale files after
a deploy.

## When to run it
- The audit finds CSS/images scattered outside a shared asset root, no
  cache-busting on hand-written asset URLs (zero-build mode only — see
  below), or bulky/unoptimized images.
- The user says "clean up my CSS", "optimize assets", "add cache
  busting", or runs `assets`.
- Runs first (Phase 1), before `logic`/`store`/`compo`, so later commands
  build on an already-organized asset base.

## What it does — Zero-build mode
1. Consolidate CSS into `/assets/css/` and images into `/assets/img/` —
   no loose stylesheet left inside `src/components/`.
2. Add cache-busting via a single version query-string param
   (`style.css?v=<version>`) driven from one constant in `src/config.js`
   — not per-file hashes, no build step.
3. Deduplicate near-identical stylesheets if genuinely redundant; flag
   instead of silently merging if uncertain.
4. Basic image housekeeping: flag oversized/unoptimized images, suggest
   (don't auto-run) compression.

## What it does — Vite mode
1. Vite already content-hashes and cache-busts anything reached via a
   JS/CSS `import` or referenced in `index.html` — don't hand-roll
   versioning on top of that.
2. Audit instead for assets that *bypass* Vite's pipeline: hardcoded
   absolute paths to `public/` files that should be imports, or large
   binaries sitting in `src/` that belong in `public/` (static, unhashed,
   copied as-is) versus imported (hashed, optimized).
3. Consolidate stray CSS into per-component styles (co-located with the
   Web Component that uses them) or a shared `src/assets/css/base.css` —
   match whatever `compo`'s existing components already establish.
4. Flag oversized/unoptimized images for manual compression — Vite
   doesn't do this for you without an explicit image-optimization plugin,
   and this skill doesn't add build plugins by default (see Hard
   Constraints).

## Output convention
```
Zero-build: /assets/css/, /assets/img/, version constant in src/config.js
Vite:       /public/ for static passthrough files, imports for anything
            that should be hashed/bundled
```

## Checklist
- [ ] No CSS/image file left scattered outside its established location
- [ ] Zero-build: cache-busting version applied consistently, driven from
      one place
- [ ] Vite: no asset hand-rolling a cache-busting scheme Vite already
      provides via imports
- [ ] No duplicated stylesheet content (or duplication explicitly
      flagged, not silently merged)
- [ ] No bundler/build plugin introduced beyond what the chosen mode
      already includes
