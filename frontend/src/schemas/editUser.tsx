import * as yup from "yup";

export const editUserSchema = yup.object({
  // name: yup.string().required("Campo obrigratório"),
  // email: yup.string().required("Campo obrigratório").email("Email inválido"),
  // cpf: yup
  //   .string()
  //   .required("Campo obrigratório")
  //   .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido"),
  // phone: yup.string().required("Campo obrigratório"),
  birth_date: yup
    .string()
    .required("Campo obrigratório")
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
      "Data deve ser no formato DD/MM/YYYY"
    ),
  // description: yup.string().required("Campo obrigratório"),
});
