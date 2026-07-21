import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy — BKforNation',
  description: 'How BKforNation collects, uses, and protects your personal information.',
};

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" subtitle="Last updated: July 2026" />
      <section className="pb-24">
        <div className="container-nice max-w-3xl">
          <Reveal>
            <article className="prose prose-neutral max-w-none rounded-3xl bg-card border border-border p-8 md:p-10 space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-xl font-bold text-forest">What we collect</h2>
                <p>Name, email, phone, PAN (for 80G tax receipts), donation amount, and city.
                  We do not collect payment card details — those are handled by our PCI-compliant payment partner.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-forest">How we use it</h2>
                <p>To issue receipts, send certificates, invite you to drives in your city, and share the monthly newsletter — nothing else. We never sell your data.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-forest">Your rights</h2>
                <p>Write to privacy@bkfornation.org to access, correct, or delete your data. We honor requests within 30 days.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-forest">Cookies</h2>
                <p>We use minimal, first-party analytics cookies to understand which pages help visitors most. No third-party ad trackers, ever.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
