/**
 * useScrollTimeline
 * 
 * Maps scroll position within a pinned/sticky container to a 0→1 progress value.
 * Uses rAF for smooth updates — no re-renders, writes to a ref + calls an
 * optional onProgress callback for imperative updates.
 * 
 * The "scroll video" technique: the element is sticky, and as the user scrolls
 * through the tall outer container, progress goes from 0 to 1 — like scrubbing
 * through a video timeline.
 */

import { useEffect, useRef, useCallback, useState } from 'react';

export function useScrollTimeline(options = {}) {
  const { onProgress, scrubLength = 4 } = options; // scrubLength = how many viewports tall
  const containerRef = useRef(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  const update = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = containerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = containerHeight - viewportHeight;

    if (scrollableDistance <= 0) {
      progressRef.current = 0;
      setProgress(0);
      return;
    }

    // How far the container's top has scrolled past the viewport top
    const scrolled = -rect.top;
    const p = Math.max(0, Math.min(1, scrolled / scrollableDistance));
    
    progressRef.current = p;
    setProgress(p);

    if (onProgress) onProgress(p);
    ticking.current = false;
  }, [onProgress]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // initial

    return () => window.removeEventListener('scroll', onScroll);
  }, [update]);

  return { containerRef, progress, progressRef, scrubLength };
}
