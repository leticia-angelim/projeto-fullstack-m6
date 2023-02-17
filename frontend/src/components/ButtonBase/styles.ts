import styled from "styled-components";
import { IButtonBaseProps } from "../../interfaces/button";

export const Button = styled.button<IButtonBaseProps>`
  width: 119px;
  height: 38px;

  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.fontColor || "#ffffff"};

  border-radius: 4px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.border || props.color};

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    border: 1px solid ${(props) => props.borderHover || props.hoverColor};
    color: ${(props) => props.fontColorHover || props.fontColor};
  }
`;
