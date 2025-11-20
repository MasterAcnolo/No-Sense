const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('active');
      observer.unobserve(el);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-animation]').forEach(el => {
  el.classList.add(el.dataset.animation);
  observer.observe(el);
});
