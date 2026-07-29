const G = id => document.getElementById(id);

/* ── LENIS SMOOTH PAGE SCROLL ── */
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 3.0,
    easing: (t) => 1 - Math.pow(1 - t, 5),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

/* ── LOADER: remove from DOM after animation ends ── */
const loader = document.getElementById('loader');
if (loader) {
  loader.addEventListener('animationend', (e) => {
    if (e.animationName === 'loader-fade-out') {
      loader.remove();
    }
  });
}

/* ── SMOOTH CURSOR (DESKTOPS > 1366px ONLY) ── */
const cursorEl = document.getElementById('custom-cursor');
if (cursorEl && window.matchMedia('(min-width: 1367px)').matches) {
  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      cursorEl.style.opacity = '1';
    }
  });

  document.addEventListener('mouseleave', () => {
    cursorEl.style.opacity = '0';
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    cursorEl.style.opacity = '1';
    isVisible = true;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.22;
    cursorY += (mouseY - cursorY) * 0.22;

    cursorEl.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

const panelData = {
  p1: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent run --task synthesize-ui' },
    { cls:'info', t:'[MODEL] Claude 3.7 Sonnet (thinking)' },
    { cls:'ok',   t:'[PROMPT] Reading 24 Figma frames' },
    { cls:'info', t:'[PARSE] Colors, gaps & typography' },
    { cls:'ok',   t:'[GEN] src/components/HeroCard.tsx' },
    { cls:'ok',   t:'[GEN] src/components/Navbar.tsx' },
    { cls:'ok',   t:'[TEST] React 19 Server Components OK' },
    { cls:'dim',  t:'──────────────────────────' },
    { cls:'ok',   t:'[DONE] Synthesized in 0.42s' },
  ]},
  p2: { type:'fade', lines:[
    { cls:'cmd',  t:'> npx @figma/code-connect sync' },
    { cls:'info', t:'[AUTH] Connecting Figma REST API' },
    { cls:'ok',   t:'[FETCH] 64 Styles & Design Tokens' },
    { cls:'warn', t:'[WARN] 2 token overrides detected' },
    { cls:'info', t:'[TRANSFORM] HSL -> CSS Variables' },
    { cls:'ok',   t:'[EMIT] styles/tokens.css (1.8 KB)' },
    { cls:'ok',   t:'[CHECK] WCAG 2.1 AAA Contrast OK' },
    { cls:'dim',  t:'Figma -> Codebase SYNC COMPLETE' },
  ]},
  p4: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> pnpm run build --filter=portfolio' },
    { cls:'info', t:'[TURBO] 14/14 packages cached' },
    { cls:'ok',   t:'[NEXT] Compiling /page ... (1.2s)' },
    { cls:'ok',   t:'[LINT] ESLint 9 + Biome 0 errors' },
    { cls:'ok',   t:'[TSC] Strict TypeScript check OK' },
    { cls:'ok',   t:'[VERCEL] Deploying to global edge' },
    { cls:'ok',   t:'[LIVE] https://aruneswaran.com' },
  ]},
  p5: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> systemctl status agent-cluster' },
    { cls:'info', t:'[NODE-01] Calicut Edge ........ 12ms' },
    { cls:'ok',   t:'[NODE-02] Tokyo Gateway ....... 48ms' },
    { cls:'ok',   t:'[GPU] NVIDIA H100 Tensor ...... 14%' },
    { cls:'ok',   t:'[VECTOR] Qdrant DB Index ...... OK' },
    { cls:'ok',   t:'[REDIS] Cache Hit Ratio: 99.4%' },
    { cls:'dim',  t:'Status: Operational (99.99%)' },
  ]},
  p7: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> npx lighthouse-ci collect' },
    { cls:'ok',   t:'[AUDIT] Performance Score: 100' },
    { cls:'info', t:'[LCP] Contentful Paint: 420ms' },
    { cls:'warn', t:'[WARN] 1 unused font asset flagged' },
    { cls:'info', t:'[FID] First Input Delay: 1.2ms' },
    { cls:'ok',   t:'[CLS] Layout Shift: 0.000' },
    { cls:'ok',   t:'[OPTIM] WebP 100% Lossless' },
    { cls:'ok',   t:'[BUNDLE] Initial Payload: 14.2 KB' },
  ]},
  p8: { type:'typewriter', lines:[
    { cls:'info', t:'[15:57:01] Agent-01 prompt ingested' },
    { cls:'info', t:'[15:57:02] Agent-02 token sync OK' },
    { cls:'ok',   t:'[15:57:04] Agent-04 deploy triggered' },
    { cls:'ok',   t:'[15:57:05] Agent-07 Lighthouse 100' },
    { cls:'info', t:'[15:57:07] Agent-11 security PASS' },
    { cls:'ok',   t:'[15:57:09] System state: STABLE' },
    { cls:'info', t:'[15:57:10] Listening for events...' },
  ]},
  p10: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> pnpm audit --prod' },
    { cls:'info', t:'[AUDIT] Scanning 248 node_modules' },
    { cls:'ok',   t:'[SAST] Zero vulnerabilities' },
    { cls:'ok',   t:'[HEADERS] HSTS & CSP enforced' },
    { cls:'ok',   t:'[AUTH] NextAuth.js v5 JWT OK' },
    { cls:'ok',   t:'[SANITY] Input sanitization OK' },
    { cls:'ok',   t:'[STATUS] Security Grade: AAA+' },
  ]},
  p11: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent prototype --frame=mobile' },
    { cls:'info', t:'[ANIM] Framer Motion 60fps spring' },
    { cls:'ok',   t:'[INTERACT] Drag & Card swipe OK' },
    { cls:'ok',   t:'[THEME] Dark/Light toggle tested' },
    { cls:'ok',   t:'[STORYBOOK] 18 stories built' },
    { cls:'ok',   t:'[PREVIEW] Interactive prototype' },
    { cls:'dim',  t:'Figma Specs -> Code ready' },
  ]},
};

/* ── TYPEWRITER ─────────────────────────────────────── */
function fitLines(container) {
  if (!container) return;
  while (container.firstElementChild && container.scrollHeight > container.clientHeight) {
    container.firstElementChild.remove();
  }
  container.scrollTop = container.scrollHeight;
}

function typewriterPanel(containerId, lines) {
  const container = G(containerId);
  if (!container) return;

  // Pre-fill a random portion of lines instantly so it looks mid-execution
  const preCount = Math.floor(lines.length * 0.55 + Math.random() * 2);
  for (let i = 0; i < Math.min(preCount, lines.length - 1); i++) {
    const { cls, t } = lines[i];
    const div = document.createElement('div');
    div.className = `t-line ${cls}`;
    div.textContent = t;
    container.appendChild(div);
    fitLines(container);
  }

  let li = Math.min(preCount, lines.length - 1);

  function nextLine() {
    if (li >= lines.length) {
      setTimeout(() => {
        container.innerHTML = '';
        li = 0;
        nextLine();
      }, 2800);
      return;
    }
    const { cls, t } = lines[li++];
    const div = document.createElement('div');
    div.className = `t-line ${cls}`;

    const cursor = document.createElement('span');
    cursor.className = 't-cursor';
    div.appendChild(cursor);
    container.appendChild(div);
    fitLines(container);

    let ci = 0;
    const speed = cls === 'cmd' ? 36 : 20;
    function tick() {
      if (ci < t.length) {
        cursor.insertAdjacentText('beforebegin', t[ci++]);
        fitLines(container);
        setTimeout(tick, speed + Math.random() * 18);
      } else {
        cursor.remove();
        fitLines(container);
        setTimeout(nextLine, cls === 'cmd' ? 200 : 70);
      }
    }
    tick();
  }
  nextLine();
}

/* ── FADE PANEL ─────────────────────────────────────── */
function fadeLine(data, delay) {
  const div = document.createElement('div');
  div.className = `t-line ${data.cls} fade-line`;
  div.style.animationDelay = `${delay}ms`;
  div.textContent = data.t;
  return div;
}

function fadePanel(containerId, lines) {
  const c = G(containerId);
  if (!c) return;
  lines.forEach((l, i) => {
    c.appendChild(fadeLine(l, i * 105));
    fitLines(c);
  });
}

function refreshFade(containerId, lines) {
  const c = G(containerId);
  if (!c) return;
  fitLines(c);
  const el = fadeLine(lines[Math.floor(Math.random() * lines.length)], 0);
  el.style.animationDelay = '0ms';
  c.appendChild(el);
  fitLines(c);
}

/* ── INIT ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const fadePanels = [];
  Object.entries(panelData).forEach(([id, cfg]) => {
    const linesId = id + '-lines';
    if (cfg.type === 'typewriter') {
      typewriterPanel(linesId, cfg.lines);
    } else {
      fadePanel(linesId, cfg.lines);
      fadePanels.push({ id: linesId, lines: cfg.lines });
    }
  });

  setInterval(() => {
    fadePanels.forEach(({ id, lines }) => {
      if (Math.random() > 0.45) refreshFade(id, lines);
    });
  }, 1400);

  /* Dot pulse */
  function startBlinking(d) {
    // Generate a unique interval for this dot between 2000ms and 3500ms
    const interval = 2000 + Math.random() * 1500;
    // Scale dim duration proportionally (~15% of interval)
    const dimDuration = interval * 0.15;

    function pulse() {
      d.style.opacity = '0.2';
      setTimeout(() => { d.style.opacity = '1'; }, dimDuration);
    }

    // Start with a random delay so they don't all pulse at the same time initially
    setTimeout(() => {
      pulse();
      setInterval(pulse, interval);
    }, Math.random() * interval);
  }

  document.querySelectorAll('.dot-active').forEach(d => startBlinking(d));
});
