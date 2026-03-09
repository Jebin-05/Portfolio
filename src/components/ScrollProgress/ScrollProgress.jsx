/**
 * Scroll Progress Bar
 * 3px, full-width at viewport top
 * GPU-accelerated: uses scaleX transform with transform-origin: left
 * Glow on leading edge via box-shadow
 */

import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress = () => {
  const { barRef } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left"
        style={{
          transform: 'scaleX(0)',
          background: 'linear-gradient(90deg, #6366f1, #818cf8)',
          boxShadow: '4px 0 16px rgba(99, 102, 241, 0.4), 0 0 8px rgba(99, 102, 241, 0.2)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
