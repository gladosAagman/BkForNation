import Link from "next/link";
import { ArrowRight, Sprout, HeartHandshake, Leaf, TreePine, Users, Globe2, TrendingUp, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { brand, impactStats, campaigns, whyTrees, donationTiers, testimonials, galleryImages, media } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24">
        <img src={media.hero} alt="" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest/90 via-forest/70 to-emerald/50" />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, oklch(0.85 0.18 130 / 0.35), transparent 45%), radial-gradient(circle at 85% 70%, oklch(0.55 0.15 160 / 0.5), transparent 50%)" }} />
        {Array.from({ length: 8 }).map((_, i) => (
          <Leaf key={i} aria-hidden className="absolute text-leaf/50 pointer-events-none"
            style={{ top: `${(i * 13) % 90}%`, left: `${-10 + (i * 7) % 20}%`, width: 20 + (i % 3) * 12, height: 20 + (i % 3) * 12, animation: `drift ${16 + i * 2}s linear ${i * 1.5}s infinite` }} />
        ))}

        <div className="container-nice relative z-10">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-glow" />
              1,284,500 trees planted across India
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-balance leading-[1.02]">
              Grow a forest.<br />
              <span className="italic font-medium text-leaf">Grow a future.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl text-balance">{brand.mission}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/donate" className="magnetic inline-flex items-center gap-2 rounded-full bg-white text-forest px-6 py-3.5 text-sm font-bold shadow-glow">
                <HeartHandshake className="h-5 w-5" /> Donate now
              </Link>
              <Link href="/volunteer" className="magnetic inline-flex items-center gap-2 rounded-full bg-leaf text-forest px-6 py-3.5 text-sm font-bold">
                <Users className="h-5 w-5" /> Become a volunteer
              </Link>
              <Link href="/campaigns" className="magnetic inline-flex items-center gap-2 rounded-full glass border border-white/40 text-white px-6 py-3.5 text-sm font-bold">
                <Sprout className="h-5 w-5" /> Plant a tree
              </Link>
            </div>
          </Reveal>
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="relative -mt-8 z-10">
        <div className="container-nice">
          <Reveal className="rounded-3xl bg-card shadow-glow border border-border/60 p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {impactStats.map((s, i) => (
                <div key={s.label} className="text-center md:text-left border-l-0 md:border-l md:first:border-l-0 md:pl-6 md:first:pl-0 border-border/60">
                  <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest">
                    <Counter value={s.value} suffix={s.suffix} duration={1400 + i * 200} />
                  </div>
                  <div className="mt-1.5 text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-nice grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Our Mission</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-forest text-balance">
              We plant native forests where they're needed most.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              BKforNation is not a plantation drive. It's a decade-long commitment to biodiversity, community livelihoods, and measurable climate outcomes. Every patch we plant is geo-tagged, monitored for 36 months, and returned to the community that stewards it.
            </p>
            <Link href="/mission" className="mt-8 inline-flex items-center gap-1.5 text-forest font-semibold hover:gap-3 transition-all">
              Read the full mission <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {[
              { Icon: TreePine, label: "Native species only" },
              { Icon: Users, label: "Tribal-led nurseries" },
              { Icon: Globe2, label: "14 states, 142 cities" },
              { Icon: TrendingUp, label: "82% survival rate" },
            ].map(({ Icon, label }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-5 magnetic">
                <div className="h-11 w-11 rounded-xl bg-accent/70 grid place-items-center text-forest"><Icon className="h-5 w-5" /></div>
                <div className="mt-4 font-display font-semibold text-forest">{label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-accent/30 border-y border-border/60">
        <div className="container-nice">
          <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Featured campaigns</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-forest">Where your support goes.</h2>
            </div>
            <Link href="/campaigns" className="text-forest font-semibold hover:gap-3 inline-flex items-center gap-1.5 transition-all">
              All campaigns <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {campaigns.map((c, i) => {
              const pct = Math.round((c.raised / c.goal) * 100);
              return (
                <Reveal key={c.slug} delay={i * 80}>
                  <div className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft magnetic h-full flex flex-col">
                    <div className="h-56 relative overflow-hidden">
                      <img src={media.campaignImages[c.slug]} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur text-forest px-3 py-1 text-xs font-bold shadow-soft">{c.tag}</div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-[10px] uppercase tracking-widest text-leaf font-bold">{c.location}</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.location}</div>
                      <h3 className="mt-2 font-display text-2xl font-bold text-forest">{c.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground flex-1">{c.summary}</p>
                      <div className="mt-5">
                        <div className="flex justify-between text-xs font-semibold text-forest">
                          <span>{c.raised.toLocaleString("en-IN")} trees</span><span>{pct}%</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-accent overflow-hidden">
                          <div className="h-full bg-leaf-gradient rounded-full transition-all duration-1000" style={{ width: `${pct}%` }} />
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Goal: {c.goal.toLocaleString("en-IN")} trees</div>
                      </div>
                      <Link href="/donate" className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-forest text-white px-5 py-2.5 text-sm font-bold hover:bg-emerald transition-colors">
                        Support this campaign <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Why trees matter</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-forest text-balance">Six ways one tree changes everything.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyTrees.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 magnetic">
                  <div className="h-1 w-10 rounded-full bg-leaf-gradient" />
                  <h3 className="mt-4 font-display text-xl font-bold text-forest">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-forest via-emerald to-forest text-white overflow-hidden relative">
        <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.78 0.17 130), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.75 0.11 85 / 0.4), transparent 45%)" }} />
        <div className="container-nice relative">
          <Reveal className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-leaf font-semibold">Before / After</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
              A degraded slope. Four monsoons later, <span className="italic text-leaf">a forest.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[{ label: "2021 · Degraded slope, Almora", src: media.beforeSlope }, { label: "2026 · Restored native forest", src: media.afterForest }].map((b, i) => (
              <Reveal key={b.label} delay={i * 150}>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative shadow-glow group">
                  <img src={b.src} alt={b.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur text-forest px-3 py-1.5 text-xs font-bold shadow-soft">{b.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-14 text-center mx-auto">
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Donation</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-forest text-balance">Small gifts. Big canopies.</h2>
            <p className="mt-4 text-muted-foreground">Tax-deductible under 80G. Every donation is tied to a geo-tagged plot.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {donationTiers.map((d, i) => (
              <Reveal key={d.amount} delay={i * 80}>
                <div className={`h-full rounded-3xl p-7 border magnetic ${i === 2 ? "bg-hero text-white border-transparent shadow-glow" : "bg-card border-border"}`}>
                  <div className={`text-xs uppercase tracking-widest font-semibold ${i === 2 ? "text-leaf" : "text-emerald"}`}>₹{d.amount}</div>
                  <div className={`mt-2 font-display text-4xl font-bold ${i === 2 ? "text-white" : "text-forest"}`}>{d.trees} trees</div>
                  <p className={`mt-3 text-sm ${i === 2 ? "text-white/85" : "text-muted-foreground"}`}>{d.impact}</p>
                  <Link href="/donate" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-bold ${i === 2 ? "bg-white text-forest" : "bg-forest text-white"}`}>
                    Donate ₹{d.amount}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Voices</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-forest text-balance">From the people who plant with us.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
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
        </div>
      </section>

      <section className="py-24 bg-accent/30 border-y border-border/60">
        <div className="container-nice">
          <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-emerald font-semibold">Gallery</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-forest">Moments from the field.</h2>
            </div>
            <Link href="/gallery" className="text-forest font-semibold hover:gap-3 inline-flex items-center gap-1.5 transition-all">
              Full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-3">
            {galleryImages.slice(0, 8).map((img, i) => (
              <Reveal key={i} delay={i * 40} className={`relative overflow-hidden rounded-2xl group ${img.span}`}>
                <div className="absolute inset-0 magnetic" style={{ background: `linear-gradient(135deg, oklch(0.55 0.13 ${img.hue}), oklch(0.35 0.08 ${img.hue}))` }} />
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `radial-gradient(circle at 30% 30%, oklch(0.85 0.15 ${img.hue} / 0.6), transparent 50%)` }} />
                <Leaf className="absolute bottom-3 right-3 h-8 w-8 text-white/60 group-hover:scale-125 transition-transform duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-nice">
          <Reveal className="rounded-[2.5rem] bg-hero text-white p-10 md:p-16 overflow-hidden relative shadow-glow">
            <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-leaf/40 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-widest text-leaf font-semibold">Newsletter</div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">Get the monthly field dispatch.</h2>
                <p className="mt-3 text-white/85">Species notes, drive invites, and quarterly impact reports. Zero spam, unsubscribe anytime.</p>
              </div>
              <form action="#" className="flex flex-col sm:flex-row gap-3">
                <input type="email" required placeholder="you@example.com"
                  className="flex-1 rounded-full bg-white/10 border border-white/30 px-5 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/15" />
                <button type="submit" className="magnetic inline-flex items-center justify-center gap-2 rounded-full bg-white text-forest px-6 py-3.5 text-sm font-bold">
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
