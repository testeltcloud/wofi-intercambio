// ── Configurações gerais do site ──────────────────────────────────────────
// Edite aqui os links de conversão e dados de contato da Woofi.

export const SITE_URL = "https://www.woofi.com.br"; // PLACEHOLDER: domínio final

// PLACEHOLDER: troque pelo WhatsApp/checkout real da Woofi
export const CTA_URL =
  "https://wa.me/5511999999999?text=Quero%20garantir%20minha%20conex%C3%A3o%20no%20interc%C3%A2mbio";

export const NAV_LINKS = [
  { label: "Vantagens", href: "#vantagens" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Destinos", href: "#destinos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

// PLACEHOLDER: números reais da Woofi (faixa de credibilidade)
export const STATS = [
  { value: 190, suffix: "+", label: "destinos cobertos" },
  { value: 12000, suffix: "+", label: "intercambistas conectados" },
  { value: 4.9, decimals: 1, suffix: "", label: "avaliação média dos alunos" },
  { value: null, static: "24h", label: "suporte em português" },
] as const;
