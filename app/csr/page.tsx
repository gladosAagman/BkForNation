import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Building2, ArrowRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Corporate CSR Partnerships — BKforNation',
  description: 'Custom CSR programs from ₹5 lakh to ₹5 crore. ESG-aligned quarterly impact reports. SDG 13, 15 & 6.',
};

const steps = [
  { k: "1. Discovery", v: "A 30-minute call to understand your ESG goals, budget, and geography preferences." },
  { k: "2. Proposal", v: "A tailored plan with species mix, sites, timelines, and quarterly deliverables." },
  { k: "3. Kickoff", v: "MoU signed, nursery orders placed, community stewards onboarded within 30 days." },
  { k: "4. Reporting", v: "Quarterly ESG dashboard with survival rates, biodiversity indices, and site photos." },
];

export default function CSR() {
  return (
    <>
      <PageHero
        eyebrow="Corporate CSR"
        title="Forests your board can point at."
        subtitle="42 corporate partners. ₹18 crore deployed. A+ ESG audit rating. We turn CSR budgets into measurable canopies with reports your board actually reads."
      />
      <section className="pb-16">
        <div className="container-nice grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "42", v: "Corporate partners" },
            { k: "₹18Cr", v: "CSR deployed to date" },
            { k: "312K", v: "Employee volunteer hours" },
            { k: "A+", v: "Independent ESG rating" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 60}>
              <div className="rounded-2xl bg-card border border-border p-6 text-center">
                <div className="font-display text-4xl font-bold text-forest">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 bg-accent/30 border-y border-border/60">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">How it works</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-forest">A four-step partnership.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.k} delay={i * 100}>
                <div className="rounded-2xl bg-card border border-border p-6 h-full">
                  <div className="font-display font-bold text-forest">{s.k}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/contact" className="magnetic inline-flex items-center gap-2 rounded-full bg-hero text-white px-6 py-3.5 text-sm font-bold">
              <Building2 className="h-4 w-4" /> Book a partnership call <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
