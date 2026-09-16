import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { site } from "@/data/siteData";

export function WhatsAppButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={site.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com o Issami Dojo pelo WhatsApp: ${site.whatsapp.display}`}
          className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/40 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
        >
          <MessageCircle className="size-6" aria-hidden="true" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="hidden sm:block">
        Fale pelo WhatsApp
      </TooltipContent>
    </Tooltip>
  );
}
