import React, { ReactElement } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Container } from "./styles";

interface IModalProps {
  title: string;
  content: ReactElement;
  openModal: boolean;
  closeModal: () => void;
}

const ModalContainer = ({
  title,
  content,
  openModal,
  closeModal,
}: IModalProps) => {
  return (
    <Dialog open={openModal}>
      <Container>
        <DialogTitle className="header" component="div">
          <Typography variant="h6">{title}</Typography>
          <Button onClick={closeModal}>
            <Close />
          </Button>
        </DialogTitle>
        <DialogContent>{content}</DialogContent>
      </Container>
    </Dialog>
  );
};

export default ModalContainer;
