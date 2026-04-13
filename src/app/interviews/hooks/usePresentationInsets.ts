import { useEffect, useState } from "react";

type UsePresentationInsetsParams = {
  containerRef: React.RefObject<HTMLDivElement>;
  navRef: React.RefObject<HTMLDivElement>;
  initialInset?: number;
};

export function usePresentationInsets({
  containerRef,
  navRef,
  initialInset = 95,
}: UsePresentationInsetsParams) {
  const [contentBottomInset, setContentBottomInset] = useState(initialInset);

  useEffect(() => {
    const updateContentInset = () => {
      const containerEl = containerRef.current;
      const navEl = navRef.current;
      if (!containerEl || !navEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      const navTop = navRect.top - containerRect.top;
      const nextInset = Math.max(0, containerRect.height - navTop + 15);

      setContentBottomInset((currentInset) => {
        if (Math.abs(currentInset - nextInset) < 0.5) return currentInset;
        return nextInset;
      });
    };

    updateContentInset();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateContentInset);
      return () => window.removeEventListener("resize", updateContentInset);
    }

    const observer = new ResizeObserver(updateContentInset);
    if (containerRef.current) observer.observe(containerRef.current);
    if (navRef.current) observer.observe(navRef.current);
    window.addEventListener("resize", updateContentInset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateContentInset);
    };
  }, [containerRef, navRef]);

  return contentBottomInset;
}
