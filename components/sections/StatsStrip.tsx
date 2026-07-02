import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

// PLACEHOLDER: ajuste os números reais em um só lugar aqui
const stats = [
  { value: 190, suffix: "+", label: "destinos cobertos" },
  { value: 12000, suffix: "+", label: "intercambistas conectados" },
  { value: 4.9, decimals: 1, label: "avaliação média" },
  { static: "24h", label: "suporte em português" },
];

export function StatsStrip() {
  return (
    <section aria-label="Números da Woofi" className="px-5 py-10 sm:px-8">
      <Reveal>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-10 rounded-[2.5rem] bg-brand px-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {"static" in s && s.static ? (
                  s.static
                ) : (
                  <Counter to={s.value!} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
                )}
              </p>
              <p className="mt-2 text-sm font-semibold text-ink/70">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <p className="mx-auto mt-3 w-full max-w-6xl text-right text-[11px] text-muted">
        *números ilustrativos — edite em <code>components/sections/StatsStrip.tsx</code>
      </p>
    </section>
  );
}
