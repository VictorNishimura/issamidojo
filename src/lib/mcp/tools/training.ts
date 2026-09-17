import { defineTool } from "@lovable.dev/mcp-js";
import { trainingGroups, schedule, leaders } from "@/data/siteData";

export default defineTool({
  name: "get_training_info",
  title: "Turmas, horários e responsáveis",
  description:
    "Retorna as turmas de treinamento do Issami Dojo (crianças, jovens, adultos e competidores), os horários publicados e os responsáveis técnicos (Shihan e Sensei).",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      groups: trainingGroups.map((g) => ({ title: g.title, description: g.description })),
      schedule: schedule.map((s) => ({
        day: s.day,
        time: s.time,
        group: s.group,
        ageRange: s.ageRange,
      })),
      scheduleNote:
        schedule.length === 0
          ? "Os horários ainda não foram publicados no site. Entre em contato pelo WhatsApp para confirmar."
          : undefined,
      instructors: leaders.map((l) => ({
        title: l.title,
        name: l.name,
        description: l.description,
      })),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
