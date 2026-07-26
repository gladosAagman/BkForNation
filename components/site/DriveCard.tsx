"use client";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, Clock, Leaf, Sparkles, Sun } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Drive } from "@/data/site";

interface DriveCardProps {
  drive: Drive;
  delay?: number;
}

function isWeekend(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDay();
  return day === 0 || day === 6;
}

export function DriveCard({ drive, delay = 0 }: DriveCardProps) {
  const pct = Math.round((drive.filled / drive.spots) * 100);
  const spotsLeft = drive.spots - drive.filled;
  const isFull = spotsLeft <= 0;
  const weekend = isWeekend(drive.date);

  return (
    <Reveal delay={delay}>
      <div className="group rounded-3xl bg-card border border-border overflow-hidden h-full flex flex-col shadow-soft magnetic">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={drive.imageUrl}
            alt={`${drive.city} plantation drive at ${drive.site}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {weekend && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-forest">
                <Sun className="h-3 w-3" /> Weekend
              </span>
            )}
            {drive.beginnerFriendly && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-forest">
                <Sparkles className="h-3 w-3" /> Beginner friendly
              </span>
            )}
            {drive.ecoCertified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-forest">
                <Leaf className="h-3 w-3" /> Eco certified
              </span>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald font-semibold">
            <Calendar className="h-3.5 w-3.5" /> {drive.date}
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold text-forest">{drive.city}</h3>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {drive.site}
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> {drive.durationHrs} hour drive
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-xs font-semibold text-forest">
              <span className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {drive.filled}/{drive.spots} volunteers
              </span>
              <span className={isFull ? "text-muted-foreground" : spotsLeft <= 15 ? "text-gold" : "text-forest"}>
                {isFull ? "Full" : `${spotsLeft} spots left`}
              </span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-accent overflow-hidden">
              <div className="h-full bg-leaf-gradient" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <Link
            href={`/plantation-drives/${drive.slug}`}
            className="mt-6 w-full rounded-full bg-forest text-white px-4 py-2.5 text-sm font-bold hover:bg-emerald transition-colors text-center inline-block"
          >
            {isFull ? "Join waitlist" : "Reserve a spot"}
          </Link>
        </div>
      </div>
    </Reveal>
  );
}