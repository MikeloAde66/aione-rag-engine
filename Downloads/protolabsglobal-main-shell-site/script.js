// Protolabs Global — single-view shell
// No routing, no framework state — plain DOM wiring only, per spec.

// ---------- modular cover scene ----------
// The default scene's image + all cover copy live in coverConfig.json,
// not here — see loadCoverConfig() below. A monthly swap only ever
// touches that JSON file; nothing in this script or index.html changes.
//
// A scene is either:
//   - a real photo (`image` set) — shown clean, full-bleed, no procedural
//     effects layered on top of it; or
//   - a procedural backdrop (no `image`) — twinkling stars + a drifting
//     nebula gradient, useful for a month with no photo asset ready yet.
const COVER_SCENES = {
  default: {
    label: 'Cosmic Creator (populated from coverConfig.json at load)',
    image: null,
  },
  proceduralFallback: {
    label: 'Procedural nebula (no photo asset)',
    nebulaA: '#22d3ee',
    nebulaB: '#6366f1',
    nebulaC: '#0ea5e9',
    starCount: 140,
  },
};

const ACTIVE_SCENE = 'default';

function applyCoverScene(sceneId) {
  const scene = COVER_SCENES[sceneId] || COVER_SCENES.default;
  const sceneEl = document.getElementById('coverScene');
  const starfieldEl = document.getElementById('starfield');
  const nebulaEl = document.getElementById('nebulaLayer');
  const glowEl = document.getElementById('horizonGlow');
  sceneEl.dataset.scene = sceneId in COVER_SCENES ? sceneId : 'default';

  if (scene.image) {
    // Real photo, shown clean — no procedural effects layered on top of it.
    sceneEl.style.backgroundImage = `url('${scene.image}')`;
    starfieldEl.innerHTML = '';
    starfieldEl.style.display = 'none';
    nebulaEl.style.display = 'none';
    glowEl.style.display = 'none';
    return;
  }

  sceneEl.style.backgroundImage = 'none';
  starfieldEl.style.display = '';
  nebulaEl.style.display = '';
  glowEl.style.display = '';
  sceneEl.style.setProperty('--nebula-a', scene.nebulaA);
  sceneEl.style.setProperty('--nebula-b', scene.nebulaB);
  sceneEl.style.setProperty('--nebula-c', scene.nebulaC);

  starfieldEl.innerHTML = '';
  for (let i = 0; i < scene.starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = (0.6 + Math.random() * 1.6).toFixed(2);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    star.style.top = `${(Math.random() * 100).toFixed(2)}%`;
    star.style.animationDuration = `${(2 + Math.random() * 4).toFixed(2)}s`;
    star.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
    starfieldEl.appendChild(star);
  }
}

// ---------- load cover config (image + copy) ----------
// The one file a monthly swap touches: backgroundImage, editionTag, and
// the four coverlines (title/sub/action). UI structure and behavior stay
// exactly as they are regardless of what's in here.
function renderCoverlines(coverlines) {
  const listEl = document.getElementById('coverlineList');
  listEl.innerHTML = '';
  coverlines.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'coverline';

    const a = document.createElement('a');
    if (item.action && item.action.type === 'link') {
      a.href = item.action.href;
      if (item.action.newTab) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    } else if (item.action && item.action.type === 'focus') {
      // Points at a real panel already on this page (Radio Central) —
      // scrolls to and highlights it instead of opening a demo modal
      // that would just describe something already in view.
      a.href = '#';
      a.dataset.focus = item.action.target;
    } else {
      a.href = '#';
      a.dataset.overlay = item.action ? item.action.key : '';
    }

    const title = document.createElement('span');
    title.className = 'coverline-title';
    title.textContent = item.title;

    const sub = document.createElement('span');
    sub.className = 'coverline-sub';
    sub.textContent = item.sub;

    a.appendChild(title);
    a.appendChild(sub);
    li.appendChild(a);
    listEl.appendChild(li);
  });
}

async function loadCoverConfig() {
  try {
    const res = await fetch('coverConfig.json');
    if (!res.ok) throw new Error(`coverConfig.json responded ${res.status}`);
    const config = await res.json();

    document.getElementById('editionTag').textContent = config.editionTag || '';
    renderCoverlines(Array.isArray(config.coverlines) ? config.coverlines : []);

    COVER_SCENES.default.image = config.backgroundImage || null;
    applyCoverScene(COVER_SCENES.default.image ? 'default' : 'proceduralFallback');
  } catch (err) {
    console.warn('coverConfig.json failed to load, falling back to the procedural scene:', err);
    applyCoverScene('proceduralFallback');
  }
}

loadCoverConfig();

// ---------- radio spectrum (decorative bars, not real audio analysis) ----------
(function spectrum() {
  const el = document.getElementById('radioSpectrum');
  const BARS = 24;
  for (let i = 0; i < BARS; i++) {
    const bar = document.createElement('div');
    bar.className = 'spectrum-bar';
    bar.style.animationDelay = `${(Math.random() * 1.2).toFixed(2)}s`;
    bar.style.animationDuration = `${(0.9 + Math.random() * 0.8).toFixed(2)}s`;
    el.appendChild(bar);
  }
})();

// ---------- footer: real Earth time + real Kali Yuga year ----------
// Kali Yuga: a 432,000-year cycle in Hindu cosmology, reckoned from 3102
// BCE — the same real, public calendrical formula used elsewhere across
// Protolabs Global's products (currentYear - (-3102)), not an invented number.
(function footerMeta() {
  const earthEl = document.getElementById('footerEarthTime');
  const kaliEl = document.getElementById('footerKaliYear');
  const KALI_YUGA_START_YEAR = -3102;

  function tick() {
    const now = new Date();
    earthEl.textContent = now.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
    kaliEl.textContent = (now.getFullYear() - KALI_YUGA_START_YEAR).toLocaleString();
  }
  tick();
  setInterval(tick, 1000);
})();

// ---------- radio play/pause (visual toggle only — no audio is wired up) ----------
let radioPlaying = false;
function setRadioPlaying(next) {
  radioPlaying = next;
  const btn = document.getElementById('radioPlayBtn');
  btn.textContent = radioPlaying ? '❚❚' : '▶';
  btn.setAttribute('aria-label', radioPlaying ? 'Pause' : 'Play');
}
document.getElementById('radioPlayBtn').addEventListener('click', () => setRadioPlaying(!radioPlaying));

// ---------- focus-panel (Radio Central coverline — real panel, not a modal) ----------
// Scrolls the target panel into view, gives it a brief pulse highlight so
// the jump reads as intentional, and starts the (still visual-only) play
// state — this doesn't claim a real audio stream started; setRadioPlaying
// only ever flips the icon, same as clicking the play button directly.
function focusPanel(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('panel-pulse');
  setTimeout(() => el.classList.remove('panel-pulse'), 1400);
  setRadioPlaying(true);
}

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-focus]');
  if (!trigger) return;
  e.preventDefault();
  focusPanel(trigger.dataset.focus);
});

// ---------- demo overlays ----------
// `cta` is only set on entries with a real, confirmed destination — see
// the note above Star Tracker's entry. Never fabricate a subdomain that
// doesn't actually resolve; an entry with no confirmed destination just
// omits `cta` and stays teaser-only until one exists.
const OVERLAY_CONTENT = {
  'pricing': {
    badge: 'DEMO MODE',
    title: 'Pricing',
    body: 'Pricing isn’t wired up in this shell yet — this is a static demo placeholder.',
  },
  'login': {
    badge: 'DEMO MODE',
    title: 'Log In',
    body: 'Account sign-in isn’t wired up in this shell yet — this is a static demo placeholder.',
  },
  'signup': {
    badge: 'DEMO MODE',
    title: 'Sign Up',
    body: 'Account creation isn’t wired up in this shell yet — this is a static demo placeholder.',
  },
  'view-controls': {
    badge: 'DEMO MODE',
    title: 'View controls',
    body: 'Layout view switching (grid/list) is a placeholder in this demo shell — no alternate views are wired up yet.',
  },
  'star-tracker': {
    badge: 'DEMO MODE · 60% PROTOTYPE',
    title: 'Star Tracker',
    body: 'Real-time sky map with live SGP4 ISS tracking and observatory-grade horizon plotting. Full capabilities live on the dedicated Star Tracker app — this card is a preview, not the real thing.',
    // Now live — points straight at the real app instead of the mailto
    // placeholder, same real domain this file's own README already
    // documents for every other card's link (aione.protolabsglobal.com,
    // confirmed live). hostname-based rather than a fixed URL so this
    // same file works both previewed locally (this shell served on
    // :5500 + `next dev` on the Star Tracker app on :3000) and once
    // this shell itself is deployed for real visitors.
    cta: {
      label: 'Open Star Tracker',
      href: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000'
        : 'https://aione.protolabsglobal.com',
    },
  },
  'kali-ai': {
    badge: 'DEMO MODE · 60% PROTOTYPE',
    title: 'Kali AI',
    body: 'A conversational AI woven into Ai One’s core experience, grounded in real ingested knowledge. Kali lives inside the Ai One app — there’s no separate Kali subdomain.',
    // No cta: kali.protolabsglobal.com doesn't exist (confirmed via DNS
    // lookup before shipping this) — see conversation for the open
    // question on where this CTA should actually point.
  },
  'radio-central': {
    badge: 'DEMO MODE · 60% PROTOTYPE',
    title: 'Radio Central',
    body: 'Curated live audio streams with a real-time spectrum visualizer and a scheduled program lineup. Radio Central lives inside the Ai One app — there’s no separate Radio Central subdomain.',
    // No cta: radiocentral.protolabsglobal.com doesn't exist either
    // (same DNS check) — same open question as Kali AI above.
  },
  'social': {
    badge: 'DEMO MODE',
    title: 'Social links',
    body: 'Placeholder — no real social accounts are linked yet in this demo shell.',
  },
};

(function overlays() {
  const overlay = document.getElementById('overlay');
  const overlayBadge = document.getElementById('overlayBadge');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayBody = document.getElementById('overlayBody');
  const overlayCta = document.getElementById('overlayCta');
  const closeBtn = document.getElementById('overlayClose');

  function open(key) {
    const content = OVERLAY_CONTENT[key];
    if (!content) return;
    overlayBadge.textContent = content.badge || 'DEMO MODE';
    overlayTitle.textContent = content.title;
    overlayBody.textContent = content.body;

    if (content.cta) {
      overlayCta.textContent = content.cta.label;
      overlayCta.href = content.cta.href;
      if (content.cta.newTab) {
        overlayCta.target = '_blank';
        overlayCta.rel = 'noopener noreferrer';
      } else {
        overlayCta.removeAttribute('target');
        overlayCta.removeAttribute('rel');
      }
      overlayCta.style.display = '';
    } else {
      overlayCta.style.display = 'none';
    }

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  // Delegated (not queried-and-bound-once) so this also covers the
  // coverline links, which don't exist yet until loadCoverConfig() renders
  // them — no ordering dependency between the two scripts.
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-overlay]');
    if (!trigger) return;
    e.preventDefault();
    open(trigger.getAttribute('data-overlay'));
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
