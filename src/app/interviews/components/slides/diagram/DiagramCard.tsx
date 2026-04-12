import type { KeyboardEvent, MouseEvent, PointerEvent } from "react";

import type { Slide5NodeLayout } from "./slide5Diagram.types";

interface DiagramCardProps {
  node: Slide5NodeLayout;
  label: string;
  isActive?: boolean;
  onActivate?: () => void;
}

export default function DiagramCard({
  node,
  label,
  isActive = false,
  onActivate,
}: DiagramCardProps) {
  const isWaterfall = node.theme === "waterfall";
  const isInteractive = Boolean(onActivate);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onActivate) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!onActivate) return;
    event.stopPropagation();
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!onActivate) return;
    event.stopPropagation();
    onActivate();
  };

  return (
    <div
      tabIndex={0}
      role={isInteractive ? "button" : undefined}
      aria-pressed={isInteractive ? isActive : undefined}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`absolute z-20 inline-flex items-center justify-center overflow-hidden border px-2.5 py-2 text-center text-sm font-medium leading-tight transition-[background-color,color,border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F3F3F3] ${
        isInteractive ? "cursor-pointer" : ""
      } ${
        isActive ? "ring-1 ring-[#447ACB] shadow-[0_0_0_2px_rgba(68,122,203,0.22)]" : ""
      } ${
        isWaterfall
          ? "bg-[#F3F3F3] text-[#222222] border-[#F3F3F3] hover:bg-[#222222] hover:text-[#F3F3F3] hover:border-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
          : "bg-[#222222] text-[#F3F3F3] border-[#F3F3F3] hover:bg-[#F3F3F3] hover:text-[#222222] hover:border-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
      }`}
      style={{
        left: node.x,
        top: node.y,
        width: node.w,
        height: node.h,
        borderRadius: node.radius ?? 8,
      }}
    >
      <span>{label}</span>
    </div>
  );
}
