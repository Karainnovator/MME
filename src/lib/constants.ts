// Contact Information (Placeholders - Replace with actual data)
export const CONTACT = {
  phone: "+31 6 1234 5678",
  phoneClean: "31612345678",
  email: "info@mme.nl",
  whatsapp: "31612345678",
  kvk: "12345678",
} as const;

// Diagnose drempel - diagnosekosten worden verrekend bij reparaties boven dit bedrag
export const DIAGNOSE_VERREKENING_DREMPEL = 150;

// Basis diagnosekosten
export const DIAGNOSE_KOSTEN = 40;

// Navigation Links
export const NAV_LINKS = [
  { href: "#diagnose", label: "Diagnose" },
  { href: "#configurator", label: "Configurator" },
  { href: "#diensten", label: "Diensten" },
  { href: "#contact", label: "Contact" },
] as const;

// Trust Ticker Items
export const TRUST_ITEMS = [
  { text: "Garantie", highlight: "op uitgevoerde arbeid" },
  { text: "Vaste prijzen", highlight: "geen verrassingen" },
  { text: "500+", highlight: "VanMoofs gerepareerd" },
  { text: "Transparant", highlight: "eerlijk advies" },
  { text: "Specialist", highlight: "S3 & X3 modellen" },
] as const;

// Bike Component Data for Explorer
export const COMPONENT_DATA = {
  battery: {
    id: "battery",
    title: "Accu",
    subtitle: "Energieopslag systeem",
    error: "Error 6/18/19/20/21",
    description:
      "De accu is het hart van je VanMoof. Bij problemen met de accu kan je fiets niet meer opstarten of minder ver rijden. Wij diagnosticeren en repareren accu problemen vakkundig. Let op: geen garantie op totale accucapaciteit.",
    price: "€250",
    priceFrom: 250,
    position: { top: "35%", left: "38%" },
  },
  motor: {
    id: "motor",
    title: "Voorwiel",
    subtitle: "Motor & wiel",
    error: "Motor problemen",
    description:
      "Het voorwiel met naafmotor zorgt voor de elektrische ondersteuning. Problemen kunnen variëren van geen ondersteuning tot vreemde geluiden. Prijs inclusief afstelling.",
    price: "€175",
    priceFrom: 175,
    position: { top: "65%", left: "68%" },
  },
  display: {
    id: "display",
    title: "Knop",
    subtitle: "Bedieningselement",
    error: "Knop defect",
    description:
      "De bedieningsknop is essentieel voor het besturen van je VanMoof. Bij defecten kan de fiets niet meer correct bediend worden. Prijs inclusief montage.",
    price: "€45",
    priceFrom: 45,
    position: { top: "25%", left: "52%" },
  },
  sensor: {
    id: "sensor",
    title: "E-shifter",
    subtitle: "Elektronische versnelling",
    error: "Error 44",
    description:
      "De E-shifter regelt de automatische versnelling van je VanMoof. Bij Error 44 schakelt de fiets niet meer correct. Wij repareren dit vakkundig.",
    price: "€175",
    priceFrom: 175,
    position: { top: "70%", left: "30%" },
  },
  controller: {
    id: "controller",
    title: "Achterwiel",
    subtitle: "Vervanging",
    error: "Wiel defect",
    description:
      "Het achterwiel van je VanMoof kan slijtage vertonen of beschadigd raken. Wij vervangen je achterwiel vakkundig.",
    price: "€150",
    priceFrom: 150,
    position: { top: "40%", left: "50%" },
  },
} as const;

// Repair Configurator Parts - prijzen volgens businessplan
export const CONFIGURATOR_PARTS = [
  {
    id: "diagnose",
    name: "Weet ik niet",
    price: "€40 Diagnose",
    code: "Verrekend bij reparatie >€150",
    icon: "helpCircle",
  },
  {
    id: "accu",
    name: "Accu reparatie",
    price: "€250",
    code: "Error 6/18/19/20/21",
    icon: "battery",
  },
  {
    id: "eshifter",
    name: "E-shifter",
    price: "€175",
    code: "Error 44",
    icon: "zap",
  },
  {
    id: "voorwiel",
    name: "Voorwiel",
    price: "€175",
    code: "Incl. afstelling",
    icon: "monitor",
  },
  {
    id: "achterwiel",
    name: "Achterwiel",
    price: "€150",
    code: "Vervanging",
    icon: "radio",
  },
  {
    id: "knop",
    name: "Knop vervanging",
    price: "€45",
    code: "Incl. montage",
    icon: "code",
  },
] as const;

// Part Pricing for Configurator - prijzen volgens businessplan
// Bij reparaties boven €150 wordt de diagnose (€40) verrekend
export const PART_PRICING = {
  diagnose: { diagnose: 40, labor: 0, part: 0, total: 40, diagnoseVerrekend: false },
  accu: { diagnose: 0, labor: 0, part: 250, total: 250, diagnoseVerrekend: true },
  eshifter: { diagnose: 0, labor: 0, part: 175, total: 175, diagnoseVerrekend: true },
  voorwiel: { diagnose: 0, labor: 0, part: 175, total: 175, diagnoseVerrekend: true },
  achterwiel: { diagnose: 0, labor: 0, part: 150, total: 150, diagnoseVerrekend: false },
  knop: { diagnose: 40, labor: 0, part: 45, total: 85, diagnoseVerrekend: false },
} as const;

// Remmen prijzen
export const REMMEN_PRICING = {
  volledigeRemservice: { prijs: 45, eenheid: "per kant" },
  remblokkenVervangen: { prijs: 25, eenheid: "per kant" },
} as const;

// Onderhoud prijzen
export const ONDERHOUD_PRICING = {
  preventieveOnderhoudsbeurt: {
    prijs: 90,
    beschrijving: "Controle en afstelling remmen, ketting, bouten en moeren, algemene technische check",
  },
} as const;

// Live Feed Items - aangepast aan businessplan diensten
export const LIVE_FEED_ITEMS = [
  {
    id: 1,
    model: "VanMoof S3",
    status: "completed" as const,
    error: "Error 20",
    solution: "Accu reparatie",
    time: "2 uur geleden",
    location: "Amsterdam",
    prijs: "€250",
  },
  {
    id: 2,
    model: "VanMoof X3",
    status: "in-progress" as const,
    error: "Error 44",
    solution: "E-shifter reparatie",
    time: "Nu bezig",
    location: "Rotterdam",
    prijs: "€175",
  },
  {
    id: 3,
    model: "VanMoof S3",
    status: "completed" as const,
    error: "Onderhoud",
    solution: "Preventieve onderhoudsbeurt",
    time: "5 uur geleden",
    location: "Utrecht",
    prijs: "€90",
  },
];

// Services for Bento Grid - aangepast aan businessplan
export const SERVICES = [
  {
    id: "reparatie",
    title: "Complete reparatie service",
    description:
      "E-shifter, accu, wielen en meer. Wij repareren VanMoof S3 en X3 modellen vakkundig. Vaste prijzen, geen verrassingen.",
    icon: "wrench",
    size: "large" as const,
    stat: { value: "500+", label: "Succesvolle reparaties" },
  },
  {
    id: "overdracht",
    title: "Overdracht service",
    description:
      "VanMoof gekocht of verkocht? Wij helpen met de overdracht naar nieuwe eigenaar inclusief QR-code en Apple Find My koppeling.",
    icon: "repeat",
    size: "medium" as const,
  },
  {
    id: "diagnose",
    title: "Diagnose & intake",
    description:
      "Foutanalyse en technische beoordeling voor €40. Wordt verrekend bij reparaties boven €150.",
    icon: "flask",
    size: "small" as const,
  },
  {
    id: "rijklaar",
    title: "Rijklaar maken",
    description:
      "Fiets verkoopklaar maken met volledige controle en afstelling van alle onderdelen.",
    icon: "check",
    size: "small" as const,
  },
  {
    id: "software",
    title: "Software & reset",
    description:
      "Software resets, app-koppeling en digitale overdracht van je VanMoof.",
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

// Volledige prijslijst volgens businessplan - voor klantvertrouwen
export const PRIJSLIJST = {
  diagnose: {
    categorie: "Diagnose",
    items: [
      {
        naam: "Diagnose & intake",
        prijs: 40,
        beschrijving: "Foutanalyse en technische beoordeling",
        opmerking: "Wordt verrekend bij reparaties boven €150",
      },
    ],
  },
  reparaties: {
    categorie: "Reparaties",
    items: [
      {
        naam: "E-shifter reparatie",
        prijs: 175,
        errorCode: "Error 44",
        beschrijving: "Reparatie elektronische versnelling",
      },
      {
        naam: "Accu reparatie",
        prijs: 250,
        errorCode: "Error 6/18/19/20/21",
        beschrijving: "Reparatie accuproblemen",
        opmerking: "Geen garantie op totale accucapaciteit",
      },
      {
        naam: "Voorwiel vervanging",
        prijs: 175,
        beschrijving: "Inclusief afstelling",
      },
      {
        naam: "Achterwiel vervanging",
        prijs: 150,
        beschrijving: "Vervanging achterwiel",
      },
      {
        naam: "Knop vervanging",
        prijs: 45,
        beschrijving: "Inclusief montage",
      },
    ],
  },
  remmen: {
    categorie: "Remmen",
    items: [
      {
        naam: "Volledige remservice",
        prijs: 45,
        eenheid: "per kant",
        beschrijving: "Complete remservice inclusief afstelling",
      },
      {
        naam: "Remblokken vervangen",
        prijs: 25,
        eenheid: "per kant",
        beschrijving: "Alleen remblokken vervangen",
      },
    ],
  },
  onderhoud: {
    categorie: "Onderhoud",
    items: [
      {
        naam: "Preventieve onderhoudsbeurt",
        prijs: 90,
        beschrijving: "Controle en afstelling remmen, ketting, bouten en moeren, algemene technische check",
      },
    ],
  },
  opAanvraag: {
    categorie: "Op aanvraag",
    items: [
      {
        naam: "Smart unit reparaties",
        prijs: null,
        beschrijving: "Afhankelijk van diagnose en technische haalbaarheid",
      },
      {
        naam: "Overige elektronische reparaties",
        prijs: null,
        beschrijving: "Complexe elektronische storingen",
      },
    ],
  },
} as const;

// Garantie en voorwaarden info - voor klantvertrouwen
export const GARANTIE_INFO = {
  titel: "Garantie & voorwaarden",
  garantieOpArbeid: {
    titel: "Garantie op arbeid",
    beschrijving: "Op alle uitgevoerde werkzaamheden geven wij garantie op de uitgevoerde arbeid. Dit betekent dat de reparatie technisch correct wordt uitgevoerd volgens de best beschikbare kennis en middelen.",
  },
  belangrijkeOpmerkingen: [
    "Garantie geldt uitsluitend op de specifieke uitgevoerde handeling",
    "Geen garantie op resterende levensduur van elektronische onderdelen",
    "Bij accureparaties geen garantie op totale accucapaciteit",
    "Bestaande of toekomstige fouten buiten de uitgevoerde reparatie vallen niet onder garantie",
  ],
  transparantie: {
    titel: "Transparante communicatie",
    punten: [
      "Vooraf duidelijke communicatie over wat wel en niet mogelijk is",
      "Geen reparatie zonder akkoord van de klant",
      "Eerlijk advies, ook als repareren niet zinvol is",
      "Alle prijzen zijn inclusief arbeid, tenzij anders vermeld",
    ],
  },
  diagnoseVerrekening: {
    beschrijving: "Het diagnosebedrag van €40 wordt verrekend bij reparaties boven €150",
    drempel: 150,
    diagnoseKosten: 40,
  },
} as const;

// Wat we wel en niet doen - voor klantvertrouwen
export const DIENSTEN_AFBAKENING = {
  welDoen: {
    titel: "Wat wij doen",
    standaard: [
      "Diagnose en intake",
      "Mechanische reparaties (remmen, aandrijving, wielen)",
      "Veelvoorkomende elektronische storingen",
      "Software resets en app-koppelingen",
      "Onderhoud en preventieve checks",
      "Overdracht van fietsen bij verkoop (QR-code, Apple Find My)",
    ],
    opAanvraag: [
      "Smart unit reparaties",
      "Complexe elektronische storingen",
      "Combinatieproblemen met meerdere foutcodes",
      "Reparaties na mislukte ingrepen door derden",
    ],
  },
  nietDoen: {
    titel: "Wat wij niet doen",
    items: [
      "Structurele modificaties aan elektronica",
      "Reparaties die veiligheidsrisico's opleveren",
      "Reparaties waarbij verantwoord herstel niet mogelijk is",
      "Goedkope noodoplossingen - alle werkzaamheden zijn gericht op duurzame en veilige inzet",
    ],
  },
} as const;
