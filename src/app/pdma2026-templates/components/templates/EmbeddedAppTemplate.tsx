import type { ReactNode } from "react";
import type { EmbeddedAppTemplateContent } from "../../templateTypes";
import { EmbeddedAppFrame } from "../shared/EmbeddedAppFrame";
import { TemplateSlide } from "../TemplateSlide";

/** Title/subtitle + dominant live app frame. `app` is any interactive React child. */
export function EmbeddedAppTemplate({ content, app }: { content: EmbeddedAppTemplateContent; app: ReactNode }) {
  return <TemplateSlide kind={content.kind} title={content.chrome.title} decorativeVariant={content.decorativeVariant}>
    <section className="pdmat-template pdmat-embedded">
      <EmbeddedAppFrame label={content.frameLabel}>{app}</EmbeddedAppFrame>
    </section>
  </TemplateSlide>;
}
