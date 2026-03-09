/**
 * AnimateIn — Reusable Scroll Animation Wrapper
 *
 * Usage:
 *   <AnimateIn variant="fadeSlideUp" delay={0.2}>
 *     <MyComponent />
 *   </AnimateIn>
 *
 * Supports: fadeSlideUp, fadeSlideLeft, fadeSlideRight, clipReveal,
 *           scaleIn, lineGrow, fadeIn
 *
 * Features:
 *   - Intersection Observer powered (once: true by default)
 *   - Delay prop shifts individual element timing
 *   - Reduced motion: renders instantly without animation
 *   - as prop: change the wrapper element (default: div)
 */

import { useRef, useMemo } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { variantMap, EASE_SMOOTH } from '../../utils/animations';

const AnimateIn = ({
  children,
  variant = 'fadeSlideUp',
  delay = 0,
  duration,
  threshold = 0.15,
  once = true,
  as = 'div',
  className = '',
  style = {},
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  const Component = motion[as] || motion.div;

  // Build delayed variant
  const variants = useMemo(() => {
    const base = variantMap[variant] || variantMap.fadeSlideUp;

    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    return {
      hidden: base.hidden,
      visible: {
        ...base.visible,
        transition: {
          ...base.visible.transition,
          ...(duration ? { duration } : {}),
          delay: (base.visible.transition?.delay || 0) + delay,
        },
      },
    };
  }, [variant, delay, duration, shouldReduceMotion]);

  return (
    <Component
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * AnimateInGroup — Stagger container for lists
 *
 * Usage:
 *   <AnimateInGroup stagger={0.1}>
 *     <AnimateIn variant="fadeSlideUp"><Item1 /></AnimateIn>
 *     <AnimateIn variant="fadeSlideUp"><Item2 /></AnimateIn>
 *   </AnimateInGroup>
 */
export const AnimateInGroup = ({
  children,
  stagger = 0.1,
  threshold = 0.1,
  once = true,
  className = '',
  as = 'div',
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  const Component = motion[as] || motion.div;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: stagger, delayChildren: 0.05 },
    },
  };

  return (
    <Component
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimateIn;
