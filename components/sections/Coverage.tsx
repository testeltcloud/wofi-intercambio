import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CTA_URL, waLink } from "@/lib/site";

// Regiões cobertas (fonte: site oficial — 165+ países em 5 regiões).
const regioes = [
  {
    nome: "Europa",
    exemplos: "Reino Unido, Portugal, Espanha, França, Itália…",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3 3 8.5V10h18V8.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    nome: "América do Norte",
    exemplos: "Estados Unidos, Canadá, México…",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 12h1.5a2 2 0 0 1 2 2v7M8 9H6.5a2 2 0 0 0-2 2v10M3 21h18M11.5 7h3M11.5 11h3M11.5 15h3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    nome: "América do Sul",
    exemplos: "Argentina, Chile, Colômbia, Peru…",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M2 20 9 6l4 7 2.5-4L22 20Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    nome: "Ásia",
    exemplos: "Japão, Tailândia, China, Coreia do Sul…",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    nome: "Oriente Médio",
    exemplos: "Emirados Árabes, Catar, Turquia…",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M15.8 8.2 13.7 14.1 7.9 16.2 10 10.3Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

/**
 * A Solução — faixa imersiva full-bleed de cobertura global.
 * Foto real de viajantes conectados + duotone índigo + cards de vidro por região.
 */
export function Coverage() {
  return (
    <section id="cobertura" className="relative isolate w-full overflow-hidden bg-ink py-24 md:py-32">
      {/* Foto de fundo (decorativa) */}
      <Image
        src="/images/cobertura-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={75}
        className="absolute inset-0 object-cover object-center"
      />
      {/* Duotone índigo + escurecimento para legibilidade */}
      <div aria-hidden="true" className="absolute inset-0 bg-brand/25 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
      {/* brilho de marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 size-[440px] rounded-full bg-brand/30 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        {/* Bloco do título */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
              <span className="size-1.5 animate-pulse rounded-full bg-brand-bright" />
              A Solução
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl">
              Conecte clientes em qualquer lugar do mundo
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/75">
              Cobertura consolidada em mais de 165 países, reunida em um só painel. Seja qual for o
              destino do pacote, a sua agência tem um plano de conectividade para oferecer.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 inline-flex items-center gap-2.5 text-sm font-semibold text-paper/70">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-bright">
                <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.9" />
                <path d="M2.8 12h18.4M12 2.8a14 14 0 0 1 0 18.4 14 14 0 0 1 0-18.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              eSIM ativo em mais de 165 países
            </p>
          </Reveal>
        </div>

        {/* Regiões em cards de vidro + destaque */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {regioes.map((r, i) => (
            <Reveal key={r.nome} delay={(i % 2) * 0.08} className="h-full">
              <a
                href={waLink(`Quero oferecer cobertura na região "${r.nome}" para a minha agência.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.08] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-bright/60 hover:bg-white/[0.14]"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-3.5 font-display text-4xl font-bold leading-none text-white/10 transition-colors duration-300 group-hover:text-brand-bright/30"
                >
                  0{i + 1}
                </span>

                <span className="grid size-11 place-items-center rounded-2xl bg-brand text-white transition-colors duration-300 group-hover:bg-brand-bright group-hover:text-ink">
                  {r.icon}
                </span>

                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-paper">
                  {r.nome}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/70">{r.exemplos}</p>

                <div className="mt-5 flex items-center justify-between border-t border-white/12 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-paper/60">
                    <span className="size-1.5 animate-pulse rounded-full bg-green-400" />
                    Cobertura ativa
                  </span>
                  <span className="inline-flex translate-x-[-6px] items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-bright opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Quero vender
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12h14m0 0-6-6m6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}

          {/* Card destaque: cobertura global */}
          <Reveal delay={0.08} className="h-full">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-brand p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-white/15 text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.9" />
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="mt-6">
                <p className="font-display text-4xl font-bold leading-none text-white">165+</p>
                <p className="mt-1.5 text-sm font-semibold text-white/90">países cobertos</p>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Europa · Am. do Norte · Am. do Sul · Ásia · Oriente Médio
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
