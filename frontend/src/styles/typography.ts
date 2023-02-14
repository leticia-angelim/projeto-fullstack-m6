import styled, { css } from "styled-components";
import { BaseTitle } from "../components/BaseTitle";

interface IThemeTitleProps {
  titleSize: string;
}

export const ThemeTitle = styled(BaseTitle)<IThemeTitleProps>`
  ${(props) => {
    switch (props.titleSize) {
      case "Heading-1-700":
        return css`
          font-weight: 700;
          font-size: 44px;
        `;
      case "Heading-2-600":
        return css`
          font-weight: 600;
          font-size: 36px;
        `;
      case "Heading-3-600":
        return css`
          font-weight: 600;
          font-size: 32px;
        `;
      case "Heading-3-500":
        return css`
          font-weight: 500;
          font-size: 32px;
        `;
      case "Heading-4-600":
        return css`
          font-weight: 600;
          font-size: 28px;
        `;
      case "Heading-4-500":
        return css`
          font-weight: 500;
          font-size: 28px;
        `;
      case "Heading-5-600":
        return css`
          font-weight: 600;
          font-size: 24px;
        `;
      case "Heading-5-500":
        return css`
          font-weight: 500;
          font-size: 24px;
        `;

      case "Heading-6-600":
        return css`
          font-weight: 600;
          font-size: 20px;
        `;
      case "Heading-6-500":
        return css`
          font-weight: 500;
          font-size: 20px;
        `;
      case "Heading-7-600":
        return css`
          font-weight: 600;
          font-size: 16px;
        `;
      case "Heading-7-500":
        return css`
          font-weight: 500;
          font-size: 16px;
        `;

      default:
        return false;
    }
  }}
`;
