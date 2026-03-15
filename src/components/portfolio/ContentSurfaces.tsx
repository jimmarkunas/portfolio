import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import { MetricValue } from '@/components/portfolio/MetricValue';

export function ProofCard({
  title,
  metric,
  summary,
}: {
  title: string;
  metric: string;
  summary: string;
}) {
  return (
    <article className="rounded-[10px] border p-5" style={{ borderColor: t.color.border, backgroundColor: t.color.bg, boxShadow: t.shadow.soft }}>
      <p className={t.type.eyebrow} style={{ color: t.color.accent }}>
        {title}
      </p>
      <MetricValue value={metric} className={`${t.type.metric} mt-4 block`} />
      <p className={`${t.type.small} mt-3`} style={{ color: t.color.muted }}>
        {summary}
      </p>
    </article>
  );
}

export function CaseStudyCard({
  title,
  imageSrc,
  imageAlt,
  href = '/case-study-template',
  kicker,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  kicker?: string;
}) {
  return (
    <a
      className="group relative block overflow-hidden rounded-[18px]"
      href={href}
      aria-label={title}
      style={{ backgroundColor: t.color.soft }}
    >
      <div className="relative aspect-[0.98/1]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 1280px) 320px, (min-width: 768px) 40vw, 100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 24%, rgba(17,17,17,0.08) 100%)',
          }}
        />

        {kicker ? (
          <div
            className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[12px] uppercase tracking-[0.08em]"
            style={{ backgroundColor: 'rgba(255,255,255,0.88)', color: t.color.ink }}
          >
            {kicker}
          </div>
        ) : null}

        <div className="absolute inset-x-5 bottom-5 flex items-center gap-3">
          <div
            className="inline-flex min-h-11 items-center rounded-full px-4 text-[13px] uppercase tracking-[0.06em]"
            style={{ backgroundColor: '#FFFFFF', color: t.color.ink, fontWeight: 600 }}
          >
            {title}
          </div>
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200"
            style={{ backgroundColor: '#FFFFFF', color: t.color.ink }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </a>
  );
}

export function ModalShell({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[12px] border p-5 md:p-6" style={{ borderColor: t.color.borderStrong, backgroundColor: t.color.bg, boxShadow: t.shadow.modal }}>
      <p className={t.type.eyebrow} style={{ color: t.color.accent }}>
        {eyebrow}
      </p>
      <h4 className={`${t.type.h4} mt-2`}>{title}</h4>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function ProductModalOne({
  title,
  summary,
  ctaLabel,
  ctaHref,
  images,
}: {
  title: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  images: Array<{ src: string; alt: string }>;
}) {
  return (
    <article
      className="overflow-hidden rounded-[18px] border px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12"
      style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-center xl:gap-12">
        <div className="grid gap-4 sm:grid-cols-3 sm:items-end">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-[24px] ${
                index === 0
                  ? 'sm:mt-12'
                  : index === 1
                    ? 'sm:-mt-8'
                    : 'sm:mt-4'
              }`}
              style={{ backgroundColor: t.color.soft }}
            >
              <div className="relative aspect-[5/8]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 24%, rgba(17,17,17,0.02) 100%)',
                  }}
                />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`${index < 2 ? 'object-contain object-bottom' : 'object-cover'} relative z-10`}
                  sizes="(min-width: 1280px) 260px, (min-width: 640px) 30vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[30rem] xl:pl-4">
          <h3 className={`${t.type.h2} whitespace-pre-line`} style={{ color: t.color.ink }}>
            {title}
          </h3>
          <p className={`${t.type.body} mt-6`} style={{ color: t.color.muted }}>
            {summary}
          </p>
          <a
            className="mt-8 inline-flex items-center gap-3 text-[16px] leading-[1.2] tracking-[0.01em] transition-colors duration-200 hover:text-[#2F5EA4] md:text-[17px]"
            href={ctaHref}
            style={{ color: t.color.accent, fontWeight: 500 }}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductModalTwo({
  images,
}: {
  images: Array<{ src: string; alt: string }>;
}) {
  return (
    <article
      className="overflow-hidden rounded-[18px] border px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12"
      style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:items-center md:gap-5 xl:gap-8">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`relative overflow-hidden ${
              index === 0 || index === 4
                ? 'sm:mt-16'
                : index === 2
                  ? 'sm:-mt-10'
                  : 'sm:mt-2'
            } rounded-[6px]`}
            style={{ backgroundColor: t.color.soft }}
          >
            <div
              className={`relative ${
                index === 0 || index === 4
                  ? 'aspect-[0.78/1]'
                  : index === 2
                    ? 'aspect-[0.74/1.24]'
                    : 'aspect-[0.78/1.12]'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 220px, (min-width: 640px) 18vw, 48vw"
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function ImageModalOne({
  label = 'Landscape image placeholder',
}: {
  label?: string;
}) {
  return (
    <article
      className="overflow-hidden rounded-[18px] p-4 md:p-5 xl:p-6"
      style={{ backgroundColor: t.color.bg }}
    >
      <div
        className="relative overflow-hidden rounded-[16px] aspect-[16/9]"
        style={{ backgroundColor: '#FCFCFC' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 18% 22%, rgba(68,122,203,0.12) 0%, rgba(68,122,203,0.03) 24%, rgba(255,255,255,0) 46%), linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(248,248,248,1) 52%, rgba(240,243,249,1) 100%)',
          }}
        />
        <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 0 1px rgba(232,232,232,0.85)' }} />

        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="flex flex-col items-center text-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-[20px]"
              style={{ backgroundColor: '#EEF3FF', color: t.color.accent }}
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                <rect x="5" y="8" width="24" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 22L14 17L18 20L23 14L29 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="13" cy="13" r="2.4" fill="currentColor" />
              </svg>
            </div>
            <div className={`${t.type.h6} mt-5`} style={{ color: t.color.ink }}>
              {label}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ContentModalThree({
  steps,
}: {
  steps: Array<{ title: string; summary: string }>;
}) {
  return (
    <article
      className="overflow-hidden rounded-[18px] border px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12"
      style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] xl:items-center xl:gap-12">
        <div className="relative mx-auto w-full max-w-[38rem]">
          <div
            className="relative overflow-hidden rounded-[24px] aspect-[1.18/1]"
            style={{ backgroundColor: '#FCFCFC', boxShadow: '0 20px 40px rgba(17,17,17,0.04)' }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 18% 18%, rgba(68,122,203,0.12) 0%, rgba(68,122,203,0.02) 28%, rgba(255,255,255,0) 52%), linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248,248,248,1) 100%)',
              }}
            />
            <div className="absolute inset-6 rounded-[20px] md:inset-8" style={{ backgroundColor: 'rgba(255,255,255,0.72)' }} />
            <div className="absolute inset-6 md:inset-8">
              <div className="flex h-full flex-col items-center justify-center rounded-[20px]" style={{ boxShadow: 'inset 0 0 0 1px rgba(232,232,232,0.9)' }}>
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-[18px]"
                  style={{ backgroundColor: '#EEF3FF', color: t.color.accent }}
                >
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                    <rect x="5" y="8" width="24" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9 22L14 17L18 20L23 14L29 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="13" cy="13" r="2.4" fill="currentColor" />
                  </svg>
                </div>
                <div className={`${t.type.h6} mt-6`} style={{ color: t.color.ink }}>
                  Image Placeholder
                </div>
                <p className={`${t.type.small} mt-3 max-w-[16rem] text-center`} style={{ color: t.color.muted }}>
                  Replace this with a product screenshot, flow image, or interface proof when content is ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <div key={step.title} className="grid gap-3 sm:grid-cols-[28px_minmax(0,1fr)] sm:items-start">
              <div
                className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full"
                style={{ backgroundColor: t.color.ink }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M7 1.25C7.36 3.95 8.05 5.22 9.08 6.02C9.88 6.64 11.06 7 12.75 7C11.06 7 9.88 7.36 9.08 7.98C8.05 8.78 7.36 10.05 7 12.75C6.64 10.05 5.95 8.78 4.92 7.98C4.12 7.36 2.94 7 1.25 7C2.94 7 4.12 6.64 4.92 6.02C5.95 5.22 6.64 3.95 7 1.25Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
              <div>
                <h4 className={t.type.h5} style={{ color: t.color.ink }}>
                  {step.title}
                </h4>
                <p className={`${t.type.body} mt-3 max-w-[24rem]`} style={{ color: t.color.ink }}>
                  {step.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
