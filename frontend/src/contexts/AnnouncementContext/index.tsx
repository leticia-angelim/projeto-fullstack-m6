import React, { createContext } from "react";
import {
  AnnouncementProps,
  IAnnouncement,
  IAnnouncementContext,
} from "../../interfaces/announcements";
import api from "../../services/api";

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

export const AnnoucementProvider = ({ children }: AnnouncementProps) => {
  const registerAnnouncement = async (data: IAnnouncement) => {
    await api
      .post<IAnnouncement>("/announcement", data)
      .then((res) => {
        console.log(res);
        // chamar modal de sucesso
      })
      .catch((err) => {
        console.log(err);
        // chamar modal de erro
      });
  };

  const listAllAnnouncements = async () => {
    await api
      .get("/announcement")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listAnnouncement = async (announcement_id: string) => {
    await api
      .get(`/announcement/${announcement_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listUserAnnouncements = async (user_id: string) => {
    await api
      .get(`announcement/user/${user_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AnnouncementContext.Provider
      value={{
        registerAnnouncement,
        listAllAnnouncements,
        listAnnouncement,
        listUserAnnouncements,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
