"use client";

import { m, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  /** atraso em segundos (para efeito cascata) */
  delay?: number;
  /** deslocamento vertical inicial em px */
  y?: number;
  className?: string;
  amount?: number;
};

/** Fade + slide-up quando o elemento entra na viewport. */
export function Reveal({ children, delay = 0, y = 28, className, amount = 0.2 }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.28, 1] }}
    >
      {children}
    </m.div>
  );
}
