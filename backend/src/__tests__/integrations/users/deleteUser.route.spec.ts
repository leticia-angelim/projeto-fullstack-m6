import { DataSource, Repository } from "typeorm";
import request from "supertest";
import AppDataSource from "../../../data-source";
import app from "../../../app";
import { User } from "../../../entities/user.entity";
import { createLoginServiceMock, createUserServiceMock } from "../../mocks";
import tokensMock from "../../mocks/login/tokens.mock";
import errorsMock from "../../mocks/errors.mock";

describe("Integration test: DELETE - /users", () => {
  let userRepo: Repository<User>;
  let connection: DataSource;

  beforeAll(async () => {
    process.env.SECRET_KEY = createLoginServiceMock.secretKey;
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
        userRepo = res.getRepository(User);
      })
      .catch((err) => console.error(err));
    await userRepo.save(createLoginServiceMock.base);
  });

  afterAll(async () => await connection.destroy());

  it("Sucess: Must be able to delete user", async () => {
    const authorization = await request(app)
      .post("/login")
      .send(createLoginServiceMock.valid);

    const response = await request(app)
      .delete("/users")
      .set("Authorization", `Bearer ${authorization.body.token}`)
      .send();

    expect(response.status).toBe(204);
    expect(response.body).toStrictEqual({});
  });

  it("Error: Must not be able to delete user: Missing token", async () => {
    const response = await request(app).patch("/users");

    expect(response.status).toBe(errorsMock.missingBearer.status);
    expect(response.body).toStrictEqual(errorsMock.missingBearer.error);
  });

  it("Error: must not be able to delete user: Invalid signature", async () => {
    const response = await request(app)
      .patch("/users")
      .set("Authorization", `Bearer ${tokensMock.invalidSignature}`)
      .send();

    expect(response.status).toBe(errorsMock.invalidSignature.status);
    expect(response.body).toStrictEqual(errorsMock.invalidSignature.error);
  });

  it("Error: must not be able to delete user: Jwt malformed", async () => {
    const response = await request(app)
      .patch("/users")
      .set("Authorization", `Bearer ${tokensMock.jwtMalformed}`)
      .send();

    expect(response.status).toBe(errorsMock.jwtMalformed.status);
    expect(response.body).toStrictEqual(errorsMock.jwtMalformed.error);
  });
});
