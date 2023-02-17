import React from "react";
import { Button } from "./styles";
import { IButtonBaseProps } from "../../interfaces/button";

const ButtonBase = ({
  children,
  backgroundColor,
  border,
  fontColor,
  backgroundColorHover,
  borderHover,
  fontColorHover,
}: IButtonBaseProps) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      border={border}
      fontColor={fontColor}
      backgroundColorHover={backgroundColorHover}
      borderHover={borderHover}
      fontColorHover={fontColorHover}
    >
      {children}
    </Button>
  );
};

export default ButtonBase;
