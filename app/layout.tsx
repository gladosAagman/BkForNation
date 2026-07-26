import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingLeaves } from "@/components/site/FloatingLeaves";

export const metadata: Metadata = {
  title: "BKforNation — Plant. Protect. Inspire.",
  description:
    "BKforNation is a climate-action NGO restoring native forests, coasts, and cities across India. Plant a tree, volunteer, or partner with us.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "BKforNation — Plant. Protect. Inspire.",
    description:
      "A community of 24,800+ volunteers restoring India's forests, coasts, and cities — one native seedling at a time.",
    type: "website",
    siteName: "BKforNation",
  },
  twitter: { card: "summary_large_image", site: "@BKforNation" },
};

export const viewport: Viewport = {
  themeColor: "#146C43",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col relative">
          <FloatingLeaves />
          <Header />
          <main className="flex-1 relative z-[1]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}