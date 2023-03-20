import { hashSync } from "bcryptjs";

export default {
  secretKey: "secret_key",
  base: {
    name: "Thiago",
    email: "thiago@mail.com",
    cpf: "12312312300",
    phone: "2740028422",
    birth_date: "29/05/1996",
    description: "Descrição qualquer",
    account: "Anunciante",
    password: hashSync("1234"),
    address: {
      cep: "29101400",
      state: "ES",
      city: "Vila Velha",
      street: "Rua qualquer",
      number: 100,
      complement: "apt.101",
    },
  },
  valid: {
    email: "thiago@mail.com",
    password: "1234",
  },
  invalidEmail: {
    email: "fake@mail.com",
    password: "1234",
  },
  invalidPassword: {
    email: "thiago@mail.com",
    password: "fake pass",
  },
};
