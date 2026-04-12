import type { InterviewsContent } from "@/content/interviews";

export const PM_POP_QUIZ_SLIDE_ID = "slide-pm-pop-quiz";
export const PM_POP_QUIZ_TITLE = "PM Pop Quiz";
export const PM_POP_QUIZ_SUBTITLE =
  "Read the bullet points and guess the role. Click a card to reveal the answer.";

export interface InterviewSlideRegistryEntry {
  id: string;
  title: string;
}

export function buildInterviewSlideRegistry(
  slides: InterviewsContent["slides"],
): InterviewSlideRegistryEntry[] {
  return [
    { id: slides.who.id, title: slides.who.title },
    { id: slides.outcomes.id, title: slides.outcomes.title },
    { id: slides.services.id, title: slides.services.title },
    { id: slides.greatestPm.id, title: slides.greatestPm.title },
    { id: slides.hybridAgile.id, title: slides.hybridAgile.title },
    { id: slides.jiraTickets.id, title: slides.jiraTickets.title },
    { id: slides.riskLandscape.id, title: slides.riskLandscape.title },
    { id: slides.statusReport.id, title: slides.statusReport.title },
    { id: slides.composableStack.id, title: slides.composableStack.title },
    { id: slides.whyJim.id, title: slides.whyJim.title },
    { id: slides.rescuePlan.id, title: slides.rescuePlan.title },
    { id: slides.thankYou.id, title: slides.thankYou.title },
    { id: PM_POP_QUIZ_SLIDE_ID, title: PM_POP_QUIZ_TITLE },
  ];
}
