"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "../pdma2026-templates/styles/templates.css";
import "../pdma2026/presentation/presentation.css";

import { pdma2026Content } from "@/content/pdma2026";
import { PdmaPresentationShell } from "@/app/pdma2026/PdmaPresentationShell";
import { pdma2026Manifest } from "@/app/pdma2026/presentation/pdma2026Manifest";

type LabMode = "reference" | "hybrid";
type OrbTone = "white" | "magenta";

type Particle = {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  drift: number;
};

type PointerState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  active: boolean;
  lastX: number;
  lastY: number;
  lastT: number;
};

const slide12 = pdma2026Manifest[11];
const Slide12Component = slide12.component;

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function HybridOrb({
  x,
  y,
  width,
  height,
  tone,
  seed,
  strength,
  paused,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  tone: OrbTone;
  seed: number;
  strength: number;
  paused: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<PointerState>({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    active: false,
    lastX: -9999,
    lastY: -9999,
    lastT: 0,
  });
  const strengthRef = useRef(strength);

  useEffect(() => {
    strengthRef.current = strength;
  }, [strength]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const random = seededRandom(seed);
    const radius = Math.min(width, height) * 0.43;
    const cx = width / 2;
    const cy = height / 2;
    const color = tone === "magenta" ? "255, 47, 174" : "226, 232, 240";
    const particleCount = Math.round(Math.min(820, Math.max(420, radius * 1.35)));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i += 1) {
      const angle = random() * Math.PI * 2;
      const radialBias = Math.pow(random(), 0.33);
      const radial = radius * (0.58 + radialBias * 0.48);
      const homeX = cx + Math.cos(angle) * radial;
      const homeY = cy + Math.sin(angle) * radial;
      const edge = Math.min(1, radial / radius);
      particles.push({
        homeX,
        homeY,
        x: homeX,
        y: homeY,
        vx: 0,
        vy: 0,
        size: 0.55 + random() * (edge > 0.9 ? 1.75 : 1.15),
        alpha: (0.08 + random() * 0.32) * (0.55 + edge * 0.45),
        phase: random() * Math.PI * 2,
        drift: 0.25 + random() * 0.85,
      });
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let time = 0;

    const pointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const localX = ((event.clientX - rect.left) / rect.width) * width;
      const localY = ((event.clientY - rect.top) / rect.height) * height;
      const now = performance.now();
      const pointer = pointerRef.current;
      const dt = pointer.lastT ? Math.max(8, now - pointer.lastT) : 16;
      const frameScale = 16 / dt;

      pointer.vx = pointer.lastT ? (localX - pointer.lastX) * frameScale : 0;
      pointer.vy = pointer.lastT ? (localY - pointer.lastY) * frameScale : 0;
      pointer.x = localX;
      pointer.y = localY;
      pointer.lastX = localX;
      pointer.lastY = localY;
      pointer.lastT = now;
      pointer.active = event.clientX >= rect.left - 60 && event.clientX <= rect.right + 60 && event.clientY >= rect.top - 60 && event.clientY <= rect.bottom + 60;
    };

    const pointerLeave = () => {
      pointerRef.current.active = false;
      pointerRef.current.vx = 0;
      pointerRef.current.vy = 0;
    };

    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("blur", pointerLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const pointer = pointerRef.current;
      const velocity = Math.min(42, Math.hypot(pointer.vx, pointer.vy));
      const interactionRadius = radius * 0.42;

      for (const particle of particles) {
        const idleX = Math.sin(time * 0.0009 * particle.drift + particle.phase) * 1.3;
        const idleY = Math.cos(time * 0.0007 * particle.drift + particle.phase) * 1.1;
        const targetX = particle.homeX + idleX;
        const targetY = particle.homeY + idleY;

        if (!paused && !media.matches && pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;
          if (distance < interactionRadius) {
            const falloff = 1 - distance / interactionRadius;
            const impulse = falloff * strengthRef.current;
            const velocityBoost = Math.min(2.8, velocity / 9);
            particle.vx += (dx / distance) * impulse * (1.4 + velocityBoost);
            particle.vy += (dy / distance) * impulse * (1.4 + velocityBoost);
            particle.vx += pointer.vx * impulse * 0.045;
            particle.vy += pointer.vy * impulse * 0.045;
          }
        }

        particle.vx += (targetX - particle.x) * 0.018;
        particle.vy += (targetY - particle.y) * 0.018;
        particle.vx *= 0.915;
        particle.vy *= 0.915;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const displacement = Math.min(1, Math.hypot(particle.x - targetX, particle.y - targetY) / 34);
        ctx.globalAlpha = Math.min(0.85, particle.alpha + displacement * 0.32);
        ctx.fillStyle = `rgb(${color})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * (1 + displacement * 0.6), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const frame = (now: number) => {
      time = now;
      draw();
      if (!paused && !media.matches) raf = requestAnimationFrame(frame);
    };

    if (paused || media.matches) draw();
    else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("blur", pointerLeave);
    };
  }, [height, paused, seed, tone, width]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pbds-orb-lab__canvas"
      style={{ left: x, top: y, width, height }}
    />
  );
}

function OrbOverlay({ mode, strength, paused }: { mode: LabMode; strength: number; paused: boolean }) {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHost(document.querySelector<HTMLElement>(".pdma2026-orb-lab .pdmat-slide--framework-to-product"));
  }, []);

  if (!host || mode === "reference") return null;

  return createPortal(
    <div className="pbds-orb-lab__overlay" aria-hidden="true">
      <HybridOrb x={-751} y={87} width={950} height={950} tone="white" seed={1201} strength={strength} paused={paused} />
      <HybridOrb x={1733} y={82} width={1000} height={1000} tone="magenta" seed={1202} strength={strength} paused={paused} />
    </div>,
    host,
  );
}

export default function PdmaOrbLabPage() {
  const [mode, setMode] = useState<LabMode>("hybrid");
  const [strength, setStrength] = useState(1.15);
  const [paused, setPaused] = useState(false);

  return (
    <div className="pdma2026-page pdma2026-orb-lab">
      <PdmaPresentationShell
        slides={[
          <div key="slide-12-orb-lab">
            <Slide12Component />
            <OrbOverlay mode={mode} strength={strength} paused={paused} />
          </div>,
        ]}
        slideManifest={[slide12]}
        navigation={pdma2026Content.navigation}
      />

      <aside className="pbds-orb-lab__toolbar" aria-label="PBDS orb lab controls">
        <div className="pbds-orb-lab__toolbar-heading">
          <strong>PBDS ORB LAB</strong>
          <span>Slide 12 · isolated test route</span>
        </div>
        <div className="pbds-orb-lab__mode" role="group" aria-label="Orb rendering mode">
          <button className={mode === "reference" ? "is-active" : undefined} onClick={() => setMode("reference")}>Reference</button>
          <button className={mode === "hybrid" ? "is-active" : undefined} onClick={() => setMode("hybrid")}>Hybrid</button>
        </div>
        <label>
          <span>Mouse velocity</span>
          <input type="range" min="0" max="2.4" step="0.05" value={strength} onChange={(event) => setStrength(Number(event.currentTarget.value))} />
          <output>{strength.toFixed(2)}×</output>
        </label>
        <button className="pbds-orb-lab__pause" onClick={() => setPaused((value) => !value)}>{paused ? "Resume motion" : "Pause motion"}</button>
      </aside>

      <style jsx global>{`
        .pdma2026-orb-lab { position: fixed; inset: 0; background: #090909; }
        .pdma2026-orb-lab .pdma-title-1 { left: 94px; top: 122px; }
        .pdma2026-orb-lab .pdma-title-1 .pdma-title-magenta-row { line-height: var(--title-leading); }
        .pbds-orb-lab__overlay { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .pbds-orb-lab__canvas { position: absolute; display: block; pointer-events: none; user-select: none; }
        .pbds-orb-lab__toolbar {
          position: fixed;
          z-index: 50;
          left: 18px;
          top: 18px;
          display: grid;
          grid-template-columns: auto auto minmax(240px, 340px) auto;
          align-items: center;
          gap: 14px;
          padding: 10px 12px;
          border: 1px solid rgba(255, 255, 255, .16);
          border-radius: 12px;
          background: rgba(9, 9, 9, .88);
          box-shadow: 0 12px 36px rgba(0, 0, 0, .32);
          color: #f2f2f5;
          font: 600 12px/1.2 Inter, ui-sans-serif, system-ui, sans-serif;
          letter-spacing: .02em;
          backdrop-filter: blur(12px);
        }
        .pbds-orb-lab__toolbar-heading { display: grid; gap: 2px; padding-right: 4px; }
        .pbds-orb-lab__toolbar-heading strong { color: #ff2fae; font-size: 12px; letter-spacing: .14em; }
        .pbds-orb-lab__toolbar-heading span { color: #939598; font-size: 10px; font-weight: 500; }
        .pbds-orb-lab__mode { display: flex; gap: 4px; }
        .pbds-orb-lab__toolbar button {
          border: 1px solid rgba(255, 255, 255, .15);
          border-radius: 8px;
          background: #15181b;
          color: #d9dade;
          padding: 7px 9px;
          cursor: pointer;
        }
        .pbds-orb-lab__toolbar button:hover { border-color: rgba(255, 47, 174, .55); color: #fff; }
        .pbds-orb-lab__toolbar button.is-active { border-color: #ff2fae; color: #fff; box-shadow: 0 0 14px rgba(255, 47, 174, .18); }
        .pbds-orb-lab__toolbar label { display: grid; grid-template-columns: auto minmax(120px, 1fr) 42px; align-items: center; gap: 8px; color: #d9dade; }
        .pbds-orb-lab__toolbar input { accent-color: #ff2fae; width: 100%; }
        .pbds-orb-lab__toolbar output { color: #ff2fae; font-variant-numeric: tabular-nums; }
        .pbds-orb-lab__pause { white-space: nowrap; }
        @media (max-width: 980px) {
          .pbds-orb-lab__toolbar { grid-template-columns: 1fr auto; max-width: calc(100vw - 36px); }
          .pbds-orb-lab__toolbar label { grid-column: 1 / -1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pbds-orb-lab__toolbar::after { content: "Reduced motion active"; color: #939598; font-size: 10px; }
        }
      `}</style>
    </div>
  );
}
