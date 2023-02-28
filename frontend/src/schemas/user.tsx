import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  cpf: yup.string().required("Campo obrigatório"),
  // .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido"),
  phone: yup.string().required("Campo obrigatório"),
  birth_date: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  cep: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup
    .number()
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
  account: yup.string(),
  password: yup.string().required("Campo obrigatório"),
  confirm_password: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const loginSchema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});
