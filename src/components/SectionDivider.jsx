/**
 * SectionDivider — Organic SVG wave transition between sections
 * Replaces hard horizontal lines with a subtle, organic shape.
 * Flippable for alternating direction.
 */

const SectionDivider = ({ flip = false, fromColor = '#0a0a0b', toColor = '#111113' }) => {
  return (
    <div
      className="relative w-full overflow-hidden pointer-events-none select-none"
      style={{
        height: 'clamp(40px, 6vw, 80px)',
        transform: flip ? 'scaleY(-1)' : 'none',
        marginTop: '-1px',
        marginBottom: '-1px',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background fill */}
        <rect width="1440" height="80" fill={fromColor} />
        {/* Organic wave */}
        <path
          d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z"
          fill={toColor}
        />
        {/* Subtle accent line along the wave crest */}
        <path
          d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40"
          stroke="rgba(99, 102, 241, 0.08)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
