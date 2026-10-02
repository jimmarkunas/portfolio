"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PDMA_LOGICAL_CANVAS } from "./presentationTypes";

export function PresentationCanvas({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState({ scale: 1, left: 0, top: 0 });
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const update = () => {
      const scale = Math.min(stage.clientWidth / PDMA_LOGICAL_CANVAS.width, stage.clientHeight / PDMA_LOGICAL_CANVAS.height);
      const renderedWidth = PDMA_LOGICAL_CANVAS.width * scale;
      const renderedHeight = PDMA_LOGICAL_CANVAS.height * scale;
      const extraX = Math.max(0, stage.clientWidth - renderedWidth);
      const extraY = Math.max(0, stage.clientHeight - renderedHeight);
      setFrame({ scale, left: extraX / 2, top: extraY * 0.25 });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  return <div ref={stageRef} className="pdma-canvas-stage"><div className="pdma-logical-canvas" style={{ left: frame.left, top: frame.top, transform: `scale(${frame.scale})` }}>{children}</div></div>;
}
