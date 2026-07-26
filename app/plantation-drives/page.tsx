import { PageHero } from "@/components/site/PageHero";
import { DriveCard } from "@/components/site/DriveCard";
import { drives } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Plantation Drives — BKforNation",
  description: "Join a drive near you. Monthly plantation events across Indian cities and rural sites.",
};

export default function PlantationDrivesPage() {
  return (
    <>
      <PageHero
        eyebrow="Plantation Drives"
        title="Show up. Dig in. Change the map."
        subtitle="Every weekend, somewhere in India, our volunteers are planting a forest. Here's where to find them."
        backgroundImage="/images/drives-hero.jpg"
      />
      {/* -mt-8 pulls the card grid up so it overlaps the hero's bottom
          fade, matching the homepage's peek-over-the-edge rhythm. */}
      <section className="relative -mt-8 z-10 pb-24">
        <div className="container-nice grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drives.map((drive, i) => (
            <DriveCard key={drive.slug} drive={drive} delay={i * 0.1} />
          ))}
        </div>
      </section>
    </>
  );
}