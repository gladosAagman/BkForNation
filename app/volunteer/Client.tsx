"use client";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Award, HeartHandshake, MapPin, Users } from "lucide-react";

export default function VolunteerClient() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Trade a Saturday for a canopy."
        subtitle="Register once — we'll match you to drives in your city, send prep material, and issue certificates for every 40 hours you contribute."
      />
      <section className="pb-24">
        <div className="container-nice grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-2">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
              <h2 className="font-display text-2xl font-bold text-forest">Volunteer registration</h2>
              <p className="mt-1 text-sm text-muted-foreground">Takes under a minute. Zero commitment until you accept a drive.</p>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { l: "Full name", t: "text", p: "Anaya Sharma" },
                  { l: "Email", t: "email", p: "you@example.com" },
                  { l: "Phone", t: "tel", p: "+91 98765 43210" },
                  { l: "City", t: "text", p: "Bengaluru" },
                ].map((f) => (
                  <label key={f.l} className="block">
                    <span className="text-sm font-medium text-foreground">{f.l}</span>
                    <input required type={f.t} placeholder={f.p} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </label>
                ))}
              </div>
              <label className="block mt-4">
                <span className="text-sm font-medium">What draws you here?</span>
                <textarea rows={3} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="A sentence or two, if you'd like." />
              </label>
              <button className="mt-6 magnetic inline-flex items-center gap-2 rounded-full bg-hero text-white px-6 py-3 text-sm font-bold">
                <HeartHandshake className="h-4 w-4" /> Register as volunteer
              </button>
            </form>
          </Reveal>
          <div className="space-y-4">
            {[
              { Icon: Users, k: "Community", v: "Join 24,800 active volunteers across 142 cities." },
              { Icon: Award, k: "Certificates", v: "Earn a signed certificate every 40 hours contributed." },
              { Icon: MapPin, k: "Local drives", v: "We match you to plantation drives near you, monthly." },
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
