import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ImpactChart } from "@/components/site/ImpactChart";
import { impactStats } from "@/data/site";
import { TreePine, Users, MapPin, Wind, HeartHandshake, type LucideIcon } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Impact Dashboard — BKforNation',
  description: 'Live impact numbers: trees planted, CO₂ offset, water saved, beneficiaries reached, districts served.',
};

const statIcons: Record<string, LucideIcon> = {
  "Trees planted": TreePine,
  "Active volunteers": Users,
  "Cities reached": MapPin,
  "CO₂ offset (tons)": Wind,
  "Partner NGOs": HeartHandshake,
};

// Noticeably smaller ceiling than before across every tier — long
// 6-7 digit numbers stay compact and readable instead of dominating
// their column.
function sizeClass(len: number) {
  if (len >= 11) return "text-base sm:text-lg md:text-xl lg:text-2xl";
  if (len >= 9) return "text-lg sm:text-xl md:text-xl lg:text-2xl";
  if (len >= 7) return "text-xl sm:text-xl md:text-2xl lg:text-3xl";
  return "text-2xl md:text-3xl lg:text-3xl";
}

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact dashboard"
        title="Numbers you can audit. Forests you can visit."
        subtitle="Every figure below is tied to a geo-tagged plot, verified by an independent ecology partner, and updated quarterly."
        backgroundImage="/images/campaign-mangrove.jpg"
      />

      <section className="relative -mt-8 z-10">
        <div className="container-nice">
          <Reveal className="rounded-3xl bg-card shadow-glow border border-border/60 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-6">
              {impactStats.map((s) => {
                const Icon = statIcons[s.label];
                const formatted = `${s.value.toLocaleString("en-IN")}${s.suffix}`;
                return (
                  <div key={s.label} className="text-center md:text-left border-l-0 md:border-l md:first:border-l-0 md:pl-5 md:first:pl-0 border-border/60">
                    {Icon && (
                      <div className="mx-auto md:mx-0 mb-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-accent/70 text-forest">
                        <Icon className="h-4 w-4" />
                      </div>
                    )}
                    <div
                      className={`font-display font-bold text-forest whitespace-nowrap tabular-nums ${sizeClass(formatted.length)}`}
                    >
                      {formatted}
                    </div>
                    <div className="mt-1 text-[11px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Yearly growth</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-forest">Five years of measured climbing.</h2>
          </Reveal>
          <Reveal>
            <ImpactChart />
          </Reveal>
        </div>
      </section>
    </>
  );
}