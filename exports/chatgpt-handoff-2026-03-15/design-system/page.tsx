// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Mail, ExternalLink, Download, Search, Filter, Plus, FileText, Briefcase, Building2, PanelsTopLeft, BadgeCheck, Circle, LayoutGrid, Menu, ChevronLeft, Home, FolderKanban, Link2 } from "lucide-react";
import { IoBriefcaseOutline, IoGridOutline, IoLayersOutline, IoMailOutline, IoSearchOutline, IoSparklesOutline } from 'react-icons/io5';
import { FiBriefcase, FiGrid, FiLayers, FiMail, FiSearch, FiStar } from 'react-icons/fi';
import { HiOutlineBriefcase, HiOutlineEnvelope, HiOutlineMagnifyingGlass, HiOutlineRectangleGroup, HiOutlineSparkles, HiOutlineSquares2X2 } from 'react-icons/hi2';
import { TbBriefcase, TbLayoutGrid, TbLayersIntersect, TbMail, TbSearch, TbSparkles } from 'react-icons/tb';
import { BsBriefcase, BsCollection, BsEnvelope, BsGrid, BsSearch, BsStars } from 'react-icons/bs';
import { ImBriefcase, ImMail4, ImSearch, ImStack, ImStarEmpty, ImTable2 } from 'react-icons/im';
import { Footer, MiddleNav, TopNav } from '@/components/portfolio/Navigation';
import { CaseStudyCard, ContentModalThree, ImageModalOne, ProductModalOne, ProductModalTwo } from '@/components/portfolio/ContentSurfaces';
import { MetricValue } from '@/components/portfolio/MetricValue';
import { CaseStudyHeroShell, CaseStudyImpactMetrics, CaseStudyTopStats } from '@/components/portfolio/CaseStudyPrimitives';
import { CompanyLogoGroup, PressAndAccoladesModal, PressAwardsLogoGroup, companyLogos, countryFlags, pressAwardsLogos } from '@/components/portfolio/Trust';
import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';

export default function EditorialOperatorVisualSystem() {
  const designSystemNavItems = [
    { id: 'design-system-responsive', label: 'Responsive' },
    { id: 'design-system-grid-spacing', label: 'Grid & Spacing' },
    { id: 'design-system-rules', label: 'Do / Don’t' },
    { id: 'design-system-shadows-gradients', label: 'Shadows & Gradients' },
    { id: 'design-system-color', label: 'Color' },
    { id: 'design-system-typography', label: 'Typography' },
    { id: 'design-system-controls', label: 'Buttons, Links, Fields' },
    { id: 'design-system-badges-logos', label: 'Badges & Logos' },
    { id: 'design-system-nav-designs', label: 'Navigation Designs' },
    { id: 'design-system-utility-nav', label: 'Utility Navigation' },
    { id: 'design-system-section-headers', label: 'Section Headers' },
    { id: 'design-system-content-modals', label: 'Content Modals' },
    { id: 'design-system-case-study-designs', label: 'Case Study Designs' },
    { id: 'design-system-pull-quotes', label: 'Pull Quotes' },
    { id: 'design-system-iconography', label: 'Iconography' },
  ];
  const [activeDesignSystemSection, setActiveDesignSystemSection] = useState(designSystemNavItems[0].id);
  const colors = {
    ink: '#222222',
    muted: '#7B7B7B',
    bg: '#FFFFFF',
    soft: '#F8F8F8',
    subtle: '#F1F1F1',
    border: '#E8E8E8',
    borderStrong: '#D8D8D8',
    accent: '#447ACB',
    accentHover: '#2F5EA4',
    inverse: '#111111',
    inverseText: '#FFFFFF',
    badge: '#F3F3F3',
  };

  const typeRows = [
    { label: 'Display', desktop: '96 / 1.0', tablet: '72 / 1.0', mobile: '48 / 1.0', sample: 'Serious work. Calm system.', className: t.type.display },
    { label: 'Lockup Title', desktop: '46 / 0.96', tablet: '37 / 0.96', mobile: '30 / 0.96', sample: 'Explore My Design Journey', className: t.type.lockupTitle },
    { label: 'H1', desktop: '72 / 1.04', tablet: '56 / 1.04', mobile: '40 / 1.04', sample: 'Turn complexity into shipped outcomes.', className: t.type.h1 },
    { label: 'H2', desktop: '56 / 1.08', tablet: '44 / 1.08', mobile: '34 / 1.08', sample: 'A premium-neutral visual system.', className: t.type.h2 },
    { label: 'H3', desktop: '44 / 1.1', tablet: '36 / 1.1', mobile: '28 / 1.1', sample: 'Quiet cards and clear hierarchy.', className: t.type.h3 },
    { label: 'H4', desktop: '36 / 1.12', tablet: '30 / 1.12', mobile: '24 / 1.12', sample: 'Used for subsections and modules.', className: t.type.h4 },
    { label: 'H5', desktop: '32 / 1.14', tablet: '28 / 1.14', mobile: '22 / 1.14', sample: 'Used for card titles and utility headings.', className: t.type.h5 },
    { label: 'H6', desktop: '26 / 1.18', tablet: '22 / 1.18', mobile: '18 / 1.18', sample: 'Used for compact list titles and supporting headings.', className: t.type.h6 },
    { label: 'Metric', desktop: '60 / 0.98', tablet: '44 / 0.98', mobile: '36 / 0.98', sample: '1,395', className: t.type.metric },
    { label: 'Body Large', desktop: '19 / 1.6', tablet: '19 / 1.6', mobile: '18 / 1.6', sample: 'Larger supporting copy for hero and section intros.', className: t.type.bodyLarge },
    { label: 'Body', desktop: '17 / 1.65', tablet: '17 / 1.65', mobile: '16 / 1.65', sample: 'Readable, literal, and calm body copy for the main content system.', className: t.type.body },
    { label: 'Small', desktop: '15 / 1.55', tablet: '15 / 1.55', mobile: '14 / 1.55', sample: 'Supporting metadata and utility text.', className: t.type.small },
    { label: 'Eyebrow', desktop: '11 / 1.0', tablet: '11 / 1.0', mobile: '11 / 1.0', sample: 'CASE STUDY · RECRUITER HUB · SYSTEM', className: t.type.eyebrow },
    { label: 'Utility', desktop: '15 / auto', tablet: '15 / auto', mobile: '14 / auto', sample: 'Primary Action / View Case Study / Enter your email', className: t.type.utility },
  ];

  const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];
  const primaryNavItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];
  const middleNavItems = [
    { label: 'Overview', href: '#middle-nav-overview' },
    { label: 'Challenge', href: '#middle-nav-challenge' },
    { label: 'Ownership', href: '#middle-nav-ownership' },
    { label: 'Solution', href: '#middle-nav-solution' },
    { label: 'Impact', href: '#middle-nav-impact' },
  ];
  const iconLibraryFamilies = [
    {
      name: 'Ionicons',
      style: 'Rounded app/UI glyphs with a calm, modern product tone.',
      use: 'Navigation, utility controls, and lightweight product actions.',
      icons: [
        [IoSearchOutline, 'Search'],
        [IoGridOutline, 'Grid'],
        [IoMailOutline, 'Mail'],
        [IoBriefcaseOutline, 'Work'],
        [IoLayersOutline, 'Layers'],
        [IoSparklesOutline, 'Accent'],
      ],
    },
    {
      name: 'Feather',
      style: 'Minimal editorial line icons with very light construction.',
      use: 'Quiet support states where the icon should stay secondary.',
      icons: [
        [FiSearch, 'Search'],
        [FiGrid, 'Grid'],
        [FiMail, 'Mail'],
        [FiBriefcase, 'Work'],
        [FiLayers, 'Layers'],
        [FiStar, 'Accent'],
      ],
    },
    {
      name: 'Heroicons',
      style: 'Product UI symbols with stronger structure and system clarity.',
      use: 'Application surfaces, dashboards, panels, and structured content.',
      icons: [
        [HiOutlineMagnifyingGlass, 'Search'],
        [HiOutlineSquares2X2, 'Grid'],
        [HiOutlineEnvelope, 'Mail'],
        [HiOutlineBriefcase, 'Work'],
        [HiOutlineRectangleGroup, 'Panels'],
        [HiOutlineSparkles, 'Accent'],
      ],
    },
    {
      name: 'Tabler',
      style: 'Broad technical icon family with crisp geometric line work.',
      use: 'Operational, systems, and data-heavy interface moments.',
      icons: [
        [TbSearch, 'Search'],
        [TbLayoutGrid, 'Grid'],
        [TbMail, 'Mail'],
        [TbBriefcase, 'Work'],
        [TbLayersIntersect, 'Layers'],
        [TbSparkles, 'Accent'],
      ],
    },
    {
      name: 'Bootstrap',
      style: 'Compact utility glyphs with high common-interface coverage.',
      use: 'Fallback utility symbols and generic interface actions.',
      icons: [
        [BsSearch, 'Search'],
        [BsGrid, 'Grid'],
        [BsEnvelope, 'Mail'],
        [BsBriefcase, 'Work'],
        [BsCollection, 'Collection'],
        [BsStars, 'Accent'],
      ],
    },
    {
      name: 'IcoMoon',
      style: 'Classic symbol set with broad legacy and utility coverage.',
      use: 'Legacy-style UI, broad symbol gaps, and utility-heavy layouts.',
      icons: [
        [ImSearch, 'Search'],
        [ImTable2, 'Grid'],
        [ImMail4, 'Mail'],
        [ImBriefcase, 'Work'],
        [ImStack, 'Stack'],
        [ImStarEmpty, 'Accent'],
      ],
    },
  ];

  const SectionLabel = ({ title, subtitle, meta }) => (
    <div className="mb-8 md:mb-10 xl:mb-12">
      <div className="flex items-center justify-between gap-6">
        <span
          className="inline-flex items-center rounded-full px-4 py-3 text-[12px] md:text-[13px] uppercase tracking-[0.06em] leading-none border"
          style={{ color: colors.ink, backgroundColor: '#F2F2F2', borderColor: colors.border }}
        >
          {title}
        </span>
      </div>
      <h2
        className="mt-6 w-full text-[34px] leading-[1.08] tracking-[-0.016em] md:text-[48px] xl:text-[64px]"
        style={{ color: colors.ink, fontFamily: 'Aeonik Trial', fontWeight: 360 }}
      >
        {subtitle}
      </h2>
      {meta ? (
        <p className="mt-5 max-w-[52rem] text-[16px] md:text-[17px] xl:text-[18px] leading-[1.65]" style={{ color: colors.muted }}>
          {meta}
        </p>
      ) : null}
    </div>
  );

  const Card = ({ children, soft = false, className = '' }) => (
    <div
      className={`rounded-[18px] border ${className}`}
      style={{
        backgroundColor: soft ? colors.soft : colors.bg,
        borderColor: colors.border,
      }}
    >
      {children}
    </div>
  );

  const Badge = ({ children, active = false }) => (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[13px] leading-none"
      style={{
        borderColor: active ? colors.accent : colors.border,
        color: active ? colors.accent : colors.ink,
        backgroundColor: active ? '#F7FAFF' : colors.bg,
      }}
    >
      {children}
    </span>
  );

  const LogoPill = ({ label, dark = false }) => (
    <div
      className="h-14 rounded-[14px] border px-4 flex items-center justify-center text-[14px] md:text-[15px] tracking-[-0.01em]"
      style={{
        borderColor: dark ? '#2B2B2B' : colors.border,
        backgroundColor: dark ? colors.inverse : colors.bg,
        color: dark ? colors.inverseText : colors.ink,
      }}
    >
      {label}
    </div>
  );

  const CaseStudyDesignsShowcase = () => (
    <Card className="p-5 md:p-6 xl:p-8">
      <MiddleNav items={middleNavItems} label="Middle nav" />
      <section id="middle-nav-overview" className="mt-8 scroll-mt-32 border-b pb-10" style={{ borderColor: colors.border }}>
        <CaseStudyHeroShell />
        <div className="mt-6">
          <CaseStudyTopStats />
        </div>
      </section>
      <div className="mt-10 grid gap-10">
        {[
          ['middle-nav-challenge', 'Challenge', 'Spell out the problem pressure cleanly. This section should make the stakes and constraints obvious without turning into a wall of setup text.'],
          ['middle-nav-ownership', 'Ownership', 'Clarify your role, your decision-making scope, and where you personally drove outcomes versus where you collaborated with product, engineering, and leadership.'],
          ['middle-nav-solution', 'Solution', 'Show the actual product, workflow, or system approach. This is where the narrative should shift from problem framing into the structure of what got designed and shipped.'],
          ['middle-nav-impact', 'Impact', 'Close with the results, what changed for the business or team, and what evidence best proves that the work mattered.'],
        ].map(([id, title, body]) => (
          <section key={id} id={id} className="scroll-mt-32 border-b pb-10" style={{ borderColor: colors.border }}>
            <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>
              {title}
            </div>
            <h4 className="mt-3 text-[28px] leading-[1.04] tracking-[-0.03em]" style={{ color: colors.ink, fontFamily: 'Aeonik Trial', fontWeight: 400 }}>
              {title}
            </h4>
            <p className="mt-4 max-w-[720px] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: colors.muted }}>
              {body}
            </p>
            {id === 'middle-nav-challenge' ? (
              <div className="mt-6 rounded-[22px] border p-5 md:p-6 xl:p-8" style={{ backgroundColor: colors.bg, borderColor: colors.border }}>
                <div className="pb-8">
                  <div className="grid gap-8 md:grid-cols-3 md:gap-10">
                    {[
                      [TbLayoutGrid, colors.accent, 'Core Tension', 'The problem was visible to residents, but the system behind it was fragmented and hard to explain clearly.'],
                      [TbBriefcase, colors.accent, 'Needs', 'Teams needed one shared picture of the issue so decisions, ownership, and next steps could happen faster.'],
                      [TbLayersIntersect, '#5B7CFA', 'Risk', 'Without a clearer structure, public visibility would keep increasing pressure while teams stayed reactive and misaligned.'],
                    ].map(([Icon, iconColor, itemTitle, itemBody]) => (
                      <div key={itemTitle} className="text-center">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center">
                          <Icon className="h-9 w-9" style={{ color: iconColor, strokeWidth: 1.8 }} />
                        </div>
                        <div className="mt-5 text-[22px] leading-[1.14] tracking-[-0.008em] md:text-[28px] xl:text-[32px]" style={{ color: colors.ink, fontWeight: 400 }}>
                          {itemTitle}
                        </div>
                        <p className="mx-auto mt-4 max-w-[22rem] text-[16px] leading-[1.7] md:text-[17px]" style={{ color: colors.ink }}>
                          {itemBody}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 pt-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-8">
                  <div className="rounded-[18px] p-1 md:p-2">
                    <div className="flex items-center gap-3" style={{ color: colors.ink }}>
                      <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent }} />
                      <span className="text-[16px] md:text-[17px] leading-none tracking-[-0.01em]">Challenge</span>
                    </div>
                    <h4
                      className="mt-5 max-w-[22rem] text-[22px] leading-[1.14] tracking-[-0.008em] md:text-[28px] xl:text-[32px]"
                      style={{ color: colors.ink, fontWeight: 400 }}
                    >
                      A comprehensive look at the service gaps, ownership friction, and delivery pressure.
                    </h4>
                    <p className="mt-5 max-w-[22rem] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: colors.ink }}>
                      Use this layout when the section needs one clear narrative anchor plus a set of tightly related challenge cards.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      ['Resident complaints', 'Support requests were coming in faster than teams could triage them cleanly.', false],
                      ['Search and findability', 'People could not easily find the right path to report, follow up, or escalate.', false],
                      ['Ownership ambiguity', 'No single story connected field repair status, vendor updates, and resident expectations.', true],
                      ['Service pressure', 'Cross-team coordination was happening reactively instead of through one shared operating picture.', false],
                    ].map(([cardTitle, cardBody, featured]) => (
                      <div
                        key={cardTitle}
                        className={`relative overflow-hidden rounded-[20px] border p-5 md:p-6 ${featured ? 'min-h-[250px]' : 'min-h-[210px]'}`}
                        style={{
                          borderColor: featured ? colors.ink : colors.border,
                          backgroundColor: featured ? colors.ink : colors.bg,
                        }}
                      >
                        {featured ? (
                          <div
                            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border"
                            style={{ borderColor: 'rgba(255,255,255,0.18)' }}
                          />
                        ) : null}
                        <div className="h-px w-14" style={{ backgroundColor: featured ? 'rgba(255,255,255,0.5)' : colors.ink }} />
                        <div
                          className="mt-5 text-[18px] leading-[1.18] tracking-[-0.004em] md:text-[21px] xl:text-[24px]"
                          style={{ color: featured ? colors.inverseText : colors.ink, fontWeight: 400 }}
                        >
                          {cardTitle}
                        </div>
                        <p
                          className="mt-4 max-w-[16rem] text-[15px] leading-[1.55] md:text-[16px]"
                          style={{ color: featured ? 'rgba(255,255,255,0.82)' : colors.ink }}
                        >
                          {cardBody}
                        </p>
                        <div className="absolute bottom-5 right-5 text-[30px] leading-none" style={{ color: featured ? colors.inverseText : colors.ink }}>
                          ↗
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : id === 'middle-nav-ownership' ? (
              <>
                <div className="mt-6 rounded-[22px] border p-5 md:p-6 xl:p-8" style={{ backgroundColor: colors.soft, borderColor: colors.border }}>
                  <div className="mx-auto max-w-[64rem] text-center">
                    <div className="flex items-center justify-center gap-3" style={{ color: colors.ink }}>
                      <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent }} />
                      <span className="text-[16px] md:text-[17px] leading-none tracking-[-0.01em]">Role Scope Snapshot</span>
                    </div>
                    <h4
                      className="mx-auto mt-6 max-w-[48rem] text-[28px] leading-[1.08] tracking-[-0.016em] md:text-[36px] xl:text-[44px]"
                      style={{ color: colors.ink, fontWeight: 360 }}
                    >
                      Product Manager coordinating a cross-platform streaming launch across product, platform, identity, and device teams.
                    </h4>
                  </div>

                  <div className="relative mt-8 md:mt-10">
                    <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 md:block" style={{ backgroundColor: colors.borderStrong }} />
                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:grid-rows-2 md:items-center">
                      <div className="md:pr-8 md:text-left">
                        <div
                          className="text-[40px] leading-[0.98] tracking-[-0.024em] md:text-[52px] xl:text-[64px]"
                          style={{ color: colors.ink, fontWeight: 390 }}
                        >
                          30+
                        </div>
                        <div className="mt-2 text-[14px] leading-[1.45]" style={{ color: colors.ink }}>
                          Teams aligned
                        </div>
                      </div>

                      <div className="relative z-10 row-span-2 mx-auto flex h-[220px] w-[220px] items-center justify-center rounded-full border bg-white p-8 text-center md:h-[260px] md:w-[260px]" style={{ borderColor: colors.border, boxShadow: '0 18px 40px rgba(34,34,34,0.04)' }}>
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: colors.accent }}>
                            Role
                          </div>
                          <div
                            className="mt-3 text-[22px] leading-[1.14] tracking-[-0.008em] md:text-[28px] xl:text-[32px]"
                            style={{ color: colors.ink, fontWeight: 400 }}
                          >
                            Product Manager
                          </div>
                          <div className="mt-3 text-[14px] leading-[1.45] md:text-[15px]" style={{ color: colors.accent }}>
                            June 2012 - June 2013
                          </div>
                        </div>
                      </div>

                      <div className="md:pl-8 md:text-right">
                        <div
                          className="text-[40px] leading-[0.98] tracking-[-0.024em] md:text-[52px] xl:text-[64px]"
                          style={{ color: colors.ink, fontWeight: 390 }}
                        >
                          $6m
                        </div>
                        <div className="mt-2 text-[14px] leading-[1.45]" style={{ color: colors.ink }}>
                          Budget
                        </div>
                      </div>

                      <div className="md:pr-8 md:text-left">
                        <div
                          className="text-[40px] leading-[0.98] tracking-[-0.024em] md:text-[52px] xl:text-[64px]"
                          style={{ color: colors.ink, fontWeight: 390 }}
                        >
                          12 Mo
                        </div>
                        <div className="mt-2 text-[14px] leading-[1.45]" style={{ color: colors.ink }}>
                          Delivery window
                        </div>
                      </div>

                      <div className="md:pl-8 md:text-right">
                        <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: colors.accent }}>
                          Platform Coverage
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-end">
                          {['Web', 'iOS', 'Android', 'Roku', 'Fire TV', 'Apple TV'].map((platform) => (
                            <div
                              key={platform}
                              className="inline-flex h-9 items-center rounded-full border px-3 text-[13px] tracking-[-0.01em]"
                              style={{ borderColor: colors.border, color: colors.ink, backgroundColor: colors.bg }}
                            >
                              {platform}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-[22px] border p-5 md:p-6 xl:p-8" style={{ backgroundColor: colors.bg, borderColor: colors.border }}>
                  <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
                    <div>
                      <div className="flex items-center gap-3" style={{ color: colors.ink }}>
                        <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent }} />
                        <span className="text-[16px] md:text-[17px] leading-none tracking-[-0.01em]">Ownership Flow</span>
                      </div>
                      <h4
                        className="mt-6 max-w-[24rem] text-[22px] leading-[1.14] tracking-[-0.008em] md:text-[28px] xl:text-[32px]"
                        style={{ color: colors.ink, fontWeight: 400 }}
                      >
                        How the work moved from scope definition into delivery alignment.
                      </h4>
                      <p className="mt-5 max-w-[25rem] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: colors.ink }}>
                        This pattern works when a section needs one concise explanation on the left and a structured process breakdown on the right.
                      </p>
                    </div>

                    <div className="grid gap-5">
                      {[
                        [Search, 'Scope', 'We clarified the business objective, success conditions, and the teams that needed to stay aligned.'],
                        [PanelsTopLeft, 'Alignment', 'We translated complexity into one operating picture so design, product, and engineering could work from the same frame.'],
                        [BadgeCheck, 'Execution', 'I drove the decisions, sequencing, and follow-through needed to keep the launch moving cleanly.'],
                        [FileText, 'Reporting', 'Progress and tradeoffs were documented clearly so leadership could review status without extra translation.'],
                      ].map(([Icon, stepTitle, stepBody]) => (
                        <div key={stepTitle} className="grid gap-3 sm:grid-cols-[28px_minmax(0,1fr)] sm:items-start">
                          <div className="flex h-7 w-7 items-center justify-center">
                            <Icon className="h-5 w-5" style={{ color: colors.ink, strokeWidth: 1.8 }} />
                          </div>
                          <div>
                            <div
                              className="text-[18px] leading-[1.18] tracking-[-0.004em] md:text-[21px] xl:text-[24px]"
                              style={{ color: colors.ink, fontWeight: 400 }}
                            >
                              {stepTitle}
                            </div>
                            <p className="mt-3 max-w-[28rem] text-[15px] leading-[1.65] md:text-[16px]" style={{ color: colors.ink }}>
                              {stepBody}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : id === 'middle-nav-impact' ? (
              <div className="mt-6">
                <CaseStudyImpactMetrics />
              </div>
            ) : (
              <div className="mt-6 min-h-[160px] rounded-[16px]" style={{ backgroundColor: colors.soft, border: `1px solid ${colors.border}` }} />
            )}
          </section>
        ))}
      </div>
    </Card>
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 220;
      let nextActive = designSystemNavItems[0].id;

      designSystemNavItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return;

        const top = element.getBoundingClientRect().top;
        if (top - offset <= 0) {
          nextActive = id;
        }
      });

      setActiveDesignSystemSection(nextActive);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: colors.bg,
        color: colors.ink,
        fontFamily: 'Aeonik Trial',
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-6 md:py-8 xl:py-10">
        <div className="sticky top-0 z-10 mb-8 md:mb-10 xl:mb-12 rounded-[18px] border backdrop-blur bg-white/90" style={{ borderColor: colors.border }}>
          <div className="flex items-center justify-between px-5 md:px-6 xl:px-8 h-16 md:h-[72px] xl:h-[80px]">
            <div className="text-[18px] tracking-[-0.02em]" style={{ fontWeight: 400 }}>Jim Markunas</div>
            <div className="hidden md:flex items-center gap-8 text-[15px]" style={{ color: colors.muted }}>
              <span style={{ color: colors.ink }}>Work</span>
              <span>Case Studies</span>
              <span>Resume</span>
              <span>Contact</span>
            </div>
            <button
              className="h-11 px-4 md:px-5 rounded-[12px] text-[14px] md:text-[15px] text-white transition-colors duration-200"
              style={{ backgroundColor: colors.accent }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
            >
              Recruiter Hub
            </button>
          </div>
          <div className="border-t px-4 py-3 md:px-6 xl:px-8" style={{ borderColor: colors.border }}>
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {designSystemNavItems.map((item) => {
                const active = activeDesignSystemSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="inline-flex shrink-0 items-center rounded-full border px-3 py-2 text-[13px] md:text-[14px] leading-none transition-colors duration-200"
                    style={{
                      borderColor: active ? colors.accent : colors.border,
                      color: active ? colors.accent : colors.ink,
                      backgroundColor: active ? '#F7FAFF' : colors.bg,
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <section className="grid xl:grid-cols-12 gap-6 md:gap-8 xl:gap-6 items-stretch py-8 md:py-10 xl:py-12">
          <div className="xl:col-span-6 flex flex-col justify-between rounded-[24px] bg-white">
            <div>
              <div className="flex items-center gap-3 text-[12px] md:text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                <span>Editorial Operator</span>
              </div>
              <h1 className="mt-6 text-[40px] md:text-[56px] xl:text-[72px] leading-[1.04] tracking-[-0.018em] font-[360] max-w-[12ch]">
                A calm, premium system for serious work.
              </h1>
              <p className="mt-6 max-w-[38rem] text-[16px] md:text-[17px] xl:text-[18px] leading-[1.65]" style={{ color: colors.muted }}>
                Large Aeonik typography, quiet cards, tighter corners, explicit interaction states, and responsive layouts designed to feel structured on desktop, tablet, and mobile.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="h-12 px-5 rounded-[12px] text-white text-[15px] transition-colors duration-200"
                style={{ backgroundColor: colors.accent }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              >
                Primary Button
              </button>
              <button
                className="h-12 px-5 rounded-[12px] border text-[15px] transition-colors duration-200"
                style={{ borderColor: colors.border, color: colors.ink, backgroundColor: colors.bg }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.soft)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.bg)}
              >
                Secondary Button
              </button>
            </div>
          </div>
          <div className="xl:col-span-6">
            <Card soft className="h-full p-5 md:p-6 xl:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <Card className="p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Proof Card</div>
                    <MetricValue value="$55M" className="mt-6 block text-[42px] md:text-[52px] xl:text-[60px] leading-[0.98] tracking-[-0.024em] font-[390] tabular-nums" />
                  </div>
                  <p className="mt-6 text-[14px] md:text-[15px] xl:text-[16px] leading-[1.5]" style={{ color: colors.muted }}>
                    Number-first hierarchy with quiet explanation underneath.
                  </p>
                </Card>
                <Card className="p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Case Study Card</div>
                    <div className="mt-6">
                      <CaseStudyCard
                        title="Mockup Design"
                        kicker="002"
                        imageSrc="/test/images/bitmap-266.png"
                        imageAlt="Mockup-style visual specimen"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </section>

        <section id="design-system-responsive" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Responsive" subtitle="The same system simplified across desktop, tablet, and mobile." />
          <div className="grid xl:grid-cols-3 gap-6">
            {[
              ['Desktop', '12-column grid · large type · multi-column composition'],
              ['Tablet', '8-column grid · reduced image dominance · tighter spacing'],
              ['Mobile', '4-column grid · stacked hierarchy · proof first'],
            ].map(([title, body]) => (
              <Card key={title} className="p-5 md:p-6 xl:p-8">
                <div className="aspect-[4/3] rounded-[16px] border p-4 flex flex-col justify-between" style={{ borderColor: colors.border, backgroundColor: colors.soft }}>
                  <div className="space-y-3">
                    <div className="h-3 w-20 rounded-full" style={{ backgroundColor: '#D9D9D9' }} />
                    <div className="h-8 rounded-[10px]" style={{ backgroundColor: '#E5E5E5' }} />
                    <div className="h-16 rounded-[14px]" style={{ backgroundColor: '#EFEFEF' }} />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-[12px]" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${colors.border}` }} />
                    <div className="h-16 rounded-[12px]" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${colors.border}` }} />
                    <div className="h-16 rounded-[12px]" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${colors.border}` }} />
                  </div>
                </div>
                <div className="mt-5 text-[22px] tracking-[-0.02em]">{title}</div>
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55]" style={{ color: colors.muted }}>{body}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="design-system-grid-spacing" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Grid & Spacing" subtitle="Editorial layout with systemized rhythm across all breakpoints." />
          <div className="grid xl:grid-cols-12 gap-6">
            <div className="xl:col-span-7">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-2 md:gap-3 xl:gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={`${i > 3 ? 'hidden md:block' : ''} ${i > 7 ? 'md:hidden xl:block' : ''} rounded-[10px] h-40 md:h-44 xl:h-48`} style={{ backgroundColor: i % 2 === 0 ? colors.soft : '#F2F2F2' }} />
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-[13px]" style={{ color: colors.muted }}>
                  <span>Desktop: 12 columns / 24px gutter / 48px margin</span>
                  <span>Tablet: 8 columns / 20px gutter / 32px margin</span>
                  <span>Mobile: 4 columns / 16px gutter / 20px margin</span>
                </div>
              </Card>
            </div>
            <div className="xl:col-span-5">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="space-y-4">
                  {spacing.map((s) => (
                    <div key={s} className="flex items-center gap-4">
                      <div className="w-16 text-[14px]" style={{ color: colors.muted }}>{s}px</div>
                      <div className="rounded-full" style={{ width: s * 2, height: 8, backgroundColor: colors.ink }} />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="design-system-rules" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Do / Don’t" subtitle="The system stays premium by being selective." />
          <div className="grid xl:grid-cols-2 gap-6">
            <Card className="p-5 md:p-6 xl:p-8">
              <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.accent }}>Do</div>
              <ul className="mt-5 space-y-4 text-[16px] md:text-[17px] xl:text-[18px] leading-[1.55]">
                <li>Use large Aeonik headings and generous whitespace.</li>
                <li>Keep cards quiet with thin borders and strong padding.</li>
                <li>Use blue only for interaction and precision emphasis.</li>
                <li>Normalize logos and keep badges utility-driven.</li>
              </ul>
            </Card>
            <Card className="p-5 md:p-6 xl:p-8">
              <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: '#B45A5A' }}>Don’t</div>
              <ul className="mt-5 space-y-4 text-[16px] md:text-[17px] xl:text-[18px] leading-[1.55]">
                <li>Don’t fill pages with gradients, shadows, or decorative accents.</li>
                <li>Don’t make each section look like a different website.</li>
                <li>Don’t let imagery overpower proof or messaging.</li>
                <li>Don’t turn badges, tabs, or icons into visual clutter.</li>
              </ul>
            </Card>
          </div>
        </section>

        <section id="design-system-shadows-gradients" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Shadows and Gradients" subtitle="Used rarely, quietly, and only when they add structure." meta="Shadows are allowed only as very soft elevation on modal surfaces and hover states. Gradients are not part of the base system and should only appear in rare, restrained support graphics-not as page backgrounds. The optional gradient is now gray-based, not blue." />
          <div className="grid xl:grid-cols-3 gap-6">
            <Card className="p-5 md:p-6 xl:p-8">
              <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>No shadow</div>
              <div className="mt-6 rounded-[16px] border h-28" style={{ borderColor: colors.border, backgroundColor: colors.bg }} />
            </Card>
            <Card className="p-5 md:p-6 xl:p-8">
              <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Soft shadow</div>
              <div className="mt-6 rounded-[16px] border h-28" style={{ borderColor: colors.border, backgroundColor: colors.bg, boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }} />
            </Card>
            <Card className="p-5 md:p-6 xl:p-8">
              <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Optional restrained gray gradient</div>
              <div className="mt-6 rounded-[16px] border h-28" style={{ borderColor: colors.border, background: 'linear-gradient(135deg, rgba(245,245,245,1) 0%, rgba(232,232,232,1) 40%, rgba(255,255,255,1) 100%)' }} />
            </Card>
          </div>
        </section>

        <section id="design-system-color" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Color" subtitle="A neutral-first palette with one precise accent." />
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
            {[
              ['Ink', colors.ink, '#222222'],
              ['Muted', colors.muted, '#7B7B7B'],
              ['Background', colors.bg, '#FFFFFF'],
              ['Soft', colors.soft, '#F8F8F8'],
              ['Subtle', colors.subtle, '#F1F1F1'],
              ['Border', colors.border, '#E8E8E8'],
              ['Strong Border', colors.borderStrong, '#D8D8D8'],
              ['Accent', colors.accent, '#447ACB'],
              ['Accent Hover', colors.accentHover, '#2F5EA4'],
            ].map(([label, color, hex]) => (
              <div key={label} className="overflow-hidden rounded-[18px] border" style={{ borderColor: colors.border }}>
                <div className="h-28 md:h-32 xl:h-36" style={{ backgroundColor: color }} />
                <div className="p-4 bg-white">
                  <div className="text-[15px] leading-tight">{label}</div>
                  <div className="mt-2 text-[13px]" style={{ color: colors.muted }}>{hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="design-system-typography" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Typography" subtitle="Full specimen view with all display classes visible inside the modal." meta="This system now uses 6 header classes: H1 through H6. Utility text for buttons, links, and fields is defined separately and shown alongside the headings." />
          <div className="grid xl:grid-cols-12 gap-6">
            <div className="xl:col-span-4">
              <Card className="p-5 md:p-6 xl:p-8 h-full">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-[13px]" style={{ color: colors.muted }}>
                        <th className="pb-4 font-normal">Class</th>
                        <th className="pb-4 font-normal">Desktop</th>
                        <th className="pb-4 font-normal">Tablet</th>
                        <th className="pb-4 font-normal">Mobile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {typeRows.map((row) => (
                        <tr key={row.label} className="border-t" style={{ borderColor: colors.border }}>
                          <td className="py-4 text-[14px] md:text-[15px]">{row.label}</td>
                          <td className="py-4 text-[12px] md:text-[13px]" style={{ color: colors.muted }}>{row.desktop}</td>
                          <td className="py-4 text-[12px] md:text-[13px]" style={{ color: colors.muted }}>{row.tablet}</td>
                          <td className="py-4 text-[12px] md:text-[13px]" style={{ color: colors.muted }}>{row.mobile}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
            <div className="xl:col-span-8">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Typography modal specimen</div>
                <div className="mt-6 rounded-[18px] border p-5 md:p-6 xl:p-8" style={{ borderColor: colors.borderStrong, backgroundColor: colors.bg, boxShadow: '0 6px 18px rgba(0,0,0,0.035)' }}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-[22px] md:text-[24px] xl:text-[28px] tracking-[-0.02em]">Type system preview</h4>
                    <span className="text-[14px]" style={{ color: colors.muted }}>×</span>
                  </div>
                  <div className="mt-8 space-y-8 md:space-y-10 xl:space-y-12">
                    {typeRows.map((row) => (
                      <div key={row.label} className="border-b pb-6 last:border-b-0 last:pb-0" style={{ borderColor: colors.border }}>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] md:text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>
                          <span>{row.label}</span>
                          <span>Desktop {row.desktop}</span>
                          <span>Tablet {row.tablet}</span>
                          <span>Mobile {row.mobile}</span>
                        </div>
                        <div className={`mt-4 ${row.className}`}>{row.sample}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="design-system-controls" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Buttons, Links, Fields" subtitle="Interaction text and behavior are explicitly defined now." meta="CTA corners are reduced. Primary and secondary buttons both have hover states. Link patterns include inline links, external links, text-action links, and utility links." />
          <div className="grid xl:grid-cols-12 gap-6">
            <div className="xl:col-span-6 grid gap-6">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Buttons across devices</div>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="mb-3 text-[13px]" style={{ color: colors.muted }}>Desktop · 48–52px height · 12px radius</div>
                    <div className="flex flex-wrap gap-3">
                      <button className="h-12 px-5 rounded-[12px] text-white text-[15px] transition-colors duration-200" style={{ backgroundColor: colors.accent }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}>Primary Action</button>
                      <button
                        className="h-12 px-5 rounded-[12px] border text-[15px] transition-[background-color,border-color,color] duration-200"
                        style={{ borderColor: colors.border, color: colors.ink, backgroundColor: colors.bg }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.soft;
                          e.currentTarget.style.borderColor = colors.accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = colors.bg;
                          e.currentTarget.style.borderColor = colors.border;
                        }}
                      >
                        Secondary Action
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 text-[13px]" style={{ color: colors.muted }}>Tablet · 48px height · same text treatment</div>
                    <div className="flex flex-wrap gap-3 scale-[0.96] origin-left">
                      <button className="h-12 px-5 rounded-[12px] text-white text-[15px]" style={{ backgroundColor: colors.accent }}>Primary Action</button>
                      <button className="h-12 px-5 rounded-[12px] border text-[15px]" style={{ borderColor: colors.border, color: colors.ink }}>Secondary Action</button>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 text-[13px]" style={{ color: colors.muted }}>Mobile · 44–48px height · single column when needed</div>
                    <div className="w-full max-w-[320px] space-y-3">
                      <button className="w-full h-11 px-4 rounded-[12px] text-white text-[14px]" style={{ backgroundColor: colors.accent }}>Primary Action</button>
                      <button className="w-full h-11 px-4 rounded-[12px] border text-[14px]" style={{ borderColor: colors.border, color: colors.ink }}>Secondary Action</button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Field text and labels</div>
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="block text-[14px] mb-2">Email</label>
                    <input className="w-full h-12 rounded-[12px] border px-4 outline-none text-[15px]" style={{ borderColor: colors.border }} placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-[14px] mb-2">Search case studies</label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: colors.muted }} />
                      <input className="w-full h-12 rounded-[12px] border pl-11 pr-4 outline-none text-[15px]" style={{ borderColor: colors.border }} placeholder="Search by company, industry, or outcome" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="xl:col-span-6">
              <Card className="p-5 md:p-6 xl:p-8 h-full">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Link patterns + hover states</div>
                <div className="mt-6 grid gap-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-[16px] border p-4" style={{ borderColor: colors.border }}>
                      <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Default</div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[15px]">Inline text link</span>
                        <span className="inline-flex items-center gap-2 text-[15px]" style={{ color: colors.accent }}>Read case study <ArrowRight className="h-4 w-4" /></span>
                      </div>
                    </div>
                    <div className="rounded-[16px] border p-4" style={{ borderColor: colors.borderStrong, backgroundColor: '#F7FAFF' }}>
                      <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Hover</div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[15px]">Inline text link</span>
                        <span className="inline-flex items-center gap-2 text-[15px] underline underline-offset-4" style={{ color: colors.accentHover }}>Read case study <ArrowRight className="h-4 w-4" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-[16px] border p-4" style={{ borderColor: colors.border }}>
                      <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>External</div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[15px]">External link</span>
                        <span className="inline-flex items-center gap-2 text-[15px]" style={{ color: colors.accent }}>LinkedIn profile <ExternalLink className="h-4 w-4" /></span>
                      </div>
                    </div>
                    <div className="rounded-[16px] border p-4" style={{ borderColor: colors.border }}>
                      <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Utility</div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[15px]">Utility link</span>
                        <span className="inline-flex items-center gap-2 text-[15px]" style={{ color: colors.ink }}><Download className="h-4 w-4" /> Download resume</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="design-system-badges-logos" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Badges and Logos" subtitle="Badges stay utility-driven. Logos are now organized into real category groups." meta="The uploaded logo pack breaks naturally into four groups: your personal brand, press and awards, company logos, and country flags. The system should present each group with a distinct but quiet layout treatment." />
          <div className="grid xl:grid-cols-12 gap-6">
            <div className="xl:col-span-4">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Badges</div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge active><BadgeCheck className="h-4 w-4" /> Featured</Badge>
                  <Badge>Enterprise</Badge>
                  <Badge>Case Study</Badge>
                  <Badge><FolderKanban className="h-4 w-4" /> Program</Badge>
                </div>
                <p className="mt-6 text-[14px] leading-[1.5]" style={{ color: colors.muted }}>
                  Use badges for filtering, tagging, or light utility state-not as decorative confetti.
                </p>
                <div className="mt-6 border-t pt-6" style={{ borderColor: colors.border }}>
                  <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>
                    Country flags
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {countryFlags.map((flag) => (
                      <div
                        key={flag.src}
                        className="overflow-hidden rounded-[10px] border"
                        style={{ borderColor: colors.border, backgroundColor: colors.bg }}
                      >
                        <img alt={flag.alt} className="block h-auto w-full" src={flag.src} />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            <div className="xl:col-span-8 grid gap-6">
              <Card className="p-5 md:p-6 xl:p-8">
                <div
                  className="text-[13px] uppercase tracking-[0.08em]"
                  style={{ color: colors.muted, fontFamily: 'Aeonik Trial' }}
                >
                  1. MY NAME & LOGO
                </div>
                <div className="mt-6">
                  <div
                    className="min-h-[132px] rounded-[18px] border px-6 py-8 flex items-center justify-center text-center md:min-h-[148px] md:px-8"
                    style={{ borderColor: colors.border, backgroundColor: colors.bg, color: colors.ink }}
                  >
                    <div className="flex items-center justify-center gap-4 md:gap-5">
                      <Image
                        src="/brand/jim-logo.png"
                        alt="Jim Markunas logo"
                        width={44}
                        height={44}
                        className="h-10 w-10 md:h-11 md:w-11 xl:h-12 xl:w-12"
                        style={{ filter: 'brightness(0) saturate(100%)' }}
                      />
                      <div
                        className="text-[30px] leading-[0.94] tracking-[-0.04em] md:text-[39px] xl:text-[48px]"
                        style={{ color: colors.ink, fontFamily: 'Aeonik Trial', fontWeight: 400 }}
                      >
                        Jim Markunas
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 md:p-6 xl:p-8">
                <PressAwardsLogoGroup title="2. Press & awards logos" logos={pressAwardsLogos} />
              </Card>

              <Card className="p-5 md:p-6 xl:p-8">
                <CompanyLogoGroup title="3. Company logos" logos={companyLogos} />
              </Card>
            </div>
          </div>
        </section>

        <section id="design-system-nav-designs" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Navigation Designs" subtitle="Shared navigation components for primary framing, in-page movement, conversion, and site close." meta="These are real system components, not one-off mockups. Use the top nav for site-level movement, the middle nav for page/section switching, Let’s Build for conversion CTA, and the footer for closing navigation plus contact. Top-nav link hover and both CTA hover states should be visible and intentional in the system." />
          <div className="grid gap-6">
            <Card className="p-5 md:p-6 xl:p-8">
              <TopNav items={primaryNavItems} activeHref="/work" />
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[16px] border p-4" style={{ borderColor: colors.border, backgroundColor: colors.soft }}>
                    <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Secondary CTA hover</div>
                    <div className="mt-4 inline-flex h-11 items-center justify-center rounded-[10px] border px-5 text-[14px] md:text-[15px] tracking-[-0.01em]" style={{ borderColor: colors.accent, color: colors.accentHover, backgroundColor: '#F7FAFF', fontFamily: 'Aeonik Trial', fontWeight: 400 }}>
                      My CV
                    </div>
                  </div>
                  <div className="rounded-[16px] border p-4" style={{ borderColor: colors.border, backgroundColor: colors.soft }}>
                    <div className="text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Primary CTA hover</div>
                    <div className="mt-4 inline-flex h-11 items-center justify-center rounded-[10px] border border-transparent px-6 text-[14px] md:text-[15px] tracking-[-0.01em]" style={{ color: colors.inverseText, backgroundColor: colors.accentHover, fontFamily: 'Aeonik Trial', fontWeight: 500 }}>
                      Book a Call
                    </div>
                </div>
              </div>
            </Card>

            <Footer items={primaryNavItems} />
          </div>
        </section>

        <section id="design-system-utility-nav" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Navigation, Breadcrumbs, Tabs, Pagination" subtitle="Utility navigation is part of the system, not an afterthought." />
          <div className="grid xl:grid-cols-12 gap-6">
            <div className="xl:col-span-4 grid gap-6">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Breadcrumbs</div>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-[14px]" style={{ color: colors.muted }}>
                  <Home className="h-4 w-4" />
                  <ChevronRight className="h-4 w-4" />
                  <span>Case Studies</span>
                  <ChevronRight className="h-4 w-4" />
                  <span style={{ color: colors.ink }}>DIRECTV Digital Revenue Platform</span>
                </div>
              </Card>

              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Tabs + hover states</div>
                <div className="mt-6 grid gap-4">
                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Default</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge active>All</Badge>
                      <Badge>Enterprise</Badge>
                      <Badge>Founder</Badge>
                      <Badge>Operations</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Hover</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[13px] leading-none" style={{ borderColor: colors.accent, color: colors.accentHover, backgroundColor: '#F7FAFF' }}>Enterprise</span>
                      <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[13px] leading-none" style={{ borderColor: colors.accent, color: colors.accentHover, backgroundColor: '#F7FAFF' }}>Founder</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="xl:col-span-8 grid gap-6">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Navigation logic</div>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="rounded-[16px] border p-4" style={{ borderColor: colors.border }}>
                    <div className="text-[15px]">Primary nav</div>
                    <p className="mt-3 text-[14px] leading-[1.5]" style={{ color: colors.muted }}>Text-led, minimal, sticky, one CTA, clear active state.</p>
                  </div>
                  <div className="rounded-[16px] border p-4" style={{ borderColor: colors.border }}>
                    <div className="text-[15px]">Secondary nav</div>
                    <p className="mt-3 text-[14px] leading-[1.5]" style={{ color: colors.muted }}>Used inside case studies, recruiter hub, or utility pages only.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 md:p-6 xl:p-8">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Pagination + hover states</div>
                <div className="mt-6 grid gap-4">
                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Default</div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button className="h-10 w-10 rounded-[12px] border flex items-center justify-center" style={{ borderColor: colors.border }}><ChevronLeft className="h-4 w-4" /></button>
                      <button className="h-10 min-w-10 px-3 rounded-[12px] border" style={{ borderColor: colors.accent, color: colors.accent }}>1</button>
                      <button className="h-10 min-w-10 px-3 rounded-[12px] border" style={{ borderColor: colors.border }}>2</button>
                      <button className="h-10 min-w-10 px-3 rounded-[12px] border" style={{ borderColor: colors.border }}>3</button>
                      <span className="px-2 text-[14px]" style={{ color: colors.muted }}>…</span>
                      <button className="h-10 min-w-10 px-3 rounded-[12px] border" style={{ borderColor: colors.border }}>12</button>
                      <button className="h-10 w-10 rounded-[12px] border flex items-center justify-center" style={{ borderColor: colors.border }}><ChevronRight className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Hover</div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button className="h-10 w-10 rounded-[12px] border flex items-center justify-center" style={{ borderColor: colors.accent, backgroundColor: '#F7FAFF', color: colors.accentHover }}><ChevronLeft className="h-4 w-4" /></button>
                      <button className="h-10 min-w-10 px-3 rounded-[12px] border" style={{ borderColor: colors.accent, backgroundColor: '#F7FAFF', color: colors.accentHover }}>2</button>
                      <button className="h-10 w-10 rounded-[12px] border flex items-center justify-center" style={{ borderColor: colors.accent, backgroundColor: '#F7FAFF', color: colors.accentHover }}><ChevronRight className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="design-system-section-headers" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Section Headers" subtitle="A few reusable intro patterns for sections, modules, and editorial breakpoints." meta="These are presentation variants of the same system behavior: restrained eyebrow, clear headline, and optional support copy. Use them as section-openers, not as decorative hero replacements." />
          <div className="grid xl:grid-cols-12 gap-6">
            <div className="xl:col-span-4">
              <Card className="p-5 md:p-6 xl:p-8 h-full">
                <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.muted }}>Variant rules</div>
                <div className="mt-6 space-y-5">
                  {[
                    ['Centered intro', 'Best for centered section openings that need a quiet utility label, one strong headline, and short supporting copy.'],
                    ['Editorial lead', 'Best for major section openings with a small eyebrow, one strong headline, and optional body copy.'],
                    ['Compact module', 'Best for tighter cards or grouped content where the heading needs presence without taking over the layout.'],
                    ['Split utility', 'Best when a section intro needs a title on the left and concise support or stats on the right.'],
                  ].map(([title, body]) => (
                    <div key={title} className="border-b pb-5 last:border-b-0 last:pb-0" style={{ borderColor: colors.border }}>
                      <div className="text-[15px] tracking-[-0.01em]" style={{ color: colors.ink }}>{title}</div>
                      <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: colors.muted }}>{body}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="xl:col-span-8">
              <Card className="p-5 md:p-6 xl:p-8">
                <div className="grid gap-6">
                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                      Centered Intro
                    </div>
                    <div className="rounded-[18px] border p-6 md:p-8 xl:p-10" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
                    <div className="mx-auto max-w-[44rem] text-center">
                      <div className="flex items-center justify-center gap-3" style={{ color: colors.ink }}>
                        <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent }} />
                        <span className="text-[16px] md:text-[17px] leading-none tracking-[-0.01em]">Experiences</span>
                      </div>
                      <h3 className={t.type.h2} style={{ color: colors.ink }}>
                        Manage your projects fast
                      </h3>
                      <p className={`${t.type.body} mx-auto mt-5 max-w-[38rem]`} style={{ color: colors.muted }}>
                        A planning-oriented content modal that pairs a quiet product illustration with a clear step-by-step value story. Use it when the interface needs to explain a workflow, not just decorate it.
                      </p>
                    </div>
                  </div>
                  </div>

                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                      Editorial Lead
                    </div>
                    <div className="rounded-[18px] border p-6 md:p-8 xl:p-10" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
                    <div className="flex items-center gap-3" style={{ color: colors.ink }}>
                      <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent }} />
                      <span className="text-[16px] md:text-[17px] leading-none tracking-[-0.01em]">Experiences</span>
                    </div>
                    <h3 className="mt-8 text-[40px] md:text-[56px] xl:text-[64px] leading-[1.04] tracking-[-0.018em]" style={{ color: colors.ink, fontWeight: 360 }}>
                      Explore my design thinking through shipped work.
                    </h3>
                    <p className="mt-5 max-w-[44rem] text-[16px] md:text-[17px] leading-[1.65]" style={{ color: colors.muted }}>
                      Use this version when a section needs a clear editorial entrance and enough room for one short explanatory sentence.
                    </p>
                  </div>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-12">
                    <div className="xl:col-span-6">
                      <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>Compact Module</div>
                      <div className="rounded-[18px] border p-6 md:p-7" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
                      <div className="text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.accent }}>Case study section</div>
                      <h4 className="mt-4 text-[28px] md:text-[36px] xl:text-[44px] leading-[1.1] tracking-[-0.012em]" style={{ color: colors.ink, fontWeight: 400 }}>
                        Challenge and context
                      </h4>
                      <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6]" style={{ color: colors.muted }}>
                        A tighter version for sub-sections, modules, and narrative breaks inside a longer page.
                      </p>
                    </div>
                    </div>
                    <div className="xl:col-span-6">
                      <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>Split Utility</div>
                      <div className="rounded-[18px] border p-6 md:p-7" style={{ borderColor: colors.border, backgroundColor: colors.soft }}>
                      <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start">
                        <div>
                          <div className="text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>Impact</div>
                          <h4 className="mt-4 text-[28px] md:text-[34px] xl:text-[40px] leading-[1.08] tracking-[-0.014em]" style={{ color: colors.ink, fontWeight: 360 }}>
                            Results at a glance
                          </h4>
                        </div>
                        <p className="text-[14px] md:text-[15px] leading-[1.55]" style={{ color: colors.muted }}>
                          Use this when the section intro needs support copy or utility context aligned alongside the title.
                        </p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="design-system-content-modals" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel
            title="Content Modals"
            subtitle="Reusable editorial content cards for press, embeds, supporting context, and mixed media."
            meta="These are universal layout patterns. Use them anywhere across the site when a story beat needs structured text on one side and visual or embedded media on the other."
          />
          <div className="grid gap-6">
            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Product Modal 1
              </div>
              <ProductModalOne
                title={`Enjoy your time
working`}
                summary="A general product content modal with editorial hierarchy, soft image staging, and a clear action line. Use it when a section needs visual warmth on one side and concise narrative on the other."
                ctaLabel="See how it helped others"
                ctaHref="/contact"
                images={[
                  { src: '/test/images/bitmap-178.png', alt: 'Portrait of a smiling teammate' },
                  { src: '/test/images/man-standing-70.png', alt: 'Portrait of a standing team lead' },
                  { src: '/test/images/img-bg-161.png', alt: 'Team collaboration around a laptop' },
                ]}
              />
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Product Modal 2
              </div>
              <ProductModalTwo
                images={[
                  { src: '/test/images/bitmap-259.png', alt: 'Portrait subject with teal background' },
                  { src: '/test/images/bitmap-252.png', alt: 'Portrait subject with purple background' },
                  { src: '/test/images/bitmap-266.png', alt: 'Portrait subject with red background and headphones' },
                  { src: '/test/images/bitmap-273.png', alt: 'Portrait subject in white shirt' },
                  { src: '/test/images/bitmap-280.png', alt: 'Portrait subject in blue and green hoodie' },
                ]}
              />
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Image Modal 1
              </div>
              <ImageModalOne />
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Content Modal 01
              </div>
              <Card className="p-6 md:p-8 xl:p-10">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] xl:gap-8">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em]" style={{ color: colors.accent }}>
                    KSAT/NBC Report · San Antonio
                  </div>
                  <h3
                    className="mt-4 max-w-[36rem] text-[18px] leading-[1.18] tracking-[-0.004em] md:text-[21px] xl:text-[24px]"
                    style={{ color: colors.ink, fontWeight: 400 }}
                  >
                    Local coverage highlighted the resident-level problem and made service reliability a visible civic issue.
                  </h3>
                  <div className="mt-6 space-y-5">
                    {[
                      'Residents were in the dark without a reliable repair path.',
                      'Public coverage forced faster utility-vendor-city alignment and made service accountability non-negotiable.',
                      'Regional attention accelerated prioritization and tightened response expectations across teams.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: colors.accent }} />
                        <p className="text-[16px] leading-[1.65] md:text-[17px]" style={{ color: colors.ink }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[20px] border aspect-[16/10]" style={{ borderColor: colors.border, backgroundColor: colors.soft }}>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(34,34,34,0.06) 0%, rgba(34,34,34,0.02) 26%, rgba(34,34,34,0.12) 100%), linear-gradient(135deg, #cfcfcf 0%, #e8e8e8 48%, #d9d9d9 100%)',
                    }}
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-[12px] tracking-[-0.01em]" style={{ color: colors.inverseText, background: 'linear-gradient(180deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0) 100%)' }}>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.28)', backgroundColor: 'rgba(255,255,255,0.16)' }} />
                      <span>Homes in darkness: Northeast side residents fight for repairs</span>
                    </div>
                    <span className="hidden md:inline">Press clip</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full shadow-[0_14px_30px_rgba(68,122,203,0.28)]" style={{ backgroundColor: colors.accent }}>
                      <div
                        className="ml-1 h-0 w-0"
                        style={{
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderLeft: '20px solid #FFFFFF',
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-[14px] border px-4 py-3 md:px-5" style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(255,255,255,0.88)' }}>
                    <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: colors.accent }}>
                      Problem visibility
                    </div>
                    <div className="mt-2 text-[18px] leading-[1.2] tracking-[-0.02em] md:text-[22px]" style={{ color: colors.ink, fontWeight: 360 }}>
                      Street light concerns became a public service issue.
                    </div>
                  </div>
                </div>
              </div>
              </Card>
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Content Modal 02
              </div>
              <Card className="p-6 md:p-8 xl:p-10">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:gap-12">
                <div className="relative overflow-hidden rounded-[20px] border aspect-[16/10]" style={{ borderColor: colors.border, backgroundColor: colors.soft }}>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(34,34,34,0.08) 0%, rgba(34,34,34,0.02) 24%, rgba(34,34,34,0.14) 100%), linear-gradient(135deg, #d3d3d3 0%, #ececec 46%, #d7d7d7 100%)',
                    }}
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-[12px] tracking-[-0.01em]" style={{ color: colors.inverseText, background: 'linear-gradient(180deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0) 100%)' }}>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.28)', backgroundColor: 'rgba(255,255,255,0.16)' }} />
                      <span>Operator walkthrough: turning response chaos into a shared plan</span>
                    </div>
                    <span className="hidden md:inline">Video summary</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full shadow-[0_14px_30px_rgba(68,122,203,0.28)]" style={{ backgroundColor: colors.accent }}>
                      <div
                        className="ml-1 h-0 w-0"
                        style={{
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderLeft: '20px solid #FFFFFF',
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-[14px] border px-4 py-3 md:px-5" style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(255,255,255,0.88)' }}>
                    <div className="text-[11px] uppercase tracking-[0.14em]" style={{ color: colors.accent }}>
                      Internal alignment
                    </div>
                    <div className="mt-2 text-[18px] leading-[1.2] tracking-[-0.02em] md:text-[22px]" style={{ color: colors.ink, fontWeight: 360 }}>
                      A shared narrative made ownership and next steps visible.
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em]" style={{ color: colors.accent }}>
                    Operator recap · Internal use
                  </div>
                  <h3
                    className="mt-4 max-w-[36rem] text-[18px] leading-[1.18] tracking-[-0.004em] md:text-[21px] xl:text-[24px]"
                    style={{ color: colors.ink, fontWeight: 400 }}
                  >
                    Short-form video helped teams align on the problem faster and gave leadership one clear version of the story.
                  </h3>
                  <div className="mt-6 space-y-5">
                    {[
                      'The recap gave product, engineering, and operations a shared picture of the issue.',
                      'It reduced repeated explanation overhead and made the key tradeoffs easier to discuss.',
                      'A simple media block works well when the content needs both narrative framing and visual proof.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: colors.accent }} />
                        <p className="text-[16px] leading-[1.65] md:text-[17px]" style={{ color: colors.ink }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </Card>
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Content Modal 3
              </div>
              <ContentModalThree
                steps={[
                  {
                    title: 'Create a project',
                    summary: 'Start with a clear project shell, define the core work, and give the team one visible place to begin.',
                  },
                  {
                    title: 'Assign related people',
                    summary: 'Connect owners, collaborators, and adjacent stakeholders so the project reflects the real operating team.',
                  },
                  {
                    title: 'Make it done on-time',
                    summary: 'Keep planning, review, and status movement in one rhythm so timelines stay visible and work lands cleanly.',
                  },
                ]}
              />
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Press & accolades modal
              </div>
              <PressAndAccoladesModal
                eyebrow="Experiences"
                title={`Explore My Design
Journey`}
                summary="Over the past 4+ years, I've had the opportunity to work on a wide range of design projects, collaborating with diverse teams and clients to bring creative visions to life."
                ctaLabel="Book a Call"
                ctaHref="/contact"
                items={[
                  {
                    title: 'Creative Minds, New York, USA',
                    date: 'February 2022 - Present',
                    summary: 'Innovated designs, New York, Senior Product Designer',
                    tags: ['UIUX', 'Branding'],
                  },
                  {
                    title: 'Innovative Designs Inc, USA',
                    date: 'January 2020 - February 2022',
                    summary: "Led UX/UI, San Francisco . Crafting tomorrow's experiences",
                    tags: ['UIUX', 'Branding'],
                  },
                  {
                    title: 'Visionary Creations Ltd, UK',
                    date: 'February 2022 - Present',
                    summary: "Principal Designer, Berlin, Crafting tomorrow's experiences",
                    tags: ['Branding', 'UIUX'],
                  },
                ]}
              />
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Trust / Social Proof 01
              </div>
              <Card className="p-8 md:p-10 xl:p-14">
                <div className="mx-auto max-w-[56rem] text-center">
                  <h3
                    className="text-[28px] md:text-[36px] xl:text-[44px] leading-[1.1] tracking-[-0.012em]"
                    style={{ color: colors.ink, fontWeight: 400 }}
                  >
                    Trusted by teams shipping real product work.
                  </h3>
                  <p className="mx-auto mt-5 max-w-[38rem] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: colors.muted }}>
                    I&apos;ve led digital transformations across eCommerce, media, and global products where clarity, speed, and delivery discipline matter.
                  </p>
                </div>

                <div className="mx-auto mt-12 max-w-[76rem] pt-2 md:mt-14">
                  <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 md:grid-cols-3 xl:grid-cols-6">
                    {[
                      '/company-logos/clients/bcg-logo.png',
                      '/company-logos/clients/cps-logo.png',
                      '/company-logos/clients/dtv-logo.png',
                      '/company-logos/clients/disney-logo.png',
                      '/company-logos/clients/publicis-logo-tall.png',
                      '/company-logos/clients/shopify-logo-v2.png',
                    ].map((src, index) => (
                      <div key={src} className="flex h-20 items-center justify-center md:h-24">
                        <img
                          alt={`Client logo ${index + 1}`}
                          className="block max-h-full max-w-[210px] object-contain"
                          src={src}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Trust / Social Proof 02
              </div>
              <Card className="p-8 md:p-10 xl:p-14">
                <div className="mx-auto max-w-[54rem] text-center">
                  <div className="text-[12px] uppercase tracking-[0.14em]" style={{ color: colors.accent }}>Press & Awards</div>
                  <h3
                    className="mt-5 text-[28px] md:text-[36px] xl:text-[44px] leading-[1.1] tracking-[-0.012em]"
                    style={{ color: colors.ink, fontWeight: 400 }}
                  >
                    Award-Winning Work
                  </h3>
                  <p className="mx-auto mt-5 max-w-[42rem] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: colors.muted }}>
                    My work has been featured by leading publications and recognized through awards tied to commerce, product innovation, and digital execution.
                  </p>
                </div>

                <div className="mx-auto mt-12 max-w-[68rem] md:mt-14">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2 md:grid-cols-4 md:gap-x-4 md:gap-y-3">
                    {pressAwardsLogos.map((logo) => (
                      <div
                        key={logo.src}
                        className="flex h-[78px] items-center justify-center px-1 py-1 md:h-[88px] md:px-2"
                      >
                        {logo.alt === 'Smart 20 Awards logo' ? (
                          <div className="flex items-center justify-center">
                            <img
                              alt={logo.alt}
                              className="block max-h-[62px] max-w-full object-contain md:max-h-[72px]"
                              src={logo.src}
                            />
                          </div>
                        ) : (
                          <img
                            alt={logo.alt}
                            className="block max-h-[44px] max-w-full object-contain md:max-h-[52px]"
                            src={logo.src}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="design-system-case-study-designs" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel
            title="Case Study Designs"
            subtitle="Case-study-specific storytelling patterns for hero, challenge, ownership, solution, and impact."
            meta="These are not generic content modals. Use them when a page needs a full case-study narrative with section-level navigation, structured proof, and longer-form operating context."
          />
          <div className="grid gap-6">
            <CaseStudyDesignsShowcase />
          </div>
        </section>

        <section id="design-system-pull-quotes" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Pull Quotes" subtitle="Testimonial and pull-quote patterns that stay editorial, quiet, and brand-consistent." meta="These should feel like calm proof moments, not loud marketing sliders. Favor clean typography, subtle structure, and restrained accent use." />
          <div className="grid gap-6">
            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Pull Quote 01
              </div>
              <Card className="overflow-hidden p-6 md:p-8 xl:p-10">
                <div className="relative">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 text-center text-[132px] leading-none md:text-[176px] xl:text-[220px]"
                    style={{ color: colors.subtle, fontFamily: 'Aeonik Trial', fontWeight: 360 }}
                  >
                    “
                  </div>
                  <div className="relative mx-auto max-w-[62rem] pt-10 text-center md:pt-12 xl:pt-14">
                    <div className="text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.accent }}>Operator feedback</div>
                    <blockquote className="mt-6 text-[28px] leading-[1.28] tracking-[-0.03em] md:text-[40px] xl:text-[52px]" style={{ color: colors.ink, fontWeight: 360 }}>
                      “The structure finally gave our team one calm place to make decisions, instead of re-litigating the same problems every sprint.”
                    </blockquote>
                    <div className="mx-auto mt-7 h-px w-full max-w-[34rem]" style={{ backgroundColor: colors.border }} />
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full text-[16px]" style={{ backgroundColor: colors.soft, color: colors.ink }}>
                        JM
                      </div>
                      <div className="text-left">
                        <div className="text-[20px] tracking-[-0.02em]" style={{ color: colors.ink }}>Jordan Mitchell</div>
                        <div className="mt-1 text-[14px]" style={{ color: colors.muted }}>VP Product, Enterprise SaaS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Pull Quote 02
              </div>
              <Card className="overflow-hidden">
                <div
                  className="relative px-6 py-8 md:px-10 md:py-10 xl:px-14 xl:py-12"
                  style={{
                    background:
                      'radial-gradient(circle at top center, rgba(68,122,203,0.12) 0%, rgba(68,122,203,0.05) 24%, rgba(248,248,248,1) 62%)',
                  }}
                >
                  <div className="relative mx-auto max-w-[64rem] text-center">
                    <div className={t.type.eyebrow} style={{ color: colors.accent }}>Client perspective</div>
                    <blockquote className={`relative mx-auto mt-6 max-w-[38rem] ${t.type.h5}`} style={{ color: colors.ink }}>
                      “You made a messy operating picture feel obvious. Everyone could see the tradeoffs, and we moved faster because of it.”
                    </blockquote>
                    <div className="mx-auto mt-6 h-px w-full max-w-[14rem]" style={{ backgroundColor: colors.border }} />
                    <div className="mt-4 flex flex-col items-center">
                      <div className={t.type.h6} style={{ color: colors.ink }}>Avery Ross</div>
                      <div className={`${t.type.small} mt-1`} style={{ color: colors.muted }}>Director of Commerce</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <div className="mb-3 text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>
                Pull Quote 03
              </div>
              <div className="grid gap-6 xl:grid-cols-12">
                <Card className="xl:col-span-12 p-6 md:p-8 xl:p-10">
                  <div className="text-[12px] uppercase tracking-[0.12em]" style={{ color: colors.muted }}>Three-up proof row</div>
                  <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
                    {[
                      ['Amazon', '“The system reduced back-and-forth and made launch decisions much easier.”', 'Ilya Vasin', 'Software Engineer'],
                      ['Google', '“It gave the work more clarity and made stakeholder reviews dramatically cleaner.”', 'Mariano Rasg', 'Product Designer'],
                      ['Amazon', '“The page architecture made the whole product feel more premium without slowing us down.”', 'Oka Tomoaki', 'Software Engineer'],
                    ].map(([company, quote, name, role], index) => (
                      <div key={`${company}-${name}`} className={`${index > 0 ? 'md:border-l md:pl-6' : ''} flex flex-col items-center text-center`} style={{ borderColor: colors.border }}>
                        <div className="flex justify-center">
                          <div
                            className="h-8 w-24 rounded-[8px]"
                            style={{ backgroundColor: colors.subtle, border: `1px solid ${colors.border}` }}
                          />
                        </div>
                        <blockquote className="mt-6 max-w-[18rem] text-[22px] leading-[1.32] tracking-[-0.025em]" style={{ color: colors.ink, fontWeight: 360 }}>
                          {quote}
                        </blockquote>
                        <div className="mt-8 flex flex-col items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full text-[13px]" style={{ backgroundColor: colors.soft, color: colors.ink }}>
                            {name.split(' ').map((part) => part[0]).join('')}
                          </div>
                          <div className="text-center">
                            <div className="text-[16px] tracking-[-0.015em]" style={{ color: colors.ink }}>{name}</div>
                            <div className="mt-1 text-[13px]" style={{ color: colors.muted }}>{role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="design-system-iconography" className="scroll-mt-40 py-14 md:py-20 xl:py-24">
          <SectionLabel title="Iconography" subtitle="Simple line icons with restrained usage." meta="Icons should support scanning, not decorate empty space. Default style is 1.5–2px line icons in ink or muted; accent blue is only for active or emphasized states." />
          <div className="grid gap-6">
            <Card className="p-5 md:p-6 xl:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-[44rem]">
                  <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.accent }}>Full library</div>
                  <p className="mt-4 text-[16px] md:text-[17px] xl:text-[18px] leading-[1.6]" style={{ color: colors.muted }}>
                    The full icon browser now lives on its own page so we can inspect every glyph in every supported family without turning the main design-system page into a wall of symbols.
                  </p>
                </div>
                <a
                  href="/design-system/icons"
                  className="inline-flex h-12 items-center justify-center rounded-[12px] border px-5 text-[14px] md:text-[15px] tracking-[-0.01em] transition-colors duration-200 hover:bg-[#F8F8F8]"
                  style={{ borderColor: colors.border, color: colors.ink, backgroundColor: colors.bg }}
                >
                  Open Full Icon Library
                </a>
              </div>
            </Card>

            <Card className="p-5 md:p-6 xl:p-8">
              <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-4">
                {[
                  [Briefcase, 'Work'],
                  [Building2, 'Company'],
                  [PanelsTopLeft, 'System'],
                  [FileText, 'Resume'],
                  [Mail, 'Contact'],
                  [Download, 'Download'],
                  [Search, 'Search'],
                  [Filter, 'Filter'],
                  [Link2, 'Link'],
                  [Menu, 'Menu'],
                ].map(([Icon, label]) => (
                  <div key={label} className="rounded-[16px] border p-4 flex flex-col items-center justify-center gap-3" style={{ borderColor: colors.border }}>
                    <Icon className="h-5 w-5" style={{ color: colors.ink }} />
                    <span className="text-[13px]" style={{ color: colors.muted }}>{label}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {iconLibraryFamilies.map((family) => (
                <Card key={family.name} className="p-5 md:p-6 xl:p-7">
                  <div className="text-[13px] uppercase tracking-[0.08em]" style={{ color: colors.accent }}>
                    {family.name}
                  </div>
                  <p className="mt-4 text-[15px] md:text-[16px] leading-[1.45]" style={{ color: colors.ink }}>
                    {family.style}
                  </p>
                  <p className="mt-2 text-[14px] md:text-[15px] leading-[1.5]" style={{ color: colors.muted }}>
                    {family.use}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {family.icons.map(([Icon, label]) => (
                      <div
                        key={`${family.name}-${label}`}
                        className="rounded-[14px] border p-4 flex flex-col items-center justify-center gap-3"
                        style={{ borderColor: colors.border, backgroundColor: colors.soft }}
                      >
                        <Icon size={22} style={{ color: colors.ink }} />
                        <span className="text-[12px] leading-none" style={{ color: colors.muted }}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
