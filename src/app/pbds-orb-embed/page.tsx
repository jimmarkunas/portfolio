"use client";

import { PBDSKineticSphere } from "@/app/pdma2026-orb-lab/PBDSKineticSphereLab";

export default function PbdsOrbEmbedPage() {
  return (
    <main className="pbds-orb-embed" aria-label="PBDS kinetic orb animation">
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

      <style jsx global>{`
        html,
        body {
          margin: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #090909;
        }

        body {
          min-height: 100vh;
        }

        .pbds-orb-embed {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #090909;
        }

        .pbds-orb-embed > div {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </main>
  );
}
