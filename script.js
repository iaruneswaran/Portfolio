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

/* ── SMOOTH CURSOR ── */
const cursorEl = document.getElementById('custom-cursor');
if (cursorEl) {
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
    { cls:'cmd',  t:'> agent run --task refactor-auth' },
    { cls:'info', t:'[LOAD] auth.service.ts .............' },
    { cls:'ok',   t:'[SCAN] 847 lines analyzed' },
    { cls:'ok',   t:'[REFACTOR] Splitting monolith...' },
    { cls:'info', t:'[WRITE] auth.controller.ts' },
    { cls:'info', t:'[WRITE] auth.middleware.ts' },
    { cls:'ok',   t:'[DONE] 3 files created' },
    { cls:'dim',  t:'──────────────────────────' },
    { cls:'info', t:'[LOAD] user.service.ts ............' },
    { cls:'ok',   t:'[SCAN] 1,203 lines analyzed' },
  ]},
  p2: { type:'fade', lines:[
    { cls:'cmd',  t:'> agent run --task db-migration' },
    { cls:'info', t:'[CONN] Connecting to schema registry' },
    { cls:'ok',   t:'[CONN] Registry reached' },
    { cls:'info', t:'[DIFF] Comparing schemas...' },
    { cls:'warn', t:'[DIFF] 14 breaking changes found' },
    { cls:'ok',   t:'[GEN] migration_v2.41.sql' },
    { cls:'ok',   t:'[TEST] Dry run passed' },
    { cls:'dim',  t:'CPU: 12%  MEM: 3.2GB / 16GB' },
    { cls:'dim',  t:'Active agents: 4  Queue: 0' },
  ]},
  p3: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent run --task generate-tests' },
    { cls:'info', t:'[SCAN] Uncovered functions: 23' },
    { cls:'ok',   t:'[GEN] tests/auth.test.ts (8 cases)' },
    { cls:'ok',   t:'[GEN] tests/billing.test.ts (6 cases)' },
    { cls:'ok',   t:'[GEN] tests/users.test.ts (9 cases)' },
    { cls:'ok',   t:'[RUN] All 23 tests passing' },
    { cls:'dim',  t:'Coverage: 87.3% -> 94.1%' },
  ]},
  p4: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent run --task deploy-staging' },
    { cls:'info', t:'[BUILD] next build .............' },
    { cls:'ok',   t:'[BUILD] ................... OK' },
    { cls:'ok',   t:'[LINT] 0 errors, 0 warnings' },
    { cls:'ok',   t:'[TYPE] tsc --noEmit ........ OK' },
    { cls:'ok',   t:'[PUSH] Image pushed to registry' },
    { cls:'ok',   t:'[DEPLOY] staging.app.io live' },
  ]},
  p5: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent status --all' },
    { cls:'info', t:'[SYS] Orchestrator: v2.4.1' },
    { cls:'ok',   t:'[API] Anthropic Claude ......... OK' },
    { cls:'ok',   t:'[API] OpenAI Codex ............. OK' },
    { cls:'ok',   t:'[API] Agent Core ............... OK' },
    { cls:'ok',   t:'[DB] PostgreSQL ............... OK' },
    { cls:'ok',   t:'[CACHE] Redis .................. OK' },
    { cls:'dim',  t:'Uptime: 99.97%  SLA: 99.9%' },
  ]},
  p6: { type:'fade', lines:[
    { cls:'cmd',  t:'> agent run --task code-review' },
    { cls:'info', t:'[LOAD] PR #247 -- 14 files changed' },
    { cls:'ok',   t:'[SCAN] Security patterns ........ OK' },
    { cls:'warn', t:'[SCAN] Performance anti-patterns: 1' },
    { cls:'info', t:'[COMMENT] Line 847: N+1 query' },
    { cls:'ok',   t:'[SUGGEST] Use batch loading' },
    { cls:'dim',  t:'Review score: 94 / 100' },
  ]},
  p7: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent run --task perf-optimize' },
    { cls:'ok',   t:'[BENCH] Baseline: 342ms p95' },
    { cls:'info', t:'[SCAN] Bundle analysis...' },
    { cls:'warn', t:'[FOUND] 3 heavy components' },
    { cls:'ok',   t:'[FIX] Lazy load applied' },
    { cls:'ok',   t:'[FIX] Tree-shaking enabled' },
    { cls:'ok',   t:'[BENCH] After: 94ms p95  down 72%' },
  ]},
  p8: { type:'typewriter', lines:[
    { cls:'info', t:'[18:01:04] Agent-01 started' },
    { cls:'info', t:'[18:01:04] Agent-02 started' },
    { cls:'info', t:'[18:01:05] Agent-03 started' },
    { cls:'ok',   t:'[18:01:08] Agent-01 DONE' },
    { cls:'ok',   t:'[18:01:11] Agent-03 DONE' },
    { cls:'info', t:'[18:01:12] Agent-05 started' },
    { cls:'ok',   t:'[18:01:15] Agent-02 DONE' },
    { cls:'info', t:'[18:01:16] Agent-06 started' },
    { cls:'ok',   t:'[18:01:19] Agent-04 DONE' },
  ]},
  p9: { type:'fade', lines:[
    { cls:'cmd',  t:'> agent queue status' },
    { cls:'ok',   t:'[QUEUE] Active tasks: 4 / 8 slots' },
    { cls:'ok',   t:'[WAIT] 0 pending' },
    { cls:'dim',  t:'[HIST] 247 tasks today' },
    { cls:'dim',  t:'[AVG] 8.3s per task' },
    { cls:'ok',   t:'[RATE] 0 failures (24h)' },
    { cls:'dim',  t:'──────────────────────────' },
    { cls:'ok',   t:'[QUOTA] 11,247 / 50,000 used' },
  ]},
  p10: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent run --task rollback-prod' },
    { cls:'ok',   t:'[OK] deploy-v2.42.0 health check PASSED' },
    { cls:'info', t:'[FETCH] Last stable: deploy-v2.41.0' },
    { cls:'warn', t:'[DIFF] 3 commits to revert' },
    { cls:'info', t:'[ROLLBACK] Applying v2.41.0...' },
    { cls:'ok',   t:'[HEALTH] prod.app.io: 200 OK' },
    { cls:'ok',   t:'[DONE] Rollback complete in 23s' },
  ]},
  p11: { type:'typewriter', lines:[
    { cls:'cmd',  t:'> agent run --task update-docs' },
    { cls:'info', t:'[SCAN] 7 undocumented exports found' },
    { cls:'ok',   t:'[GEN] docs/api-reference.md updated' },
    { cls:'ok',   t:'[GEN] docs/auth-guide.md created' },
    { cls:'ok',   t:'[GEN] docs/webhooks.md created' },
    { cls:'ok',   t:'[PUSH] Docs deployed' },
    { cls:'dim',  t:'Pages updated: 14' },
  ]},
  p12: { type:'fade', lines:[
    { cls:'cmd',  t:'> agent net status --verbose' },
    { cls:'ok',   t:'[EDGE] us-east-1 ........... 12ms' },
    { cls:'ok',   t:'[EDGE] eu-west-1 ........... 34ms' },
    { cls:'ok',   t:'[EDGE] ap-southeast-1 ...... 89ms' },
    { cls:'dim',  t:'──────────────────────────' },
    { cls:'ok',   t:'[CDN] Cache hit rate: 94.2%' },
    { cls:'ok',   t:'[TLS] All certs valid' },
    { cls:'dim',  t:'Bandwidth: 2.3 TB / 24h' },
  ]},
};

/* ── TYPEWRITER ─────────────────────────────────────── */
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
  }
  container.scrollTop = container.scrollHeight;

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
    container.scrollTop = container.scrollHeight;

    let ci = 0;
    const speed = cls === 'cmd' ? 36 : 20;
    function tick() {
      if (ci < t.length) {
        cursor.insertAdjacentText('beforebegin', t[ci++]);
        container.scrollTop = container.scrollHeight;
        setTimeout(tick, speed + Math.random() * 18);
      } else {
        cursor.remove();
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
  lines.forEach((l, i) => c.appendChild(fadeLine(l, i * 105)));
}

function refreshFade(containerId, lines) {
  const c = G(containerId);
  if (!c) return;
  const all = c.querySelectorAll('.t-line');
  if (all.length >= 9) {
    all[0].remove();
    const el = fadeLine(lines[Math.floor(Math.random() * lines.length)], 0);
    el.style.animationDelay = '0ms';
    c.appendChild(el);
  }
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
