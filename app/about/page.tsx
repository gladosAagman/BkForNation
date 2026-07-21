import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { timeline } from "@/data/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About BKforNation — A decade of native forests',
  description: 'Since 2016, BKforNation has restored native ecosystems across 14 Indian states with tribal panchayats, city schools, and coastal co-ops.',
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A quiet promise, kept for a decade."
        subtitle="Founded in 2016 after India's worst smog winter, BKforNation grew from a Delhi living room into a movement across 14 states — with tribal panchayats, city schools, and coastal co-ops planting alongside us."
      />
      <section className="py-16">
        <div className="container-nice grid lg:grid-cols-3 gap-10">
          {[
            { k: "Our roots", v: "We started with 200 saplings on a bare Uttarakhand slope. Today, those trees shade a full forest — and a village school." },
            { k: "How we work", v: "Native species only. Tribal-led nurseries. Community land trusts. 36-month monitoring on every plot we touch." },
            { k: "What we refuse", v: "Eucalyptus. Monoculture. Photo-op plantations. Any partnership that treats a forest as a marketing asset." },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 100}>
              <div className="rounded-3xl border border-border bg-card p-8 h-full">
                <div className="text-xs uppercase tracking-widest text-emerald font-semibold">{c.k}</div>
                <p className="mt-4 text-lg text-foreground/90 leading-relaxed">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 bg-accent/30 border-y border-border/60">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Timeline</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-forest">Ten years, one canopy at a time.</h2>
          </Reveal>
          <div className="relative pl-6 md:pl-0">
            <div aria-hidden className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}>
                    <div className={`${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                      <div className="font-display text-3xl font-bold text-forest">{t.year}</div>
                      <div className="mt-1 font-display font-semibold text-lg text-foreground">{t.title}</div>
                      <p className="mt-2 text-muted-foreground">{t.body}</p>
                    </div>
                    <div aria-hidden className="absolute -left-4 md:left-1/2 top-2 h-4 w-4 rounded-full bg-leaf-gradient ring-4 ring-background md:-translate-x-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
