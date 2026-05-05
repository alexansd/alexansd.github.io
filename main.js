// ===================================================
// AWARE PARENTS — main.js
// ===================================================

// Hamburger / Nav Overlay
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navOverlay   = document.getElementById('navOverlay');
const navClose     = document.getElementById('navClose');
const navBackdrop  = document.getElementById('navBackdrop');

function openNav() {
  navOverlay.classList.add('open');
  navBackdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navOverlay.classList.remove('open');
  navBackdrop.classList.remove('show');
  document.body.style.overflow = '';
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', openNav);
if (navClose)     navClose.addEventListener('click', closeNav);
if (navBackdrop)  navBackdrop.addEventListener('click', closeNav);

// Close nav on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeNav();
});

// Scroll-reveal for cards and sections
const revealEls = document.querySelectorAll(
  '.topic-card, .stat-card, .intro-inner, .callout, .tip-item, .inner-content h2, .inner-content p'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// Stagger topic cards
document.querySelectorAll('.topic-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});

// Highlight active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) link.classList.add('active');
  else link.classList.remove('active');
});
