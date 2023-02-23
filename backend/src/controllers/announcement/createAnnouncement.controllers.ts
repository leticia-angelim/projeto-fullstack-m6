import { Request, Response } from "express";
import { IAnnouncement } from "../../interfaces/announcement.interfaces";
import { instanceToPlain } from "class-transformer";
import createAnnouncementService from "../../services/announcement/createAnnouncement.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: IAnnouncement = req.body;

  const annoucement = await createAnnouncementService(id, data);

  return res.status(201).json(instanceToPlain(annoucement));
};

export default createAnnouncementController;
