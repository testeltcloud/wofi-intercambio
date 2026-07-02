import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ } from "@/lib/faq";

export function Faq() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Perguntas de quem está de malas prontas"
            center
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="faq group rounded-3xl border border-line bg-white px-6 py-2 transition-colors open:border-brand-deep">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-bold">
                  {item.q}
                  <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-mist text-ink">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="pb-6 leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
