import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';

export type PressAwardsLogo = {
  alt: string;
  src: string;
};

export type CountryFlag = {
  alt: string;
  src: string;
};

export type CompanyLogo = {
  alt: string;
  src: string;
};

export type PressAccoladeItem = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export const pressAwardsLogos: PressAwardsLogo[] = [
  { alt: 'Smart 20 Awards logo', src: '/trust/smart-20-awards-v2.jpg' },
  { alt: 'MACH Impact Awards logo', src: '/trust/mach-impact-logo.png' },
  { alt: 'Adobe logo', src: '/trust/adobe-logo.png' },
  { alt: 'AWS logo', src: '/trust/aws-logo.png' },
  { alt: 'Business Insider logo', src: '/trust/businessinsider-logo.png' },
  { alt: 'Engadget logo', src: '/trust/engadget-logo.png' },
  { alt: 'Harvard Business Review logo', src: '/trust/hbr-logo.png' },
  { alt: 'MIT logo', src: '/trust/mit-logo.png' },
];

export const countryFlags: CountryFlag[] = [
  { alt: 'United States flag', src: '/country-flags/usflag.png' },
  { alt: 'United Kingdom flag', src: '/country-flags/ukflag.png' },
  { alt: 'European Union flag', src: '/country-flags/euflag.png' },
];

export const companyLogos: CompanyLogo[] = [
  { alt: 'American Apparel logo', src: '/company-logos/aa-logo.png' },
  { alt: 'BI logo', src: '/company-logos/bi-logo.png' },
  { alt: 'CBDistillery logo', src: '/company-logos/cbdistillery-logo.png' },
  { alt: 'CPS Energy logo', src: '/company-logos/cps-logo.png' },
  { alt: 'CWG logo', src: '/company-logos/cwg-logo.png' },
  { alt: 'DIRECTV logo 1', src: '/company-logos/dtv01-logo.png' },
  { alt: 'DIRECTV logo 2', src: '/company-logos/dtv02-logo.png' },
  { alt: 'FOH logo', src: '/company-logos/foh-logo.png' },
  { alt: 'K2 logo', src: '/company-logos/k2-logo.png' },
  { alt: 'LEGO logo', src: '/company-logos/lego-logo.png' },
  { alt: 'Method logo', src: '/company-logos/method-logo.png' },
  { alt: 'MM logo', src: '/company-logos/mm-logo.png' },
  { alt: 'Modere logo', src: '/company-logos/modere-logo.png' },
  { alt: 'Murad logo', src: '/company-logos/murad-logo.png' },
  { alt: 'NYL logo', src: '/company-logos/nyl-logo.png' },
  { alt: 'Zevo logo', src: '/company-logos/zevo-logo.png' },
];

export const clientLogos: CompanyLogo[] = [
  { alt: 'Boston Consulting Group logo', src: '/company-logos/clients/bcg-logo.png' },
  { alt: 'CPS Energy logo', src: '/company-logos/clients/cps-logo.png' },
  { alt: 'DIRECTV logo', src: '/company-logos/clients/dtv-logo.png' },
  { alt: 'Disney logo', src: '/company-logos/clients/disney-logo.png' },
  { alt: 'Publicis Sapient logo', src: '/company-logos/clients/publicis-logo-tall.png' },
  { alt: 'Shopify logo', src: '/company-logos/clients/shopify-logo-v2.png' },
  { alt: 'American Apparel logo', src: '/company-logos/clients/aa-logo.png' },
  { alt: 'Business Insider logo', src: '/company-logos/clients/bi-logo.png' },
  { alt: 'K2 logo', src: '/company-logos/clients/k2-logo.png' },
  { alt: 'Method logo', src: '/company-logos/clients/method-logo.png' },
  { alt: 'New York Life logo', src: '/company-logos/clients/nyl-logo.png' },
  { alt: 'SCJ logo', src: '/company-logos/clients/scj-logo.png' },
  { alt: 'Unilever logo', src: '/company-logos/clients/unilever-logo.png' },
];

export function PersonalLogoBlock({ name }: { name: string }) {
  return (
    <div
      className="flex min-h-[132px] w-full items-center justify-center rounded-[18px] border px-6 py-8 text-center md:min-h-[148px] md:px-8"
      style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
    >
      <div className="flex items-center justify-center gap-4 md:gap-5">
        <Image
          src="/brand/jim-logo.png"
          alt={`${name} logo`}
          width={44}
          height={44}
          className="h-10 w-10 md:h-11 md:w-11 xl:h-12 xl:w-12"
          style={{ filter: 'brightness(0) saturate(100%)' }}
        />
        <p
          className="text-[28px] leading-[0.98] tracking-[-0.04em] md:text-[36px] xl:text-[44px]"
          style={{ color: t.color.ink, fontFamily: t.font.primary, fontWeight: 400 }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

export function LogoGroup({ title, logos }: { title: string; logos: string[] }) {
  return (
    <section>
      <h4 className={t.type.h5}>{title}</h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {logos.map((logo) => (
          <div
            key={logo}
            className={`inline-flex h-11 items-center rounded-[8px] border px-4 ${t.type.eyebrow}`}
            style={{ borderColor: t.color.border, color: t.color.ink, backgroundColor: t.color.bg }}
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

export function PressAwardsLogoGroup({ title, logos }: { title: string; logos: PressAwardsLogo[] }) {
  return (
    <section>
      <h4 className={t.type.h5}>{title}</h4>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="overflow-hidden rounded-[14px] border"
            style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
          >
            <img alt={logo.alt} className="block h-auto w-full" src={logo.src} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function CompanyLogoGroup({ title, logos }: { title: string; logos: CompanyLogo[] }) {
  return (
    <section>
      <h4 className={t.type.h5}>{title}</h4>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="rounded-[14px] border p-4 md:p-5"
            style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
          >
            <div className="flex h-[72px] items-center justify-center md:h-[84px]">
              <img alt={logo.alt} className="block max-h-full max-w-full object-contain" src={logo.src} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FlagGroup({ flags }: { flags: CountryFlag[] }) {
  return (
    <section>
      <h4 className={t.type.h5}>Country flags</h4>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
        {flags.map((flag) => (
          <div
            key={flag.src}
            className="overflow-hidden rounded-[14px] border"
            style={{ borderColor: t.color.border, backgroundColor: t.color.bg }}
          >
            <img alt={flag.alt} className="block h-auto w-full" src={flag.src} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function PressAndAccoladesModal({
  eyebrow,
  title,
  summary,
  ctaLabel,
  ctaHref,
  items,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: PressAccoladeItem[];
}) {
  return (
    <section
      className="rounded-[18px] px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12"
      style={{ backgroundColor: t.color.soft }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.16fr)_minmax(0,0.84fr)] xl:gap-10">
          <div>
            <div className="flex items-center gap-3" style={{ color: t.color.ink }}>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: t.color.ink }} />
              <p className="text-[16px] leading-[1.2] tracking-[-0.02em] md:text-[17px] xl:text-[18px]">
                {eyebrow}
              </p>
            </div>
            <h3
              className={`${t.type.lockupTitle} mt-8 whitespace-pre-line`}
              style={{ color: t.color.ink }}
            >
              {title}
            </h3>
          </div>

          <div className="max-w-[28rem] xl:justify-self-start">
            <p className={t.type.body} style={{ color: t.color.muted }}>
              {summary}
            </p>
            {ctaLabel && ctaHref ? (
              <a
                className="mt-8 inline-flex items-center gap-1 text-[17px] leading-[1.2] tracking-[-0.015em] underline underline-offset-4 transition-colors duration-200 hover:text-[#447ACB] md:text-[18px]"
                href={ctaHref}
                style={{ color: t.color.ink }}
              >
                {ctaLabel}
                <ArrowUpRight className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-12 md:mt-14 xl:mt-16">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${item.date}`}
              className={`grid gap-5 py-6 md:py-8 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.96fr)_auto] xl:items-center xl:gap-10 ${index > 0 ? 'border-t' : ''}`}
              style={{ borderColor: t.color.border }}
            >
              <div>
                <h4
                  className={t.type.h6}
                  style={{ color: t.color.ink }}
                >
                  {item.title}
                </h4>
                <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.01em] md:text-[17px]" style={{ color: t.color.muted }}>
                  <span aria-hidden="true" className="mr-2 align-middle text-[0.9em]">&bull;</span>
                  <span>{item.date}</span>
                </p>
              </div>

              <p
                className={`${t.type.body} max-w-[24rem]`}
                style={{ color: t.color.muted }}
              >
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-3 xl:justify-end">
                {item.tags.map((tag) => (
                  <span
                    key={`${item.title}-${tag}`}
                    className="inline-flex h-11 items-center rounded-full border px-5 text-[14px] md:text-[15px] tracking-[-0.01em]"
                    style={{ borderColor: t.color.borderStrong, backgroundColor: t.color.bg, color: t.color.ink }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBlock({
  quote,
  person,
  role,
}: {
  quote: string;
  person: string;
  role: string;
}) {
  return (
    <blockquote
      className="rounded-[12px] border px-5 py-6 md:px-6 md:py-7"
      style={{ borderColor: t.color.border, backgroundColor: t.color.soft }}
    >
      <p className={`${t.type.bodyLarge}`} style={{ color: t.color.ink }}>
        &ldquo;{quote}&rdquo;
      </p>
      <footer className={`${t.type.small} mt-4`} style={{ color: t.color.muted }}>
        {person} - {role}
      </footer>
    </blockquote>
  );
}
