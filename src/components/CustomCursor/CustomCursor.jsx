/**
 * Custom Cursor — Desktop Only
 *
 * Default:  Small filled dot (8px) — direct follow
 * Hover:    Expands to 40px ring — mix-blend-mode: difference
 * Text:     Thin vertical I-beam line
 * Click:    Compression burst (scale down → snap back via CSS transition)
 *
 * No re-renders. All positioning via refs + rAF in useCursor hook.
 * Hidden on touch devices via media query.
 */

import { useCursor } from '../../hooks/useCursor';
import './CustomCursor.css';

const CustomCursor = () => {
  const { cursorRef, cursorDotRef } = useCursor();

  return (
    <>
      {/* Outer ring — magnetic lag */}
      <div
        ref={cursorRef}
        className="custom-cursor-ring"
        data-state="default"
        aria-hidden="true"
      />
      {/* Inner dot — direct follow */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
