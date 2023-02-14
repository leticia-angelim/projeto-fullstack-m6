import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserRequest } from "../../interfaces/user.interfaces";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUserService(user);

  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
