import { Router } from "express";

import ensureEmailAlreadyExistMiddleware from "../middlewares/ensureEmailAlreadyExist.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

import createUserController from "../controllers/user/createUser.controller";
import retrieveUserController from "../controllers/user/retrieveUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";

const userRoutes = Router();

userRoutes.post("", ensureEmailAlreadyExistMiddleware, createUserController);
userRoutes.get("", ensureAuthMiddleware, retrieveUserController);
userRoutes.patch("", ensureAuthMiddleware, updateUserController);

export default userRoutes;
