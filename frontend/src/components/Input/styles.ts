import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    font-size: 14px;
    color: #212529;
  }

  input {
    width: 315px;
    height: 48px;
    padding-left: 0.9rem;

    background: #f1f3f5;
    border: 1.5px solid #f1f3f5;
    border-radius: 4px;

    &:focus {
      border: 1.5px solid #5126ea;
    }
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #868e96;
  }
`;
