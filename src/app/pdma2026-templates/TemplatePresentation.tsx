"use client";

import { Fragment } from "react";
import { PdmaPresentationShell } from "@/app/pdma2026/PdmaPresentationShell";
import { PdmaScenarioExercise } from "@/app/pdma2026/exercise/PdmaScenarioExercise";
import type { PdmaSlideManifestEntry } from "@/components/presentation/presentationTypes";
import { renderTemplate } from "@/components/presentation/templates/renderTemplate";
import { pdma2026Content } from "@/content/pdma2026";
import { assertTemplateManifestParity, templateContent, templateManifest } from "./templateManifest";

export default function TemplatePresentation() {
  const slides = templateContent.map((content, index) => (
    <Fragment key={templateManifest[index].key}>
      {renderTemplate(content, { app: content.kind === "embedded-app" ? <PdmaScenarioExercise /> : undefined })}
    </Fragment>
  ));
  assertTemplateManifestParity(templateManifest, slides);
  return <PdmaPresentationShell slides={slides} slideManifest={[...templateManifest] as PdmaSlideManifestEntry[]} navigation={pdma2026Content.navigation} />;
}
