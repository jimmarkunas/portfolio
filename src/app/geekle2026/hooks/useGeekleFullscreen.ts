import { useCallback, useState, type RefObject } from "react";

type UseGeekleFullscreenParams = {
  containerRef: RefObject<HTMLDivElement>;
};

export function useGeekleFullscreen({ containerRef }: UseGeekleFullscreenParams) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
      return;
    }

    document.exitFullscreen();
    setIsFullscreen(false);
  }, [containerRef]);

  return {
    isFullscreen,
    toggleFullscreen,
  };
}
