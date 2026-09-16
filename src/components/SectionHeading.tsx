import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ label, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {label ? <span className="section-label">{label}</span> : null}
      <h2 className="mt-5 text-3xl font-semibold uppercase tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
