"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { pdma2026Slides } from "@/content/pdma2026/slides";

const LAST_INDEX = pdma2026Slides.length - 1;

function indexFromHash() {
  if (typeof window === "undefined") return 0;
  const parsed = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(Math.max(parsed - 1, 0), LAST_INDEX);
}

export default function Pdma2026App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), 1600);
  }, []);

  const goTo = useCallback((nextIndex: number) => {
    const clamped = Math.min(Math.max(nextIndex, 0), LAST_INDEX);
    setSlideIndex(clamped);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${clamped + 1}`);
    }
  }, []);

  const next = useCallback(() => goTo(slideIndex + 1), [goTo, slideIndex]);
  const previous = useCallback(() => goTo(slideIndex - 1), [goTo, slideIndex]);

  const toggleFullscreen = useCallback(async () => {
    if (typeof document === "undefined") return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    setSlideIndex(indexFromHash());
    showControls();

    const handleHashChange = () => setSlideIndex(indexFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [showControls]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          event.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          previous();
          break;
        case "Home":
          event.preventDefault();
          goTo(0);
          break;
        case "End":
          event.preventDefault();
          goTo(LAST_INDEX);
          break;
        case "f":
        case "F":
          event.preventDefault();
          void toggleFullscreen();
          break;
      }
      showControls();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goTo, next, previous, showControls, toggleFullscreen]);

  useEffect(() => {
    const candidates = [slideIndex - 1, slideIndex + 1].filter(
      (index) => index >= 0 && index <= LAST_INDEX,
    );

    for (const index of candidates) {
      const image = new Image();
      image.src = pdma2026Slides[index].imageUrl;
    }
  }, [slideIndex]);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const slide = pdma2026Slides[slideIndex];

  return (
    <main
      className="pdma2026-presenter"
      onPointerMove={showControls}
      onDoubleClick={() => void toggleFullscreen()}
    >
      <section
        className="pdma2026-stage"
        aria-label={`PDMA 2026 presentation, slide ${slide.id} of ${pdma2026Slides.length}: ${slide.title}`}
        onClick={(event) => {
          const target = event.target as HTMLElement;
          if (target.closest("button")) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left + bounds.width / 2) previous();
          else next();
        }}
      >
        {/* Exact Figma frame export. Figma remains the editable visual source. */}
        <img
          key={slide.imageUrl}
          className="pdma2026-slide-image"
          src={slide.imageUrl}
          alt={`Slide ${slide.id}: ${slide.title}`}
          draggable={false}
        />
      </section>

      <nav
        className="pdma2026-controls"
        data-visible={controlsVisible ? "true" : "false"}
        aria-label="Presentation controls"
      >
        <button type="button" onClick={previous} disabled={slideIndex === 0} aria-label="Previous slide">
          ←
        </button>
        <span aria-live="polite">
          {slide.id} / {pdma2026Slides.length}
        </span>
        <button type="button" onClick={next} disabled={slideIndex === LAST_INDEX} aria-label="Next slide">
          →
        </button>
        <button type="button" onClick={() => void toggleFullscreen()} aria-label="Toggle fullscreen">
          ⛶
        </button>
      </nav>
    </main>
  );
}
