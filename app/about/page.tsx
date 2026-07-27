import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { timeline, impactStats } from "@/data/site";
import { ArrowRight, Trees, Heart, ShieldCheck, Leaf } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About BKforNation — A decade of native forests',
  description: 'Since 2016, BKforNation has restored native ecosystems across 14 Indian states with tribal panchayats, city schools, and coastal co-ops.',
};

const values = [
  {
    icon: Trees,
    title: "Native species only",
    body: "We plant what belongs. Every sapling is chosen from regional seed banks to match the local soil, water table, and wildlife. No exotic shortcuts.",
  },
  {
    icon: Heart,
    title: "Community-led, always",
    body: "Tribal panchayats, village women's groups, and local schools own every plot. We don't parachute in — we listen, hire locally, and leave the forest theirs.",
  },
  {
    icon: ShieldCheck,
    title: "Radical transparency",
    body: "Every tree is geo-tagged. Every rupee is accounted for. Donors receive photos at 3, 12, and 36 months — audited by an independent ecology partner.",
  },
  {
    icon: Leaf,
    title: "Zero greenwashing",
    body: "No eucalyptus. No monocultures. No photo-op plantations. If a partner can't talk survival rates and species ratios, we walk away.",
  },
];

export default function About() {
  return (
    <>
      {/* ── Hero — matches Home's exact treatment: full viewport height,
          vertically centered content, diagonal forest→emerald gradient
          with two soft radial glows, bottom fade into page background. ── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24">
        <img
          src="/images/about_hero.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest/90 via-forest/70 to-emerald/50" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, oklch(0.85 0.18 130 / 0.35), transparent 45%), radial-gradient(circle at 85% 70%, oklch(0.55 0.15 160 / 0.5), transparent 50%)",
          }}
        />

        <div className="container-nice relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 text-leaf px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
              About us
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] text-balance max-w-4xl drop-shadow-xl">
              A quiet promise,{" "}
              <span className="italic font-medium text-leaf">kept for a decade.</span>
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
              Founded in 2016 after India's worst smog winter, BKforNation grew from a Delhi living room into a movement across 14 states — with tribal panchayats, city schools, and coastal co-ops planting alongside us.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/campaigns" className="inline-flex items-center gap-2 rounded-full bg-leaf text-forest font-bold px-7 py-3.5 hover:bg-emerald transition-colors text-sm shadow-glow">
                See our campaigns <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/donate" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white font-bold px-7 py-3.5 hover:bg-white/20 transition-colors text-sm">
                Donate now
              </Link>
            </div>
          </Reveal>
        </div>

        <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* ── Impact Stats Bar ──────────────────────────────── */}
      <section className="bg-forest py-12">
        <div className="container-nice">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 md:divide-x divide-white/20">
            {impactStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className="text-center md:px-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-leaf">
                  {s.value.toLocaleString("en-IN")}{s.suffix}
                </div>
                <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-medium">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-white to-[#f0fdf4]">
        <div className="container-nice">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <Reveal className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img
                  src="/images/about_story.jpg"
                  alt="Indian hands holding a tree sapling"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Floating stat card */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white">
                  <div className="font-display text-4xl font-bold text-forest">82%</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">36-month sapling<br />survival rate</div>
                </div>
              </div>
              {/* Decorative blob */}
              <div aria-hidden className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-leaf/20 blur-3xl -z-10" />
            </Reveal>

            {/* Text */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 border border-emerald/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                Our story
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight text-balance">
                It started with 200 saplings and a bare slope.
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In the winter of 2016, Delhi choked under the worst smog in recorded history. A small group of ecologists, educators, and ordinary citizens met in a living room in Vasant Vihar and asked a single question: what would actually fix this?
                </p>
                <p>
                  The answer wasn't one big gesture. It was 200 native saplings, planted on a wind-eroded slope in Almora, Uttarakhand — managed not by us, but by the tribal families who lived there. We just provided the seeds and the science.
                </p>
                <p>
                  Nine years later, that slope is a thriving forest. The village school below it now teaches children the names of 40 bird species that have returned. And BKforNation has grown into a movement operating across 14 Indian states.
                </p>
              </div>
              <Link href="/mission" className="mt-8 inline-flex items-center gap-2 text-forest font-bold hover:text-emerald hover:gap-3 transition-all">
                Read our mission <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-24 md:py-28 bg-[#f8faf9] border-t border-border/60">
        <div className="container-nice">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5 border border-emerald/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              What we stand for
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest text-balance">
              Our non-negotiables.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <TiltCard className="h-full rounded-3xl bg-white border border-border/50 p-8 shadow-soft flex flex-col group hover:shadow-glow hover:border-emerald/40 transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-emerald/10 flex items-center justify-center mb-6 group-hover:bg-emerald/20 transition-colors">
                    <v.icon className="h-6 w-6 text-emerald" />
                  </div>
                  <div className="font-display text-lg font-bold text-forest mb-3">{v.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{v.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f0fdf4]">
        <div className="container-nice">
          <Reveal className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5 border border-emerald/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              Timeline
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest text-balance">
              Ten years, one canopy at a time.
            </h2>
          </Reveal>

          <div className="relative">
            {/* Center line */}
            <div aria-hidden className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald/40 via-emerald/20 to-transparent -translate-x-px" />

            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`relative grid md:grid-cols-2 md:gap-16 items-center`}>
                    {/* Content — alternates left/right */}
                    <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                      <TiltCard className="inline-block bg-white border border-border/50 rounded-3xl p-7 shadow-soft hover:shadow-glow text-left md:text-inherit w-full md:w-auto hover:border-emerald/40 transition-all duration-300">
                        <div className="font-display text-3xl font-bold text-emerald mb-1">{t.year}</div>
                        <div className="font-display font-bold text-lg text-forest">{t.title}</div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                      </TiltCard>
                    </div>

                    {/* Centre dot */}
                    <div aria-hidden className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-leaf ring-4 ring-white shadow-glow" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8faf9]">
        <div className="container-nice">
          <Reveal className="rounded-[2.5rem] bg-forest text-white p-10 md:p-16 overflow-hidden relative shadow-glow">
            <div aria-hidden className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-widest text-leaf font-semibold mb-4">Join us</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
                  Be part of India's largest community forest movement.
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  Whether you plant, donate, or spread the word — every action adds to the canopy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf text-forest font-bold px-7 py-4 hover:bg-emerald transition-colors shadow-glow text-sm">
                  Volunteer <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 text-white font-bold px-7 py-4 hover:bg-white/20 transition-colors text-sm">
                  Donate
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}