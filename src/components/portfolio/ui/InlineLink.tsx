import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type InlineLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function InlineLink({
  href,
  children,
  className = "",
}: InlineLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 type-p4 font-medium text-accent transition-colors duration-200 hover:text-accentHover ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
