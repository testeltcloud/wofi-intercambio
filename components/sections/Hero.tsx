import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/motion/Parallax";
import { img } from "@/lib/images";
import { CTA_URL } from "@/lib/site";

const reassurance = ["Ativação em minutos", "Sem contrato de fidelidade", "Suporte em português"];

/**
 * Hero acima da dobra: entrada animada só com CSS (animate-fade-up),
 * para o LCP não esperar hidratação do JavaScript.
 */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      {/* brilhos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] size-[480px] rounded-full bg-brand/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-12%] size-[420px] rounded-full bg-brand/15 blur-[110px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* texto */}
        <div>
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 text-sm font-semibold text-ink">
              <span className="size-2 animate-pulse rounded-full bg-brand-deep" />
              eSIM &amp; chip internacional para intercâmbio
            </span>
          </div>

          <h1 className="animate-fade-up mt-6 font-display text-[2.9rem] font-bold leading-[1.02] tracking-tight [animation-delay:90ms] sm:text-6xl lg:text-7xl">
            Desembarcou,
            <br />
            <span className="relative inline-block">
              e agora?
              {/* sublinhado curvo */}
              <svg
                viewBox="0 0 220 14"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 w-full text-brand"
              >
                <path
                  d="M4 10 C60 2 160 2 216 8"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted [animation-delay:180ms] sm:text-xl">
            Conhecer outro país é desafiador — sem conexão, pode se tornar ainda mais. Com a
            Woofi, sua conectividade é garantida{" "}
            <strong className="font-semibold text-ink">antes mesmo do avião pousar</strong>.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4 [animation-delay:270ms]">
            <Button href={CTA_URL} external>
              Esteja preparado
            </Button>
            <Button href="#como-funciona" variant="outline-dark">
              Ver como funciona
            </Button>
          </div>

          <ul className="animate-fade-up mt-9 flex flex-wrap gap-x-6 gap-y-2 [animation-delay:360ms]">
            {reassurance.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" className="fill-brand" />
                  <path
                    d="m7.5 12.5 3 3 6-6.5"
                    stroke="#ffffff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* visual */}
        <div className="animate-fade-up relative mx-auto w-full max-w-[460px] [animation-delay:150ms]">
          {/* curva decorativa atrás da foto */}
          <svg
            viewBox="0 0 460 560"
            aria-hidden="true"
            className="absolute -left-10 -top-10 w-[112%] text-brand"
            fill="none"
          >
            <path
              d="M20 420 C-30 220 120 40 300 24 C400 16 452 90 448 170"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="2 14"
            />
          </svg>

          <Parallax strength={26}>
            <div className="relative overflow-hidden rounded-[2.5rem] rounded-tl-[8rem] shadow-2xl shadow-ink/20">
              <Image
                src={img.heroPorDoSol.src}
                alt={img.heroPorDoSol.alt}
                width={img.heroPorDoSol.width}
                height={img.heroPorDoSol.height}
                placeholder="blur"
                blurDataURL={img.heroPorDoSol.blurDataURL}
                priority
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Parallax>

          {/* cartão flutuante: eSIM ativa */}
          <div
            aria-hidden="true"
            className="absolute -left-6 top-10 animate-float rounded-2xl border border-white/40 bg-white/85 p-4 shadow-xl shadow-ink/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.8 9.2a13.2 13.2 0 0 1 18.4 0M6 12.6a8.4 8.4 0 0 1 12 0M9.2 16a3.9 3.9 0 0 1 5.6 0"
                    stroke="#9EA1F5"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="19.4" r="1.6" fill="#9EA1F5" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Woofi eSIM</p>
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted">
                  <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                  Ativo no destino
                </p>
              </div>
            </div>
          </div>

          {/* cartão flutuante: mensagem pra família */}
          <div
            aria-hidden="true"
            className="absolute -right-4 bottom-14 max-w-[230px] animate-float-slow rounded-2xl rounded-br-md border border-white/40 bg-white/90 p-4 shadow-xl shadow-ink/10 backdrop-blur-md"
          >
            <p className="text-sm font-medium leading-snug text-ink">
              Cheguei bem, mãe! Já estou indo pro alojamento ✈️
            </p>
            <p className="mt-1.5 flex items-center justify-end gap-1 text-[11px] font-medium text-muted">
              agora
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m2.5 13 4 4L14 9m-4.5 7.5 1 1L18 10"
                  stroke="#3BA9F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
