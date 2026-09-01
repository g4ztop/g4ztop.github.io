document.addEventListener('DOMContentLoaded', () => {

  // ─── Lazy-load images ───────────────────────────────────────────
  const images = document.querySelectorAll('.card-img img, .proj-hero img, .proj-gallery img');

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

  // ─── Gallery lightbox ───────────────────────────────────────────
  const galleryMedia = Array.from(
    document.querySelectorAll('.proj-gallery img, .proj-gallery video, .proj-gallery iframe')
  );

  if (galleryMedia.length) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Media viewer');
    overlay.hidden = true;
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">&#8592;</button>
      <div class="lightbox-stage"></div>
      <button class="lightbox-nav lightbox-next" aria-label="Next">&#8594;</button>
      <div class="lightbox-count"></div>`;
    document.body.appendChild(overlay);

    const stage  = overlay.querySelector('.lightbox-stage');
    const count  = overlay.querySelector('.lightbox-count');
    const single = galleryMedia.length < 2;
    let current  = 0;
    let lastFocus = null;

    overlay.querySelectorAll('.lightbox-nav').forEach(btn => { btn.hidden = single; });

    // Embeds autoplay with sound in the lightbox — the click is the user gesture
    // that permits it — and keep any start time the inline embed was given.
    const embedSrc = src => {
      const url = new URL(src, location.href);
      url.searchParams.set('autoplay', '1');
      url.searchParams.set('rel', '0');
      url.searchParams.delete('mute');
      return url.toString();
    };

    const buildMedia = source => {
      const tag = source.tagName.toLowerCase();

      if (tag === 'video') {
        const video = document.createElement('video');
        video.src = source.currentSrc || source.src;
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.playsInline = true;
        return video;
      }

      if (tag === 'iframe') {
        const frame = document.createElement('div');
        frame.className = 'lightbox-frame';
        const embed = document.createElement('iframe');
        embed.src = embedSrc(source.src);
        embed.title = source.title || 'Video';
        embed.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        embed.allowFullscreen = true;
        frame.appendChild(embed);
        return frame;
      }

      const img = document.createElement('img');
      img.src = source.currentSrc || source.src;
      img.alt = source.alt || '';
      return img;
    };

    const show = i => {
      current = (i + galleryMedia.length) % galleryMedia.length;
      stage.replaceChildren(buildMedia(galleryMedia[current]));
      count.textContent = single ? '' : `${current + 1} / ${galleryMedia.length}`;
    };

    // Inline loops would keep moving behind the blurred backdrop
    const inlineVideos = galleryMedia.filter(el => el.tagName.toLowerCase() === 'video');

    const open = i => {
      lastFocus = document.activeElement;
      show(i);
      overlay.hidden = false;
      document.body.classList.add('lightbox-open');
      inlineVideos.forEach(v => v.pause());
      overlay.querySelector('.lightbox-close').focus();
    };

    const close = () => {
      overlay.hidden = true;
      document.body.classList.remove('lightbox-open');
      stage.replaceChildren();
      inlineVideos.forEach(v => { v.play().catch(() => {}); });
      if (lastFocus) lastFocus.focus();
    };

    galleryMedia.forEach((el, i) => {
      if (el.tagName.toLowerCase() === 'iframe') {
        // An iframe swallows its own clicks, so give embeds an expand button
        const button = document.createElement('button');
        button.className = 'expand-media';
        button.type = 'button';
        button.setAttribute('aria-label', 'Expand video');
        button.innerHTML = '&#10530;';
        button.addEventListener('click', () => open(i));
        (el.closest('.gallery-item') || el.parentNode).appendChild(button);
        return;
      }
      el.classList.add('zoomable');
      el.addEventListener('click', () => open(i));
    });

    overlay.addEventListener('click', e => {
      if (e.target.closest('.lightbox-next')) show(current + 1);
      else if (e.target.closest('.lightbox-prev')) show(current - 1);
      else if (!e.target.closest('.lightbox-stage')) close();
    });

    document.addEventListener('keydown', e => {
      if (overlay.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight' && !single) show(current + 1);
      else if (e.key === 'ArrowLeft' && !single) show(current - 1);
    });
  }

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
