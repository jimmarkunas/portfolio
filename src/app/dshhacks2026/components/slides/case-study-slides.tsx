import type { DshHacks2026Content } from "@/content/dshhacks2026";

import {
  HighlightedTitle,
  MetricGrid,
  NumberedInsights,
  SlideHeader,
} from "./dshhacks-slide-primitives";

type Slides = DshHacks2026Content["slides"];

export function SlideDirectvCaseStudy({ slide }: { slide: Slides["directvCaseStudy"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-red-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:order-2 lg:col-span-5">
          <MetricGrid metrics={slide.metrics} />
        </div>
        <div className="lg:order-1 lg:col-span-7">
          <NumberedInsights items={slide.bullets} />
        </div>
      </div>
    </div>
  );
}

export function SlideCpsCaseStudy({ slide }: { slide: Slides["cpsCaseStudy"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-amber-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:order-2 lg:col-span-5">
          <MetricGrid metrics={slide.metrics} />
        </div>
        <div className="lg:order-1 lg:col-span-7">
          <NumberedInsights items={slide.bullets} />
        </div>
      </div>
    </div>
  );
}
