"use client";

import { PresentationRuntime } from "@/components/presentation/PresentationRuntime";
import { galleryDecorationRecipes } from "./galleryDecorationRecipes";
import { galleryNavigationCopy, galleryPresentationSpec, renderGallerySlide, validateGallerySpec } from "./templateManifest";

export default function TemplatePresentation() {
  validateGallerySpec();
  return <PresentationRuntime
    spec={galleryPresentationSpec}
    navigation={galleryNavigationCopy}
    brandAsset="/pdma2026/slide-01/canonical-asterisk.svg"
    tocDialogId="pdma2026-slide-toc"
    decorationRecipes={galleryDecorationRecipes}
    renderSlide={renderGallerySlide}
  />;
}
