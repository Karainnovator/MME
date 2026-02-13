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
    "VanMoof reparatie specialist in Amsterdam. S3 & X3 reparaties, onderhoud en diagnostiek. 500+ fietsen gerepareerd. Vaste prijzen, geen verrassingen.",
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

export { inter };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
