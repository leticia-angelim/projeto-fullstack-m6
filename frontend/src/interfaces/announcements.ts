import { Dispatch, ReactNode, SetStateAction } from "react";

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
  deleteAnnouncement: (announcement_id: string) => Promise<void>;
}

export interface AnnouncementProps {
  children: ReactNode;
}

export interface IAnnouncement {
  announcement_type: string;
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  vehicle_type: string;
  cover_img: string;
  photos: string;
}
