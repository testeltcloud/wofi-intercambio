type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "dark" | "outline-dark" | "outline-light";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95";

const variants = {
  primary:
    "bg-brand text-ink shadow-[0_10px_30px_-10px_rgba(176,220,34,0.7)] hover:bg-brand-deep",
  dark: "bg-ink text-paper hover:bg-ink-soft",
  "outline-dark":
    "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light":
    "border border-white/25 text-paper hover:border-brand hover:text-brand",
};

export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h14m0 0-6-6m6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
