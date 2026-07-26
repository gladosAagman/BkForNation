import Link from "next/link";
import { ArrowRight, Sprout, HeartHandshake, Leaf, TreePine, Users, Globe2, TrendingUp, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { TiltCard } from "@/components/site/TiltCard";
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {impactStats.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center lg:items-start text-center lg:text-left lg:border-l lg:first:border-l-0 lg:pl-6 lg:first:pl-0 border-border/60">
                  <div className="font-display text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-forest tracking-tighter whitespace-nowrap">
                    <Counter value={s.value} suffix={s.suffix} duration={1400 + i * 200} />
                  </div>
                  <div className="mt-1.5 text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div aria-hidden className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald/10 blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-leaf/10 blur-3xl pointer-events-none" />
        
        <div className="container-nice grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4 border border-emerald/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              Our Mission
            </div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest text-balance leading-tight">
              We plant native forests where they're needed most.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              BKforNation is not a plantation drive. It's a decade-long commitment to biodiversity, community livelihoods, and measurable climate outcomes. Every patch we plant is geo-tagged, monitored for 36 months, and returned to the community that stewards it.
            </p>
            <Link href="/mission" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest text-white px-6 py-3.5 text-sm font-bold shadow-glow hover:bg-emerald hover:gap-3 transition-all">
              Read the full mission <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4 md:gap-5">
            {/*
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
            */}
            {[
              { Icon: TreePine, label: "Native species only", desc: "No invasive monocultures." },
              { Icon: Users, label: "Tribal-led nurseries", desc: "Empowering local communities." },
              { Icon: Globe2, label: "14 states, 142 cities", desc: "Scaling across the nation." },
              { Icon: TrendingUp, label: "82% survival rate", desc: "Rigorous 36-month monitoring." },
            ].map(({ Icon, label, desc }, i) => (
              <TiltCard key={label} className={`rounded-3xl border p-5 md:p-6 shadow-soft backdrop-blur-sm h-full flex flex-col justify-center ${i === 0 || i === 3 ? 'bg-gradient-to-br from-white to-accent/40 border-white/60' : 'bg-white border-border/50'}`}>
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-leaf to-emerald grid place-items-center text-white shadow-glow"><Icon className="h-6 w-6" /></div>
                <div className="mt-5 font-display text-lg font-bold text-forest leading-snug">{label}</div>
                <div className="mt-1.5 text-xs text-muted-foreground">{desc}</div>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-white to-[#f0fdf4]">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="container-nice relative z-10">
          <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4 border border-emerald/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                Featured campaigns
              </div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold tracking-tight text-forest leading-tight">Where your support goes.</h2>
            </div>
            <Link href="/campaigns" className="text-forest font-semibold hover:text-emerald hover:gap-3 inline-flex items-center gap-2 transition-all bg-white px-5 py-2.5 rounded-full shadow-soft border border-border/50">
              All campaigns <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {campaigns.map((c, i) => {
              const pct = Math.round((c.raised / c.goal) * 100);
              return (
                <Reveal key={c.slug} delay={i * 100}>
                  <TiltCard className="group rounded-3xl overflow-hidden bg-white/70 backdrop-blur-lg border border-white shadow-soft h-full flex flex-col relative">
                    <div className="h-64 relative overflow-hidden">
                      <img src={media.campaignImages[c.slug]} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur text-forest px-3 py-1 text-xs font-bold shadow-soft">{c.tag}</div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-[10px] uppercase tracking-widest text-emerald font-bold">{c.location}</div>
                        <h3 className="font-display text-3xl font-bold text-white mt-1 drop-shadow-md">{c.title}</h3>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{c.summary}</p>
                      <div className="mt-8">
                        <div className="flex justify-between text-xs font-bold text-forest mb-2">
                          <span>{c.raised.toLocaleString("en-IN")} trees</span><span className="text-emerald">{pct}%</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-emerald/10 overflow-hidden shadow-inner">
                          <div className="h-full bg-gradient-to-r from-leaf to-emerald rounded-full transition-all duration-1000 shadow-glow relative" style={{ width: `${pct}%` }}>
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-muted-foreground font-medium">Goal: {c.goal.toLocaleString("en-IN")} trees</div>
                      </div>
                      <Link href="/donate" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest text-white px-5 py-3.5 text-sm font-bold shadow-soft group-hover:shadow-glow group-hover:bg-emerald transition-all duration-300">
                        Support this campaign <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </TiltCard>
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

      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8faf9] to-white">
        <div aria-hidden className="absolute -left-20 top-40 h-[500px] w-[500px] rounded-full bg-emerald/5 blur-3xl pointer-events-none" />
        
        <div className="container-nice relative z-10">
          <Reveal className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4 border border-emerald/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              Voices
            </div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest text-balance leading-tight">
              From the people who plant with us.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <TiltCard className="h-full rounded-3xl bg-white/60 backdrop-blur-xl border border-white p-8 md:p-10 shadow-soft relative overflow-hidden group flex flex-col justify-between">
                  <div className="absolute -top-6 -left-2 text-[120px] leading-none text-emerald/10 font-display font-black group-hover:text-emerald/20 transition-colors duration-500 select-none pointer-events-none">"</div>
                  
                  <blockquote className="relative z-10 mt-6 text-lg md:text-xl leading-relaxed text-forest font-medium">{t.quote}</blockquote>
                  
                  <figcaption className="relative z-10 mt-8 flex items-center gap-4 border-t border-border/50 pt-6">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-leaf to-emerald grid place-items-center text-white font-bold shadow-glow text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-forest text-base">{t.name}</div>
                      <div className="text-sm text-emerald font-medium">{t.role}</div>
                    </div>
                  </figcaption>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0 relative overflow-hidden">
        {/* Full-bleed light editorial header */}
        <div className="bg-gradient-to-br from-[#f8faf9] via-[#f0fdf4] to-white py-20 px-4 relative overflow-hidden border-t border-border/60">
          <div aria-hidden className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 10% 50%, oklch(0.95 0.05 130 / 0.5), transparent 40%), radial-gradient(circle at 90% 20%, oklch(0.9 0.08 145 / 0.4), transparent 45%)" }} />
          <div className="container-nice relative z-10">
            <Reveal className="flex items-end justify-between flex-wrap gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5 border border-emerald/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                  Gallery
                </div>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-forest text-balance leading-[1.05]">
                  Moments from
                  <span className="block italic font-medium text-emerald">the field.</span>
                </h2>
                <p className="mt-5 text-muted-foreground max-w-lg text-base leading-relaxed">
                  Tribal nurseries, coastal restoration, urban Miyawaki drives, and the volunteers who make it all happen.
                </p>
              </div>
              <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-emerald hover:text-white border border-border/50 text-forest shadow-soft px-6 py-3 text-sm font-bold transition-all duration-300">
                Full gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Masonry editorial grid */}
        <div className="bg-[#f8faf9]">
          <div className="container-nice py-3 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[240px_240px] md:grid-rows-[260px_260px] gap-3">
              {/* Big featured image - spans 2 cols & 2 rows */}
              {galleryImages.slice(0, 8).map((img, i) => {
                const realImages = [
                  "https://images.unsplash.com/photo-1602428774859-40ffd0ce899c?crop=entropy&cs=tinysrgb&fit=crop&w=900&h=600&q=80",
                  "https://images.unsplash.com/photo-1607441078533-77ba814b1e5d?crop=entropy&cs=tinysrgb&fit=crop&w=500&h=300&q=80",
                  "https://images.unsplash.com/photo-1620193802063-ea0e0f99ba30?crop=entropy&cs=tinysrgb&fit=crop&w=500&h=300&q=80",
                  "https://images.unsplash.com/photo-1741543537267-fb113770bc86?crop=entropy&cs=tinysrgb&fit=crop&w=500&h=600&q=80",
                  "https://images.unsplash.com/photo-1672490305147-2e791a7fbe0b?crop=entropy&cs=tinysrgb&fit=crop&w=500&h=300&q=80",
                  "https://images.unsplash.com/photo-1714919988045-f47e43a10aac?crop=entropy&cs=tinysrgb&fit=crop&w=500&h=300&q=80",
                  "https://images.unsplash.com/photo-1623050596227-3e5c5fb0e37e?crop=entropy&cs=tinysrgb&fit=crop&w=500&h=300&q=80",
                  "https://images.unsplash.com/photo-1741578414826-15feae607817?crop=entropy&cs=tinysrgb&fit=crop&w=500&h=300&q=80"
                ];
                const captions = [
                  "Tribal nursery, Jharkhand",
                  "Mangrove planting, Sundarbans",
                  "Spotted deer, Kanha",
                  "Deodar forest, Uttarakhand",
                  "Oak canopy, Western Ghats",
                  "Miyawaki drive, Delhi",
                  "River cleanup, Yamuna",
                  "Volunteer camp, Kerala"
                ];
                const spanClass = i === 0
                  ? "col-span-2 row-span-2"
                  : i === 3
                  ? "col-span-1 row-span-2"
                  : "col-span-1 row-span-1";
                return (
                  <Reveal key={i} delay={i * 50} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${spanClass}`}>
                    <img
                      src={realImages[i]}
                      alt={captions[i]}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Always-on dark vignette at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                        <span className="h-1 w-4 rounded-full bg-leaf" />
                        {captions[i]}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
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
