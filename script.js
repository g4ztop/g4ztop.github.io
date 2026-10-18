document.addEventListener('DOMContentLoaded', () => {

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target: video, isIntersecting }) => {
      if (isIntersecting && video.dataset.src) {
        video.src = video.dataset.src;
        delete video.dataset.src;
        video.load();
      }
      if (!isIntersecting || reducedMotion.matches || document.hidden || document.body.classList.contains('lightbox-open')) video.pause();
      else video.play().catch(() => {});
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('video[data-loop-preview]').forEach(video => videoObserver.observe(video));
  const pausePreviews = () => document.querySelectorAll('video[data-loop-preview]').forEach(video => {
    if (document.hidden || reducedMotion.matches) video.pause();
  });
  document.addEventListener('visibilitychange', pausePreviews);
  reducedMotion.addEventListener('change', pausePreviews);

  // ─── Lazy-load images ───────────────────────────────────────────
  const images = document.querySelectorAll('.card-img img, .proj-hero img, .proj-gallery img, .ig-item img');

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => {
        img.classList.add('image-unavailable');
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
    document.querySelectorAll(
      '.proj-gallery img, .proj-gallery video, .proj-gallery iframe, .ig-item img'
    )
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
      <div class="lightbox-count"></div>
      <a class="lightbox-link" target="_blank" rel="noopener" hidden>View on Instagram &#8599;</a>`;
    document.body.appendChild(overlay);

    const stage  = overlay.querySelector('.lightbox-stage');
    const count  = overlay.querySelector('.lightbox-count');
    const link   = overlay.querySelector('.lightbox-link');
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
        video.src = source.currentSrc || source.src || source.dataset.src;
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

      // Archive posters stand in for a video; play that instead of the still
      if (source.dataset.video) {
        const video = document.createElement('video');
        video.src = source.dataset.video;
        video.poster = source.currentSrc || source.src;
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.playsInline = true;
        return video;
      }

      const img = document.createElement('img');
      img.src = source.currentSrc || source.src;
      img.alt = source.alt || '';
      return img;
    };

    const show = i => {
      current = (i + galleryMedia.length) % galleryMedia.length;
      const source = galleryMedia[current];
      stage.replaceChildren(buildMedia(source));
      count.textContent = single ? '' : `${current + 1} / ${galleryMedia.length}`;

      // Archive items carry the post they came from
      const post = source.dataset.post;
      link.hidden = !post;
      if (post) link.href = post;
    };

    // Inline loops would keep moving behind the blurred backdrop
    const inlineVideos = galleryMedia.filter(el => el.tagName.toLowerCase() === 'video');

    const open = i => {
      lastFocus = document.activeElement;
      show(i);
      overlay.hidden = false;
      document.body.classList.add('lightbox-open');
      document.querySelectorAll('body > nav, body > main, body > footer, body > .mobile-header').forEach(el => { el.inert = true; });
      inlineVideos.forEach(v => v.pause());
      overlay.querySelector('.lightbox-close').focus();
    };

    const close = () => {
      overlay.hidden = true;
      document.body.classList.remove('lightbox-open');
      document.querySelectorAll('body > nav, body > main, body > footer, body > .mobile-header').forEach(el => { el.inert = false; });
      stage.replaceChildren();
      inlineVideos.forEach(v => {
        const rect = v.getBoundingClientRect();
        if (!reducedMotion.matches && !document.hidden && rect.bottom > 0 && rect.top < innerHeight) v.play().catch(() => {});
      });
      if (lastFocus) lastFocus.focus();
    };

    galleryMedia.forEach((el, i) => {
      if (['iframe', 'video'].includes(el.tagName.toLowerCase())) {
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
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', `Expand ${el.alt || 'media'}`);
      el.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(i); }
      });
      el.addEventListener('click', () => open(i));
    });

    overlay.addEventListener('click', e => {
      if (e.target.closest('.lightbox-next')) show(current + 1);
      else if (e.target.closest('.lightbox-prev')) show(current - 1);
      else if (!e.target.closest('.lightbox-stage')) close();
    });

    document.addEventListener('keydown', e => {
      if (overlay.hidden) return;
      if (e.key === 'Tab') {
        const focusable = [...overlay.querySelectorAll('button, a, video[controls], iframe')].filter(el => !el.hidden && el.getClientRects().length);
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight' && !single) show(current + 1);
      else if (e.key === 'ArrowLeft' && !single) show(current - 1);
    });
  }

  // ─── Mobile burger menu ─────────────────────────────────────────
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    const setMenu = isOpen => {
      burger.classList.toggle('open', isOpen);
      mobileMenu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-controls', 'mobileMenu');
      mobileMenu.inert = !isOpen;
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    };
    setMenu(false);
    burger.addEventListener('click', () => {
      setMenu(!burger.classList.contains('open'));
    });

    // Close menu when a link is tapped
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        setMenu(false);
      });
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && burger.classList.contains('open')) { setMenu(false); burger.focus(); }
    });
  }

});
