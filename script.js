(() => {
  const hero = document.querySelector('.reveal');
  if (!hero) return;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hero.classList.add('is-visible');
          observer.disconnect();
        }
      });
    }, { threshold: 0.08 });
    observer.observe(hero);
  } else {
    hero.classList.add('is-visible');
  }
  document.querySelectorAll('.action').forEach((link) => {
    link.addEventListener('click', () => {
      link.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(.975)' }, { transform: 'scale(1)' }],
        { duration: 240, easing: 'ease-out' }
      );
    });
  });
})();