// Contact Information (Placeholders - Replace with actual data)
export const CONTACT = {
  phone: "+31 6 1234 5678",
  phoneClean: "31612345678",
  email: "info@mme.nl",
  whatsapp: "31612345678",
  kvk: "12345678",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "#diagnose", label: "Diagnose" },
  { href: "#configurator", label: "Configurator" },
  { href: "#diensten", label: "Diensten" },
  { href: "#contact", label: "Contact" },
] as const;

// Trust Ticker Items
export const TRUST_ITEMS = [
  { text: "Garantie", highlight: "op alle reparaties" },
  { text: "Service in", highlight: "heel Nederland" },
  { text: "500+", highlight: "VanMoofs gerepareerd" },
  { text: "Gemiddeld", highlight: "24 uur doorlooptijd" },
  { text: "98%", highlight: "succesrate" },
] as const;

// Bike Component Data for Explorer
export const COMPONENT_DATA = {
  battery: {
    id: "battery",
    title: "Accu",
    subtitle: "Energieopslag systeem",
    error: "Error 20",
    description:
      "De accu is het hart van je VanMoof. Bij problemen met de accu kan je fiets niet meer opstarten of minder ver rijden. Wij diagnosticeren en repareren accu problemen snel en vakkundig.",
    price: "€120",
    priceFrom: 120,
    position: { top: "35%", left: "38%" },
  },
  motor: {
    id: "motor",
    title: "Motor",
    subtitle: "Aandrijfsysteem",
    error: "Error 6",
    description:
      "De naafmotor zorgt voor de elektrische ondersteuning. Problemen kunnen variëren van geen ondersteuning tot vreemde geluiden. Wij repareren of vervangen je motor.",
    price: "€150",
    priceFrom: 150,
    position: { top: "65%", left: "68%" },
  },
  display: {
    id: "display",
    title: "Display",
    subtitle: "Matrix display",
    error: "Error 10",
    description:
      "Het iconische matrix display toont snelheid, batterijstatus en meer. Bij problemen kan het display niet oplichten of foutieve informatie tonen.",
    price: "€80",
    priceFrom: 80,
    position: { top: "25%", left: "52%" },
  },
  sensor: {
    id: "sensor",
    title: "Sensor",
    subtitle: "Bewegingssensor",
    error: "Error 44",
    description:
      "De sensoren meten je trapbeweging en bepalen hoeveel ondersteuning je krijgt. Defecte sensoren kunnen leiden tot geen of te veel ondersteuning.",
    price: "€70",
    priceFrom: 70,
    position: { top: "70%", left: "30%" },
  },
  controller: {
    id: "controller",
    title: "Controller",
    subtitle: "Centrale besturing",
    error: "Diverse errors",
    description:
      "De controller is het brein van je VanMoof. Het stuurt alle elektrische componenten aan. Problemen hiermee kunnen diverse error codes veroorzaken.",
    price: "€90",
    priceFrom: 90,
    position: { top: "40%", left: "50%" },
  },
} as const;

// Repair Configurator Parts
export const CONFIGURATOR_PARTS = [
  {
    id: "diagnose",
    name: "Weet ik niet",
    price: "€45 Diagnose",
    code: "",
    icon: "helpCircle",
  },
  {
    id: "accu",
    name: "Accu",
    price: "vanaf €120",
    code: "Error 20",
    icon: "battery",
  },
  {
    id: "motor",
    name: "Motor",
    price: "vanaf €150",
    code: "Error 6",
    icon: "zap",
  },
  {
    id: "display",
    name: "Display",
    price: "vanaf €80",
    code: "Error 10",
    icon: "monitor",
  },
  {
    id: "sensor",
    name: "Sensor",
    price: "vanaf €70",
    code: "Error 44",
    icon: "radio",
  },
  {
    id: "software",
    name: "Software",
    price: "vanaf €45",
    code: "Reset/Koppeling",
    icon: "code",
  },
] as const;

// Part Pricing for Configurator
export const PART_PRICING = {
  diagnose: { diagnose: 45, labor: 0, part: 0, total: 45 },
  accu: { diagnose: 45, labor: 40, part: 80, total: 165 },
  motor: { diagnose: 45, labor: 60, part: 90, total: 195 },
  display: { diagnose: 45, labor: 30, part: 50, total: 125 },
  sensor: { diagnose: 45, labor: 25, part: 45, total: 115 },
  software: { diagnose: 45, labor: 45, part: 0, total: 90 },
} as const;

// Live Feed Items
export const LIVE_FEED_ITEMS = [
  {
    id: 1,
    model: "VanMoof S3",
    status: "completed" as const,
    error: "Error 20",
    solution: "Accu connector vervangen",
    time: "2 uur geleden",
    location: "Amsterdam",
  },
  {
    id: 2,
    model: "VanMoof X3",
    status: "in-progress" as const,
    error: "Error 44",
    solution: "Sensor diagnostiek",
    time: "Nu bezig",
    location: "Rotterdam",
  },
  {
    id: 3,
    model: "VanMoof S3",
    status: "completed" as const,
    error: "Error 6",
    solution: "Motor reset + kalibratie",
    time: "5 uur geleden",
    location: "Utrecht",
  },
];

// Services for Bento Grid
export const SERVICES = [
  {
    id: "reparatie",
    title: "Complete reparatie service",
    description:
      "Van accu tot motor, van display tot sensor. Wij repareren alle onderdelen van je VanMoof met professionele apparatuur en originele onderdelen.",
    icon: "wrench",
    size: "large" as const,
    stat: { value: "500+", label: "Succesvolle reparaties" },
  },
  {
    id: "overdracht",
    title: "Overdracht service",
    description:
      "VanMoof gekocht of verkocht? Wij helpen met de digitale overdracht en koppeling aan je account.",
    icon: "repeat",
    size: "medium" as const,
  },
  {
    id: "diagnose",
    title: "Diagnose",
    description:
      "Volledige analyse van je VanMoof met professionele diagnose apparatuur.",
    icon: "flask",
    size: "small" as const,
  },
  {
    id: "rijklaar",
    title: "Rijklaar maken",
    description:
      "We maken je VanMoof volledig rijklaar met controle van alle onderdelen.",
    icon: "check",
    size: "small" as const,
  },
  {
    id: "software",
    title: "Software",
    description:
      "Software updates, resets en koppeling met je account.",
    icon: "code",
    size: "small" as const,
  },
] as const;

// Service Areas
export const SERVICE_AREAS = [
  "Amsterdam",
  "Rotterdam",
  "Utrecht",
  "Den Haag",
  "Haarlem",
  "Leiden",
] as const;

// Models
export const BIKE_MODELS = [
  { id: "s3", name: "S3", description: "Stadsfiets" },
  { id: "x3", name: "X3", description: "Compact" },
] as const;
