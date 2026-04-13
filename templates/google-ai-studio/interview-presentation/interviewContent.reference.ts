// Reference copy derived from src/content/interviews/index.ts
// This shows how the live interview presentation assembles typed content.

import { slides as leadershipCloseSlides } from "@/content/interviews/slides/leadership-close";
import { slides as legacyModernizationSlides } from "@/content/interviews/slides/legacy-modernization";
import { slides as productDeliverySlides } from "@/content/interviews/slides/product-delivery";
import type { InterviewsContent } from "@/content/interviews/types";

export * from "./types";

const buildSlideTitles = (slides: InterviewsContent["slides"]): string[] => [
  slides.who.title,
  slides.outcomes.title,
  slides.services.title,
  slides.greatestPm.title,
  slides.hybridAgile.title,
  slides.jiraTickets.title,
  slides.riskLandscape.title,
  slides.statusReport.title,
  slides.cover.title,
  slides.composableStack.title,
  slides.modere.title,
  slides.engineers.title,
  slides.goal.title,
  slides.tools.title,
  slides.preSetup.title,
  `${slides.buildPart1.titlePrefix}${slides.buildPart1.titleHighlight}`.trim(),
  `${slides.buildPart2.titlePrefix}${slides.buildPart2.titleHighlight}`.trim(),
  slides.finalize.title,
  slides.whyJim.title,
  slides.rescuePlan.title,
  slides.thankYou.title,
];

const slides: InterviewsContent["slides"] = {
  ...productDeliverySlides,
  ...legacyModernizationSlides,
  ...leadershipCloseSlides,
};

export const interviewContent = {
  brandLogo: {
    id: "ujcg-logo",
    src: "/panels/01-global/ujcg-logo-f3f3f3-65.svg",
    alt: "",
    width: 65,
    height: 65,
  },
  navigation: {
    previousAriaLabel: "Previous slide",
    nextAriaLabel: "Next slide",
    openTocAriaLabel: "Open slide table of contents",
    toggleFullscreenAriaLabel: "Toggle fullscreen",
    tocDialogAriaLabel: "Slide table of contents",
    tocTitle: "Slide Table of Contents",
    closeButtonLabel: "Close",
  },
  slideTitles: buildSlideTitles(slides),
  slides,
} satisfies InterviewsContent;
