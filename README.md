# Woofi — Landing Page para Agências (eSIM internacional)

Landing page em **Next.js 16** (App Router, Turbopack) para a Woofi: plataforma consolidadora de **eSIM internacional que agências de viagem revendem** e ganham comissão em cada ativação (público **B2B**). Cobertura em mais de 165 países, sem estoque e sem logística.

## Como rodar

```bash
npm install
npm run dev        # desenvolvimento → http://localhost:3000
npm run build      # build de produção
npm start          # servir a build
```

Deploy recomendado: [Vercel](https://vercel.com/new) (basta importar o repositório — zero config).

## Stack

- **Next.js 16.2** + React 19 + TypeScript
- **Tailwind CSS 4** (tokens da marca em `app/globals.css`)
- **Motion 12** (ex-Framer Motion) com `LazyMotion` — só ~18kb de JS de animação
- **Lenis** — scroll suave (desligado automaticamente para quem prefere menos movimento)
- Fontes: Bricolage Grotesque (títulos) + Inter (texto) via `next/font` (zero CLS)

## Performance (PageSpeed)

- Página 100% estática (SSG), sem JS bloqueante de terceiros
- Todas as imagens em `next/image` com AVIF/WebP, `blur` placeholder e `priority` só no hero
- Fotos já otimizadas (44MB → 4,7MB em `public/images`; originais em `fotos-originais/`)
- Animações só com `transform/opacity` e respeito a `prefers-reduced-motion`
- SEO: metadata completa, Open Graph, JSON-LD (Organization + FAQPage), `robots.txt` e `sitemap.xml`

## Onde editar cada coisa

| O quê | Arquivo |
| --- | --- |
| Link do CTA (WhatsApp / cadastro de agência) e domínio final | `lib/site.ts` |
| Cobertura por regiões ("A Solução") | `components/sections/Coverage.tsx` |
| Benefícios ("O que muda para sua agência") | `components/sections/WhyWoofi.tsx` |
| Perguntas do FAQ (atualiza o JSON-LD junto) | `lib/faq.ts` |
| Números da faixa de credibilidade | `components/sections/StatsStrip.tsx` |
| Agências parceiras (logos) | `components/sections/Partners.tsx` |
| Textos das seções | `components/sections/*.tsx` |
| Cores/fontes da marca | `app/globals.css` (bloco `@theme`) |

## ⚠️ Placeholders para substituir antes de publicar

1. **CTA de conversão** — hoje todos os botões ("Cadastre sua Agência", "Falar com um especialista") apontam para o **WhatsApp** (`lib/site.ts`, `WHATSAPP_PHONE` + `waLink`). Troque pela URL real de cadastro/plataforma de agências.
2. **`SITE_URL`** em `lib/site.ts` — domínio final.
3. **Agências parceiras** — logos e nomes ilustrativos em `components/sections/Partners.tsx`; troque pelos parceiros reais (com autorização).
4. **Números da StatsStrip** — ilustrativos (só "165+ países" é oficial).
5. **Foto da seção Manifesto** — configure a constante `foto` no topo de `components/sections/Manifesto.tsx`.
6. **E-mail e Instagram** no rodapé — `components/site/Footer.tsx`.
7. Depois de trocar tudo, remova os avisos "*ilustrativos" das seções.

## Estrutura

```
app/            layout (fontes/SEO), page, globals.css, robots, sitemap
components/
  sections/     Hero, StatsStrip, WhyWoofi (Benefícios), DarkBlock (problema+portfólio),
                HowItWorks, Coverage (A Solução), Manifesto, Partners, Faq, FinalCta
  site/         Header, Footer, Logo
  motion/       MotionRoot (Lenis+LazyMotion), Reveal, Parallax, Counter
  ui/           Button, SectionHeading, Curve, PhotoPlaceholder
lib/            site.ts, faq.ts, images.ts (fotos + blur gerados)
public/images/  fotos otimizadas · fotos-originais/ = backups em alta
```
