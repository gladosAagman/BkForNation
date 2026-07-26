"use client";

import { useEffect, useRef, useState } from "react";
import { TreePine, Droplets, Wind } from "lucide-react";

const bars = [
  { year: "2022", trees: 145, water: 82, carbon: 40 },
  { year: "2023", trees: 260, water: 148, carbon: 78 },
  { year: "2024", trees: 388, water: 210, carbon: 118 },
  { year: "2025", trees: 512, water: 289, carbon: 165 },
  { year: "2026", trees: 640, water: 380, carbon: 220 },
];

const series = [
  {
    key: "trees" as const,
    label: "Trees Planted",
    color: "#245D31",
    gradient: "linear-gradient(180deg,#4D9658 0%,#245D31 100%)",
    icon: TreePine,
    unit: "k",
  },
  {
    key: "water" as const,
    label: "Water Saved",
    color: "#4E8F57",
    gradient: "linear-gradient(180deg,#77B96B 0%,#4E8F57 100%)",
    icon: Droplets,
    unit: "ML",
  },
  {
    key: "carbon" as const,
    label: "CO₂ Offset",
    color: "#9ACE52",
    gradient: "linear-gradient(180deg,#B8E76A 0%,#8BC540 100%)",
    icon: Wind,
    unit: "kt",
  },
];

const MAX = 700;

export function ImpactChart() {
  const [started, setStarted] = useState(false);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
  ref={ref}
  className="
relative
overflow-hidden
rounded-[38px]
border
border-green-100
bg-white
p-8
md:p-12
shadow-[0_25px_60px_rgba(20,70,30,0.08)]
"
>
    <div className="absolute inset-0 pointer-events-none">

  <div
    className="
absolute
left-1/2
bottom-0
h-[350px]
w-[700px]
-translate-x-1/2
rounded-full
bg-green-100/40
blur-3xl
"
  />

</div>
      <div className="flex flex-wrap gap-3 mb-10">
  {series.map((item) => (
    <div
      key={item.key}
      className="flex items-center gap-2 rounded-full border border-green-100 bg-green-50/80 px-4 py-2 text-sm font-semibold text-green-900 shadow-sm"
    >
      <item.icon
        className="h-4 w-4"
        style={{ color: item.color }}
      />
      {item.label}
    </div>
  ))}
</div>

      <div className="grid grid-cols-5 gap-8 md:gap-6">
        {bars.map((b, yearIdx) => {
          const isActive = activeYear === yearIdx;
          return (
            <div
              key={b.year}
              className="group flex flex-col items-center"
              onMouseEnter={() => setActiveYear(yearIdx)}
              onMouseLeave={() => setActiveYear(null)}
            >
              <div
                className={`w-full rounded-2xl p-3 md:p-4 flex flex-col items-center transition-all duration-300 ${
                  isActive
  ? "bg-green-50 shadow-xl -translate-y-3 border border-green-100"
  : "hover:bg-green-50/40"
                }`}
              >
                <div className="relative h-96 w-full">

  {/* Grid Lines */}
  <div className="absolute inset-0 pointer-events-none">
    {[20, 40, 60, 80].map((v) => (
      <div
        key={v}
        className="absolute left-0 right-0 border-t border-solid opacity-20 border-green-100"
        style={{
          bottom: `${v}%`,
        }}
      />
    ))}
  </div>

  {/* Bars */}
  <div className="absolute inset-0 flex items-end justify-center gap-4 px-2">
                  {series.map((s, i) => {
                    const pct = (b[s.key] / MAX) * 100;
                    return (
                      <div
  key={s.key}
  className="w-10 md:w-12 h-full flex flex-col justify-end items-center"
>

  {/* Value */}
  <span
    className="mb-2 text-[10px] font-bold transition-all duration-300"
    style={{
      color: s.color,
      opacity: started ? 1 : 0,
      transform: started ? "translateY(0)" : "translateY(10px)",
      transitionDelay: `${yearIdx * 120 + i * 80 + 350}ms`,
    }}
  >
    {b[s.key]}
    {s.unit}
  </span>

  {/* Bar */}
  <div
    className={`
      relative
      w-full
      rounded-t-lg
      shadow-lg
      transition-all
      duration-300
      group-hover:-translate-y-2
    `}
    style={{
      height: started ? `${Math.max(pct, 4)}%` : "0%",
      background: s.gradient,
      transitionDuration: "900ms",
      transitionDelay: `${yearIdx * 120 + i * 80}ms`,
      boxShadow: `0 12px 24px ${s.color}33`,
    }}
  >
    
  </div>

</div>
    
                    );
                  })}
                </div>
                
                </div>
              </div>

              <div className={`
mt-5
text-sm
font-extrabold
tracking-wider
transition-all
duration-300
${isActive ? "text-green-800 scale-110" : "text-green-700"}
`}>
                {b.year}
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}