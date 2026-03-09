/**
 * ParallaxSection
 * 
 * Wraps any content and makes it drift at a different rate than scroll.
 * speed > 0: moves slower than scroll (background feel)
 * speed < 0: moves faster than scroll (foreground feel)
 * 
 * Uses useScroll + useTransform — compositor-only (translateY).
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const ParallaxSection = ({
  children,
  speed = 0.3,
  className = '',
  ...props
}) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
