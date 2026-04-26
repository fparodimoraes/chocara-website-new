// ── Lenis smooth scroll ────────────────────────────────────
let lenis = null;

// Wait for Lenis to load before initializing
if (typeof Lenis !== 'undefined') {
  lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
} else {
  // Fallback if Lenis fails to load
  console.warn('Lenis smooth scroll library failed to load');
}

// ── Parallax hero effect ───────────────────────────────────
const heroImage = document.querySelector('.hero__image');
if (heroImage) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxOffset = scrollY * 0.4;
    heroImage.style.transform = `translateY(${parallaxOffset}px) scale(1.05)`;
  }, { passive: true });
}

const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
const navLinkItems = navLinksContainer ? navLinksContainer.querySelectorAll('a') : [];

// ── Hamburger menu ──────────────────────────────────────────
if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinkItems.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768 && navbar && menuToggle) {
      navbar.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && navbar && menuToggle) {
    navbar.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// ── Effect 2: Navbar scroll shrink + dynamic strip offset ──
function syncNavbarState() {
  if (!navbar) return;
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 60);
  const navbarHeight = Math.round(navbar.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
}

window.addEventListener('scroll', syncNavbarState, { passive: true });
window.addEventListener('resize', syncNavbarState, { passive: true });
syncNavbarState();

// ── Effect 1: Scroll-reveal (Intersection Observer) ─────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-group').forEach((el) => {
  revealObserver.observe(el);
});

// ── Effect 10: Active nav indicator on scroll ───────────────
const sections = document.querySelectorAll('section[id], header[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinkItems.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('nav-active', href === `#${id}`);
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((s) => sectionObserver.observe(s));
