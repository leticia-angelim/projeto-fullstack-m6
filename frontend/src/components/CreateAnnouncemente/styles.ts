import styled from "styled-components";

export const CreateForm = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    width: 100%;
    gap: 15px;

    button {
      width: 50%;

      :focus {
        background-color: var(--color-brand1);
        color: var(--color-whiteFixed);
        border-color: var(--color-brand1);
      }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;

export const DescriptionField = styled.div`
  input {
    height: 100px;
  }
`;

export const AddImg = styled.div`
  div:first-child {
    margin-top: 1rem;
  }
  div + div {
    margin-top: 1rem;
  }
`;

export const ImgButton = styled.div`
  width: 100%;
  button {
    width: 70%;
  }
`;

export const FinalButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30%;
  .final-buttons {
    display: flex;
    width: 100%;
    gap: 20px;

    button:nth-child(1) {
      width: 40%;
    }

    button:nth-child(2) {
      width: 60%;
    }
  }
`;
