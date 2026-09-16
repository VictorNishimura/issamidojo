import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pillars } from "@/data/siteData";

export function Shinkyokushin() {
  return (
    <section id="shinkyokushin" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Karatê de Contato"
            title="Shinkyokushin"
            subtitle="O Shinkyokushin é uma modalidade de Karatê de Contato que valoriza disciplina, técnica, preparação física, respeito e espírito de superação."
          />
        </Reveal>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <li key={pillar.title} className="bg-surface">
              <Reveal delay={i * 80} className="h-full">
                <div className="group flex h-full flex-col justify-between gap-10 p-6 transition-colors hover:bg-surface-2 sm:p-8">
                  <span className="font-display text-sm tracking-[0.25em] text-primary">
                    {pillar.index}
                  </span>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-tight sm:text-xl">
                    {pillar.title}
                  </h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
