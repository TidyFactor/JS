---
name: tidyfactor-js
description: TidyFactor Vanilla JS track — real client-side applications (state, client-side routing, data fetching) built with framework-free JavaScript, no React/Vue/Alpine. Trigger on commands "init", "assets", "logic", "store", "compo", "route", "pages", "modules", "i18n", "seo", "deploy" (SPA scaffolding, asset hygiene, central config, state/data layer, Web Components, client routing, view assembly, utility modules, translation/RTL, SPA SEO, host deploy), or requests like "start a new vanilla JS app", "scaffold an SPA with no framework", "convert this to vanilla JS", "add client-side routing", "add state management without a framework", "audit this JS app", "clean up this SPA". Covers three modes — Init, Convert, Improve — and two independent, always-asked architectural forks, routing strategy (hash vs. History API) and build tooling (zero-build ES Modules vs. Vite).
---

# TidyFactor Vanilla JS (Framework-Free Client Applications)

Part of the TidyFactor skill library (see `references/tidyfactor-vision.md`
for the shared philosophy). This skill covers the **Vanilla JS track**:
real client-side applications — state, client-side routing, data fetching,
Web Components — with no UI framework (no React, Vue, Alpine, Lit). It's
the step above `tidyfactor-html`'s `modules.md` (progressive-enhancement
IIFEs sprinkled on static pages): this skill is for when the project *is*
an application, not a content site with some interactivity. Sibling
tracks (`tidyfactor-html`, `tidyfactor-php`, `tidyfactor-php-micro`,
`tidyfactor-js-micro`, `tidyfactor-htmx`) live in their own skills — see
"Related skills" below for when to defer to them instead.

## Step 0 — Identify the mode and the two architectural forks (always ask)

If not obvious from the request or the existing repo, ask once, briefly:

> "What are we doing?
> 1. **Init** — start a brand-new vanilla JS application from scratch
> 2. **Convert** — bring an existing static site, jQuery-era codebase, or
>    a React/Vue app onto framework-free vanilla JS
> 3. **Improve** — audit and upgrade a project already on this track"

Then — **always ask both of these explicitly, never assume a default.**
An existing repo may already show the answer (an existing `vite.config.js`,
or `#/` routes in the address bar); if so, confirm rather than re-asking.

1. **Routing strategy**
   - **Hash-based** (`#/route`) — works on any static host immediately,
     zero server/host configuration.
   - **History API** (clean URLs) — needs a host rewrite rule
     (`.htaccess`, `_redirects`, `vercel.json`) so deep links don't 404;
     pairs well with a real backend like `tidyfactor-php`.
2. **Build tooling**
   - **Zero-build** — native ES Modules only, `<script type="module">`,
     relative imports, no npm build step, opens directly off any static
     file server.
   - **Vite** — `npm create vite@latest` (vanilla template), dev server +
     `npm run build` → `dist/`. Vite is dev/build *tooling* only — it
     never becomes a UI framework dependency; output is still plain DOM
     APIs and Web Components, nothing React/Vue-shaped.

Both forks are independent — a project can be any of the four
combinations. Don't guess silently; if the user hasn't said and the repo
doesn't already show it, ask before running `init` or any structural
command.

## Command Index

| Command | Purpose | Reference | Phase |
|---|---|---|---|
| `init` | Scaffold — new app, chosen routing + build tooling, base files | `references/commands/init.md` | — |
| `assets` | Asset Organization & Cache-Busting | `references/commands/assets.md` | 1 |
| `logic` | Central Configuration — API base URL, feature flags, environment | `references/commands/logic.md` | 2 |
| `store` | State & Data Layer — pub/sub store + fetch wrapper, no Redux | `references/commands/store.md` | 2 |
| `compo` | Modular Components — native Web Components | `references/commands/compo.md` | 2 |
| `route` | Client-Side Router — hash or History API, per Step 0 | `references/commands/route.md` | 2 |
| `pages` | View Assembly — one view per route, composed from components + store | `references/commands/pages.md` | 2 |
| `modules` | Utility Modules — logic not tied to any one component | `references/commands/modules.md` | 2 |
| `i18n` | Translation & RTL/LTR Localization | `references/commands/i18n.md` | 3 |
| `seo` | SPA SEO — per-route meta, sitemap, prerender guidance | `references/commands/seo.md` | 4 |
| `deploy` | Host Launch — build/upload steps, routing rewrite rule, checklist | `references/commands/deploy.md` | 4 |

New commands follow `references/commands/_template.md`.

## Command Sequencing & Phases

`init` runs standalone, ahead of everything else — see Running a full mode
below. For Convert/Improve, the four-phase order is not optional:

1. **Phase 1 — Foundation.** `assets` — a clean, versioned asset base
   before anything else is restructured on top of it.
2. **Phase 2 — Structure & Data.** `logic` (central config) → `store`
   (state/data layer) → `compo` (components consume `store`) → `route`
   (wires URLs to what `compo`/`pages` render) → `pages` (assembles
   components + store per route) → `modules` (remaining non-component
   logic). This order matters: `compo` needs `store` to exist before
   components can be wired to real data instead of stubs; `pages` needs
   both `compo` and `route` in place before views can be assembled.
3. **Phase 3 — Scale.** `i18n` — only after `compo`/`pages` are stable,
   so translation work isn't scattered across markup that's about to move.
4. **Phase 4 — Launch.** `seo` then `deploy` — metadata needs final route
   structure to be accurate; `deploy` is always last.

Never run two commands "at the same time" — each finishes, gets verified,
and gets reported before the next starts. If the repo isn't ready for a
requested command (e.g. `route` before `compo` exists), say so and
suggest the prerequisite instead of forcing it through.

## Running a single command

1. Confirm mode and both Step 0 forks — a command's output shape depends
   on all three.
2. Read the matching reference file in full before acting.
3. Do a scoped audit for just that command's concern.
4. Execute in small batches (one view/component/module at a time).
5. Report using that command's checklist.

## Running a full mode end-to-end

- **Init**: run `init` alone — it scaffolds a working app ahead of the
  phase order (routing + build tooling already wired), then leaves the
  project ready for `store`/`compo`/`pages` as real screens are added.
- **Convert / Improve**: follow the Phase 1→4 order above in full.

Within each command, still follow the underlying audit → execute → verify
discipline in `references/workflow.md`.

## Hard constraints (apply to every command)

- Zero functionality/visual regressions — flag anything risky instead of
  guessing.
- Never introduce a UI framework (React, Vue, Alpine, Lit, Svelte) — that
  request belongs on `tidyfactor-js-micro` or a dedicated track, not here.
  Say so and hand off rather than quietly pulling one in as a dependency.
- Vite, if chosen, stays build/dev tooling only — no framework plugin
  (`@vitejs/plugin-react`, etc.) gets added under this skill.
- Never hardcode secrets/API keys into `logic`'s config or any bundled
  file — client-side JS is always publicly readable; anything sensitive
  belongs behind a real backend (`tidyfactor-php`'s `api`), flagged if
  the project doesn't have one.
- Preserve bilingual/RTL support (`dir="rtl"`, language switching) if
  present; match the project's existing naming/CSS convention instead of
  inventing a new one.
- Don't mix routing strategies or build-tooling choices within one
  project — both are locked in Step 0 and apply consistently everywhere.
- `store` never becomes a full state-management library reimplementation
  (no time-travel debugging, no middleware pipeline) — a minimal
  pub/sub/observable is the ceiling; if the project genuinely needs more,
  say so rather than growing one silently.

## Two operating modes (execution style)

- **Mode A — do it directly.** Files are uploaded or accessible via
  `view`/`bash_tool`/`str_replace`/`create_file`. Run Step 0, then execute
  directly. Vite mode: run `npm install`/`npm run build` to verify after
  dependency or config changes. For a full-mode workflow on a git repo,
  offer one commit per finished, reported command so a mistake several
  commands later doesn't force reverting everything before it.
- **Mode B — generate a handoff prompt.** The user wants a copy-paste
  prompt for an external agent (Codex CLI, Claude Code, Cursor) instead.
  Still run Step 0 first so the prompt is scoped correctly. Build it from
  the matching `references/commands/<name>.md` file(s), injecting mode,
  both Step 0 forks, and (for Convert/Improve) the real file tree and
  hotspots found in a quick audit.

## Related skills

- Static content site, no real app state needed → `tidyfactor-html`.
- Needs a UI reactivity framework (Alpine/Lit/VanJS) instead of raw Web
  Components → `tidyfactor-js-micro` (opinionated starter, planned).
- Needs a real server backend (DB, auth, API) → `tidyfactor-php` (vanilla)
  or `tidyfactor-php-micro` (opinionated Flight+Medoo+Plates starter) —
  this skill's `store` is designed to fetch from that backend's `api`.
- htmx-driven server-rendered interactivity instead of a client SPA →
  `tidyfactor-htmx` (planned).
- General multi-stack refactor not scoped to a single track →
  `clean-code-refactor`.
