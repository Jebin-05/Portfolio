/**
 * ╔══════════════════════════════════════════════════════╗
 * ║                  LOADING HOOK                        ║
 * ║                                                      ║
 * ║  Master Animation Timeline:                          ║
 * ║  00ms    → Page loads, loading screen visible        ║
 * ║  100ms   → SVG logo begins stroke drawing            ║
 * ║  900ms   → Logo complete, text clip-reveal starts    ║
 * ║  1000ms  → Counter begins (non-linear ease)          ║
 * ║  2000ms  → Counter hits 100%, exit armed             ║
 * ║  2200ms  → Exit animation begins (split wipe)        ║
 * ║  2800ms  → Hero fully revealed                       ║
 * ║  3000ms  → Loading screen unmounts                   ║
 * ║  3200ms  → Custom cursor activates                   ║
 * ╚══════════════════════════════════════════════════════╝
 */

import { useState, useEffect, useCallback } from 'react';

const TOTAL_DURATION = 2800; // ms before exit begins
const COUNTER_START = 900;   // ms — counter begins after logo + text
const COUNTER_END = 2200;    // ms — counter finishes

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState('reveal');   // reveal → statement → counter → exit → done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Phase: reveal (SVG draw) → 100ms
    const t1 = setTimeout(() => setPhase('reveal'), 100);
    // Phase: statement (text clip) → 900ms
    const t2 = setTimeout(() => setPhase('statement'), 900);
    // Phase: counter → 1000ms
    const t3 = setTimeout(() => setPhase('counter'), 1000);
    // Phase: exit → total duration
    const t4 = setTimeout(() => setPhase('exit'), TOTAL_DURATION);
    // Done — unmount
    const t5 = setTimeout(() => {
      setIsLoading(false);
      setPhase('done');
    }, TOTAL_DURATION + 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  // Non-linear counter: uses easeOutExpo for alive feel
  useEffect(() => {
    if (phase !== 'counter' && phase !== 'exit' && phase !== 'done') return;
    if (progress >= 100) return;

    const counterDuration = COUNTER_END - COUNTER_START;
    const startTime = performance.now();
    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / counterDuration, 1);
      // easeOutExpo: fast start, decelerating finish — feels alive
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const value = Math.round(eased * 100);
      setProgress(value);

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  const skipLoading = useCallback(() => {
    setIsLoading(false);
    setPhase('done');
    setProgress(100);
  }, []);

  return { isLoading, phase, progress, skipLoading };
}
