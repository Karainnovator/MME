// Bike Models
export type BikeModel = 's3' | 'x3';

// Component IDs for bike parts
export type ComponentId = 'battery' | 'motor' | 'display' | 'sensor' | 'controller';

// Part IDs for repair services
export type PartId = 'diagnose' | 'accu' | 'motor' | 'display' | 'sensor' | 'software';

// Repair status types
export type RepairStatus = 'completed' | 'in-progress';

// Configurator State
export interface ConfiguratorState {
  model: BikeModel | null;
  selectedPart: PartId | null;
  pricing: {
    basePrice: number;
    additionalCosts: number;
    total: number;
  };
}

// Component Data Interface
export interface ComponentData {
  id: ComponentId;
  name: string;
  description: string;
  status: 'healthy' | 'warning' | 'critical';
  lastChecked: Date;
  details?: {
    [key: string]: string | number | boolean;
  };
}

// Live Feed Item Interface
export interface LiveFeedItem {
  id: string;
  timestamp: Date;
  type: 'repair' | 'diagnostic' | 'update' | 'notification';
  title: string;
  description: string;
  bikeModel?: BikeModel;
  componentId?: ComponentId;
  status?: RepairStatus;
  priority?: 'low' | 'medium' | 'high';
}

// Service Interface
export interface Service {
  id: PartId;
  name: string;
  description: string;
  estimatedTime: string;
  price: number;
  category: 'diagnostic' | 'repair' | 'replacement' | 'maintenance';
  compatibleModels: BikeModel[];
  details?: {
    warranty?: string;
    includes?: string[];
    prerequisites?: string[];
  };
}

// Bike Model Details
export interface BikeModelDetails {
  id: BikeModel;
  name: string;
  displayName: string;
  description: string;
  imageUrl?: string;
  specifications?: {
    [key: string]: string | number;
  };
}

// Pricing Breakdown
export interface PricingBreakdown {
  servicePrice: number;
  partsPrice: number;
  laborPrice: number;
  tax: number;
  discount?: number;
  total: number;
}

// Repair Order
export interface RepairOrder {
  id: string;
  customerId: string;
  bikeModel: BikeModel;
  services: PartId[];
  status: RepairStatus | 'pending' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  estimatedCompletion?: Date;
  pricing: PricingBreakdown;
  notes?: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  bikeModel?: BikeModel;
  serviceType?: PartId;
  message: string;
}

// Animation Preferences
export interface AnimationPreferences {
  reducedMotion: boolean;
  duration: number;
  easing: number[];
}
