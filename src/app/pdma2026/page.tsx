import type { Metadata } from "next";

import Pdma2026App from "./Pdma2026App";

export const metadata: Metadata = {
  title: "PDMA 2026",
  description: "PDMA 2026 presentation.",
  robots: { index: false, follow: false },
};

export default function Pdma2026Page() {
  return <div className="pdma2026-page"><Pdma2026App /></div>;
}
