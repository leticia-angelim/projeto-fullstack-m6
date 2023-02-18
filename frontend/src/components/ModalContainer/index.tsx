import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { Container } from "./styles";
import { IModalProps } from "../../interfaces/modal";

const ModalContainer = ({
  title,
  children,
  openModal,
  closeModal,
}: IModalProps) => {
  return (
    <Dialog open={openModal} scroll="body">
      <Container>
        <DialogTitle className="header" component="div">
          <Typography variant="h6">{title}</Typography>
          <Button onClick={closeModal}>
            <Close />
          </Button>
        </DialogTitle>
        <DialogContent className="content">{children}</DialogContent>
      </Container>
    </Dialog>
  );
};

export default ModalContainer;
