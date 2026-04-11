document.addEventListener('DOMContentLoaded', () => {

  // ─── Lazy-load images ───────────────────────────────────────────
  const images = document.querySelectorAll('.card-img img');

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => {
        // Image missing — just keep the background colour visible
        img.style.display = 'none';
      });
      // Trigger load (src already set in HTML; this handles cached images too)
      if (img.complete && img.naturalWidth) {
        img.classList.add('loaded');
      }
      imgObserver.unobserve(img);
    });
  }, { rootMargin: '200px' });

  images.forEach(img => imgObserver.observe(img));

  // ─── Mobile burger menu ─────────────────────────────────────────
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is tapped
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

});
