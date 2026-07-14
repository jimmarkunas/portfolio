import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

import type { Geekle2026Content } from "@/content/presentations/geekle2026";

type GeeklePresentationControlsProps = {
  currentSlide: number;
  slideCount: number;
  isFullscreen: boolean;
  navCopy: Geekle2026Content["navigation"];
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onToggleFullscreen: () => void;
};

export function GeeklePresentationControls({
  currentSlide,
  slideCount,
  isFullscreen,
  navCopy,
  onPrevSlide,
  onNextSlide,
  onToggleFullscreen,
}: GeeklePresentationControlsProps) {
  return (
    <div className="absolute bottom-4 left-0 z-50 flex w-full items-center justify-between px-4 sm:px-6 md:bottom-8 md:px-12">
      <div className="flex gap-4">
        <button
          onClick={onPrevSlide}
          className="group rounded-full border border-finox-slate/50 p-3 transition-colors hover:bg-white hover:text-finox-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={navCopy.previousAriaLabel}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={onNextSlide}
          className="group rounded-full border border-finox-slate/50 p-3 transition-colors hover:bg-white hover:text-finox-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={navCopy.nextAriaLabel}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center gap-8">
        <div className="font-mono text-sm tracking-widest text-finox-gray">
          {currentSlide + 1} / {slideCount}
        </div>
        <button
          onClick={onToggleFullscreen}
          className="rounded-full border border-finox-slate/50 p-3 transition-colors hover:bg-white hover:text-finox-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={navCopy.toggleFullscreenAriaLabel}
        >
          {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}
