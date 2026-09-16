import { User } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { leaders } from "@/data/siteData";

export function Leadership() {
  return (
    <section id="lideranca" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading label="Liderança" title="Quem está à frente" />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-16">
          {leaders.map((leader, i) => (
            <Reveal key={leader.id} delay={i * 120}>
              <article className="group">
                <div className="relative max-w-md overflow-hidden rounded-sm border border-border bg-surface-2">
                  {leader.photo ? (
                    <img
                      src={leader.photo}
                      alt={`${leader.title} ${leader.name}`}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                      <User className="size-8" aria-hidden="true" />
                      <span className="font-display text-[0.65rem] uppercase tracking-[0.25em]">
                        Fotografia em breve
                      </span>
                    </div>
                  )}
                </div>
                <Badge className="mt-6 rounded-sm bg-primary font-display text-[0.65rem] uppercase tracking-[0.25em] text-primary-foreground">
                  {leader.title}
                </Badge>
                <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
                  {leader.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {leader.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
