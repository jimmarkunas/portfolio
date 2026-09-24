"use client";

import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import "../pdma2026-templates/styles/templates.css";
import "../pdma2026/presentation/presentation.css";

import { pdma2026Content } from "@/content/pdma2026";
import { PdmaPresentationShell } from "@/app/pdma2026/PdmaPresentationShell";
import { pdma2026Manifest } from "@/app/pdma2026/presentation/pdma2026Manifest";
import { PBDSKineticSphere } from "./PBDSKineticSphereLab";

type LabMode = "reference" | "direct-port";

const slide12 = pdma2026Manifest[11];
const Slide12Component = slide12.component;

function DirectPortOrbs({ mode }: { mode: LabMode }) {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHost(document.querySelector<HTMLElement>(".pdma2026-orb-lab .pdmat-slide--framework-to-product"));
  }, []);

  if (!host || mode !== "direct-port") return null;

  return createPortal(
    <div className="pbds-orb-lab__overlay" aria-hidden="true">
      <div className="pbds-orb-lab__orb-layer pbds-orb-lab__orb-layer--left">
        <PBDSKineticSphere
          radius={290}
          skinStyle="custom"
          accentColor="#E2E8F0"
          primaryDotColor="#E2E8F0"
          interactionMode="repel"
          interactionStrength={1}
          autoRotateSpeed={0.0012}
          cropPosition="orb-left"
          plasmaNoiseIntensity={1}
          stippleDensity={8500}
          ambientLuminance={0.38}
          glowingStrokeIntensity={0.2}
          strokeMode="crescent"
          strokeShadowOpacity={0}
          strokeWidth={0.7}
          bodyOpacity={0}
          interactive
        />
      </div>
      <div className="pbds-orb-lab__orb-layer pbds-orb-lab__orb-layer--right">
        <PBDSKineticSphere
          radius={290}
          skinStyle="canonical-magenta"
          accentColor="#FF2FAE"
          primaryDotColor="#FF2FAE"
          interactionMode="repel"
          interactionStrength={1}
          autoRotateSpeed={0.0012}
          cropPosition="orb-right"
          plasmaNoiseIntensity={1}
          stippleDensity={8500}
          ambientLuminance={0.38}
          glowingStrokeIntensity={0.2}
          strokeMode="crescent"
          strokeShadowOpacity={0}
          strokeWidth={0.5}
          bodyOpacity={0}
          interactive
        />
      </div>
    </div>,
    host,
  );
}

export default function PdmaOrbLabPage() {
  const [mode, setMode] = useState<LabMode>("direct-port");

  return (
    <div className={`pdma2026-page pdma2026-orb-lab ${mode === "direct-port" ? "is-direct-port" : "is-reference"}`}>
      <PdmaPresentationShell
        slides={[
          <Fragment key="slide-12-orb-lab">
            <Slide12Component />
            <DirectPortOrbs mode={mode} />
          </Fragment>,
        ]}
        slideManifest={[slide12]}
        navigation={pdma2026Content.navigation}
      />

      <aside className="pbds-orb-lab__toolbar" aria-label="PBDS orb lab controls">
        <div className="pbds-orb-lab__toolbar-heading">
          <strong>PBDS ORB LAB</strong>
          <span>Slide 12 · supplied renderer baseline</span>
        </div>
        <div className="pbds-orb-lab__mode" role="group" aria-label="Orb rendering mode">
          <button className={mode === "reference" ? "is-active" : undefined} onClick={() => setMode("reference")}>Reference PNG</button>
          <button className={mode === "direct-port" ? "is-active" : undefined} onClick={() => setMode("direct-port")}>Direct port</button>
        </div>
        <span className="pbds-orb-lab__note">Captured Grey + Magenta presets · no image underneath</span>
      </aside>

      <style jsx global>{`
        .pdma2026-orb-lab { position: fixed; inset: 0; background: #090909; }
        .pdma2026-orb-lab .pdma-title-1 { left: 94px; top: 122px; }
        .pdma2026-orb-lab .pdma-title-1 .pdma-title-magenta-row { line-height: var(--title-leading); }
        .pdma2026-orb-lab.is-direct-port .pdmat-slide--framework-to-product .pdmat-deco .pdmat-deco-item { opacity: 0 !important; }

        .pbds-orb-lab__overlay {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .pbds-orb-lab__orb-layer {
          position: absolute;
          inset: 0;
          width: 1920px;
          height: 1080px;
          pointer-events: auto;
          user-select: none;
        }
        .pbds-orb-lab__orb-layer--left { clip-path: inset(0 78% 0 0); }
        .pbds-orb-lab__orb-layer--right { clip-path: inset(0 0 0 78%); }
        .pbds-orb-lab__orb-layer > div { width: 100%; height: 100%; }

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
          background: rgba(9,9,9,.92);
          box-shadow: 0 12px 36px rgba(0,0,0,.32);
          color: #f2f2f5;
          font: 600 12px/1.2 Inter, ui-sans-serif, system-ui, sans-serif;
          letter-spacing: .02em;
          backdrop-filter: blur(12px);
        }
        .pbds-orb-lab__toolbar-heading { display: grid; gap: 2px; min-width: 190px; }
        .pbds-orb-lab__toolbar-heading strong { color: #ff2fae; font-size: 12px; letter-spacing: .14em; }
        .pbds-orb-lab__toolbar-heading span, .pbds-orb-lab__note { color: #939598; font-size: 10px; font-weight: 500; }
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
        @media (max-width: 900px) { .pbds-orb-lab__toolbar { flex-wrap: wrap; } }
      `}</style>
    </div>
  );
}
