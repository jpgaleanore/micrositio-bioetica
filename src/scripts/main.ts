// Interacciones del micrositio: tema, menú móvil, progreso, pestañas y animaciones.

function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* almacenamiento no disponible */
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initScrollUi() {
  const progress = document.getElementById('progress');
  const toTop = document.getElementById('toTop');
  if (!progress || !toTop) return;
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    toTop.classList.toggle('show', h.scrollTop > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initScrollSpy() {
  const links = document.getElementById('navLinks');
  if (!links || !('IntersectionObserver' in window)) return;
  const anchors = Array.from(links.querySelectorAll<HTMLAnchorElement>('a'));
  const sections = anchors
    .map((a) => document.querySelector<HTMLElement>(a.getAttribute('href') || ''))
    .filter((s): s is HTMLElement => s !== null);
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  sections.forEach((s) => spy.observe(s));
}

function initTabs() {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((tabs) => {
    const buttons = tabs.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const panels = tabs.querySelectorAll<HTMLElement>('[role="tabpanel"]');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.setAttribute('aria-selected', 'false'));
        panels.forEach((p) => (p.hidden = true));
        btn.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(btn.getAttribute('aria-controls') || '');
        if (panel) panel.hidden = false;
      });
    });
  });
}

function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('.card, .actor, .principle, .step, .insight, .vs-item, .callout');
  targets.forEach((t) => t.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  targets.forEach((t) => io.observe(t));
}

initTheme();
initMobileMenu();
initScrollUi();
initScrollSpy();
initTabs();
initReveal();
