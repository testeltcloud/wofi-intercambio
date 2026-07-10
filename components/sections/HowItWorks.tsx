import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/motion/Reveal";
import { img } from "@/lib/images";

const steps = [
  {
    number: "01",
    title: "Sua agência acessa a plataforma",
    text: "Cadastro gratuito e acesso imediato ao painel com todos os destinos e planos disponíveis.",
    image: img.painelPartidas,
  },
  {
    number: "02",
    title: "Você oferece no fechamento",
    text: "Antes do embarque — junto ao seguro e ao briefing final — a conectividade entra como parte natural do pacote.",
    image: img.casalCelular,
  },
  {
    number: "03",
    title: "Cliente ativa, agência lucra",
    text: "O cliente ativa o eSIM direto pelo celular. Você recebe a sua margem. Sem estoque, sem logística.",
    image: img.produtoWoofi,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title={
              <>
                Três passos,{" "}
                <span className="relative inline-block">
                  nenhuma complexidade
                  <svg
                    viewBox="0 0 220 14"
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 w-full text-brand"
                  >
                    <path
                      d="M4 10 C60 2 160 2 216 8"
                      stroke="currentColor"
                      strokeWidth="7"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </>
            }
            sub="Do cadastro à comissão: a conectividade entra na sua venda sem atrito."
            center
          />
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* linha pontilhada conectando os passos */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 60"
            fill="none"
            className="absolute -top-8 left-0 hidden w-full text-ink/20 md:block"
          >
            <path
              d="M60 40 C 260 0, 420 60, 520 30 S 820 10, 950 38"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="1 12"
            />
          </svg>

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12} className="h-full">
              <article className="group flex h-full flex-col rounded-[2rem] border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/8">
                {step.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes="(min-width: 768px) 360px, 90vw"
                      placeholder="blur"
                      blurDataURL={step.image.blurDataURL}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3.5 py-1 font-display text-sm font-bold text-ink backdrop-blur">
                      {step.number}
                    </span>
                  </div>
                ) : (
                  <div className="relative">
                    <PhotoPlaceholder
                      ratioClass="aspect-[4/3]"
                      title="Foto do produto Woofi"
                      description="Chip físico com a embalagem da Woofi ou celular mostrando o QR code de ativação do eSIM. Fundo limpo e claro."
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3.5 py-1 font-display text-sm font-bold text-ink backdrop-blur">
                      {step.number}
                    </span>
                  </div>
                )}
                <h3 className="mt-6 px-3 font-display text-xl font-bold">{step.title}</h3>
                <p className="mb-3 mt-2 px-3 leading-relaxed text-muted">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
