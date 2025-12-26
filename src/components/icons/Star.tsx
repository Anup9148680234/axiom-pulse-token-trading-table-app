import React from "react";

type IconProps = {
  size?: number;
  className?: string;
  stroke?: string;
  fill?: string;
};

export const StarIcon: React.FC<IconProps> = ({
  size = 20,
  className = "icon w-6 h-6",
  stroke = "#fff",
  fill = "#fff",
}) => (
  <svg
    fill="#fff"
    viewBox="0 0 64 64"
    className={className}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    // turn the style string into an object
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 1,
    }}
    stroke="#fff"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <rect
        id="Icons"
        x="-448"
        y="-192"
        width="1280"
        height="800"
        fill="none"
      />
      <g id="Icons1">
        <path
          id="star-empty"
          d="M37.675,26.643l18.335,0l-14.834,10.777l5.666,17.438l-14.833,-10.777l-14.834,10.777l5.666,-17.438l-14.833,-10.777l18.335,0l5.666,-17.438c1.888,5.813 3.777,11.625 5.666,17.438Zm-8.407,4.026l-8.869,0l7.175,5.213l-2.74,8.435l7.175,-5.213l7.175,5.213l-2.741,-8.435l7.175,-5.213l-8.869,0l-2.74,-8.434c-0.914,2.811 -1.827,5.623 -2.741,8.434Z"
          style={{ fillRule: "nonzero" }}
        />
      </g>
    </g>
  </svg>
);
