import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Photo } from "../../entities/photo.entity";
import { AppError } from "../../errors/appError";
import { IAnnouncementUpdate } from "../../interfaces/announcement.interfaces";

const updateAnnouncementService = async (
  id: string,
  annoucement: IAnnouncementUpdate
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const vehicleImagesRepository = AppDataSource.getRepository(Photo);
  const findAnnouncement = await announcementRepository.findOneBy({ id });

  if (!findAnnouncement) {
    throw new AppError("Announcement id not found or not exists", 404);
  }

  const { photos, ...vehicleData } = annoucement;

  await announcementRepository.update(findAnnouncement.id, vehicleData);

  if (photos) {
    await vehicleImagesRepository.delete({
      announcement: { id: findAnnouncement.id },
    });

    photos.map(async (url) => {
      const photo = vehicleImagesRepository.create({
        url,
        announcement: findAnnouncement,
      });

      await vehicleImagesRepository.save(photo);
    });
  }

  const updatedAnnouncement = await announcementRepository.findOneBy({ id });

  return updatedAnnouncement!;
};

export default updateAnnouncementService;
