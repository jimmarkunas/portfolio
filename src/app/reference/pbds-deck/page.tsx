import type { Metadata } from "next"

import { PbdsDeckDemo } from "./PbdsDeckDemo"

export const metadata: Metadata = {
  title: "PBDS Presentation Engine Proof",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PbdsDeckReferencePage() {
  return <PbdsDeckDemo />
}
