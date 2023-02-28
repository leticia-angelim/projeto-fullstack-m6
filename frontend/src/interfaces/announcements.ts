import { Dispatch, ReactNode, SetStateAction } from "react";
import { IUser } from "./user";

export interface IAnnouncementContext {
  registerAnnouncement: (data: IAnnouncement) => Promise<void>;
  listAllAnnouncements: () => void;
  listAnnouncement: (announcement_id: string) => void;
  listUserAnnouncements: (user_id: string) => void;
  addAdModal: boolean;
  setAddAdModal: Dispatch<SetStateAction<boolean>>;
  successModal: boolean;
  setSuccessModal: Dispatch<SetStateAction<boolean>>;
  userAnnouncements: Array<IAnnouncement>;
  editModal: boolean;
  deleteModal: boolean;
  setEditModal: Dispatch<SetStateAction<boolean>>;
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
  editAnnouncement: (data: IAnnouncement) => Promise<void>;
  deleteAnnouncement: () => Promise<void>;
  setAnnouncementId: Dispatch<SetStateAction<string>>;
  allAnnouncements: IAnnouncement[];
}

export interface AnnouncementProps {
  children: ReactNode;
}

export interface IAnnouncement {
  id: string;
  announcement_type: string;
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  vehicle_type: string;
  cover_img: string;
  photos: string;
  user: IUser;
}

export interface IAnnouncementAdmin {
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  cover_img: string;
}
