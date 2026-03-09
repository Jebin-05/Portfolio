/**
 * ╔══════════════════════════════════════════════════════╗
 * ║         CINEMATIC LOADING SCREEN                     ║
 * ║                                                      ║
 * ║  Phase 1 — The Reveal (0→900ms)                      ║
 * ║    SVG "JA" monogram drawn with stroke-dashoffset    ║
 * ║    Easing: cubic-bezier(0.76, 0, 0.24, 1)           ║
 * ║                                                      ║
 * ║  Phase 2 — The Statement (900→1800ms)                ║
 * ║    "Crafting Intelligent Experiences" clip-reveals    ║
 * ║    Each word slices up from bottom — billboard feel   ║
 * ║                                                      ║
 * ║  Phase 3 — The Counter (1000→2200ms)                 ║
 * ║    0→100% with easeOutExpo — alive, not robotic      ║
 * ║                                                      ║
 * ║  Phase 4 — The Exit (2200→2800ms)                    ║
 * ║    Split-panel wipe: top slides up, bottom down      ║
 * ║    Reveals hero underneath — theatrical curtain rise  ║
 * ║                                                      ║
 * ║  Texture: noise grain overlay + horizontal scan line  ║
 * ╚══════════════════════════════════════════════════════╝
 */

import { motion, AnimatePresence } from 'framer-motion';
import { EASE_CINEMATIC, EASE_SMOOTH } from '../../utils/animations';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ phase, progress }) => {
  const isExiting = phase === 'exit';

  const words = ['Crafting', 'Intelligent', 'Experiences'];

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className={styles.wrapper}
          aria-hidden="true"
          role="presentation"
        >
          {/* ── Top Split Panel ── */}
          <motion.div
            className={styles.splitTop}
            initial={{ y: 0 }}
            animate={isExiting ? { y: '-100%' } : { y: 0 }}
            transition={{
              duration: 0.7,
              ease: EASE_CINEMATIC,
              delay: isExiting ? 0.1 : 0,
            }}
          />

          {/* ── Bottom Split Panel ── */}
          <motion.div
            className={styles.splitBottom}
            initial={{ y: 0 }}
            animate={isExiting ? { y: '100%' } : { y: 0 }}
            transition={{
              duration: 0.7,
              ease: EASE_CINEMATIC,
              delay: isExiting ? 0.1 : 0,
            }}
          />

          {/* ── Content Layer (centered) ── */}
          <motion.div
            className={styles.content}
            animate={isExiting ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: EASE_SMOOTH }}
          >
            {/* Phase 1: SVG Logo Draw */}
            <div className={styles.logoContainer}>
              <svg
                viewBox="0 0 120 60"
                className={styles.logo}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* J */}
                <motion.path
                  d="M10 8 L10 38 Q10 52 24 52 Q38 52 38 38"
                  stroke="#6366f1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.8, ease: EASE_CINEMATIC, delay: 0.1 },
                    opacity: { duration: 0.1, delay: 0.1 },
                  }}
                />
                {/* A */}
                <motion.path
                  d="M60 52 L78 8 L96 52 M66 38 L90 38"
                  stroke="#6366f1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.8, ease: EASE_CINEMATIC, delay: 0.2 },
                    opacity: { duration: 0.1, delay: 0.2 },
                  }}
                />
                {/* Decorative dot */}
                <motion.circle
                  cx="110"
                  cy="52"
                  r="3"
                  fill="#6366f1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9, ease: EASE_SMOOTH }}
                />
              </svg>
            </div>

            {/* Phase 2: Statement — clip-path reveal */}
            <div className={styles.statement}>
              {words.map((word, i) => (
                <span key={word} className={styles.wordMask}>
                  <motion.span
                    className={styles.word}
                    initial={{ y: '110%' }}
                    animate={
                      phase === 'statement' || phase === 'counter' || phase === 'exit'
                        ? { y: '0%' }
                        : { y: '110%' }
                    }
                    transition={{
                      duration: 0.55,
                      ease: EASE_CINEMATIC,
                      delay: i * 0.1,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>

            {/* Phase 3: Counter */}
            <motion.div
              className={styles.counter}
              initial={{ opacity: 0 }}
              animate={
                phase === 'counter' || phase === 'exit'
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              <div className={styles.counterNumber}>
                <span className={styles.counterValue}>{progress}</span>
                <span className={styles.counterPercent}>%</span>
              </div>

              {/* Progress line */}
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  style={{ transformOrigin: 'left' }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Noise Texture Overlay ── */}
          <div className={styles.noise} aria-hidden="true" />

          {/* ── Horizontal Scan Line ── */}
          <motion.div
            className={styles.scanLine}
            initial={{ top: '-2px' }}
            animate={{ top: '100%' }}
            transition={{
              duration: 2.2,
              ease: 'linear',
              delay: 0.3,
            }}
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
