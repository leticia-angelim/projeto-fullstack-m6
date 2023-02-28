import { Request, Response } from "express";
import createCommentService from "../../services/comments/postCommentServices";
import { IComentsRequest } from "../../interfaces/comments.interface";


const createCommentController = async (req: Request, res: Response) => {
    const { id } = req.user;
    const data: IComentsRequest = req.body;
  
    const comment = await createCommentService(data);
  
    return res.status(201).json((comment));
  };
  
  export default createCommentController;
  