import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type IconCircleButtonProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
};

export default function IconCircleButton({
  href,
  className = "",
  ariaLabel = "Open link",
}: IconCircleButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex h-14 w-14 items-center justify-center rounded-circle border border-borderSubtle bg-white text-ink transition-colors duration-200 hover:border-accent hover:text-accent ${className}`}
    >
      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
    </Link>
  );
}
