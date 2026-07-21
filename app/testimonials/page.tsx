import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/data/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Testimonials — BKforNation',
  description: 'What volunteers, ecologists, corporate partners, and community leaders say about our work.',
};

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Told by the people who plant with us."
        subtitle="Volunteers, ecologists, corporate CSR heads, and village sarpanches — in their own words."
      />
      <section className="pb-24">
        <div className="container-nice grid md:grid-cols-2 gap-5">
          {[...testimonials, ...testimonials].map((t, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <figure className="h-full rounded-3xl bg-card border border-border p-8 magnetic">
                <div className="text-4xl leading-none text-leaf font-display">"</div>
                <blockquote className="mt-2 text-lg leading-relaxed text-foreground/90">{t.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-leaf-gradient grid place-items-center text-forest font-bold">{t.name[0]}</div>
                  <div>
                    <div className="font-semibold text-forest">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
