/**
 * ScrollRevealText
 * 
 * Each word in the text lights up from muted to bright as the user scrolls.
 * Like scrubbing through video subtitles — the "karaoke" text effect.
 * 
 * Uses Framer Motion's useScroll + useTransform per-word.
 * Compositor-only: only opacity changes per word.
 * 
 * Usage:
 *   <ScrollRevealText text="I build intelligent systems that matter." />
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const ScrollRevealText = ({
  text,
  className = '',
  highlightColor = 'text-text-primary',
  mutedColor = 'text-text-muted/30',
}) => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  const words = text.split(' ');

  if (shouldReduceMotion) {
    return (
      <p className={`${className} ${highlightColor}`}>
        {text}
      </p>
    );
  }

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return <Word key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[start, end]} highlightColor={highlightColor} mutedColor={mutedColor} />;
      })}
    </p>
  );
};

function Word({ word, progress, range, highlightColor, mutedColor }) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      className={`inline-block mr-[0.3em] ${highlightColor} transition-none`}
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
}

export default ScrollRevealText;
