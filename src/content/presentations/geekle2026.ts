export interface GeekleToolEntry {
  id: string;
  name: string;
  cost: string;
}

export interface GeekleStepEntry {
  id: string;
  text: string;
}

export interface GeekleFinalizeStepEntry {
  id: string;
  number: string;
  label: string;
  emphasized?: boolean;
}

export interface GeekleAudienceRingEntry {
  id: string;
  label: string;
  value: string;
}

export interface GeekleSlideRegistryEntry {
  id: string;
  title: string;
}

export interface Geekle2026Content {
  navigation: {
    previousAriaLabel: string;
    nextAriaLabel: string;
    toggleFullscreenAriaLabel: string;
  };
  slideRegistry: GeekleSlideRegistryEntry[];
  slides: {
    hero: {
      id: string;
      eyebrow: string;
      title: string;
      highlight: string;
      suffix: string;
      presenter: string;
      sponsor: string;
    };
    agenda: {
      id: string;
      title: string;
      summary: string;
      whyCareLabel: string;
      whyCareItems: string[];
    };
    modereGame: {
      id: string;
      title: string;
      caseStudyLabel: string;
      paragraphs: string[];
      goalLabel: string;
      goalText: string;
    };
    audienceContrast: {
      id: string;
      titleStart: string;
      titleMiddle: string;
      titleEnd: string;
      rings: GeekleAudienceRingEntry[];
    };
    goal: {
      id: string;
      title: string;
      line: string;
    };
    toolsNeeded: {
      id: string;
      title: string;
      tools: GeekleToolEntry[];
    };
    preSetup: {
      id: string;
      title: string;
      steps: GeekleStepEntry[];
    };
    buildPart1: {
      id: string;
      titlePrefix: string;
      titleHighlight: string;
      steps: GeekleStepEntry[];
    };
    buildPart2: {
      id: string;
      titlePrefix: string;
      titleHighlight: string;
      intro: string;
      steps: GeekleStepEntry[];
    };
    finalize: {
      id: string;
      title: string;
      steps: GeekleFinalizeStepEntry[];
      completionLabel: string;
    };
  };
}

export const geekle2026Content = {
  navigation: {
    previousAriaLabel: "Previous slide",
    nextAriaLabel: "Next slide",
    toggleFullscreenAriaLabel: "Toggle fullscreen",
  },
  slideRegistry: [
    { id: "slide-1", title: "Talk your client out of a bad decision" },
    { id: "slide-2", title: "What We’ll Cover in This Talk" },
    { id: "slide-3", title: "The Modere Game" },
    { id: "slide-4", title: "Engineers, Designers & Artists vs. Managers & Executives" },
    { id: "slide-5", title: "Goal" },
    { id: "slide-6", title: "Tools Needed" },
    { id: "slide-7", title: "Pre-Setup" },
    { id: "slide-8", title: "How to Build Part 1" },
    { id: "slide-9", title: "How to Build Part 2" },
    { id: "slide-10", title: "Finalize the App" },
  ],
  slides: {
    hero: {
      id: "slide-1",
      eyebrow: "Panel Discussion",
      title: "Talk your client out of a",
      highlight: "bad decision",
      suffix: "with a gamified decision tree",
      presenter: "By: Jim Markunas",
      sponsor: "Sponsored by: Geekle",
    },
    agenda: {
      id: "slide-2",
      title: "What We’ll Cover in This Talk",
      summary:
        "Use free(ish) Tools to make a gamified, interactive app in under 20 minutes to drive executive decision-making.",
      whyCareLabel: "Why the Geekle audience would care:",
      whyCareItems: [
        "It's design-oriented & uses (mostly) free tools",
        "It's fun! It turns hard conversations into a game",
        "It's provable - Modere scaled to $1b using this system",
      ],
    },
    modereGame: {
      id: "slide-3",
      title: "The Modere Game",
      caseStudyLabel: "CASE STUDY",
      paragraphs: [
        "Modere was a technologically complex MLM that wanted to scale from $500m GMV to $1B GMV.",
        "The C-Suite was frugal, and the old guard didn't want any technological change at all.",
      ],
      goalLabel: "The Goal",
      goalText:
        "Drive key technology decisions to get them to $1B + illustrate financial consequences of not changing.",
    },
    audienceContrast: {
      id: "slide-4",
      titleStart: "Engineers, Designers & Artists",
      titleMiddle: "vs.",
      titleEnd: "Managers & Executives",
      rings: [
        { id: "ring-attention", label: "Attention", value: "Shorter Spans" },
        { id: "ring-focus", label: "Focus", value: "ROI & Value Prop" },
        { id: "ring-stance", label: "Stance", value: "Risk-Averse" },
      ],
    },
    goal: {
      id: "slide-5",
      title: "Goal",
      line: "Drive a key decision using visual gamification of data",
    },
    toolsNeeded: {
      id: "slide-6",
      title: "Tools Needed",
      tools: [
        { id: "tool-google-account", name: "Google Account", cost: "Free" },
        { id: "tool-github", name: "Github", cost: "Free" },
        { id: "tool-box", name: "Box account", cost: "Free" },
        { id: "tool-notion", name: "Notion", cost: "Free-ish" },
        { id: "tool-design-system", name: "Design System", cost: "Free(ish)" },
        { id: "tool-code-editor", name: "Code Editor (AI)", cost: "Free(ish)" },
        { id: "tool-google-ai-studio", name: "Google AI Design Studio", cost: "Free" },
        { id: "tool-chatgpt", name: "ChatGPT", cost: "Free(ish)" },
        { id: "tool-web-hosting", name: "Web Hosting", cost: "Not Free" },
      ],
    },
    preSetup: {
      id: "slide-7",
      title: "Pre-Setup",
      steps: [
        { id: "pre-setup-01", text: "Hostinger (or comparable hosting)" },
        { id: "pre-setup-02", text: "Github Pages Project & Code Repo" },
        { id: "pre-setup-03", text: "VS Code with CI/CD Pipeline" },
        { id: "pre-setup-04", text: "Preferred coding agent (Co-Pilot, Claude Code, etc)" },
        { id: "pre-setup-05", text: "Chat GPT Interview" },
        { id: "pre-setup-06", text: "Notion - Write a case study" },
      ],
    },
    buildPart1: {
      id: "slide-8",
      titlePrefix: "How to Build",
      titleHighlight: "Part 1",
      steps: [
        { id: "build-part-1-01", text: "Upload Design System" },
        { id: "build-part-1-02", text: "Upload case study" },
        { id: "build-part-1-03", text: "Ask for the app build" },
        { id: "build-part-1-04", text: "Tweak build" },
        { id: "build-part-1-05", text: "Download codebase" },
      ],
    },
    buildPart2: {
      id: "slide-9",
      titlePrefix: "How to Build",
      titleHighlight: "Part 2",
      intro: "ChatGPT refinement for streamlined app:",
      steps: [
        {
          id: "build-part-2-01",
          text: "Prompt it to streamline the code for a light weight react/tailwind JSX app",
        },
        { id: "build-part-2-02", text: "Make UI tweaks" },
        { id: "build-part-2-03", text: "Export for VS code + Codex Prompt" },
        { id: "build-part-2-04", text: "Make .zip file" },
      ],
    },
    finalize: {
      id: "slide-10",
      title: "Finalize the App",
      steps: [
        { id: "finalize-01", number: "01", label: "Code or UI tweaks" },
        { id: "finalize-02", number: "02", label: "Github Commit", emphasized: true },
      ],
      completionLabel: "Presentation Complete",
    },
  },
} satisfies Geekle2026Content;
