import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.5rem;

    height: 581px;
    background: var(--color-brand2);

    .box {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      max-width: 748px;
      width: 100%;

      h2 {
        font-family: "Lexend";
        font-style: normal;
        font-size: 2.5rem;
        text-align: center;
        color: var(--color-grey10);
      }

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: var(--color-grey9);
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 21px;

  width: 381.04px;
  height: 48px;

  button {
    width: 100%;
  }

  @media (max-width: 413px) {
    flex-direction: column;
    width: 351px;
    height: 117px;

    button {
      height: 48px;
    }
  }
`;
