"use client";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { donationTiers } from "@/data/site";
import { HeartHandshake, ShieldCheck, ReceiptText, TreePine } from "lucide-react";

export default function DonateClient() {
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Turn a tab into a tree."
        subtitle="80G tax-deductible. Geo-tagged plot per donation. Photo & GPS certificate emailed within 48 hours."
        backgroundImage="/images/campaign-himalaya.jpg"
      />
      {/* Same -mt-8 overlap rhythm as Home / Drives / Impact / Gallery / Contact. */}
      <section className="relative -mt-8 z-10 pb-24">
        <div className="container-nice grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="rounded-3xl bg-card border border-border p-8 shadow-glow">
                <h2 className="font-display text-2xl font-bold text-forest">Choose an amount</h2>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {donationTiers.map((d) => (
                    <button
                      key={d.amount}
                      onClick={() => { setAmount(d.amount); setCustom(""); }}
                      className={`rounded-2xl border p-4 text-left transition-all ${amount === d.amount && !custom ? "border-forest bg-accent/60 ring-2 ring-forest/30" : "border-border bg-background hover:border-forest/40"}`}
                    >
                      <div className="font-display text-2xl font-bold text-forest">₹{d.amount}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{d.trees} trees</div>
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block">
                    <span className="text-sm font-medium">Or a custom amount (₹)</span>
                    <input
                      type="number"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setAmount(Number(e.target.value) || 0); }}
                      placeholder="5000"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-lg font-display font-bold focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                </div>
                <div className="mt-6 rounded-2xl bg-accent/40 p-5 flex items-start gap-4">
                  <TreePine className="h-8 w-8 text-forest shrink-0" />
                  <div>
                    <div className="font-semibold text-forest">Your impact</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      ₹{amount.toLocaleString("en-IN")} plants approximately{" "}
                      <span className="font-bold text-forest">{Math.max(1, Math.round(amount / 40))} native trees</span> and offsets{" "}
                      <span className="font-bold text-forest">{(amount * 0.02).toFixed(1)} tons of CO₂</span> over their lifetime.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-card border border-border p-8 shadow-glow">
                <h2 className="font-display text-2xl font-bold text-forest">Your details</h2>
                <div className="mt-5 grid md:grid-cols-2 gap-4">
                  {[
                    { l: "Full name", t: "text" },
                    { l: "Email for receipt", t: "email" },
                    { l: "Phone", t: "tel" },
                    { l: "PAN (for 80G)", t: "text" },
                  ].map((f) => (
                    <label key={f.l} className="block">
                      <span className="text-sm font-medium">{f.l}</span>
                      <input type={f.t} required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </label>
                  ))}
                </div>
                <button className="mt-6 magnetic inline-flex items-center gap-2 rounded-full bg-hero text-white px-8 py-3.5 text-sm font-bold">
                  <HeartHandshake className="h-4 w-4" /> Donate ₹{amount.toLocaleString("en-IN")}
                </button>
              </form>
            </Reveal>
          </div>

          <div className="space-y-4">
            {[
              { Icon: ShieldCheck, k: "80G tax benefit", v: "Registered under 80G & 12A. Save up to 50% in taxes." },
              { Icon: ReceiptText, k: "Instant receipt", v: "Certificate + tax receipt emailed within 48 hours." },
              { Icon: TreePine, k: "Geo-tagged", v: "Every donation ties to a real, monitored plot." },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 80}>
                <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                  <div className="h-10 w-10 rounded-xl bg-leaf-gradient grid place-items-center text-forest">
                    <b.Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display font-bold text-forest">{b.k}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}