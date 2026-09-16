import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/siteData";

const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`;
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery,
)}&output=embed`;

export function Location() {
  return (
    <section id="localizacao" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading label="Localização" title="Venha conhecer o Issami Dojo" />
          <address className="mt-8 not-italic">
            <p className="flex items-start gap-3 font-display text-xl uppercase tracking-tight sm:text-2xl">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}
              </span>
            </p>
            <p className="mt-4 pl-8 text-sm text-muted-foreground sm:text-base">
              {site.address.reference}
            </p>
          </address>
          <Button asChild size="lg" className="mt-8 h-12 font-display uppercase tracking-[0.15em]">
            <a href={mapsSearch} target="_blank" rel="noopener noreferrer">
              <Navigation className="size-4" aria-hidden="true" />
              Como chegar
            </a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Mapa com a localização do Issami Dojo"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full sm:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
