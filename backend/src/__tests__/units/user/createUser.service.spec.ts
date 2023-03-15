import { DataSource, Repository } from "typeorm";
import AppDataSource from "../../../data-source";
import { User } from "../../../entities/user.entity";
import createUserService from "../../../services/user/createUser.service";
import { createAddressMock, createUserServiceMock } from "../../mocks";

describe("Unit test: createUserService functionalities", () => {
  let userRepo: Repository<User>;
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
        userRepo = res.getRepository(User);
      })
      .catch((err) => console.error(err));
  });

  beforeEach(async () => {
    await userRepo.remove(await userRepo.find());
  });

  afterAll(async () => await connection.destroy());

  it("Should be able to create a user - Valid payload", async () => {
    const user = createUserServiceMock.valid;
    const address = createAddressMock.valid;

    const result = await createUserService(user, address);

    const expectedResult = {
      id: expect.any(String),
      name: "Thiago",
      email: "thiago@email.com",
      cpf: "12312312300",
      phone: "2740028422",
      birth_date: "29/05/1996",
      description: "Descrição qualquer",
      account: "Anunciante",
      address: {
        id: expect.any(String),
        cep: "29101400",
        state: "ES",
        city: "Vila Velha",
        street: "Rua qualquer",
        number: "100",
        complement: "apt.101",
      },
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    };

    expect(result).toStrictEqual(expectedResult);
    expect(result).not.toEqual(
      expect.objectContaining({ password: expect.anything() })
    );
  });
});
