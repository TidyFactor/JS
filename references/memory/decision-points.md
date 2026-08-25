# Memory: decision-points (Contextual Decision Layer — CDL v1.0)

A thin arbitration protocol for resolving framework-free vanilla JavaScript SPA architecture, routing strategies, and build tooling before code emission.

---

## 🏛️ Decision Matrix (J1–J5)

| Code | Decision Dimension | Options (Reference SSOT) | Default Fallback | Trigger / Ambiguity Condition |
|:---:|---|---|---|---|
| **J1** | **Client Routing Strategy** | • `hash` (`#/dashboard` — zero server rewrite configuration)<br>• `history` (`/dashboard` — clean URLs requiring server rewrite) | `hash` | When prompt asks to build SPA navigation without declaring server rewrite capability. |
| **J2** | **Build & Bundler Tooling** | • `zero-build` (Native ES Modules `<script type="module">` directly in browser)<br>• `vite` (Vite dev server + Rollup production bundle) | `zero-build` | When creating or scaffolding a vanilla JS project. |
| **J3** | **State Management Model** | • `reactive-proxy` (Proxy-based reactive state store with event listeners)<br>• `pub-sub` (Lightweight EventTarget Pub/Sub bus)<br>• `local-storage-synced` (Reactive store persisted to localStorage) | `reactive-proxy` | When designing stateful components, carts, or user preferences. |
| **J4** | **Component Pattern** | • `web-components` (`customElements.define` with Shadow DOM or light DOM)<br>• `template-functions` (Tagged template literals returning HTML strings) | `web-components` | When creating reusable UI widgets and screen views. |
| **J5** | **Output Scope & Depth** | • `single-view-widget` (Single interactive stateful widget)<br>• `complete-spa-app` (Full multi-route SPA with reactive store and layouts) | `single-view-widget` | When user request does not declare full application scope. |

---

## ⚡ Boolean Skip Conditions (Deterministic Bypass)

Skip interactive elicitation and proceed silently when ANY of the following are true:
1. **Cached Brief Exists**: `.tidyfactor/js-brief.md` exists.
2. **Explicit User Declaration**: Prompt explicitly declares routing and tooling (e.g. `"Build a zero-build vanilla JS SPA using hash routing and reactive proxy store"`).
3. **Direct Command Invocation**: User invokes explicit commands (`/route`, `/store`, `/compo`, `/logic`).

---

## 💾 Brief Persistence Protocol

When `/brief` runs, save confirmed decisions to `.tidyfactor/js-brief.md`:
```markdown
# Vanilla JS SPA Brief
- Routing Strategy: [hash | history]
- Build Tooling: [zero-build | vite]
- State Model: [reactive-proxy | pub-sub | local-storage-synced]
- Component Pattern: [web-components | template-functions]
- Scope Depth: [single-view-widget | complete-spa-app]
- Confirmed At: YYYY-MM-DD
```
