import { useCallback, useEffect, useState } from "react";

type UseGeekleNavigationParams = {
  slideCount: number;
  onToggleFullscreen: () => void;
};

export function useGeekleNavigation({
  slideCount,
  onToggleFullscreen,
}: UseGeekleNavigationParams) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (currentSlide < slideCount) return;
    setCurrentSlide(Math.max(0, slideCount - 1));
  }, [currentSlide, slideCount]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "f") onToggleFullscreen();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, onToggleFullscreen, prevSlide]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
  };
}
