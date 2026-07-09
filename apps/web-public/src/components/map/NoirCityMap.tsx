type NoirCityMapProps = {
  className?: string;
};

/** Leipzig city grid — film noir line art */
export function NoirCityMap({ className = "" }: NoirCityMapProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`h-full w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stadtkarte Leipzig — Noir"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="noir-fog" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#141414" stopOpacity="0" />
          <stop offset="100%" stopColor="#080808" stopOpacity="0.95" />
        </radialGradient>
        <pattern id="noir-rain" patternUnits="userSpaceOnUse" width="4" height="4">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#fff" strokeWidth="0.2" opacity="0.03" />
        </pattern>
        <filter id="noir-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="640" height="480" fill="#080808" />
      <rect width="640" height="480" fill="url(#noir-rain)" />

      {/* City blocks */}
      {[
        [40, 60, 90, 70],
        [140, 50, 110, 85],
        [260, 45, 95, 90],
        [370, 55, 120, 75],
        [500, 65, 100, 80],
        [55, 160, 80, 100],
        [150, 150, 100, 110],
        [270, 140, 130, 120],
        [420, 155, 90, 95],
        [530, 170, 75, 85],
        [70, 290, 95, 130],
        [190, 280, 110, 140],
        [320, 270, 140, 150],
        [480, 285, 100, 120],
        [120, 400, 150, 60],
        [300, 390, 180, 70],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill="#0e0e0e"
          stroke="#2a2a2a"
          strokeWidth="0.5"
          opacity="0.9"
        />
      ))}

      {/* Main arteries */}
      <path
        d="M0 240 L640 240"
        stroke="#e8e4dc"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <path
        d="M320 0 L320 480"
        stroke="#e8e4dc"
        strokeWidth="1"
        opacity="0.28"
      />
      <path
        d="M0 120 Q320 100 640 130"
        stroke="#e8e4dc"
        strokeWidth="0.6"
        opacity="0.18"
      />
      <path
        d="M0 360 Q320 380 640 350"
        stroke="#e8e4dc"
        strokeWidth="0.6"
        opacity="0.16"
      />
      <path d="M100 0 L100 480" stroke="#e8e4dc" strokeWidth="0.4" opacity="0.12" />
      <path d="M220 0 L220 480" stroke="#e8e4dc" strokeWidth="0.35" opacity="0.1" />
      <path d="M420 0 L420 480" stroke="#e8e4dc" strokeWidth="0.35" opacity="0.1" />
      <path d="M540 0 L540 480" stroke="#e8e4dc" strokeWidth="0.4" opacity="0.12" />

      {/* Ring road hint */}
      <ellipse
        cx="320"
        cy="240"
        rx="200"
        ry="150"
        stroke="#b5a17a"
        strokeWidth="0.5"
        opacity="0.2"
        strokeDasharray="4 6"
      />

      {/* River / canal */}
      <path
        d="M0 310 Q160 280 280 300 Q400 320 520 290 Q600 275 640 300"
        stroke="#3a3a3a"
        strokeWidth="8"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M0 310 Q160 280 280 300 Q400 320 520 290 Q600 275 640 300"
        stroke="#5a5a5a"
        strokeWidth="1"
        opacity="0.25"
      />

      {/* Cemetery zone — south */}
      <rect
        x="350"
        y="300"
        width="90"
        height="65"
        stroke="#b5a17a"
        strokeWidth="0.6"
        opacity="0.45"
        fill="#0a0a0a"
      />
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <rect
            key={`g-${r}-${c}`}
            x={358 + c * 20}
            y={308 + r * 18}
            width="14"
            height="10"
            stroke="#4a4a4a"
            strokeWidth="0.3"
            opacity="0.5"
          />
        )),
      )}

      {/* Location pin — gold */}
      <g transform="translate(395, 328)" filter="url(#noir-glow)">
        <circle r="14" stroke="#b5a17a" strokeWidth="0.5" opacity="0.4" />
        <circle r="4" fill="#b5a17a" />
        <path d="M0 4 L0 12" stroke="#b5a17a" strokeWidth="1" />
      </g>

      {/* Labels */}
      <text
        x="32"
        y="42"
        fill="#b5a17a"
        fontSize="10"
        letterSpacing="0.28em"
        fontFamily="system-ui, sans-serif"
        opacity="0.85"
      >
        LEIPZIG
      </text>
      <text x="32" y="58" fill="#7d7870" fontSize="8" fontFamily="monospace" opacity="0.7">
        51.34° N · 12.37° E
      </text>
      <text
        x="395"
        y="358"
        textAnchor="middle"
        fill="#b5a17a"
        fontSize="7.5"
        letterSpacing="0.14em"
        fontFamily="system-ui, sans-serif"
        opacity="0.75"
      >
        SÜDFRIEDHOF
      </text>

      {/* Venetian blind shadow */}
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={`blind-${i}`}
          x1="0"
          y1={i * 20}
          x2="640"
          y2={i * 20}
          stroke="#000"
          strokeWidth="8"
          opacity="0.06"
        />
      ))}

      <rect width="640" height="480" fill="url(#noir-fog)" pointerEvents="none" />
    </svg>
  );
}
