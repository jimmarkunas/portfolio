import { portfolioTokens as t } from '@/lib/portfolio-design-tokens';
import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

type ButtonLikeProps = {
  children: ReactNode;
  full?: boolean;
  href?: string;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

type CssVarStyle = CSSProperties & Record<`--${string}`, string>;

type ButtonProps = ButtonLikeProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

const buttonBase =
  'inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border px-5 text-[14px] md:text-[15px] font-medium tracking-[0.01em] transition-[background-color,border-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

export function PrimaryButton({ children, className = '', full = false, ...props }: ButtonProps) {
  const style: CssVarStyle = {
    '--btn-bg': t.color.accent,
    '--btn-hover-bg': t.color.accentHover,
    '--btn-focus': t.color.accent,
    backgroundColor: t.color.accent,
    color: t.color.inverseText,
  };
  const sharedClassName = `${buttonBase} ${
    full ? 'w-full' : ''
  } border-transparent hover:[background-color:var(--btn-hover-bg)] focus-visible:outline-[var(--btn-focus)] ${className}`;

  if (props.href) {
    const { href, ...anchorProps } = props;

    return (
      <a
        className={sharedClassName}
        style={style}
        href={href}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={sharedClassName}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = '', full = false, ...props }: ButtonProps) {
  const style: CssVarStyle = {
    '--btn-bg': t.color.bg,
    '--btn-hover-bg': t.color.soft,
    '--btn-border': t.color.border,
    '--btn-hover-border': t.color.accent,
    '--btn-text': t.color.ink,
    '--btn-focus': t.color.accent,
    backgroundColor: t.color.bg,
    borderColor: t.color.border,
    color: t.color.ink,
  };
  const sharedClassName = `${buttonBase} ${
    full ? 'w-full' : ''
  } hover:[background-color:var(--btn-hover-bg)] hover:[border-color:var(--btn-hover-border)] focus-visible:outline-[var(--btn-focus)] ${className}`;

  if (props.href) {
    const { href, ...anchorProps } = props;

    return (
      <a
        className={sharedClassName}
        style={style}
        href={href}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={sharedClassName}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

export function InlineLink({ children, className = '', ...props }: LinkProps) {
  const style: CssVarStyle = {
    '--link': t.color.accent,
    '--link-hover': t.color.accentHover,
    color: t.color.accent,
  };

  return (
    <a
      className={`inline-flex items-center gap-1 text-[14px] md:text-[15px] font-medium underline-offset-4 transition-colors duration-200 hover:underline hover:[color:var(--link-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--link)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
}

export function ExternalLink({ children, className = '', ...props }: LinkProps) {
  return (
    <InlineLink className={className} {...props}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </InlineLink>
  );
}

export function UtilityLink({ children, className = '', ...props }: LinkProps) {
  const style: CssVarStyle = {
    '--utility-link': t.color.ink,
    '--utility-link-hover': t.color.accent,
    color: t.color.ink,
  };

  return (
    <a
      className={`${t.type.eyebrow} inline-flex items-center gap-1 transition-colors duration-200 hover:[color:var(--utility-link-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--utility-link-hover)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
}
