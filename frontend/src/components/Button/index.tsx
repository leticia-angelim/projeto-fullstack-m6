import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonBaseProps } from "../../interfaces/button";

const Button = ({
  children,
  backgroundColor,
  border,
  fontColor,
  backgroundColorHover,
  borderHover,
  fontColorHover,
  onClick,
}: IButtonBaseProps) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      border={border}
      backgroundColorHover={backgroundColorHover}
      borderHover={borderHover}
      fontColor={fontColor}
      fontColorHover={fontColorHover}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
