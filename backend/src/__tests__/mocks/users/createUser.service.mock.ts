import createAddressMock from "../address/createAddress.mock";

export default {
  valid: {
    name: "Thiago",
    email: "thiago@mail.com",
    cpf: "12312312300",
    phone: "2740028422",
    birth_date: "29/05/1996",
    description: "Descrição qualquer",
    account: "Anunciante",
    password: "1234",
    address: {
      id: expect.any(String),
      cep: "29101400",
      state: "ES",
      city: "Vila Velha",
      street: "Rua qualquer",
      number: 100,
      complement: "apt.101",
    },
  },
  unique: {
    name: "Teco",
    email: "teco@mail.com",
    cpf: "12312312301",
    phone: "2740028420",
    birth_date: "29/05/1999",
    description: "Descrição qualquer",
    account: "Anunciante",
    password: "1234",
    address: createAddressMock.unique,
  },
  userComplete: {
    name: "Thiago",
    email: "thiago@mail.com",
    cpf: "12312312300",
    phone: "2740028422",
    birth_date: "29/05/1996",
    description: "Descrição qualquer",
    account: "Anunciante",
    password: "1234",
    address: {
      id: "8d6fd4ec-8475-46fe-921b-046738014add",
      cep: "29101400",
      state: "ES",
      city: "Vila Velha",
      street: "Rua qualquer",
      number: 100,
      complement: "apt.101",
    },
  },
  userIncomplete: {
    name: "Thiago",
    email: "thiago@mail.com",
    phone: "2740028422",
    birth_date: "29/05/1996",
    description: "Descrição qualquer",
    account: "Anunciante",
    password: "1234",
    address: {
      id: "8d6fd4ec-8475-46fe-921b-046738014add",
      cep: "29101400",
      state: "ES",
      city: "Vila Velha",
      street: "Rua qualquer",
      number: 100,
      complement: "apt.101",
    },
  },
  userUpdated: {
    name: "Thiago Araujo",
    email: "thiago_araujo@mail.com",
  },
};
