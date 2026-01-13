"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface PriceDisplayProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export function PriceDisplay({
  value,
  prefix = "€",
  suffix,
}: PriceDisplayProps) {
  const spring = useSpring(value, {
    damping: 30,
    stiffness: 200,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("nl-NL")
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <div className="text-4xl md:text-5xl font-bold text-gold">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  );
}
