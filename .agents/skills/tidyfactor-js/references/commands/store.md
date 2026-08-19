# Command: `store` — State & Data Layer

## Purpose
A minimal, framework-free state container plus a shared fetch wrapper —
so components/views read and write app state through one place instead
of each managing its own copy, and every network call gets the same
error handling instead of duplicated try/catch blocks.

## When to run it
- The audit finds the same piece of state (current user, cart contents,
  active filter) duplicated or passed ad hoc between components/views, or
  `fetch()` calls repeated with inconsistent error handling.
- The user says "add state management", "stop duplicating this data",
  "centralize API calls", or runs `store`.
- Runs after `logic` (needs the API base URL) and before `compo`/`pages`
  (components/views should consume the store, not raw fetches).

## What it does
1. **State container** (`src/store/store.js`): a minimal pub/sub object —
   `getState()`, `setState(patch)`, `subscribe(listener)` — backed by a
   plain object, notifying subscribers on change. This is the ceiling
   (see Hard Constraints in `SKILL.md`): no middleware pipeline, no
   time-travel debugging, no reducer boilerplate. If the app genuinely
   needs more than this, say so rather than growing one silently.
2. **Data layer** (`src/store/api.js` or per-domain files under
   `src/store/`): wraps `fetch()` against `logic`'s base URL — one
   function per resource/action (`getProjects()`, `submitContact(data)`),
   consistent error handling (thrown/rejected on non-2xx, parsed JSON on
   success), and updates the store's state on completion rather than
   returning raw data for the caller to juggle.
3. Identify state currently threaded through component
   properties/attributes or global variables that belongs in the store
   instead — move it, and have those components `subscribe()` to the
   relevant slice.
4. Components/views never call `fetch()` directly — always through this
   layer, so `logic`'s config and consistent error handling are never
   bypassed.
5. If the project talks to a `tidyfactor-php`-built `api` backend, match
   that backend's response shape (`{ success, data }` / `{ success,
   error }`) when unwrapping — don't invent a different shape client-side.
6. Local-only state (a form's current input, a modal's open/closed flag)
   stays inside the component that owns it — not everything belongs in
   the shared store; over-centralizing trivial local state is exactly the
   kind of unnecessary complexity this track avoids.

## Output convention
```
src/store/
  store.js        (pub/sub state container)
  api.js           (or one file per resource — fetch wrapper)
```

## Checklist
- [ ] `store.js` stays under the pub/sub ceiling — no middleware/reducer
      pattern added
- [ ] No component/view calls `fetch()` directly — always through the
      data layer
- [ ] Every data-layer function has consistent error handling, not
      duplicated ad hoc per call site
- [ ] Response-shape handling matches the actual backend contract, not
      an invented one
- [ ] Trivial component-local state stays local, not force-centralized
