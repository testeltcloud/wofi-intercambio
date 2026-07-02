import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CTA_URL } from "@/lib/site";

const cards = [
  {
    title: "Conectado desde a chegada",
    text: "Desembarque, ative o chip e avise a família que você chegou bem, sem estresse.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 21h18M5.5 17.5 3 10l2.4.8L8 13l8.2-6.6a1.8 1.8 0 0 1 2.4 2.7L12 15.5l1.2 3.4-2.5-.6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Planos flexíveis e recargas fáceis",
    text: "Opções que se adaptam à duração e ao bolso de quem vai estudar ou trabalhar fora.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7h9M4 12h16M4 17h12"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <circle cx="17" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="9" cy="17" r="2.6" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    ),
  },
  {
    title: "Suporte 24h em português",
    text: "Deu qualquer dúvida? Nossa equipe está pronta para ajudar a qualquer hora, de qualquer lugar do mundo.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 12a8 8 0 1 1 16 0m-16 0v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 18.5c0 1.4-2.2 2.5-5 2.5"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function WhyWoofi() {
  return (
    <section id="vantagens" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Por que a Woofi"
            title="Por que escolher a Woofi para o seu intercâmbio?"
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1} className="h-full">
              <article className="group h-full rounded-[2rem] border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/8">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  {card.icon}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold leading-snug">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-muted">
              Não fique na mão no momento mais importante da sua jornada. Viaje conectado e foque
              apenas no que importa:{" "}
              <strong className="font-semibold text-ink">
                viver a sua melhor experiência fora.
              </strong>
            </p>
            <div className="mt-8">
              <Button href={CTA_URL} external>
                Garantir minha conexão
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
