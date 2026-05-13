# Christine Jones — Portfolio

> Personal portfolio site for Christine Jones, Product Manager specialising in AI integrations, 0→1 builds, and data-driven product strategy.

Built with vanilla HTML, CSS, and JavaScript. Designed with a watercolour botanical aesthetic, warm parchment palette, and teal accent. The site itself is a product artifact — conceived with a full PRD, designed with a clear user in mind (you), and iterated based on feedback.

**Live site:** [christinemjones.com](https://christinemjones.com)

[![PRD](https://img.shields.io/badge/docs-PRD-3c4f2c)](./docs/PRD_portfolio-site.md)

The thinking behind this project is documented in the [PRD](./docs/PRD_portfolio-site.md).

---

## Background

This portfolio was built as a deliberate product artifact. The process was run the same way I run any product: starting with a PRD that defined user stories (hiring managers, recruiters, peers), success metrics, tech stack decisions with documented rationale, and a prioritised risk log.

The design intent was equally considered. A detailed brief was used as part of AI prompting to produce a design that represents me personally as opposed to boilerplate outputs. This design is structured to be able to be used across other projects instead of needing to reproduce it each time for better efficiency and consistency. 

---

## Features

- **Watercolour botanical SVGs** — multi-layer SVG illustrations using `feGaussianBlur`, `feTurbulence`, and `feDisplacementMap` filters to simulate painted, organic plant forms; no images, no external assets
- **Dark / light mode** — system preference respected on load; user toggle persists across sessions
- **Scroll reveal animations** — `IntersectionObserver`-driven fade-and-rise on all major sections, with no scroll event listeners blocking the main thread
- **Expandable project cards** — each case study has a collapsible detail panel covering problem, process, and outcome
- **AI Insights** — a recruiter-facing lens on each project, surfacing the strategic significance of the work
- **Fully responsive** — single-column on mobile, two-column grids at tablet and above

---

## Accessibility

Accessibility was treated as a first-class requirement, not an afterthought — particularly given one of the featured case studies involves leading a WCAG remediation programme.

- Semantic HTML throughout (`<nav>`, `<section>`, `<footer>`, `<label>`, `<button>`)
- All decorative SVGs marked `aria-hidden="true"` so screen readers skip illustration content
- Visible focus states on all interactive elements with a 3px teal focus ring
- Colour contrast meets WCAG 2.1 AA across all text and background combinations in both light and dark modes
- Blog list items use `role="link"` and `tabindex="0"` for full keyboard navigation
- Theme toggle has a descriptive `aria-label`

---

## Performance

- **Zero JavaScript dependencies** — no React, no Vue, no jQuery
- **Zero npm dependencies** — no build pipeline, no node_modules, no supply chain risk
- **~15KB CSS · ~2KB JS** (unminified) — entire site loads faster than most hero images
- Fonts loaded with `preconnect` and `display=swap` to prevent render-blocking
- SVG filters are GPU-composited and do not affect page rendering performance

---

*Built with intention.*
