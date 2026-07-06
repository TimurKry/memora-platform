type CemeteryMapProps = {
  variant?: "hero" | "mini";
  className?: string;
};

function Tree({ x, y, scale = 1, opacity = 0.35 }: { x: number; y: number; scale?: number; opacity?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      <ellipse cx="0" cy="14" rx="16" ry="7" stroke="#1b1b1b" strokeWidth="0.55" />
      <path d="M0 10 L0 -12" stroke="#1b1b1b" strokeWidth="0.55" />
      <path d="M-14 2 Q0 -20 14 2" stroke="#1b1b1b" strokeWidth="0.55" />
      <path d="M-10 6 Q0 -10 10 6" stroke="#1b1b1b" strokeWidth="0.45" opacity="0.7" />
    </g>
  );
}

function Pine({ x, y, h = 28, opacity = 0.3 }: { x: number; y: number; h?: number; opacity?: number }) {
  return (
    <g opacity={opacity}>
      <path d={`M${x} ${y + h} L${x} ${y + h - 6}`} stroke="#1b1b1b" strokeWidth="0.5" />
      <path
        d={`M${x} ${y + 8} L${x - 10} ${y + h - 4} L${x + 10} ${y + h - 4} Z`}
        stroke="#1b1b1b"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d={`M${x} ${y} L${x - 8} ${y + h - 10} L${x + 8} ${y + h - 10} Z`}
        stroke="#1b1b1b"
        strokeWidth="0.5"
        fill="none"
      />
    </g>
  );
}

export function CemeteryMap({ variant = "hero", className = "" }: CemeteryMapProps) {
  const isMini = variant === "mini";

  return (
    <svg
      viewBox={isMini ? "0 0 200 150" : "0 0 640 480"}
      className={`h-full w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustrierte Friedhofskarte Leipzig"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="hatch-slope" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#1b1b1b" strokeWidth="0.35" opacity="0.12" />
        </pattern>
        <pattern id="hatch-plot" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#1b1b1b" strokeWidth="0.3" opacity="0.18" />
        </pattern>
        <linearGradient id="paper-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7f6f2" stopOpacity="0" />
          <stop offset="100%" stopColor="#f7f6f2" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {!isMini && (
        <>
          {/* Topographic contours */}
          {[320, 280, 240, 200, 160].map((y, i) => (
            <path
              key={y}
              d={`M20 ${y + 80} Q160 ${y} 320 ${y + 20} T620 ${y + 40}`}
              stroke="#1b1b1b"
              strokeWidth="0.45"
              opacity={0.08 + i * 0.03}
            />
          ))}

          {/* Forest mass — left hillside */}
          <path
            d="M0 480 L0 80 Q80 40 140 100 Q200 60 240 140 L240 480 Z"
            fill="url(#hatch-slope)"
            opacity="0.5"
          />
          <path
            d="M480 480 L640 480 L640 120 Q560 80 500 130 Q440 90 400 150 L380 480 Z"
            fill="url(#hatch-slope)"
            opacity="0.35"
          />

          {/* Forest trees */}
          <Tree x={45} y={180} scale={0.9} opacity={0.28} />
          <Tree x={90} y={150} scale={1.1} opacity={0.32} />
          <Tree x={130} y={190} scale={0.85} opacity={0.25} />
          <Tree x={70} y={220} scale={1} opacity={0.3} />
          <Tree x={520} y={160} scale={1} opacity={0.26} />
          <Tree x={570} y={200} scale={0.9} opacity={0.22} />
          <Pine x={175} y={95} h={32} opacity={0.28} />
          <Pine x={210} y={110} h={26} opacity={0.24} />
          <Pine x={455} y={100} h={30} opacity={0.26} />
          <Pine x={490} y={125} h={24} opacity={0.22} />

          {/* Main paths */}
          <path
            d="M60 400 Q180 360 280 340 Q380 320 480 350 Q540 365 580 380"
            stroke="#1b1b1b"
            strokeWidth="0.7"
            opacity="0.2"
            strokeDasharray="none"
          />
          <path d="M280 340 L280 180 M380 320 L380 200 M480 350 L470 220" stroke="#1b1b1b" strokeWidth="0.5" opacity="0.15" />
          <path d="M180 360 L180 260 M320 330 L320 240" stroke="#1b1b1b" strokeWidth="0.45" opacity="0.12" />

          {/* Cemetery sections A B C */}
          {[
            { x: 200, y: 250, w: 100, h: 70, label: "A" },
            { x: 310, y: 230, w: 110, h: 75, label: "B" },
            { x: 420, y: 255, w: 95, h: 65, label: "C" },
            { x: 240, y: 340, w: 90, h: 55, label: "D" },
            { x: 350, y: 330, w: 100, h: 60, label: "E" },
          ].map(({ x, y, w, h, label }) => (
            <g key={label} opacity="0.55">
              <rect x={x} y={y} width={w} height={h} stroke="#1b1b1b" strokeWidth="0.55" fill="url(#hatch-plot)" />
              {/* Grave rows */}
              {Array.from({ length: 3 }).map((_, row) =>
                Array.from({ length: 4 }).map((_, col) => (
                  <rect
                    key={`${label}-${row}-${col}`}
                    x={x + 8 + col * (w / 4.5)}
                    y={y + 10 + row * (h / 4)}
                    width={w / 6}
                    height={h / 6}
                    stroke="#1b1b1b"
                    strokeWidth="0.25"
                    opacity="0.5"
                  />
                )),
              )}
              <text x={x + 6} y={y - 4} fontSize="8" fill="#1b1b1b" opacity="0.45" fontFamily="serif">
                {label}
              </text>
            </g>
          ))}

          {/* Chapel / funeral house */}
          <g transform="translate(368, 168)" opacity="0.65">
            <rect x="0" y="20" width="52" height="38" stroke="#1b1b1b" strokeWidth="0.65" />
            <path d="M0 20 L26 0 L52 20" stroke="#1b1b1b" strokeWidth="0.65" />
            <rect x="20" y="38" width="12" height="20" stroke="#1b1b1b" strokeWidth="0.45" />
            <path d="M26 0 L26 -8 M22 -4 L26 -8 L30 -4" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.5" />
          </g>

          {/* Location marker on chapel */}
          <g transform="translate(394, 155)">
            <circle r="14" stroke="#1b1b1b" strokeWidth="0.45" opacity="0.2" />
            <circle r="4.5" fill="#1b1b1b" />
            <path d="M0 4.5 L0 14" stroke="#1b1b1b" strokeWidth="0.8" />
          </g>

          {/* Entrance gate */}
          <g transform="translate(248, 395)" opacity="0.4">
            <path d="M0 0 L0 -18 M20 0 L20 -18" stroke="#1b1b1b" strokeWidth="0.6" />
            <path d="M0 -18 Q10 -26 20 -18" stroke="#1b1b1b" strokeWidth="0.6" />
          </g>

          {/* Compass rose */}
          <g transform="translate(560, 52)" opacity="0.4">
            <circle r="26" stroke="#1b1b1b" strokeWidth="0.5" />
            <circle r="2" fill="#1b1b1b" />
            <path d="M0 -22 L0 22 M-22 0 L22 0" stroke="#1b1b1b" strokeWidth="0.45" />
            <path d="M0 -22 L-4 -14 L4 -14 Z" fill="#1b1b1b" opacity="0.6" />
            <text y="-32" textAnchor="middle" fontSize="10" fill="#1b1b1b" fontFamily="serif">
              N
            </text>
            <text y="38" textAnchor="middle" fontSize="7" fill="#1b1b1b" opacity="0.5">
              S
            </text>
            <text x="-36" y="4" textAnchor="middle" fontSize="7" fill="#1b1b1b" opacity="0.5">
              W
            </text>
            <text x="36" y="4" textAnchor="middle" fontSize="7" fill="#1b1b1b" opacity="0.5">
              O
            </text>
          </g>

          {/* Scale bar */}
          <g transform="translate(48, 430)" opacity="0.35">
            <line x1="0" y1="0" x2="60" y2="0" stroke="#1b1b1b" strokeWidth="0.6" />
            <line x1="0" y1="-3" x2="0" y2="3" stroke="#1b1b1b" strokeWidth="0.6" />
            <line x1="30" y1="-2" x2="30" y2="2" stroke="#1b1b1b" strokeWidth="0.5" />
            <line x1="60" y1="-3" x2="60" y2="3" stroke="#1b1b1b" strokeWidth="0.6" />
            <text x="30" y="14" textAnchor="middle" fontSize="7" fill="#1b1b1b" fontFamily="sans-serif">
              50m
            </text>
          </g>

          {/* Labels */}
          <text x="48" y="36" fontSize="9" fill="#1b1b1b" opacity="0.5" letterSpacing="0.18em">
            HAUPTFRIEDHOF LEIPZIG
          </text>
          <text x="48" y="52" fontSize="7.5" fill="#1b1b1b" opacity="0.35" fontFamily="monospace">
            51.3397° N · 12.3731° E
          </text>

          {/* Paper vignette */}
          <rect width="640" height="480" fill="url(#paper-fade)" pointerEvents="none" />
        </>
      )}

      {isMini && (
        <>
          <rect width="200" height="150" fill="url(#hatch-slope)" opacity="0.3" />
          <path d="M10 110 Q50 80 100 95 T190 85" stroke="#1b1b1b" strokeWidth="0.5" opacity="0.25" />
          <rect x="60" y="55" width="50" height="35" stroke="#1b1b1b" strokeWidth="0.5" opacity="0.45" fill="url(#hatch-plot)" />
          <rect x="115" y="60" width="40" height="30" stroke="#1b1b1b" strokeWidth="0.45" opacity="0.4" fill="url(#hatch-plot)" />
          <Tree x={25} y={70} scale={0.5} opacity={0.3} />
          <Tree x={160} y={65} scale={0.45} opacity={0.25} />
          <circle cx="118" cy="72" r="3" fill="#1b1b1b" />
        </>
      )}
    </svg>
  );
}
