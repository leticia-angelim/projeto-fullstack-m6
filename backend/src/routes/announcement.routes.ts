import { Router } from "express";
import createAnnouncementController from "../controllers/announcement/createAnnouncement.controllers";
import listAllAnnouncementsController from "../controllers/announcement/listAllAnnouncements.controller";

const announcementRoutes = Router();

announcementRoutes.post("", createAnnouncementController);
announcementRoutes.get("", listAllAnnouncementsController);

export default announcementRoutes;
