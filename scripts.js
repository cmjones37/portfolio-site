/* ═══════════════════════════════════════════════════════════════
   Christine Jones — Portfolio Scripts
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const COMPONENT_MAP = {
    nav: 'components/nav.html',
    hero: 'components/hero.html',
    about: 'components/about.html',
    projects: 'components/projects.html',
    blog: 'components/blog.html',
    'contact-footer': 'components/contact-footer.html'
  };

  async function loadComponents() {
    const mounts = Array.from(document.querySelectorAll('[data-component]'));
    if (!mounts.length) return;

    await Promise.all(
      mounts.map(async (mount) => {
        const key = mount.getAttribute('data-component');
        const url = COMPONENT_MAP[key];
        if (!url) return;

        try {
          const response = await fetch(url, { cache: 'no-store' });
          if (!response.ok) throw new Error('HTTP ' + response.status);
          mount.innerHTML = await response.text();
        } catch (error) {
          console.error('Failed loading component:', key, url, error);
          mount.innerHTML =
            '<div style="padding:1rem;color:#b00020;">Could not load "' +
            key +
            '" component. If you are opening this file directly, run a local server.</div>';
        }
      })
    );
  }

  function initThemeToggle() {
    const themeBtn = document.getElementById('themeBtn');
    const html = document.documentElement;
    let isDark = false; // site defaults to light

    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      html.setAttribute('data-theme', 'dark');
      if (themeBtn) themeBtn.textContent = '☀';
      isDark = true;
    } else {
      html.setAttribute('data-theme', 'light');
      if (themeBtn) themeBtn.textContent = '☾';
    }

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        isDark = !isDark;
        html.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeBtn.textContent = isDark ? '☀' : '☾';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }
  }

  function initScrollReveal() {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  /* ── PROJECT EXPAND / COLLAPSE ─────────────────────────────── */
  /**
   * Toggle a project card's detail panel.
   * @param {HTMLButtonElement} btn - The expand button clicked.
   */
  function toggleProject(btn) {
    const details = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');
    const label = btn.querySelector('span:first-child');

    if (!details) return;

    const isOpen = details.classList.toggle('open');
    if (label) label.textContent = isOpen ? 'Hide Details' : 'View Details';
    if (arrow) arrow.textContent = isOpen ? '↑' : '↓';

    // Smooth scroll into view when opening
    if (isOpen) {
      setTimeout(() => {
        details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }

  // Expose to inline onclick attributes
  window.toggleProject = toggleProject;

  function initNavBehavior() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length && navLinks.length) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const id = e.target.getAttribute('id');
              navLinks.forEach((a) => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + id);
              });
            }
          });
        },
        { threshold: 0.45 }
      );

      sections.forEach((s) => sectionObserver.observe(s));
    }

    const nav = document.querySelector('nav');
    if (nav) {
      window.addEventListener(
        'scroll',
        () => {
          nav.style.boxShadow =
            window.scrollY > 10 ? '0 2px 20px var(--shadow)' : 'none';
        },
        { passive: true }
      );
    }
  }

  async function boot() {
    await loadComponents();
    initThemeToggle();
    initScrollReveal();
    initNavBehavior();
  }

  boot();
})();
