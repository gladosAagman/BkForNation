import type { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate — BKforNation",
  description: "Every donation is tied to a geo-tagged plot. Tax-deductible under 80G. Certificates emailed within 48 hours.",
};

export default function Page() {
  return <DonateClient />;
}
