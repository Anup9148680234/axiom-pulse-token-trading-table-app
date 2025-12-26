import React from "react";

type IconProps = {
  size?: number;
  className?: string;
  stroke?: string;
  fill?: string;
};

export const DownIcon:  React.FC<IconProps>  = (
 { size = 20,
  className = "icon h-3 w-3",
  stroke = "#fff",
  fill = "#fff",
}) => (
  <svg
    viewBox="0 0 1024 1024"
    className={className}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    strokeWidth="100"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
        fill="#fff"
      ></path>
    </g>
  </svg>
);
