"use client";

import { useTranslations } from "next-intl";
import { CONTACT, SERVICE_AREAS } from "@/lib/constants";

const DIENSTEN_LINKS = [
  { href: "#diensten", label: "Diagnose" },
  { href: "#diensten", label: "Reparatie" },
  { href: "#diensten", label: "Software" },
  { href: "#diensten", label: "Overdracht" },
] as const;

export function Footer() {
  const t = useTranslations();
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="container px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:py-16">
        {/* Main Grid - Responsive 1/2/4 Column Layout */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 text-center sm:text-left max-w-6xl mx-auto">
          {/* Brand Column */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-xl sm:text-2xl font-bold">
              <span>MME</span>
              <span className="text-gold">.</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs mx-auto sm:mx-0 px-4 sm:px-0">
              {t('footerDescription')}
            </p>
          </div>

          {/* Diensten Column */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-foreground font-bold">
              {t('footerServices')}
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#diensten"
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {t('footerServiceDiagnose')}
              </a>
              <a
                href="#diensten"
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {t('footerServiceRepair')}
              </a>
              <a
                href="#diensten"
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {t('footerServiceSoftware')}
              </a>
              <a
                href="#diensten"
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {t('footerServiceTransfer')}
              </a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-foreground font-bold">
              {t('footerContact')}
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href={`tel:${CONTACT.phoneClean}`}
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold break-words"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold break-all px-2 sm:px-0"
              >
                {CONTACT.email}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {t('contactWhatsApp')}
              </a>
              <a
                href="https://maps.google.com/?q=TT+Vasumweg+44+1033SC+Amsterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                TT Vasumweg 44, Unit 2.1 Noordkant, 1033SC Amsterdam
              </a>
            </div>
          </div>

          {/* Werkgebied Column */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-foreground font-bold">
              {t('footerWorkArea')}
            </h3>
            <div className="flex flex-col space-y-2">
              <span className="text-xs sm:text-sm text-muted-foreground">{t('locationAmsterdam')}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">{t('locationRotterdam')}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">{t('locationUtrecht')}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">{t('locationDenHaag')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 border-t border-zinc-900 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground sm:flex-row sm:gap-3 md:gap-4 px-4 sm:px-0">
            <p className="text-center">{t('footerCopyright')}</p>
            <span className="hidden sm:inline text-border">•</span>
            <p className="text-center">{t('footerKvk')} {CONTACT.kvk}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
