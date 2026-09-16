import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Leadership } from "@/components/Leadership";
import { Shinkyokushin } from "@/components/Shinkyokushin";
import { Training } from "@/components/Training";
import { Gallery } from "@/components/Gallery";
import { InstagramSection } from "@/components/InstagramSection";
import { Schedule } from "@/components/Schedule";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";

const title = "Issami Dojo | Karatê de Contato Shinkyokushin em Presidente Prudente";
const description =
  "Conheça o Issami Dojo, academia de Karatê de Contato Shinkyokushin em Presidente Prudente. Mais de 20 anos de experiência no Japão. Treinamentos para todas as idades.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Issami Dojo",
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Dona Militânia, 319",
            addressLocality: "Presidente Prudente",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          telephone: "+5518996568231",
          sameAs: ["https://www.instagram.com/issamidojo/"],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Shinkyokushin />
        <Training />
        <Leadership />
        <Gallery />
        <InstagramSection />
        <Schedule />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
