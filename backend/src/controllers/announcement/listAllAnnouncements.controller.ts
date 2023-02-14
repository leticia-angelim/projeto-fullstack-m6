import { Request, Response } from "express";
import listAllAnnouncementsService from "../../services/announcement/listAllAnnouncements.service";

const listAllAnnouncementsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const annoucement = await listAllAnnouncementsService(id);

  return res.status(200).json(annoucement);
};

export default listAllAnnouncementsController;
