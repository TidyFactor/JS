# Command: `seo` — SPA SEO

## Purpose
Fill in the metadata a client-rendered SPA doesn't get for free (no
per-route server response, no SSR meta) — per-route title/description,
Open Graph/Twitter cards, a sitemap of known routes — and be explicit
about the one thing this command *cannot* fully solve without more
infrastructure: crawlers that don't execute JavaScript won't see
client-rendered content at all.

## When to run it
- `route`/`pages` have finalized the route structure (Phase 4, always
  after structure work, never before — metadata for routes about to be
  restructured just gets thrown away).
- User says "improve SEO", "add social preview cards", "generate a
  sitemap", or runs `seo`.

## What it does
1. Every view updates `document.title` and a `<meta name="description">`
   tag on mount (already partly wired by `route.md`'s title-per-route
   step) — filled from `store`'s data where the view is data-driven,
   authored directly for static views.
2. Open Graph and Twitter card `<meta>` tags updated per route the same
   way — `og:image` should point to a real, reachable asset.
3. Generate `sitemap.xml` and `robots.txt` from the route table (walk
   `route.js`'s registered routes) — static routes only; routes needing a
   runtime ID (`/projects/:id`) get listed if the data source (`store`)
   can enumerate real IDs at generation time, otherwise flagged as
   excluded with a note why.
4. Bilingual mode: add `hreflang` alternate links per route if `i18n` has
   run; if not, flag it as a prerequisite.
5. **Be explicit with the user about the crawler-visibility ceiling**:
   updating `document.title`/meta tags client-side helps social-media
   unfurling bots that do execute JS (most major platforms today) and
   helps users who navigate within the app, but a crawler that fetches
   the raw HTML without executing JavaScript sees only the initial empty
   shell. If the project needs guaranteed crawler-visible content (SEO-
   critical marketing pages, not an authenticated app), say so plainly
   and offer two real options rather than a false promise:
   - Move the SEO-critical pages to `tidyfactor-html` (build-time
     pre-rendering, actually static HTML crawlers read directly), or
   - Move to a backend that can server-render those routes
     (`tidyfactor-php` territory), which is a bigger architectural change
     this skill doesn't perform on its own — flag it, don't attempt it.
6. Don't silently add a prerendering plugin/service to "solve" this —
   that's a build-tooling decision bigger than a normal `seo` run and
   needs the same explicit confirmation as any Step 0 fork.

## Output convention
```
Zero-build: /sitemap.xml, /robots.txt at project root
Vite:       /public/sitemap.xml, /public/robots.txt (copied as-is on build)
Per-view: document.title, meta description, og:*, twitter:*, hreflang
```

## Checklist
- [ ] No two routes share an identical `document.title`
- [ ] Every route updates its meta description/OG tags on mount
- [ ] `sitemap.xml` matches the actual route table, with dynamic-ID
      routes either enumerated from real data or explicitly excluded
- [ ] `robots.txt` present and points to the sitemap
- [ ] `hreflang` added if `i18n` has run; flagged as a prerequisite if not
- [ ] The crawler-visibility limitation was communicated to the user, not
      silently glossed over
