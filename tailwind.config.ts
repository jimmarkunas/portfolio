import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-text)',
        charcoal: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        surface: 'var(--color-surface)',
        borderSubtle: 'var(--color-border)',
        accent: 'var(--color-accent)',
        accentHover: 'var(--color-accent-hover)',
        bgBase: 'var(--color-bg)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
      },
      spacing: {
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        7: 'var(--space-7)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        13: 'var(--space-13)',
        20: 'var(--space-20)',
        30: 'var(--space-30)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        pill: 'var(--radius-pill)',
        chip: 'var(--radius-chip)',
        circle: 'var(--radius-circle)',
      },
    }
  },
  plugins: []
};

export default config;
