export default {
  announcementComplete: {
    announcement_type: "Venda",
    title: "Ferrari Speciale",
    year: "2023",
    mileage: 0,
    price: 5000000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    vehicle_type: "Carro",
    cover_img:
      "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
  },
  announcementFull: {
    announcement_type: "Venda",
    title: "Ferrari Speciale",
    year: "2023",
    mileage: 0,
    price: 5000000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    vehicle_type: "Carro",
    cover_img:
      "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
    user: {
      id: expect.any(String),
      account: "Anunciante",
      address: null,
      birth_date: "29/05/1996",
      cpf: "12312312300",
      description: "Descrição qualquer",
      email: "thiago@mail.com",
      name: "Thiago",
      phone: "2740028422",
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    },
  },
  announcementUpdated: {
    title: "Fusca",
    year: "1999",
    mileage: 435453,
    price: 20000,
  },
};
