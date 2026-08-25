# Memory: architecture (Vanilla JS SPA Tree & State Model)

Architecture patterns for scalable framework-free single page applications.

---

## 📁 Standard Vanilla JS SPA Layout

```
project-root/
├── index.html                   # Master HTML mount point (#app)
├── css/
│   └── style.css                # Scoped CSS custom properties
├── js/
│   ├── app.js                   # Application bootstrap & router initialization
│   ├── config.js                # Environment config & constants
│   ├── router.js                # Hash / History client-side router
│   ├── store.js                 # Reactive state store (Proxy / EventTarget)
│   ├── components/              # Web Components (custom elements)
│   │   ├── nav-bar.js
│   │   └── user-card.js
│   ├── views/                   # Route view controllers
│   │   ├── home-view.js
│   │   ├── dashboard-view.js
│   │   └── not-found-view.js
│   └── utils/                   # Pure helper functions (i18n, formatting)
│       └── i18n.js
└── assets/                      # Media assets & icons
```
