import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { img } from "@/lib/images";
import { DESTINOS } from "@/lib/destinos";
import { CTA_URL } from "@/lib/site";

export function Destinations() {
  return (
    <section id="destinos" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl rounded-[3rem] bg-mist px-6 py-14 sm:px-10 md:px-14">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading
                eyebrow="Cobertura"
                title="Os destinos queridinhos do intercâmbio"
                sub="Planos para os países mais procurados por brasileiros — e cobertura em mais de 190 destinos para as suas viagens nos feriados."
              />
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative mt-10 hidden lg:block">
                <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[6rem]">
                  <Parallax strength={22}>
                    <Image
                      src={img.placasDestinos.src}
                      alt={img.placasDestinos.alt}
                      width={img.placasDestinos.width}
                      height={img.placasDestinos.height}
                      placeholder="blur"
                      blurDataURL={img.placasDestinos.blurDataURL}
                      sizes="(min-width: 1024px) 420px, 0px"
                      className="h-auto w-full scale-110 object-cover"
                    />
                  </Parallax>
                </div>
                {/* globo sobreposto */}
                <Parallax strength={44} className="absolute -bottom-8 -left-7 w-36">
                  <div className="overflow-hidden rounded-[1.6rem] border-4 border-mist shadow-2xl shadow-ink/25">
                    <Image
                      src={img.globoNaMao.src}
                      alt={img.globoNaMao.alt}
                      width={img.globoNaMao.width}
                      height={img.globoNaMao.height}
                      placeholder="blur"
                      blurDataURL={img.globoNaMao.blurDataURL}
                      sizes="144px"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </Parallax>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {DESTINOS.map((d, i) => (
                <Reveal key={d.pais} delay={(i % 4) * 0.07}>
                  <a
                    href={CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-deep hover:shadow-lg hover:shadow-ink/8"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl" aria-hidden="true">
                        {d.flag}
                      </span>
                      <div>
                        <p className="font-display font-bold leading-tight">{d.pais}</p>
                        <p className="text-xs text-muted">{d.detalhe}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
                        a partir de
                      </p>
                      <p className="font-display font-bold text-ink group-hover:text-brand-deep">
                        {d.preco}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-6 text-sm text-muted">
                *Valores ilustrativos — edite em <code>lib/destinos.ts</code>. Não achou seu
                destino?{" "}
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-deep"
                >
                  Fale com a gente
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
