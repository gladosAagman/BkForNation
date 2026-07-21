import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { blogs } from "@/data/site";
import { ArrowRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Journal — BKforNation',
  description: 'Field notes and long essays on native forests, urban Miyawaki, CSR that works, and climate resilience.',
};

export default function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Field notes & long essays."
        subtitle="Practical writing on native species, monitoring, CSR partnerships, and the science that guides our plots."
      />
      <section className="pb-24">
        <div className="container-nice grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <Reveal key={b.slug} delay={i * 80}>
              <article className="h-full rounded-3xl bg-card border border-border overflow-hidden magnetic flex flex-col">
                <div className="h-40 bg-leaf-gradient relative">
                  <div className="absolute top-4 left-4 rounded-full bg-forest/80 text-white px-3 py-1 text-xs font-semibold">{b.category}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-muted-foreground">
                    {new Date(b.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {b.read} min read
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-forest leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{b.excerpt}</p>
                  <div className="mt-4 text-sm font-semibold text-forest inline-flex items-center gap-1.5">
                    Read essay <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
