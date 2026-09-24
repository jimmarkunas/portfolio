"use client";

import { PdmaPresentationShell } from "@/app/pdma2026/PdmaPresentationShell";
import { pdma2026Content } from "@/content/pdma2026";
import { assertTemplateManifestParity, templateManifest } from "./templateManifest";

export default function TemplatePresentation() {
  const slides = templateManifest.map(({ component: Component, key }) => <Component key={key} />);
  assertTemplateManifestParity(templateManifest, slides);
  return <PdmaPresentationShell slides={slides} slideManifest={[...templateManifest]} navigation={pdma2026Content.navigation} />;
}
