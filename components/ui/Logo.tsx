interface LogoProps {
  className?: string;
  /** Use on dark backgrounds (header, footer). */
  inverse?: boolean;
  showWordmark?: boolean;
}

/**
 * SenseiReview mark: a near-black square monogram with a serif "S" and a
 * signal-red full stop ("know better, choose better"), next to a two-tone
 * wordmark. Pure SVG so it stays crisp at every size.
 */
export function Logo({ className, inverse = false, showWordmark = true }: LogoProps) {
  const ink = inverse ? "#F5F1E8" : "#222A32";
  const box = inverse ? "#F5F1E8" : "#222A32";
  const boxText = inverse ? "#222A32" : "#F5F1E8";
  const red = inverse ? "#D46A57" : "#B94A3A";

  return (
    <svg
      viewBox={showWordmark ? "0 0 212 36" : "0 0 36 36"}
      className={className}
      role="img"
      aria-label="SenseiReview"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="36" height="36" rx="4" fill={box} />
      <text x="14.5" y="31" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="900" fontSize="37" fill={boxText}>
        S
      </text>
      <circle cx="29" cy="27.5" r="4.8" fill={red} stroke={box} strokeWidth="0.8" />
      {showWordmark && (
        <text x="46" y="26" fontFamily="Newsreader, Georgia, serif" fontWeight="500" fontSize="23" letterSpacing="-0.02em">
          <tspan fill={ink}>Sensei</tspan>
          <tspan fill={red}>Review</tspan>
        </text>
      )}
    </svg>
  );
}
