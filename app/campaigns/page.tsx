import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { campaigns, media } from "@/data/site";
import { ChevronRight, ArrowRight, MapPin } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Campaigns — BKforNation',
  description: 'Live plantation campaigns across mangroves, Himalayan slopes, urban Miyawaki forests, and river basins.',
};

export default function CampaignsPage() {
  return (
    <>
      {/* ── Cinematic Hero ───────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* Background image & overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/campaigns_hero.jpg"
            alt="Aerial view of Indian coastal mangrove restoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/30 to-transparent" />
        </div>

        <div className="container-nice relative z-10 pb-20 md:pb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 text-leaf px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
              Live campaigns
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-[1.0] tracking-tight drop-shadow-xl">
              Choose a forest <br className="hidden md:block" />
              <span className="text-leaf italic font-medium">to grow.</span>
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
              Four active campaigns across coasts, mountains, cities, and rivers — each one geo-tagged, community-led, and monitored for 36 months.
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs font-medium animate-bounce">
          <div className="h-8 w-px bg-white/30" />
          Scroll
        </div>
      </section>

      {/* ── Campaign Cards Grid ──────────────────────────── */}
      <section className="py-24 bg-[#f8faf9]">
        <div className="container-nice grid lg:grid-cols-2 gap-8 md:gap-12">
          {campaigns.map((c, i) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            const imageSrc = media.campaignImages[c.slug as keyof typeof media.campaignImages] || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=crop&w=800&h=600&q=80";

            return (
              <Reveal key={c.slug} delay={i * 100}>
                <TiltCard className="rounded-[2.5rem] overflow-hidden bg-white border border-border/50 shadow-soft hover:shadow-glow hover:border-emerald/40 transition-all duration-500 h-full flex flex-col group">
                  {/* Card Image Header */}
                  <div className="h-64 md:h-80 relative overflow-hidden">
                    <img 
                      src={imageSrc} 
                      alt={c.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur text-forest px-3 py-1.5 text-xs font-bold shadow-soft">
                      {c.tag}
                    </div>
                    
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="inline-flex items-center gap-1.5 text-white/80 text-xs uppercase tracking-wider font-semibold mb-2 drop-shadow-md">
                        <MapPin className="h-3.5 w-3.5 text-leaf" /> {c.location}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{c.title}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed flex-1 text-base md:text-lg">
                      {c.summary}
                    </p>
                    
                    {/* Progress Bar Section */}
                    <div className="mt-8 bg-[#f8faf9] rounded-3xl p-6 border border-border/60">
                      <div className="flex justify-between text-sm font-bold text-forest mb-3">
                        <span className="flex flex-col">
                          <span className="text-2xl text-emerald">{c.raised.toLocaleString("en-IN")}</span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Trees Planted</span>
                        </span>
                        <span className="flex flex-col text-right">
                          <span className="text-2xl">{pct}%</span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">of {c.goal.toLocaleString("en-IN")} Goal</span>
                        </span>
                      </div>
                      <div className="mt-4 h-3 rounded-full bg-border overflow-hidden shadow-inner relative">
                        <div 
                          className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-leaf to-emerald rounded-full transition-all duration-1000 shadow-glow" 
                          style={{ width: `${pct}%` }} 
                        />
                      </div>
                    </div>

                    <Link
                      href="/donate"
                      className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest text-white px-6 py-4 text-base font-bold shadow-soft hover:shadow-glow hover:bg-emerald transition-all duration-300 group/btn"
                    >
                      Support this campaign <ChevronRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── CTA Block ────────────────────────────────────── */}
      <section className="py-24 bg-[#f8faf9] border-t border-border/60">
        <div className="container-nice">
          <Reveal className="rounded-[2.5rem] bg-forest text-white p-10 md:p-16 overflow-hidden relative shadow-glow">
            <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-widest text-leaf font-semibold mb-4">Can't decide?</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
                  Let our ecologists choose where your trees go.
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  Donate to the general fund and we will allocate your trees to the campaign that needs them most this planting season.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf text-forest font-bold px-7 py-4 hover:bg-emerald transition-colors shadow-glow text-sm">
                  Donate to General Fund <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
