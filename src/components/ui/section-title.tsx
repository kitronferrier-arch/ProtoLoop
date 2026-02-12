interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
}

export function SectionTitle({ eyebrow, title, description, as = "h2" }: SectionTitleProps) {
  const HeadingTag = as;

  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">{eyebrow}</p>
      ) : null}
      <HeadingTag className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </HeadingTag>
      {description ? <p className="text-slate-300">{description}</p> : null}
    </div>
  );
}
