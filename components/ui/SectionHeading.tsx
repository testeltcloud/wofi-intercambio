type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  dark?: boolean;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, sub, dark, center }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${
          dark ? "bg-brand/15 text-brand-bright" : "bg-brand-soft text-ink"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>
          {sub}
        </p>
      ) : null}
    </div>
  );
}
