import Button from './Button';
import InlineLink from './InlineLink';

type SiteHeaderProps = {
  current?: 'home' | 'design-system' | 'case-study';
};

const navItems = [
  { label: 'Work', href: '/', key: 'home' },
  { label: 'Design System', href: '/design-system', key: 'design-system' },
  { label: 'CPS Case Study', href: '/case-studies/cps-energy-smart-streetlights', key: 'case-study' },
] as const;

export default function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <header className="border-b border-borderSubtle bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-6 px-6 py-5 md:px-10 xl:px-[52px]">
        <a href="/" className="type-p3 font-medium text-ink">
          Jim Markunas
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = current === item.key;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`type-p5 font-medium transition-colors duration-200 ${
                  active ? 'text-ink' : 'text-muted hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <InlineLink href="/design-system">System reference</InlineLink>
          </div>
          <Button
            variant="secondary"
            href="https://calendar.app.google/hg7ThoSPfhCx8rTHA"
            target="_blank"
            rel="noreferrer"
          >
            Book a call
          </Button>
        </div>
      </div>
    </header>
  );
}
