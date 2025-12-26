import React from "react";

type IconProps = {
  size?: number;
  className?: string;
  stroke?: string;
  fill?: string;
};

export const BoxesIcon: React.FC<IconProps> = ({
  size = 20,
  className = "icon h-3 w-3",
  stroke = "#fff",
  fill = "#fff",
}) => (
  <svg viewBox="20 20 160 160" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill='none' stroke={stroke} stroke-width="8" stroke-linejoin="round">
      <polygon points="100,30 140,50 100,70 60,50" />
      <polygon points="60,50 60,90 100,110 100,70" />
      <polygon points="140,50 140,90 100,110 100,70" />

      <polygon points="60,90 100,110 60,130 20,110" />
      <polygon points="20,110 20,150 60,170 60,130" />
      <polygon points="100,110 100,150 60,170 60,130" />

      <polygon points="140,90 180,110 140,130 100,110" />
      <polygon points="100,110 100,150 140,170 140,130" />
      <polygon points="180,110 180,150 140,170 140,130" />
    </g>
  </svg>
);
