import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { IAnnouncement } from "../../interfaces/announcement.interfaces";

const listAllAnnouncementsService = async (): Promise<IAnnouncement[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcements = await announcementRepository.find({
    relations: { user: true },
  });

  return announcements;
};

export default listAllAnnouncementsService;
