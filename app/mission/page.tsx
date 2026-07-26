import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { Sprout, ShieldCheck, Users, ArrowRight, TreePine, Droplets, Globe, HeartHandshake } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Mission — BKforNation',
  description: 'Plant native forests, protect ecosystems, and inspire the next generation of climate leaders.',
};

const pillars = [
  {
    icon: Sprout,
    number: "01",
    title: "Plant",
    color: "from-emerald/20 to-leaf/10",
    accent: "text-emerald",
    iconBg: "bg-emerald/15",
    body: "1.28 million native trees across 14 states. Every seedling is chosen for its ecosystem, not its growth speed. Tribal-led nurseries. Community land trusts. No shortcuts.",
    stat: "1.28M+ trees",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Protect",
    color: "from-forest/10 to-emerald/10",
    accent: "text-forest",
    iconBg: "bg-forest/10",
    body: "36-month monitoring, geo-tagged plots, and independent ecology audits on every restored patch. We don't plant and disappear — we stay until the forest can stand on its own.",
    stat: "82% survival rate",
  },
  {
    icon: Users,
    number: "03",
    title: "Inspire",
    color: "from-leaf/10 to-emerald/5",
    accent: "text-leaf",
    iconBg: "bg-leaf/15",
    body: "School curricula, city Miyawaki workshops, and 24,800 trained volunteers. We build the next generation of climate leaders who know the difference between a plantation and a forest.",
    stat: "24,800 volunteers",
  },
];

const sdgs = [
  { code: "SDG 13", label: "Climate Action", icon: Globe, color: "border-emerald/40 bg-emerald/5", text: "text-emerald" },
  { code: "SDG 15", label: "Life on Land", icon: TreePine, color: "border-leaf/40 bg-leaf/5", text: "text-leaf" },
  { code: "SDG 6", label: "Clean Water", icon: Droplets, color: "border-sky-400/40 bg-sky-50", text: "text-sky-600" },
  { code: "SDG 5", label: "Gender Equality", icon: HeartHandshake, color: "border-purple-300/40 bg-purple-50", text: "text-purple-600" },
];

const principles = [
  { title: "Native species only", body: "We plant what already belongs in that soil. No exotic monocultures, no eucalyptus. Period." },
  { title: "Community ownership", body: "Every forest we restore is handed back to the community that lives there. We are facilitators, not owners." },
  { title: "Radical transparency", body: "Every rupee, every GPS coordinate, every photo at 3, 12, and 36 months — all public and independently audited." },
  { title: "Science-first decisions", body: "Species ratios, canopy density, soil health — all decisions are driven by ecologists, not marketing teams." },
  { title: "Long-term commitment", body: "We don't celebrate on planting day. We celebrate at 36 months, when survival rates prove the forest is real." },
  { title: "Zero greenwashing", body: "We walk away from any partnership that treats a forest as a PR asset rather than a living ecosystem." },
];

export default function Mission() {
  return (
    <>
      {/* ── Cinematic Hero ───────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* Background image & overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mission_hero.jpg"
            alt="Aerial view of a vast restored native forest in India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/30 to-transparent" />
        </div>

        <div className="container-nice relative z-10 pb-20 md:pb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 text-leaf px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
              Our mission
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-[1.0] tracking-tight drop-shadow-xl">
              Plant.{" "}
              <span className="text-leaf italic font-medium">Protect.</span>{" "}
              Inspire.
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
              Three verbs. One promise. We turn climate anxiety into measurable canopies — built with the communities who live under them.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/campaigns" className="inline-flex items-center gap-2 rounded-full bg-leaf text-forest font-bold px-7 py-3.5 hover:bg-emerald transition-colors text-sm shadow-glow">
                See our campaigns <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/impact" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white font-bold px-7 py-3.5 hover:bg-white/20 transition-colors text-sm">
                View impact
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs font-medium animate-bounce">
          <div className="h-8 w-px bg-white/30" />
          Scroll
        </div>
      </section>

      {/* ── Three Pillars ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f0fdf4]">
        <div className="container-nice">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5 border border-emerald/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              What we do
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest text-balance">
              Three commitments.<br />Measured. Audited. Kept.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <TiltCard className={`h-full rounded-3xl bg-gradient-to-br ${p.color} border border-border/40 p-8 shadow-soft group hover:shadow-glow hover:border-emerald/30 transition-all duration-300 flex flex-col`}>
                  <div className="flex items-start justify-between mb-8">
                    <div className={`h-14 w-14 rounded-2xl ${p.iconBg} flex items-center justify-center`}>
                      <p.icon className={`h-7 w-7 ${p.accent}`} />
                    </div>
                    <span className="font-display text-5xl font-bold text-black/5 select-none">{p.number}</span>
                  </div>
                  <h3 className={`font-display text-4xl font-bold ${p.accent} mb-4`}>{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{p.body}</p>
                  <div className={`mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 border border-border/40 px-4 py-2 text-xs font-bold ${p.accent}`}>
                    {p.stat}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────── */}
      <section className="py-24 md:py-28 bg-forest relative overflow-hidden">
        <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-leaf/20 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" />
        <div className="container-nice relative z-10">
          <Reveal className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-leaf px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5 border border-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
              How we work
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance max-w-xl">
              The principles we refuse to compromise on.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((pr, i) => (
              <Reveal key={pr.title} delay={i * 80}>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/10 transition-colors duration-300 group">
                  <div className="h-1 w-8 rounded-full bg-leaf mb-5 group-hover:w-14 transition-all duration-300" />
                  <h3 className="font-display text-lg font-bold text-white mb-3">{pr.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pr.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDG Alignment ────────────────────────────────── */}
      <section className="py-24 md:py-28 bg-[#f8faf9] border-t border-border/60">
        <div className="container-nice">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 border border-emerald/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                SDG alignment
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest text-balance">
                Aligned with the goals that matter globally.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our work maps directly to four UN Sustainable Development Goals — independently audited every year so you know our alignment is real, not a badge on a slide deck.
              </p>
              <Link href="/impact" className="mt-8 inline-flex items-center gap-2 text-forest font-bold hover:text-emerald hover:gap-3 transition-all">
                View our impact dashboard <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {sdgs.map((s) => (
                  <TiltCard key={s.code} className={`rounded-3xl border ${s.color} p-7 text-center shadow-soft hover:shadow-glow transition-all duration-300`}>
                    <div className={`h-12 w-12 mx-auto rounded-2xl bg-white flex items-center justify-center mb-4 shadow-soft`}>
                      <s.icon className={`h-6 w-6 ${s.text}`} />
                    </div>
                    <div className={`font-display text-2xl font-bold ${s.text}`}>{s.code}</div>
                    <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</div>
                  </TiltCard>
                ))}
              </div>
            </Reveal>
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
                <div className="text-xs uppercase tracking-widest text-leaf font-semibold mb-4">Take action</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
                  The mission only works if we do it together.
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  Plant a tree, fund a campaign, or volunteer your weekend. Every action adds to the canopy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf text-forest font-bold px-7 py-4 hover:bg-emerald transition-colors shadow-glow text-sm">
                  Donate now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 text-white font-bold px-7 py-4 hover:bg-white/20 transition-colors text-sm">
                  Volunteer
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
