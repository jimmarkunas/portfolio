"use client";

import type { CSSProperties, ReactNode } from "react";
import { PresentationCanvas } from "@/components/presentation/PresentationCanvas";
import type { PresentationTitleConfig } from "@/components/presentation/presentationTypes";
import { DecorativeLayer, type DecorItem } from "./DecorativeLayer";

/** `.pdma-title-block` top edge in the shared shell stylesheet (10.925926% of the 1080 logical canvas). */
const TITLE_BLOCK_TOP = 118;

/**
 * The shared presentation chrome renders the title overlay above the slide body. Its bottom edge is
 * derived from the same title config, so template bodies start in normal flow below it.
 */
export function shellTitleBottom(config: PresentationTitleConfig) {
  const rows = config.sameRow ? 1 : [config.white, config.magenta].filter(Boolean).length;
  const titleHeight = rows * (config.leading ?? config.size);
  const subtitleLines = config.subtitle ? config.subtitle.split("\n").length : 0;
  const subtitleHeight = subtitleLines ? (config.subtitleOffset ?? 18) + subtitleLines * (config.subtitleLeading ?? 36) : 0;
  return TITLE_BLOCK_TOP + titleHeight + subtitleHeight;
}

/**
 * `kind` names the composition (a template kind, or a deck-specific composition such as a
 * preserved production slide). Decoration comes from a registered variant or explicit items.
 */
export function TemplateSlide({ kind, title, decorativeVariant = "none", decorItems, children }: { kind: string; title: PresentationTitleConfig; decorativeVariant?: string; decorItems?: readonly DecorItem[]; children: ReactNode }) {
  return <PresentationCanvas>
    <div className={`pdmat-slide pdmat-slide--${kind}`} data-template-kind={kind} style={{ "--pdmat-title-bottom": `${shellTitleBottom(title)}px` } as CSSProperties}>
      <DecorativeLayer recipeId={decorativeVariant} items={decorItems} />
      <div className="pdmat-stage">{children}</div>
    </div>
  </PresentationCanvas>;
}
