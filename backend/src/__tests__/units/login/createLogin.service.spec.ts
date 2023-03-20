import { decode, JwtPayload } from "jsonwebtoken";
import { DataSource, Repository } from "typeorm";
import AppDataSource from "../../../data-source";
import { User } from "../../../entities/user.entity";
import { AppError } from "../../../errors/appError";
import loginService from "../../../services/login/login.service";
import createLoginServiceMock from "../../mocks/login/createLogin.service.mock";

describe("Unit test: createUserService functionalities", () => {
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
  });

  beforeEach(async () => {
    await userRepo.remove(await userRepo.find());
  });

  afterAll(async () => await connection.destroy());

  it("Should be able to create a token - Valid payload", async () => {
    const { base, valid } = createLoginServiceMock;
    const { id, email } = await userRepo.save({ ...base });

    const result = await loginService(valid);
    expect(result).toStrictEqual(expect.any(String));

    const decodedToken = decode(result) as JwtPayload;
    expect(decodedToken).toStrictEqual(
      expect.objectContaining({
        sub: id.toString(),
        email,
        exp: expect.any(Number),
        iat: expect.any(Number),
      })
    );
  });

  it("Should not be able to create a token - Invalid email", async () => {
    const { base, invalidEmail } = createLoginServiceMock;
    await userRepo.save({ ...base });

    const result = loginService(invalidEmail);
    await expect(result).rejects.toThrowError(AppError);
    await expect(result).rejects.toThrow("Invalid email or password");
  });

  it("Should not be able to create a token - Invalid password", async () => {
    const { base, invalidPassword } = createLoginServiceMock;
    await userRepo.save({ ...base });

    const result = loginService(invalidPassword);
    await expect(result).rejects.toThrowError(AppError);
    await expect(result).rejects.toThrow("Invalid email or password");
  });
});
