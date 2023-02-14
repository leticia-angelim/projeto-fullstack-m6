import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/user.interfaces";

const createUserService = async (user: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const newUser: IUser = userRepository.create(user);

  newUser.password = await hash(user.password, 10);

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
