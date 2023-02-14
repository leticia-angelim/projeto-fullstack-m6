import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/annoucement.entity";
import { IAnnouncement } from "../../interfaces/announcement.interfaces";

const listAllAnnouncementsService = async (
  id: string
): Promise<IAnnouncement[]> => {
  const annoucementRepository = AppDataSource.getRepository(Announcement);

  const annoucements = await annoucementRepository.find({
    relations: { user: true },
  });

  return annoucements;
};

export default listAllAnnouncementsService;
