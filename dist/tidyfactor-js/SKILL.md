---
name: tidyfactor-js
description: "TidyFactor Vanilla JS track — Framework-Free Reactive Vanilla SPA with Contextual Decision Layer (CDL). Features client-side routing (hash/history), reactive Proxy state management, and Web Components with zero React/Vue/Alpine runtime. Trigger on commands 'brief', 'init', 'assets', 'logic', 'store', 'compo', 'route', 'pages', 'modules', 'i18n', 'seo', 'deploy', or requests like 'start a new vanilla JS app', 'scaffold an SPA with no framework', 'client-side routing', 'reactive state store'. Anti-triggers: Do NOT use for React/Next.js apps or heavy UI frameworks."
---

# TidyFactor Vanilla JS (Framework-Free Reactive Vanilla SPA)

A command dispatcher for framework-free client-side single page applications. This router declares commands and workflows without performing execution directly.

## Commands

| User intent | Command | What it loads |
|---|---|---|
| Strategic SPA Discovery & Brief Resolution | `references/commands/brief.md` | `references/workflows/brief.md` + `references/memory/decision-points.md` + `references/memory/quality-bar.md` |
| Primary deliverable — scaffold a new vanilla SPA | `references/commands/init.md` | `references/workflows/init.md` + `references/memory/architecture.md` |
| Client-side routing (hash `#` vs HTML5 History API) | `references/commands/route.md` | `references/workflows/route.md` + `references/memory/decision-points.md` |
| Reactive Proxy state store & EventTarget subscribers | `references/commands/store.md` | `references/workflows/store.md` + `references/memory/quality-bar.md` |
| Reusable native Web Components (custom elements) | `references/commands/compo.md` | `references/workflows/compo.md` + `references/memory/architecture.md` |
| Central environment configuration & API clients | `references/commands/logic.md` | `references/commands/logic.md` + `references/memory/architecture.md` |
| Assemble multi-screen view controllers | `references/commands/pages.md` | `references/commands/pages.md` + `references/memory/architecture.md` |
| Pure ES Module utilities & formatting helpers | `references/commands/modules.md` | `references/commands/modules.md` + `references/memory/architecture.md` |
| Multilingual translation & dynamic Arabic RTL toggle | `references/commands/i18n.md` | `references/commands/i18n.md` + `references/memory/quality-bar.md` |
| SPA SEO metadata, dynamic page titles, sitemaps | `references/commands/seo.md` | `references/commands/seo.md` + `references/memory/quality-bar.md` |
| Asset hygiene, favicon, and SVG optimization | `references/commands/assets.md` | `references/commands/assets.md` + `references/memory/quality-bar.md` |
| Prepare deployment (Static hosting, Vite build, cPanel) | `references/commands/deploy.md` | `references/commands/deploy.md` + `references/memory/decision-points.md` |

Read only the command file that matches the request. Do not load all commands simultaneously.

## Non-Negotiable Invariants

1. **Contextual Decision Layer (CDL)**: Resolve SPA baselines via `/brief` or `.tidyfactor/js-brief.md` before emitting code.
2. **Zero Framework Runtime**: 100% pure vanilla modern JavaScript. No React, Vue, or Alpine.
3. **Memory Leak Prevention**: All event listeners and timers MUST be cleaned up on `disconnectedCallback()`.
4. **State Mutation Discipline**: All shared state mutations must occur through the Proxy/Store to notify subscribers.
5. **7-Axis Pre-Emit Critique**: All generated code must be evaluated with `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`.
