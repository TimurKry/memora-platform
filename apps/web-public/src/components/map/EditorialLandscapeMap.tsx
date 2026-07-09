type EditorialLandscapeMapProps = {
  className?: string;
};

/** Hand-drawn landscape — cream paper, black ink, no photos */
export function EditorialLandscapeMap({ className = "" }: EditorialLandscapeMapProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`h-full w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustrierte Landschaftskarte Leipzig"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="land-hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(42)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.1" />
        </pattern>
        <pattern id="land-hatch-light" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(-38)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1b1b1b" strokeWidth="0.3" opacity="0.07" />
        </pattern>
        <linearGradient id="land-vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7f6f2" stopOpacity="0" />
          <stop offset="88%" stopColor="#f7f6f2" stopOpacity="0" />
          <stop offset="100%" stopColor="#f7f6f2" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Paper base */}
      <rect width="640" height="480" fill="#faf9f6" />
      <rect width="640" height="480" fill="url(#land-hatch-light)" />

      {/* Topographic contours — full canvas */}
      {[420, 380, 340, 300, 260, 220, 180, 140, 100].map((y, i) => (
        <path
          key={y}
          d={`M0 ${y} Q120 ${y - 18 - i * 2} 240 ${y - 8} T480 ${y + 6} T640 ${y - 4}`}
          stroke="#1b1b1b"
          strokeWidth="0.4"
          opacity={0.06 + i * 0.012}
        />
      ))}

      {/* Left woodland */}
      <path
        d="M0 480 L0 60 Q40 20 90 70 Q130 30 170 90 Q200 50 230 110 L250 480 Z"
        fill="url(#land-hatch)"
        opacity="0.55"
      />
      {/* Right woodland */}
      <path
        d="M640 480 L640 40 Q590 10 540 60 Q500 25 460 80 Q420 45 390 100 L370 480 Z"
        fill="url(#land-hatch)"
        opacity="0.45"
      />

      {/* Trees — left grove */}
      {[
        [35, 200, 1.1],
        [68, 165, 0.95],
        [105, 210, 1.2],
        [55, 250, 0.85],
        [120, 175, 1],
        [145, 230, 0.9],
      ].map(([x, y, s], i) => (
        <g key={`tl-${i}`} transform={`translate(${x}, ${y}) scale(${s})`} opacity={0.28}>
          <path d="M0 18 L0 -14" stroke="#1b1b1b" strokeWidth="0.55" />
          <path d="M-16 4 Q0 -22 16 4" stroke="#1b1b1b" strokeWidth="0.55" />
          <path d="M-12 10 Q0 -12 12 10" stroke="#1b1b1b" strokeWidth="0.45" opacity="0.65" />
        </g>
      ))}

      {/* Pines — right edge */}
      {[
        [520, 130, 34],
        [555, 155, 28],
        [585, 120, 32],
        [500, 175, 26],
      ].map(([x, y, h], i) => (
        <g key={`pr-${i}`} opacity={0.26}>
          <path d={`M${x} ${y + h} L${x} ${y + h - 5}`} stroke="#1b1b1b" strokeWidth="0.5" />
          <path
            d={`M${x} ${y + 6} L${x - 9} ${y + h - 3} L${x + 9} ${y + h - 3} Z`}
            stroke="#1b1b1b"
            strokeWidth="0.5"
          />
          <path
            d={`M${x} ${y} L${x - 7} ${y + h - 9} L${x + 7} ${y + h - 9} Z`}
            stroke="#1b1b1b"
            strokeWidth="0.45"
          />
        </g>
      ))}

      {/* Meadow clearing */}
      <ellipse cx="310" cy="280" rx="200" ry="120" fill="#f7f6f2" opacity="0.5" />

      {/* Winding country path */}
      <path
        d="M40 420 Q140 380 220 360 Q300 340 360 320 Q420 300 500 310 Q560 318 600 340"
        stroke="#1b1b1b"
        strokeWidth="0.65"
        opacity="0.18"
        strokeLinecap="round"
      />
      <path
        d="M220 360 Q250 300 280 250 Q310 200 340 175"
        stroke="#1b1b1b"
        strokeWidth="0.5"
        opacity="0.12"
      />

      {/* Village cluster — center-right */}
      <g opacity="0.62">
        {/* House 1 */}
        <g transform="translate(380, 248)">
          <rect x="0" y="18" width="36" height="28" stroke="#1b1b1b" strokeWidth="0.6" />
          <path d="M0 18 L18 2 L36 18" stroke="#1b1b1b" strokeWidth="0.6" />
          <rect x="14" y="30" width="8" height="16" stroke="#1b1b1b" strokeWidth="0.45" />
          <rect x="6" y="24" width="6" height="6" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.5" />
        </g>
        {/* House 2 — featured with pin */}
        <g transform="translate(430, 228)">
          <rect x="0" y="22" width="44" height="34" stroke="#1b1b1b" strokeWidth="0.65" />
          <path d="M0 22 L22 4 L44 22" stroke="#1b1b1b" strokeWidth="0.65" />
          <rect x="17" y="36" width="10" height="20" stroke="#1b1b1b" strokeWidth="0.5" />
          <rect x="8" y="28" width="7" height="7" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.45" />
          <rect x="28" y="28" width="7" height="7" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.45" />
        </g>
        {/* House 3 small */}
        <g transform="translate(488, 258)">
          <rect x="0" y="14" width="28" height="22" stroke="#1b1b1b" strokeWidth="0.55" />
          <path d="M0 14 L14 2 L28 14" stroke="#1b1b1b" strokeWidth="0.55" />
        </g>
        {/* Chapel */}
        <g transform="translate(348, 268)">
          <rect x="0" y="16" width="32" height="38" stroke="#1b1b1b" strokeWidth="0.55" />
          <path d="M0 16 L16 0 L32 16" stroke="#1b1b1b" strokeWidth="0.55" />
          <path d="M16 0 L16 -10" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.5" />
          <rect x="12" y="32" width="8" height="22" stroke="#1b1b1b" strokeWidth="0.4" />
        </g>
      </g>

      {/* Location pin — on featured house */}
      <g transform="translate(452, 218)">
        <circle r="16" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.15" fill="#f7f6f2" />
        <circle r="4" fill="#1b1b1b" />
        <path d="M0 4 L0 13" stroke="#1b1b1b" strokeWidth="0.85" strokeLinecap="round" />
      </g>

      {/* Distant hills line */}
      <path
        d="M180 320 Q280 280 380 295 Q480 310 560 285"
        stroke="#1b1b1b"
        strokeWidth="0.5"
        opacity="0.14"
      />

      {/* Cemetery hint — far left, subtle */}
      <g transform="translate(195, 305)" opacity="0.35">
        <rect x="0" y="0" width="70" height="48" stroke="#1b1b1b" strokeWidth="0.45" fill="url(#land-hatch)" />
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <rect
              key={`g-${r}-${c}`}
              x={6 + c * 15}
              y={8 + r * 12}
              width="10"
              height="7"
              stroke="#1b1b1b"
              strokeWidth="0.25"
              opacity="0.6"
            />
          )),
        )}
        <text x="4" y="-4" fontSize="7" fill="#1b1b1b" opacity="0.5" fontFamily="Georgia, serif">
          Friedhof
        </text>
      </g>

      {/* Compass rose */}
      <g transform="translate(568, 58)" opacity="0.42">
        <circle r="28" stroke="#1b1b1b" strokeWidth="0.5" />
        <circle r="1.5" fill="#1b1b1b" />
        <path d="M0 -24 L0 24 M-24 0 L24 0" stroke="#1b1b1b" strokeWidth="0.45" />
        <path d="M0 -24 L-3.5 -15 L3.5 -15 Z" fill="#1b1b1b" opacity="0.7" />
        <text y="-34" textAnchor="middle" fontSize="11" fill="#1b1b1b" fontFamily="Georgia, serif">
          N
        </text>
      </g>

      {/* Scale */}
      <g transform="translate(44, 438)" opacity="0.32">
        <line x1="0" y1="0" x2="72" y2="0" stroke="#1b1b1b" strokeWidth="0.55" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#1b1b1b" strokeWidth="0.55" />
        <line x1="72" y1="-4" x2="72" y2="4" stroke="#1b1b1b" strokeWidth="0.55" />
        <text x="36" y="16" textAnchor="middle" fontSize="7.5" fill="#1b1b1b" fontFamily="system-ui, sans-serif">
          500 m
        </text>
      </g>

      {/* Caption */}
      <text x="44" y="38" fontSize="9" fill="#1b1b1b" opacity="0.45" letterSpacing="0.2em" fontFamily="system-ui, sans-serif">
        LEIPZIG · SÜD
      </text>

      <rect width="640" height="480" fill="url(#land-vignette)" pointerEvents="none" />
    </svg>
  );
}
