"use client";

import { Fragment } from "react";
import { PresentationShell } from "@/components/presentation/PresentationShell";
import { pdmaAssets } from "@/app/pdma2026/pdmaAssets";
import { PdmaScenarioExercise } from "@/app/pdma2026/exercise/PdmaScenarioExercise";
import type { PdmaSlideManifestEntry } from "@/components/presentation/presentationTypes";
import { renderTemplate, renderTemplateVariant } from "@/components/presentation/templates/renderTemplate";
import { pdma2026Content } from "@/content/pdma2026";
import { assertTemplateManifestParity, templateGalleryEntries, templateManifest } from "./templateManifest";

export default function TemplatePresentation() {
  const slides = templateGalleryEntries.map(({ content, variantId }, index) => (
    <Fragment key={templateManifest[index].key}>
      {variantId
        ? renderTemplateVariant(content, variantId, { app: content.kind === "embedded-app" ? <PdmaScenarioExercise /> : undefined })
        : renderTemplate(content, { app: content.kind === "embedded-app" ? <PdmaScenarioExercise /> : undefined })}
    </Fragment>
  ));
  assertTemplateManifestParity(templateManifest, slides);
  return <PresentationShell slides={slides} slideManifest={[...templateManifest] as PdmaSlideManifestEntry[]} navigation={pdma2026Content.navigation} brandLabel="PDMA 2026" brandAsset={pdmaAssets.asterisk} tocDialogId="pdma2026-slide-toc" />;
}
