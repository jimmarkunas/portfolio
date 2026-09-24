"use client";

import type { CSSProperties, ReactNode } from "react";
import { PdmaSlideCanvas } from "@/app/pdma2026/PdmaPresentationShell";
import type { PdmaTitleConfig } from "@/app/pdma2026/pdma.config";
import type { DecorativeVariant, TemplateKind } from "../templateTypes";
import { DecorativeLayer } from "./DecorativeLayer";

/** `.pdma-title-block` top edge in the shared shell stylesheet (10.925926% of the 1080 logical canvas). */
const SHELL_TITLE_TOP = 118;

/**
 * The reused shell renders PdmaTitleBlock above the slide body. Its bottom edge is
 * derived from the same title config, so template bodies start in normal flow below it.
 */
export function shellTitleBottom(config: PdmaTitleConfig) {
  const rows = config.sameRow ? 1 : [config.white, config.magenta].filter(Boolean).length;
  const titleHeight = rows * (config.leading ?? config.size);
  const subtitleLines = config.subtitle ? config.subtitle.split("\n").length : 0;
  const subtitleHeight = subtitleLines ? (config.subtitleOffset ?? 18) + subtitleLines * (config.subtitleLeading ?? 36) : 0;
  return SHELL_TITLE_TOP + titleHeight + subtitleHeight;
}

export function TemplateSlide({ kind, title, decorativeVariant, children }: { kind: TemplateKind; title: PdmaTitleConfig; decorativeVariant: DecorativeVariant; children: ReactNode }) {
  return <PdmaSlideCanvas>
    <div className={`pdmat-slide pdmat-slide--${kind}`} data-template-kind={kind} style={{ "--pdmat-title-bottom": `${shellTitleBottom(title)}px` } as CSSProperties}>
      <DecorativeLayer variant={decorativeVariant} />
      <div className="pdmat-stage">{children}</div>
    </div>
  </PdmaSlideCanvas>;
}
