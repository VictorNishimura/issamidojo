import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/siteData";
import heroImage from "@/assets/hero-karate.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-border"
    >
      <img
        src={heroImage}
        alt="Praticante de Karatê de Contato em posição de golpe, sob luz dramática"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px bg-primary/60 sm:left-8"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
          <span className="text-foreground">Issami Dojo</span>
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          <span>Karatê de Contato</span>
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          <span>Shinkyokushin</span>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
          Disciplina.
          <br />
          Respeito.
          <br />
          <span className="text-primary">Superação.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mais de 20 anos de experiência no Japão formando praticantes através do Karatê de Contato
          Shinkyokushin.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 font-display uppercase tracking-[0.15em]">
            <a href={site.whatsapp.link} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Fale pelo WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-foreground/40 bg-transparent font-display uppercase tracking-[0.15em] hover:bg-foreground/10"
          >
            <a href="#o-dojo">Conheça o dojo</a>
          </Button>
        </div>

        <a
          href="#o-dojo"
          aria-label="Rolar para a próxima seção"
          className="mt-14 inline-flex items-center gap-3 font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4 animate-bounce text-primary" aria-hidden="true" />
          Role para descobrir
        </a>
      </div>
    </section>
  );
}
