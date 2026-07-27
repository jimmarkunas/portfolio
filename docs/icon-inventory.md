# Icon Inventory

Audit date: 2026-07-15

## Summary

- 23 reusable custom non-logo icon components
- 1 reusable non-logo SVG graphic
- 26 generic non-logo assets under `public/tool-icons`
- 46 distinct Lucide icons currently imported
- 88 excluded logo assets under `public/tool-icons`

## Best Reuse Candidates For Current Case-Study Work

- `ArrowUpRightIcon` from `src/components/icons/ui-icons.tsx` for outbound CTA arrows and external-link affordances
- `ExternalLinkMiniIcon` from `src/components/icons/ui-icons.tsx` for tiny inline outbound-link badges
- `BreadcrumbHomeIcon` from `src/components/case-study/template/CaseStudyTemplateIcons.tsx` for breadcrumbs and home links
- `ProofPointArrowIcon` from `src/components/case-study/template/CaseStudyTemplateIcons.tsx` for proof points, bullets, and callout arrows
- `UserExperienceIcon` from `src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx` for generic UX-layer badges
- `public/tool-icons/svg/icon-code.svg`, `icon-gantt.svg`, `icon-network.svg`, `icon-stats.svg`, `icon-shopping-bag.svg`, and `icon-web.svg` for generic diagram labels and capability badges

## Reusable Custom Non-Logo Icon Components

| File | Export(s) | Notes |
| --- | --- | --- |
| `src/components/icons/ui-icons.tsx` | `ArrowUpRightIcon`, `ExternalLinkMiniIcon`, `ChevronDownIcon`, `StarIcon` | Shared UI icon set used across the site |
| `src/components/homepage/icons.tsx` | `ShapeThreeIcon`, `ShapeEightIcon`, `ShapeSevenIcon`, `ShapeFourIcon`, `GanttIcon`, `NetworkIcon`, `CodeIcon`, `StatsIcon` | Decorative shapes plus wrappers around generic tool glyph assets |
| `src/components/case-study/template/CaseStudyTemplateIcons.tsx` | `BreadcrumbHomeIcon`, `ProofPointArrowIcon` | Shared case-study template icon set |
| `src/components/case-study/DiagramGlyph.tsx` | `DiagramGlyph` | Runtime glyph renderer for `database`, `monitor`, `devices`, and `api-arrows` |
| `src/components/case-study/bi-commerce-icons.tsx` | `ProductsIcon`, `InventoryIcon`, `DatabaseIcon`, `ContentIcon`, `CampaignIcon`, `LaptopIcon` | BI diagram icon set |
| `src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx` | `UserExperienceIcon` | Shared badge-style UX icon |
| `src/components/work/portfolio-founder/PortfolioImageCard.tsx` | `PortfolioHoverIcon` | Local hover arrow icon used by portfolio cards |

## Other Reusable Non-Logo SVG Graphic

| File | Export | Notes |
| --- | --- | --- |
| `src/components/case-study/template/CaseStudyTemplateIcons.tsx` | `HeroSwooshBackdrop` | Decorative backdrop SVG, not a functional icon |

## Generic Non-Logo Assets Under `public/tool-icons`

| Asset path | Notes |
| --- | --- |
| `svg/icon-api.svg` | Generic API / integration glyph |
| `svg/icon-chart.svg` | Generic chart glyph |
| `svg/icon-code.svg` | Generic code glyph; wrapped by `CodeIcon` |
| `svg/icon-computer.svg` | Generic desktop glyph |
| `svg/icon-coupon.svg` | Generic coupon / promotions glyph |
| `svg/icon-credit-card.svg` | Generic checkout / payment glyph |
| `svg/icon-dashboard.svg` | Generic dashboard glyph |
| `svg/icon-database.svg` | Generic database glyph |
| `svg/icon-email.svg` | Generic email glyph |
| `svg/icon-gantt.svg` | Generic Gantt glyph; wrapped by `GanttIcon` |
| `svg/icon-headphones.svg` | Generic media / support glyph |
| `svg/icon-laptop.svg` | Generic laptop glyph; overlaps with `LaptopIcon` |
| `svg/icon-mobile.svg` | Generic mobile glyph |
| `svg/icon-network.svg` | Generic network glyph; wrapped by `NetworkIcon` |
| `svg/icon-pie-chart.svg` | Generic analytics glyph |
| `svg/icon-shipping.svg` | Generic shipping / fulfillment glyph |
| `svg/icon-shopping-bag.svg` | Generic commerce glyph; overlaps with `ShoppingBag` |
| `svg/icon-slider.svg` | Generic merchandising / slider glyph |
| `svg/icon-stats.svg` | Generic stats glyph; wrapped by `StatsIcon` |
| `svg/icon-system.svg` | Generic system glyph |
| `svg/icon-tablet.svg` | Generic tablet glyph |
| `svg/icon-ugc.svg` | Generic user-generated-content glyph |
| `svg/icon-user-blk.svg` | Black user glyph variant |
| `svg/icon-user.svg` | Generic user glyph |
| `svg/icon-web.svg` | Generic web glyph |
| `svg/iscon-user-02.svg` | Alternate generic user glyph |

Notable consumers:

- `src/components/homepage/icons.tsx` wraps `icon-gantt.svg`, `icon-network.svg`, `icon-code.svg`, and `icon-stats.svg`
- `src/components/case-study/diagram-config/scj-architecture.config.ts` maps many of the generic glyphs above directly into the SCJ architecture diagram
- `src/components/case-study/diagram-shared/BiDiagramCards.tsx` consumes `icon-tablet.svg` and `icon-mobile.svg` directly as generic device badges

## Distinct Lucide Icons Currently Imported

`LucideIcon` type-only imports were not counted.

| Lucide icon | Import sites |
| --- | --- |
| `AlertTriangle` | `src/app/llmday2026/components/slides/workflow-slides.tsx` |
| `ArrowDown` | `src/app/dshhacks2026/components/slides/discovery-slides.tsx` |
| `ArrowLeftRight` | `src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx` |
| `ArrowRight` | `src/app/dshhacks2026/components/slides/discovery-slides.tsx`, `src/app/geekle2026/components/slides/geekle-slide-primitives.tsx`, `src/app/interviews/components/slides/SlideThankYou.tsx`, `src/components/case-study/modere-simulation/modere.views.tsx` |
| `ArrowRightCircle` | `src/app/dshhacks2026/components/slides/discovery-slides.tsx` |
| `ArrowUpRight` | `src/app/(site)/freebies/page.tsx`, `src/app/reference/design-system/page.tsx` |
| `BadgeDollarSign` | `src/components/case-study/BoehringerDataSilosDiagram.tsx` |
| `BarChart3` | `src/app/llmday2026/components/slides/case-study-slides.tsx`, `src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx` |
| `Bot` | `src/app/llmday2026/components/slides/case-study-slides.tsx` |
| `Building2` | `src/components/case-study/NylRbacWorkflow.tsx` |
| `Check` | `src/app/dshhacks2026/components/slides/closing-slides.tsx`, `src/app/dshhacks2026/components/slides/discovery-slides.tsx` |
| `CheckCircle2` | `src/app/interviews/components/slides/Slide8StatusReport.tsx`, `src/app/llmday2026/components/slides/workflow-slides.tsx`, `src/components/case-study/modere-simulation/modere.detail-views.tsx` |
| `ChevronLeft` | `src/app/geekle2026/components/GeeklePresentationControls.tsx`, `src/app/interviews/InterviewsApp.tsx`, `src/components/case-study/NylEditorialCarousel.tsx`, `src/components/homepage/sections/RotatingPullQuote.tsx`, `src/components/presentation/PresentationDeck.tsx` |
| `ChevronRight` | `src/app/geekle2026/components/GeeklePresentationControls.tsx`, `src/app/interviews/InterviewsApp.tsx`, `src/app/interviews/components/slides/SlideGreatestPm.tsx`, `src/components/case-study/NylEditorialCarousel.tsx`, `src/components/homepage/sections/RotatingPullQuote.tsx`, `src/components/presentation/PresentationDeck.tsx` |
| `Clock` | `src/app/interviews/components/slides/Slide8StatusReport.tsx` |
| `Cpu` | `src/app/dshhacks2026/components/slides/discovery-slides.tsx`, `src/app/interviews/components/slides/Slide8ComposableStack.tsx`, `src/app/interviews/components/slides/SlideWhyJim.tsx`, `src/app/llmday2026/components/slides/case-study-slides.tsx` |
| `Database` | `src/app/interviews/components/slides/Slide8ComposableStack.tsx`, `src/app/llmday2026/components/slides/case-study-slides.tsx`, `src/components/case-study/BoehringerDataSilosDiagram.tsx` |
| `Download` | `src/app/(site)/freebies/FreebiesDownloadButton.tsx` |
| `FileBarChart` | `src/components/case-study/BoehringerDataSilosDiagram.tsx` |
| `FileText` | `src/app/llmday2026/components/slides/case-study-slides.tsx` |
| `Globe` | `src/app/interviews/components/slides/SlideWhyJim.tsx`, `src/components/case-study/BoehringerDataSilosDiagram.tsx`, `src/components/case-study/NylVelocityChart.tsx` |
| `HelpCircle` | `src/app/dshhacks2026/components/slides/discovery-slides.tsx` |
| `Layers` | `src/app/interviews/components/slides/Slide8ComposableStack.tsx` |
| `LayoutGrid` | `src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx` |
| `Lightbulb` | `src/app/dshhacks2026/components/slides/discovery-slides.tsx` |
| `Linkedin` | `src/app/interviews/components/slides/SlideThankYou.tsx` |
| `Mail` | `src/app/interviews/components/slides/SlideThankYou.tsx` |
| `Maximize` | `src/app/geekle2026/components/GeeklePresentationControls.tsx`, `src/app/interviews/InterviewsApp.tsx`, `src/components/presentation/PresentationDeck.tsx` |
| `Menu` | `src/components/SiteHeader.tsx` |
| `Minimize` | `src/app/geekle2026/components/GeeklePresentationControls.tsx`, `src/app/interviews/InterviewsApp.tsx`, `src/components/presentation/PresentationDeck.tsx` |
| `MousePointerClick` | `src/app/llmday2026/components/slides/case-study-slides.tsx` |
| `RefreshCcw` | `src/components/case-study/modere-simulation/modere.views.tsx` |
| `Server` | `src/app/interviews/components/slides/Slide8ComposableStack.tsx` |
| `Shield` | `src/app/interviews/components/slides/SlideWhyJim.tsx` |
| `ShieldAlert` | `src/components/case-study/modere-simulation/modere.detail-views.tsx` |
| `ShieldCheck` | `src/app/llmday2026/components/slides/case-study-slides.tsx` |
| `Shirt` | `src/components/homepage/sections/HomepageTestimonialsSection.tsx` |
| `ShoppingBag` | `src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx` |
| `Sparkles` | `src/app/reference/design-system/page.tsx` |
| `Target` | `src/app/interviews/components/slides/SlideWhyJim.tsx`, `src/app/llmday2026/components/slides/workflow-slides.tsx` |
| `User` | `src/app/dshhacks2026/components/slides/discovery-slides.tsx`, `src/app/llmday2026/components/slides/case-study-slides.tsx` |
| `UserCheck` | `src/components/case-study/NylRbacWorkflow.tsx` |
| `Users` | `src/app/interviews/components/slides/SlideWhyJim.tsx`, `src/components/case-study/NylRbacWorkflow.tsx` |
| `X` | `src/app/dshhacks2026/components/slides/closing-slides.tsx`, `src/app/dshhacks2026/components/slides/discovery-slides.tsx`, `src/components/SiteHeader.tsx` |
| `XCircle` | `src/app/llmday2026/components/slides/workflow-slides.tsx` |
| `Zap` | `src/app/interviews/components/slides/SlideWhyJim.tsx`, `src/app/llmday2026/components/slides/case-study-slides.tsx` |

## Duplicate Or Visually Equivalent Icons

| Cluster | Why it overlaps | Best reuse rule |
| --- | --- | --- |
| `ArrowUpRightIcon`, `ExternalLinkMiniIcon`, `PortfolioHoverIcon`, `ArrowUpRight` | All communicate outbound navigation or a linked CTA arrow | Reuse the existing custom icon first, then Lucide only when the smaller or outlined treatment is a better fit |
| `ChevronDownIcon`, `ChevronDown` | Same chevron-down affordance | Prefer the shared custom icon if you need the portfolio-specific tone; otherwise Lucide is a direct match |
| `StarIcon`, `Star` | Same filled star glyph | Reuse the shared custom icon when matching the current portfolio styling |
| `BreadcrumbHomeIcon`, `House`-style home icons | Same breadcrumb/home concept | Reuse the existing breadcrumb icon before drawing a new home glyph |
| `ProofPointArrowIcon`, `ArrowRight` | Same proof-point / bullet arrow concept | Reuse the proof-point arrow when the arrow is used as a text cue |
| `UserExperienceIcon`, `ShoppingBag`, `public/tool-icons/svg/icon-shopping-bag.svg` | Same commerce/experience badge concept | Prefer the shared badge when the use case is UI chrome rather than a brand logo |
| `GanttIcon`, `NetworkIcon`, `CodeIcon`, `StatsIcon` and `public/tool-icons/svg/icon-gantt.svg`, `icon-network.svg`, `icon-code.svg`, `icon-stats.svg` | The components are thin wrappers around the generic assets | Reuse the wrapper or the asset, but do not redraw them inline |
| `public/tool-icons/svg/icon-user.svg`, `icon-user-blk.svg`, `iscon-user-02.svg` | Multiple user silhouettes with very similar semantics | Reuse the closest existing user glyph instead of adding another user icon |
| `DiagramGlyph` database/monitor/devices shapes and `public/tool-icons/svg/icon-database.svg`, `icon-computer.svg`, `icon-mobile.svg` | Same diagram concepts in two rendering styles | Use the diagram glyph when a line-art connector style is needed; use the asset glyph when you want the shared tool-icon language |

## Excluded Logo Inventory

### Logo Components And Wrappers

| File | Export(s) | Notes |
| --- | --- | --- |
| `src/components/homepage/icons.tsx` | `ZentroxLogo`, `PixeloraLogo`, `LoopinexLogo`, `VayloStudioLogo`, `HexonifyLogo` | Company logos, not generic icons |
| `src/components/case-study/DiagramIcon.tsx` | `BCIcon`, `StripeIcon`, `EpicorIcon`, `WordpressIcon`, `RasterIcon` | Brand/logo renderers, including raster logo fallbacks |
| `src/components/case-study/muradDiagramIcons.tsx` | `BC_LOGO_DESKTOP`, `BC_LOGO_MOBILE`, `ORACLE_LOGO_DESKTOP`, `ORACLE_LOGO_MOBILE`, `SENDGRID_LOGO_DESKTOP`, `SENDGRID_LOGO_MOBILE`, `ADOBE_LOGO_DESKTOP`, `ADOBE_LOGO_MOBILE`, `CONTENTFUL_LOGO_DESKTOP`, `CONTENTFUL_LOGO_MOBILE`, plus the `*_INTEGRATIONS` logo constants | Company and product logo compositions only |
| `src/components/case-study/diagram-shared/SCJDiagramPrimitives.tsx` | `BrandIcon`, `BrandMark` | Brand-logo wrappers used by the SCJ diagrams |
| `src/components/SiteFooter.tsx` | `SocialIcon` | Wrapper for social logos pulled from `footerSocialLinks` |
| `src/components/FinoxGlyph.tsx` | `FinoxGlyph` | Site mark / wordmark logo, not a generic icon |

### `public/tool-icons` Logo Assets

#### Root-level logo files

```text
adobe-logo.png
adobe-xd.svg
adobexm-logo.png
after-effects.svg
amazon-aws-logo.png
amazon-firetv-logo.png
apple-appstore-logo.png
apple-logo.png
apple-tv-logo.png
asana-logo.png
avalara-logo.png
bc-logo.png
calendly-logo.png
contentful-logo.png
contentstack-logo.png
domo-logo.png
dtv-icon-logo.png
dtv-logo.png
epicore-logo.png
figma.svg
google-cloud-logo.png
google-mb-logo.png
google-play-logo.png
google-shopping-logo.png
hamari-logo.png
illustrator.svg
jira-logo.png
klaviyo-logo.png
mobiloud-logo.png
msazure-logo.png
msdynamics-logo.png
mulesoft-logo.png
opeanai-logo.png
oracle-logo.png
oracle-ns-logo.png
ordergroove-logo.png
paypal-logo.png
photoshop.svg
pimcore-logo.png
quivers-logo.png
salesforce-logo.png
salsify-logo.png
sap-logo.png
sendgrid-logo.png
shogun-logo.png
shopify-logo.png
smartsheet-logo.png
snowflake-logo.png
square-logo.png
stripe-logo.png
wordpress-logo.png
yotpo-logo.png
```

#### SVG logo files

```text
svg/adobe-experience-manager-logo.svg
svg/adobe-logo.svg
svg/atlassian-logo.svg
svg/avalara-logo.svg
svg/azure-logo.svg
svg/bc-logo-blk.svg
svg/bc-logo-icon.svg
svg/bc-logo.svg
svg/contentful-logo.svg
svg/contentstack-logo.svg
svg/cps-energy-logo.svg
svg/domo-logo.svg
svg/epicor-logo.svg
svg/figma-logo.svg
svg/google-my-business-logo.svg
svg/infor-logo.svg
svg/k2-sports-logo.png
svg/klaviyo-logo.svg
svg/merkle-logo.svg
svg/msdynamics-logo.svg
svg/mulesoft-logo.svg
svg/oracle-logo.svg
svg/ordergroove-logo.svg
svg/pimcore-logo.svg
svg/quivers-logo.svg
svg/salesforce-logo.svg
svg/salsify-logo.svg
svg/sap-logo.svg
svg/sendgrid-logo.svg
svg/shogun-logo.svg
svg/shopify-logo.svg
svg/smartsheet-logo.svg
svg/square-logo.svg
svg/stripe-logo.svg
svg/wordpress-logo.svg
svg/yotpo-logo.svg
```

#### Notes

- `src/components/case-study/diagram-config/scj-architecture.config.ts` uses several of these logo files as system-brand markers, including `ordergroove-logo.svg`, `sap-logo.svg`, `merkle-logo.svg`, `salsify-logo.svg`, `klaviyo-logo.svg`, and `shogun-logo.svg`
- `public/tool-icons/svg/bc-logo-icon.svg` is a logo asset even though it is used as a generic-looking badge in the SCJ diagram chrome
- `public/tool-icons/dtv-icon-logo.png`, `dtv-logo.png`, and `bc-logo.png` are brand marks, not generic icons
