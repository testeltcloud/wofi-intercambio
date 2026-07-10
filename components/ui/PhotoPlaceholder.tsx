type PhotoPlaceholderProps = {
  title: string;
  description: string;
  /** ex.: "aspect-[4/5]" */
  ratioClass?: string;
  className?: string;
};

/**
 * Caixa marcando onde entra uma foto real da marca.
 * Substitua por um <Image /> quando o asset existir.
 */
export function PhotoPlaceholder({
  title,
  description,
  ratioClass = "aspect-[4/5]",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex ${ratioClass} w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[2rem] border-2 border-dashed border-ink/20 bg-[repeating-linear-gradient(45deg,transparent,transparent_14px,rgba(16,19,24,0.03)_14px,rgba(16,19,24,0.03)_28px)] p-6 text-center ${className}`}
    >
      <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
        Foto aqui
      </span>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink/40">
        <path
          d="M4 8a2 2 0 0 1 2-2h1.2a2 2 0 0 0 1.6-.8l.4-.53A2 2 0 0 1 10.8 4h2.4a2 2 0 0 1 1.6.67l.4.53a2 2 0 0 0 1.6.8H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <p className="font-display text-base font-bold text-ink/80">{title}</p>
      <p className="max-w-[26ch] text-sm leading-snug text-muted">{description}</p>
    </div>
  );
}
