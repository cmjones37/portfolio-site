# PRD: Portfolio Website — Christine Jones

---

## 1. Overview

### Purpose

This document defines the product requirements for a personal portfolio website built to support an active senior PM job search. The site functions as a professional signal — a curated, high-quality artifact that communicates strategic thinking, technical credibility, and personal brand to hiring managers and recruiters evaluating fit for senior product roles.

The portfolio is a living product, not a static page. It is designed to be iterated on as new projects are completed, case studies are written, and the job search evolves.

### Goals

- Give hiring managers and recruiters a clear, fast path to evaluate professional fit.
- Showcase AI-assisted product and development projects with direct links to GitHub repos, READMEs, and PRDs — demonstrating that traditional PM workflows (user stories, PRDs, prioritisation) remain central even when using AI tooling.
- Establish a modular design system that can be reused consistently across all portfolio projects and artifacts, reducing rework and ensuring a cohesive experience across the full body of work.
- Demonstrate hands-on technical capability (HTML, CSS, JS, AI-assisted development) without misrepresenting seniority or role.

### Background

Traditional PM portfolios rely on PDFs, slide decks, and LinkedIn summaries — formats that are difficult to update and don't show process. This portfolio takes a different approach: it is itself a product, built using the same AI-assisted workflows it documents, and designed to be evaluated as such. The GitHub repo, READMEs, and PRDs attached to each project are as much a part of the portfolio as the site itself.

The design system underpinning the site is a deliberate product decision. By defining all visual, typographic, and interaction tokens once in `styles.css`, the same aesthetic language can be applied across future case studies, artifacts, and project pages without re-litigating decisions. This mirrors how a mature product team maintains a design system to achieve consistency at scale — and is documented here as a strategic choice, not incidental tidiness.

---

## 2. User Stories

| ID  | User Story | Acceptance Criteria |
|-----|------------|---------------------|
| US1 | As a hiring manager, I want to understand Christine's professional background and positioning within 60 seconds of landing on the site, so I can quickly assess fit for a senior PM role. | Hero section communicates role, seniority, and focus area immediately. Key stats or credentials are visible above the fold without scrolling. |
| US2 | As a hiring manager, I want to browse projects and understand the strategic thinking behind each one, so I can evaluate depth beyond a job title. | Each project card includes a summary, tags, and a direct link to the GitHub repo where the README and PRD can be read in full. |
| US3 | As a recruiter, I want to find contact information quickly and without friction, so I can reach out without hunting for it. | Contact options are clearly signposted and accessible from multiple points in the site (nav and footer as a minimum). No form required — direct contact methods only. |
| US4 | As a hiring manager browsing on mobile, I want the site to be readable and navigable on a smaller screen, so I don't have a degraded experience compared to desktop. | All sections are readable and functional on mobile. Navigation is usable. No content is hidden or broken below 375px viewport width. |
| US5 | As a hiring manager who has reached the GitHub repo, I want the README to make the project's intent and approach clear immediately, so I can evaluate PM craft without reading code. | READMEs are written for a non-developer audience. The strategic context appears before technical detail. The PRD is linked or included in the repo. |
| US6 | As a returning visitor, I want the site to remember my theme preference (light or dark mode), so I don't have to reset it on every visit. | Theme toggle state is persisted via `localStorage`. The correct theme loads on return visits without flash. |

---

## 3. Requirements

### Functional Requirements

| ID  | Requirement | Description |
|-----|-------------|-------------|
| FR1 | Hero and positioning | The landing view must communicate Christine's name, professional focus, and a primary CTA within the viewport on load — no scroll required on standard desktop and mobile screen sizes. |
| FR2 | Project showcase | Each project must have a card displaying: project name, short description, relevant tags, and a direct link to the GitHub repo. Cards must support expand/collapse for additional detail without navigating away from the page. |
| FR3 | Repo documentation discoverability | Once a visitor reaches a GitHub repo via a project card, the README must make the project's intent and approach immediately clear. The PRD must be linked or included in the repo. Documentation is written for a non-developer audience — strategic context before technical detail. |
| FR4 | About section | The site must include a section covering professional background, area of expertise, and skills — written in first person, in prose, not bullet points. |
| FR5 | Blog section | The site must include a blog section to surface written work (case studies, opinion pieces, process reflections). Blog entries must link to full posts. At launch, the section may be sparse; content will be added iteratively. |
| FR6 | Contact | Contact options must be present and directly accessible. Direct links (email, LinkedIn) are used in place of a form — reducing friction and removing the need for a backend handler. |
| FR7 | Dark mode | The site must support a light/dark toggle. Both modes must use the full warm palette from the design system — dark mode must not default to a cold or high-contrast appearance. Preference must be persisted via `localStorage`. |
| FR8 | Scroll reveal animations | Content sections must animate in on scroll using `IntersectionObserver`. Motion must feel organic and unhurried — no sudden flashes or mechanical transitions. |
| FR9 | Responsive layout | All sections must be fully functional and readable at mobile viewport widths (minimum 375px). Two-column layouts must collapse to single column below 900px. |

### Non-Functional Requirements

| ID   | Requirement | Description |
|------|-------------|-------------|
| NFR1 | Design system compliance | All visual decisions — colour, typography, spacing, radius, animation — must use the CSS custom property tokens defined in `styles.css`. No one-off values. |
| NFR2 | Modular component structure | Sections must be built as standalone HTML partials (`/components/`) so they can be maintained, updated, or reused independently without editing the assembled page directly. |
| NFR3 | No framework dependency | The site must be built in vanilla HTML, CSS, and JS. No npm dependencies, no build step, no framework — keeping the project lightweight, portable, and straightforwardly readable by anyone evaluating the code. |
| NFR4 | Accessibility | The site must meet WCAG 2.1 AA as a baseline: semantic HTML throughout, visible focus states on all interactive elements (3px teal ring), all decorative SVGs marked `aria-hidden`, and sufficient colour contrast on all text/background combinations. |
| NFR5 | Performance | The site must load without perceptible delay on a standard broadband connection. Google Fonts are the only external dependency. No large unoptimised assets. |
| NFR6 | Documentation | The GitHub repo must include: this PRD, a `README.md` written for a hiring manager audience (strategic context first, then technical detail), and component-level inline comments where decisions are non-obvious. |
| NFR7 | Hosting | The site must be deployed and publicly accessible via a stable URL. Currently hosted on Netlify. |

---

## 4. Design System

The design system is implemented through CSS custom properties in `styles.css` and interaction patterns in `scripts.js`. The key decisions and their rationale are documented here.

### Rationale for a Design System Approach

Extracting design decisions into a reusable token system serves two purposes. First, it makes consistency low-effort — any new page, case study, or artifact can reference the same tokens rather than making fresh decisions or replicating values by hand. Second, it demonstrates PM craft: the ability to think in systems, reduce rework, and create patterns that other contributors (or future iterations of AI tooling) can use without needing to ask questions.

### Identity

Three qualities define the aesthetic and are held in deliberate tension:

- **Warm precision** — human and inviting, but every choice is legible as deliberate.
- **Organic, not generic** — rooted in real personal preferences (plants, teal, texture), not design trends.
- **Calm authority** — "I want to meet this person" before "impressive credentials."

### Key Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| Colour | Warm parchment background (`#f5f0e8`), moss green headings (`#3c4f2c`), teal (`#2a8f8f`) as signature accent | Warm and distinctive; avoids the cold neutrals common to tech portfolios |
| Teal usage | Accent only — CTAs, interactive states, labels, thin rules. Never decorative fills or section backgrounds | Restraint gives it signal value; overuse would dilute it |
| Typography | Cormorant Garamond (headings), Jost 300 (body), DM Mono (labels/metadata) | Editorial warmth (Garamond), readable lightness (Jost), technical precision without overclaiming (DM Mono) |
| Shape language | No sharp corners. Radius tokens from `--r-sm` (8px) to `--r-pill` (9999px). Elliptical `clip-path` on section transitions | Consistent with the organic, warm aesthetic; avoids the boxy rigidity of an earlier iteration |
| Botanical elements | Watercolour-style SVG filter technique — layered translucent shapes with blur and displacement, never precise outlines | Plants are personal and specific; the watercolour technique is atmospheric, not illustrative |
| Animation | Scroll reveals at 0.7s with natural deceleration; hover lifts at –2 to –4px | Motion feels slow and organic — unhurried, not performative |

---

## 5. Edge Cases and Assumptions

### Edge Cases

| ID  | Edge Case | Handling Strategy |
|-----|-----------|-------------------|
| EC1 | User has JavaScript disabled | Core content (bio, project descriptions, contact info) must be readable without JS. Animations and theme toggle degrade gracefully. |
| EC2 | User visits on a very small mobile screen (< 375px) | Layout tested to 375px minimum. Below this, some degradation is acceptable; it is not a target viewport. |
| EC3 | GitHub repo linked from a project card is private or deleted | Links should be checked as part of any content update. No automated handling — this is an editorial responsibility. |
| EC4 | User is on a system with `prefers-reduced-motion` set | All CSS animations and JS-driven transitions must respect `prefers-reduced-motion: reduce`. Scroll reveals and hover transitions should resolve immediately rather than animate. |

### Assumptions

- The primary audience is hiring managers and recruiters for senior PM roles in the UK. All content and prioritisation decisions are evaluated through this lens first.
- Visitors arrive via a direct URL shared on a CV, LinkedIn, or in an application — not primarily via search.
- The site is maintained by a single author (Christine) with AI tooling support. Decisions about content, copy, and iteration do not require a review or sign-off process.
- No backend is required. All interactivity is client-side. Contact is handled via direct links, not a form submission.

---

## 6. Success Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Time to assess fit | A hiring manager can understand role, seniority, and focus area without scrolling or clicking. | Under 60 seconds from landing. |
| GitHub discoverability | Visitors who click a project card can reach the README and PRD without additional navigation. | 100% of project cards link directly to the repo. |
| Documentation completeness | Each GitHub project repo includes a README and PRD written for a non-developer audience. | All live projects at launch. |
| Accessibility compliance | Site meets WCAG 2.1 AA baseline on all pages. | No AA-level failures on audit. |
| Design system adoption | All future portfolio artifacts (case studies, new project pages) use the design system tokens without deviation. | 100% compliance on new artifacts. |

---

## 7. Dependencies

- **Netlify** — hosting and deployment
- **GitHub** — source control and repo hosting for project documentation
- **Google Fonts** — Cormorant Garamond, Jost, DM Mono (loaded via CDN, no local hosting)
- **No npm dependencies** — intentional; vanilla stack only

---

## 8. Risks and Mitigations

| Risk | Impact | Mitigation Strategy |
|------|--------|---------------------|
| Design drift across projects | Medium | Design tokens are defined once in `styles.css` and reused across all components. All new artifacts should draw from the same token set rather than introducing one-off values. |
| Content becoming stale (outdated projects, old job titles) | High | Treat the portfolio as a live product. Review content at the start of each active job search sprint. |
| Blog section creating a negative signal if it remains empty | Medium | A "coming soon" placeholder is in place. Risk reduces as content is published — prioritise a first post before sharing the URL widely. |
| Mobile experience not fully optimised | Low–Medium | Current implementation is functional but not deeply tested. Scheduled as a future iteration — not a launch blocker. |
| Over-reliance on AI tooling creating a gap if asked to reproduce work manually | Low | AI is a collaborator, not a replacement. PRDs, user stories, and strategic decisions are authored by Christine; AI assists with drafting and iteration. This should be communicated clearly in interviews. |

---

## 9. Future Iterations

The following are known gaps or planned improvements that are out of scope for the current version but will be addressed in future iterations.

- **CMS integration**: Publishing blog posts, case studies, and other long-form content currently requires direct code edits. A CMS will be introduced to support content authoring without touching the codebase — enabling faster publishing cadence and making the site maintainable as written content grows.
- **Analytics**: There is currently no visibility into whether visitors are reaching the GitHub repos, how long they spend on the site, or which projects attract the most interest. A lightweight analytics solution will be evaluated in a future iteration, with a preference for low-cost or free tooling given current constraints.

---

## 10. Open Questions

These questions are intended for stakeholder review and will shape future iterations. They are left open deliberately — this PRD is a living document.

1. **SEO**: The site is currently not optimised for search. Given that the primary acquisition channel is direct links (CV, LinkedIn), is organic search worth investing in — and if so, what is the minimum viable SEO baseline?

2. **Mobile experience refinement**: The current mobile implementation is functional but not deeply tested. What specific mobile use cases should be prioritised — and is there a particular device or viewport range where experience should be tested more rigorously?

3. **Design system versioning**: As the design system evolves across multiple projects, how should changes be tracked and communicated? Should breaking changes (e.g. a colour token rename) be versioned, and if so, what is a lightweight process for this that doesn't add overhead?
