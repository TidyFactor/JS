# Command: `pages` — View Assembly

## Purpose
One view per route — a thin composition layer that assembles
`compo`'s components and reads from `store`, so route handlers in
`route.js` stay a lookup table instead of accumulating rendering logic.

## When to run it
- The audit finds rendering/composition logic living inside the router
  itself, or a "view" that's really just one giant inline template
  instead of composed components.
- User says "clean up my views", "organize my routes' content", or runs
  `pages`.
- Runs after `compo` and `route` both exist — a view has nothing to
  compose without components, and nowhere to be mounted without a router.

## What it does
1. One file per view under `src/views/name.js`, exporting a `mount(root)`
   function (renders into `root`, wires up components, subscribes to
   `store` slices it needs) and, where the view holds subscriptions or
   listeners, a matching `destroy()` the router calls on navigation away.
2. A view's job is composition and data wiring — it instantiates/appends
   the components it needs and passes them attributes/properties from
   `store`'s state. It should not contain component-internal logic that
   belongs inside one of `compo`'s components instead.
3. Views that need URL params (`:id` from the route table) receive them
   as an argument to `mount(root, params)` — read from `route.js`'s match,
   not re-parsed from `location` inside the view.
4. Loading/error states for data-driven views are handled explicitly
   (a loading indicator while `store`'s fetch resolves, an error state on
   rejection) — not left to silently render nothing.
5. Register each view in `route.js`'s route table (cross-reference
   `route.md`) — `pages` produces the view, `route` wires the URL to it.

## Output convention
```
src/views/
  home.js           (export mount(root), optional destroy())
  project-detail.js  (export mount(root, params), destroy())
```

## Checklist
- [ ] Every view exports `mount()`, and `destroy()` wherever it holds
      subscriptions/listeners that must be cleaned up
- [ ] No component-internal logic leaked into a view — composition only
- [ ] URL params come from the router's match, not re-parsed from
      `location` inside the view
- [ ] Loading/error states are explicit for any data-driven view
- [ ] Every view is reachable — registered in `route.js`'s table
