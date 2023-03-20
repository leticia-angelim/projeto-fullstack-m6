import { DataSource, Repository } from "typeorm";
import request from "supertest";
import AppDataSource from "../../../data-source";
import app from "../../../app";
import { User } from "../../../entities/user.entity";
import { createUserServiceMock } from "../../mocks";

describe("Integration test: POST- /users", () => {
  let connection: DataSource;
  let userRepo: Repository<User>;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
        userRepo = res.getRepository(User);
      })
      .catch((err) => console.error(err));
  });

  afterAll(async () => await connection.destroy());

  it("Sucess: Must be able to create a user ", async () => {
    const response = await request(app)
      .post("/users")
      .send(createUserServiceMock.userComplete);
    const { password, ...bodyEqual } = createUserServiceMock.userComplete;

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("birth_date");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("account");
    expect(response.body).toHaveProperty("address");
    expect(response.body.address).toHaveProperty("id");
    expect(response.body.address).toHaveProperty("cep");
    expect(response.body.address).toHaveProperty("state");
    expect(response.body.address).toHaveProperty("city");
    expect(response.body.address).toHaveProperty("street");
    expect(response.body.address).toHaveProperty("number");
    expect(response.body.address).toHaveProperty("complement");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).not.toHaveProperty("password");

    expect(response.body.name).toEqual("Thiago");
    expect(response.body.account).toEqual("Anunciante");
    expect(response.body.birth_date).toEqual("29/05/1996");
    expect(response.body.address.cep).toEqual("29101400");
    expect(response.body.address.number).toEqual(100);

    expect(response.body).not.toEqual(
      expect.objectContaining({ password: expect.any(String) })
    );
  });

  it("Error: Must not be able to create a user that already exists", async () => {
    const response = await request(app)
      .post("/users")
      .send(createUserServiceMock.userComplete);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });
});
