import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { WhyWoofi } from "@/components/sections/WhyWoofi";
import { DarkBlock } from "@/components/sections/DarkBlock";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Destinations } from "@/components/sections/Destinations";
import { Manifesto } from "@/components/sections/Manifesto";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { FAQ } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Woofi",
        url: SITE_URL,
        description:
          "Chip e eSIM internacional para intercambistas: conectividade garantida antes mesmo do avião pousar.",
        logo: `${SITE_URL}/images/hero-por-do-sol.jpg`,
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <WhyWoofi />
        <DarkBlock />
        <HowItWorks />
        <Destinations />
        <Manifesto />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
