import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appError";
import {
  IAnnouncement,
  IAnnouncementUpdate,
} from "../../interfaces/announcement.interfaces";

const updateAnnouncementService = async (
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
  }: IAnnouncementUpdate
): Promise<IAnnouncement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.findOneBy({ id });

  if (!findAnnouncement) {
    throw new AppError("Announcement id not found or not exists", 404);
  }

  await announcementRepository.update(id, {
    announcement_type: announcement_type
      ? announcement_type
      : findAnnouncement.announcement_type,
    title: title ? title : findAnnouncement.title,
    year: year ? year : findAnnouncement.year,
    mileage: mileage ? mileage : findAnnouncement.mileage,
    price: price ? price : findAnnouncement.price,
    description: description ? description : findAnnouncement.description,
    vehicle_type: vehicle_type ? vehicle_type : findAnnouncement.vehicle_type,
    cover_img: cover_img ? cover_img : findAnnouncement.cover_img,
    gallery_img: gallery_img ? gallery_img : findAnnouncement.gallery_img,
  });

  const updatedAnnouncement = await announcementRepository.findOneBy({ id });

  return updatedAnnouncement!;
};

export default updateAnnouncementService;
