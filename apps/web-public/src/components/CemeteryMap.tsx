export function CemeteryMap() {
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 560 420"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustrierte Friedhofskarte"
      >
        <defs>
          <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="4" stroke="#1b1b1b" strokeWidth="0.3" opacity="0.15" />
          </pattern>
        </defs>

        {/* Contour terrain */}
        <path
          d="M20 380 C80 320 120 340 180 300 S300 260 380 290 S480 250 540 280"
          stroke="#1b1b1b"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <path
          d="M40 360 Q200 200 360 240 T520 200"
          stroke="#1b1b1b"
          strokeWidth="0.5"
          opacity="0.12"
        />

        {/* Cemetery paths */}
        <path d="M80 320 H480 M120 280 H440 M160 240 H400" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.18" />
        <path d="M200 200 V360 M320 180 V380 M440 220 V340" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.15" />

        {/* Plot sections */}
        {[
          [100, 300, 80, 50],
          [200, 270, 90, 55],
          [310, 250, 85, 60],
          [410, 290, 75, 45],
          [150, 220, 70, 40],
          [280, 200, 95, 48],
        ].map(([x, y, w, h], i) => (
          <g key={i} opacity={0.35 + (i % 2) * 0.1}>
            <rect x={x} y={y} width={w} height={h} stroke="#1b1b1b" strokeWidth="0.5" fill="url(#hatch)" />
          </g>
        ))}

        {/* Trees — fine line */}
        {[
          [60, 180],
          [130, 150],
          [250, 120],
          [400, 140],
          [500, 160],
        ].map(([x, y], i) => (
          <g key={i} opacity="0.3">
            <ellipse cx={x} cy={y + 20} rx="14" ry="6" stroke="#1b1b1b" strokeWidth="0.45" />
            <path d={`M${x} ${y + 14} L${x} ${y - 8}`} stroke="#1b1b1b" strokeWidth="0.45" />
            <path
              d={`M${x - 12} ${y} Q${x} ${y - 18} ${x + 12} ${y}`}
              stroke="#1b1b1b"
              strokeWidth="0.45"
            />
          </g>
        ))}

        {/* Chapel */}
        <g opacity="0.5">
          <rect x="360" y="130" width="70" height="50" stroke="#1b1b1b" strokeWidth="0.7" />
          <path d="M360 130 L395 95 L430 130" stroke="#1b1b1b" strokeWidth="0.7" />
          <rect x="388" y="155" width="14" height="25" stroke="#1b1b1b" strokeWidth="0.5" />
        </g>

        {/* Location pin */}
        <g transform="translate(280, 268)">
          <circle r="5" fill="#1b1b1b" opacity="0.8" />
          <circle r="12" stroke="#1b1b1b" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Compass */}
        <g transform="translate(480, 55)" opacity="0.35">
          <circle r="22" stroke="#1b1b1b" strokeWidth="0.5" />
          <path d="M0 -16 L0 16 M-16 0 L16 0" stroke="#1b1b1b" strokeWidth="0.4" />
          <text y="-26" textAnchor="middle" fontSize="9" fill="#1b1b1b" fontFamily="serif">
            N
          </text>
        </g>

        {/* Coordinates label */}
        <text x="28" y="400" fontSize="8" fill="#1b1b1b" opacity="0.35" fontFamily="monospace">
          51.3397° N · 12.3731° E
        </text>
        <text x="28" y="32" fontSize="9" fill="#1b1b1b" opacity="0.4" letterSpacing="0.15em">
          HAUPTFRIEDHOF
        </text>
      </svg>
    </div>
  );
}
