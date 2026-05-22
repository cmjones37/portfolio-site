# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Christine Jones — a Product Manager specialising in AI integrations, 0→1 builds, and data-driven product strategy. Live at [christinemjones.netlify.app](https://christinemjones.netlify.app/).

## Stack

Vanilla HTML, CSS, and JavaScript. **No build pipeline, no npm, no dependencies.** Files are served directly — edits take effect immediately with no compilation step. Deployed via Netlify as a static site.

To preview locally, serve from a local HTTP server (e.g. `python -m http.server 8080` or VS Code Live Server). Opening `index.html` directly via `file://` will cause component fetches to fail due to CORS restrictions.

## Architecture

### Component Loading

`index.html` is the single entry point. It contains placeholder `<div data-component="...">` elements. On DOMContentLoaded, `scripts.js` fetches all six component HTML files in parallel via `Promise.all` and injects them into the DOM:

| `data-component` | File |
|---|---|
| `nav` | `components/nav.html` |
| `hero` | `components/hero.html` |
| `about` | `components/about.html` |
| `projects` | `components/projects.html` |
| `blog` | `components/blog.html` |
| `contact-footer` | `components/contact-footer.html` |

Components are fetched with `cache: 'no-store'`. All JS that needs to reference component-injected DOM (nav links, project cards, theme button, etc.) must run **after** components load — this is handled in `scripts.js` by chaining off the `loadComponents()` promise.

### JavaScript Modules (all in `scripts.js`)

- **`loadComponents()`** — fetches and injects components, then calls all init functions
- **`initThemeToggle()`** — dark/light mode via `[data-theme]` on `<html>`, persisted to `localStorage('theme')`
- **`initScrollReveal()`** — `IntersectionObserver` adds `visible` class to `.reveal` / `.reveal-stagger` elements
- **`initNavBehavior()`** — `IntersectionObserver` on `<section>` elements drives active nav link highlighting; adds scroll shadow class at `scrollY > 10px`
- **`toggleProject(btn)`** — inline `onclick` handler on project expand buttons; toggles `.open` on `.project-details`

No scroll event listeners are used anywhere — all scroll-driven effects use `IntersectionObserver`.

### CSS Architecture

Design tokens are defined as CSS custom properties in `:root` (light) and `[data-theme="dark"]` (dark overrides). Key token groups:

- Palette: warm parchment backgrounds, teal accents (`--c-teal-*`), layered text hierarchy
- Typography: Cormorant Garamond (display/headings), Jost (body), DM Mono (code/labels)
- Radius scale: `--r-sm` through `--r-xl` and `--r-pill`
- Watercolour botanical SVG illustrations are defined inline in `index.html` using `<filter>` elements (`feGaussianBlur`, `feTurbulence`, `feDisplacementMap`) — no external image assets

Reveal animations are CSS transitions triggered by the `.visible` class added by JS.

### Content Updates

- **Projects / Blog:** Edit `components/projects.html` and `components/blog.html` directly
- **CV download:** Replace `docs/CV_ChristineJones.pdf` (filename referenced in `components/hero.html`)
- **Nav links:** Section IDs in component files must match `href` anchors in `components/nav.html`
- **Contact form:** `components/contact-footer.html` — form action/method can be wired to any backend without touching other files

### Accessibility Conventions

- Decorative SVGs use `aria-hidden="true"`
- Interactive elements have visible 3px teal focus rings
- Blog list items use `role="link"` + `tabindex="0"` (not `<a>` tags) — keyboard handlers must be maintained if adding new blog items
- Theme toggle button requires `aria-label`
