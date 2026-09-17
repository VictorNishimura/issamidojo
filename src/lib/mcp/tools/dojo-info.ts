import { defineTool } from "@lovable.dev/mcp-js";
import { site, stats, pillars } from "@/data/siteData";

export default defineTool({
  name: "get_dojo_info",
  title: "Informações do dojo",
  description:
    "Retorna as informações gerais e públicas do Issami Dojo: nome, modalidade, cidade, endereço, WhatsApp, Instagram e os pilares do treinamento.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: site.name,
      modality: site.modality,
      city: site.city,
      address: {
        street: site.address.street,
        city: site.address.city,
        reference: site.address.reference,
        mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          site.address.mapsQuery,
        )}`,
      },
      whatsapp: { display: site.whatsapp.display, link: site.whatsapp.link },
      instagram: { handle: site.instagram.handle, link: site.instagram.link },
      highlights: stats.map((s) => ({ value: s.value, label: s.label })),
      pillars: pillars.map((p) => p.title),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
