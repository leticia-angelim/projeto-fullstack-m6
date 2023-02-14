import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import loginService from "../../services/user/login.service";
import { IUserLogin } from "../../interfaces/user.interfaces";

const loginController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await loginService(data);

  return res.status(200).json(instanceToPlain({ token }));
};

export default loginController;
