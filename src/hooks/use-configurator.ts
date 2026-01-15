'use client';

import { useState, useMemo } from 'react';
import { PART_PRICING, DIAGNOSE_VERREKENING_DREMPEL, DIAGNOSE_KOSTEN } from '@/lib/constants';

type BikeModel = 's3' | 'x3' | null;
type PartId = keyof typeof PART_PRICING | null;

interface ConfiguratorState {
  model: BikeModel;
  selectedPart: PartId;
}

interface PricingBreakdown {
  diagnose: number;
  labor: number;
  part: number;
  total: number;
  diagnoseVerrekend: boolean;
}

interface UseConfiguratorReturn {
  model: BikeModel;
  selectedPart: PartId;
  pricing: PricingBreakdown | null;
  setModel: (model: BikeModel) => void;
  setPart: (part: PartId) => void;
  reset: () => void;
}

const initialState: ConfiguratorState = {
  model: null,
  selectedPart: null,
};

export function useConfigurator(): UseConfiguratorReturn {
  const [state, setState] = useState<ConfiguratorState>(initialState);

  const setModel = (model: BikeModel) => {
    setState((prev) => ({ ...prev, model }));
  };

  const setPart = (part: PartId) => {
    setState((prev) => ({ ...prev, selectedPart: part }));
  };

  const reset = () => {
    setState(initialState);
  };

  // Compute pricing based on selected part
  // Diagnose wordt verrekend bij reparaties boven €150
  const pricing = useMemo<PricingBreakdown | null>(() => {
    if (!state.selectedPart) return null;

    const partPricing = PART_PRICING[state.selectedPart];
    if (!partPricing) return null;

    // Check of diagnose verrekend wordt (reparatie > drempel)
    const reparatieKosten = partPricing.part;
    const diagnoseVerrekend = reparatieKosten >= DIAGNOSE_VERREKENING_DREMPEL;

    // Als diagnose verrekend wordt, is het 0, anders de standaard diagnosekosten
    const diagnoseKosten = diagnoseVerrekend ? 0 : (partPricing.diagnose > 0 ? partPricing.diagnose : 0);

    return {
      diagnose: diagnoseKosten,
      labor: partPricing.labor,
      part: partPricing.part,
      total: diagnoseKosten + partPricing.labor + partPricing.part,
      diagnoseVerrekend,
    };
  }, [state.selectedPart]);

  return {
    model: state.model,
    selectedPart: state.selectedPart,
    pricing,
    setModel,
    setPart,
    reset,
  };
}
