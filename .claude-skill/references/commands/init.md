# Command: `init` — Project Scaffold

## Purpose
Generate a working vanilla JS application boilerplate for a brand-new
project — the only command that runs *before* there's a repo to audit.
Both Step 0 forks (routing, build tooling) get wired in from day one so
later commands (`store`, `compo`, `route`) extend a working shape instead
of retrofitting one.

## When to run it
- Mode is Init (Step 0).
- User says "start a new vanilla JS app", "scaffold an SPA with no
  framework", "give me a JS boilerplate", or runs `init`.

## What it does
1. Confirm both Step 0 forks explicitly (routing strategy, build
   tooling) plus: project name, bilingual/RTL needed?, whether the app
   talks to a real backend now (base API URL) or starts against a stub.
2. Create the folder structure (see Output convention) — identical
   `src/` layout regardless of build tooling, so switching tooling later
   never means re-deriving the app's internal structure.
3. Zero-build: write `index.html` loading `src/app.js` via
   `<script type="module">`; no `package.json`, no install step — opens
   through any static file server immediately.
4. Vite: run the vanilla template (`npm create vite@latest . -- --template
   vanilla`), then replace its default demo content with this skill's
   structure. `vite.config.js` stays minimal — no framework plugins.
5. Write `src/router/router.js` implementing the chosen strategy (hash
   listener on `hashchange`, or History API with `pushState` +
   `popstate`), with one working example route.
6. Write `src/store/store.js`: a minimal pub/sub object (`getState`,
   `setState`, `subscribe`) — not a library, under ~40 lines, per
   `store.md`.
7. Write `src/config.js` (zero-build: a plain exported object with a
   dev/prod branch; Vite: reads `import.meta.env.VITE_*`, with a
   `.env`/`.env.production` pair) holding the API base URL and feature
   flags.
8. Write one real working example: a home view (`src/views/home.js`)
   composed from one real Web Component (`src/components/`) — not
   placeholder Lorem Ipsum, a working skeleton with real navigation
   wired through the router.
9. Add `robots.txt`, an empty `sitemap.xml` stub (real generation happens
   in `seo`), `.gitignore` (`node_modules`/`dist` for Vite mode), and a
   project `README.md` documenting both Step 0 choices and how to
   run/build locally.
10. Stop here — do not pre-build `compo`/`store`/`i18n` structure beyond
    the one working example; those commands grow the app as real screens
    arrive.

## Output convention
```
Zero-build mode:
/
├── index.html
├── src/
│   ├── app.js                 (entry — mounts router, initial render)
│   ├── config.js               (logic.md)
│   ├── router/router.js         (route.md)
│   ├── store/store.js            (store.md)
│   ├── components/                (compo.md — one working example)
│   ├── views/home.js               (pages.md — one working example)
│   ├── modules/                     (modules.md — empty, ready)
│   └── lang/                         (i18n.md, only if bilingual)
├── assets/{css,img}/
├── robots.txt
├── sitemap.xml
├── .gitignore
└── README.md

Vite mode:
/
├── index.html
├── vite.config.js
├── package.json
├── .env, .env.production
├── src/                        (identical layout to zero-build above)
├── public/{robots.txt,favicon...}
├── dist/                        (generated — deploy this folder)
├── .gitignore
└── README.md
```

## Checklist
- [ ] Both Step 0 forks confirmed and documented in README, not guessed
- [ ] App runs immediately: zero-build via any static file server, Vite
      via `npm run dev`
- [ ] Router has one working example route using the chosen strategy
- [ ] `store.js` stays a minimal pub/sub — no state-management library
- [ ] No UI framework dependency introduced (Vite mode: default template
      only, no framework plugin)
- [ ] No secret/API key hardcoded into `config.js` or any `.env*` that
      gets committed
- [ ] Bilingual/RTL scaffolded if requested (placeholder dictionary +
      `dir`/`lang` wiring; full `i18n.md` pattern applies as content grows)
