import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export function CopyIcon({
  size = 16,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      style={{ transform: "scaleX(-1)" }}
      aria-hidden
    >
      <path fill="none" d="M0 0h48v48H0z" />
      <path d="M14 8h16V4H6v32h8z" />
      <path d="M42 44H18V12h24v32z" />
    </svg>
  );
}