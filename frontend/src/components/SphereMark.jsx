import React from "react";

// -- Signature mark: concentric sphere/orbit logo --------------------------
export function SphereMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" fill="#0B5FA5" />
      <circle cx="50" cy="50" r="46" fill="url(#es-grad)" />
      <defs>
        <linearGradient id="es-grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#1483C9" />
          <stop offset="100%" stopColor="#0B5FA5" />
        </linearGradient>
      </defs>
      <g className="es-orbit-outer">
        <ellipse cx="50" cy="50" rx="44" ry="18" stroke="#BFE3F5" strokeWidth="2.2" opacity="0.85" />
      </g>
      <g className="es-orbit-inner">
        <ellipse cx="50" cy="50" rx="18" ry="44" stroke="#17B890" strokeWidth="2.2" opacity="0.9" />
      </g>
      <circle cx="50" cy="50" r="9" fill="#FFFFFF" />
    </svg>
  );
}
