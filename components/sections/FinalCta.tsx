import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { img } from "@/lib/images";
import { CTA_URL, waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="cta" className="px-5 pb-20 sm:px-8 md:pb-28">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[3rem] bg-ink px-6 py-20 text-center md:py-28">
        {/* foto de fundo */}
        <Image
          src={img.aviaoMapaGiz.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1280px) 1152px, 95vw"
          placeholder="blur"
          blurDataURL={img.aviaoMapaGiz.blurDataURL}
          className="object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40"
        />

        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <span className="inline-block rounded-full bg-brand/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-bright">
              Cadastro gratuito para agências
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Está na hora de entregar a <span className="text-brand-bright">experiência completa</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-muted-dark">
              Cadastro gratuito, sem taxa de adesão e sem exclusividade. Adicione conectividade
              global à sua prateleira e gere comissão em cada viagem que a sua agência já vende.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={CTA_URL} external>
                Cadastre sua Agência
              </Button>
              <Button href={waLink("Quero falar com um especialista da Woofi")} variant="outline-light" external>
                Falar com um especialista
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
