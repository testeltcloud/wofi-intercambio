import { Logo } from "./Logo";
import { CTA_URL, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-16 text-paper sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-4 leading-relaxed text-muted-dark">
              Chip e eSIM internacional para quem vai estudar, trabalhar e viver o mundo. Pouse
              conectado no seu intercâmbio.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-dark">Navegue</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-paper/80 transition-colors hover:text-brand-bright">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-dark">Contato</p>
            <ul className="mt-4 space-y-2.5 text-paper/80">
              <li>
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-bright">
                  WhatsApp — fale com a gente
                </a>
              </li>
              {/* PLACEHOLDER: e-mail e redes sociais reais */}
              <li>
                <a href="mailto:contato@woofi.com.br" className="transition-colors hover:text-brand-bright">
                  contato@woofi.com.br
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-bright">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ink-line pt-6 text-sm text-muted-dark md:flex-row">
          <p>© {new Date().getFullYear()} Woofi. Todos os direitos reservados.</p>
          <p>Valores, números e depoimentos exibidos nesta página são ilustrativos.</p>
        </div>
      </div>
    </footer>
  );
}
