"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CounterProps = {
  to: number;
  decimals?: number;
  suffix?: string;
  className?: string;
};

/** Número que conta de 0 até `to` quando entra na tela (formato pt-BR). */
export function Counter({ to, decimals = 0, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    if (!inView) return;
    if (reduced) {
      el.textContent = fmt.format(to) + suffix;
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = fmt.format(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals, suffix, reduced]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
