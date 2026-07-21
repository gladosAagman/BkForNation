import type { Metadata } from "next";
import Client from "./Client";
export const metadata: Metadata = { title: "Contact — BKforNation", description: "Write to us about volunteering, donations, CSR partnerships, or press. We respond within 48 hours." };
export default function Page() { return <Client />; }
