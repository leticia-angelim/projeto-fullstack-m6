import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import ModalContainer from "../ModalContainer";
import { Form } from "./styles";

const EditAnnouncementModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>click here</button>
      <ModalContainer
        openModal={open}
        closeModal={() => setOpen(false)}
        title="Editar anúncio"
        children={
          <Form>
            <p>Tipo de anúncio</p>
            <div>
              <Button
                backgroundColor="#4529E6"
                backgroundColorHover="#5126EA"
                children="Venda"
              />
              <Button
                backgroundColor="inherit"
                backgroundColorHover="#212529"
                border="#0B0D0D"
                fontColor="#0B0D0D"
                fontColorHover="#FDFDFD"
                children="Leilão"
              />
            </div>
            <Input
              fieldName="name"
              label="Nome"
              placeholder="Nome"
              type="text"
            />
          </Form>
        }
      />
    </>
  );
};

export default EditAnnouncementModal;
