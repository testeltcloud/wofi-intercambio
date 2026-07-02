# Woofi — Landing Page de Intercâmbio

Landing page em **Next.js 16** (App Router, Turbopack) para a Woofi: chip e eSIM internacional com foco em intercambistas.

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
| Link do CTA (WhatsApp/checkout) e domínio final | `lib/site.ts` |
| Destinos e preços | `lib/destinos.ts` |
| Perguntas do FAQ (atualiza o JSON-LD junto) | `lib/faq.ts` |
| Números da faixa de credibilidade | `components/sections/StatsStrip.tsx` |
| Depoimentos | `components/sections/Testimonials.tsx` |
| Textos das seções | `components/sections/*.tsx` |
| Cores/fontes da marca | `app/globals.css` (bloco `@theme`) |

## ⚠️ Placeholders para substituir antes de publicar

1. **`lib/site.ts`** — número de WhatsApp e `SITE_URL` (domínio real)
2. **Foto do produto** — passo 02 de "Como funciona" tem uma caixa "FOTO AQUI" (chip/embalagem Woofi ou QR do eSIM). Troque o `PhotoPlaceholder` por `<Image>` em `components/sections/HowItWorks.tsx`
3. **Foto da seção Manifesto** (recorte orgânico) — configure a constante `foto` no topo de `components/sections/Manifesto.tsx`
3. **Preços dos destinos** — valores ilustrativos em `lib/destinos.ts`
4. **Números da StatsStrip** — ilustrativos
5. **Depoimentos** — ilustrativos; troque por reais (com autorização de uso)
6. **E-mail e Instagram** no rodapé — `components/site/Footer.tsx`
7. Depois de trocar tudo, remova os avisos "*valores ilustrativos" das seções

## Estrutura

```
app/            layout (fontes/SEO), page, globals.css, robots, sitemap
components/
  sections/     Hero, MarqueeGallery, StatsStrip, WhyWoofi, DarkBlock (roaming+rotina),
                HowItWorks, Destinations, Testimonials, Faq, FinalCta
  site/         Header, Footer, Logo
  motion/       MotionRoot (Lenis+LazyMotion), Reveal, Parallax, Counter
  ui/           Button, SectionHeading, Curve, PhotoPlaceholder
lib/            site.ts, destinos.ts, faq.ts, images.ts (fotos + blur gerados)
public/images/  fotos otimizadas · fotos-originais/ = backups em alta
```
