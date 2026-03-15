'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Gift, Mail, Menu } from 'lucide-react';
import { SiGithub, SiNotion } from 'react-icons/si';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import { PrimaryButton, SecondaryButton } from '@/components/portfolio/Buttons';
import { useEffect, useState } from 'react';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type TabItem = {
  label: string;
  href: string;
};

type CssVarStyle = CSSProperties & Record<`--${string}`, string>;

function LinkedInMark(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 90 90" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1.48 29.91h18.657v60.01H1.48zM10.809.08c5.963 0 10.809 4.846 10.809 10.819 0 5.967-4.846 10.813-10.809 10.813C4.832 21.712 0 16.866 0 10.899 0 4.926 4.832.08 10.809.08"
        fill="currentColor"
      />
      <path
        d="M31.835 29.91h17.89v8.206h.255c2.49-4.72 8.576-9.692 17.647-9.692C86.514 28.424 90 40.849 90 57.007V89.92H71.357V60.737c0-6.961-.121-15.912-9.692-15.912-9.706 0-11.187 7.587-11.187 15.412V89.92H31.835V29.91z"
        fill="currentColor"
      />
    </svg>
  );
}

function XMark(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="6 6 37 38" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.9199219 6 21.136719 26.726562 6.2285156 44H9.40625L22.544922 28.777344 32.986328 44H43L28.123047 22.3125 42.203125 6H39.027344L26.716797 20.261719 16.933594 6H6.9199219z"
        fill="currentColor"
      />
    </svg>
  );
}

type TopNavProps = {
  items: NavItem[];
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  activeHref?: string;
};

const topNavCtaBase =
  'inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border px-5 text-[14px] md:text-[15px] font-medium tracking-[0.01em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
const topNavLinkBase =
  'text-[14px] md:text-[15px] tracking-[-0.01em] transition-colors duration-200 hover:text-black';

export function TopNav({
  items,
  secondaryCtaLabel = 'My CV',
  secondaryCtaHref = '/cv',
  primaryCtaLabel = 'Book a Call',
  primaryCtaHref = 'https://calendar.app.google/hg7ThoSPfhCx8rTHA',
  activeHref,
}: TopNavProps) {
  const pathname = usePathname();
  const navHoverColor = '#447ACB';
  const primaryStyle: CssVarStyle = {
    '--btn-hover-bg': t.color.accentHover,
    '--btn-focus': t.color.accent,
    color: t.color.inverseText,
    backgroundColor: t.color.accent,
  };
  const secondaryStyle: CssVarStyle = {
    '--btn-hover-bg': t.color.soft,
    '--btn-hover-border': t.color.accent,
    '--btn-focus': t.color.accent,
    borderColor: t.color.border,
    color: t.color.ink,
    backgroundColor: t.color.bg,
  };
  const socialIconStyle: CssVarStyle = {
    '--social-hover-color': navHoverColor,
    color: t.color.ink,
  };

  return (
    <header
      className="sticky top-0 z-40 border-b px-4 py-4 md:px-6 xl:px-8"
      style={{
        backgroundColor: 'transparent',
        borderColor: 'rgba(34,34,34,0.08)',
      }}
    >
      <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <nav className="flex items-center gap-8">
          {items.map((item) => (
            (() => {
              const active = activeHref ? activeHref === item.href : pathname === item.href;

              return (
                <a
                  key={item.label}
                  className={`${topNavLinkBase} underline decoration-transparent underline-offset-[8px] hover:[color:var(--nav-hover)]`}
                  href={item.href}
                  style={{
                    '--nav-hover': navHoverColor,
                    color: active ? t.color.ink : 'rgba(34,34,34,0.8)',
                    textDecorationColor: active ? t.color.ink : 'transparent',
                    fontFamily: t.font.primary,
                    fontWeight: 400,
                  } as CssVarStyle}
                >
                  {item.label}
                </a>
              );
            })()
          ))}
        </nav>

        <a className="inline-flex items-center justify-center gap-3 justify-self-center" href="/" style={{ color: t.color.ink }}>
          <Image
            src="/brand/jim-logo.png"
            alt="Jim Markunas logo"
            width={32}
            height={32}
            className="h-8 w-8"
            style={{ filter: 'brightness(0) saturate(100%)' }}
          />
          <span
            className="text-[26px] leading-none tracking-[-0.04em]"
            style={{ color: t.color.ink, fontFamily: t.font.primary, fontWeight: 400 }}
          >
            Jim Markunas
          </span>
        </a>

        <div className="flex items-center justify-self-end gap-3">
          <a
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center leading-none transition-colors duration-200 hover:[color:var(--social-hover-color)]"
            href="https://linkedin.com/in/jimmarkunas"
            style={socialIconStyle}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInMark className="m-0 block h-4 w-4 p-0" />
          </a>
          <a
            aria-label="X"
            className="mr-1 inline-flex items-center justify-center leading-none transition-colors duration-200 hover:[color:var(--social-hover-color)]"
            href="https://x.com/jimmarkunas"
            style={socialIconStyle}
            target="_blank"
            rel="noreferrer"
          >
            <XMark className="m-0 block h-3 w-3 translate-y-[1px] p-0" />
          </a>
          <a
            className={`${topNavCtaBase} h-10 items-center justify-center hover:[background-color:var(--btn-hover-bg)] hover:[border-color:var(--btn-hover-border)] focus-visible:outline-[var(--btn-focus)]`}
            href={secondaryCtaHref}
            style={secondaryStyle}
          >
            {secondaryCtaLabel}
          </a>
          <a
            className={`${topNavCtaBase} h-10 items-center justify-center border-transparent hover:[background-color:var(--btn-hover-bg)] focus-visible:outline-[var(--btn-focus)]`}
            href={primaryCtaHref}
            style={primaryStyle}
            target="_blank"
            rel="noreferrer"
          >
            {primaryCtaLabel}
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 md:hidden">
        <a className="inline-flex items-center gap-3" href="/" style={{ color: t.color.ink }}>
          <Image
            src="/brand/jim-logo.png"
            alt="Jim Markunas logo"
            width={30}
            height={30}
            className="h-7 w-7"
            style={{ filter: 'brightness(0) saturate(100%)' }}
          />
          <span
            className="text-[22px] leading-none tracking-[-0.04em]"
            style={{ color: t.color.ink, fontFamily: t.font.primary, fontWeight: 400 }}
          >
            Jim
          </span>
        </a>
        <div className="flex items-center gap-2">
          <a
            className={`${topNavCtaBase} h-10 px-4 text-[13px] hover:[background-color:var(--btn-hover-bg)] hover:[border-color:var(--btn-hover-border)] focus-visible:outline-[var(--btn-focus)]`}
            href={secondaryCtaHref}
            style={secondaryStyle}
          >
            {secondaryCtaLabel}
          </a>
          <a
            className={`${topNavCtaBase} h-10 border-transparent px-4 text-[13px] hover:[background-color:var(--btn-hover-bg)] focus-visible:outline-[var(--btn-focus)]`}
            href={primaryCtaHref}
            style={primaryStyle}
            target="_blank"
            rel="noreferrer"
          >
            {primaryCtaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}

export function MobileMenuTrigger() {
  const buttonStyle: CssVarStyle = {
    '--mobile-trigger-hover': t.color.soft,
    borderColor: t.color.border,
    color: t.color.ink,
  };

  return (
    <button
      aria-label="Open navigation"
      className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border transition-colors duration-200 hover:[background-color:var(--mobile-trigger-hover)]"
      style={buttonStyle}
      type="button"
    >
      <Menu className="h-4 w-4" />
    </button>
  );
}

export function Tabs({ items, activeLabel }: { items: TabItem[]; activeLabel: string }) {
  return (
    <nav aria-label="Tabs" className="flex flex-wrap items-center gap-2">
      {items.map((item) => {
        const active = item.label === activeLabel;

        return (
          <a
            key={item.label}
            className="inline-flex h-10 items-center rounded-[8px] border px-4 text-[14px] transition-colors duration-200 hover:[border-color:var(--tab-hover-border)] hover:[background-color:var(--tab-hover-bg)]"
            href={item.href}
            style={{
              '--tab-hover-border': t.color.borderStrong,
              '--tab-hover-bg': t.color.soft,
              borderColor: active ? t.color.accent : t.color.border,
              color: active ? t.color.accent : t.color.ink,
              backgroundColor: active ? t.color.soft : t.color.bg,
            } as CssVarStyle}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

export function MiddleNav({ items, label = 'Section navigation' }: { items: TabItem[]; label?: string }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? '');

  useEffect(() => {
    const ids = items
      .map((item) => item.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => href.slice(1));

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveHref(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: '-18% 0px -58% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [items]);

  return (
    <section className="border-b pb-4" style={{ borderColor: t.color.border }}>
      <div className={t.type.eyebrow} style={{ color: t.color.muted }}>
        {label}
      </div>
      <nav aria-label={label} className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        {items.map((item) => {
          const active = item.href === activeHref;

          return (
            <a
              key={item.label}
              className="pb-3 text-[17px] leading-none tracking-[-0.02em] underline decoration-transparent underline-offset-[10px] transition-all duration-200 hover:text-[#447ACB] hover:decoration-[#447ACB]"
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              style={{
                color: active ? t.color.accent : t.color.ink,
                textDecorationColor: active ? t.color.accent : 'transparent',
                fontFamily: t.font.primary,
                fontWeight: 400,
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </section>
  );
}

export function Footer({ items }: { items: NavItem[] }) {
  const currentYear = new Date().getFullYear();
  const footerIconStyle: CssVarStyle = {
    '--footer-icon-hover': '#447ACB',
    color: t.color.inverseText,
  };

  return (
    <footer
      className="overflow-hidden rounded-[24px] border"
      style={{ borderColor: t.color.border }}
    >
      <section
        className="border-b px-6 py-10 md:px-8 md:py-12 xl:px-10"
        style={{ backgroundColor: t.color.inverse, color: t.color.inverseText, borderColor: 'rgba(255,255,255,0.14)' }}
      >
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <p className={t.type.eyebrow} style={{ color: 'rgba(255,255,255,0.64)' }}>
            Let&apos;s Build
          </p>
          <h3 className={`${t.type.h2} mt-4`} style={{ color: t.color.inverseText, fontWeight: 400 }}>
            Let&apos;s build something <span style={{ color: t.color.accent }}>extraordinary</span>
          </h3>
          <p className={`${t.type.body} mt-4 max-w-[620px]`} style={{ color: 'rgba(255,255,255,0.72)' }}>
            Best for product launches, commerce systems, and operator-grade UX work that needs to ship cleanly and stand up to real business pressure.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton
              href="https://calendar.app.google/VaoAhUQysc1QoxAV6"
              target="_blank"
              rel="noreferrer"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton
              href="/cv"
              style={{
                borderColor: 'rgba(255,255,255,0.18)',
                color: t.color.inverseText,
                backgroundColor: 'transparent',
                '--btn-hover-bg': 'rgba(255,255,255,0.06)',
                '--btn-hover-border': 'rgba(255,255,255,0.28)',
                '--btn-focus': t.color.accent,
              } as CssVarStyle}
            >
              My CV
            </SecondaryButton>
          </div>
        </div>
      </section>

      <section
        className="px-6 py-8 md:px-8 md:py-10 xl:px-10"
        style={{ backgroundColor: t.color.inverse, color: t.color.inverseText }}
      >
        <div className="grid gap-8 xl:grid-cols-[1fr_auto_1fr] xl:items-center">
          <div className={`${t.type.small} text-center xl:text-left`} style={{ color: 'rgba(255,255,255,0.72)' }}>
            &copy; {currentYear} Jim Markunas. All rights reserved.
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <a className="inline-flex items-center gap-3" href="/" style={{ color: t.color.inverseText }}>
              <Image
                src="/brand/jim-logo.png"
                alt="Jim Markunas logo"
                width={28}
                height={28}
                className="h-7 w-7"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span
                className="text-[24px] leading-none tracking-[-0.04em]"
                style={{ color: t.color.inverseText, fontFamily: t.font.primary, fontWeight: 400 }}
              >
                Jim Markunas
              </span>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center transition-colors duration-200 hover:[color:var(--footer-icon-hover)]"
                href="https://linkedin.com/in/jimmarkunas"
                style={footerIconStyle}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInMark className="block h-4 w-4" />
              </a>
              <a
                aria-label="GitHub"
                className="inline-flex items-center justify-center transition-colors duration-200 hover:[color:var(--footer-icon-hover)]"
                href="https://github.com/jimmarkunas"
                style={footerIconStyle}
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="h-4 w-4" />
              </a>
              <a
                aria-label="X"
                className="inline-flex items-center justify-center transition-colors duration-200 hover:[color:var(--footer-icon-hover)]"
                href="https://x.com/jimmarkunas"
                style={footerIconStyle}
                target="_blank"
                rel="noreferrer"
              >
                <XMark className="block h-3 w-3 translate-y-[1px]" />
              </a>
              <a
                aria-label="Notion"
                className="inline-flex items-center justify-center transition-colors duration-200 hover:[color:var(--footer-icon-hover)]"
                href="https://jimmarkunas.notion.site/Jim-Markunas-Portfolio-2d03c5a05926807393b0f0af6a634226"
                style={footerIconStyle}
                target="_blank"
                rel="noreferrer"
              >
                <SiNotion className="h-4 w-4" />
              </a>
              <a
                aria-label="Email"
                className="inline-flex items-center justify-center transition-colors duration-200 hover:[color:var(--footer-icon-hover)]"
                href="/contact"
                style={footerIconStyle}
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                aria-label="Freebies"
                className="inline-flex items-center justify-center transition-colors duration-200 hover:[color:var(--footer-icon-hover)]"
                href="/freebies"
                style={footerIconStyle}
              >
                <Gift className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center xl:justify-end">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 xl:justify-end">
              {items.map((item) => (
                <a
                  key={item.label}
                  className={`${t.type.small} transition-colors duration-200 hover:text-white`}
                  href={item.href}
                  style={{ color: 'rgba(255,255,255,0.78)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
