import type { Metadata } from "next";
import Client from "./Client";
export const metadata: Metadata = { title: "Volunteer with BKforNation", description: "" };
export default function Page() { return <Client />; }
