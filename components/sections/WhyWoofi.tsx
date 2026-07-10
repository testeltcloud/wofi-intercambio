import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const beneficios = [
  {
    title: "Margem garantida",
    text: "Margem atrativa em cada plano de conectividade vendido pela sua agência.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Ampla cobertura",
    text: "Cobertura consolidada em mais de 165 países, num só lugar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.9" />
        <path
          d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "eSIM prático",
    text: "Ativado pelo próprio cliente, direto no celular, sem entrega física.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.9" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Risco zero",
    text: "Zero estoque, zero risco operacional e zero custo de entrada.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Plataforma inteligente",
    text: "Gestão de vendas e acompanhamento das ativações em tempo real.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.9" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.9" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.9" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    ),
  },
  {
    title: "Suporte 24h",
    text: "A sua agência não precisa intermediar atendimentos técnicos — a Woofi cuida disso.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 12a8 8 0 1 1 16 0m-16 0v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M17 18.5c0 1.4-2.2 2.5-5 2.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhyWoofi() {
  return (
    <section id="beneficios" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Vantagens"
            title="O que muda para a sua agência?"
            sub="Um novo produto de alta margem na sua prateleira — sem estoque, sem logística e sem complexidade técnica."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 0.08} className="h-full">
              <article className="group h-full rounded-[2rem] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-deep hover:shadow-xl hover:shadow-ink/8">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand-deep transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  {card.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug">{card.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
