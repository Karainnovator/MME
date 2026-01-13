import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mme.nl"),
  title: {
    default: "MME — De VanMoof Reparatie Specialist",
    template: "%s | MME",
  },
  description:
    "Onafhankelijke VanMoof reparatie specialist. S3 & X3 reparaties, error codes, accu problemen. 500+ fietsen gerepareerd. 98% succesrate.",
  keywords: [
    "VanMoof reparatie",
    "VanMoof specialist",
    "Error 20",
    "Error 6",
    "S3 reparatie",
    "X3 reparatie",
    "VanMoof accu",
    "VanMoof motor",
  ],
  authors: [{ name: "MME Dienstverlening" }],
  creator: "MME",
  publisher: "MME",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://mme.nl",
    siteName: "MME",
    title: "MME — De VanMoof Reparatie Specialist",
    description: "Onafhankelijke VanMoof specialist voor S3 & X3.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MME VanMoof Reparatie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MME — De VanMoof Reparatie Specialist",
    description: "Onafhankelijke VanMoof specialist.",
    images: ["/og-image.png"],
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
              url: "https://mme.nl",
              telephone: "+31612345678",
              email: "info@mme.nl",
              address: {
                "@type": "PostalAddress",
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
