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
if (heroImage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
    menuToggle.classList.toggle('menu-toggle--open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinkItems.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768 && navbar && menuToggle) {
      navbar.classList.remove('nav-open');
      menuToggle.classList.remove('menu-toggle--open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && navbar && menuToggle) {
    navbar.classList.remove('nav-open');
    menuToggle.classList.remove('menu-toggle--open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// ── Promo strip pause button ────────────────────────────────
const promoStrip = document.querySelector('.promo-strip');
const promoPause = document.querySelector('.promo-strip__pause');
const pauseIconSVG = `<svg viewBox="0 0 10 12" width="10" height="12" aria-hidden="true" focusable="false"><rect x="0" y="0" width="3" height="12" rx="1" fill="currentColor"/><rect x="7" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg>`;
const playIconSVG = `<svg viewBox="0 0 10 12" width="10" height="12" aria-hidden="true" focusable="false"><polygon points="0,0 10,6 0,12" fill="currentColor"/></svg>`;

if (promoPause && promoStrip) {
  promoPause.addEventListener('click', () => {
    const isPaused = promoStrip.classList.toggle('promo-strip--paused');
    promoPause.setAttribute('aria-pressed', String(isPaused));
    promoPause.setAttribute('aria-label', isPaused ? 'Reanudar mensaje' : 'Pausar mensaje');
    promoPause.innerHTML = isPaused ? playIconSVG : pauseIconSVG;
  });
}

// ── Effect 2: Navbar scroll shrink + dynamic strip offset ──
function syncNavbarState() {
  if (!navbar) return;
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 60);
  const navbarHeight = Math.round(navbar.getBoundingClientRect().height);
  const promoHeight = promoStrip
    ? Math.round(promoStrip.getBoundingClientRect().height)
    : 0;
  document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  document.documentElement.style.setProperty('--promo-height', `${promoHeight}px`);
  document.documentElement.style.setProperty('--anchor-offset', `${navbarHeight + promoHeight + 12}px`);
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

// ── Dynamic footer year ─────────────────────────────────────
const footerCopy = document.querySelector('.footer__copy');
if (footerCopy) {
  footerCopy.textContent = `© ${new Date().getFullYear()} ChocAra. Todos los derechos reservados.`;
}

// ── Product category carousels ──────────────────────────────
document.querySelectorAll('.product-card-new').forEach((card) => {
  const carousel = card.querySelector('.carousel');
  const track = card.querySelector('.carousel__track');
  const dots = card.querySelectorAll('.carousel__dot');
  const prevBtn = card.querySelector('.carousel__btn--prev');
  const nextBtn = card.querySelector('.carousel__btn--next');

  if (!track) return;

  // Replace broken images with a styled placeholder
  track.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      const placeholder = document.createElement('div');
      placeholder.className = 'carousel__placeholder';
      placeholder.textContent = img.closest('.product-card-new')
        ?.querySelector('h3')?.textContent ?? '';
      img.replaceWith(placeholder);
    });
  });

  const totalSlides = track.children.length;
  let current = 0;

  function goTo(index) {
    current = ((index % totalSlides) + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle('carousel__dot--active', i === current)
    );
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  // Touch / swipe support
  if (carousel) {
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      const delta = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 40) {
        goTo(delta > 0 ? current + 1 : current - 1);
      }
    }, { passive: true });
  }
});

// ── Image lightbox ───────────────────────────────────────────
(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('.lightbox__img');
  const closeBtn = lightbox?.querySelector('.lightbox__close');

  if (!lightbox || !lightboxImg) return;

  function openLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => lightbox.classList.add('lightbox--visible'));
    document.body.style.overflow = 'hidden';
    history.pushState({ lightbox: true }, '');
    closeBtn?.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('lightbox--visible');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.carousel__track img').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img));
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  closeBtn?.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('lightbox--visible')) closeLightbox();
  });

  window.addEventListener('popstate', () => {
    if (lightbox.classList.contains('lightbox--visible')) closeLightbox();
  });
}());
