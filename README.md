# Portfolio Site: A product manager's portfolio, built as a product

[<img src="docs/prd-icon.png" width="52" alt="PRD icon" />](./docs/PRD_portfolio-site.md) The thinking behind this project is documented in the [PRD](./docs/PRD_portfolio-site.md).

---

## Overview

Personal portfolio site for Christine Jones, Senior Product Manager. Built with vanilla HTML, CSS, and JavaScript. Designed with a watercolour botanical aesthetic, warm parchment palette, and teal accent. Live at [christinemjones.com](https://christinemjones.com).

---

## Background

A portfolio site for a PM is itself a product decision. The audience is specific — hiring managers and recruiters for senior PM roles — and the job it needs to do is equally specific: demonstrate strategic thinking and craft before a single word of CV copy is read.

I ran this the same way I run any product. The process started with a PRD that defined user stories, success metrics, tech stack decisions with documented rationale, and a prioritised risk log. The design was briefed rather than left to defaults — a detailed specification was used as part of the AI-assisted design process to produce something that reflects me personally rather than a generic portfolio template. That brief now lives as a design system file that applies consistently across all portfolio projects, which means I'm not reproducing visual decisions from scratch each time.

The technical choices were deliberate rather than convenient. Vanilla HTML, CSS, and JavaScript with no framework and no build pipeline keeps the site fast, auditable, and free of dependency risk. The botanical SVG illustrations are generated in code using layered filter effects — no images, no external assets — which meant learning to produce a specific visual result through constraint rather than just reaching for a design tool.

The site is a living artefact. It gets iterated the same way a product does: based on what's working, what's missing, and what the audience actually needs to see.

---

## Features

- Watercolour botanical SVGs built with layered `feGaussianBlur`, `feTurbulence`, and `feDisplacementMap` filters — no images or external assets
- Dark and light mode with system preference respected on load and user toggle persisting across sessions
- Scroll reveal animations driven by `IntersectionObserver` with no scroll event listeners
- Expandable project cards with collapsible detail panels covering problem, process, and outcome
- AI Insights on each project — a recruiter-facing lens on the strategic significance of the work
- Fully responsive across mobile and desktop

---

## Accessibility

Accessibility was a first-class requirement rather than a retrospective check — particularly given one of the featured case studies involves leading a WCAG remediation programme.

- Semantic HTML throughout (`<nav>`, `<section>`, `<footer>`, `<label>`, `<button>`)
- All decorative SVGs marked `aria-hidden="true"`
- Visible focus states on all interactive elements with a 3px teal focus ring
- Colour contrast meets WCAG 2.1 AA across all text and background combinations in both modes
- Blog list items use `role="link"` and `tabindex="0"` for full keyboard navigation
- Theme toggle has a descriptive `aria-label`

---

## Performance

- No JavaScript dependencies — no React, no Vue, no jQuery
- No npm dependencies — no build pipeline, no node_modules, no supply chain risk
- ~15KB CSS · ~2KB JS unminified — the entire site loads faster than most hero images
- Fonts loaded with `preconnect` and `display=swap` to prevent render-blocking
- SVG filters are GPU-composited and do not affect page rendering performance
