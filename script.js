// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal, .poster').forEach((el, i) => {
  // Stagger reveals inside the same section
  const section = el.closest('.section') || el.parentElement;
  const siblings = section ? [...section.querySelectorAll('.reveal')] : [el];
  const localIndex = siblings.indexOf(el);
  el.style.transitionDelay = `${Math.min(localIndex, 6) * 90}ms`;
  io.observe(el);
});

// Hide nav on scroll down, show on scroll up
let lastScroll = 0;
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  const current = window.pageYOffset;
  if (current > lastScroll && current > 200) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScroll = current;
}, { passive: true });
