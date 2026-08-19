# TidyFactor JS — Workflow Discipline

Applies underneath every command in `commands/`.

## 1. Audit
- Map the file tree. Count: inline `<script>` blocks with real logic
  still in HTML, global variables/functions not namespaced into a module,
  DOM-query-and-mutate code repeated across pages/views (candidates for
  `compo`), hardcoded API URLs/flags scattered across files (candidates
  for `logic`), fetch calls with no shared error handling or caching
  (candidates for `store`), any framework import already present (flag —
  see Hard Constraints, this track is framework-free).
- Note which routing strategy and build tooling the repo already shows
  (existing router code, `vite.config.js`) — confirm rather than re-ask.
- Report findings and the proposed target structure.
- **Stop for confirmation** before editing, unless told to proceed
  automatically.

## 2. Execute in batches
- One view/component/module at a time — highest duplication impact
  first, then whatever blocks the next command in sequence.
- Never one giant diff across the whole app in a single pass.
- Vite mode: after any file move/rename, confirm `npm run build` still
  resolves every import before moving to the next batch.

## 3. Verify
- Confirm no visual/functional regression — click through the affected
  routes/components manually where behavior changed.
- Report: files changed, remaining inline-script count, remaining
  un-namespaced global count, remaining duplicated DOM logic count.
- Zero-build mode: confirm the app still runs by opening it through a
  static file server (not `file://`, which breaks ES Module CORS rules).
- Vite mode: confirm both `npm run dev` and `npm run build` succeed.

## Mode-specific notes

**Init** — audit step is replaced by the Step 0 questions in `SKILL.md`;
everything else (execute in batches, verify) still applies once files
start being generated.

**Convert** — audit the *source* (static site, jQuery-era app, or
React/Vue app being converted) before proposing the target structure. If
converting from a UI framework, confirm with the user that dropping the
framework (not just changing tooling) is actually the goal — that's a
bigger decision than a normal Convert and deserves explicit confirmation.

**Improve** — audit is the primary deliverable if the user just wants a
report; only move to execute once they confirm which findings to act on.
