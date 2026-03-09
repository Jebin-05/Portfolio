/**
 * SectionLabel — Floating section number + title
 * Fades in/out as user scrolls through the section.
 * Fixed position on left side (desktop), inline on mobile.
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EASE_SMOOTH } from '../utils/animations';

const SectionLabel = ({ number, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="hidden lg:flex items-center gap-3 mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: EASE_SMOOTH }}
    >
      <span className="font-mono text-caption text-accent/60 tracking-wider">
        {number}
      </span>
      <span className="w-8 h-px bg-accent/20" />
      <span className="font-mono text-caption text-text-muted uppercase tracking-wider">
        {title}
      </span>
    </motion.div>
  );
};

export default SectionLabel;
