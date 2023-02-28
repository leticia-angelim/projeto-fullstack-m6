import { Router } from "express";
import createCommentController from "../controllers/comment/createCommentControle";

const commentRoutes = Router()

commentRoutes.post('',createCommentController)

export default commentRoutes