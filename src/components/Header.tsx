import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, site } from "@/data/siteData";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-shinkyokushin.svg.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 font-display text-lg font-semibold uppercase tracking-[0.25em] sm:text-xl"
          aria-label="Issami Dojo — voltar ao início"
        >
          <img src={logoAsset.url} alt="" aria-hidden="true" width={36} height={36} className="size-9 shrink-0" />
          <span>Issami Dojo</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={cn(
                "relative py-1 font-display text-xs uppercase tracking-[0.2em] transition-colors",
                active === link.href
                  ? "text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden font-display uppercase tracking-[0.15em] sm:inline-flex">
            <a href={site.whatsapp.link} target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-border bg-background p-0">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="flex h-16 items-center justify-between border-b border-border px-5">
                <span className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.25em]">
                  <img src={logoAsset.url} alt="" aria-hidden="true" width={32} height={32} className="size-8 shrink-0" />
                  Issami Dojo
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" />
                </Button>
              </div>
              <nav aria-label="Navegação mobile" className="flex flex-col px-5 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 font-display text-base uppercase tracking-[0.2em] text-foreground/90 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-8 h-12 font-display uppercase tracking-[0.15em]">
                  <a href={site.whatsapp.link} target="_blank" rel="noopener noreferrer">
                    Fale conosco
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
