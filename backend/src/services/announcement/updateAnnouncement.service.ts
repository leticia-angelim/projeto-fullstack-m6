import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Photo } from "../../entities/photo.entity";
import { AppError } from "../../errors/appError";
import { IAnnouncementUpdate } from "../../interfaces/announcement.interfaces";

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
    photos,
  }: IAnnouncementUpdate
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const vehicleImagesRepository = AppDataSource.getRepository(Photo);
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
  });

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
