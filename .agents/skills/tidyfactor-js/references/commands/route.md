# Command: `route` — Client-Side Router

## Purpose
Map URLs to views entirely in the browser — no page reload — implementing
whichever strategy Step 0 locked in. This is a different concern from
`tidyfactor-php`'s `route` (a server front controller): here there is no
server round-trip per navigation at all.

## When to run it
- The audit finds ad hoc `if (location.hash === ...)` branching, multiple
  HTML files doing what should be one SPA with views, or navigation
  handled by full page reloads (`<a href="page2.html">`) in what's
  otherwise a single-page app.
- The user says "add client-side routing", "make this a single-page app",
  or runs `route`.
- Runs after `compo` (routes render components) and before `pages`
  (views are what routes actually mount).

## What it does — Hash-based strategy
1. `src/router/router.js` listens for the `hashchange` event (and fires
   once on initial load) and matches `location.hash` against a route
   table.
2. Route table: an array/object of `{ path: '/projects/:id', view:
   ProjectsView }` — support simple `:param` segments via a small regex
   match, no dependency for this.
3. On match, mount the matched view into a fixed root element (e.g.
   `<div id="app">`), tearing down the previous view's listeners first
   (call a `destroy()`/cleanup hook if the view defines one).
4. No host configuration needed — this works unmodified on any static
   host, which is exactly why it was chosen at Step 0.

## What it does — History API strategy
1. `src/router/router.js` listens for the `popstate` event and intercepts
   same-origin `<a>` clicks (`preventDefault()` + `history.pushState`)
   so navigation never triggers a full reload.
2. Same route table shape and matching approach as hash-based.
3. Same mount/teardown discipline as hash-based.
4. **Critical**: this strategy 404s on a hard refresh/deep link unless
   the host rewrites every path back to `index.html`. `route` itself
   doesn't configure the host — that's `deploy`'s job — but flag clearly
   here that `deploy` must run the matching rewrite-rule step before this
   is production-ready.

## What it does — both strategies
1. A single "not found" view for unmatched routes.
2. `logic`'s config decides whether a base path prefix is needed (e.g.
   Vite `base` for subpath deployments) — the router respects it, doesn't
   hardcode `/`.
3. Navigation between views updates `document.title` per route (feeds
   `seo` later) and, if `i18n` exists, doesn't lose the active language
   across a navigation.

## Output convention
```
src/router/router.js
```

## Checklist
- [ ] Matches the routing strategy locked in Step 0 — never a mix
- [ ] Every route table entry maps to a real view that exists
- [ ] Previous view's listeners/subscriptions are torn down on navigation
      away (no leaked `store.subscribe` calls)
- [ ] History API mode: `deploy`'s rewrite-rule requirement is flagged if
      not yet configured
- [ ] Unmatched routes render a real "not found" view, not a blank screen
- [ ] `document.title` updates per route
