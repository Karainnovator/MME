import { Navigation } from '@/components/layout/navigation'
import { MobileCTA } from '@/components/layout/mobile-cta'
import Hero from '@/components/sections/hero'
import { TrustTicker } from '@/components/sections/trust-ticker'
import { BikeExplorer } from '@/components/sections/bike-explorer'
import RepairConfigurator from '@/components/sections/repair-configurator'
import LiveFeed from '@/components/sections/live-feed'
import ServicesBento from '@/components/sections/services-bento'
import { CTASection } from '@/components/sections/cta-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <TrustTicker />
        <BikeExplorer />
        <RepairConfigurator />
        <LiveFeed />
        <ServicesBento />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
