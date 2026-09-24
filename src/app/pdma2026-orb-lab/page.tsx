"use client";

import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import "../pdma2026-templates/styles/templates.css";
import "../pdma2026/presentation/presentation.css";

import { pdma2026Content } from "@/content/pdma2026";
import { PdmaPresentationShell } from "@/app/pdma2026/PdmaPresentationShell";
import { pdma2026Manifest } from "@/app/pdma2026/presentation/pdma2026Manifest";
import { PBDSKineticSphereLab } from "./PBDSKineticSphereLab";

type LabMode = "reference" | "procedural";

const slide12 = pdma2026Manifest[11];
const Slide12Component = slide12.component;

function SphereOverlay({
  mode,
  strength,
  rotation,
  glow,
  paused,
}: {
  mode: LabMode;
  strength: number;
  rotation: number;
  glow: number;
  paused: boolean;
}) {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHost(document.querySelector<HTMLElement>(".pdma2026-orb-lab .pdmat-slide--framework-to-product"));
  }, []);

  if (!host || mode !== "procedural") return null;

  return createPortal(
    <div className="pbds-orb-lab__overlay" aria-hidden="true">
      <div className="pbds-orb-lab__sphere" style={{ left: -751, top: 87, width: 950, height: 950 }}>
        <PBDSKineticSphereLab
          tone="white"
          radius={455}
          seed={1201}
          interactionStrength={strength}
          rotationScale={rotation}
          stippleDensity={8500}
          ambientLuminance={0.38}
          plasmaNoiseIntensity={1}
          glowIntensity={glow}
          glowSpread={9}
          coreHotness={0.28}
          innerWashIntensity={0.04}
          strokeWidth={0.42}
          paused={paused}
        />
      </div>
      <div className="pbds-orb-lab__sphere" style={{ left: 1733, top: 82, width: 1000, height: 1000 }}>
        <PBDSKineticSphereLab
          tone="magenta"
          radius={480}
          seed={1202}
          interactionStrength={strength}
          rotationScale={rotation}
          stippleDensity={8500}
          ambientLuminance={0.38}
          plasmaNoiseIntensity={1}
          glowIntensity={glow * 0.85}
          glowSpread={9}
          coreHotness={0.22}
          innerWashIntensity={0.03}
          strokeWidth={0.38}
          paused={paused}
        />
      </div>
    </div>,
    host,
  );
}

export default function PdmaOrbLabPage() {
  const [mode, setMode] = useState<LabMode>("procedural");
  const [strength, setStrength] = useState(1);
  const [rotation, setRotation] = useState(1);
  const [glow, setGlow] = useState(0.12);
  const [paused, setPaused] = useState(false);

  return (
    <div className={`pdma2026-page pdma2026-orb-lab ${mode === "procedural" ? "is-procedural" : "is-reference"}`}>
      <PdmaPresentationShell
        slides={[
          <Fragment key="slide-12-orb-lab">
            <Slide12Component />
            <SphereOverlay mode={mode} strength={strength} rotation={rotation} glow={glow} paused={paused} />
          </Fragment>,
        ]}
        slideManifest={[slide12]}
        navigation={pdma2026Content.navigation}
      />

      <aside className="pbds-orb-lab__toolbar" aria-label="PBDS orb lab controls">
        <div className="pbds-orb-lab__toolbar-heading">
          <strong>PBDS ORB LAB</strong>
          <span>Slide 12 · full procedural Framer-port test</span>
        </div>
        <div className="pbds-orb-lab__mode" role="group" aria-label="Orb rendering mode">
          <button className={mode === "reference" ? "is-active" : undefined} onClick={() => setMode("reference")}>Reference</button>
          <button className={mode === "procedural" ? "is-active" : undefined} onClick={() => setMode("procedural")}>Procedural</button>
        </div>
        <label>
          <span>Mouse velocity</span>
          <input type="range" min="0" max="2.4" step="0.05" value={strength} onChange={(event) => setStrength(Number(event.currentTarget.value))} />
          <output>{strength.toFixed(2)}×</output>
        </label>
        <label>
          <span>Rotation</span>
          <input type="range" min="0" max="2.5" step="0.05" value={rotation} onChange={(event) => setRotation(Number(event.currentTarget.value))} />
          <output>{rotation.toFixed(2)}×</output>
        </label>
        <label>
          <span>Limb glow</span>
          <input type="range" min="0" max="0.5" step="0.01" value={glow} onChange={(event) => setGlow(Number(event.currentTarget.value))} />
          <output>{glow.toFixed(2)}</output>
        </label>
        <button className="pbds-orb-lab__pause" onClick={() => setPaused((value) => !value)}>{paused ? "Resume motion" : "Pause motion"}</button>
      </aside>

      <style jsx global>{`
        .pdma2026-orb-lab { position: fixed; inset: 0; background: #090909; }
        .pdma2026-orb-lab .pdma-title-1 { left: 94px; top: 122px; }
        .pdma2026-orb-lab .pdma-title-1 .pdma-title-magenta-row { line-height: var(--title-leading); }
        .pdma2026-orb-lab.is-procedural .pdmat-slide--framework-to-product .pdmat-deco .pdmat-deco-item { opacity: 0 !important; }
        .pbds-orb-lab__overlay { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .pbds-orb-lab__sphere { position: absolute; pointer-events: none; user-select: none; }
        .pbds-orb-lab__toolbar {
          position: fixed;
          z-index: 50;
          left: 18px;
          top: 18px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 10px 12px;
          max-width: calc(100vw - 36px);
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 12px;
          background: rgba(9,9,9,.9);
          box-shadow: 0 12px 36px rgba(0,0,0,.32);
          color: #f2f2f5;
          font: 600 12px/1.2 Inter, ui-sans-serif, system-ui, sans-serif;
          letter-spacing: .02em;
          backdrop-filter: blur(12px);
        }
        .pbds-orb-lab__toolbar-heading { display: grid; gap: 2px; min-width: 155px; }
        .pbds-orb-lab__toolbar-heading strong { color: #ff2fae; font-size: 12px; letter-spacing: .14em; }
        .pbds-orb-lab__toolbar-heading span { color: #939598; font-size: 10px; font-weight: 500; }
        .pbds-orb-lab__mode { display: flex; gap: 4px; }
        .pbds-orb-lab__toolbar button {
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 8px;
          background: #15181b;
          color: #d9dade;
          padding: 7px 9px;
          cursor: pointer;
        }
        .pbds-orb-lab__toolbar button:hover { border-color: rgba(255,47,174,.55); color: #fff; }
        .pbds-orb-lab__toolbar button.is-active { border-color: #ff2fae; color: #fff; box-shadow: 0 0 14px rgba(255,47,174,.18); }
        .pbds-orb-lab__toolbar label { display: grid; grid-template-columns: auto 115px 42px; align-items: center; gap: 7px; color: #d9dade; white-space: nowrap; }
        .pbds-orb-lab__toolbar input { accent-color: #ff2fae; width: 115px; }
        .pbds-orb-lab__toolbar output { color: #ff2fae; font-variant-numeric: tabular-nums; }
        .pbds-orb-lab__pause { white-space: nowrap; }
        @media (max-width: 1200px) {
          .pbds-orb-lab__toolbar { flex-wrap: wrap; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pbds-orb-lab__toolbar::after { content: "Reduced motion active"; color: #939598; font-size: 10px; }
        }
      `}</style>
    </div>
  );
}
