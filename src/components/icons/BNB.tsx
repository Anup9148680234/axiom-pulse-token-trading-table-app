import React from "react";

type IconProps = {

  className?: string;
    width?: string;
    height?: string;
};

export const BNBIcon: React.FC<IconProps> = ({

  className = "icon",
  width= "40px",
  height = "40px",
}) => (
  <img
    src="https://dd.dexscreener.com/ds-data/chains/opbnb.png"
    alt=""
    className={className}
    height={height}
    width={width}
  />
);
