import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "pbds-mobile": "390px",
        "pbds-tablet": "768px",
        "pbds-desktop": "1200px",
      },
      colors: {
        ink: "var(--color-ink)",
        charcoal: "var(--color-charcoal)",
        mid: "var(--color-mid)",
        line: "var(--color-line)",
        canvas: "var(--color-canvas)",
        utility: "var(--color-utility)",
        magenta: "var(--color-accent)",

        // Existing semantic aliases. These all resolve to PBDS canon.
        "secondary-dark": "var(--color-secondary-dark)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",

        // Tokens used by the imported interview app; retained until that surface is migrated.
        "bg-light": "var(--color-bg-light)",
        "card-light": "var(--color-card-light)",
        "border-light": "var(--color-border-light)",
        "text-main": "var(--color-text-main)",
        "text-muted": "var(--color-text-muted)",
        white: "var(--color-white)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
        chip: "var(--radius-chip)",
        circle: "var(--radius-circle)",
        finox: "var(--radius-finox)",
        "finox-lg": "var(--radius-finox-lg)",
      },
      spacing: {
        2: "var(--space-8)",
        3: "var(--space-12)",
        4: "var(--space-16)",
        5: "var(--space-20)",
        6: "var(--space-24)",
        7: "var(--space-28)",
        8: "var(--space-32)",
        10: "var(--space-40)",
        13: "var(--space-52)",
        20: "var(--space-80)",
        30: "var(--space-120)",
        "gutter-mobile": "var(--layout-gutter-mobile)",
        "gutter-tablet": "var(--layout-gutter-tablet)",
        "gutter-desktop": "var(--layout-gutter-desktop)",
        "presentation-x": "var(--presentation-safe-x)",
        "presentation-y": "var(--presentation-safe-y)",
      },
      maxWidth: {
        content: "var(--layout-max-content)",
      },
      minHeight: {
        interactive: "var(--layout-min-interactive)",
      },
      minWidth: {
        interactive: "var(--layout-min-interactive)",
      },
      fontFamily: {
        display: [
          "Inter Display",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Inter Display",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": [
          "var(--type-display-xl-size)",
          { lineHeight: "var(--type-display-xl-line)", letterSpacing: "var(--type-display-xl-track)" },
        ],
        "display-l": [
          "var(--type-display-l-size)",
          { lineHeight: "var(--type-display-l-line)", letterSpacing: "var(--type-display-l-track)" },
        ],
        "pbds-h1": [
          "var(--type-h1-size)",
          { lineHeight: "var(--type-h1-line)", letterSpacing: "var(--type-h1-track)" },
        ],
        "pbds-h2": [
          "var(--type-h2-size)",
          { lineHeight: "var(--type-h2-line)", letterSpacing: "var(--type-h2-track)" },
        ],
        "pbds-h3": [
          "var(--type-h3-size)",
          { lineHeight: "var(--type-h3-line)", letterSpacing: "var(--type-h3-track)" },
        ],
        "body-l": ["var(--type-body-l-size)", { lineHeight: "var(--type-body-l-line)" }],
        "body-m": ["var(--type-body-m-size)", { lineHeight: "var(--type-body-m-line)" }],
        "body-s": ["var(--type-body-s-size)", { lineHeight: "var(--type-body-s-line)" }],
        label: [
          "var(--type-label-size)",
          { lineHeight: "var(--type-label-line)", letterSpacing: "var(--type-label-track)" },
        ],
        micro: [
          "var(--type-micro-size)",
          { lineHeight: "var(--type-micro-line)", letterSpacing: "var(--type-micro-track)" },
        ],
        nav: [
          "var(--type-nav-size)",
          { lineHeight: "var(--type-nav-line)", letterSpacing: "var(--type-nav-track)" },
        ],
        "slide-title": [
          "var(--type-presentation-title-size)",
          { lineHeight: "var(--type-presentation-title-line)" },
        ],
        "slide-statement": [
          "var(--type-presentation-statement-size)",
          { lineHeight: "var(--type-presentation-statement-line)" },
        ],
        "slide-section": [
          "var(--type-presentation-section-size)",
          { lineHeight: "var(--type-presentation-section-line)" },
        ],
        "slide-body": [
          "var(--type-presentation-body-size)",
          { lineHeight: "var(--type-presentation-body-line)" },
        ],
        "slide-caption": [
          "var(--type-presentation-caption-size)",
          { lineHeight: "var(--type-presentation-caption-line)" },
        ],
        "slide-kicker": [
          "var(--type-presentation-kicker-size)",
          { lineHeight: "var(--type-presentation-kicker-line)", letterSpacing: "var(--type-presentation-kicker-track)" },
        ],
        "slide-metric": [
          "var(--type-presentation-metric-size)",
          { lineHeight: "var(--type-presentation-metric-line)" },
        ],

        // Existing site scale retained during the PBDS pilot.
        h1: ["15rem", { lineHeight: "1", letterSpacing: "-0.1em" }],
        h2: ["7.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        h3: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h4: ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        h5: ["2rem", { lineHeight: "1.35", letterSpacing: "-0.02em" }],
        h6: ["1.75rem", { lineHeight: "1.4", letterSpacing: "-0.02em" }],
        p1: ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        p2: ["1.25rem", { lineHeight: "1.45", letterSpacing: "-0.01em" }],
        p3: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0" }],
        p4: ["1rem", { lineHeight: "1.5", letterSpacing: "0" }],
        p5: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0" }],
      },
      boxShadow: {
        1: "var(--shadow-1)",
        2: "var(--shadow-2)",
        3: "var(--shadow-3)",
        overlay: "var(--shadow-overlay)",
        accent: "var(--shadow-accent-glow)",
      },
      transitionDuration: {
        fast: "var(--motion-fast)",
        base: "var(--motion-base)",
        slow: "var(--motion-slow)",
        emphasis: "var(--motion-emphasis)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        enter: "var(--ease-enter)",
        exit: "var(--ease-exit)",
      },
      backdropBlur: {
        glass: "var(--glass-blur)",
      },
    },
  },
  plugins: [],
}

export default config
