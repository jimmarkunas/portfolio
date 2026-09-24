"use client";

import { useEffect, useMemo, useRef } from "react";

export type OrbTone = "white" | "magenta";
export type InteractionMode = "repel" | "attract" | "swirl";

type Dot = {
  bx: number; by: number; bz: number;
  x: number; y: number; z: number;
  vx: number; vy: number; vz: number;
  baseSize: number;
};

type Plasma = {
  angle: number;
  distFactor: number;
  size: number;
  alpha: number;
  speed: number;
  radialVelocity: number;
  life: number;
  maxLife: number;
};

type PointerState = {
  x: number; y: number;
  prevX: number; prevY: number;
  vx: number; vy: number;
  active: boolean;
  dragging: boolean;
  lastT: number;
};

type Props = {
  tone: OrbTone;
  radius: number;
  seed: number;
  interactionMode?: InteractionMode;
  interactionStrength?: number;
  autoRotateSpeed?: number;
  rotationScale?: number;
  stippleDensity?: number;
  ambientLuminance?: number;
  plasmaNoiseIntensity?: number;
  glowIntensity?: number;
  glowSpread?: number;
  coreHotness?: number;
  innerWashIntensity?: number;
  strokeWidth?: number;
  paused?: boolean;
};

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

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * Math.max(0, Math.min(1, t)));
}

function drawLimb(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  tone: OrbTone,
  intensity: number,
  spread: number,
  coreHotness: number,
  innerWash: number,
  strokeWidth: number,
) {
  if (intensity <= 0) return;

  const rgb = tone === "magenta" ? { r: 255, g: 47, b: 174 } : { r: 226, g: 232, b: 240 };
  const hot = {
    r: lerp(rgb.r, 255, coreHotness),
    g: lerp(rgb.g, 255, coreHotness),
    b: lerp(rgb.b, 255, coreHotness),
  };
  const lightAngle = tone === "white" ? 0 : Math.PI;
  const segments = 88;
  const dTheta = (Math.PI * 2) / segments;

  ctx.save();
  for (let i = 0; i < segments; i += 1) {
    const a0 = i * dTheta;
    const a1 = a0 + dTheta + 0.012;
    const mid = a0 + dTheta * 0.5;
    const cosine = Math.cos(mid - lightAngle);
    if (cosine <= 0) continue;
    const lit = Math.pow(cosine, 1.55) * intensity;
    if (lit < 0.004) continue;

    ctx.save();
    ctx.shadowColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    ctx.shadowBlur = spread * 0.4;
    ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.min(0.16, lit * 0.18)})`;
    ctx.lineWidth = Math.max(1, spread * 0.16);
    ctx.beginPath();
    ctx.arc(cx, cy, radius + spread * 0.05, a0, a1);
    ctx.stroke();

    ctx.shadowBlur = 2.5 * intensity;
    ctx.strokeStyle = `rgba(${hot.r}, ${hot.g}, ${hot.b}, ${Math.min(0.72, lit * 0.82)})`;
    ctx.lineWidth = Math.max(0.5, strokeWidth);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, a0, a1);
    ctx.stroke();

    if (innerWash > 0) {
      ctx.shadowBlur = 2;
      ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.min(0.08, lit * innerWash * 0.12)})`;
      ctx.lineWidth = Math.max(1, spread * 0.08);
      ctx.beginPath();
      ctx.arc(cx, cy, radius - spread * 0.04, a0, a1);
      ctx.stroke();
    }
    ctx.restore();
  }
  ctx.restore();
}

export function PBDSKineticSphereLab({
  tone,
  radius,
  seed,
  interactionMode = "repel",
  interactionStrength = 1,
  autoRotateSpeed = 0.0012,
  rotationScale = 1,
  stippleDensity = 8500,
  ambientLuminance = 0.38,
  plasmaNoiseIntensity = 1,
  glowIntensity = 0.12,
  glowSpread = 10,
  coreHotness = 0.35,
  innerWashIntensity = 0.06,
  strokeWidth = 0.5,
  paused = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strengthRef = useRef(interactionStrength);
  const rotationScaleRef = useRef(rotationScale);
  const glowRef = useRef(glowIntensity);
  const pausedRef = useRef(paused);
  const pointerRef = useRef<PointerState>({
    x: -9999, y: -9999,
    prevX: -9999, prevY: -9999,
    vx: 0, vy: 0,
    active: false,
    dragging: false,
    lastT: 0,
  });
  const rotationRef = useRef({
    rotX: 0.08,
    rotY: tone === "magenta" ? -0.85 : 0.85,
    velX: 0,
    velY: 0,
  });

  useEffect(() => { strengthRef.current = interactionStrength; }, [interactionStrength]);
  useEffect(() => { rotationScaleRef.current = rotationScale; }, [rotationScale]);
  useEffect(() => { glowRef.current = glowIntensity; }, [glowIntensity]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  const rgb = useMemo(() => tone === "magenta" ? { r: 255, g: 47, b: 174 } : { r: 226, g: 232, b: 240 }, [tone]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const random = seededRandom(seed);
    const dots: Dot[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < stippleDensity; i += 1) {
      const by = 1 - (i / (stippleDensity - 1)) * 2;
      const ring = Math.sqrt(Math.max(0, 1 - by * by));
      const theta = goldenAngle * i;
      const bx = Math.cos(theta) * ring;
      const bz = Math.sin(theta) * ring;
      dots.push({
        bx, by, bz,
        x: bx * radius,
        y: by * radius,
        z: bz * radius,
        vx: 0, vy: 0, vz: 0,
        baseSize: 0.65 + random() * 0.45,
      });
    }

    const plasma: Plasma[] = Array.from({ length: 380 }, () => ({
      angle: random() * Math.PI * 2,
      distFactor: 1.002 + random() * 0.02,
      size: 0.5 + random() * 1.1,
      alpha: 0.18 + random() * 0.42,
      speed: (random() - 0.5) * 0.003,
      radialVelocity: 0.00035 + random() * 0.0011,
      life: random() * 100,
      maxLife: 60 + random() * 80,
    }));

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1;
    let height = 1;
    let dpr = 1;
    let raf = 0;
    let time = 0;

    const resize = () => {
      width = Math.max(1, parent.clientWidth);
      height = Math.max(1, parent.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(parent);

    const inside = (clientX: number, clientY: number, margin = 50) => {
      const rect = canvas.getBoundingClientRect();
      return clientX >= rect.left - margin && clientX <= rect.right + margin && clientY >= rect.top - margin && clientY <= rect.bottom + margin;
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = ((event.clientX - rect.left) / rect.width) * width;
      const y = ((event.clientY - rect.top) / rect.height) * height;
      const now = performance.now();
      const pointer = pointerRef.current;
      const dt = pointer.lastT ? Math.max(8, now - pointer.lastT) : 16;
      const frameScale = 16 / dt;
      const dx = pointer.lastT ? x - pointer.prevX : 0;
      const dy = pointer.lastT ? y - pointer.prevY : 0;
      pointer.vx = dx * frameScale;
      pointer.vy = dy * frameScale;
      pointer.x = x;
      pointer.y = y;
      pointer.active = inside(event.clientX, event.clientY);

      if (pointer.dragging && !pausedRef.current && !media.matches) {
        rotationRef.current.rotY += dx * 0.006;
        rotationRef.current.rotX -= dy * 0.006;
        rotationRef.current.velY = dx * 0.0012;
        rotationRef.current.velX = -dy * 0.0012;
      }

      pointer.prevX = x;
      pointer.prevY = y;
      pointer.lastT = now;
    };

    const onDown = (event: PointerEvent) => {
      if (!inside(event.clientX, event.clientY, 0)) return;
      pointerRef.current.dragging = true;
    };
    const onUp = () => { pointerRef.current.dragging = false; };
    const onBlur = () => {
      pointerRef.current.active = false;
      pointerRef.current.dragging = false;
      pointerRef.current.vx = 0;
      pointerRef.current.vy = 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("blur", onBlur);

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const rot = rotationRef.current;
      const pointer = pointerRef.current;
      const frozen = pausedRef.current || media.matches;

      if (!frozen && !pointer.dragging) {
        rot.rotY += autoRotateSpeed * rotationScaleRef.current + rot.velY;
        rot.rotX += rot.velX;
        rot.velX *= 0.92;
        rot.velY *= 0.92;
      }

      const sinX = Math.sin(rot.rotX);
      const cosX = Math.cos(rot.rotX);
      const sinY = Math.sin(rot.rotY);
      const cosY = Math.cos(rot.rotY);

      for (const p of plasma) {
        if (!frozen) {
          p.life += 1;
          if (p.life > p.maxLife) {
            p.life = 0;
            p.distFactor = 1.002 + random() * 0.02;
          } else {
            p.distFactor += p.radialVelocity * plasmaNoiseIntensity;
          }
          p.angle += p.speed;
        }
        const noise = Math.sin(p.angle * 12 + time * 3) * 0.01 + Math.cos(p.angle * 24 - time * 2) * 0.006;
        const dist = radius * (p.distFactor + noise * plasmaNoiseIntensity);
        const px = cx + Math.cos(p.angle) * dist;
        const py = cy + Math.sin(p.angle) * dist;
        const fade = Math.sin((p.life / p.maxLife) * Math.PI) * p.alpha;
        const bias = tone === "white" ? Math.max(0.08, Math.cos(p.angle)) : Math.max(0.08, -Math.cos(p.angle));
        ctx.globalAlpha = fade * bias * 0.42;
        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      let lightX = tone === "white" ? 0.92 : -0.92;
      let lightY = -0.15;
      let lightZ = 0.35;
      const lightLength = Math.hypot(lightX, lightY, lightZ);
      lightX /= lightLength;
      lightY /= lightLength;
      lightZ /= lightLength;

      const mouseRelX = pointer.x - cx;
      const mouseRelY = pointer.y - cy;
      const pointerVelocity = Math.min(42, Math.hypot(pointer.vx, pointer.vy));
      const interactionRadius = radius * 1.35;
      const visible: Array<{ x: number; y: number; z: number; size: number; alpha: number; color: string }> = [];

      for (const dot of dots) {
        const x1 = dot.bx * cosY + dot.bz * sinY;
        const z1 = -dot.bx * sinY + dot.bz * cosY;
        const ny = dot.by * cosX - z1 * sinX;
        const nz = dot.by * sinX + z1 * cosX;
        const nx = x1;
        if (nz < -0.05) continue;

        const nDotL = nx * lightX + ny * lightY + nz * lightZ;
        const effectiveLight = Math.max(0, nDotL) + ambientLuminance * 0.45;
        if (effectiveLight < 0.1) continue;

        const targetX = nx * radius;
        const targetY = ny * radius;
        const targetZ = nz * radius;

        if (!frozen && pointer.active) {
          const dx = dot.x - mouseRelX;
          const dy = dot.y - mouseRelY;
          const distance = Math.hypot(dx, dy) || 1;
          const influence = Math.max(0, 1 - distance / (radius * 0.9)) * strengthRef.current;
          if (influence > 0) {
            const velocityBoost = 1 + Math.min(2.2, pointerVelocity / 10);
            const sign = interactionMode === "attract" ? -1 : 1;
            if (interactionMode === "swirl") {
              const angle = Math.atan2(dy, dx) + Math.PI / 2;
              const force = influence * 12 * velocityBoost;
              dot.vx += Math.cos(angle) * force;
              dot.vy += Math.sin(angle) * force;
            } else {
              const force = influence * 11 * velocityBoost * sign;
              dot.vx += (dx / distance) * force;
              dot.vy += (dy / distance) * force;
            }
            dot.vx += pointer.vx * influence * 0.03;
            dot.vy += pointer.vy * influence * 0.03;
          }
        }

        const k = 0.09;
        const damp = 0.82;
        dot.vx = (dot.vx + (targetX - dot.x) * k) * damp;
        dot.vy = (dot.vy + (targetY - dot.y) * k) * damp;
        dot.vz = (dot.vz + (targetZ - dot.z) * k) * damp;
        dot.x += dot.vx;
        dot.y += dot.vy;
        dot.z += dot.vz;

        const fov = 850;
        const scale = fov / (fov + dot.z);
        const sx = cx + dot.x * scale;
        const sy = cy + dot.y * scale;
        const radial = Math.sqrt(dot.x * dot.x + dot.y * dot.y) / radius;
        const illumination = Math.pow(Math.min(1, effectiveLight), 1.6);
        const limb = Math.pow(Math.min(1, radial), 2.2);
        const brightness = Math.min(1, illumination * 0.45 + limb * 0.55 + ambientLuminance * 0.25);
        if (brightness < 0.08) continue;

        const specular = tone === "white" ? Math.pow(Math.max(0, (radial - 0.76) / 0.24), 2) * Math.max(0, nDotL) : 0;
        const color = tone === "white"
          ? `rgb(${lerp(rgb.r, 255, specular * 0.55)}, ${lerp(rgb.g, 255, specular * 0.55)}, ${lerp(rgb.b, 255, specular * 0.55)})`
          : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        const alpha = Math.min(1, (0.32 + 0.66 * illumination) * Math.pow(brightness, 1.25) * brightness);
        const size = dot.baseSize * scale * (0.76 + brightness * 0.46);
        visible.push({ x: sx, y: sy, z: dot.z, size, alpha, color });
      }

      visible.sort((a, b) => a.z - b.z);
      for (const dot of visible) {
        ctx.globalAlpha = dot.alpha;
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      drawLimb(ctx, cx, cy, radius, tone, glowRef.current, glowSpread, coreHotness, innerWashIntensity, strokeWidth);
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", onBlur);
    };
  }, [ambientLuminance, autoRotateSpeed, coreHotness, glowSpread, innerWashIntensity, interactionMode, plasmaNoiseIntensity, radius, rgb, seed, stippleDensity, strokeWidth, tone]);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%", pointerEvents: "none", userSelect: "none" }} />;
}
