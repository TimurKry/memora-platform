type EditorialCityMapProps = {
  className?: string;
};

/** Leipzig city grid — cream editorial line art */
export function EditorialCityMap({ className = "" }: EditorialCityMapProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`h-full w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stadtkarte Leipzig"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="city-paper" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="1" cy="1" r="0.35" fill="#1b1b1b" opacity="0.03" />
        </pattern>
      </defs>

      <rect width="640" height="480" fill="#faf9f6" />
      <rect width="640" height="480" fill="url(#city-paper)" />

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
          fill="#f0efeb"
          stroke="#e6e4df"
          strokeWidth="0.5"
          opacity="0.85"
        />
      ))}

      <path d="M0 240 L640 240" stroke="#1b1b1b" strokeWidth="1" opacity="0.14" />
      <path d="M320 0 L320 480" stroke="#1b1b1b" strokeWidth="0.85" opacity="0.12" />
      <path d="M0 120 Q320 100 640 130" stroke="#1b1b1b" strokeWidth="0.55" opacity="0.09" />
      <path d="M0 360 Q320 380 640 350" stroke="#1b1b1b" strokeWidth="0.55" opacity="0.08" />
      <path d="M100 0 L100 480" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.07" />
      <path d="M220 0 L220 480" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.06" />
      <path d="M420 0 L420 480" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.06" />
      <path d="M540 0 L540 480" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.07" />

      <ellipse
        cx="320"
        cy="240"
        rx="200"
        ry="150"
        stroke="#1b1b1b"
        strokeWidth="0.45"
        opacity="0.08"
        strokeDasharray="4 6"
      />

      <path
        d="M0 310 Q160 280 280 300 Q400 320 520 290 Q600 275 640 300"
        stroke="#1b1b1b"
        strokeWidth="5"
        opacity="0.06"
        strokeLinecap="round"
      />
      <path
        d="M0 310 Q160 280 280 300 Q400 320 520 290 Q600 275 640 300"
        stroke="#1b1b1b"
        strokeWidth="0.6"
        opacity="0.1"
      />

      <rect
        x="350"
        y="300"
        width="90"
        height="65"
        stroke="#1b1b1b"
        strokeWidth="0.5"
        opacity="0.2"
        fill="#f0efeb"
      />
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <rect
            key={`g-${r}-${c}`}
            x={358 + c * 20}
            y={308 + r * 18}
            width="14"
            height="10"
            stroke="#1b1b1b"
            strokeWidth="0.25"
            opacity="0.12"
          />
        )),
      )}

      <g transform="translate(395, 328)">
        <circle r="10" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.15" />
        <circle r="3.5" fill="#1b1b1b" />
        <path d="M0 3.5 L0 10" stroke="#1b1b1b" strokeWidth="0.8" />
      </g>

      <text
        x="32"
        y="42"
        fill="#1b1b1b"
        fontSize="10"
        letterSpacing="0.22em"
        fontFamily="system-ui, sans-serif"
        opacity="0.55"
      >
        LEIPZIG
      </text>
      <text x="32" y="58" fill="#6b6b6b" fontSize="8" fontFamily="monospace" opacity="0.7">
        51.34° N · 12.37° E
      </text>
      <text
        x="395"
        y="358"
        textAnchor="middle"
        fill="#6b6b6b"
        fontSize="7.5"
        letterSpacing="0.12em"
        fontFamily="system-ui, sans-serif"
        opacity="0.65"
      >
        SÜDFRIEDHOF
      </text>
    </svg>
  );
}
