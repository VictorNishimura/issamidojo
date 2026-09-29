import { site } from "@/data/siteData";
import logoAsset from "@/assets/logo-shinkyokushin.png.asset.json";

const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`;

export function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-flex items-center gap-3 font-display text-xl font-semibold uppercase tracking-[0.25em]">
            <img src={logoAsset.url} alt="" aria-hidden="true" width={48} height={48} className="size-12 shrink-0" loading="lazy" />
            <span>ISSAMI DOJO</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{site.modality}</p>
          <p className="text-sm text-muted-foreground">{site.city}</p>
        </div>

        <nav aria-label="Links do rodapé" className="flex flex-wrap gap-6">
          <a
            href={site.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
          >
            Instagram
          </a>
          <a
            href={site.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
          <a
            href={mapsSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
          >
            Localização
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-border px-5 pt-6 sm:px-8">
        <p className="text-xs text-muted-foreground">
          © 2026 Issami Dojo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
