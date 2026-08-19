# Command: `logic` — Central Configuration

## Purpose
One source of truth for the API base URL, feature flags, and any other
environment-dependent constant — so no component/view/module ever
hardcodes an endpoint or a dev-vs-prod branch inline.

## When to run it
- The audit finds an API URL, feature flag, or environment check
  (`location.hostname === 'localhost'`) hardcoded in more than one file.
- The user says "centralize config", "stop hardcoding the API URL", or
  runs `logic`.
- Runs early in Phase 2 — `store` and `route` both read from this.

## What it does
1. Identify every hardcoded endpoint URL, flag, or environment branch
   scattered across components/views/modules.
2. **Zero-build**: consolidate into `src/config.js` — a plain exported
   object, with the dev/prod distinction resolved however the project
   already deploys (a build-time string replace during `deploy`, or a
   runtime check against `location.hostname` if there's no build step at
   all). Document whichever approach is used in the project README —
   don't leave it implicit.
3. **Vite**: consolidate into `import.meta.env.VITE_*` reads inside
   `src/config.js`, backed by `.env` (dev defaults) and `.env.production`
   (prod values) — Vite's native mechanism, don't reinvent one.
4. Replace every hardcoded reference across the codebase with an import
   from `src/config.js`.
5. Feature flags live in the same file as simple booleans/objects — no
   remote feature-flag service, no A/B testing framework; if the project
   genuinely needs that, flag it as out of scope rather than building a
   lightweight version of one.
6. Never put a secret (API key, token) here if the app is shipped
   client-side — anything sensitive belongs behind a real backend
   endpoint (see Hard Constraints in `SKILL.md`).

## Output convention
```
Zero-build: src/config.js                 (plain object, dev/prod branch)
Vite:       src/config.js, .env, .env.production
```

## Checklist
- [ ] No API URL, flag, or environment check hardcoded outside
      `src/config.js`
- [ ] Every consumer imports from `src/config.js` rather than
      re-deriving the value
- [ ] Vite mode: `.env.production` is gitignored if it contains anything
      environment-specific that shouldn't be committed
- [ ] No secret/API key present in any file that ships to the browser
- [ ] Dev-vs-prod resolution mechanism is documented in the project
      README, not left implicit
