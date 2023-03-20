import { DataSource, Repository } from "typeorm";
import request from "supertest";
import AppDataSource from "../../../data-source";
import app from "../../../app";
import { User } from "../../../entities/user.entity";
import {
  createAnnouncementServiceMock,
  createLoginServiceMock,
  createUserServiceMock,
} from "../../mocks";
import tokensMock from "../../mocks/login/tokens.mock";
import errorsMock from "../../mocks/errors.mock";

describe("Integration test: PATCH - /announcement", () => {
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

  //   it("Sucess: Must be able to update announcement", async () => {
  //     const authorization = await request(app)
  //       .post("/login")
  //       .send(createLoginServiceMock.valid);

  //     const newAnnouncement = await request(app)
  //       .post("/announcement")
  //       .set("Authorization", `Bearer ${authorization.body.token}`)
  //       .send(createAnnouncementServiceMock.announcementComplete);

  //     const response = await request(app)
  //       .patch(`/announcement/${newAnnouncement.body.id}`)
  //       .set("Authorization", `Bearer ${authorization.body.token}`)
  //       .send(createAnnouncementServiceMock.announcementUpdated);

  //     expect(response.status).toBe(201);
  //     expect(response.body).toEqual(
  //       expect.objectContaining({
  //         title: "Fusca",
  //         year: "1999",
  //         mileage: 435453,
  //         price: 20000,
  //       })
  //     );
  //   });

  it("Error: Must not be able to update announcement: Missing token", async () => {
    const response = await request(app).patch("/announcement/123");

    expect(response.status).toBe(errorsMock.missingBearer.status);
    expect(response.body).toStrictEqual(errorsMock.missingBearer.error);
  });

  it("Error: must not be able to update announcement: Invalid signature", async () => {
    const response = await request(app)
      .patch("/announcement/123")
      .set("Authorization", `Bearer ${tokensMock.invalidSignature}`)
      .send();

    expect(response.status).toBe(errorsMock.invalidSignature.status);
    expect(response.body).toStrictEqual(errorsMock.invalidSignature.error);
  });

  it("Error: must not be able to update announcement: Jwt malformed", async () => {
    const response = await request(app)
      .patch("/announcement/123")
      .set("Authorization", `Bearer ${tokensMock.jwtMalformed}`)
      .send();

    expect(response.status).toBe(errorsMock.jwtMalformed.status);
    expect(response.body).toStrictEqual(errorsMock.jwtMalformed.error);
  });
});
