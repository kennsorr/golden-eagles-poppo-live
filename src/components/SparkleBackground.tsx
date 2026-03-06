"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  depth: number; // 0 = far (back), 1 = near (front)
  sizePhase: number; // random phase for size pulse (0 to 2*PI)
};

function CursorParticleLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth || window.innerWidth;
    let height = canvas.clientHeight || window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const particleCount = 260;
    const particles: Particle[] = [];

    const spawnParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (Math.max(width, height) * 0.5);
      const cx = width / 2;
      const cy = height / 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      // Each particle travels in its own direction at a steady speed
      const speed = 0.75 + Math.random() * 0.7;
      const dir = Math.random() * Math.PI * 2;
      const vx = Math.cos(dir) * speed;
      const vy = Math.sin(dir) * speed;

      const palette = [
        45, // soft gold
        50,
        210, // blue
        260, // purple
      ];
      const hue = palette[Math.floor(Math.random() * palette.length)];
      const depth = Math.random(); // 0 = background, 1 = foreground
      const sizePhase = Math.random() * Math.PI * 2;

      return {
        x,
        y,
        vx,
        vy,
        size: 1.3 + Math.random() * 1.3,
        hue,
        depth,
        sizePhase,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(spawnParticle());
    }

    const mouse = {
      nx: 0.5,
      ny: 0.5,
      active: false,
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.nx = (event.clientX - rect.left) / rect.width;
      mouse.ny = (event.clientY - rect.top) / rect.height;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    const startTime = performance.now();
    let frameId: number;

    const render = () => {
      frameId = window.requestAnimationFrame(render);
      const timeSec = (performance.now() - startTime) * 0.001;

      ctx.clearRect(0, 0, width, height);

      const mx = mouse.nx * width;
      const my = mouse.ny * height;
      const maxDist = Math.min(width, height) * 0.28;
      const maxDistSq = maxDist * maxDist;
      const mouseForceClose = 0.042; // nudge when cursor is near, not push too far

      // Particle–particle repulsion so they don’t cluster
      const repelRadius = 52;
      const repelRadiusSq = repelRadius * repelRadius;
      const repelStrength = 0.018;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = p.x - pj.x;
          const dy = p.y - pj.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < repelRadiusSq && distSq > 0.0001) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / repelRadius) * repelStrength;
            const nx = dx / dist;
            const ny = dy / dist;

            p.vx += nx * force;
            p.vy += ny * force;
            pj.vx -= nx * force;
            pj.vy -= ny * force;
          }
        }

        if (mouse.active) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq && distSq > 0.0001) {
            const dist = Math.sqrt(distSq);
            // Stronger when cursor is closer; foreground particles (high depth) react more
            const proximity = 1 - dist / maxDist;
            const force = proximity * proximity * mouseForceClose * (0.4 + 0.6 * p.depth);
            const nx = dx / dist;
            const ny = dy / dist;

            p.vx -= nx * force;
            p.vy -= ny * force;

            const tx = -ny;
            const ty = nx;
            p.vx += tx * force * 0.18;
            p.vy += ty * force * 0.18;
          }
        }

        // Ambient wander: change direction over time so they travel around the canvas
        p.vx += (Math.random() - 0.5) * 0.08;
        p.vy += (Math.random() - 0.5) * 0.08;

        // Light damping so they keep moving but don't explode
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        const margin = 40;
        if (p.x < -margin || p.x > width + margin || p.y < -margin || p.y > height + margin) {
          const reset = spawnParticle();
          p.x = reset.x;
          p.y = reset.y;
          p.vx = reset.vx;
          p.vy = reset.vy;
          p.size = reset.size;
          p.hue = reset.hue;
          p.depth = reset.depth;
          p.sizePhase = reset.sizePhase;
        }
      }

      // Draw back-to-front so foreground particles layer on top (3D depth)
      const sorted = [...particles].sort((a, b) => a.depth - b.depth);

      for (let i = 0; i < sorted.length; i++) {
        const p = sorted[i];
        const depthScale = 0.45 + 0.55 * p.depth; // size: smaller when far
        const depthAlpha = 0.15 + 0.5 * p.depth;  // more transparent when far
        // Gentle size pulse over time (each particle out of phase) for extra 3D feel
        const sizePulse = 0.82 + 0.18 * Math.sin(timeSec * 1.2 + p.sizePhase);
        const drawSize = p.size * depthScale * sizePulse;
        const drawAlpha = depthAlpha * 0.75;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 68%, 88%, ${drawAlpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 72%, 92%, ${drawAlpha * 0.7})`;
        ctx.shadowBlur = 4 + 8 * p.depth;
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default function SparkleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="sparkle-gradient absolute inset-0 opacity-90" />
      <CursorParticleLayer />
      <div className="sparkle-field absolute inset-0">
        <span className="sparkle sparkle-1" />
        <span className="sparkle sparkle-2" />
        <span className="sparkle sparkle-3" />
        <span className="sparkle sparkle-4" />
        <span className="sparkle sparkle-5" />
        <span className="sparkle sparkle-6" />
      </div>
    </div>
  );
}
