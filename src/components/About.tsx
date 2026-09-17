import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Separator } from "@/components/ui/separator";
import { stats } from "@/data/siteData";
import dojoImage from "@/assets/dojo-interior.jpg";

export function About() {
  return (
    <section id="o-dojo" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading
            label="O Dojo"
            title={
              <>
                MAIS DE 25 ANOS
                <br />
                DE EXPERIÊNCIA
              </>
            }
            subtitle="O Issami Dojo carrega uma trajetória construída através da dedicação às artes marciais e de mais de 25 anos de experiência."
          />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Essa vivência orienta a forma como o treino acontece aqui: fundamentos sólidos,
            constância e um ambiente de respeito, onde cada praticante evolui no próprio ritmo.
          </p>

          <Separator className="my-10" />

          <dl className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <dt className="font-display text-xl font-semibold uppercase leading-tight text-primary sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</dd>
              </Reveal>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 size-20 border-l border-t border-primary/70 sm:-left-5 sm:-top-5"
          />
          <img
            src={dojoImage}
            alt="Interior de um dojo tradicional de karatê iluminado por luz natural"
            width={1280}
            height={1600}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
