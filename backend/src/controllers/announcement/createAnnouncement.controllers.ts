import { Request, Response } from "express";
import { IAnnouncement } from "../../interfaces/announcement.interfaces";
import createAnnouncementService from "../../services/announcement/createAnnouncement.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const data: IAnnouncement = req.body;

  const annoucement = await createAnnouncementService(id, data);

  return res.status(201).json(annoucement);
};

export default createAnnouncementController;
