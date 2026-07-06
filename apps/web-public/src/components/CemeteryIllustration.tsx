export function CemeteryIllustration() {
  return (
    <svg
      viewBox="0 0 480 360"
      className="h-full w-full text-memora-ink"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 280 Q120 200 200 240 T360 220 T440 260"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.4"
      />
      <path
        d="M60 300 Q140 180 240 200 T400 180 T460 240"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
      />
      {[80, 140, 200, 260, 320, 380].map((x, i) => (
        <g key={x} opacity={0.5 + (i % 3) * 0.1}>
          <ellipse cx={x} cy={270 - i * 8} rx={18 + i * 2} ry={8} stroke="currentColor" strokeWidth="0.6" />
          <path d={`M${x} ${262 - i * 8} L${x} ${240 - i * 10}`} stroke="currentColor" strokeWidth="0.6" />
          <path
            d={`M${x - 10} ${248 - i * 10} Q${x} ${232 - i * 10} ${x + 10} ${248 - i * 10}`}
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </g>
      ))}
      <rect x="300" y="160" width="60" height="45" stroke="currentColor" strokeWidth="0.8" />
      <path d="M300 160 L330 130 L360 160" stroke="currentColor" strokeWidth="0.8" />
      <path d="M100 120 Q200 60 300 100 T420 80" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <circle cx="400" cy="60" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M400 40 L400 80 M380 60 L420 60" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <text x="395" y="64" fontSize="8" fill="currentColor" opacity="0.4">
        N
      </text>
    </svg>
  );
}
