"use client";

import { PBDSOrb } from "@/components/pbds/orb/PBDSOrb";

export default function PbdsOrbEmbedPage() {
  return (
    <main className="pbds-orb-embed" aria-label="PBDS kinetic orb animation">
      <PBDSOrb preset="magentaRight" />

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
