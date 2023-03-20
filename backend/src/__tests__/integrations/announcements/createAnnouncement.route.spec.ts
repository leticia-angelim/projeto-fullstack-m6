import { DataSource, Repository } from "typeorm";
import request from "supertest";
import AppDataSource from "../../../data-source";
import app from "../../../app";
import { User } from "../../../entities/user.entity";
import {
  createAnnouncementServiceMock,
  createLoginServiceMock,
} from "../../mocks";
import tokensMock from "../../mocks/login/tokens.mock";
import errorsMock from "../../mocks/errors.mock";

describe("Integration test: POST- /announcement", () => {
  let connection: DataSource;
  let userRepo: Repository<User>;

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

  // it("Sucess: Must be able to create an announcement", async () => {
  //   const authorization = await request(app)
  //     .post("/login")
  //     .send(createLoginServiceMock.valid);

  //   const response = await request(app)
  //     .post("/announcement")
  //     .set("Authorization", `Bearer ${authorization.body.token}`)
  //     .send(createAnnouncementServiceMock.announcementComplete);

  //   expect(response.status).toBe(201);
  //   expect(response.body).toEqual(
  //     expect.objectContaining({
  //       ...createAnnouncementServiceMock.announcementFull,
  //       id: expect.any(String),
  //       createdAt: expect.any(String),
  //       updatedAt: expect.any(String),
  //       is_published: true,
  //     })
  //   );
  //   expect(response.body.user).not.toEqual(
  //     expect.objectContaining({ password: expect.any(String) })
  //   );
  // });

  it("Error: Must not be able to create Announcement: Missing token", async () => {
    const response = await request(app).post("/announcement");

    expect(response.status).toBe(errorsMock.missingBearer.status);
    expect(response.body).toStrictEqual(errorsMock.missingBearer.error);
  });

  it("Error: must not be able to create Announcement: Invalid signature", async () => {
    const response = await request(app)
      .post("/announcement")
      .set("Authorization", `Bearer ${tokensMock.invalidSignature}`)
      .send();

    expect(response.status).toBe(errorsMock.invalidSignature.status);
    expect(response.body).toStrictEqual(errorsMock.invalidSignature.error);
  });

  it("Error: must not be able to create Announcement: Jwt malformed", async () => {
    const response = await request(app)
      .post("/announcement")
      .set("Authorization", `Bearer ${tokensMock.jwtMalformed}`)
      .send();

    expect(response.status).toBe(errorsMock.jwtMalformed.status);
    expect(response.body).toStrictEqual(errorsMock.jwtMalformed.error);
  });
});
