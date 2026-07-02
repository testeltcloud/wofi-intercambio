type LogoProps = { dark?: boolean };

export function Logo({ dark }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-brand">
        {/* sinal de wi-fi */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M2.8 9.2a13.2 13.2 0 0 1 18.4 0M6 12.6a8.4 8.4 0 0 1 12 0M9.2 16a3.9 3.9 0 0 1 5.6 0"
            stroke="#101318"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <circle cx="12" cy="19.4" r="1.6" fill="#101318" />
        </svg>
      </span>
      <span
        className={`font-display text-[1.45rem] font-bold lowercase tracking-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        woofi
      </span>
    </span>
  );
}
