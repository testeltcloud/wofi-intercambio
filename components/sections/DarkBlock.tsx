import Image from "next/image";
import { Curve } from "@/components/ui/Curve";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { img } from "@/lib/images";

const semWoofi = [
  "Cliente desembarca offline e se vira na correria",
  "Ele compra eSIM de outra marca — a margem fica com terceiros",
  "A reclamação de conexão volta como problema da sua agência",
];

const comWoofi = [
  "Cliente conectado assim que o avião pousa",
  "A comissão da conectividade fica com a sua agência",
  "Suporte técnico 24h por conta da Woofi",
];

const portfolioItems = [
  {
    title: "eSIM internacional em mais de 165 países",
    text: "somado ao pacote, junto da passagem e do seguro.",
  },
  {
    title: "Ativação digital, sem estoque nem logística",
    text: "o cliente ativa direto no celular, em minutos.",
  },
  {
    title: "Painel com vendas e ativações em tempo real",
    text: "você acompanha a operação e a margem num só lugar.",
  },
];

/** Bloco escuro: problema (cliente offline) + portfólio que a agência passa a oferecer. */
export function DarkBlock() {
  return (
    <div className="relative bg-ink text-paper">
      <Curve className="text-paper" />

      {/* ── Problema: cliente offline ───────────────────────────────────── */}
      <section id="problema" className="px-5 pb-24 pt-14 sm:px-8 md:pb-32 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                dark
                eyebrow="O detalhe que faltava"
                title={
                  <>
                    Seu cliente não pode desembarcar{" "}
                    <span className="text-brand-bright">offline</span>
                  </>
                }
                sub={
                  <>
                    Sem uma solução de conectividade no fechamento, o viajante compra eSIM por conta
                    própria — e a sua agência perde a margem e ainda herda o problema de suporte. Com
                    a Woofi, a conexão entra no pacote e a comissão fica com você.
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
                  Sem a Woofi
                </p>
                <ul className="mt-5 space-y-4">
                  {semWoofi.map((item) => (
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
              <div className="relative rounded-[2rem] bg-brand p-8 text-paper shadow-[0_20px_60px_-20px_rgba(61,66,212,0.5)]">
                <span className="absolute -top-3 right-8 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright">
                  Do jeito certo
                </span>
                <p className="text-sm font-bold uppercase tracking-widest text-paper/70">
                  Com a Woofi
                </p>
                <ul className="mt-5 space-y-4">
                  {comWoofi.map((item) => (
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
                          stroke="#9EA1F5"
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

      {/* ── Portfólio da agência ────────────────────────────────────────── */}
      <section id="portfolio" className="px-5 pb-24 sm:px-8 md:pb-36">
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
                eyebrow="Portfólio completo"
                title="O detalhe que faltava na sua entrega"
                sub="Com poucos cliques, a sua agência passa a oferecer conectividade global como parte natural do pacote de viagem:"
              />
            </Reveal>

            <ul className="mt-10 space-y-6">
              {portfolioItems.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 0.1} className="flex items-start gap-4">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-brand font-display text-sm font-bold text-white">
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
