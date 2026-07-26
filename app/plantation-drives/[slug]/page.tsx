import Link from "next/link";
import { galleryImages } from "@/data/site";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, MapPin, Users, Clock, Leaf, CheckCircle2, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { DriveCard } from "@/components/site/DriveCard";
import { drives } from "@/data/site";
import { ReserveForm } from "./ReserveForm";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return drives.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const drive = drives.find((d) => d.slug === params.slug);
  if (!drive) return { title: "Drive not found — BKforNation" };
  return {
    title: `${drive.city} Plantation Drive — BKforNation`,
    description: drive.description.slice(0, 155),
  };
}

const driveFaqs = [
  { q: "What happens if it rains?", a: "Light rain doesn't stop us — planting in moist soil is actually ideal. Drives are only postponed for severe weather warnings, and you'll be notified by email at least 12 hours in advance." },
  { q: "Is there an age limit?", a: "Volunteers must be 14 or older. Anyone under 18 needs a signed guardian consent form, available when you reserve your spot." },
  { q: "Will I get a certificate?", a: "Yes. Every volunteer receives a digital certificate within 48 hours, and hours contributed count toward our 40-hour volunteer recognition program." },
  { q: "What if I need to cancel?", a: "Cancel up to 24 hours before the drive from your confirmation email and your spot opens up for someone on the waitlist." },
];

function isWeekend(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDay();
  return day === 0 || day === 6;
}

export default function DriveDetailsPage({ params }: PageProps) {
  const drive = drives.find((d) => d.slug === params.slug);
  if (!drive) notFound();

  const pct = Math.round((drive.filled / drive.spots) * 100);
  const spotsLeft = drive.spots - drive.filled;
  const related = drives.filter((d) => d.slug !== drive.slug).slice(0, 3);
  const weekend = isWeekend(drive.date);

  return (
    <>
      {/* HERO — now using the real drive photo (drive.imageUrl) as background */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={drive.imageUrl}
            alt={`${drive.city} plantation drive at ${drive.site}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="container-nice">
          <Reveal className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {weekend && (
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">Weekend drive</span>
              )}
              {drive.beginnerFriendly && (
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">Beginner friendly</span>
              )}
              {drive.ecoCertified && (
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">Eco certified</span>
              )}
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight text-white text-balance">
              {drive.city} Plantation Drive
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-white/90 text-sm font-medium">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {drive.date}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {drive.site}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {drive.durationHrs} hours</span>
              <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" /> {drive.filled}/{drive.spots} volunteers</span>
            </div>
            <a
              href="#reserve"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-forest px-6 py-3.5 text-sm font-bold magnetic"
            >
              {spotsLeft > 0 ? "Reserve a spot" : "Join waitlist"}
            </a>
            <div className="mt-6 max-w-xs h-2 rounded-full bg-white/25 overflow-hidden">
              <div className="h-full bg-white" style={{ width: `${pct}%` }} />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-nice grid lg:grid-cols-3 gap-10 pb-24">
        <div className="lg:col-span-2 space-y-14">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">About this drive</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{drive.description}</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Environmental impact</h2>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-card border border-border p-5 text-center">
                <div className="font-display text-3xl font-bold text-forest">{drive.spots}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Saplings planted</div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-5 text-center">
                <div className="font-display text-3xl font-bold text-forest">~{Math.round(drive.spots * 21.7 / 1000)}t</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">CO₂ absorbed / year at maturity</div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-5 text-center">
                <div className="font-display text-3xl font-bold text-forest">{drive.durationHrs}h</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Volunteer time contributed</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Schedule</h2>
            <div className="mt-5 space-y-4">
              {[
                { t: "Check-in & briefing", d: "30 min" },
                { t: "Site walk & safety orientation", d: "20 min" },
                { t: "Plantation", d: `${drive.durationHrs - 1.5} hrs` },
                { t: "Group photo & wrap-up", d: "15 min" },
              ].map((row) => (
                <div key={row.t} className="flex items-start gap-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-leaf shrink-0" />
                  <div className="flex-1 flex justify-between border-b border-border pb-4">
                    <span className="font-medium text-forest">{row.t}</span>
                    <span className="text-sm text-muted-foreground">{row.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Things to bring</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {drive.thingsToBring.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Organizer</h2>
            <div className="mt-5 rounded-2xl bg-card border border-border p-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-leaf-gradient grid place-items-center text-forest font-display font-bold text-lg shrink-0">
                {drive.organizer.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-display font-bold text-forest">{drive.organizer.name}</div>
                <div className="text-sm text-muted-foreground">{drive.organizer.role}</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Frequently asked questions</h2>
            <div className="mt-5 space-y-3">
              {driveFaqs.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-card border border-border p-5">
                  <summary className="flex items-center justify-between cursor-pointer font-medium text-forest list-none">
                    <span className="inline-flex items-center gap-2"><HelpCircle className="h-4 w-4 text-emerald" /> {f.q}</span>
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground pl-6">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* TODO: Replace with official BKforNation drive photo assets — no
              per-drive extra photos exist yet, so this still uses the
              gradient placeholder technique. */}
          <Reveal>
  <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">From past drives</h2>
  <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
    {(() => {
      // Rotate the starting point through the gallery pool per drive,
      // using the drive's hue as a simple seed, so different drives show
      // a different 4-photo slice instead of all looking identical.
      const start = drive.hue % galleryImages.length;
      const slice = [0, 1, 2, 3].map((i) => galleryImages[(start + i) % galleryImages.length]);
      return slice.map((img) => (
        <div key={img.imageUrl} className="relative h-28 rounded-xl overflow-hidden">
          <Image src={img.imageUrl} alt={img.alt} fill sizes="25vw" className="object-cover" />
        </div>
      ));
    })()}
  </div>
</Reveal>
 

          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Location</h2>
            {/* TODO: Replace with a real embedded map (Google Maps / Mapbox) once an API key is available. */}
            <div className="mt-5 rounded-2xl bg-accent border border-border h-64 grid place-items-center text-center px-6">
              <div>
                <MapPin className="h-6 w-6 text-forest mx-auto" />
                <div className="mt-2 font-display font-bold text-forest">{drive.site}, {drive.city}</div>
                <div className="text-xs text-muted-foreground mt-1">Map integration coming soon</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div id="reserve" className="lg:col-span-1 scroll-mt-28">
          <div className="lg:sticky lg:top-28">
            <ReserveForm city={drive.city} spotsLeft={spotsLeft} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="pb-24 bg-fade">
          <div className="container-nice">
            <Reveal className="mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-forest">Other drives you might like</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((d, i) => (
                <DriveCard key={d.slug} drive={d} delay={i * 60} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 items-center gap-4 rounded-full bg-card/95 glass border border-border shadow-glow px-6 py-3">
        <span className="text-sm font-semibold text-forest">{drive.city} · {drive.date}</span>
        <span className="h-4 w-px bg-border" />
        <span className="text-sm text-muted-foreground">{spotsLeft > 0 ? `${spotsLeft} spots left` : "Waitlist open"}</span>
        <a href="#reserve" className="rounded-full bg-forest text-white px-4 py-2 text-sm font-bold hover:bg-emerald transition-colors">
          Reserve
        </a>
      </div>

      <div className="lg:hidden">
        <Link
          href="#reserve"
          className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-forest text-white px-4 py-3.5 text-sm font-bold text-center shadow-glow"
        >
          {spotsLeft > 0 ? "Reserve a spot" : "Join waitlist"}
        </Link>
      </div>
    </>
  );
}