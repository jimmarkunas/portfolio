import type { Metadata } from "next";

import Pdma2026App from "./Pdma2026App";

export const metadata: Metadata = {
  title: "PDMA 2026 — The New PM Operating System",
  description:
    "Temporary interactive PDMA 2026 presentation by Jim Markunas: The New PM Operating System — what stays uniquely human and what shifts to AI.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function Pdma2026Page() {
  return (
    <div className="pdma2026-page">
      <Pdma2026App />
    </div>
  );
}
