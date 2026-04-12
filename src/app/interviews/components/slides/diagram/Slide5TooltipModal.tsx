"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type {
  Slide5TooltipContent,
  Slide5TooltipTheme,
} from "./slide5Diagram.types";

interface Slide5TooltipModalProps {
  tip: Slide5TooltipContent | null;
  onClose: () => void;
  shouldReduceMotion: boolean;
  theme: Slide5TooltipTheme;
}

export default function Slide5TooltipModal({
  tip,
  onClose,
  shouldReduceMotion,
  theme,
}: Slide5TooltipModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!tip || typeof window === "undefined") return;

    const body = document.body;
    const root = document.documentElement;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [tip]);

  useEffect(() => {
    if (!tip || shouldReduceMotion) return;
    const el = cardRef.current;
    if (!el) return;

    el.animate(
      [
        { opacity: 0, transform: "scale(0.98) translateY(12px)" },
        { opacity: 1, transform: "scale(1) translateY(0)" },
      ],
      { duration: 200, easing: "ease", fill: "forwards" },
    );
  }, [shouldReduceMotion, tip]);

  if (!tip || !isMounted) return null;

  const modal = (
    <div
      onPointerDown={(event) => event.stopPropagation()}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.overlayColor,
        backdropFilter: "blur(2px)",
        zIndex: 90,
        padding: 16,
      }}
    >
      <div
        ref={cardRef}
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(920px, calc(100vw - 32px))",
          borderRadius: "clamp(16px, 2vw, 24px)",
          border: `1px solid ${theme.borderColor}`,
          background: theme.backgroundColor,
          boxShadow: theme.shadow,
          padding: "clamp(14px, 1.3vw, 18px) clamp(16px, 1.6vw, 22px) clamp(18px, 2vw, 24px)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "clamp(8px, 1.1vw, 12px)" }}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: "clamp(34px, 2.8vw, 44px)",
              height: "clamp(34px, 2.8vw, 44px)",
              border: `1px solid ${theme.closeBorderColor}`,
              borderRadius: 9999,
              background: "transparent",
              color: theme.closeColor,
              cursor: "pointer",
              fontSize: "clamp(20px, 1.8vw, 28px)",
              fontWeight: 300,
              lineHeight: "1",
              textAlign: "center",
            }}
          >
            ×
          </button>
        </div>

        {tip.label ? (
          <div
            style={{
              fontSize: "clamp(11px, 0.95vw, 14px)",
              fontWeight: 500,
              letterSpacing: "0.11em",
              textTransform: "uppercase",
              color: theme.labelColor,
              marginBottom: "clamp(10px, 1.2vw, 16px)",
            }}
          >
            {tip.label}
          </div>
        ) : null}

        <div
          style={{
            fontSize: "clamp(24px, 2.6vw, 40px)",
            fontWeight: 400,
            color: theme.titleColor,
            marginBottom: "clamp(12px, 1.5vw, 18px)",
            lineHeight: 1.22,
          }}
        >
          {tip.title}
        </div>

        <div
          style={{
            width: "clamp(36px, 6vw, 64px)",
            height: 1,
            background: theme.dividerColor,
            marginBottom: "clamp(12px, 1.5vw, 18px)",
          }}
        />

        <div
          style={{
            fontSize: "clamp(15px, 1.45vw, 22px)",
            lineHeight: 1.55,
            color: theme.bodyColor,
          }}
        >
          {tip.body}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}