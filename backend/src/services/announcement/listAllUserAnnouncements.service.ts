import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/user.interfaces";

const listAllUserAnnouncementsService = async (id: string): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id },
    relations: { announcements: true },
  });

  if (!findUser) {
    throw new AppError("User not found or not exists", 404);
  }

  if (findUser.account !== "Anunciante") {
    throw new AppError("User is not an Advertiser", 400);
  }

  return findUser;
};

export default listAllUserAnnouncementsService;
