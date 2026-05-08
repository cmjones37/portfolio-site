# Christine Jones — Portfolio

> Personal portfolio site for Christine Jones, Product Manager specialising in AI integrations, 0→1 builds, and data-driven product strategy.

Built with vanilla HTML, CSS, and JavaScript. Designed with a watercolour botanical aesthetic, warm parchment palette, and teal accent. The site itself is a product artifact — conceived with a full PRD, designed with a clear user in mind (you), and iterated based on feedback.

**Live site:** [christinejones.pm](https://christinejones.pm) <!-- Update with your actual URL -->

---

## Background

This portfolio was built as a deliberate product artifact. The process was run the same way I run any product: starting with a PRD that defined user stories (hiring managers, recruiters, peers), success metrics (time on site, recruiter inquiries, AI insights engagement), tech stack decisions with documented rationale, and a prioritised risk log.

The design intent was equally considered. The brief I gave myself: feel warm and personal rather than templated; convey strategic clarity without coldness; reflect a genuine interest in plants through the aesthetic — not as surface decoration but as part of the visual identity. The result should feel like it could only belong to one person.

The PRD is included on the site as a project case study — a deliberate choice to show that the thinking behind the build is as much a part of the work as the build itself.

---

## Features

- **Watercolour botanical SVGs** — multi-layer SVG illustrations using `feGaussianBlur`, `feTurbulence`, and `feDisplacementMap` filters to simulate painted, organic plant forms; no images, no external assets
- **Dark / light mode** — system preference respected on load; user toggle persists across sessions
- **Scroll reveal animations** — `IntersectionObserver`-driven fade-and-rise on all major sections, with no scroll event listeners blocking the main thread
- **Expandable project cards** — each case study has a collapsible detail panel covering problem, process, and outcome
- **AI Insights** — a recruiter-facing lens on each project, surfacing the strategic significance of the work
- **Contact form** — structured to connect to any form backend without changing the HTML
- **Fully responsive** — single-column on mobile, two-column grids at tablet and above

---

## Accessibility

Accessibility was treated as a first-class requirement, not an afterthought — particularly given one of the featured case studies involves leading a WCAG remediation programme.

- Semantic HTML throughout (`<nav>`, `<section>`, `<footer>`, `<label>`, `<button>`)
- All decorative SVGs marked `aria-hidden="true"` so screen readers skip illustration content
- Visible focus states on all interactive elements with a 3px teal focus ring
- Colour contrast meets WCAG 2.1 AA across all text and background combinations in both light and dark modes
- Form inputs paired with `<label>` elements via `for` / `id` attributes
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
