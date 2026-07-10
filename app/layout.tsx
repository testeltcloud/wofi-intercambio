import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Woofi — Plataforma de eSIM internacional para agências de viagem",
    template: "%s | Woofi",
  },
  description:
    "Sua agência vende eSIM internacional com cobertura em mais de 165 países, conecta os viajantes e ganha comissão em cada ativação. Zero estoque, zero risco, cadastro gratuito.",
  keywords: [
    "eSIM para agências",
    "conectividade para agências de viagem",
    "revenda de eSIM internacional",
    "eSIM internacional",
    "plataforma de conectividade",
    "Woofi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Woofi",
    title: "Woofi — eSIM internacional para a sua agência vender",
    description:
      "A viagem é do passageiro. A conectividade é nossa. Sua agência distribui eSIM em 165+ países e gera comissão em cada ativação — sem estoque e sem logística.",
    images: [{ url: "/images/hero-por-do-sol.jpg", width: 1650, height: 2200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woofi — eSIM internacional para a sua agência vender",
    description:
      "Sua agência vende eSIM em 165+ países e ganha comissão em cada ativação — zero estoque, zero risco.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#101318",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${inter.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
