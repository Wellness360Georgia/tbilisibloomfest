// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal, .poster').forEach((el) => {
  const section = el.closest('.section, section, .stats-strip, .speakers, .exp-grid, .visit, .prev-content') || el.parentElement;
  const siblings = section ? [...section.querySelectorAll('.reveal')] : [el];
  const localIndex = siblings.indexOf(el);
  el.style.transitionDelay = `${Math.min(localIndex, 6) * 90}ms`;
  io.observe(el);
});

// Nav behaviour: transparent on hero, solid after, hide on scroll down
const nav = document.querySelector('.nav');
const hero = document.querySelector('.hero');
let lastScroll = 0;

function updateNav() {
  const current = window.pageYOffset;
  const heroBottom = hero ? hero.offsetHeight - 80 : 0;

  // Transparent style while over hero
  if (current < heroBottom) {
    nav.classList.add('on-hero');
  } else {
    nav.classList.remove('on-hero');
  }

  // Hide on scroll down, show on scroll up
  if (current > lastScroll && current > 300) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScroll = current;
}

updateNav();
window.addEventListener('scroll', updateNav, { passive: true });
