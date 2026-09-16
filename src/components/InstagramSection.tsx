import { ExternalLink, Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/siteData";

export function InstagramSection() {
  return (
    <section id="instagram" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            label="Instagram"
            title="Acompanhe o Issami Dojo"
            subtitle="Treinos, eventos, competições e momentos do nosso dojo."
          />
          <p className="mt-6 font-display text-2xl uppercase tracking-[0.2em] text-primary sm:text-3xl">
            {site.instagram.handle}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Button asChild size="lg" className="h-12 font-display uppercase tracking-[0.15em]">
            <a href={site.instagram.link} target="_blank" rel="noopener noreferrer">
              <Instagram className="size-4" aria-hidden="true" />
              Ver no Instagram
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
