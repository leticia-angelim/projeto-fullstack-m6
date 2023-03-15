export default {
  valid: {
    id: expect.any(String),
    cep: "29101400",
    state: "ES",
    city: "Vila Velha",
    street: "Rua qualquer",
    number: 100,
    complement: "apt.101",
  },
  unique: {
    id: expect.any(String),
    cep: "29101401",
    state: "ES",
    city: "Vitória",
    street: "Rua qualquer",
    number: 1001,
    complement: "apt.1001",
  },
};
