import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import {
  IAnnouncement,
  IAnnouncementRequest,
} from "../../interfaces/announcement.interfaces";

const createAnnouncementService = async (
  id: string,
  {
    announcement_type,
    title,
    year,
    mileage,
    price,
    description,
    vehicle_type,
    cover_img,
    gallery_img,
  }: IAnnouncementRequest
): Promise<IAnnouncement> => {
  const userRepository = AppDataSource.getRepository(User);
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const userExists = await userRepository.findOneBy({ id });

  if (!userExists) {
    throw new AppError("User id not found or not exists", 404);
  }

  const announcement = announcementRepository.create({
    announcement_type,
    title,
    year,
    mileage,
    price,
    description,
    vehicle_type,
    cover_img,
    gallery_img,
    user: userExists,
  });

  await announcementRepository.save(announcement);

  return announcement;
};

export default createAnnouncementService;
