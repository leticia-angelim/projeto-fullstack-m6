import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;
