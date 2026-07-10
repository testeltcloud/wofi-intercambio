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
    default: "Woofi — Chip e eSIM internacional para o seu intercâmbio",
    template: "%s | Woofi",
  },
  description:
    "Desembarque conectado no seu intercâmbio: eSIM e chip internacional com ativação antes do embarque, preço fixo sem sustos e suporte 24h em português.",
  keywords: [
    "chip internacional",
    "eSIM intercâmbio",
    "chip para intercâmbio",
    "internet no exterior",
    "eSIM viagem",
    "Woofi",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/logobrowser.svg", shortcut: "/logobrowser.svg" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Woofi",
    title: "Woofi — Desembarque conectado no seu intercâmbio",
    description:
      "eSIM e chip internacional para quem vai estudar fora: ativação antes do embarque, preço fixo e suporte 24h em português.",
    images: [{ url: "/images/hero-por-do-sol.jpg", width: 1650, height: 2200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woofi — Desembarque conectado no seu intercâmbio",
    description:
      "eSIM e chip internacional para quem vai estudar fora: ativação antes do embarque, preço fixo e suporte 24h em português.",
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
