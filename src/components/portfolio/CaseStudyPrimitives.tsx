'use client';

import { useEffect, useMemo, useState } from 'react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import { SectionHeader } from '@/components/portfolio/SectionHeader';
import { MetricValue } from '@/components/portfolio/MetricValue';

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySectionData = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

function parseAnimatedMetric(value: string) {
  const match = value.trim().match(/^([^0-9-]*)(\d[\d,]*\.?\d*)(.*)$/);

  if (!match) {
    return null;
  }

  const [, prefix = '', rawNumber = '', suffix = ''] = match;
  const normalized = rawNumber.replace(/,/g, '');
  const decimalPlaces = (normalized.split('.')[1] || '').length;
  const integerPart = rawNumber.split('.')[0];
  const minIntegerDigits = !rawNumber.includes(',') && /^0\d+$/.test(integerPart) ? integerPart.length : 0;

  return {
    prefix,
    suffix,
    rawNumber,
    numericValue: Number(normalized),
    hasComma: rawNumber.includes(','),
    decimalPlaces,
    minIntegerDigits,
  };
}

function formatAnimatedMetric(value: string, currentValue: number) {
  const parsed = parseAnimatedMetric(value);

  if (!parsed) {
    return value;
  }

  const roundedValue =
    parsed.decimalPlaces > 0
      ? Number(currentValue.toFixed(parsed.decimalPlaces))
      : Math.round(currentValue);

  let formattedNumber = '';

  if (parsed.hasComma) {
    formattedNumber = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: parsed.decimalPlaces,
      maximumFractionDigits: parsed.decimalPlaces,
    }).format(roundedValue);
  } else if (parsed.decimalPlaces > 0) {
    formattedNumber = roundedValue.toFixed(parsed.decimalPlaces);
  } else {
    formattedNumber = String(roundedValue);
  }

  if (parsed.minIntegerDigits > 0 && parsed.decimalPlaces === 0) {
    formattedNumber = formattedNumber.padStart(parsed.minIntegerDigits, '0');
  }

  return `${parsed.prefix}${formattedNumber}${parsed.suffix}`;
}

function AnimatedMetricValue({
  value,
  delay = 0,
  className = '',
}: {
  value: string;
  delay?: number;
  className?: string;
}) {
  const parsed = useMemo(() => parseAnimatedMetric(value), [value]);
  const [displayValue, setDisplayValue] = useState(() =>
    parsed ? formatAnimatedMetric(value, 0) : value,
  );

  useEffect(() => {
    if (!parsed) {
      return;
    }

    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const duration = 1200;
    const startedAt = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = parsed.numericValue * eased;

      setDisplayValue(formatAnimatedMetric(value, nextValue));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    timeoutId = setTimeout(() => {
      frameId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.cancelAnimationFrame(frameId);
    };
  }, [delay, value]);

  return <MetricValue value={displayValue} className={className} />;
}

export function CaseStudyHeroShell() {
  return (
    <section
      className="rounded-[20px]"
      style={{
        backgroundColor: '#F8F8F8',
        padding: '32px 0 0',
      }}
    >
      <div>
        <div
          className="flex flex-wrap items-center gap-3"
          style={{ color: t.color.ink }}
        >
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: t.color.accent }}
          />
          <span className={`${t.type.eyebrow} leading-none`}>
            Case Study Name
          </span>
          <span className={`${t.type.eyebrow} leading-none`}>&middot;</span>
          <span className={`${t.type.eyebrow} leading-none`}>
            Accolade
          </span>
        </div>

        <h1
          className={`${t.type.h1} mt-4`}
          style={{ color: t.color.ink }}
        >
          Case study headline goes here
        </h1>

        <p className={`${t.type.body} mt-6 pr-8 md:pr-12 xl:pr-16`} style={{ color: t.color.ink }}>
          Placeholder body copy for the case study hero. This should briefly explain the business context and the problem being solved. It should also clarify why the work mattered and what kind of outcome it created.
        </p>

        <dl
          className="mt-6 grid gap-y-5 md:grid-cols-4 md:gap-x-6 md:gap-y-0"
          style={{ borderColor: t.color.borderStrong }}
        >
          {[
            { label: 'Client', value: 'CPS Energy & Dalkia' },
            { label: 'Services', value: 'Product · Program · Solutioning' },
            { label: 'Role', value: 'Senior PM & Program Manager' },
            { label: 'Timeline', value: 'Aug 2024 - Apr 2025' },
          ].map((item, index) => (
            <div
              key={`${item.label}-${item.value}`}
              className={index > 0 ? 'md:border-l md:pl-6' : ''}
              style={{ borderColor: t.color.border }}
            >
              <dt className={t.type.eyebrow} style={{ color: t.color.accent }}>
                {item.label}
              </dt>
              <dd
                className={`${t.type.small} mt-3 [text-wrap:balance]`}
                style={{ color: t.color.ink }}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div
          className="mt-6 h-[320px] w-full rounded-[18px]"
          style={{ backgroundColor: '#D8D8D8' }}
        />
      </div>
    </section>
  );
}

export function CaseStudyTopStats() {
  const items = [
    { value: '1M+', copy: 'Customers visit Albino every month.' },
    { value: '93%', copy: 'Satisfaction rate from our customers.' },
    { value: '4.9', copy: 'Average customer ratings out of 5.00!' },
  ];

  return (
    <section
      className="rounded-[20px] px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12"
      style={{ backgroundColor: t.color.bg }}
    >
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {items.map((item, index) => (
          <div
            key={item.value}
            className={`grid gap-4 md:grid-cols-[auto_1fr] md:items-start ${index > 0 ? 'md:border-l md:pl-10' : ''}`}
            style={{ borderColor: t.color.border }}
          >
            <MetricValue
              value={item.value}
              className="text-[34px] leading-[0.96] tracking-[-0.04em] md:text-[46px]"
            />
            <p className={`${t.type.body} md:pt-1`} style={{ color: t.color.muted }}>
              {item.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyImpactMetrics() {
  const items = [
    { value: '06', copy: 'Markets launched under one coordinated commerce model.' },
    { value: '238', copy: 'Offer variations aligned into one operating system.' },
    { value: '1,395', copy: 'Upsell placements supported across web, mobile, and set-top box.' },
  ];
  const beforeState = [
    'Campaign launches moved through disconnected business, product, and channel workflows.',
    'Offer setup and placement planning were repeated across STB, web, and mobile.',
    'Teams lacked one operating picture from request to launch, so timing slipped and ownership blurred.',
  ];
  const afterState = [
    'One delivery motion connected business, product, engineering, and campaign operations.',
    'Offer structures, launch dependencies, and placement planning were visible in a shared system.',
    'Teams could move from concept to release with clearer ownership, faster approvals, and cleaner execution.',
  ];
  const phases = [
    {
      id: 'Phase 01',
      title: 'Diagnose',
      copy: 'Map breakdowns across resident reporting and field workflows.',
    },
    {
      id: 'Phase 02',
      title: 'Design',
      copy: 'Define mobile reporting and the unified operator experience.',
    },
    {
      id: 'Phase 03',
      title: 'Implement',
      copy: 'Deploy outage and repair workflow systems for CPS and Dalkia.',
    },
    {
      id: 'Phase 04',
      title: 'Integrate',
      copy: 'Close the resident-to-operations service loop across teams.',
    },
    {
      id: 'Phase 05',
      title: 'Measure',
      copy: 'Track service, cost, and sustainability outcomes over time.',
    },
  ];

  return (
    <section
      className="rounded-[20px] px-6 py-12 md:px-10 md:py-16 xl:px-16 xl:py-20"
      style={{ backgroundColor: t.color.bg }}
    >
      <div className="grid gap-12 md:grid-cols-3 md:gap-8 xl:gap-12">
        {items.map((item, index) => (
          <div
            key={item.value}
            className="flex flex-col items-center text-center"
          >
            <AnimatedMetricValue
              value={item.value}
              delay={index * 140}
              className="text-[50px] leading-[0.92] tracking-[-0.05em] md:text-[62px] xl:text-[74px] font-[390]"
            />
            <p
              className="mt-7 max-w-[16rem] text-[17px] leading-[1.55] tracking-[-0.01em] md:text-[18px]"
              style={{ color: t.color.muted }}
            >
              {item.copy}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-14 xl:mt-16">
        <div
          className="rounded-[18px] border px-5 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10"
          style={{ borderColor: t.color.border, backgroundColor: t.color.soft }}
        >
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-start xl:gap-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: t.color.ink }}>
                Before
              </div>
              <h4 className={`${t.type.h4} mt-3`} style={{ color: t.color.ink }}>
                Fragmented launch motion
              </h4>
              <p className={`${t.type.body} mt-4`} style={{ color: t.color.muted }}>
                Before I led the solution, campaign delivery worked more like a relay of disconnected handoffs than a coordinated system.
              </p>
              <div className="mt-6 space-y-4">
                {beforeState.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: t.color.ink }} />
                    <p className={t.type.body} style={{ color: t.color.ink }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden xl:flex xl:min-h-[100%] xl:items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-px" style={{ backgroundColor: t.color.borderStrong }} />
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border text-[14px] tracking-[-0.01em]"
                  style={{ borderColor: t.color.borderStrong, backgroundColor: t.color.bg, color: t.color.accent }}
                >
                  To
                </div>
                <div className="h-10 w-px" style={{ backgroundColor: t.color.borderStrong }} />
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: t.color.accent }}>
                After
              </div>
              <h4 className={`${t.type.h4} mt-3`} style={{ color: t.color.ink }}>
                One operating system
              </h4>
              <p className={`${t.type.body} mt-4`} style={{ color: t.color.muted }}>
                After the solution was in place, the same work could move through a shared delivery model with clearer execution paths and measurable outcomes.
              </p>
              <div className="mt-6 space-y-4">
                {afterState.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: t.color.accent }} />
                    <p className={t.type.body} style={{ color: t.color.ink }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-14 xl:mt-16">
        <div className="px-5 md:px-6">
          <p className={t.type.eyebrow} style={{ color: t.color.accent }}>
            Implementation map
          </p>
          <h4 className={`${t.type.h4} mt-2`} style={{ color: t.color.ink }}>
            Delivery phases
          </h4>
          <p className={t.type.body} style={{ color: t.color.muted }}>
            How implementation moved from diagnosis to measurable city-service outcomes.
          </p>

          <div className="relative mt-8 md:mt-10">
            <div
              className="absolute bottom-4 left-[18px] top-4 w-px md:bottom-auto md:left-0 md:right-0 md:top-[18px] md:h-px md:w-auto"
              style={{ backgroundColor: t.color.borderStrong }}
            />

            <div className="grid gap-8 md:grid-cols-5 md:gap-6 xl:gap-8">
              {phases.map((phase) => (
                <article
                  key={phase.id}
                  className="relative pl-14 md:pl-0 md:pt-14"
                >
                  <div
                    className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border bg-white md:left-1/2 md:-translate-x-1/2"
                    style={{
                      borderColor: t.color.borderStrong,
                      boxShadow: '0 0 0 8px rgba(248,248,248,0.9)',
                    }}
                  >
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: Number(phase.id.slice(-2)) <= 3 ? t.color.ink : t.color.accent }}
                    />
                  </div>

                  <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: t.color.accent }}>
                    {phase.id}
                  </div>
                  <h4 className={`${t.type.h5} mt-3`} style={{ color: t.color.ink }}>
                    {phase.title}
                  </h4>
                  <p
                    className={`${t.type.small} mt-3`}
                    style={{ color: t.color.muted }}
                  >
                    {phase.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MetricStrip({ items }: { items: CaseStudyMetric[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={`${item.value}-${item.label}`}
          className="rounded-[10px] border p-6"
          style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
        >
          <MetricValue value={item.value} className={t.type.metric} />
          <div className={`${t.type.small} mt-3`} style={{ color: t.color.muted }}>
            {item.label}
          </div>
        </div>
      ))}
    </section>
  );
}

export function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  return (
    <section className="rounded-[12px] border px-5 py-6 md:px-8 md:py-8 xl:px-8 xl:py-8" style={{ borderColor: t.color.border }}>
      <SectionHeader label="Case study section" title={section.heading} />
      {section.paragraphs.length > 0 ? (
        <div className="space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className={t.type.body} style={{ color: t.color.ink }}>
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {section.bullets.length > 0 ? (
        <ul className="mt-5 space-y-3 pl-5">
          {section.bullets.map((bullet) => (
            <li key={bullet} className={t.type.body} style={{ color: t.color.ink }}>
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
