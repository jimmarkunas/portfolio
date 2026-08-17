"use client";

import { useSearchParams } from "next/navigation";

export function SlideReferenceOverlay() {
  const mode = useSearchParams().get("reference");
  if (mode !== "ghost" && mode !== "difference") return null;

  return (
    <img
      src="/usaii/reference/slide01.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-[100] h-[941px] w-[1672px]"
      style={{ opacity: mode === "ghost" ? 0.5 : 1, mixBlendMode: mode === "difference" ? "difference" : "normal" }}
    />
  );
}
