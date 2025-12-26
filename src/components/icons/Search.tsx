import React from "react";

type IconProps = {
  size?: number;
  className?: string;
  stroke?: string;
  fill?: string;
};

export const SearchIcon: React.FC<IconProps> = ({
  size = 20,
  className = "icon h-5 w-5",
  stroke = "#fff",
  fill = "#fff",
}) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g id="style=linear">
        {" "}
        <g id="search-broken">
          {" "}
          <path
            id="vector"
            d="M18.5 18.5L21 21"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <circle
            id="vector_2"
            cx="11.0529"
            cy="11.0529"
            r="8.3029"
            stroke="#fff"
            strokeWidth="1.5"
          ></circle>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);
