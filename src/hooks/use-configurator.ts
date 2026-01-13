'use client';

import { useState, useMemo } from 'react';
import { PART_PRICING } from '@/lib/constants';

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
  const pricing = useMemo<PricingBreakdown | null>(() => {
    if (!state.selectedPart) return null;

    const partPricing = PART_PRICING[state.selectedPart];
    if (!partPricing) return null;

    return {
      diagnose: partPricing.diagnose,
      labor: partPricing.labor,
      part: partPricing.part,
      total: partPricing.total,
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
