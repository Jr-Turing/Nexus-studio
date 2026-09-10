"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  hx: number; // home x
  hy: number; // home y
  vx: number;
  vy: number;
  size: number;
  violet: boolean;
};

/**
 * Interactive magnetic particle typography.
 * Renders text as thousands of dots on canvas; particles repel from the
 * cursor with distance-based falloff and spring back home with damping.
 */
export function ParticleText({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    

    let particles: Particle[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, active: false };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      // Round to integers — fractional backing-store dims cause blank/corrupted
      // canvases on some mobile GPUs (especially iOS Safari).
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const bw = Math.round(width * dpr);
      const bh = Math.round(height * dpr);
      canvas.width = bw;
      canvas.height = bh;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Sample the text offscreen using the same rounded backing dimensions
      // so pixel indices line up exactly with the sampled image data.
      const off = document.createElement("canvas");
      off.width = bw;
      off.height = bh;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = Math.min(width / (text.length * 0.66), height * 0.7);
      octx.fillStyle = "#fff";
      octx.font = `700 ${fontSize}px "Space Grotesk", sans-serif`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText(text, width / 2, height / 2);

      // Sample at backing-store resolution for crisper glyph coverage.
      const data = octx.getImageData(0, 0, bw, bh).data;

      // Density adapts to screen size / device
      const base = width < 480 ? 2.6 : width < 900 ? 3 : 3;
      const gap = Math.max(2, Math.round(base * (width / 1200 + 0.6)));
      // Step in backing-store pixels so density is consistent across DPRs.
      const step = Math.max(1, Math.round(gap * dpr));

      particles = [];
      for (let y = 0; y < bh; y += step) {
        for (let x = 0; x < bw; x += step) {
          if ((data[(y * bw + x) * 4 + 3] ?? 0) > 128) {
            particles.push({
              // Convert backing-store coords back to CSS pixels for rendering.
              x: x / dpr + (Math.random() - 0.5) * width * 0.6,
              y: y / dpr + (Math.random() - 0.5) * height * 0.6,
              hx: x / dpr,
              hy: y / dpr,
              vx: 0,
              vy: 0,
              size: gap * 0.42,
              violet: Math.random() < 0.04,
            });
          }
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.fillStyle = p.violet ? "#9B7BFF" : "#F4F4F5";
        ctx.beginPath();
        ctx.arc(p.hx, p.hy, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.28;
      const r2 = radius * radius;

      for (const p of particles) {
        // Cursor repulsion with distance falloff
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < r2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = ((radius - d) / radius) ** 2 * 2.2;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        // Spring return home
        p.vx += (p.hx - p.x) * 0.045;
        p.vy += (p.hy - p.y) * 0.045;
        // Damping
        p.vx *= 0.86;
        p.vy *= 0.86;
        p.x += p.vx;
        p.y += p.vy;

        const disp = Math.abs(p.x - p.hx) + Math.abs(p.y - p.hy);
        ctx.fillStyle = p.violet
          ? "#9B7BFF"
          : disp > 6
            ? "#B9A6FF"
            : "#F4F4F5";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const setFromPoint = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouse.active =
        mouse.x >= -120 && mouse.x <= rect.width + 120 && mouse.y >= -120 && mouse.y <= rect.height + 120;
    };
    const onMove = (e: PointerEvent) => setFromPoint(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setFromPoint(t.clientX, t.clientY);
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let listening = false;
    const listen = () => {
      if (listening) return;
      listening = true;
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      canvas.addEventListener("touchstart", onTouch, { passive: true });
      canvas.addEventListener("touchmove", onTouch, { passive: true });
      canvas.addEventListener("touchend", onLeave, { passive: true });
    };
    const unlisten = () => {
      listening = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("touchend", onLeave);
    };

    const init = () => {
      build();
      cancelAnimationFrame(raf);
      if (reduced) {
        drawStatic();
      } else {
        tick();
        listen();
      }
    };

    // Wait for the display font so sampling uses the right glyphs,
    // but never leave the canvas blank if fonts.ready is slow/fails.
    let cancelled = false;
    let initialized = false;
    const safeInit = () => {
      if (cancelled) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) {
        // Canvas not laid out yet — retry shortly
        setTimeout(safeInit, 100);
        return;
      }
      initialized = true;
      init();
    };
    document.fonts.ready.then(safeInit).catch(safeInit);
    // Fallback: if fonts.ready never resolves (some mobile browsers), init anyway
    setTimeout(() => {
      if (!initialized) safeInit();
    }, 1200);

    let resizeTimer: ReturnType<typeof setTimeout>;
    let lastW = 0;
    let lastH = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const rect = canvas.getBoundingClientRect();
        if (Math.abs(rect.width - lastW) < 2 && Math.abs(rect.height - lastH) < 2) return;
        lastW = rect.width;
        lastH = rect.height;
        if (!cancelled) init();
      }, 150);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      unlisten();
    };
  }, [text]);

  return (
    <canvas
      ref={canvasRef}
      className="h-[20vh] min-h-[110px] w-full max-w-6xl touch-none sm:h-[24vh] md:h-[28vh] lg:h-[28vh]"
      aria-label={text}
      role="img"
    />
  );
}
