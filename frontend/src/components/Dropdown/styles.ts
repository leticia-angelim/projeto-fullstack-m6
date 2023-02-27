import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    gap: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--color-grey2);
  }

  div {
    width: 32px;
    height: 32px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 0px;
    color: var(--color-whiteFixed);
  }
`;
