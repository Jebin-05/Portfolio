/**
 * Custom Cursor Hook
 * Uses useRef + requestAnimationFrame for butter-smooth 60fps tracking.
 * Never uses raw mousemove setState — positions are stored in refs
 * and read in the rAF loop for zero re-renders.
 */

import { useEffect, useRef, useCallback } from 'react';

export function useCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const cursorState = useRef('default'); // default | hover | text | click
  const isVisible = useRef(false);
  const isDesktop = useRef(false);
  const rafId = useRef(null);

  const setCursorState = useCallback((state) => {
    cursorState.current = state;
    if (!cursorRef.current) return;

    const el = cursorRef.current;
    el.dataset.state = state;
  }, []);

  useEffect(() => {
    // Only enable on non-touch, desktop devices
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    isDesktop.current = mql.matches;
    if (!mql.matches) return;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        if (cursorRef.current) cursorRef.current.style.opacity = '1';
        if (cursorDotRef.current) cursorDotRef.current.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      setCursorState('click');
    };

    const onMouseUp = () => {
      setCursorState('default');
      // Re-check what we're hovering
      checkHoverTarget();
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '1';
    };

    const checkHoverTarget = () => {
      const el = document.elementFromPoint(mouse.current.x, mouse.current.y);
      if (!el) return;

      if (el.closest('a, button, [role="button"], [data-cursor="pointer"]')) {
        setCursorState('hover');
      } else if (el.closest('p, h1, h2, h3, h4, h5, h6, span, li, label, [data-cursor="text"]')) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    // Hover detection via event delegation
    const onMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a, button, [role="button"], [data-cursor="pointer"]')) {
        setCursorState('hover');
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6, span, li, label, [data-cursor="text"]')) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    // Smooth lag with lerp — rAF loop
    const RING_SPEED = 0.12;
    const DOT_SPEED = 0.45;

    const animate = () => {
      // Ring (outer) — slower, magnetic lag
      pos.current.x += (mouse.current.x - pos.current.x) * RING_SPEED;
      pos.current.y += (mouse.current.y - pos.current.y) * RING_SPEED;

      // Dot (inner) — faster, more direct
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * DOT_SPEED;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * DOT_SPEED;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [setCursorState]);

  return { cursorRef, cursorDotRef, isDesktop };
}
