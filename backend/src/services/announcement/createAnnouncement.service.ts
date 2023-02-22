import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Photo } from "../../entities/photo.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IAnnouncementRequest } from "../../interfaces/announcement.interfaces";

const createAnnouncementService = async (
  id: string,
  data: IAnnouncementRequest
): Promise<Announcement> => {
  const userRepository = AppDataSource.getRepository(User);
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const photoRepository = AppDataSource.getRepository(Photo);

  const userExists = await userRepository.findOneBy({ id });

  if (!userExists) {
    throw new AppError("User id not found or not exists", 404);
  }
  const { photos, ...announcementData } = data;

  const newAnnouncement = announcementRepository.create({
    ...announcementData,
    user: userExists,
  });

  await announcementRepository.save(newAnnouncement);

  if (photos.length < 1) {
    throw new AppError("You need to add at least 1 photo", 403);
  }

  if (photos.length >= 6) {
    throw new AppError("You can add only 6 photos", 403);
  }

  photos.map(async (photo) => {
    const newPhoto = photoRepository.create({
      url: photo,
      announcement: newAnnouncement,
    });

    await photoRepository.save(newPhoto);
  });

  return newAnnouncement;
};

export default createAnnouncementService;
