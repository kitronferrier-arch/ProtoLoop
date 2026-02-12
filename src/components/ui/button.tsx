import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

interface ButtonAsButton extends BaseButtonProps {
  href?: never;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

function styles(variant: ButtonVariant, className?: string) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

  const variantClasses = {
    primary:
      "bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-strong)] shadow-[0_0_20px_rgba(89,140,255,0.25)]",
    secondary:
      "border border-white/20 text-slate-100 hover:border-[var(--accent)] hover:text-white",
    ghost: "text-slate-300 hover:text-white",
  };

  return `${base} ${variantClasses[variant]} ${className ?? ""}`.trim();
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    return (
      <Link href={props.href} className={styles(variant, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={styles(variant, className)}>
      {children}
    </button>
  );
}
