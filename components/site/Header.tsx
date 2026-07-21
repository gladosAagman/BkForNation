"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { brand, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-500", scrolled ? "py-2" : "py-4")}>
      <div className="container-nice">
        <div className={cn(
          "flex items-center justify-between rounded-full pl-3 pr-2 md:pl-4 md:pr-3 py-2 transition-all duration-500 border",
          overlay ? "bg-forest/20 backdrop-blur-xl border-white/25 shadow-glow" : "glass border-border/60 shadow-soft",
        )}>
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <img src={brand.markUrl} alt={`${brand.name} logo`} className={cn("h-11 w-11 object-contain transition-all", overlay ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" : "drop-shadow-sm")} />
            <span className={cn("font-display font-bold text-lg tracking-tight leading-none transition-colors", overlay ? "text-white drop-shadow" : "text-forest")}>
              <span className="block">
                BK<span className={overlay ? "text-leaf" : "text-emerald"}>for</span>Nation
              </span>
              <span className={cn("block text-[10px] font-medium tracking-[0.22em] uppercase mt-0.5 transition-colors", overlay ? "text-leaf" : "text-emerald")}>
                Plant · Protect · Inspire
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link key={item.to} href={item.to}
                  className={cn("px-3.5 py-2 text-sm rounded-full transition-colors",
                    active
                      ? overlay ? "text-white bg-white/20 font-semibold" : "text-forest bg-accent font-semibold"
                      : overlay ? "text-white/85 hover:text-white hover:bg-white/15 font-medium" : "text-foreground/75 hover:text-forest hover:bg-accent/60 font-medium",
                  )}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link href="/donate" className={cn("hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold magnetic transition-colors",
              overlay ? "bg-white text-forest shadow-glow" : "bg-hero text-white shadow-soft")}>
              <Heart className="h-4 w-4" /> Donate
            </Link>
            <button type="button" onClick={() => setOpen((v) => !v)}
              className={cn("lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full transition-colors",
                overlay ? "bg-white/15 text-white ring-1 ring-white/30" : "bg-accent/60 text-forest")}
              aria-label="Toggle navigation">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-3xl glass shadow-soft border border-border/60 p-3">
            <nav className="flex flex-col">
              {nav.map((item) => (
                <Link key={item.to} href={item.to} className="px-4 py-3 rounded-2xl text-sm font-medium text-foreground/80 hover:bg-accent/60 hover:text-forest">
                  {item.label}
                </Link>
              ))}
              <Link href="/donate" className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-hero px-4 py-3 text-sm font-semibold text-white">
                <Heart className="h-4 w-4" /> Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
