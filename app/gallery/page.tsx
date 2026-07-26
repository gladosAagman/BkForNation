import { PageHero } from "@/components/site/PageHero";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { galleryHero } from "@/data/site";

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
        backgroundImage={galleryHero}
      />
      {/* Same -mt-8 overlap rhythm as Home and Drives. */}
      <section className="relative -mt-8 z-10 pb-24">
        <div className="container-nice">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}