# Command: `compo` — Modular Components

## Purpose
Break repeated or logically-distinct UI blocks into native Web
Components — the structural unit above "view" and below "module" (see
`modules.md` for logic not tied to any one component). Unlike
`tidyfactor-html`, this track has JS available natively, so there's no
build-vs-runtime fork here — Web Components are simply the standard.

## When to run it
- The audit shows the same UI block (card, nav item, modal, form field)
  repeated across multiple views, or non-trivial DOM manipulation logic
  duplicated inline.
- User says "componentize this", "make this modular", or runs `compo`.
- Runs after `store` — new components should consume the store/data layer
  from day one rather than being retrofitted onto it later.

## What it does
1. Identify each repeated/distinct UI block during audit.
2. Extract it into its own file under `src/components/name.js`, a custom
   element (`class NameEl extends HTMLElement`) using `<template>` +
   Shadow DOM by default — use light DOM only if the project's global CSS
   genuinely needs to cascade in, and match whatever the project's first
   component already established (don't mix the two within one project).
3. Inputs become element attributes for primitives (`<product-card
   title="...">`, read via `observedAttributes`/`attributeChangedCallback`)
   or properties for complex data (`el.data = {...}`) — don't serialize
   objects into attribute strings.
4. Register via `customElements.define('product-card', ProductCardEl)` —
   one registration per component file, imported where used.
5. Components that need shared state subscribe to `store.js`
   (`store.subscribe(...)`) in `connectedCallback` and unsubscribe in
   `disconnectedCallback` — no memory-leaking listeners left behind.
6. Name by what the block *is*, not where it's used
   (`product-card.js`, not `homepage-box-3.js`).
7. Replace the original inline markup/logic with the custom element tag
   in every view, and confirm zero visual/behavioral change.

## Output convention
```
src/components/
  product-card.js      (defines <product-card>)
  nav-bar.js             (defines <nav-bar>, subscribes to store)
```

## Checklist
- [ ] No component contains hardcoded view-specific content it should
      take as an attribute/property instead
- [ ] Same visual/behavioral output as before extraction
- [ ] Named by purpose, not by view location
- [ ] Used in at least 2 places, or clearly reusable (single-use blocks
      may not need extraction yet — flag instead of forcing it)
- [ ] Shadow DOM vs light DOM choice is consistent across every
      component in the project — never mixed
- [ ] Any component subscribing to `store.js` unsubscribes in
      `disconnectedCallback`
