"use client";

import { LazyMotion, domAnimation, useReducedMotion } from "motion/react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/**
 * Provider global de animação:
 * - LazyMotion carrega só o subconjunto `domAnimation` do Motion (bundle mínimo)
 * - Lenis dá o scroll suave — desativado se o usuário prefere menos movimento
 */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      {reduced ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.11, wheelMultiplier: 1, anchors: true }}>
          {children}
        </ReactLenis>
      )}
    </LazyMotion>
  );
}
