import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const listCommentService = async (id: string): Promise<Comment[]> => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.find({
    relations: { announcement: { user: true } },
  });

  if (!findComment) {
    throw new AppError("comment not found", 404);
  }

  return findComment;
};

export default listCommentService;
