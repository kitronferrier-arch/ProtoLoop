import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-[var(--accent)]/60 hover:shadow-[0_0_30px_rgba(89,140,255,0.12)] ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
