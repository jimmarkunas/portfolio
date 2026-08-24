import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlideHeader } from '../../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

const ARROW_INITIAL_DELAY_MS = 1000;
const ARROW_STAGGER_MS = 1500;
const ARROW_ALL_BLUE_HOLD_MS = 1500;
const ARROW_COLOR_TRANSITION_MS = 600;

function useCumulativeArrowFill(arrowCount: number) {
  const [activeArrowCount, setActiveArrowCount] = React.useState(0);

  React.useEffect(() => {
    if (arrowCount <= 0) {
      setActiveArrowCount(0);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const runCycle = () => {
      if (cancelled) return;

      setActiveArrowCount(0);

      let nextArrowCount = 0;

      const activateNextArrow = () => {
        if (cancelled) return;

        nextArrowCount += 1;
        setActiveArrowCount(nextArrowCount);

        if (nextArrowCount < arrowCount) {
          timer = setTimeout(activateNextArrow, ARROW_STAGGER_MS);
        } else {
          timer = setTimeout(runCycle, ARROW_ALL_BLUE_HOLD_MS);
        }
      };

      timer = setTimeout(activateNextArrow, ARROW_INITIAL_DELAY_MS);
    };

    runCycle();

    return () => {
      cancelled = true;

      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [arrowCount]);

  return activeArrowCount;
}

export const Slide08Evidence: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.evidence;
  const arrowCount = copy.pipeline.length - 1;
  const activeArrowCount = useCumulativeArrowFill(arrowCount);

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="sc26-surface-card p-8 lg:p-10">
          <div className="mb-8 font-mono text-2xl font-semibold tracking-[0.06em] text-[#447ACB] lg:text-3xl">
            {copy.timelineLabel}
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 lg:gap-3">
            {copy.pipeline.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="flex min-h-[170px] min-w-0 items-center justify-center rounded-2xl border border-[#BFD3FF] bg-[#F4F4F5] px-3 text-center lg:min-h-[210px] lg:px-4">
                  <span className="text-xl font-semibold leading-tight text-[#18181B] lg:text-[2rem]">
                    {item.step}
                  </span>
                </div>
                {index < copy.pipeline.length - 1 && (
                  <ArrowRight
                    className={`h-6 w-6 shrink-0 transition-colors duration-[600ms] lg:h-8 lg:w-8 ${
                      index < activeArrowCount ? 'text-[#447ACB]' : 'text-[#A1A1AA]'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-7 text-center lg:py-8">
          <p className="text-2xl font-semibold leading-tight text-[#18181B] lg:text-3xl">
            {copy.anchor}
          </p>
        </div>
      </div>
    </div>
  );
};
