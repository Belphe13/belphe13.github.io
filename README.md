# lilanyang.studio

Source for [lilanyang.studio](https://lilanyang.studio) — Lilan Yang's moving-image and installation portfolio. Built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm start          # eleventy --serve, live reload on http://localhost:8080
npm run build      # one-shot build into _site/
```

Requires Node 20+.

## Repo layout

```
src/
  _includes/
    layout.njk        # base template: <head>, OG/Twitter tags, JSON-LD, nav
    nav.njk           # global top navigation
  *.html              # one file per page (Liquid frontmatter + HTML body)
  sitemap.njk         # auto-generated sitemap.xml
  robots.njk          # auto-generated robots.txt
  llms.njk            # auto-generated llms.txt for AI crawlers
css/   js/   img/   frames/   icon/   pdf/   kml/   favicon.ico
                        # passthrough-copied to _site/ unchanged
.eleventy.js          # config + the alias post-processor (see below)
.github/workflows/deploy.yml
```

## Adding or editing a page

Every page in `src/*.html` starts with Liquid frontmatter that `layout.njk` consumes. Minimal version:

```yaml
---
layout: layout.njk
title: "Page Title — Lilan Yang"
description: "One-sentence summary used for <meta description>, OG, and JSON-LD."
---
```

Full reference (all optional except `layout` and `title`):

| Key              | Purpose |
|------------------|---------|
| `description`    | `<meta name="description">`, `og:description`, `twitter:description`, JSON-LD `description`. Falls back to site default. |
| `keywords`       | `<meta name="keywords">`. |
| `schema_type`    | JSON-LD `@type`. Defaults to `WebPage`. Use `CreativeWork` (or `VisualArtwork`, `Movie`, etc.) for artworks, `ExhibitionEvent` for shows, `ProfilePage`/`AboutPage` for bio pages. Only `CreativeWork` and its subtypes emit `author`/`creator`/`publisher` — this is intentional and keeps Google Search Console's rich-result validator quiet. |
| `genre`, `artMedium`, `artform`, `date_published` | Extra JSON-LD fields for `CreativeWork`. |
| `og_image`       | Path to the social share image. Defaults to `/img/index/everything-comes-full-circle-thumbnail.webp`. |
| `og_type`        | OG type. Defaults to `website`. |
| `body_id`        | Sets `<body id="...">` for page-scoped CSS. |
| `styles`         | List of extra stylesheets to load after `nav.css`. |
| `scripts`        | List of extra scripts to load in `<head>`. |
| `hide_nav`       | Set `true` to skip the global nav include. |

## Images

- All images are WebP and live under `img/` and `frames/`, copied straight to `_site/`.
- Content image filenames are descriptive, lowercase and hyphenated, leading with the work or exhibition name (`the-perfect-human-16mm-projector-installation.webp`) — the filename is part of the image's search URL, so keep new ones in that form. No spaces, `+`, or underscores.
- Directories under `img/projects/`, `img/exhibitions/` and `img/performance/` are named after the full work or exhibition title for the same reason (`img/projects/everything-comes-full-circle/`, not `ecfc/`).
- Every `<img>` tag should carry `alt`, `loading="lazy"`, and `decoding="async"`. The first (LCP) image on a page should use `loading="eager" fetchpriority="high"` instead. Decorative images — the `frames/paris-texas/` animation sequence — correctly use `alt=""` so screen readers skip them.
- Content images are wrapped in `<figure class="citation">` with a `<figcaption>`; the caption is styled alongside the older `<div class="citation"><p>` form in `css/projects.css`.
- `img/background/` and `img/film/` are referenced from CSS and JS — don't rename files in those folders.
- `frames/paris-texas/` holds a JS-loaded image sequence; keep filenames stable.
- When adding new photography, encode to WebP with `cwebp -q 82 -m 6` (use `-lossless -m 6` for flat graphics and posters, whichever comes out smaller) and resize so the longest side ≤ 2000 px before committing — large originals bloat the repo and hurt mobile load times.

## URL routing

Eleventy writes `src/foo.html` to `_site/foo/index.html`. An `afterBuild` hook in `.eleventy.js` also copies each `foo/index.html` to `_site/foo.html`, so both `/foo/` and `/foo.html` resolve to the same content. Canonical links point to the trailing-slash form.

## Deployment

Pushes to `master` or `develop` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `_site/` to GitHub Pages via `actions/deploy-pages`. The custom domain (`lilanyang.studio`) is pinned via the `CNAME` file at the repo root.
