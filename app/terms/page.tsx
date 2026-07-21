import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Use — BKforNation',
  description: 'Terms governing use of the BKforNation website, donations, and volunteer participation.',
};

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" subtitle="Last updated: July 2026" />
      <section className="pb-24">
        <div className="container-nice max-w-3xl">
          <Reveal>
            <article className="max-w-none rounded-3xl bg-card border border-border p-8 md:p-10 space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-xl font-bold text-forest">Donations</h2>
                <p>All donations are voluntary and non-refundable except in the case of verified fraud or duplicate transactions. Tax receipts under 80G are issued within 48 hours.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-forest">Volunteer participation</h2>
                <p>Volunteers agree to follow site safety protocols, respect community stewards, and represent BKforNation in good faith. We reserve the right to decline participation without notice.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-forest">Content</h2>
                <p>All photos, essays, and impact reports are © BKforNation. Non-commercial reuse is welcome with attribution and prior notice at press@bkfornation.org.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-forest">Governing law</h2>
                <p>These terms are governed by the laws of India. Disputes will be settled in the courts of New Delhi.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
