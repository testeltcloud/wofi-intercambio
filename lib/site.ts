// ── Configurações gerais do site ──────────────────────────────────────────
// Edite aqui os links de conversão e dados de contato da Woofi.

export const SITE_URL = "https://www.woofi.com.br"; // PLACEHOLDER: domínio final

// PLACEHOLDER: troque pelo número real de WhatsApp da Woofi
export const WHATSAPP_PHONE = "5511999999999";

/** Monta um link de WhatsApp com mensagem pré-preenchida. */
export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

// PLACEHOLDER: troque pela URL real de cadastro/plataforma de agências.
// Hoje aponta para o WhatsApp comercial.
export const CTA_URL = waLink("Quero cadastrar minha agência na Woofi");

export const NAV_LINKS = [
  { label: "A Solução", href: "#cobertura" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
] as const;

// PLACEHOLDER: números reais da Woofi (faixa de credibilidade para agências)
export const STATS = [
  { value: 165, suffix: "+", label: "países com cobertura" },
  { value: null, static: "0", label: "estoque, logística ou risco" },
  { value: null, static: "24h", label: "suporte para a sua agência" },
  { value: null, static: "Grátis", label: "cadastro, sem taxa de adesão" },
] as const;
