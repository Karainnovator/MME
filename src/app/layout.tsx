import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmedienstverlening.nl"),
  title: {
    default: "MME — De VanMoof Reparatie Specialist",
    template: "%s | MME",
  },
  description:
    "MME Dienstverlening — Onafhankelijke VanMoof reparatie specialist in Amsterdam. S3 & X3 reparaties, onderhoud, remmen, error codes, accu problemen. 500+ fietsen gerepareerd. Vaste prijzen, geen verrassingen.",
  keywords: [
    "MME",
    "MME Dienstverlening",
    "VanMoof reparatie",
    "VanMoof specialist",
    "VanMoof reparatie Amsterdam",
    "VanMoof onderhoud",
    "VanMoof remmen",
    "VanMoof fietsenmaker",
    "VanMoof S3 reparatie",
    "VanMoof X3 reparatie",
    "VanMoof accu reparatie",
    "VanMoof motor reparatie",
    "VanMoof E-shifter",
    "VanMoof Error 44",
    "VanMoof Error 20",
    "VanMoof Error 6",
    "VanMoof onderhoudsbeurt",
    "VanMoof remblokken",
    "VanMoof overdracht",
    "elektrische fiets reparatie Amsterdam",
  ],
  authors: [{ name: "MME Dienstverlening" }],
  creator: "MME",
  publisher: "MME",
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: "https://mmedienstverlening.nl",
    languages: {
      "nl": "https://mmedienstverlening.nl/nl",
      "en": "https://mmedienstverlening.nl/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_US",
    url: "https://mmedienstverlening.nl",
    siteName: "MME Dienstverlening",
    title: "MME — De VanMoof Reparatie Specialist in Amsterdam",
    description: "Onafhankelijke VanMoof specialist voor S3 & X3. Reparaties, onderhoud, remmen en meer. 500+ fietsen gerepareerd. Vaste prijzen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MME — De VanMoof Reparatie Specialist",
    description: "Onafhankelijke VanMoof specialist voor S3 & X3. Reparaties, onderhoud en remmen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MME Dienstverlening",
              description: "Onafhankelijke VanMoof reparatie specialist",
              url: "https://mmedienstverlening.nl",
              telephone: "+31621302552",
              email: "manno.elwasty@icloud.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "TT Vasumweg 44, Unit 2.1 Noordkant",
                postalCode: "1033SC",
                addressLocality: "Amsterdam",
                addressCountry: "NL",
              },
              areaServed: ["Amsterdam", "Rotterdam", "Utrecht", "Den Haag"],
              priceRange: "€€",
              openingHours: "Mo-Fr 09:00-18:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-black focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
