import createAddressMock from "../address/createAddress.mock";

export default {
  valid: {
    name: "Thiago",
    email: "thiago@email.com",
    cpf: "12312312300",
    phone: "2740028422",
    birth_date: "29/05/1996",
    description: "Descrição qualquer",
    account: "Anunciante",
    password: "1234",
    address: createAddressMock.valid,
  },
  unique: {
    name: "Teco",
    email: "teco@email.com",
    cpf: "12312312301",
    phone: "2740028420",
    birth_date: "29/05/1999",
    description: "Descrição qualquer",
    account: "Anunciante",
    password: "1234",
    address: createAddressMock.unique,
  },
};
