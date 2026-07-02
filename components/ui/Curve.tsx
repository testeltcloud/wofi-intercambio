type CurveProps = {
  /** cor da onda via classe text-* (usa currentColor) */
  className?: string;
  flip?: boolean;
};

/** Divisor de seção em curva orgânica. */
export function Curve({ className = "text-paper", flip }: CurveProps) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-[44px] w-full md:h-[80px] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0,52 C220,96 420,6 720,34 C1020,62 1240,8 1440,48 L1440,0 L0,0 Z"
        fill="currentColor"
      />
    </svg>
  );
}
