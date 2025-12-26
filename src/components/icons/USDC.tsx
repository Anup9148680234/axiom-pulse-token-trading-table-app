import React from "react";

type IconProps = {

  className?: string;
    width?: string;
    height?: string;
};

export const USDCIcon: React.FC<IconProps> = ({

  className = "icon",
  width= "40px",
  height = "40px",
}) => (
  <img
    src="https://axiom.trade/images/usdc-perps.svg"
    alt=""
    className={className}
    height={height}
    width={width}
  />
);
