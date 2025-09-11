// assets/js/pomodoro.js
(() => {
  if (window.__pomdLoaded) return;
  window.__pomdLoaded = true;

  const $ = (id) => document.getElementById(id);

  function boot(root) {
    const el = {
      time: $("pomd-time"),
      bar: $("pomd-bar"),
      toggle: $("pomd-toggle"),
      reset: $("pomd-reset"),
      status: $("pomd-status"),
      full: $("pomd-full"),
      bgBtn: $("pomd-bg-btn"),
      card: root.querySelector(".pomd-card"),
      bgImg: root.querySelector(".pomd-bg"),
    };

    // --- Backgrounds ---
    const bgList = (() => {
      try {
        const raw = root.dataset.bglist ? JSON.parse(root.dataset.bglist) : [];
        return Array.isArray(raw) ? raw : [];
      } catch {
        return [];
      }
    })();
    const initialBg = root.dataset.bg || "";
    if (initialBg && !bgList.includes(initialBg)) bgList.unshift(initialBg);
    let bgIndex = Math.max(0, bgList.indexOf(initialBg));
    function setBg(i) {
      if (!bgList.length) return;
      bgIndex = (i + bgList.length) % bgList.length;
      const src = bgList[bgIndex];
      if (!el.bgImg) {
        const img = document.createElement("img");
        img.className = "pomd-bg";
        img.alt = "Focus background";
        img.loading = "eager";
        el.card.prepend(img);
        el.bgImg = img;
      }
      el.bgImg.style.opacity = "0";
      requestAnimationFrame(() => {
        el.bgImg.src = src;
        el.bgImg.onload = () => (el.bgImg.style.opacity = "1");
      });
    }
    function nextBg() {
      if (bgList.length) setBg(bgIndex + 1);
    }
    function prevBg() {
      if (bgList.length) setBg(bgIndex - 1);
    }
    function randomBg() {
      if (!bgList.length) return;
      let j = Math.floor(Math.random() * bgList.length);
      if (bgList.length > 1 && j === bgIndex) j = (j + 1) % bgList.length;
      setBg(j);
    }
    if (bgList.length) setBg(bgIndex);

    // --- Timer core ---
    const DFLT_MS = 25 * 60 * 1000; // 25:00
    let state = { running: false, start: 0, end: 0, total: DFLT_MS, t: null };

    const fmt = (ms) => {
      const s = Math.max(0, Math.round(ms / 1000));
      const m = Math.floor(s / 60),
        r = s % 60;
      return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
    };

    function render() {
      const now = Date.now();
      const remain = Math.max(0, state.end - now);
      if (el.time) el.time.textContent = fmt(remain);
      if (el.bar) el.bar.style.width = 100 * (1 - remain / state.total) + "%";

      if (el.toggle) {
        el.toggle.textContent = state.running ? "⏸" : "▶";
        el.toggle.setAttribute("aria-pressed", String(state.running));
        el.toggle.setAttribute("aria-label", state.running ? "Pause" : "Start");
      }
    }

    function start() {
      if (state.running) return;
      state.running = true;
      if (!state.start || Date.now() >= state.end) {
        state.start = Date.now();
        state.end = state.start + state.total;
      }
      tick();
    }
    function pause() {
      if (!state.running) return;
      state.running = false;
      clearInterval(state.t);
      render();
    }
    function reset() {
      clearInterval(state.t);
      state.running = false;
      state.total = DFLT_MS;
      state.start = Date.now();
      state.end = state.start + state.total;
      render();
    }
    function complete() {
      pause();
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx(),
          o = ctx.createOscillator(),
          g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = 880;
        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
        o.connect(g).connect(ctx.destination);
        o.start();
        o.stop(ctx.currentTime + 0.65);
      } catch {}
    }
    function tick() {
      clearInterval(state.t);
      state.t = setInterval(() => {
        if (Date.now() >= state.end) {
          complete();
          clearInterval(state.t);
        }
        render();
      }, 250);
    }

    // --- Fullscreen helpers ---
    const isiOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const isFS = () =>
      document.fullscreenElement === el.card ||
      document.webkitFullscreenElement === el.card ||
      el.card.classList.contains("fake-fullscreen");

    const reqFS = () => {
      if (isiOS) {
        el.card.classList.add("fake-fullscreen");
        return;
      }
      if (el.card.requestFullscreen) return el.card.requestFullscreen();
      if (el.card.webkitRequestFullscreen)
        return el.card.webkitRequestFullscreen();
    };

    const exitFS = () => {
      if (isiOS) {
        el.card.classList.remove("fake-fullscreen");
        return;
      }
      if (document.exitFullscreen) return document.exitFullscreen();
      if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    };

    const toggleFS = () => (isFS() ? exitFS() : reqFS());

    const updateFSBtn = () => {
      const b = $("pomd-full");
      if (b) {
        b.textContent = isFS() ? "⤡" : "⤢";
      }
    };

    // --- Events ---
    el.toggle?.addEventListener("click", () =>
      state.running ? pause() : start()
    );
    el.reset?.addEventListener("click", reset);

    el.bgBtn?.addEventListener("click", (e) => {
      if (!bgList.length) return;
      if (e.ctrlKey || e.metaKey) randomBg();
      else if (e.shiftKey) prevBg();
      else nextBg();
    });

    $("pomd-full")?.addEventListener("click", () => {
      toggleFS();
      updateFSBtn();
    });
    document.addEventListener("fullscreenchange", updateFSBtn);
    document.addEventListener("webkitfullscreenchange", updateFSBtn);

    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        state.running ? pause() : start();
      }
      if (e.key === "r" || e.key === "R") reset();
      if (e.key === "f" || e.key === "F") {
        toggleFS();
        updateFSBtn();
      }
      if (e.key === "b" || e.key === "B") {
        if (e.ctrlKey || e.metaKey) randomBg();
        else if (e.shiftKey) prevBg();
        else nextBg();
      }
      if (e.key === "ArrowRight") nextBg();
      if (e.key === "ArrowLeft") prevBg();
    });

    // Init
    reset();
    updateFSBtn();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-pomd]").forEach(boot);
  });
})();
