import styled from "styled-components";
import { IButtonBaseProps } from "../../interfaces/button";

export const Button = styled.button<IButtonBaseProps>`
  width: 119px;
  height: 38px;

  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.fontColor || "#ffffff"};

  border-radius: 4px;
  background: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.border || props.backgroundColor};

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    border: 1px solid
      ${(props) => props.borderHover || props.backgroundColorHover};
    color: ${(props) => props.fontColorHover || props.fontColor};
  }
`;
