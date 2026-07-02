"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

type ParallaxProps = {
  children: React.ReactNode;
  /** intensidade do deslocamento em px (padrão 40) */
  strength?: number;
  className?: string;
};

/** Parallax leve conforme o scroll — barato para o main thread (só transform). */
export function Parallax({ children, strength = 40, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <m.div ref={ref} style={reduced ? undefined : { y }} className={className}>
      {children}
    </m.div>
  );
}
