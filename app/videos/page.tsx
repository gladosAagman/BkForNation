import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { videos } from "@/data/site";
import { PlayCircle } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Videos — BKforNation',
  description: 'Short documentaries from the field: coasts, mountains, cities, and the communities restoring them.',
};

export default function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Short films from the ground."
        subtitle="Ten minutes to see what a decade of quiet work looks like in motion."
      />
      <section className="pb-24">
        <div className="container-nice grid md:grid-cols-2 gap-6">
          {videos.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-soft magnetic cursor-pointer">
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, oklch(0.5 0.13 ${v.hue}), oklch(0.3 0.08 ${v.hue}))` }} />
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 60% 40%, oklch(0.85 0.15 ${v.hue} / 0.5), transparent 50%)` }} />
                <div className="absolute inset-0 grid place-items-center">
                  <PlayCircle className="h-20 w-20 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-forest/90 to-transparent">
                  <div className="text-xs uppercase tracking-widest text-leaf font-semibold">Documentary · {v.duration}</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{v.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
