import { IComentsRequest } from "../../interfaces/comments.interface";
import AppDataSource from "../../data-source";
import { Comments } from "../../entities/Comments";

const createCommentService = async (comment: IComentsRequest): Promise<IComentsRequest> => {
    const CommentRepository = AppDataSource.getRepository(Comments);
  
    const newComment: IComentsRequest = CommentRepository.create(comment);
  
  
    await CommentRepository.save(newComment);
  
    return newComment;
  };

export default createCommentService