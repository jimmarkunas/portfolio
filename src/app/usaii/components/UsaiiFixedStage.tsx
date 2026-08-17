"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { SlideReferenceOverlay } from "./SlideReferenceOverlay";

const WIDTH = 1672;
const HEIGHT = 941;

export function UsaiiFixedStage({ children }: { children: ReactNode }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const reference = useSearchParams().get("reference");
  const showMarkers = reference === "ghost" || reference === "difference";

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const update = () => setScale(Math.min(viewport.clientWidth / WIDTH, viewport.clientHeight / HEIGHT));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={viewportRef} className="usaii-stage-viewport relative h-full w-full overflow-hidden">
      <div className="usaii-stage absolute left-0 top-0 h-[941px] w-[1672px]" style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
        <SlideReferenceOverlay />
        {showMarkers ? <div className="pointer-events-none absolute inset-0 z-[110] border border-red-500" /> : null}
      </div>
    </div>
  );
}
