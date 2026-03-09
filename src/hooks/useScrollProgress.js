/**
 * Scroll Progress Hook
 * GPU-accelerated — reads scrollY in rAF, returns a ref (not state)
 * to avoid re-rendering the entire app on every scroll pixel.
 * For the ScrollProgress bar, we update a CSS custom property directly.
 */

import { useEffect, useRef, useCallback } from 'react';

export function useScrollProgress() {
  const progressRef = useRef(0);
  const barRef = useRef(null);
  const rafId = useRef(null);
  const ticking = useRef(false);

  const update = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    progressRef.current = progress;

    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${progress})`;
    }

    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        rafId.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [update]);

  return { progressRef, barRef };
}
