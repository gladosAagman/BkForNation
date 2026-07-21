import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { campaigns } from "@/data/site";
import { TreePine, ChevronRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Campaigns — BKforNation',
  description: 'Live plantation campaigns across mangroves, Himalayan slopes, urban Miyawaki forests, and river basins.',
};

export default function CampaignsPage() {
  return (
    <>
      <PageHero
        eyebrow="Live campaigns"
        title="Choose a forest to grow."
        subtitle="Four active campaigns across coasts, mountains, cities, and rivers — each one geo-tagged, community-led, and monitored for 36 months."
      />
      <section className="pb-24">
        <div className="container-nice grid md:grid-cols-2 gap-6">
          {campaigns.map((c, i) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            return (
              <Reveal key={c.slug} delay={i * 80}>
                <div className="rounded-3xl overflow-hidden bg-card border border-border shadow-soft magnetic h-full flex flex-col">
                  <div
                    className="h-56 relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, oklch(0.5 0.13 145), oklch(0.75 0.17 130))" }}
                  >
                    <div className="absolute top-4 left-4 inline-flex rounded-full glass text-white px-3 py-1 text-xs font-bold">{c.tag}</div>
                    <TreePine className="absolute bottom-4 right-4 h-24 w-24 text-white/30" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.location}</div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-forest">{c.title}</h3>
                    <p className="mt-3 text-muted-foreground flex-1">{c.summary}</p>
                    <div className="mt-6">
                      <div className="flex justify-between text-xs font-semibold text-forest">
                        <span>{c.raised.toLocaleString("en-IN")} planted</span>
                        <span>{pct}% of {c.goal.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-accent overflow-hidden">
                        <div className="h-full bg-leaf-gradient rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <Link
                      href="/donate"
                      className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-forest text-white px-5 py-3 text-sm font-bold hover:bg-emerald transition-colors"
                    >
                      Support this campaign <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
