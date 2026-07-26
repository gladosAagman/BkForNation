export const brand = {
  name: "BKforNation",
  tagline: "Plant · Protect · Inspire",
  mission:
    "We plant native forests, protect fragile ecosystems, and inspire the next generation of climate leaders — one seedling, one school, one city at a time.",
  logoUrl: "/images/bk-logo-v2.png",
  markUrl: "/images/bk-mark-v2.png",
  email: "hello@bkfornation.org",
  phone: "+91 98765 43210",
  address: "Green Wing, Sector 21, New Delhi, India",
  social: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
} as const;

export const media = {
  hero: "/images/hero-forest.jpg",
  beforeSlope: "/images/almora_before.jpg",
  afterForest: "/images/almora_after.jpg",
  campaignImages: {
    "million-mangroves": "/images/campaign_mangroves.jpg",
    "himalayan-canopy": "/images/campaign_himalayan.jpg",
    "urban-lungs": "/images/campaign-urban.jpg",
    "river-revive": "/images/campaign-river.jpg",
  } as Record<string, string>,
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/campaigns", label: "Campaigns" },
  { to: "/plantation-drives", label: "Drives" },
  { to: "/impact", label: "Impact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { title: "Organization", links: [
    { to: "/about", label: "About us" },
    { to: "/mission", label: "Our mission" },
    { to: "/impact", label: "Impact dashboard" },
    { to: "/testimonials", label: "Testimonials" },
  ]},
  { title: "Get involved", links: [
    { to: "/volunteer", label: "Volunteer" },
    { to: "/donate", label: "Donate" },
    { to: "/csr", label: "Corporate CSR" },
    { to: "/campaigns", label: "Campaigns" },
  ]},
  { title: "Explore", links: [
    { to: "/gallery", label: "Gallery" },
    { to: "/videos", label: "Videos" },
    { to: "/blogs", label: "Blogs" },
    { to: "/faq", label: "FAQ" },
  ]},
  { title: "Legal", links: [
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
    { to: "/contact", label: "Contact" },
  ]},
] as const;

export const impactStats = [
  { label: "Trees planted", value: 1_284_500, suffix: "+" },
  { label: "Active volunteers", value: 24_800, suffix: "+" },
  { label: "Cities reached", value: 142, suffix: "" },
  { label: "CO₂ offset (tons)", value: 38_600, suffix: "+" },
  { label: "Partner NGOs", value: 87, suffix: "" },
];

export const campaigns = [
  { slug: "million-mangroves", title: "A Million Mangroves", location: "Sundarbans, West Bengal", goal: 1_000_000, raised: 612_400, summary: "Rebuilding coastal defenses with indigenous mangrove species to shield 40 villages from tidal surges.", tag: "Coastal" },
  { slug: "himalayan-canopy", title: "Himalayan Canopy", location: "Uttarakhand foothills", goal: 500_000, raised: 318_900, summary: "Restoring native oak and deodar forests across landslide-prone slopes with tribal guardians.", tag: "Reforestation" },
  { slug: "urban-lungs", title: "Urban Lungs", location: "12 Indian metros", goal: 250_000, raised: 191_200, summary: "Creating Miyawaki micro-forests inside schools, hospitals, and rooftops in high-pollution districts.", tag: "Urban" },
  { slug: "river-revive", title: "River Revive", location: "Yamuna & Kaveri basins", goal: 750_000, raised: 402_500, summary: "Riverbank plantations and community-led cleanups to restore 380 km of degraded waterways.", tag: "Water" },
];

export const donationTiers = [
  { amount: 100, trees: 2, impact: "Plants 2 native saplings with tribal guardians." },
  { amount: 500, trees: 12, impact: "Plants 12 trees + 3 months of care." },
  { amount: 1000, trees: 25, impact: "Sponsors an entire school Miyawaki row." },
  { amount: 2500, trees: 65, impact: "Restores a 200 m² urban micro-forest." },
];

export const whyTrees = [
  { title: "Cleaner Air", body: "One mature tree filters ~22 kg of CO₂ every year and returns oxygen for 2 people." },
  { title: "Cooler Cities", body: "Urban canopies reduce ambient temperature by up to 5°C during heat waves." },
  { title: "Water Security", body: "Roots recharge aquifers and prevent 30% more topsoil erosion after monsoons." },
  { title: "Biodiversity", body: "A native forest patch hosts 8× more pollinators and songbirds than a monoculture." },
  { title: "Livelihoods", body: "Community nurseries create year-round income for rural women and tribal families." },
  { title: "Climate resilience", body: "Restored ecosystems buffer floods, droughts, and coastal erosion." },
];

export const testimonials = [
  { name: "Ananya Rao", role: "Volunteer, Bengaluru", quote: "Planting with BKforNation felt like joining a movement, not an event. Six months later, our patch is already home to sunbirds." },
  { name: "Dr. Vivek Menon", role: "Ecologist, WCS-India", quote: "Their species selection and monitoring rigor is what sets BKforNation apart from feel-good plantation drives." },
  { name: "Rhea Kapoor", role: "Head of CSR, Meridian Bank", quote: "The quarterly impact reports are pristine. Our board sees exactly where every rupee goes — and what it grows into." },
  { name: "Kamal Bhatt", role: "Sarpanch, Almora", quote: "They didn't parachute in. They listened, hired locally, and left our slopes greener than they found them." },
];

export const blogs = [
  { slug: "miyawaki-explained", title: "The Miyawaki method, explained without the jargon", date: "2026-05-12", category: "Science", excerpt: "How a Japanese botanist's density-first approach lets a forest grow 10× faster — and why we use it in Indian cities.", read: 6 },
  { slug: "why-native-species", title: "Why we refuse to plant eucalyptus, ever", date: "2026-04-02", category: "Field notes", excerpt: "Native species aren't a preference — they're the difference between a plantation and a living forest.", read: 4 },
  { slug: "csr-that-works", title: "The 3 questions every CSR head should ask before funding a plantation", date: "2026-03-18", category: "Corporate", excerpt: "Survival rate, native ratio, monitoring window. If a partner can't answer these, walk away.", read: 5 },
  { slug: "monsoon-2025", title: "Monsoon 2025 field report: what 412,000 saplings taught us", date: "2026-02-01", category: "Impact", excerpt: "A candid look at what worked, what died, and how we're adapting for the drier years ahead.", read: 8 },
];

export const faqs = [
  { q: "How do I know my donation actually plants a tree?", a: "Every donation is tied to a geo-tagged plot. You receive a certificate with GPS coordinates, species list, and photos at 3, 12, and 36 months." },
  { q: "Is my donation tax-deductible?", a: "Yes. BKforNation is registered under 80G and 12A of the Indian Income Tax Act. Your receipt is emailed within 48 hours." },
  { q: "What is your sapling survival rate?", a: "Our 36-month survival rate averages 82% across native forest sites and 74% in urban Miyawaki plots — audited annually by an independent ecology partner." },
  { q: "Can my company partner for CSR?", a: "Absolutely. We design custom CSR programs from ₹5 lakh to ₹5 crore with quarterly ESG-aligned impact reports. Write to csr@bkfornation.org." },
  { q: "Do you plant outside India?", a: "Currently we operate across 14 Indian states. International expansion is planned for 2027 with mangrove partners in Southeast Asia." },
  { q: "How do I volunteer?", a: "Register on our Volunteer page. You'll be matched to drives in your city and receive certificates for every 40 hours contributed." },
];

export const galleryImages = [
  { alt: "Volunteers planting saplings at sunrise", hue: 145, span: "row-span-2" },
  { alt: "Aerial view of a restored forest canopy", hue: 130, span: "" },
  { alt: "Children carrying seedlings in a nursery", hue: 100, span: "" },
  { alt: "Tribal community members with saplings", hue: 60, span: "col-span-2" },
  { alt: "Riverbank cleanup with volunteers", hue: 200, span: "" },
  { alt: "Miyawaki micro-forest in a Delhi school", hue: 150, span: "row-span-2" },
  { alt: "Corporate CSR volunteers planting mangroves", hue: 170, span: "" },
  { alt: "Wildlife returning to a restored patch", hue: 40, span: "" },
  { alt: "Earth from space, green continents", hue: 220, span: "col-span-2" },
];

export const videos = [
  { title: "Sundarbans: rebuilding the coast", duration: "3:42", hue: 150 },
  { title: "One monsoon in the Himalayas", duration: "2:18", hue: 130 },
  { title: "Inside a Miyawaki micro-forest", duration: "4:05", hue: 100 },
  { title: "The women of Almora nursery", duration: "5:30", hue: 60 },
];

export const timeline = [
  { year: "2016", title: "A seedling of an idea", body: "Founded in a Delhi living room after the worst smog winter on record." },
  { year: "2018", title: "First 100,000 trees", body: "Partnered with 12 tribal panchayats across Uttarakhand." },
  { year: "2020", title: "Miyawaki in schools", body: "Launched urban micro-forests in 40 government schools." },
  { year: "2023", title: "Coastal expansion", body: "Began mangrove restoration in the Sundarbans with 8 local co-ops." },
  { year: "2026", title: "1.28M trees & counting", body: "Now working across 14 states with 24,800 active volunteers." },
];
