import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/user.interfaces";

const updateUserService = async (
  id: string,
  user: IUserRequest
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    name: user.name ? user.name : findUser.name,
    email: user.email ? user.email : findUser.email,
    cpf: user.cpf ? user.cpf : findUser.cpf,
    phone: user.phone ? user.phone : findUser.phone,
    birth_date: user.birth_date ? user.birth_date : findUser.birth_date,
    description: user.description ? user.description : findUser.description,
    cep: user.cep ? user.cep : findUser.cep,
    state: user.state ? user.state : findUser.state,
    city: user.city ? user.city : findUser.city,
    street: user.street ? user.street : findUser.street,
    number: user.number ? user.number : findUser.number,
    complement: user.complement ? user.complement : findUser.complement,
    account: user.account ? user.account : findUser.account,
    password: user.password ? await hash(user.password, 10) : findUser.password,
  });

  const updatedUser = await userRepository.findOneBy({
    id,
  });

  return updatedUser!;
};

export default updateUserService;
