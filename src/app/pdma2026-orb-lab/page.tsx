"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "../pdma2026-templates/styles/templates.css";
import "../pdma2026/presentation/presentation.css";

import { pdma2026Content } from "@/content/pdma2026";
import { PdmaPresentationShell } from "@/app/pdma2026/PdmaPresentationShell";
import { pdma2026Manifest } from "@/app/pdma2026/presentation/pdma2026Manifest";

type LabMode = "reference" | "hybrid";
type OrbTone = "white" | "magenta";

type Dot = {
  bx: number;
  by: number;
  bz: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
};

type PointerState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  active: boolean;
  dragging: boolean;
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

function RotatingOrbSurface({
  x,
  y,
  width,
  height,
  tone,
  seed,
  strength,
  rotationSpeed,
  paused,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  tone: OrbTone;
  seed: number;
  strength: number;
  rotationSpeed: number;
  paused: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strengthRef = useRef(strength);
  const rotationSpeedRef = useRef(rotationSpeed);
  const pausedRef = useRef(paused);
  const pointerRef = useRef<PointerState>({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    active: false,
    dragging: false,
    lastX: -9999,
    lastY: -9999,
    lastT: 0,
  });
  const rotationRef = useRef({
    rotX: 0.08,
    rotY: tone === "magenta" ? -0.85 : 0.85,
    velX: 0,
    velY: 0,
  });

  useEffect(() => {
    strengthRef.current = strength;
  }, [strength]);

  useEffect(() => {
    rotationSpeedRef.current = rotationSpeed;
  }, [rotationSpeed]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

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
    const dots: Dot[] = [];
    const count = 2800;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i += 1) {
      const by = 1 - (i / (count - 1)) * 2;
      const ringRadius = Math.sqrt(Math.max(0, 1 - by * by));
      const theta = goldenAngle * i;
      const bx = Math.cos(theta) * ringRadius;
      const bz = Math.sin(theta) * ringRadius;
      dots.push({
        bx,
        by,
        bz,
        x: bx * radius,
        y: by * radius,
        z: bz * radius,
        vx: 0,
        vy: 0,
        vz: 0,
        size: 0.52 + random() * 0.5,
      });
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const inCanvas = (clientX: number, clientY: number, margin = 70) => {
      const rect = canvas.getBoundingClientRect();
      return clientX >= rect.left - margin && clientX <= rect.right + margin && clientY >= rect.top - margin && clientY <= rect.bottom + margin;
    };

    const pointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const localX = ((event.clientX - rect.left) / rect.width) * width;
      const localY = ((event.clientY - rect.top) / rect.height) * height;
      const now = performance.now();
      const pointer = pointerRef.current;
      const dt = pointer.lastT ? Math.max(8, now - pointer.lastT) : 16;
      const frameScale = 16 / dt;
      const dx = pointer.lastT ? localX - pointer.lastX : 0;
      const dy = pointer.lastT ? localY - pointer.lastY : 0;

      pointer.vx = dx * frameScale;
      pointer.vy = dy * frameScale;
      pointer.x = localX;
      pointer.y = localY;
      pointer.active = inCanvas(event.clientX, event.clientY);

      if (pointer.dragging && !pausedRef.current && !media.matches) {
        rotationRef.current.rotY += dx * 0.006;
        rotationRef.current.rotX -= dy * 0.006;
        rotationRef.current.velY = dx * 0.0012;
        rotationRef.current.velX = -dy * 0.0012;
      }

      pointer.lastX = localX;
      pointer.lastY = localY;
      pointer.lastT = now;
    };

    const pointerDown = (event: PointerEvent) => {
      if (!inCanvas(event.clientX, event.clientY, 0)) return;
      pointerRef.current.dragging = true;
    };

    const pointerUp = () => {
      pointerRef.current.dragging = false;
    };

    const pointerLeave = () => {
      const pointer = pointerRef.current;
      pointer.active = false;
      pointer.dragging = false;
      pointer.vx = 0;
      pointer.vy = 0;
    };

    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("pointerdown", pointerDown, { passive: true });
    window.addEventListener("pointerup", pointerUp, { passive: true });
    window.addEventListener("blur", pointerLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const frozen = pausedRef.current || media.matches;
      const rotation = rotationRef.current;
      const pointer = pointerRef.current;

      if (!frozen && !pointer.dragging) {
        rotation.rotY += 0.0012 * rotationSpeedRef.current + rotation.velY;
        rotation.rotX += rotation.velX;
        rotation.velX *= 0.92;
        rotation.velY *= 0.92;
      }

      const sinX = Math.sin(rotation.rotX);
      const cosX = Math.cos(rotation.rotX);
      const sinY = Math.sin(rotation.rotY);
      const cosY = Math.cos(rotation.rotY);

      let lightX = tone === "magenta" ? -0.92 : 0.92;
      let lightY = -0.15;
      let lightZ = 0.35;
      const lightLength = Math.hypot(lightX, lightY, lightZ);
      lightX /= lightLength;
      lightY /= lightLength;
      lightZ /= lightLength;

      const mouseX = pointer.x - cx;
      const mouseY = pointer.y - cy;
      const pointerVelocity = Math.min(42, Math.hypot(pointer.vx, pointer.vy));
      const interactionRadius = radius * 0.92;
      const visible: Array<{ x: number; y: number; z: number; size: number; alpha: number }> = [];

      for (const dot of dots) {
        const x1 = dot.bx * cosY + dot.bz * sinY;
        const z1 = -dot.bx * sinY + dot.bz * cosY;
        const y1 = dot.by * cosX - z1 * sinX;
        const nz = dot.by * sinX + z1 * cosX;
        const nx = x1;
        const ny = y1;

        if (nz < -0.05) continue;

        const targetX = nx * radius;
        const targetY = ny * radius;
        const targetZ = nz * radius;

        if (!frozen && pointer.active) {
          const dx = dot.x - mouseX;
          const dy = dot.y - mouseY;
          const distance = Math.hypot(dx, dy) || 1;
          if (distance < interactionRadius) {
            const falloff = 1 - distance / interactionRadius;
            const impulse = falloff * strengthRef.current;
            const velocityBoost = Math.min(2.5, pointerVelocity / 10);
            dot.vx += (dx / distance) * impulse * (1.1 + velocityBoost);
            dot.vy += (dy / distance) * impulse * (1.1 + velocityBoost);
            dot.vx += pointer.vx * impulse * 0.035;
            dot.vy += pointer.vy * impulse * 0.035;
          }
        }

        const spring = 0.085;
        const damping = 0.82;
        dot.vx = (dot.vx + (targetX - dot.x) * spring) * damping;
        dot.vy = (dot.vy + (targetY - dot.y) * spring) * damping;
        dot.vz = (dot.vz + (targetZ - dot.z) * spring) * damping;
        dot.x += dot.vx;
        dot.y += dot.vy;
        dot.z += dot.vz;

        const fov = radius * 3.1;
        const scale = fov / (fov + dot.z);
        const sx = cx + dot.x * scale;
        const sy = cy + dot.y * scale;

        const nDotL = nx * lightX + ny * lightY + nz * lightZ;
        const effectiveLight = Math.max(0, nDotL) + 0.17;
        if (effectiveLight < 0.09) continue;

        const radial = Math.min(1, Math.hypot(dot.x, dot.y) / radius);
        const illumination = Math.pow(Math.min(1, effectiveLight), 1.55);
        const limb = Math.pow(radial, 2.1);
        const brightness = Math.min(1, illumination * 0.58 + limb * 0.24 + 0.08);
        if (brightness < 0.09) continue;

        const displacement = Math.min(1, Math.hypot(dot.x - targetX, dot.y - targetY) / 36);
        const alpha = Math.min(0.42, (0.07 + brightness * 0.22) + displacement * 0.1);
        const size = dot.size * scale * (0.78 + brightness * 0.36 + displacement * 0.18);
        visible.push({ x: sx, y: sy, z: dot.z, size, alpha });
      }

      visible.sort((a, b) => a.z - b.z);
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = tone === "magenta" ? "#FF2FAE" : "#E2E8F0";
      for (const dot of visible) {
        ctx.globalAlpha = dot.alpha;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const frame = () => {
      draw();
      raf = requestAnimationFrame(frame);
    };

    draw();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointerup", pointerUp);
      window.removeEventListener("blur", pointerLeave);
    };
  }, [height, seed, tone, width]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pbds-orb-lab__canvas"
      style={{ left: x, top: y, width, height }}
    />
  );
}

function OrbOverlay({
  mode,
  strength,
  rotationSpeed,
  paused,
}: {
  mode: LabMode;
  strength: number;
  rotationSpeed: number;
  paused: boolean;
}) {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHost(document.querySelector<HTMLElement>(".pdma2026-orb-lab .pdmat-slide--framework-to-product"));
  }, []);

  if (!host || mode === "reference") return null;

  return createPortal(
    <div className="pbds-orb-lab__overlay" aria-hidden="true">
      <RotatingOrbSurface x={-751} y={87} width={950} height={950} tone="white" seed={1201} strength={strength} rotationSpeed={rotationSpeed} paused={paused} />
      <RotatingOrbSurface x={1733} y={82} width={1000} height={1000} tone="magenta" seed={1202} strength={strength} rotationSpeed={rotationSpeed} paused={paused} />
    </div>,
    host,
  );
}

export default function PdmaOrbLabPage() {
  const [mode, setMode] = useState<LabMode>("hybrid");
  const [strength, setStrength] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [paused, setPaused] = useState(false);

  return (
    <div className="pdma2026-page pdma2026-orb-lab" data-orb-mode={mode}>
      <PdmaPresentationShell
        slides={[
          <Fragment key="slide-12-orb-lab">
            <Slide12Component />
            <OrbOverlay mode={mode} strength={strength} rotationSpeed={rotationSpeed} paused={paused} />
          </Fragment>,
        ]}
        slideManifest={[slide12]}
        navigation={pdma2026Content.navigation}
      />

      <aside className="pbds-orb-lab__toolbar" aria-label="PBDS orb lab controls">
        <div className="pbds-orb-lab__toolbar-heading">
          <strong>PBDS ORB LAB</strong>
          <span>Slide 12 · rotating hybrid test</span>
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
        <label>
          <span>Rotation</span>
          <input type="range" min="0" max="2.5" step="0.05" value={rotationSpeed} onChange={(event) => setRotationSpeed(Number(event.currentTarget.value))} />
          <output>{rotationSpeed.toFixed(2)}×</output>
        </label>
        <button className="pbds-orb-lab__pause" onClick={() => setPaused((value) => !value)}>{paused ? "Resume motion" : "Pause motion"}</button>
      </aside>

      <style jsx global>{`
        .pdma2026-orb-lab { position: fixed; inset: 0; background: #090909; }
        .pdma2026-orb-lab .pdma-title-1 { left: 94px; top: 122px; }
        .pdma2026-orb-lab .pdma-title-1 .pdma-title-magenta-row { line-height: var(--title-leading); }
        .pdma2026-orb-lab[data-orb-mode="hybrid"] img[src*="slide-09-left-orb-white-v1.png"],
        .pdma2026-orb-lab[data-orb-mode="hybrid"] img[src*="slide-09-right-orb-magenta-v1.png"] {
          opacity: .84 !important;
        }
        .pbds-orb-lab__overlay { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .pbds-orb-lab__canvas { position: absolute; display: block; pointer-events: none; user-select: none; }
        .pbds-orb-lab__toolbar {
          position: fixed;
          z-index: 50;
          left: 18px;
          top: 18px;
          display: grid;
          grid-template-columns: auto auto minmax(220px, 310px) minmax(220px, 310px) auto;
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
        .pbds-orb-lab__toolbar label { display: grid; grid-template-columns: auto minmax(100px, 1fr) 42px; align-items: center; gap: 8px; color: #d9dade; }
        .pbds-orb-lab__toolbar input { accent-color: #ff2fae; width: 100%; }
        .pbds-orb-lab__toolbar output { color: #ff2fae; font-variant-numeric: tabular-nums; }
        .pbds-orb-lab__pause { white-space: nowrap; }
        @media (max-width: 1280px) {
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
