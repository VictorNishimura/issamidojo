import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { trainingGroups } from "@/data/siteData";

export function Training() {
  return (
    <section id="treinamentos" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Para quem é"
            title="Um dojo. Diferentes caminhos."
            subtitle="Não importa sua idade ou experiência. O treinamento começa onde você está."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainingGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <Card className="h-full rounded-sm border-border bg-surface transition-colors hover:border-primary/60">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <span aria-hidden="true" className="h-px w-10 bg-primary" />
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight">
                    {group.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
