import Image from "next/image";
import { img } from "@/lib/images";

const photos = [
  { ...img.roteiroTablet, rotate: "-rotate-2" },
  { ...img.porDoSolBalsa, rotate: "rotate-1" },
  { ...img.casalCelular, rotate: "-rotate-1" },
  { ...img.mapaNasMaos, rotate: "rotate-2" },
  { ...img.fotoCidadeCelular, rotate: "-rotate-2" },
  { ...img.globoVintage, rotate: "rotate-1" },
  { ...img.planejamentoMapa, rotate: "-rotate-1" },
  { ...img.mapaEstacaoTrem, rotate: "rotate-2" },
  { ...img.globoNaMao, rotate: "-rotate-2" },
  { ...img.planejamentoMapa2, rotate: "rotate-1" },
];

/** Faixa de fotos em movimento contínuo (CSS puro, pausa no hover). */
export function MarqueeGallery() {
  return (
    <section aria-label="Momentos de intercambistas pelo mundo" className="overflow-hidden pb-6 pt-2">
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
        A vida de quem ganhou o mundo
      </p>
      <div className="marquee-track flex w-max animate-marquee gap-5 pr-5">
        {[0, 1].map((copy) =>
          photos.map((p, i) => (
            <div
              key={`${copy}-${i}`}
              aria-hidden={copy === 1}
              className={`relative h-52 w-40 shrink-0 overflow-hidden rounded-3xl sm:h-64 sm:w-48 ${p.rotate}`}
            >
              <Image
                src={p.src}
                alt={copy === 0 ? p.alt : ""}
                fill
                sizes="192px"
                placeholder="blur"
                blurDataURL={p.blurDataURL}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )),
        )}
      </div>
    </section>
  );
}
