import React from "react";
import { InputContainer } from "./styles";
import { IInputProps } from "../../interfaces/input";

const Input = ({ type, label, fieldName, placeholder }: IInputProps) => {
  return (
    <InputContainer>
      <label htmlFor={fieldName}>{label}</label>
      <input id={fieldName} type={type} placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;
