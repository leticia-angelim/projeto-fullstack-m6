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
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [userAnnouncements, setUserAnnouncements] = useState<
    Array<IAnnouncement>
  >([]);

  const registerAnnouncement = async (data: IAnnouncement) => {
    await api
      .post<IAnnouncement>(
        "/announcement/45c60e9a-b95f-4617-b2cc-710712bd792b",
        data
      )
      .then((res) => {
        console.log(res);
        setUserAnnouncements([...userAnnouncements, res.data]);
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

  const editAnnouncement = async (data: IAnnouncement) => {
    await api
      .patch(`/announcement/34534545`, data)
      .then((res) => {
        console.log(res);
        setEditModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAnnouncement = async (announcement_id: string) => {
    await api
      .delete(`/announcement/${announcement_id}`)
      .then((res) => {
        console.log(res);
        setDeleteModal(false);
        setEditModal(false);
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
        editModal,
        deleteModal,
        setEditModal,
        setDeleteModal,
        editAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
