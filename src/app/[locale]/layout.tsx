import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { inter } from '../layout';

const BASE_URL = 'https://mmedienstverlening.nl';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'nl': `${BASE_URL}/nl`,
        'en': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/nl`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
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
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
