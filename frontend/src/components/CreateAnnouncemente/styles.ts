import styled from "styled-components";

export const FormAnnouncement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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

  span {
    color: red;
  }

  .input-errors {
    display: flex;
    flex-direction: column;
  }
`;

export const DescriptionField = styled.div`
  input {
    text-align: start;
    height: 100px;
  }
`;

export const SubTitle = styled.h4`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
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
  padding-right: 10rem;

  button {
    width: 100%;
  }

  @media (max-width: 426px) {
    width: 100%;
    padding-right: 0%;

    button {
      width: 100%;
      font-size: 12px;
    }
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
