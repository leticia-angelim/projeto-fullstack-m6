import React, { createContext, useState } from "react";
import {
  CommentsProps,
  IComment,
  ICommentsContext,
} from "../../interfaces/comments";
import api from "../../services/api";

export const CommentsContext = createContext<ICommentsContext>(
  {} as ICommentsContext
);

export const CommentsProvider = ({ children }: CommentsProps) => {
  const [announcementComments, setAnnouncementComments] = useState<
    Array<IComment>
  >([]);

  const registerComment = async (announcement_id: string, data: IComment) => {
    await api
      .post<IComment>(`/comments/${announcement_id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQGdtYWlsLmNvbS5iciIsImlhdCI6MTY3Nzc2NDM1OCwiZXhwIjoxNjc3ODUwNzU4LCJzdWIiOiI1YzA2N2I5My04ZGEzLTRlYTEtOTNjNy1lZDE1OGMyNWIxMmUifQ.wsItNA8C9P40a5zWkjLHfZ7Q5hbzcD8p9SlE_YeB424`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listComments = async (announcement_id: string) => {
    await api
      .get<IComment[]>(`/comments/${announcement_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQGdtYWlsLmNvbS5iciIsImlhdCI6MTY3Nzc2NDM1OCwiZXhwIjoxNjc3ODUwNzU4LCJzdWIiOiI1YzA2N2I5My04ZGEzLTRlYTEtOTNjNy1lZDE1OGMyNWIxMmUifQ.wsItNA8C9P40a5zWkjLHfZ7Q5hbzcD8p9SlE_YeB424`,
        },
      })
      .then((res) => {
        // setAnnouncementComments([...announcementComments, res.data]);
        setAnnouncementComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommentsContext.Provider
      value={{
        registerComment,
        announcementComments,
        listComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
