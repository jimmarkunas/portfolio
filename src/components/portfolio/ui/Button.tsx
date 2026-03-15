import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "inline";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  href,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-pill border px-5 py-3 type-p5 font-medium transition-colors duration-200";

  const variantStyles = {
    primary:
      "border-transparent bg-accent text-white hover:bg-accentHover",
    secondary:
      "border-borderSubtle bg-white text-ink hover:border-accent hover:text-accent",
    accent:
      "border-transparent bg-ink text-white hover:bg-[#111111]",
    inline:
      "border-transparent bg-transparent px-0 py-0 text-accent hover:text-accentHover",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
