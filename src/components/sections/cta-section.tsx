"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Check, Truck, MessageCircle, Wrench, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export function CTASection() {
  const t = useTranslations();
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Rotating Conic Gradient */}
        <div
          className="absolute -inset-20 opacity-15 blur-[80px] animate-gradient-rotate"
          style={{
            background:
              "conic-gradient(from 0deg, #D4AF37, #E6BE8A, #D4AF37, #B38600, #D4AF37)",
          }}
        />

        {/* Animated VanMoof Bike SVG Outline - Proper VanMoof style - Hidden on mobile */}
        <div className="absolute inset-0 hidden md:flex items-center justify-start pl-12 md:pl-24 lg:pl-32 pointer-events-none">
          <motion.svg
            className="w-[400px] h-[280px] md:w-[500px] md:h-[350px] opacity-20"
            viewBox="0 0 400 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <defs>
              <linearGradient id="ctaBikeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#B38600"/>
              </linearGradient>
            </defs>

            {/* Wheels */}
            <circle cx="80" cy="180" r="50" stroke="url(#ctaBikeGradient)" strokeWidth="4" fill="none"/>
            <circle cx="80" cy="180" r="45" stroke="url(#ctaBikeGradient)" strokeWidth="2" fill="none" opacity="0.5"/>
            <circle cx="320" cy="180" r="50" stroke="url(#ctaBikeGradient)" strokeWidth="4" fill="none"/>
            <circle cx="320" cy="180" r="45" stroke="url(#ctaBikeGradient)" strokeWidth="2" fill="none" opacity="0.5"/>

            {/* Frame */}
            <path d="M80 180 L160 100 L280 100 L320 180" stroke="url(#ctaBikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M160 100 L200 180 L280 100" stroke="url(#ctaBikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M80 180 L200 180" stroke="url(#ctaBikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M200 180 L320 180" stroke="url(#ctaBikeGradient)" strokeWidth="6" fill="none" strokeLinecap="round"/>

            {/* Handlebar */}
            <path d="M280 100 L290 80 L320 75" stroke="url(#ctaBikeGradient)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

            {/* Seat */}
            <path d="M160 100 L150 70" stroke="url(#ctaBikeGradient)" strokeWidth="5" fill="none" strokeLinecap="round"/>
            <ellipse cx="150" cy="65" rx="25" ry="8" fill="url(#ctaBikeGradient)" opacity="0.3"/>

            {/* Battery (integrated) */}
            <rect x="170" y="95" width="80" height="20" rx="4" fill="none" stroke="url(#ctaBikeGradient)" strokeWidth="2" opacity="0.6"/>

            {/* Display */}
            <rect x="290" y="70" width="20" height="12" rx="2" fill="none" stroke="url(#ctaBikeGradient)" strokeWidth="1"/>

            {/* Motor hub */}
            <circle cx="320" cy="180" r="15" fill="none" stroke="url(#ctaBikeGradient)" strokeWidth="2" opacity="0.6"/>
          </motion.svg>
        </div>

        {/* Floating Glassmorphism Cards - More transparent - Hidden on mobile */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-32 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hidden sm:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-16 w-16 h-24 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hidden sm:block"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-20 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hidden sm:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-24 w-20 h-28 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hidden sm:block"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Sparkle Particles */}
        <motion.div
          className="absolute top-32 left-1/4 w-2 h-2 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "0s" }}
        />
        <motion.div
          className="absolute top-40 right-1/3 w-1 h-1 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "0.3s" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "0.6s" }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-1 h-1 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "0.9s" }}
        />
        <motion.div
          className="absolute top-1/2 left-16 w-1 h-1 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "1.2s" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "1.5s" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-24 w-1 h-1 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "1.8s" }}
        />
        <motion.div
          className="absolute top-2/3 right-32 w-2 h-2 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "2.1s" }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-gold rounded-2xl sm:rounded-3xl border border-gold/20 p-6 sm:p-8 md:p-12"
          >
            {/* Top Gold Line */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="h-1 w-12 sm:w-16 rounded-full bg-gold" />
            </div>

            {/* Icon Trio - Wrench, Sparkles, Checkmark */}
            <div className="mb-6 sm:mb-8 flex justify-center gap-3 sm:gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gold/10 text-gold"
              >
                <Wrench className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gold/20 text-gold glow-gold-sm"
              >
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gold/10 text-gold"
              >
                <Check className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            </div>

            {/* Heading */}
            <h2 className="mb-3 sm:mb-4 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('ctaTitle1')}{" "}
              <span className="text-gradient-gold">
                {t('ctaTitle2')}
              </span>
            </h2>

            {/* Subtext */}
            <p className="mb-6 sm:mb-8 text-center text-sm sm:text-base md:text-lg text-muted-foreground">
              {t('ctaSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold hover-lift w-full sm:w-auto"
              >
                <a href={`tel:${CONTACT.phoneClean}`} className="text-sm sm:text-base">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  {t('ctaCallSpecialist')}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass hover:glass-gold transition-all duration-300 w-full sm:w-auto"
              >
                <a href="#contact" className="text-sm sm:text-base">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  {t('ctaSendMessage')}
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gold/10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/10 text-gold flex-shrink-0">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-muted-foreground">
                  {t('ctaResponseTime')}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/10 text-gold flex-shrink-0">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-muted-foreground">{t('ctaFreeAdvice')}</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/10 text-gold flex-shrink-0">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-muted-foreground">
                  {t('ctaNoTravelCosts')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
