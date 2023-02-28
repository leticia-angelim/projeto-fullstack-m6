import React from "react";
import { InputContainer } from "./styles";
import { IInputProps } from "../../interfaces/input";

const Input = ({
  type,
  label,
  fieldName,
  // placeholder,
  register,
  name,
  onChange,
}: IInputProps) => {
  return (
    <InputContainer>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        type={type}
        // placeholder={placeholder}
        {...register(name)}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
