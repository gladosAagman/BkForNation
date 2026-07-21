import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { faqs } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — BKforNation",
  description: "Answers about donations, 80G, volunteering, and how our plantation drives work.",
};

export default function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Answers to the questions we hear most." />
      <section className="pb-24">
        <div className="container-nice max-w-3xl">
          <Reveal>
            <div className="rounded-3xl bg-card border border-border divide-y divide-border overflow-hidden">
              {faqs.map((f, i) => (
                <details key={i} className="group px-6 md:px-8">
                  <summary className="py-5 cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold text-forest">
                    <span>{f.q}</span>
                    <span className="text-2xl leading-none text-emerald transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="pb-5 text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
