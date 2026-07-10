import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { CTA_URL } from "@/lib/site";
import { img } from "@/lib/images";

/**
 * ── FOTO DESTA SEÇÃO ──────────────────────────────────────────────────────
 * 1. Coloque seu arquivo em /public/images (ex.: manifesto.jpg)
 * 2. Troque `null` por: { src: "/images/manifesto.jpg", alt: "descrição da foto" }
 *    (ou use uma foto existente: importe `img` de "@/lib/images" e passe img.casalCelular)
 * Sugestão de foto: intercambista sorrindo no destino, luz natural,
 * espaço vazio no lado esquerdo da composição. Formato próximo de quadrado.
 */
const foto: { src: string; alt: string; blurDataURL?: string } | null = img.manifesto;

/** Seção editorial com foto em recorte orgânico (estilo Akanji). */
export function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden px-5 py-20 sm:px-8 md:py-28">
      {/* brilho suave de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[-8%] size-[380px] rounded-full bg-brand/15 blur-[100px]"
      />

      {/* clip-path responsivo do recorte orgânico */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id="woofi-organic" clipPathUnits="objectBoundingBox">
            <path d="M0.42,0 L0.60,0 C0.68,0 0.74,0.026 0.79,0.085 L0.955,0.27 C0.985,0.305 1,0.345 1,0.395 L1,0.88 C1,0.947 0.947,1 0.88,1 L0.12,1 C0.053,1 0,0.947 0,0.88 L0,0.64 C0,0.577 0.05,0.526 0.115,0.526 L0.235,0.526 C0.295,0.526 0.34,0.48 0.34,0.42 L0.34,0.08 C0.34,0.035 0.375,0 0.42,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* texto */}
        <div className="max-w-lg">
          <Reveal>
            <p className="text-lg font-medium leading-relaxed text-muted">
              Feita para intercambistas, por quem sabe o peso de desembarcar sozinho em outro
              país.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl">
              A ponte entre a sua nova vida e{" "}
              <span className="text-brand-deep">todo mundo que torce por você.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9">
              <Button href={CTA_URL} external>
                Saiba mais
              </Button>
            </div>
          </Reveal>
        </div>

        {/* foto com recorte orgânico */}
        <Reveal delay={0.12} y={36}>
          <Parallax strength={24}>
            <div
              className="relative mx-auto aspect-[10/11] w-full max-w-[560px]"
              style={{ clipPath: "url(#woofi-organic)" }}
            >
              {foto ? (
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 92vw"
                  {...(foto.blurDataURL
                    ? { placeholder: "blur" as const, blurDataURL: foto.blurDataURL }
                    : {})}
                  className="object-cover"
                />
              ) : (
                /* PLACEHOLDER — troque pela sua foto na constante `foto` no topo deste arquivo */
                <div className="flex size-full flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(45deg,#ecefe3,#ecefe3_16px,#e3e7d6_16px,#e3e7d6_32px)] p-8 text-center">
                  <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                    Foto aqui
                  </span>
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink/40">
                    <path
                      d="M4 8a2 2 0 0 1 2-2h1.2a2 2 0 0 0 1.6-.8l.4-.53A2 2 0 0 1 10.8 4h2.4a2 2 0 0 1 1.6.67l.4.53a2 2 0 0 0 1.6.8H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <p className="max-w-[30ch] pl-16 text-sm leading-snug text-muted sm:pl-24">
                    Intercambista sorrindo no destino, luz natural, formato quase quadrado.
                    Configure em <code>components/sections/Manifesto.tsx</code>
                  </p>
                </div>
              )}
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
