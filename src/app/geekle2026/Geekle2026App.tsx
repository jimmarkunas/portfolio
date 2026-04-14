"use client";

import { useRef } from "react";

import { geekle2026Content } from "@/content/presentations/geekle2026";

import { GeeklePresentationControls } from "./components/GeeklePresentationControls";
import { GeekleProgressBar } from "./components/GeekleProgressBar";
import { GeekleSlideFrame } from "./components/GeekleSlideFrame";
import { useGeekleFullscreen } from "./hooks/useGeekleFullscreen";
import { useGeekleNavigation } from "./hooks/useGeekleNavigation";
import { useGeekleSlides } from "./hooks/useGeekleSlides";

export default function Geekle2026App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = geekle2026Content;

  const { slides } = useGeekleSlides({ content });
  const { isFullscreen, toggleFullscreen } = useGeekleFullscreen({ containerRef });
  const { currentSlide, nextSlide, prevSlide } = useGeekleNavigation({
    slideCount: slides.length,
    onToggleFullscreen: toggleFullscreen,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 md:p-8">
      <div
        ref={containerRef}
        className="presentation-container overflow-hidden rounded-lg border border-finox-slate/20 shadow-2xl"
      >
        <GeekleProgressBar currentSlide={currentSlide} slideCount={slides.length} />

        <div className="relative flex-1">
          <GeekleSlideFrame isActive>{slides[currentSlide]}</GeekleSlideFrame>
        </div>

        <GeeklePresentationControls
          currentSlide={currentSlide}
          slideCount={slides.length}
          isFullscreen={isFullscreen}
          navCopy={content.navigation}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
          onToggleFullscreen={toggleFullscreen}
        />
      </div>
    </div>
  );
}
