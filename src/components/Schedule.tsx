import { CalendarClock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { schedule, site } from "@/data/siteData";

export function Schedule() {
  return (
    <section id="horarios" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading label="Agenda" title="Horários de treinamento" />
        </Reveal>

        <Reveal delay={100} className="mt-10">
          {schedule.length === 0 ? (
            <div className="flex flex-col items-start gap-5 rounded-sm border border-dashed border-border bg-surface p-8 sm:p-10">
              <span className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.25em] text-primary">
                <CalendarClock className="size-5" aria-hidden="true" />
                Horários em atualização
              </span>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                As turmas e horários estão sendo atualizados. Fale com o dojo pelo WhatsApp para
                saber os horários disponíveis para a sua faixa etária.
              </p>
              <Button asChild className="h-11 font-display uppercase tracking-[0.15em]">
                <a href={site.whatsapp.link} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Consultar horários
                </a>
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-sm border border-border bg-surface">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dia</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Turma</TableHead>
                    <TableHead>Faixa etária</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedule.map((entry) => (
                    <TableRow key={`${entry.day}-${entry.time}-${entry.group}`}>
                      <TableCell className="font-medium">{entry.day}</TableCell>
                      <TableCell>{entry.time}</TableCell>
                      <TableCell>{entry.group}</TableCell>
                      <TableCell>{entry.ageRange}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
