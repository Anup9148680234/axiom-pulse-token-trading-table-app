import React from "react";

type IconProps = {

  className?: string;
    width?: string;
    height?: string;
};

export const SOLIcon: React.FC<IconProps> = ({

  className = "icon",
  width= "40px",
  height = "40px",
}) => (
  <img
    src="https://cdn.dexscreener.com/cms/images/e06bde6f35af4295de2c1b039f242b464012689ad6fc669ee977a9148b2eb936"
    alt=""
    className={className}
    height={height}
    width={width}
  />
);
