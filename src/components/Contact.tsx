import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/siteData";

export function Contact() {
  return (
    <section id="contato" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Contato"
            title="Seu primeiro passo começa aqui."
            subtitle="Entre em contato com o Issami Dojo e saiba mais sobre os treinamentos."
          />
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal className="bg-surface">
            <a
              href={site.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-surface-2 sm:p-10"
            >
              <span className="inline-flex items-center gap-3 font-display text-[0.7rem] uppercase tracking-[0.3em] text-primary">
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </span>
              <span className="flex items-end justify-between gap-4">
                <span className="font-display text-2xl uppercase tracking-tight sm:text-4xl">
                  {site.whatsapp.display}
                </span>
                <ArrowUpRight
                  className="size-6 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>

          <Reveal delay={120} className="bg-surface">
            <a
              href={site.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-surface-2 sm:p-10"
            >
              <span className="inline-flex items-center gap-3 font-display text-[0.7rem] uppercase tracking-[0.3em] text-primary">
                <Instagram className="size-4" aria-hidden="true" />
                Instagram
              </span>
              <span className="flex items-end justify-between gap-4">
                <span className="font-display text-2xl uppercase tracking-tight sm:text-4xl">
                  {site.instagram.handle}
                </span>
                <ArrowUpRight
                  className="size-6 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
