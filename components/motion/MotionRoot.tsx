"use client";

import { useEffect } from "react";
import { LazyMotion, domAnimation, useReducedMotion } from "motion/react";
import type Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Provider global de animação:
 * - LazyMotion carrega só o subconjunto `domAnimation` do Motion (bundle mínimo)
 * - Lenis (scroll suave) é importado dinamicamente no idle do navegador,
 *   fora do caminho crítico do LCP — e desativado se o usuário prefere menos movimento
 */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let lenis: Lenis | undefined;
    let cancelled = false;

    const start = async () => {
      const { default: LenisCtor } = await import("lenis");
      if (cancelled) return;
      lenis = new LenisCtor({ lerp: 0.11, autoRaf: true, anchors: true });
    };

    const hasRic = typeof window.requestIdleCallback === "function";
    const idle = hasRic
      ? window.requestIdleCallback(() => void start(), { timeout: 2500 })
      : window.setTimeout(() => void start(), 1200);

    return () => {
      cancelled = true;
      if (hasRic) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      lenis?.destroy();
    };
  }, [reduced]);

  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
