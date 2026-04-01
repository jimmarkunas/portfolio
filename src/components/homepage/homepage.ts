const fallbackHomepageText = {
  hero: {
    role: "Program Leader",
    year: "2008",
    title: "Hello",
    subtitle: "— I'm An Award-Winning PM",
    scroll: "Scroll down ↓",
    projectCompletedValue: "45",
    projectCompletedLabel: "Projects Led",
    startupRaisedValue: "100M",
    startupRaisedLabel: "Budgets Managed",
  },
  sections: {
    experiencesPill: "Experiences",
    experiencesTitle: "Why you will work with me",
    experiencesDescription:
      "Every design decision I make is backed by strategy, research, and a commitment to delivering real value. I turn complex challenges into clean, delightful user experiences",
    awardsPill: "Experiences",
    awardsTitle: "My Achievements & Awards",
    awardsDescription:
      "Over the years, my love for creative problem-solving has evolved into a career dedicated to crafting intuitive and impactful digital experiences.",
    clientsPill: "Our Clients",
    clientsTitle: "Some of our Best Customers",
    highlightsPill: "Highlights projects",
    highlightsTitle: "Case Studies & Project Highlights",
    highlightsDescription:
      "Explore detailed case studies and highlights of recent projects. Learn about the challenges faced, the design solutions implemented, and the outcomes achieved.",
    highlightsCta: "See More",
    sortByLabel: "Sort by:",
    filterSheetTitle: "Filter projects",
    sortSheetTitle: "Sort projects",
    insightsPill: "Latest Insights",
    insightsTitle: "Latest Insights & Trends",
    insightsDescription:
      "Stay updated with the latest in UI/UX design, product design, and industry trends. Here, you'll find in-depth articles, case studies, and expert opinions that offer valuable insights and inspiration for your next project.",
  },
  stats: {
    clientsCount: "75+ Clients",
    clientsSubtext: "Around the world Clients",
    completedProjectsValue: "105+",
    completedProjectsLabel: "Completed projects for growing brands",
    retentionRateValue: "92%",
    retentionRateLabel: "Client retention rate over the past 3 years",
    ratingValue: "4.9",
    ratingOutOf: "/5",
    ratingSummary: "We've delivered 56+projects that help companies generate real results.",
  },
  testimonial: {
    quote:
      "I like their services and their professionalism and attention to details and commitment delivering hign - quality results truly exceeded all our team expectations and meet that on time.",
    initials: "TA",
    name: "Tawanna Afumba",
    handle: "intransigent_toejam_15",
  },
}

export type HomepageText = typeof fallbackHomepageText

type PartialHomepageText = {
  hero?: Partial<HomepageText["hero"]>
  sections?: Partial<HomepageText["sections"]>
  stats?: Partial<HomepageText["stats"]>
  testimonial?: Partial<HomepageText["testimonial"]>
}

// Edit copy here. This file is the single source for homepage text values.
export const homepageText: PartialHomepageText = { ...fallbackHomepageText }

export function getHomepageText(): HomepageText {
  return {
    hero: { ...fallbackHomepageText.hero, ...(homepageText.hero ?? {}) },
    sections: { ...fallbackHomepageText.sections, ...(homepageText.sections ?? {}) },
    stats: { ...fallbackHomepageText.stats, ...(homepageText.stats ?? {}) },
    testimonial: { ...fallbackHomepageText.testimonial, ...(homepageText.testimonial ?? {}) },
  }
}

export default getHomepageText
