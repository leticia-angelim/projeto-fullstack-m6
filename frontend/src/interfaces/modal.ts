import { ReactElement } from "react";

export interface IModalProps {
  title: string;
  content: ReactElement;
  openModal: boolean;
  closeModal: () => void;
}
