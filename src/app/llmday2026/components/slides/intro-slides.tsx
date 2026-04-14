import type { LlmDay2026Content } from "@/content/llmday2026";

type Slides = LlmDay2026Content["slides"];

export function SlideHero({ slide }: { slide: Slides["hero"] }) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8 text-center">
      <div className="text-sm font-medium uppercase tracking-[0.2em] text-finox-gray">{slide.eyebrow}</div>
      <h1 className="h1-display max-w-5xl" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
        {slide.title} <span className="text-finox-gray">{slide.highlight}</span>
      </h1>
      <div className="space-y-2 pt-8">
        <p className="text-xl font-light tracking-wide">{slide.presenter}</p>
        <p className="text-sm uppercase tracking-widest text-finox-gray">{slide.sponsor}</p>
      </div>
    </div>
  );
}

export function SlideAgenda({ slide }: { slide: Slides["agenda"] }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-1 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="flex flex-1 items-center">
        <div className="grid w-full gap-12 md:grid-cols-2">
          <div className="space-y-6">
            {slide.bullets.map((bullet) => (
              <div key={bullet.id} className="flex items-start gap-4">
                <div className="mt-4 h-2.5 w-2.5 rounded-full bg-white" />
                <p className="text-2xl font-light leading-snug">{bullet.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8 border-l border-finox-slate pl-8">
            <p className="text-sm uppercase tracking-widest text-finox-gray">{slide.whyCareLabel}</p>
            <ul className="space-y-8">
              {slide.whyCare.map((item) => (
                <li key={item.id} className="flex items-start gap-5">
                  <span className="mt-2 font-mono text-sm text-finox-gray">{item.id}</span>
                  <span className="text-2xl font-light leading-snug text-white/90">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlideWho({ slide }: { slide: Slides["who"] }) {
  return (
    <div className="space-y-12">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-1 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-finox-slate/30" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-finox-gray">
            {slide.companiesLabel}
          </span>
          <div className="h-px flex-1 bg-finox-slate/30" />
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-2 opacity-70 grayscale">
          {slide.companies.map((company) => (
            <span key={company} className="text-sm font-bold tracking-tight">
              {company}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 pt-4 sm:grid-cols-2 xl:grid-cols-4">
        {slide.stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center space-y-2 rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <span className="text-4xl font-bold tracking-tight">{stat.label}</span>
            <span className="text-xs uppercase leading-relaxed tracking-widest text-finox-gray">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonPanel({
  title,
  items,
  inverted,
}: {
  title: string;
  items: string[];
  inverted?: boolean;
}) {
  return (
    <div
      className={`space-y-8 rounded-3xl border p-10 ${
        inverted ? "border-white bg-white text-finox-dark" : "border-white/10 bg-white/5"
      }`}
    >
      <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-center gap-4 ${inverted ? "text-finox-slate" : "text-finox-gray"}`}
          >
            <div className={`h-2 w-2 rounded-full ${inverted ? "bg-finox-dark" : "bg-finox-slate"}`} />
            <span className="text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlideFrame({ slide }: { slide: Slides["frame"] }) {
  return (
    <div className="space-y-12">
      <div className="flex justify-between">
        <h2 className="h2-display">{slide.title}</h2>
        <div className="grid grid-cols-3 gap-1 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <ComparisonPanel title={slide.copilotTitle} items={slide.copilot} />
        <ComparisonPanel title={slide.agentTitle} items={slide.agent} inverted />
      </div>

      <p className="pt-6 text-center text-2xl font-light italic text-finox-gray">
        {slide.kickerPrefix} <span className="font-medium not-italic text-white">{slide.kickerHighlight}</span>
      </p>
    </div>
  );
}

export function SlideMagicRequirements({
  slide,
}: {
  slide: Slides["magicRequirements"];
}) {
  return (
    <div className="space-y-12">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-xl font-light text-finox-gray">{slide.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-1 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {slide.items.map((item) => (
          <div
            key={item.id}
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-finox-gray">{item.label}</p>
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="text-sm leading-relaxed text-finox-gray">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlideGoal({ slide }: { slide: Slides["goal"] }) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8 text-center">
      <div className="h-px w-24 bg-finox-gray" />
      <h2 className="h1-display">{slide.title}</h2>
      <p className="max-w-2xl text-3xl font-light text-finox-gray">{slide.line}</p>
      <div className="h-px w-24 bg-finox-gray" />
    </div>
  );
}
