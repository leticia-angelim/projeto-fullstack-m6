import { Request, Response } from "express";
import forgotPasswordService from "../../services/login/forgotPassword.service";

const forgotPasswordController = async (req: Request, res: Response) => {
  const { email } = req.body;
  await forgotPasswordService(email);

  return res.status(200).send();
};

export default forgotPasswordController;
