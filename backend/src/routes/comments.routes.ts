import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import deleteCommentController from "../controllers/comments/deleteComment.controller";
import listCommentController from "../controllers/comments/listComment.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const commentsRoutes = Router();

commentsRoutes.post("/:id", ensureAuthMiddleware, createCommentController);
commentsRoutes.get("/:id", ensureAuthMiddleware, listCommentController);
commentsRoutes.delete("/:id", ensureAuthMiddleware, deleteCommentController);

export default commentsRoutes;
