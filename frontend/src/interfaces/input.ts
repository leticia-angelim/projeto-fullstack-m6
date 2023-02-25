import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputProps {
  type: string;
  label: string;
  fieldName: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  onChange?: any;
}
