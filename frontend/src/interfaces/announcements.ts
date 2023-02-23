import { ReactNode } from "react";

export interface IAnnouncementContext {
  registerAnnouncement: (data: IAnnouncement) => void;
  listAllAnnouncements: () => void;
  listAnnouncement: (announcement_id: string) => void;
  listUserAnnouncements: (user_id: string) => void;
  userAnnouncements: Array<IAnnouncement>;
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
  gallery_img: string;
}
