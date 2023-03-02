import { Router } from "express";
import loginController from "../controllers/login/login.controller";
import forgotPasswordController from "../controllers/login/forgotPassword.controller";

const loginRoutes = Router();

loginRoutes.post("", loginController);
loginRoutes.post("/forgot-password", forgotPasswordController);

export default loginRoutes;
