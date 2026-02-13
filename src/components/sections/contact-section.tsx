"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { CONTACT, BIKE_MODELS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Vul een geldig emailadres in"),
  phone: z.string().min(10, "Vul een geldig telefoonnummer in"),
  model: z.string().min(1, "Selecteer een model"),
  problem: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const t = useTranslations();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    model: "",
    problem: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate form
  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  // Handle form submission via email/Resend
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.status === 429) {
        setErrors({ name: t('contactFormRateLimit') });
        return;
      }
      if (!response.ok) throw new Error('Failed to send');

      setFormData({ name: "", email: "", phone: "", model: "", problem: "" });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ name: t('contactFormError') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute -inset-20 opacity-10 blur-[80px]"
          style={{
            background:
              "conic-gradient(from 0deg, #D4AF37, #E6BE8A, #D4AF37, #B38600, #D4AF37)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-gold/10 border border-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gold uppercase tracking-wider">{t('contactLabel')}</span>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('contactTitle')}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                {t('contactSubtitle')}
              </p>
            </div>

            {/* Contact Method Cards */}
            <div className="space-y-3 sm:space-y-4">
              {/* Phone Card */}
              <motion.a
                href={`tel:${CONTACT.phoneClean}`}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card/70 border border-border/50 hover:border-gold/30 transition-all duration-300 w-full"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                    {t('contactCallDirect')}
                  </div>
                  <div className="text-sm sm:text-base font-semibold">{CONTACT.phone}</div>
                </div>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card/70 border border-border/50 hover:border-gold/30 transition-all duration-300 w-full"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                    {t('contactWhatsApp')}
                  </div>
                  <div className="text-sm sm:text-base font-semibold">{t('contactWhatsAppAction')}</div>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a
                href={`mailto:${CONTACT.email}`}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card/70 border border-border/50 hover:border-gold/30 transition-all duration-300 w-full"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                    {t('contactEmail')}
                  </div>
                  <div className="text-sm sm:text-base font-semibold break-all">{CONTACT.email}</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border-gold/10">
              <CardContent className="p-4 sm:p-6 pt-4 sm:pt-6">
                <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 sm:py-16 space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                      className="size-16 sm:size-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center"
                    >
                      <CheckCircle2 className="size-8 sm:size-10 text-green-500" />
                    </motion.div>
                    <p className="text-xl sm:text-2xl font-bold">{t('contactFormSuccessTitle')}</p>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-sm">{t('contactFormSuccess')}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-gold/30 text-gold hover:bg-gold/10"
                      onClick={() => setIsSuccess(false)}
                    >
                      {t('contactFormSendAnother')}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {/* Form Header */}
                <div className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                  <p className="text-xl sm:text-2xl font-bold">{t('contactFormTitle')}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t('contactFormSubtitle')}</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name and Email Fields - 2 Column Layout on tablet+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">
                        {t('contactFormName')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t('contactFormNamePlaceholder')}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        aria-invalid={!!errors.name}
                        className={cn("w-full", errors.name && "border-destructive")}
                      />
                      {errors.name && (
                        <p className="text-xs sm:text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        {t('contactFormEmail')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contactFormEmailPlaceholder')}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        aria-invalid={!!errors.email}
                        className={cn("w-full", errors.email && "border-destructive")}
                      />
                      {errors.email && (
                        <p className="text-xs sm:text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Model Fields - 2 Column Layout on tablet+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">
                        {t('contactFormPhone')} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('contactFormPhonePlaceholder')}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        aria-invalid={!!errors.phone}
                        className={cn("w-full", errors.phone && "border-destructive")}
                      />
                      {errors.phone && (
                        <p className="text-xs sm:text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    {/* Model Field */}
                    <div className="space-y-2">
                      <Label htmlFor="model" className="text-sm">
                        {t('contactFormModel')} <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.model}
                        onValueChange={(value) =>
                          setFormData({ ...formData, model: value })
                        }
                      >
                        <SelectTrigger
                          id="model"
                          className={cn(
                            "w-full",
                            errors.model && "border-destructive"
                          )}
                          aria-invalid={!!errors.model}
                        >
                          <SelectValue placeholder={t('contactFormModelPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom" sideOffset={4}>
                          <SelectItem value="s3">{t('contactFormModelS3')}</SelectItem>
                          <SelectItem value="x3">{t('contactFormModelX3')}</SelectItem>
                          <SelectItem value="other">{t('contactFormModelOther')}</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.model && (
                        <p className="text-xs sm:text-sm text-destructive mt-2">{errors.model}</p>
                      )}
                    </div>
                  </div>

                  {/* Problem Description Field */}
                  <div className="space-y-2">
                    <Label htmlFor="problem" className="text-sm">
                      {t('contactFormProblem')}
                    </Label>
                    <Textarea
                      id="problem"
                      placeholder={t('contactFormProblemPlaceholder')}
                      value={formData.problem}
                      onChange={(e) =>
                        setFormData({ ...formData, problem: e.target.value })
                      }
                      rows={4}
                      className="w-full resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gold via-gold-light to-gold hover-lift text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-current border-t-transparent rounded-full"
                          />
                          {t('contactFormSubmitting')}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                          {t('contactFormSubmit')}
                        </>
                      )}
                    </Button>
                  </div>
                </form>
                  </motion.div>
                )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
