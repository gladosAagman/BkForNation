"use client";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { donationTiers } from "@/data/site";
import { HeartHandshake, ShieldCheck, ReceiptText, TreePine } from "lucide-react";

export default function DonateClient() {
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");

  return (
    <>
      {/* ── Cinematic Hero ───────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        {/* Background image & overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/donate_hero.jpg"
            alt="Close up of hands planting a tree seedling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8faf9] via-forest/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/30 to-transparent" />
        </div>

        <div className="container-nice relative z-10 pb-20 md:pb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 text-leaf px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
              Donate
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight drop-shadow-xl">
              Turn a tab into <br className="hidden md:block" />
              <span className="text-leaf italic font-medium">a tree.</span>
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
              80G tax-deductible. Geo-tagged plot per donation. Photo & GPS certificate emailed directly to you within 48 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Donation Form & Info ──────────────────────────── */}
      <section className="pb-24 pt-12 bg-[#f8faf9] relative z-20 -mt-10">
        <div className="container-nice grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="rounded-[2.5rem] bg-white border border-border/50 p-8 md:p-12 shadow-soft hover:shadow-glow hover:border-emerald/30 transition-all duration-500">
                <h2 className="font-display text-3xl font-bold text-forest">Choose an amount</h2>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {donationTiers.map((d) => (
                    <button
                      key={d.amount}
                      onClick={() => { setAmount(d.amount); setCustom(""); }}
                      className={`rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                        amount === d.amount && !custom 
                          ? "border-emerald bg-emerald/5 shadow-glow scale-[1.02]" 
                          : "border-border/60 bg-white hover:border-emerald/40 hover:bg-emerald/5 hover:scale-[1.02]"
                      }`}
                    >
                      <div className="font-display text-2xl font-bold text-forest">₹{d.amount}</div>
                      <div className="mt-1 text-sm font-semibold text-muted-foreground uppercase tracking-wider">{d.trees} trees</div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-6">
                  <label className="block">
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Or a custom amount (₹)</span>
                    <input
                      type="number"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setAmount(Number(e.target.value) || 0); }}
                      placeholder="5000"
                      className="w-full rounded-2xl border-2 border-border/60 bg-white px-5 py-4 text-xl font-display font-bold focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/10 transition-all"
                    />
                  </label>
                </div>

                <div className="mt-8 rounded-3xl bg-[#f8faf9] border border-border/60 p-6 flex items-start gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-emerald/10 flex items-center justify-center shrink-0">
                    <TreePine className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-forest">Your impact</div>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      ₹{amount.toLocaleString("en-IN")} plants approximately{" "}
                      <span className="font-bold text-forest">{Math.max(1, Math.round(amount / 40))} native trees</span> and offsets{" "}
                      <span className="font-bold text-forest">{(amount * 0.02).toFixed(1)} tons of CO₂</span> over their lifetime.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <form onSubmit={(e) => e.preventDefault()} className="rounded-[2.5rem] bg-white border border-border/50 p-8 md:p-12 shadow-soft hover:shadow-glow hover:border-emerald/30 transition-all duration-500">
                <h2 className="font-display text-3xl font-bold text-forest">Your details</h2>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  {[
                    { l: "Full name", t: "text", p: "Arjun Kumar" },
                    { l: "Email for receipt", t: "email", p: "arjun@example.com" },
                    { l: "Phone", t: "tel", p: "+91 98765 43210" },
                    { l: "PAN (for 80G)", t: "text", p: "ABCDE1234F" },
                  ].map((f) => (
                    <label key={f.l} className="block">
                      <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">{f.l}</span>
                      <input 
                        type={f.t} 
                        placeholder={f.p}
                        required 
                        className="w-full rounded-2xl border-2 border-border/60 bg-[#f8faf9] px-5 py-3.5 text-base focus:outline-none focus:border-emerald focus:ring-4 focus:ring-emerald/10 transition-all focus:bg-white" 
                      />
                    </label>
                  ))}
                </div>
                <button className="mt-8 w-full group flex items-center justify-center gap-2 rounded-full bg-forest text-white px-8 py-4 text-lg font-bold shadow-soft hover:shadow-glow hover:bg-emerald transition-all duration-300">
                  <HeartHandshake className="h-5 w-5 group-hover:-translate-y-1 transition-transform" /> 
                  Donate ₹{amount.toLocaleString("en-IN")}
                </button>
              </form>
            </Reveal>
          </div>

          <div className="space-y-6">
            {[
              { Icon: ShieldCheck, k: "80G tax benefit", v: "Registered under 80G & 12A. Save up to 50% in taxes on your donation." },
              { Icon: ReceiptText, k: "Instant receipt", v: "Your certificate and official tax receipt are emailed to you within 48 hours." },
              { Icon: TreePine, k: "Geo-tagged plots", v: "Every single donation is tied to a real, monitored plot of land." },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 80}>
                <TiltCard className="rounded-3xl bg-white border border-border/50 p-8 shadow-soft hover:shadow-glow hover:border-emerald/30 transition-all duration-500">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-leaf to-emerald grid place-items-center text-white shadow-glow mb-6">
                    <b.Icon className="h-7 w-7" />
                  </div>
                  <div className="font-display text-xl font-bold text-forest">{b.k}</div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{b.v}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
