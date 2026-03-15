export default function SiteFooter() {
  return (
    <footer className="border-t border-borderSubtle">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 xl:px-[52px]">
        <p className="type-p5 text-muted">Built on a calm, premium, typography-led system.</p>
        <div className="flex items-center gap-6">
          <a href="/" className="type-p5 text-muted transition-colors duration-200 hover:text-accent">
            Home
          </a>
          <a href="/design-system" className="type-p5 text-muted transition-colors duration-200 hover:text-accent">
            Design system
          </a>
          <a
            href="/case-studies/cps-energy-smart-streetlights"
            className="type-p5 text-muted transition-colors duration-200 hover:text-accent"
          >
            CPS Energy
          </a>
        </div>
      </div>
    </footer>
  );
}
