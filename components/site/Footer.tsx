import Link from "next/link";
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { brand, footerNav } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-forest text-white">
      <div className="container-nice py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={brand.markUrl} alt="" className="h-12 w-12 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
              <div>
                <div className="font-display font-bold text-lg">
                  BK<span className="text-leaf">for</span>Nation
                </div>
                <div className="text-xs text-white/60 tracking-wider uppercase">{brand.tagline}</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              A community of climate volunteers restoring India's forests, coasts, and cities — one native seedling at a time.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, href: brand.social.instagram, label: "Instagram" },
                { Icon: Twitter, href: brand.social.twitter, label: "Twitter" },
                { Icon: Linkedin, href: brand.social.linkedin, label: "LinkedIn" },
                { Icon: Youtube, href: brand.social.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 grid place-items-center hover:bg-leaf hover:text-forest transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {footerNav.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-widest text-leaf/90 font-semibold">{col.title}</div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link href={l.to} className="text-sm text-white/75 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 grid gap-4 md:grid-cols-3 text-sm text-white/70">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-leaf" /> {brand.email}</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-leaf" /> {brand.phone}</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-leaf" /> {brand.address}</div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} BKforNation. Registered under 80G & 12A.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
