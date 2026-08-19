# Command: `deploy` — Host Launch

## Purpose
The step where both Step 0 forks actually matter operationally: what to
upload, and — critically for History API routing — the host rewrite rule
that keeps deep links from 404ing. Always the last command run.

## When to run it
- `seo` has run (or the user explicitly skips it) and the app is ready to
  ship.
- User says "deploy this", "prep for [host]", "why do my routes 404 on
  refresh", or runs `deploy`.
- Always last — deploying before `route`/`pages`/`seo` are stable just
  means redoing this step.

## What it does
1. Confirm the target host if not already known (GitHub Pages, Cloudflare
   Pages, Netlify, Vercel static, cPanel/shared hosting, other) — the
   rewrite-rule syntax differs per host.
2. **Zero-build**: nothing to build — upload the project root as-is
   (`index.html`, `src/`, `assets/`).
   **Vite**: run `npm run build`, upload the generated `dist/` folder,
   never the source tree.
3. **History API routing — the critical step.** Without a rewrite rule,
   any deep link or hard refresh on a non-root route 404s, because the
   host looks for a real file at that path. Add the host-specific rule
   that serves `index.html` for any unmatched path:
   - Netlify: `_redirects` file — `/* /index.html 200`
   - Vercel: `vercel.json` rewrites — all paths → `/index.html`
   - Cloudflare Pages: `_redirects` file, same syntax as Netlify
   - GitHub Pages: no native rewrite support — either use hash-based
     routing instead (flag this limitation if the user picked History API
     for a GitHub Pages target — that combination doesn't work cleanly),
     or use the well-known `404.html`-redirects-to-`index.html` trick,
     which is a workaround, not a clean rewrite — say so.
   - cPanel/Apache: `.htaccess` rewrite rule to `index.html` for
     non-file, non-directory requests.
4. **Hash-based routing**: no rewrite rule needed on any host — confirm
   this explicitly to the user so they don't add unnecessary host config.
5. Vite mode: confirm `vite.config.js`'s `base` option matches the actual
   deploy path (root domain vs. a subpath like `username.github.io/repo/`)
   — a mismatched `base` is the most common "works locally, breaks
   deployed" Vite issue.
6. Confirm HTTPS is enforced by the host (most free hosts do this by
   default; flag if not) and that `logic`'s config resolves to the
   correct production API base URL, not a `localhost` default.
7. Final checklist pass, then report the exact upload/deploy steps for
   the confirmed host.

## Output convention
```
Netlify/Cloudflare Pages (History API):  /_redirects
Vercel (History API):                     /vercel.json
cPanel/Apache (History API):               /.htaccess
Hash-based (any host):                      no rewrite file needed
```

## Checklist
- [ ] Correct artifact uploaded (zero-build: project root; Vite: `dist/`
      only, never the source tree)
- [ ] History API mode: host-appropriate rewrite rule is in place and
      verified — deep link + hard refresh both resolve correctly
- [ ] Hash-based mode: confirmed no rewrite rule was added unnecessarily
- [ ] Vite mode: `base` config matches the actual deploy path
- [ ] Production API base URL confirmed, not a `localhost` default
- [ ] HTTPS enforced by the host
