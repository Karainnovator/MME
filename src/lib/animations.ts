import { Variants } from 'framer-motion';

// Custom easing curve for smooth animations
export const customEasing = [0.16, 1, 0.3, 1] as const;

// Default animation duration
export const DEFAULT_DURATION = 0.6;
export const FAST_DURATION = 0.3;
export const SLOW_DURATION = 0.8;

// Fade in from bottom with upward motion
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
};

// Fade in from top with downward motion
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
    },
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
};

// Stagger container for animating children sequentially
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: FAST_DURATION,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: FAST_DURATION,
    },
  },
};

// Scale in animation for cards and buttons
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: customEasing,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: customEasing,
    },
  },
};

// Slide in from bottom for modals and overlays
export const slideInFromBottom: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
};

// Backdrop overlay animation
export const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: FAST_DURATION,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: FAST_DURATION,
    },
  },
};

// Pulse animation for attention-grabbing elements
export const pulse: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rotate animation for loading indicators
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Slide in from sides for navigation items
export const slideInFromSide = (direction: 'left' | 'right'): Variants => ({
  hidden: {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
    },
  },
  exit: {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
});

// Page transition variants
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DEFAULT_DURATION,
      ease: customEasing,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: FAST_DURATION,
      ease: customEasing,
    },
  },
};

// Card hover effect
export const cardHover: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.2,
      ease: customEasing,
    },
  },
  tap: {
    scale: 0.98,
  },
};

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has enabled reduced motion in their system settings
 *
 * @example
 * ```tsx
 * import { useReducedMotion } from '@/lib/animations';
 *
 * function MyComponent() {
 *   const shouldReduceMotion = useReducedMotion();
 *
 *   return (
 *     <motion.div
 *       initial={{ opacity: 0 }}
 *       animate={{ opacity: 1 }}
 *       transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
 *     >
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */
export const useReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

/**
 * Get animation variants with reduced motion support
 * Returns simpler animations when user prefers reduced motion
 *
 * @param variants - The animation variants to potentially simplify
 * @returns Animation variants adjusted for motion preferences
 *
 * @example
 * ```tsx
 * import { getMotionVariants, fadeInUp } from '@/lib/animations';
 *
 * function MyComponent() {
 *   const variants = getMotionVariants(fadeInUp);
 *
 *   return (
 *     <motion.div variants={variants} initial="hidden" animate="visible">
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */
export const getMotionVariants = (variants: Variants): Variants => {
  const shouldReduceMotion = useReducedMotion();

  if (!shouldReduceMotion) return variants;

  // Create simplified variants for reduced motion
  const reducedVariants: Variants = {};

  Object.keys(variants).forEach((key) => {
    const variant = variants[key];
    if (typeof variant === 'object') {
      reducedVariants[key] = {
        ...variant,
        transition: {
          duration: 0,
        },
        // Remove motion-related properties
        y: undefined,
        x: undefined,
        scale: undefined,
        rotate: undefined,
      };
    } else {
      reducedVariants[key] = variant;
    }
  });

  return reducedVariants;
};

/**
 * Transition configuration with reduced motion support
 *
 * @example
 * ```tsx
 * import { getTransition } from '@/lib/animations';
 *
 * function MyComponent() {
 *   return (
 *     <motion.div
 *       animate={{ x: 100 }}
 *       transition={getTransition()}
 *     >
 *       Content
 *     </motion.div>
 *   );
 * }
 * ```
 */
export const getTransition = (duration: number = DEFAULT_DURATION) => {
  const shouldReduceMotion = useReducedMotion();

  return {
    duration: shouldReduceMotion ? 0 : duration,
    ease: customEasing,
  };
};
