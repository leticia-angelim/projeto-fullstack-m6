import { Router } from "express";
import createAnnouncementController from "../controllers/announcement/createAnnouncement.controllers";
import deleteAnnouncementController from "../controllers/announcement/deleteAnnouncement.controller";
import listAllAnnouncementsController from "../controllers/announcement/listAllAnnouncements.controller";
import listAnnouncementByIdController from "../controllers/announcement/listAnnouncementById.controller";
import updateAnnouncementController from "../controllers/announcement/updateAnnouncement.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const announcementRoutes = Router();

announcementRoutes.post("", ensureAuthMiddleware, createAnnouncementController);
announcementRoutes.get(
  "",
  ensureAuthMiddleware,
  listAllAnnouncementsController
);
announcementRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  listAnnouncementByIdController
);
announcementRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  updateAnnouncementController
);
announcementRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  deleteAnnouncementController
);

export default announcementRoutes;
