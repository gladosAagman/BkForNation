"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Leaf, Sprout, TreePine, TreeDeciduous, Flower2, Cloud, Bird, Sun, Feather, Globe2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Variant = { icons: LucideIcon[]; colors: string[]; count: number; size: [number, number]; duration: [number, number]; opacity: number; };

const VARIANTS: Record<string, Variant> = {
  "/":                  { icons: [Leaf, Sprout, TreeDeciduous], colors: ["text-leaf","text-emerald","text-gold"], count: 4, size: [18, 30], duration: [34, 48], opacity: 0.35 },
  "/about":             { icons: [Leaf, Feather, Sprout],       colors: ["text-emerald","text-leaf"],             count: 3, size: [18, 28], duration: [38, 52], opacity: 0.3 },
  "/mission":           { icons: [TreePine, Sprout, Leaf],      colors: ["text-forest","text-emerald","text-leaf"], count: 3, size: [20, 30], duration: [36, 50], opacity: 0.3 },
  "/campaigns":         { icons: [Leaf, Flower2, Sparkles],     colors: ["text-leaf","text-gold"],                count: 4, size: [18, 28], duration: [34, 48], opacity: 0.35 },
  "/plantation-drives": { icons: [Sprout, Leaf, Sun],           colors: ["text-leaf","text-emerald","text-gold"], count: 4, size: [18, 28], duration: [34, 48], opacity: 0.35 },
  "/impact":            { icons: [Globe2, TreeDeciduous, Leaf], colors: ["text-emerald","text-leaf"],             count: 3, size: [20, 30], duration: [38, 52], opacity: 0.3 },
  "/volunteer":         { icons: [Sprout, Leaf, Feather],       colors: ["text-leaf","text-emerald"],             count: 4, size: [18, 28], duration: [34, 46], opacity: 0.35 },
  "/donate":            { icons: [Sparkles, Leaf, Flower2],     colors: ["text-gold","text-leaf"],                count: 4, size: [16, 26], duration: [36, 48], opacity: 0.35 },
  "/csr":               { icons: [TreePine, Globe2, Leaf],      colors: ["text-forest","text-emerald"],           count: 3, size: [20, 30], duration: [38, 52], opacity: 0.3 },
  "/gallery":           { icons: [Flower2, Leaf, Sparkles],     colors: ["text-leaf","text-gold"],                count: 4, size: [18, 28], duration: [34, 48], opacity: 0.35 },
  "/videos":            { icons: [Cloud, Leaf, Sparkles],       colors: ["text-leaf","text-gold"],                count: 3, size: [18, 28], duration: [38, 52], opacity: 0.3 },
  "/testimonials":      { icons: [Feather, Leaf, Sparkles],     colors: ["text-leaf","text-gold"],                count: 3, size: [18, 26], duration: [38, 52], opacity: 0.3 },
  "/faq":               { icons: [Leaf, Sprout],                colors: ["text-emerald","text-leaf"],             count: 3, size: [16, 24], duration: [40, 54], opacity: 0.25 },
  "/contact":           { icons: [Bird, Leaf, Feather],         colors: ["text-leaf","text-emerald"],             count: 4, size: [18, 28], duration: [36, 48], opacity: 0.3 },
  "/privacy":           { icons: [Leaf],                        colors: ["text-emerald"],                         count: 2, size: [16, 22], duration: [42, 56], opacity: 0.2 },
  "/terms":             { icons: [Leaf],                        colors: ["text-emerald"],                         count: 2, size: [16, 22], duration: [42, 56], opacity: 0.2 },
};

const DEFAULT_VARIANT: Variant = { icons: [Leaf, Sprout], colors: ["text-leaf","text-emerald"], count: 3, size: [18, 26], duration: [38, 52], opacity: 0.3 };

function seeded(seed: number) {
  let s = seed;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

export function FloatingLeaves() {
  const pathname = usePathname() ?? "/";
  const variant = VARIANTS[pathname] ?? DEFAULT_VARIANT;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const drifters = useMemo(() => {
    const seed = Array.from(pathname).reduce((a, c) => a + c.charCodeAt(0), 7);
    const rand = seeded(seed);
    const count = isMobile ? Math.max(1, Math.ceil(variant.count / 2)) : variant.count;
    const scale = isMobile ? 0.75 : 1;
    return Array.from({ length: count }).map((_, i) => {
      const Icon = variant.icons[i % variant.icons.length];
      const color = variant.colors[i % variant.colors.length];
      const size = Math.round((variant.size[0] + rand() * (variant.size[1] - variant.size[0])) * scale);
      const duration = variant.duration[0] + rand() * (variant.duration[1] - variant.duration[0]);
      const top = Math.round(rand() * 92);
      const delay = -(rand() * duration);
      const rotate = Math.round(rand() * 360);
      return { Icon, color, size, duration, top, delay, rotate, key: i };
    });
  }, [pathname, variant, isMobile]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ opacity: variant.opacity }}>
      {drifters.map((d) => (
        <d.Icon key={d.key} className={`absolute ${d.color}`}
          style={{ top: `${d.top}%`, left: "-8%", width: d.size, height: d.size, transform: `rotate(${d.rotate}deg)`, animation: `drift ${d.duration}s linear ${d.delay}s infinite` }} />
      ))}
    </div>
  );
}
