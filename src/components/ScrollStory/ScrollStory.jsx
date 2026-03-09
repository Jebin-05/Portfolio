/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    SCROLL STORY                              ║
 * ║                                                              ║
 * ║  A scroll-driven cinematic narrative section.                ║
 * ║  As the user scrolls, they "scrub" through a visual story   ║
 * ║  of Jebin's professional journey — like a video timeline.    ║
 * ║                                                              ║
 * ║  Technique: Tall outer container (5x viewport) with a       ║
 * ║  sticky inner viewport. Scroll progress (0→1) drives all    ║
 * ║  animations imperatively via Framer Motion's useTransform.  ║
 * ║                                                              ║
 * ║  Sequence:                                                   ║
 * ║  0.00 → 0.15  "The Journey So Far" title fades in           ║
 * ║  0.10 → 0.30  Stats counter (projects, tech, experience)    ║
 * ║  0.25 → 0.50  Philosophy text reveals word-by-word          ║
 * ║  0.45 → 0.65  Skill constellation / orbit animation         ║
 * ║  0.60 → 0.80  Timeline milestones appear                    ║
 * ║  0.75 → 1.00  CTA "See My Work" with parallax               ║
 * ║                                                              ║
 * ║  All on compositor-only properties (transform + opacity).   ║
 * ║  prefers-reduced-motion: shows all content statically.      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import { useRef, useMemo } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

// ─── Smooth spring config for scroll-linked values ───
const SPRING = { stiffness: 100, damping: 30, restDelta: 0.001 };

// ─── Helper: maps progress range to opacity + Y transform ───
function useScrollFade(scrollProgress, inStart, inEnd, outStart, outEnd) {
  const opacityIn = useTransform(scrollProgress, [inStart, inEnd], [0, 1]);
  const opacityOut = outStart != null
    ? useTransform(scrollProgress, [outStart, outEnd], [1, 0])
    : opacityIn;
  const y = useTransform(scrollProgress, [inStart, inEnd], [40, 0]);
  return {
    opacity: outStart != null ? useTransform(scrollProgress, [inStart, inEnd, outStart, outEnd], [0, 1, 1, 0]) : opacityIn,
    y: useSpring(y, SPRING),
  };
}

const ScrollStory = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress within this tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smoothed progress for buttery feel
  const smoothProgress = useSpring(scrollYProgress, SPRING);

  // ─── Phase 1: Title ───
  const titleOpacity = useTransform(smoothProgress, [0, 0.08, 0.25, 0.32], [0, 1, 1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.08], [60, 0]);
  const titleScale = useTransform(smoothProgress, [0.25, 0.32], [1, 0.95]);

  // ─── Phase 2: Stats ───
  const statsOpacity = useTransform(smoothProgress, [0.12, 0.2, 0.4, 0.48], [0, 1, 1, 0]);
  const statsY = useTransform(smoothProgress, [0.12, 0.2], [50, 0]);

  // Counter values driven by scroll
  const projectsCount = useTransform(smoothProgress, [0.15, 0.35], [0, 10]);
  const techCount = useTransform(smoothProgress, [0.18, 0.35], [0, 25]);
  const experienceCount = useTransform(smoothProgress, [0.20, 0.35], [0, 4]);

  // ─── Phase 3: Philosophy ───
  const philOpacity = useTransform(smoothProgress, [0.30, 0.38, 0.58, 0.65], [0, 1, 1, 0]);
  const philY = useTransform(smoothProgress, [0.30, 0.38], [40, 0]);
  const philLine1 = useTransform(smoothProgress, [0.32, 0.40], [0, 1]);
  const philLine2 = useTransform(smoothProgress, [0.36, 0.44], [0, 1]);
  const philLine3 = useTransform(smoothProgress, [0.40, 0.48], [0, 1]);

  // ─── Phase 4: Milestones ───
  const milestoneOpacity = useTransform(smoothProgress, [0.50, 0.58, 0.78, 0.85], [0, 1, 1, 0]);
  const milestoneY = useTransform(smoothProgress, [0.50, 0.58], [40, 0]);
  const milestone1 = useTransform(smoothProgress, [0.52, 0.58], [0, 1]);
  const milestone2 = useTransform(smoothProgress, [0.56, 0.62], [0, 1]);
  const milestone3 = useTransform(smoothProgress, [0.60, 0.66], [0, 1]);
  const milestone4 = useTransform(smoothProgress, [0.64, 0.70], [0, 1]);
  const lineHeight = useTransform(smoothProgress, [0.52, 0.72], ['0%', '100%']);

  // ─── Phase 5: CTA ───
  const ctaOpacity = useTransform(smoothProgress, [0.80, 0.88], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.80, 0.88], [40, 0]);
  const ctaScale = useTransform(smoothProgress, [0.80, 0.90], [0.9, 1]);

  // ─── Background orb parallax ───
  const orb1Y = useTransform(smoothProgress, [0, 1], [0, -120]);
  const orb2Y = useTransform(smoothProgress, [0, 1], [0, -80]);
  const orb1X = useTransform(smoothProgress, [0, 1], [0, 40]);

  // ─── Progress indicator ───
  const indicatorScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  const milestones = [
    { year: '2024', text: 'First AI internship — Fine-tuned language models' },
    { year: '2024', text: 'Won 2nd Prize at Startup TN Hackathon' },
    { year: '2025', text: 'Built AIML Department website with React' },
    { year: '2025', text: 'Frontend Developer at Reflexlabs.ai' },
  ];

  // ─── Reduced Motion: Static version ───
  if (shouldReduceMotion) {
    return (
      <section className="section-padding bg-primary" aria-label="Professional journey">
        <div className="container-custom text-center space-y-12">
          <div>
            <span className="section-label justify-center">The Journey</span>
            <h2 className="section-title">Building the future with AI</h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div><p className="font-display text-display-sm text-accent">10+</p><p className="text-caption text-text-muted">Projects</p></div>
            <div><p className="font-display text-display-sm text-accent">25+</p><p className="text-caption text-text-muted">Technologies</p></div>
            <div><p className="font-display text-display-sm text-accent">4</p><p className="text-caption text-text-muted">Roles</p></div>
          </div>
          <a href="#projects" className="btn-primary inline-flex">See My Work</a>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-primary"
      style={{ height: '500vh' }}
      aria-label="Scroll-driven professional journey narrative"
    >
      {/* Sticky viewport — pinned while user scrolls the tall container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Background parallax orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 left-[15%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px]"
            style={{ y: orb1Y, x: orb1X }}
          />
          <motion.div
            className="absolute bottom-1/4 right-[15%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[80px]"
            style={{ y: orb2Y }}
          />
        </div>

        {/* Scroll progress indicator — left edge */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 h-32 w-px bg-border-line hidden lg:block" aria-hidden="true">
          <motion.div
            className="w-full bg-accent origin-top"
            style={{ scaleY: indicatorScaleY, height: '100%' }}
          />
        </div>

        {/* Content layers */}
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center px-6">

          {/* ── Phase 1: Title ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
          >
            <span className="section-label justify-center mb-6">The Journey So Far</span>
            <h2 className="font-display text-display-md md:text-display-lg text-text-primary leading-tight">
              From curiosity to
              <br />
              <span className="text-gradient">building the future</span>
            </h2>
            <p className="text-body-lg text-text-secondary mt-6 max-w-md mx-auto">
              Scroll to explore my story
            </p>
            {/* Scroll hint arrow */}
            <motion.div
              className="mt-8"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* ── Phase 2: Stats Counter ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity: statsOpacity, y: statsY }}
          >
            <span className="section-label justify-center mb-8">By The Numbers</span>
            <div className="grid grid-cols-3 gap-8 md:gap-16 w-full max-w-xl mx-auto">
              {[
                { value: projectsCount, suffix: '+', label: 'Projects Built' },
                { value: techCount, suffix: '+', label: 'Technologies' },
                { value: experienceCount, suffix: '', label: 'Professional Roles' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.p className="font-display text-display-sm md:text-display-md text-accent tabular-nums">
                    <motion.span>
                      {/* Render rounded integer from MotionValue */}
                      <CounterDisplay value={stat.value} />
                    </motion.span>
                    <span className="text-accent/60">{stat.suffix}</span>
                  </motion.p>
                  <p className="text-caption text-text-muted mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Phase 3: Philosophy ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity: philOpacity, y: philY }}
          >
            <span className="section-label justify-center mb-8">Philosophy</span>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { text: 'I believe AI should augment human creativity,', opacity: philLine1 },
                { text: 'not replace it. Every system I build starts with', opacity: philLine2 },
                { text: 'a real problem and ends with an elegant solution.', opacity: philLine3 },
              ].map((line, i) => (
                <motion.p
                  key={i}
                  className="font-display text-heading md:text-display-sm text-text-primary leading-relaxed"
                  style={{ opacity: line.opacity }}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* ── Phase 4: Milestones ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity: milestoneOpacity, y: milestoneY }}
          >
            <span className="section-label justify-center mb-8">Milestones</span>
            <div className="relative max-w-md mx-auto w-full">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border-line">
                <motion.div
                  className="w-full bg-accent origin-top"
                  style={{ height: lineHeight }}
                />
              </div>

              <div className="space-y-6">
                {milestones.map((m, i) => {
                  const opacities = [milestone1, milestone2, milestone3, milestone4];
                  return (
                    <motion.div
                      key={i}
                      className="flex items-start gap-5 pl-2"
                      style={{ opacity: opacities[i] }}
                    >
                      {/* Dot */}
                      <div className="w-3 h-3 rounded-full bg-accent border-2 border-primary flex-shrink-0 mt-1.5 relative z-10" />
                      <div className="text-left">
                        <span className="text-caption font-mono text-accent">{m.year}</span>
                        <p className="text-body-sm text-text-secondary mt-0.5">{m.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Phase 5: CTA ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity: ctaOpacity, y: ctaY, scale: ctaScale }}
          >
            <span className="section-label justify-center mb-6">Ready?</span>
            <h2 className="font-display text-display-sm md:text-display-md text-text-primary mb-4">
              Let's see what I've built
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-sm mx-auto">
              From AI-powered applications to production websites — each project tells a story.
            </p>
            <a href="#projects" className="btn-primary">
              See My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * CounterDisplay — Renders a MotionValue as a rounded integer.
 * Uses Framer Motion's useTransform to avoid re-rendering parent.
 */
function CounterDisplay({ value }) {
  const rounded = useTransform(value, (v) => Math.round(v));

  return <motion.span>{rounded}</motion.span>;
}

export default ScrollStory;
