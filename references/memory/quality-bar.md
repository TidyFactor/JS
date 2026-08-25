# Memory: quality-bar (Vanilla JS Anti-Slop & Quality Gate)

Enforces 100% framework-free purity (zero React/Vue/Alpine), clean DOM event cleanup, and memory leak prevention.

---

## 🛡️ 7-Axis Pre-Emit Self-Critique Stamp

Every generated JavaScript module, router, store, or component must be stamped:
`/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

| Axis | Dimension | Score 1 (Slop / Reject) | Score 5 (Production Pass) |
|:---:|---|---|---|
| **P** | **Philosophy & Zero Framework** | Sneaks in React, Vue, Alpine, or heavy runtime dependencies. | 100% pure vanilla modern JavaScript (ES2022+, Web APIs). |
| **H** | **History & Routing Discipline** | Broken browser back button; reload loops on route transition. | Solid Hash or History router with popstate listeners and scroll reset. |
| **E** | **Encapsulation & Memory Hygiene** | Zombie event listeners leaking memory on route change. | `disconnectedCallback()` removes all listeners and timers. |
| **S** | **State Reactivity Purity** | Direct global state mutations without notifying subscribers. | Proxy-based or PubSub store dispatching change events cleanly. |
| **R** | **RTL & Internationalization** | Hardcoded text strings inside JS logic; layout break on RTL. | Translatable dictionary (`i18n.js`) with dynamic `dir="rtl"` toggling. |
| **V** | **Velocity & Bundle Size** | Heavy NPM packages for trivial tasks (e.g. lodash for deepClone). | Native Web APIs (`structuredClone`, `Intl`, `fetch`, `EventTarget`). |
| **D** | **Decision Alignment** | Inconsistent routing or tooling ignoring `.tidyfactor/js-brief.md`. | 100% compliant with confirmed Routing Strategy and Tooling choices. |
