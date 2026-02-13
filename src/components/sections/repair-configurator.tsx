'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle, Battery, Zap, Monitor, Radio, Code, Phone,
  Wrench, Disc3, Settings, CircleHelp, Star, Droplets, Cog, Cpu, AlertTriangle, Repeat2, ShoppingBag
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useConfigurator } from '@/hooks/use-configurator';
import { CONFIGURATOR_PARTS, BIKE_MODELS, CONTACT } from '@/lib/constants';
import { useTranslations } from 'next-intl';

const iconMap = {
  helpCircle: HelpCircle,
  battery: Battery,
  zap: Zap,
  monitor: Monitor,
  radio: Radio,
  code: Code,
} as const;

type SectionTab = 'reparaties' | 'remmen' | 'onderhoud' | 'overig';

const SECTION_TABS: { id: SectionTab; icon: typeof Wrench }[] = [
  { id: 'reparaties', icon: Wrench },
  { id: 'remmen', icon: Disc3 },
  { id: 'onderhoud', icon: Settings },
  { id: 'overig', icon: CircleHelp },
];

export default function RepairConfigurator() {
  const t = useTranslations();
  const { model, selectedPart, pricing, setModel, setPart } = useConfigurator();
  const [activeSection, setActiveSection] = useState<SectionTab>('reparaties');
  const [selectedMaintenancePrice, setSelectedMaintenancePrice] = useState<number | null>(null);

  // Determine what price to show in sidebar
  const showRepairPricing = activeSection === 'reparaties';
  const sidebarPrice = showRepairPricing ? (pricing?.total ?? null) : selectedMaintenancePrice;

  return (
    <section id="configurator" className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
            {t('configuratorLabel')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('configuratorTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('configuratorSubtitle')}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Main Panel - Left (2/3) */}
          <div className="lg:col-span-2 min-w-0">
            <Card className="bg-surface-elevated border-border/50 p-3 sm:p-6 md:p-8 relative overflow-hidden">
              {/* Progress Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2">
                <div className={`size-2 rounded-full ${model ? 'bg-green-500' : 'bg-muted'}`} />
                <div className={`size-2 rounded-full ${(showRepairPricing ? selectedPart : selectedMaintenancePrice) ? 'bg-green-500' : 'bg-muted'}`} />
              </div>

              <div className="space-y-6 sm:space-y-8">
                {/* Step 1 - Model Selection (always visible) */}
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-xl sm:text-2xl font-semibold">{t('configuratorModelQuestion')}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {BIKE_MODELS.map((bike) => {
                      const isSelected = model === bike.id;
                      return (
                        <motion.button
                          key={bike.id}
                          onClick={() => setModel(bike.id as 's3' | 'x3')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-4 sm:p-6 md:p-8 rounded-xl border-2 transition-all text-center ${
                            isSelected
                              ? 'border-gold bg-gold/5 shadow-lg glow-gold-sm'
                              : 'border-border hover:border-gold/50 hover:bg-gold/5'
                          }`}
                        >
                          <div className="mb-3 sm:mb-4 flex justify-center">
                            <svg viewBox="0 0 100 60" className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {bike.id === 's3' && (
                                <g stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                                  <circle cx="20" cy="42" r="12" /><circle cx="80" cy="42" r="12" />
                                  <path d="M20 42 L40 22 L60 22 L80 42" /><path d="M40 22 L50 42 L60 22" />
                                  <path d="M20 42 L50 42 L80 42" /><path d="M60 22 L65 15 L75 12" />
                                  <path d="M40 22 L38 12" /><ellipse cx="38" cy="10" rx="6" ry="2" />
                                </g>
                              )}
                              {bike.id === 'x3' && (
                                <g stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                                  <circle cx="22" cy="42" r="10" /><circle cx="78" cy="42" r="10" />
                                  <path d="M22 42 L42 24 L58 24 L78 42" /><path d="M42 24 L50 42 L58 24" />
                                  <path d="M22 42 L50 42 L78 42" /><path d="M58 24 L63 17 L72 14" />
                                  <path d="M42 24 L40 14" /><ellipse cx="40" cy="12" rx="5" ry="2" />
                                </g>
                              )}
                            </svg>
                          </div>
                          <div>
                            <p className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{t(`model${bike.id.toUpperCase()}`)}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">{t(`model${bike.id.toUpperCase()}Description`)}</p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 - Tabs + Service Cards */}
                <div className="space-y-4 sm:space-y-6" id="onderhoud">
                  {/* Tabs */}
                  <div className="overflow-x-auto pb-1">
                    <div className="inline-flex bg-card border border-border rounded-xl p-1 gap-1 whitespace-nowrap">
                      {SECTION_TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeSection === tab.id;
                        const labelKey = `maintenanceTab${tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}`;

                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveSection(tab.id);
                              if (tab.id !== 'reparaties') {
                                setSelectedMaintenancePrice(null);
                              }
                            }}
                            className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 ${
                              isActive ? 'text-black' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="sectionActiveTab"
                                className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light rounded-lg"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                            <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                              <Icon className="size-3.5 sm:size-4" />
                              {t(labelKey)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Service Cards - animated swap */}
                  <AnimatePresence mode="wait">
                    {/* REPARATIES */}
                    {activeSection === 'reparaties' && (
                      <motion.div key="reparaties" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          {CONFIGURATOR_PARTS.map((part) => {
                            const isSelected = selectedPart === part.id;
                            const Icon = iconMap[part.icon as keyof typeof iconMap];
                            const partTranslationMap: Record<string, string> = {
                              diagnose: 'partDiagnose', accu: 'partAccu', eshifter: 'partEshifter',
                              voorwiel: 'partVoorwiel', achterwiel: 'partAchterwiel', knop: 'partKnop',
                            };
                            const keyPrefix = partTranslationMap[part.id];

                            return (
                              <motion.button
                                key={part.id}
                                onClick={() => setPart(part.id as any)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all text-center ${
                                  isSelected
                                    ? 'border-gold bg-gold/10 shadow-lg glow-gold-sm'
                                    : 'border-border hover:border-gold/50 hover:bg-gold/5'
                                }`}
                              >
                                <div className="flex justify-center mb-3 sm:mb-4">
                                  <div className={`size-10 sm:size-12 rounded-lg flex items-center justify-center ${
                                    isSelected ? 'bg-gold/20 text-gold' : 'bg-muted/50 text-muted-foreground'
                                  }`}>
                                    <Icon className="size-5 sm:size-6" />
                                  </div>
                                </div>
                                <div className="space-y-0.5 sm:space-y-1">
                                  <p className="font-semibold text-base sm:text-lg">{t(keyPrefix)}</p>
                                  <p className="text-xs sm:text-sm font-medium text-gold">{t(`${keyPrefix}Price`)}</p>
                                  <p className="text-xs text-muted-foreground">{t(`${keyPrefix}Code`)}</p>
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* REMMEN */}
                    {activeSection === 'remmen' && (
                      <motion.div key="remmen" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <ServiceCard
                            icon={Disc3}
                            title={t('maintenanceRemblokken')}
                            price={t('maintenanceRemblokkenPrice')}
                            selected={selectedMaintenancePrice === 25}
                            onClick={() => setSelectedMaintenancePrice(25)}
                          />
                          <ServiceCard
                            icon={Droplets}
                            title={t('maintenanceBleeden')}
                            price={t('maintenanceBleedenPrice')}
                            selected={selectedMaintenancePrice === 35}
                            onClick={() => setSelectedMaintenancePrice(35)}
                          />
                          <div
                            onClick={() => setSelectedMaintenancePrice(100)}
                            className={`p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all text-center cursor-pointer overflow-hidden ${
                              selectedMaintenancePrice === 100
                                ? 'border-gold bg-gold/10 shadow-lg glow-gold-sm'
                                : 'border-gold/30 bg-gold/5 hover:border-gold/50'
                            }`}
                          >
                            <div className="mb-2">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-semibold">
                                <Star className="size-3" />
                                {t('maintenanceCombiDealBadge')}
                              </span>
                            </div>
                            <div className="flex justify-center mb-3 sm:mb-4">
                              <div className="size-10 sm:size-12 rounded-lg flex items-center justify-center bg-gold/20 text-gold">
                                <Disc3 className="size-5 sm:size-6" />
                              </div>
                            </div>
                            <div className="space-y-0.5 sm:space-y-1">
                              <p className="font-semibold text-base sm:text-lg">{t('maintenanceCombiDeal')}</p>
                              <p className="text-xs sm:text-sm font-medium text-gold">{t('maintenanceCombiDealPrice')}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ONDERHOUD */}
                    {activeSection === 'onderhoud' && (
                      <motion.div key="onderhoud" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <ServiceCard
                            icon={Cog}
                            title={t('maintenanceKleineBeurt')}
                            price={t('maintenanceKleineBeurtPrice')}
                            description={t('maintenanceKleineBeurtDesc')}
                            selected={selectedMaintenancePrice === 35}
                            onClick={() => setSelectedMaintenancePrice(35)}
                          />
                          <ServiceCard
                            icon={Settings}
                            title={t('maintenanceGroteBeurt')}
                            price={t('maintenanceGroteBeurtPrice')}
                            description={t('maintenanceGroteBeurtDesc')}
                            selected={selectedMaintenancePrice === 95}
                            onClick={() => setSelectedMaintenancePrice(95)}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* OVERIG */}
                    {activeSection === 'overig' && (
                      <motion.div key="overig" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                        <p className="text-sm text-muted-foreground mb-4">{t('maintenanceOverigSubtitle')}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          {[
                            { key: 'maintenanceSmartUnit', icon: Cpu },
                            { key: 'maintenanceElektronisch', icon: AlertTriangle },
                            { key: 'maintenanceCombinatie', icon: Code },
                            { key: 'maintenanceOverdracht', icon: Repeat2 },
                            { key: 'maintenanceRijklaar', icon: ShoppingBag },
                          ].map(({ key, icon: ItemIcon }) => (
                            <div key={key} className="p-4 sm:p-5 md:p-6 rounded-xl border-2 border-border hover:border-gold/50 hover:bg-gold/5 transition-all text-center">
                              <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="size-10 sm:size-12 rounded-lg flex items-center justify-center bg-muted/50 text-muted-foreground">
                                  <ItemIcon className="size-5 sm:size-6" />
                                </div>
                              </div>
                              <div className="space-y-0.5 sm:space-y-1">
                                <p className="font-semibold text-sm sm:text-base">{t(key)}</p>
                                <p className="text-xs font-medium text-gold">{t('maintenanceOverigTitle')}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          </div>

          {/* Price Summary Sidebar - Right (1/3) - Always visible */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <Card className="bg-surface-elevated border-gold/20">
                <div className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gold uppercase mb-3 sm:mb-4">
                      {showRepairPricing ? t('configuratorEstimatedCost') : t('configuratorCost')}
                    </p>

                    <AnimatePresence mode="wait">
                      {sidebarPrice ? (
                        <motion.div
                          key={sidebarPrice}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="text-4xl sm:text-5xl font-bold text-gold"
                        >
                          €{sidebarPrice}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-2xl sm:text-3xl font-bold text-muted-foreground"
                        >
                          {t('configuratorSelectPart')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Repair breakdown - only for reparaties tab */}
                  <AnimatePresence>
                    {showRepairPricing && pricing && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
                        {pricing.diagnoseVerrekend ? (
                          <div className="flex items-center gap-2 text-sm">
                            <div className="size-2 rounded-full bg-green-500" />
                            <span className="text-green-400 line-through">{t('configuratorDiagnose')} €40</span>
                            <span className="text-green-400 text-xs">({t('configuratorDiagnoseDeducted')})</span>
                          </div>
                        ) : pricing.diagnose > 0 && (
                          <div className="flex items-center gap-2 text-sm">
                            <div className="size-2 rounded-full bg-blue-500" />
                            <span>{t('configuratorDiagnose')} €{pricing.diagnose}</span>
                          </div>
                        )}
                        {pricing.labor > 0 && (
                          <div className="flex items-center gap-2 text-sm">
                            <div className="size-2 rounded-full bg-purple-500" />
                            <span>{t('configuratorLabor')} €{pricing.labor}</span>
                          </div>
                        )}
                        {pricing.part > 0 && (
                          <div className="flex items-center gap-2 text-sm">
                            <div className="size-2 rounded-full bg-gold" />
                            <span>{t('configuratorPart')} €{pricing.part}</span>
                          </div>
                        )}
                        <div className="pt-4">
                          <div className="h-2 rounded-full overflow-hidden bg-muted flex">
                            {pricing.diagnose > 0 && <motion.div initial={{ width: 0 }} animate={{ width: `${(pricing.diagnose / pricing.total) * 100}%` }} transition={{ duration: 0.5, ease: 'easeOut' }} className="bg-blue-500" />}
                            {pricing.labor > 0 && <motion.div initial={{ width: 0 }} animate={{ width: `${(pricing.labor / pricing.total) * 100}%` }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="bg-purple-500" />}
                            {pricing.part > 0 && <motion.div initial={{ width: 0 }} animate={{ width: `${(pricing.part / pricing.total) * 100}%` }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }} className="bg-gold" />}
                          </div>
                        </div>
                        {pricing.diagnoseVerrekend && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-green-400 pt-2">
                            {t('configuratorDiagnoseFreeNote')}
                          </motion.p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <Button asChild size="lg" className="w-full bg-gold hover:bg-gold-dark text-black font-semibold glow-gold-sm hover-lift text-sm sm:text-base">
                    <a href={`tel:${CONTACT.phoneClean}`} className="flex items-center justify-center gap-2">
                      <Phone className="size-4 sm:size-5" />
                      <span className="truncate">{t('configuratorCallForAppointment')}</span>
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {showRepairPricing ? t('configuratorExactPriceNote') : t('configuratorFixedPriceNote')}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  price,
  description,
  selected,
  onClick,
}: {
  icon: typeof Disc3;
  title: string;
  price: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all text-center ${
        selected
          ? 'border-gold bg-gold/10 shadow-lg glow-gold-sm'
          : 'border-border hover:border-gold/50 hover:bg-gold/5'
      }`}
    >
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className={`size-10 sm:size-12 rounded-lg flex items-center justify-center ${
          selected ? 'bg-gold/20 text-gold' : 'bg-muted/50 text-muted-foreground'
        }`}>
          <Icon className="size-5 sm:size-6" />
        </div>
      </div>
      <div className="space-y-0.5 sm:space-y-1">
        <p className="font-semibold text-base sm:text-lg">{title}</p>
        <p className="text-xs sm:text-sm font-medium text-gold">{price}</p>
        {description && <p className="text-xs text-muted-foreground mt-2">{description}</p>}
      </div>
    </motion.button>
  );
}
