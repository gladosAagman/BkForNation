"use client";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { brand } from "@/data/site";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactClient() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to us. We answer."
        subtitle="Whether you want to volunteer, partner, or ask a hard question — we respond within 48 hours."
      />
      <section className="pb-24">
        <div className="container-nice grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-2">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
              <h2 className="font-display text-2xl font-bold text-forest">Send us a note</h2>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { l: "Name", t: "text" },
                  { l: "Email", t: "email" },
                ].map((f) => (
                  <label key={f.l} className="block">
                    <span className="text-sm font-medium">{f.l}</span>
                    <input required type={f.t} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </label>
                ))}
              </div>
              <label className="block mt-4">
                <span className="text-sm font-medium">Subject</span>
                <input type="text" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="block mt-4">
                <span className="text-sm font-medium">Message</span>
                <textarea rows={5} required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <button className="mt-6 magnetic inline-flex items-center gap-2 rounded-full bg-hero text-white px-6 py-3.5 text-sm font-bold">
                <Send className="h-4 w-4" /> Send message
              </button>
            </form>
          </Reveal>
          <div className="space-y-4">
            {[
              { Icon: Mail, k: "Email", v: brand.email },
              { Icon: Phone, k: "Phone", v: brand.phone },
              { Icon: MapPin, k: "Office", v: brand.address },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 80}>
                <div className="rounded-2xl bg-card border border-border p-6">
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
