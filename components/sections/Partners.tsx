import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

// PLACEHOLDER: troque pelos nomes/logos das agências parceiras reais.
const agencias = [
  {
    nome: "Horizonte Viagens",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18h16M6 18a6 6 0 0 1 12 0M12 3v3M4.5 8.5l1.5 1.4M19.5 8.5 18 9.9M2.5 14H4M20 14h1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nome: "Rota Global",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15.8 8.2 13.7 14.1 7.9 16.2 10 10.3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nome: "Mundo Aberto",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2.8 12h18.4M12 2.8a14 14 0 0 1 0 18.4 14 14 0 0 1 0-18.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nome: "Alta Estação",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.5 21.5a.5.5 0 0 0 .94-.02l6.3-18.4a.5.5 0 0 0-.64-.64L2.7 8.74a.5.5 0 0 0-.02.94l7.7 3.08a2 2 0 0 1 1.1 1.1zM21.6 2.6 10.9 13.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nome: "Ponte Nova Turismo",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 3 8.5V10h18V8.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    nome: "Vega Viagens",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 17.6 6.7 19.6l1.1-6L3.4 9.4l6-.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/** Faixa de prova social B2B: agências que já revendem a Woofi. */
export function Partners() {
  return (
    <section id="parceiros" className="px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Parceiros"
            title="Agências que já entregam a experiência completa"
            sub="Operações de todos os tamanhos usam a Woofi para transformar conectividade em uma nova fonte de receita."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-3">
            {agencias.map((a) => (
              <div
                key={a.nome}
                className="group flex items-center justify-center gap-3 bg-paper px-6 py-9 text-ink/45 transition-colors duration-300 hover:text-brand-deep"
              >
                {a.icon}
                <span className="font-display text-lg font-bold tracking-tight">{a.nome}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-4 text-center text-[11px] text-muted">
          *logos e nomes ilustrativos — troque pelas agências parceiras reais em{" "}
          <code>components/sections/Partners.tsx</code>.
        </p>
      </div>
    </section>
  );
}
