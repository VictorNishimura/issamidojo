import { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery, type GalleryItem } from "@/data/siteData";
import { cn } from "@/lib/utils";

const spanClass: Record<NonNullable<GalleryItem["span"]> | "normal", string> = {
  tall: "sm:row-span-2 aspect-[3/4] sm:aspect-auto sm:min-h-[26rem]",
  wide: "sm:col-span-2 aspect-[16/10]",
  normal: "aspect-[4/3]",
};

export function Gallery() {
  const withPhoto = gallery.filter((item) => Boolean(item.src));
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex !== null ? withPhoto[openIndex] : undefined;

  const step = (delta: number) => {
    setOpenIndex((prev) =>
      prev === null ? prev : (prev + delta + withPhoto.length) % withPhoto.length,
    );
  };

  return (
    <section id="galeria" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Galeria"
            title="Dentro do dojo"
            subtitle="Treinos, atletas, competições e o dia a dia do Issami Dojo."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(0,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => {
            const photoIndex = withPhoto.findIndex((p) => p.id === item.id);
            const classes = cn(
              "group relative w-full overflow-hidden rounded-sm border border-border bg-surface",
              spanClass[item.span ?? "normal"],
            );

            if (!item.src) {
              return (
                <Reveal key={item.id} delay={i * 60} className={cn("h-full", classes)}>
                  <div className="flex size-full flex-col items-center justify-center gap-3 p-6 text-center text-muted-foreground">
                    <ImageIcon className="size-7" aria-hidden="true" />
                    <span className="font-display text-[0.65rem] uppercase tracking-[0.25em]">
                      {item.category}
                    </span>
                    <span className="text-xs">Fotografias reais em breve</span>
                  </div>
                </Reveal>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpenIndex(photoIndex)}
                className={cn(classes, "cursor-pointer")}
                aria-label={`Ampliar imagem: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-left font-display text-[0.65rem] uppercase tracking-[0.25em] text-foreground">
                  {item.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-4xl border-border bg-background p-2 sm:p-4">
          <DialogTitle className="sr-only">{current?.alt ?? "Imagem da galeria"}</DialogTitle>
          {current ? (
            <div className="relative">
              <img src={current.src} alt={current.alt} className="max-h-[80vh] w-full object-contain" />
              {withPhoto.length > 1 ? (
                <div className="mt-3 flex justify-center gap-3">
                  <Button variant="outline" size="icon" aria-label="Imagem anterior" onClick={() => step(-1)}>
                    <ChevronLeft className="size-5" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Próxima imagem" onClick={() => step(1)}>
                    <ChevronRight className="size-5" />
                  </Button>
                </div>
              ) : null}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
