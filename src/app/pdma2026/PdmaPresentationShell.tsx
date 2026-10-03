"use client";

import type { ReactNode } from "react";
import { PresentationCanvas } from "@/components/presentation/PresentationCanvas";
import { PresentationRuntime } from "@/components/presentation/PresentationRuntime";
import type { PresentationSlideSpec, PresentationSpec } from "@/components/presentation/presentationTypes";
import type { PresentationNavigationCopy } from "@/lib/presentation";
import { pdmaAssets } from "./pdmaAssets";
import { pdmaDecorativeRecipes } from "./presentation/pdmaDecorativeRecipes";
import type { PdmaSlideManifestEntry } from "./presentation/presentationTypes";

/** PDMA route adapter; canvas helper remains for standalone and lab surfaces. */
export function PdmaSlideCanvas({ children }: { children: ReactNode }) {
  return <PresentationCanvas>{children}</PresentationCanvas>;
}

type PdmaPresentationShellProps = {
  slides?: ReactNode[];
  slideManifest?: readonly PdmaSlideManifestEntry[];
  navigation: PresentationNavigationCopy;
  spec?: PresentationSpec;
  renderSpecSlide?: (slide: PresentationSlideSpec, index: number) => ReactNode;
  decorationRecipes?: typeof pdmaDecorativeRecipes;
  brandAsset?: string;
  tocDialogId?: string;
};

export function PdmaPresentationShell({ slides, slideManifest, navigation, spec, renderSpecSlide, decorationRecipes = pdmaDecorativeRecipes, brandAsset = pdmaAssets.asterisk, tocDialogId = "pdma2026-slide-toc" }: PdmaPresentationShellProps) {
  const runtimeSpec: PresentationSpec = spec ?? {
    schemaVersion: 1,
    id: "pdma2026",
    chromeId: "pbds-presentation",
    metadata: { title: "PDMA 2026", brandLabel: "PDMA 2026" },
    navigationCopyId: "pdma2026-navigation",
    slides: (slideManifest ?? []).map((entry) => ({
      id: entry.id,
      tocTitle: entry.tocTitle,
      headerLabels: entry.headerLabels,
      footerLabel: entry.footerLabel,
      title: entry.title,
      composition: { type: "deck-local", compositionId: "legacy-slide-adapter", content: null },
    })),
  };
  const render = renderSpecSlide ?? ((_slide: PresentationSlideSpec, index: number) => slides?.[index] ?? null);
  return <PresentationRuntime spec={runtimeSpec} navigation={navigation} brandAsset={brandAsset} tocDialogId={tocDialogId} renderSlide={render} decorationRecipes={decorationRecipes} />;
}
