import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

// PLACEHOLDER: substitua por depoimentos reais (e fotos, se tiver autorização)
const depoimentos = [
  {
    quote:
      "Aterrissei, liguei o celular e já chamei o transporte pro alojamento. Minha mãe recebeu mensagem antes mesmo de eu pegar as malas.",
    name: "Marina S.",
    detail: "Intercâmbio em Dublin, Irlanda",
    initials: "MS",
    tone: "bg-brand text-white",
  },
  {
    quote:
      "Achei que roaming era a única opção. Com a Woofi paguei uma fração do valor e não tive nenhuma surpresa na fatura.",
    name: "Pedro A.",
    detail: "Estudo e trabalho em Toronto, Canadá",
    initials: "PA",
    tone: "bg-ink text-brand-bright",
  },
  {
    quote:
      "O suporte em português me salvou quando troquei de celular no meio do curso. Resolveram comigo em minutos, de madrugada.",
    name: "Júlia R.",
    detail: "Curso de inglês em Malta",
    initials: "JR",
    tone: "bg-mist text-ink",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6Z"
            className="fill-brand-deep"
          />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title="Quem já desembarcou online"
            sub="Histórias de intercambistas que escolheram começar a jornada conectados.*"
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-[2rem] border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/8">
                <Stars />
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink">
                  “{d.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    className={`grid size-11 place-items-center rounded-full font-display text-sm font-bold ${d.tone}`}
                    aria-hidden="true"
                  >
                    {d.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{d.name}</p>
                    <p className="text-sm text-muted">{d.detail}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
