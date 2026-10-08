const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('[data-reveal]');

if (!reduceMotion && 'IntersectionObserver' in window && revealTargets.length > 0) {
  document.documentElement.classList.add('motion-ready');

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 5% 0px' });

  revealTargets.forEach((element) => observer.observe(element));
}
