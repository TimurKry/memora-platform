type EditorialStreetMapProps = {
  className?: string;
  label?: string;
};

/** Minimal street map — cream + gray lines, editorial pin */
export function EditorialStreetMap({
  className = "",
  label = "Südfriedhof",
}: EditorialStreetMapProps) {
  return (
    <svg
      viewBox="0 0 200 150"
      className={`h-full w-full bg-[#faf9f6] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Karte: ${label}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="street-paper" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="1" cy="1" r="0.35" fill="#1b1b1b" opacity="0.03" />
        </pattern>
      </defs>

      <rect width="200" height="150" fill="#faf9f6" />
      <rect width="200" height="150" fill="url(#street-paper)" />

      {/* City blocks — very light fill */}
      <rect x="12" y="18" width="55" height="42" fill="#f0efeb" opacity="0.6" />
      <rect x="78" y="28" width="48" height="55" fill="#f0efeb" opacity="0.5" />
      <rect x="138" y="22" width="50" height="48" fill="#f0efeb" opacity="0.45" />
      <rect x="22" y="78" width="62" height="58" fill="#f0efeb" opacity="0.4" />
      <rect x="100" y="92" width="78" height="48" fill="#f0efeb" opacity="0.35" />

      {/* Main roads */}
      <path
        d="M0 75 L200 75"
        stroke="#1b1b1b"
        strokeWidth="0.9"
        opacity="0.12"
        strokeLinecap="round"
      />
      <path
        d="M95 0 L95 150"
        stroke="#1b1b1b"
        strokeWidth="0.75"
        opacity="0.1"
        strokeLinecap="round"
      />
      <path
        d="M0 115 Q100 108 200 118"
        stroke="#1b1b1b"
        strokeWidth="0.55"
        opacity="0.09"
      />
      <path
        d="M45 0 L45 150"
        stroke="#1b1b1b"
        strokeWidth="0.45"
        opacity="0.07"
      />
      <path
        d="M155 0 L155 150"
        stroke="#1b1b1b"
        strokeWidth="0.45"
        opacity="0.07"
      />

      {/* Secondary streets */}
      <path d="M12 45 L188 48" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.08" />
      <path d="M70 18 L72 132" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.07" />
      <path d="M120 25 L118 140" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.07" />
      <path d="M0 95 L200 92" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.06" />

      {/* Park / cemetery green — hatched, not green color */}
      <path
        d="M108 82 Q128 72 148 82 Q158 95 148 108 Q128 118 108 108 Q98 95 108 82 Z"
        stroke="#1b1b1b"
        strokeWidth="0.45"
        opacity="0.2"
        fill="#f7f6f2"
      />
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1={112 + i * 12}
          y1={88}
          x2={118 + i * 10}
          y2={102}
          stroke="#1b1b1b"
          strokeWidth="0.3"
          opacity="0.15"
        />
      ))}

      {/* Pin */}
      <g transform="translate(128, 92)">
        <circle r="11" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.12" fill="#ffffff" />
        <circle r="3.2" fill="#1b1b1b" />
        <path d="M0 3.2 L0 9" stroke="#1b1b1b" strokeWidth="0.7" strokeLinecap="round" />
      </g>

      {/* Label */}
      <text
        x="128"
        y="118"
        textAnchor="middle"
        fontSize="8"
        fill="#1b1b1b"
        opacity="0.55"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
      >
        {label}
      </text>
    </svg>
  );
}
