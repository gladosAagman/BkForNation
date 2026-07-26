import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
}

export function PageHero({ eyebrow, title, subtitle, children, backgroundImage }: PageHeroProps) {
  const hasPhoto = !!backgroundImage;

  return (
    <section
      className={
        hasPhoto
          ? "relative min-h-[100svh] flex items-center overflow-hidden pt-24"
          : "relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden"
      }
    >
      {hasPhoto ? (
        <>
          <div aria-hidden className="absolute inset-0 -z-20">
            <Image src={backgroundImage} alt="" fill priority className="object-cover" />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-hero opacity-75" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 -z-10 bg-fade" />
          <div aria-hidden className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-leaf-gradient opacity-20 blur-3xl -z-10" />
          <div aria-hidden className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-hero opacity-15 blur-3xl -z-10" />
        </>
      )}

      <div className="container-nice relative z-10">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <div
              className={
                hasPhoto
                  ? "inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                  : "inline-flex items-center gap-2 rounded-full bg-accent/70 border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest"
              }
            >
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-glow" />
              {eyebrow}
            </div>
          )}
          <h1
            className={
              hasPhoto
                ? "mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance"
                : "mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight text-forest text-balance"
            }
          >
            {title}
          </h1>
          {subtitle && (
            <p className={hasPhoto ? "mt-5 text-lg md:text-xl text-white/90 max-w-2xl text-balance" : "mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance"}>
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>

      {hasPhoto && (
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      )}
    </section>
  );
}