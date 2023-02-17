import React from "react";
import { Button } from "./styles";
import { IButtonBaseProps } from "../../interfaces/button";

const ButtonBase = ({
  children,
  color,
  border,
  fontColor,
  hoverColor,
  borderHover,
  fontColorHover,
}: IButtonBaseProps) => {
  return (
    <Button
      color={color}
      border={border}
      fontColor={fontColor}
      hoverColor={hoverColor}
      borderHover={borderHover}
      fontColorHover={fontColorHover}
    >
      {children}
    </Button>
  );
};

export default ButtonBase;
