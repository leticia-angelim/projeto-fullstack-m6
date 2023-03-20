import { DataSource, Repository } from "typeorm";
import request from "supertest";
import AppDataSource from "../../../data-source";
import app from "../../../app";
import { User } from "../../../entities/user.entity";
import { createLoginServiceMock, createUserServiceMock } from "../../mocks";
import tokensMock from "../../mocks/login/tokens.mock";
import errorsMock from "../../mocks/errors.mock";

describe("Integration test: GET - /users/profile", () => {
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

  it("Sucess: Must be able list user profile", async () => {
    const authorization = await request(app)
      .post("/login")
      .send(createLoginServiceMock.valid);

    const response = await request(app)
      .get("/users/profile")
      .set("Authorization", `Bearer ${authorization.body.token}`)
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.not.objectContaining({ password: expect.any(String) })
    );
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("birth_date");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("account");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).not.toHaveProperty("password");

    expect(response.body.name).toEqual("Thiago");
    expect(response.body.account).toEqual("Anunciante");
    expect(response.body.birth_date).toEqual("29/05/1996");
  });

  it("Error: Must not be able list user profile: Missing token", async () => {
    const response = await request(app).get("/users/profile");

    expect(response.status).toBe(errorsMock.missingBearer.status);
    expect(response.body).toStrictEqual(errorsMock.missingBearer.error);
  });

  it("Error: must not be able list user profile: Invalid signature", async () => {
    const response = await request(app)
      .get("/users/profile")
      .set("Authorization", `Bearer ${tokensMock.invalidSignature}`)
      .send();

    expect(response.status).toBe(errorsMock.invalidSignature.status);
    expect(response.body).toStrictEqual(errorsMock.invalidSignature.error);
  });

  it("Error: must not be able list user profile: Jwt malformed", async () => {
    const response = await request(app)
      .get("/users/profile")
      .set("Authorization", `Bearer ${tokensMock.jwtMalformed}`)
      .send();

    expect(response.status).toBe(errorsMock.jwtMalformed.status);
    expect(response.body).toStrictEqual(errorsMock.jwtMalformed.error);
  });
});
