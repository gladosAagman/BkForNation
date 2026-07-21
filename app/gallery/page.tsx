import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { galleryImages } from "@/data/site";
import { Leaf } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Gallery — BKforNation',
  description: 'Photos from the field: volunteers, tribal nurseries, restored slopes, aerial forests, and community drives.',
};

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A decade in green."
        subtitle="Photographs from tribal nurseries, coastal restoration, urban Miyawaki drives, and the volunteers who make it all happen."
      />
      <section className="pb-24">
        <div className="container-nice">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <Reveal
                key={i}
                delay={(i % 6) * 40}
                className={`relative overflow-hidden rounded-2xl group ${img.span}`}
              >
                <div
                  className="absolute inset-0 magnetic"
                  style={{ background: `linear-gradient(135deg, oklch(0.55 0.13 ${img.hue}), oklch(0.35 0.08 ${img.hue}))` }}
                />
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `radial-gradient(circle at 30% 30%, oklch(0.85 0.15 ${img.hue} / 0.6), transparent 50%)` }} />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </div>
                <Leaf className="absolute bottom-3 right-3 h-6 w-6 text-white/70" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
