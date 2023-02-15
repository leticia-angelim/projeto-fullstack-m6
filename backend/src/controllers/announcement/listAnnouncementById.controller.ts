import { Request, Response } from "express";
import listAnnouncementByIdService from "../../services/announcement/listAnnouncementById.service";

const listAnnouncementByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await listAnnouncementByIdService(id);

  return res.status(201).send();
};

export default listAnnouncementByIdController;
