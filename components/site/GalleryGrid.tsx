"use client";
import { useState } from "react";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { Reveal } from "./Reveal";
import { galleryImages, galleryExtraImages } from "@/data/site";

export function GalleryGrid() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3">
        {galleryImages.map((img, i) => (
          <Reveal
            key={img.imageUrl}
            delay={(i % 6) * 40}
            className={`relative overflow-hidden rounded-2xl group ${img.span}`}
          >
            <Image
              src={img.imageUrl}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {img.alt}
            </div>
            <Leaf className="absolute bottom-3 right-3 h-6 w-6 text-white/70" />
          </Reveal>
        ))}

        {showMore &&
          galleryExtraImages.map((img, i) => (
            <Reveal
              key={img.imageUrl}
              delay={(i % 6) * 40}
              className="relative overflow-hidden rounded-2xl group"
            >
              <Image
                src={img.imageUrl}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </div>
              <Leaf className="absolute bottom-3 right-3 h-6 w-6 text-white/70" />
            </Reveal>
          ))}
      </div>

      {!showMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowMore(true)}
            className="rounded-full bg-forest text-white px-6 py-3 text-sm font-bold hover:bg-emerald transition-colors magnetic"
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
}