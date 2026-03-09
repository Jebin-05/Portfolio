/**
 * ╔══════════════════════════════════════════════════════╗
 * ║            ANIMATION VARIANTS DICTIONARY             ║
 * ║                                                      ║
 * ║  Every animation in the portfolio lives here.        ║
 * ║  Components import variants by name.                 ║
 * ║  All motion is on compositor-only properties         ║
 * ║  (transform + opacity) — zero layout thrashing.      ║
 * ╚══════════════════════════════════════════════════════╝
 */

// ─── Easing Curves ───
// Cinematic reveal — slow start, confident finish
export const EASE_CINEMATIC = [0.76, 0, 0.24, 1];
// Smooth deceleration — for UI entrances
export const EASE_SMOOTH = [0.16, 1, 0.3, 1];
// Elastic settle — for playful elements
export const EASE_ELASTIC = [0.34, 1.56, 0.64, 1];
// Clean exit — for elements leaving
export const EASE_EXIT = [0.4, 0, 1, 1];

// ─── Scroll Animation Variants ───

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

export const fadeSlideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

export const fadeSlideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

export const clipReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.8, ease: EASE_CINEMATIC },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

export const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: EASE_CINEMATIC },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

// ─── Stagger Containers ───

export const staggerContainer = (staggerDelay = 0.1) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.05,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

// ─── Letter Stagger ───
export const letterStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const letterChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_SMOOTH },
  },
};

// ─── Loading Screen Variants ───

export const loaderSplitTop = {
  initial: { y: 0 },
  exit: {
    y: '-100%',
    transition: { duration: 0.7, ease: EASE_CINEMATIC },
  },
};

export const loaderSplitBottom = {
  initial: { y: 0 },
  exit: {
    y: '100%',
    transition: { duration: 0.7, ease: EASE_CINEMATIC },
  },
};

// ─── Variant Map (for AnimateIn component) ───
export const variantMap = {
  fadeSlideUp,
  fadeSlideLeft,
  fadeSlideRight,
  clipReveal,
  scaleIn,
  lineGrow,
  fadeIn,
};
