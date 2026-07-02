import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { img } from "@/lib/images";
import { FAQ } from "@/lib/faq";

export function Faq() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Perguntas de quem está de malas prontas"
              sub="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp — respondemos em português, a qualquer hora."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 hidden overflow-hidden rounded-[2.5rem] rounded-bl-[6rem] lg:block">
              <Image
                src={img.porDoSolBalsa.src}
                alt={img.porDoSolBalsa.alt}
                width={img.porDoSolBalsa.width}
                height={img.porDoSolBalsa.height}
                placeholder="blur"
                blurDataURL={img.porDoSolBalsa.blurDataURL}
                sizes="(min-width: 1024px) 400px, 0px"
                className="h-[420px] w-full object-cover object-[center_30%]"
              />
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
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
