"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

import { llmDay2026Content } from "@/content/llmday2026";

import { LlmDay2026SlideFrame } from "./components/LlmDay2026SlideFrame";
import { LlmDay2026TocDialog } from "./components/LlmDay2026TocDialog";
import { useLlmDay2026Navigation } from "./hooks/useLlmDay2026Navigation";
import { useLlmDay2026Fullscreen } from "./hooks/useLlmDay2026Fullscreen";
import { useLlmDay2026Slides } from "./hooks/useLlmDay2026Slides";
import { usePresentationInsets } from "./hooks/usePresentationInsets";

export default function LlmDay2026App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const content = llmDay2026Content;
  const navCopy = content.navigation;

  const { slides, slideTitles, slideIdOrder } = useLlmDay2026Slides({
    content,
  });

  const { isFullscreen, toggleFullscreen } = useLlmDay2026Fullscreen({
    containerRef,
  });

  const {
    currentSlide,
    isTocOpen,
    setIsTocOpen,
    nextSlide,
    prevSlide,
    jumpToSlide,
  } = useLlmDay2026Navigation({
    slideCount: slides.length,
    onToggleFullscreen: toggleFullscreen,
  });

  const contentBottomInset = usePresentationInsets({
    containerRef,
    navRef,
    initialInset: 95,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 md:p-8">
      <div
        ref={containerRef}
        className="presentation-container overflow-hidden rounded-lg border border-finox-slate/20 shadow-2xl"
      >
        <div className="absolute left-0 top-0 z-50 h-1 w-full bg-finox-slate/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="absolute inset-x-0 top-0" style={{ bottom: `${contentBottomInset}px` }}>
          <LlmDay2026SlideFrame
            isActive
            brandLogoSrc={content.brandLogo.src}
            brandLogoAlt={content.brandLogo.alt}
          >
            {slides[currentSlide]}
          </LlmDay2026SlideFrame>
        </div>

        <div
          ref={navRef}
          className="absolute bottom-4 left-0 z-50 flex w-full items-center justify-between px-4 sm:px-6 md:bottom-8 md:px-12"
        >
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="group rounded-full border border-finox-slate/50 p-3 transition-all hover:bg-white hover:text-finox-dark"
              aria-label={navCopy.previousAriaLabel}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="group rounded-full border border-finox-slate/50 p-3 transition-all hover:bg-white hover:text-finox-dark"
              aria-label={navCopy.nextAriaLabel}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => setIsTocOpen(true)}
              className="rounded px-2 py-1 font-mono text-sm tracking-widest text-finox-gray underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={navCopy.openTocAriaLabel}
              aria-haspopup="dialog"
              aria-expanded={isTocOpen}
              aria-controls="llmday2026-slide-toc"
            >
              {currentSlide + 1} / {slides.length}
            </button>
            <button
              onClick={toggleFullscreen}
              className="rounded-full border border-finox-slate/50 p-3 transition-all hover:bg-white hover:text-finox-dark"
              aria-label={navCopy.toggleFullscreenAriaLabel}
            >
              {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <LlmDay2026TocDialog
          isOpen={isTocOpen}
          currentSlide={currentSlide}
          slideTitles={slideTitles}
          slideIdOrder={slideIdOrder}
          totalSlides={slides.length}
          navCopy={navCopy}
          onClose={() => setIsTocOpen(false)}
          onJumpToSlide={jumpToSlide}
        />
      </div>
    </div>
  );
}
