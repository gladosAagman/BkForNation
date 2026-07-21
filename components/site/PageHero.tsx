import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeroProps { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode; }

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-fade" />
      <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-leaf-gradient opacity-20 blur-3xl -z-10" />
      <div aria-hidden className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-hero opacity-15 blur-3xl -z-10" />
      <div className="container-nice">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/70 border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-glow" />
              {eyebrow}
            </div>
          )}
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight text-forest text-balance">{title}</h1>
          {subtitle && <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
