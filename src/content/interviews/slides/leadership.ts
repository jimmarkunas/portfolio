import type { InterviewsContent } from "@/content/interviews/types";

export const leadershipSlides = {
    whyJim: {
      id: "slide-why-jim",
      title: "Why Jim Markunas?",
      subtitle: "The right partner for your most complex programs.",
      points: [
        { id: "why-jim-rescuer", icon: "Shield", title: "Program Rescuer", desc: "I inherit broken programs and ship them." },
        { id: "why-jim-depth", icon: "Cpu", title: "Technical Depth", desc: "I speak the language of engineering and architecture." },
        { id: "why-jim-outcome", icon: "Target", title: "Outcome Focused", desc: "I prioritize business value over process for process sake." },
        { id: "why-jim-team", icon: "Users", title: "Team Leader", desc: "I build high-performing, psychologically safe teams." },
        { id: "why-jim-efficiency", icon: "Zap", title: "Efficiency Expert", desc: "I automate the mundane to focus on the strategic." },
        { id: "why-jim-global", icon: "Globe", title: "Global Scale", desc: "I've managed multi-region rollouts for the world's biggest brands." },
      ],
    },
    rescuePlan: {
      id: "slide-rescue-plan",
      title: "The 30-Day Rescue Plan",
      subtitle: "My blueprint for turning around inherited programs.",
      carouselPhases: [
        { id: "rescue-audit", title: "Audit", desc: "Technical and process audit." },
        { id: "rescue-align", title: "Align", desc: "Stakeholder and team alignment." },
        { id: "rescue-prioritize", title: "Prioritize", desc: "Backlog grooming and RACI." },
        { id: "rescue-execute", title: "Execute", desc: "First sprint of the new era." },
      ],
      weeks: [
        {
          id: "rescue-week-1-2",
          title: "Week 1-2: Diagnosis",
          points: [
            "Identify technical blockers",
            "Interview key stakeholders",
            "Audit the Jira backlog",
          ],
        },
        {
          id: "rescue-week-3-4",
          title: "Week 3-4: Stabilization",
          points: [
            "Establish clear definition of done",
            "Implement daily standup rigor",
            "Publish the revised roadmap",
          ],
        },
      ],
    },
    thankYou: {
      id: "slide-thank-you",
      title: "Thank You",
      subtitle: "Let's build something great together.",
      name: "Jim Markunas",
      role: "Senior Technical Project Manager",
      email: "jim@greatestpmever.com",
      linkedin: "linkedin.com/in/jimmarkunas",
      readyText: "Ready for Questions",
    },
} satisfies Pick<InterviewsContent["slides"], "whyJim" | "rescuePlan" | "thankYou">;
