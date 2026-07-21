import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Target, Sprout, Users, ShieldCheck } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Mission — BKforNation',
  description: 'Plant native forests, protect ecosystems, and inspire the next generation of climate leaders.',
};

const pillars = [
  { Icon: Sprout, title: "Plant", body: "1.28 million native trees across 14 states. Every seedling is a species chosen for its ecosystem, not its speed." },
  { Icon: ShieldCheck, title: "Protect", body: "36-month monitoring, community land trusts, and legal protections for every restored patch we hand back." },
  { Icon: Users, title: "Inspire", body: "School curricula, city Miyawaki workshops, and 24,800 volunteers learning to plant a forest properly." },
];

export default function Mission() {
  return (
    <>
      <PageHero
        eyebrow="Our mission"
        title="Plant. Protect. Inspire."
        subtitle="Three verbs. One promise. We turn climate anxiety into measurable canopies — with the communities who live under them."
      />
      <section className="py-16">
        <div className="container-nice grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-3xl bg-card border border-border p-8 magnetic">
                <div className="h-14 w-14 rounded-2xl bg-leaf-gradient grid place-items-center text-forest">
                  <p.Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-forest">{p.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-accent/30 border-y border-border/60">
        <div className="container-nice grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">SDG alignment</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-forest text-balance">Aligned with the goals that matter.</h2>
            <p className="mt-4 text-muted-foreground">
              Our work maps directly to UN Sustainable Development Goals 13 (Climate Action),
              15 (Life on Land), 6 (Clean Water), and 5 (Gender Equality) — audited annually
              by an independent partner.
            </p>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {["SDG 13", "SDG 15", "SDG 6", "SDG 5"].map((s) => (
              <div key={s} className="rounded-2xl bg-card border border-border p-6 text-center">
                <Target className="mx-auto h-6 w-6 text-emerald" />
                <div className="mt-3 font-display font-bold text-forest text-xl">{s}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
