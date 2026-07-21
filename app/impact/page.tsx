import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { impactStats } from "@/data/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Impact Dashboard — BKforNation',
  description: 'Live impact numbers: trees planted, CO₂ offset, water saved, beneficiaries reached, districts served.',
};

const bars = [
  { label: "2022", trees: 145, water: 82, carbon: 40 },
  { label: "2023", trees: 260, water: 148, carbon: 78 },
  { label: "2024", trees: 388, water: 210, carbon: 118 },
  { label: "2025", trees: 512, water: 289, carbon: 165 },
  { label: "2026", trees: 640, water: 380, carbon: 220 },
];

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact dashboard"
        title="Numbers you can audit. Forests you can visit."
        subtitle="Every figure below is tied to a geo-tagged plot, verified by an independent ecology partner, and updated quarterly."
      />
      <section className="pb-12">
        <div className="container-nice grid grid-cols-2 md:grid-cols-5 gap-5">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-2xl bg-card border border-border p-6 text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-forest">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Yearly growth</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-forest">Five years of measured climbing.</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl bg-card border border-border p-6 md:p-10">
              <div className="grid grid-cols-5 gap-4 md:gap-8 items-end h-72">
                {bars.map((b) => (
                  <div key={b.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <div className="w-full flex items-end gap-1 h-full">
                      <div className="flex-1 rounded-t-lg bg-forest transition-all" style={{ height: `${(b.trees / 700) * 100}%` }} title={`${b.trees}k trees`} />
                      <div className="flex-1 rounded-t-lg bg-emerald-brand transition-all" style={{ height: `${(b.water / 400) * 100}%` }} title={`${b.water}M L water`} />
                      <div className="flex-1 rounded-t-lg bg-leaf transition-all" style={{ height: `${(b.carbon / 250) * 100}%` }} title={`${b.carbon}k tons CO₂`} />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mt-2">{b.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-forest" /> Trees (thousands)</div>
                <div className="flex items-center gap-2"><span className="h-3 w-3 rounded" style={{ background: "oklch(0.56 0.12 150)" }} /> Water saved (M litres)</div>
                <div className="flex items-center gap-2"><span className="h-3 w-3 rounded" style={{ background: "oklch(0.78 0.17 130)" }} /> CO₂ offset (thousand tons)</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
