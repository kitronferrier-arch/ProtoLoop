interface BadgeProps {
  children: string;
  tone?: "default" | "accent";
}

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${
        tone === "accent"
          ? "border-[var(--accent)]/70 text-[var(--accent)]"
          : "border-white/20 text-slate-300"
      }`}
    >
      {children}
    </span>
  );
}
