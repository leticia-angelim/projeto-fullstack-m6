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
      .post<IComment>(`/comments${announcement_id}`, data)
      .then((res) => {
        console.log(res);
        // setAnnouncementComments([...announcementComments, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listComments = async (announcement_id: string) => {
    await api
      .get<IComment>(`/comments/${announcement_id}`)
      .then((res) => {
        console.log(res);
        setAnnouncementComments([...announcementComments, res.data]);
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
