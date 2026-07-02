// ── Destinos populares de intercâmbio ─────────────────────────────────────
// PLACEHOLDER: os preços abaixo são ilustrativos. Edite com os valores reais.

export type Destino = {
  flag: string;
  pais: string;
  detalhe: string;
  preco: string;
};

export const DESTINOS: Destino[] = [
  { flag: "🇮🇪", pais: "Irlanda", detalhe: "Dublin, Cork, Galway", preco: "US$ 19" },
  { flag: "🇨🇦", pais: "Canadá", detalhe: "Toronto, Vancouver", preco: "US$ 21" },
  { flag: "🇦🇺", pais: "Austrália", detalhe: "Sydney, Melbourne", preco: "US$ 23" },
  { flag: "🇺🇸", pais: "Estados Unidos", detalhe: "Costa a costa", preco: "US$ 21" },
  { flag: "🇲🇹", pais: "Malta", detalhe: "St. Julian's, Sliema", preco: "US$ 17" },
  { flag: "🇬🇧", pais: "Reino Unido", detalhe: "Londres, Manchester", preco: "US$ 19" },
  { flag: "🇪🇸", pais: "Espanha", detalhe: "Madri, Barcelona", preco: "US$ 17" },
  { flag: "🇳🇿", pais: "Nova Zelândia", detalhe: "Auckland, Queenstown", preco: "US$ 23" },
];
