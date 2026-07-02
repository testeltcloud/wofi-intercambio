import Image from "next/image";
import { Curve } from "@/components/ui/Curve";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { img } from "@/lib/images";

const roamingProblems = [
  "Surpresa na fatura do fim do mês",
  "Taxas escondidas e franquia estourada",
  "Contratos longos e burocracia para cancelar",
];

const woofiWins = [
  "Preço fixo em reais, definido antes de embarcar",
  "Sem taxas escondidas, sem contrato, sem susto",
  "Recarga em minutos, direto do celular",
];

const rotinaItems = [
  {
    title: "Chamar um aplicativo de transporte",
    text: "sem depender do Wi-Fi público do aeroporto.",
  },
  {
    title: "Consultar o mapa e as linhas de metrô ou ônibus",
    text: "até a sua acomodação, sem medo de se perder.",
  },
  {
    title: "Acessar e-mails, contratos e documentos de imigração",
    text: "na hora em que forem solicitados.",
  },
];

/** Bloco escuro: Roaming abusivo + Do aeroporto à rotina. */
export function DarkBlock() {
  return (
    <div className="relative bg-ink text-paper">
      <Curve className="text-paper" />

      {/* ── Roaming ─────────────────────────────────────────────────────── */}
      <section id="roaming" className="px-5 pb-24 pt-14 sm:px-8 md:pb-32 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                dark
                eyebrow="Adeus, roaming"
                title={
                  <>
                    Esqueça o roaming internacional{" "}
                    <span className="text-brand">abusivo</span>
                  </>
                }
                sub={
                  <>
                    Ativar o chip da sua operadora local para usar no exterior é sinônimo de
                    surpresa na fatura do fim do mês. Com a Woofi, você sabe exatamente quanto vai
                    pagar. É a economia que o seu bolso de intercambista precisa.
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-ink-line">
                <Image
                  src={img.fotoCidadeNoite.src}
                  alt={img.fotoCidadeNoite.alt}
                  width={img.fotoCidadeNoite.width}
                  height={img.fotoCidadeNoite.height}
                  placeholder="blur"
                  blurDataURL={img.fotoCidadeNoite.blurDataURL}
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="h-56 w-full object-cover object-center md:h-64"
                />
              </div>
            </Reveal>
          </div>

          {/* comparação */}
          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <div className="rounded-[2rem] border border-ink-line bg-ink-soft p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-dark">
                  Roaming da operadora
                </p>
                <ul className="mt-5 space-y-4">
                  {roamingProblems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-dark">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      >
                        <circle cx="12" cy="12" r="11" className="fill-white/10" />
                        <path
                          d="m8.5 8.5 7 7m0-7-7 7"
                          stroke="#f87171"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative rounded-[2rem] bg-brand p-8 text-ink shadow-[0_20px_60px_-20px_rgba(200,241,60,0.45)]">
                <span className="absolute -top-3 right-8 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                  Do jeito certo
                </span>
                <p className="text-sm font-bold uppercase tracking-widest text-ink/60">
                  Com a Woofi
                </p>
                <ul className="mt-5 space-y-4">
                  {woofiWins.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-medium">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      >
                        <circle cx="12" cy="12" r="11" className="fill-ink" />
                        <path
                          d="m7.5 12.5 3 3 6-6.5"
                          stroke="#C8F13C"
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Rotina ──────────────────────────────────────────────────────── */}
      <section id="rotina" className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
          {/* colagem de fotos */}
          <div className="relative mx-auto w-full max-w-[440px]">
            <Parallax strength={30}>
              <div className="overflow-hidden rounded-[2.5rem] rounded-br-[7rem]">
                <Image
                  src={img.painelPartidas.src}
                  alt={img.painelPartidas.alt}
                  width={img.painelPartidas.width}
                  height={img.painelPartidas.height}
                  placeholder="blur"
                  blurDataURL={img.painelPartidas.blurDataURL}
                  sizes="(min-width: 1024px) 440px, 85vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Parallax>
            <Parallax
              strength={55}
              className="absolute -bottom-10 -left-6 w-[55%] sm:-left-12"
            >
              <div className="overflow-hidden rounded-[1.8rem] border-4 border-ink shadow-2xl">
                <Image
                  src={img.aeroportoMala.src}
                  alt={img.aeroportoMala.alt}
                  width={img.aeroportoMala.width}
                  height={img.aeroportoMala.height}
                  placeholder="blur"
                  blurDataURL={img.aeroportoMala.blurDataURL}
                  sizes="240px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Parallax>
          </div>

          <div>
            <Reveal>
              <SectionHeading
                dark
                eyebrow="Primeiras horas"
                title="Do aeroporto direto para a sua nova rotina"
                sub="Quem faz intercâmbio sabe que as primeiras horas no país de destino são decisivas. Com internet desde o primeiro minuto, você pode:"
              />
            </Reveal>

            <ul className="mt-10 space-y-6">
              {rotinaItems.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 0.1} className="flex items-start gap-4">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-brand font-display text-sm font-bold text-ink">
                      {i + 1}
                    </span>
                    <p className="text-lg leading-relaxed text-muted-dark">
                      <strong className="font-semibold text-paper">{item.title}</strong>{" "}
                      {item.text}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Curve className="text-paper" flip />
    </div>
  );
}
