const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
const navLinkItems = navLinksContainer ? navLinksContainer.querySelectorAll('a') : [];

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
