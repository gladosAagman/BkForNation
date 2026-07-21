import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, MapPin, Users } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Upcoming Plantation Drives — BKforNation',
  description: 'Join a drive near you. Monthly plantation events across Indian cities and rural sites.',
};

const drives = [
  { date: "Aug 03, 2026", city: "Bengaluru", site: "Kaikondrahalli Lake", spots: 120, filled: 84 },
  { date: "Aug 10, 2026", city: "Delhi NCR", site: "Aravalli Biodiversity Park", spots: 200, filled: 141 },
  { date: "Aug 17, 2026", city: "Mumbai", site: "Aarey Colony buffer", spots: 150, filled: 62 },
  { date: "Aug 24, 2026", city: "Sundarbans", site: "Gosaba island", spots: 80, filled: 71 },
  { date: "Sep 07, 2026", city: "Almora", site: "Panuwanaula ridge", spots: 60, filled: 22 },
  { date: "Sep 14, 2026", city: "Chennai", site: "Pallikaranai marsh", spots: 130, filled: 45 },
];

export default function Drives() {
  return (
    <>
      <PageHero
        eyebrow="Plantation drives"
        title="Show up. Dig in. Change the map."
        subtitle="Every weekend, somewhere in India, our volunteers are planting a forest. Here's where to find them."
      />
      <section className="pb-24">
        <div className="container-nice grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {drives.map((d, i) => {
            const pct = Math.round((d.filled / d.spots) * 100);
            return (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-3xl bg-card border border-border p-6 h-full magnetic">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald font-semibold">
                    <Calendar className="h-3.5 w-3.5" /> {d.date}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-forest">{d.city}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {d.site}
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between text-xs font-semibold text-forest">
                      <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {d.filled}/{d.spots} volunteers</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-accent overflow-hidden">
                      <div className="h-full bg-leaf-gradient" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <button className="mt-6 w-full rounded-full bg-forest text-white px-4 py-2.5 text-sm font-bold hover:bg-emerald transition-colors">
                    Reserve a spot
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
