import React, { createContext, useState } from "react";
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
  const [addAdModal, setAddAdModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [userAnnouncements, setUserAnnouncements] = useState<
    Array<IAnnouncement>
  >([]);

  const registerAnnouncement = async (data: IAnnouncement) => {
    await api
      .post<IAnnouncement>(
        "/announcement/8e0a4dd6-439c-40e8-846a-914c4c5a63b4",
        data
      )
      .then((res) => {
        console.log(res);
        setAddAdModal(false);
        setSuccessModal(true);
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
        // console.log(res.data.announcements);
        setUserAnnouncements(res.data.announcements);
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
        addAdModal,
        setAddAdModal,
        successModal,
        setSuccessModal,
        userAnnouncements,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
