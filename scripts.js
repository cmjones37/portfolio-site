/* ═══════════════════════════════════════════════════════════════
   Christine Jones — Portfolio Scripts
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── THEME TOGGLE ──────────────────────────────────────────── */
  const themeBtn = document.getElementById('themeBtn');
  const html = document.documentElement;
  let isDark = false; // site defaults to light

  // Respect saved preference
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

  /* ── SCROLL REVEAL ─────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Once revealed, stop observing (performance)
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
    revealObserver.observe(el);
  });

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

  /* ── CONTACT FORM ──────────────────────────────────────────── */
  function handleSubmit() {
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    // Form isn't wired to a backend yet — inform politely
    alert(
      'Thanks for reaching out, ' + name + '! ' +
      'This form isn\'t connected to a backend yet — please email ' +
      'hello@christinejones.pm directly.'
    );
  }

  window.handleSubmit = handleSubmit;

  /* ── NAV: ACTIVE LINK HIGHLIGHT ON SCROLL ──────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

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

  /* ── NAV: SUBTLE SCROLL SHADOW ─────────────────────────────── */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow =
        window.scrollY > 10
          ? '0 2px 20px var(--shadow)'
          : 'none';
    }, { passive: true });
  }

})();
