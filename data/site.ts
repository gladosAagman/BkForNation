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

export function formatCompactIN(value: number): string {
  if (value >= 10_000_000) return `${(value / 10_000_000).toFixed(1)}Cr`;
  if (value >= 100_000) return `${(value / 100_000).toFixed(1)}L`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return value.toString();
}

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

export const faqs = [
  { q: "How do I know my donation actually plants a tree?", a: "Every donation is tied to a geo-tagged plot. You receive a certificate with GPS coordinates, species list, and photos at 3, 12, and 36 months." },
  { q: "Is my donation tax-deductible?", a: "Yes. BKforNation is registered under 80G and 12A of the Indian Income Tax Act. Your receipt is emailed within 48 hours." },
  { q: "What is your sapling survival rate?", a: "Our 36-month survival rate averages 82% across native forest sites and 74% in urban Miyawaki plots — audited annually by an independent ecology partner." },
  { q: "Can my company partner for CSR?", a: "Absolutely. We design custom CSR programs from ₹5 lakh to ₹5 crore with quarterly ESG-aligned impact reports. Write to csr@bkfornation.org." },
  { q: "Do you plant outside India?", a: "Currently we operate across 14 Indian states. International expansion is planned for 2027 with mangrove partners in Southeast Asia." },
  { q: "How do I volunteer?", a: "Register on our Volunteer page. You'll be matched to drives in your city and receive certificates for every 40 hours contributed." },
];

export const galleryImages = [
  { alt: "Volunteers planting a sapling at sunrise", hue: 145, span: "row-span-2", imageUrl: "/images/gallery-01.jpg" },
  { alt: "A restored forest canopy", hue: 130, span: "", imageUrl: "/images/gallery-02.jpg" },
  { alt: "Seedlings ready from our nursery", hue: 100, span: "", imageUrl: "/images/gallery-03.jpg" },
  { alt: "A community planting circle", hue: 60, span: "col-span-2", imageUrl: "/images/gallery-04.jpg" },
  { alt: "A volunteer at work in the field", hue: 150, span: "", imageUrl: "/images/gallery-05.jpg" },
  { alt: "Hundreds of volunteers at a single drive", hue: 150, span: "row-span-2", imageUrl: "/images/gallery-06.jpg" },
  { alt: "Careful hands, one seedling at a time", hue: 170, span: "", imageUrl: "/images/gallery-07.jpg" },
  { alt: "Every tree starts in someone's hands", hue: 40, span: "", imageUrl: "/images/gallery-08.jpg" },
  { alt: "A forest restored to stillness", hue: 220, span: "col-span-2", imageUrl: "/images/gallery-09.jpg" },
];

// Revealed only when the visitor clicks "View more".
export const galleryExtraImages = [
  { alt: "A volunteer planting alone in the field", hue: 155, imageUrl: "/images/gallery-extra-01.jpg" },
  { alt: "Sunlight through fern leaves", hue: 110, imageUrl: "/images/gallery-extra-02.jpg" },
  { alt: "Moss-covered forest floor", hue: 135, imageUrl: "/images/gallery-extra-03.jpg" },
  { alt: "Dappled light through the canopy", hue: 120, imageUrl: "/images/gallery-extra-04.jpg" },
  { alt: "A seedling's first stages of growth", hue: 95, imageUrl: "/images/gallery-extra-05.jpg" },
  { alt: "A young sapling catching the evening light", hue: 45, imageUrl: "/images/gallery-extra-06.jpg" },
  { alt: "A volunteer planting alongside NGO partners", hue: 140, imageUrl: "/images/gallery-extra-07.jpg" },
  { alt: "Rows of seedlings freshly planted", hue: 105, imageUrl: "/images/gallery-extra-08.jpg" },
];

export const galleryHero = "/images/gallery-hero.jpg";

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

export interface Drive {
  slug: string;
  date: string; // e.g. "Aug 03, 2026" — must stay Date-constructor-parseable
  city: string;
  site: string;
  imageUrl: string;
  spots: number;
  filled: number;
  durationHrs: number;
  beginnerFriendly: boolean;
  ecoCertified: boolean;
  hue: number; // placeholder gradient hue, same convention as galleryImages
  description: string;
  thingsToBring: string[];
  organizer: { name: string; role: string };
}

export const drives: Drive[] = [
  {
    slug: "bengaluru-kaikondrahalli-aug-2026",
    date: "Aug 03, 2026",
    city: "Bengaluru",
    site: "Kaikondrahalli Lake",
    imageUrl: "/images/drive-bengaluru.jpg",
    spots: 120,
    filled: 84,
    durationHrs: 3,
    beginnerFriendly: true,
    ecoCertified: true,
    hue: 145,
    description:
      "We're restoring the native lakeside buffer at Kaikondrahalli with over 40 indigenous species — ficus, neem, and flowering canopy trees that once lined Bengaluru's lake ecosystems before the city paved over them. This drive focuses on the western embankment, where erosion has been steadily eating into the shoreline.",
    thingsToBring: [
      "Closed-toe shoes you don't mind getting muddy",
      "A reusable water bottle",
      "Sunscreen and a cap",
      "Gloves (we have spares, but bring your own if you have them)",
    ],
    organizer: { name: "Priya Nambiar", role: "Bengaluru City Lead" },
  },
  {
    slug: "delhi-ncr-aravalli-aug-2026",
    date: "Aug 10, 2026",
    city: "Delhi NCR",
    site: "Aravalli Biodiversity Park",
    imageUrl: "/images/drive-delhi-ncr.jpg",
    spots: 200,
    filled: 141,
    durationHrs: 4,
    beginnerFriendly: true,
    ecoCertified: true,
    hue: 130,
    description:
      "The Aravalli Biodiversity Park is one of the last standing ridgeline forests in the NCR. This drive continues our multi-year effort to replace invasive Prosopis juliflora with native Aravalli species — dhak, kair, and khejri — that support the region's dwindling grassland bird populations.",
    thingsToBring: [
      "Closed-toe shoes",
      "A hat and sunglasses — this site has little shade",
      "Water bottle (refill stations on-site)",
      "A light jacket if arriving for the early slot",
    ],
    organizer: { name: "Arjun Sethi", role: "North India Program Manager" },
  },
  {
    slug: "mumbai-aarey-aug-2026",
    date: "Aug 17, 2026",
    city: "Mumbai",
    site: "Aarey Colony buffer",
    imageUrl: "/images/drive-mumbai.jpg",
    spots: 150,
    filled: 62,
    durationHrs: 3,
    beginnerFriendly: true,
    ecoCertified: true,
    hue: 150,
    description:
      "Aarey's forest buffer has faced years of encroachment pressure. This drive plants a dense native mix — mango, jamun, and mahua — along a 400-metre stretch bordering the Sanjay Gandhi National Park, extending the wildlife corridor that leopards and deer already use to move between forest patches.",
    thingsToBring: [
      "Closed-toe shoes (the terrain is uneven and can be wet)",
      "Mosquito repellent",
      "Water bottle",
      "A change of clothes if you're heading elsewhere after",
    ],
    organizer: { name: "Meera D'Souza", role: "Western Region Lead" },
  },
  {
    slug: "sundarbans-gosaba-aug-2026",
    date: "Aug 24, 2026",
    city: "Sundarbans",
    site: "Gosaba island",
    imageUrl: "/images/drive-sundarbans.jpg",
    spots: 80,
    filled: 71,
    durationHrs: 5,
    beginnerFriendly: false,
    ecoCertified: true,
    hue: 200,
    description:
      "Gosaba sits on the frontline of the Sundarbans' erosion crisis. We plant mangrove saplings — mostly Sundari and Avicennia — along tidal embankments that protect over a dozen villages from storm surge. This is a physically demanding, boat-access-only drive; not recommended as your first plantation event.",
    thingsToBring: [
      "Quick-dry clothing — you will be wading in tidal mud",
      "Sandals with ankle straps (no loose flip-flops)",
      "Sun protection — there is no shade on the embankments",
      "A dry bag for your phone and valuables",
    ],
    organizer: { name: "Sourav Biswas", role: "Coastal Program Lead" },
  },
  {
    slug: "almora-panuwanaula-sep-2026",
    date: "Sep 07, 2026",
    city: "Almora",
    site: "Panuwanaula ridge",
    imageUrl: "/images/drive-almora.jpg",
    spots: 60,
    filled: 22,
    durationHrs: 4,
    beginnerFriendly: false,
    ecoCertified: true,
    hue: 60,
    description:
      "This ridge lost significant oak cover to landslides in the 2023 monsoon. Working alongside women from the local nursery cooperative, we're replanting banj oak and rhododendron on a 30-degree slope — slower, steeper work than our urban drives, but some of our highest long-term survival rates.",
    thingsToBring: [
      "Sturdy trekking shoes with ankle support",
      "Layered clothing — hill mornings are cold, afternoons are not",
      "A walking stick if you have one",
      "Personal medication; the nearest clinic is 40 minutes away",
    ],
    organizer: { name: "Kamal Bhatt", role: "Almora Community Partner" },
  },
  {
    slug: "chennai-pallikaranai-sep-2026",
    date: "Sep 14, 2026",
    city: "Chennai",
    site: "Pallikaranai marsh",
    imageUrl: "/images/drive-chennai.jpg",
    spots: 130,
    filled: 45,
    durationHrs: 3,
    beginnerFriendly: true,
    ecoCertified: true,
    hue: 170,
    description:
      "Pallikaranai is one of India's last surviving natural marshlands and a critical flood buffer for South Chennai. This drive plants native wetland-edge species that stabilize the marsh boundary and provide habitat for the migratory birds that winter here every year.",
    thingsToBring: [
      "Closed-toe shoes you're okay getting wet",
      "Water bottle",
      "Insect repellent",
      "Binoculars if you'd like to bird-watch afterward",
    ],
    organizer: { name: "Divya Raghunathan", role: "South India Program Lead" },
  },
];