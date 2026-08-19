# Command: `modules` — Utility Modules

## Purpose
Extract logic that isn't tied to any one component or view — formatters,
validators, small algorithms, third-party-API glue that isn't the app's
own backend — into standalone, testable ES modules. The catch-all for
what's left after `compo`/`pages`/`store` have claimed everything with a
clear home.

## When to run it
- The audit finds a formatting/validation/calculation function duplicated
  across multiple components, or non-trivial logic embedded inline inside
  a component that would read cleaner (and be independently testable)
  extracted out.
- User says "extract this logic", "this component is doing too much", or
  runs `modules`.
- Runs after `compo`/`route`/`pages` — by this point what's left over is
  genuinely cross-cutting, not something that turned out to belong in a
  component instead.

## What it does
1. Identify logic duplicated across components/views, or a component with
   a clear "does one DOM thing + one unrelated calculation/formatting
   thing" split.
2. Extract into `src/modules/name.js` — one concern per file
   (`format-currency.js`, `validate-email.js`), pure functions wherever
   possible (input in, output out, no DOM access, no `store` dependency)
   so they're trivially reusable and testable.
3. Modules that *do* need DOM access (a shared scroll-lock utility, a
   focus-trap helper) are the exception, not the default — keep even
   these narrowly scoped to one behavior, not a grab-bag `utils.js`.
4. Import into whatever component/view needs it; don't duplicate the
   logic at the call site anymore.
5. Explicitly avoid a catch-all `utils.js`/`helpers.js` — name files by
   what they do, so an AI agent or new developer can find the right one
   without reading all of them (see `tidyfactor-vision.md`: AI-native
   means predictable, not a junk drawer).

## Output convention
```
src/modules/
  format-currency.js
  validate-email.js
  scroll-lock.js
```

## Checklist
- [ ] No logic duplicated across components/views that a module now
      covers once
- [ ] Pure functions wherever possible — no hidden DOM/store coupling
      unless the module's specific job requires it
- [ ] One concern per file, named by what it does — no catch-all
      `utils.js`
- [ ] Every extracted module is actually imported somewhere — nothing
      orphaned
