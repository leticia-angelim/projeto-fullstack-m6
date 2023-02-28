import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { IUserUpdate } from "../../interfaces/user";
import { editUserSchema } from "../../schemas/editUser";
import Button from "../Button";
import {
  CreateForm,
  DescriptionField,
  FormAnnouncement,
  SubTitle,
} from "../EditAnnouncementModal/styles";
import Input from "../Input";
import ModalContainer from "../ModalContainer";

export const EditUserProfileModal = () => {
  const { editUser, editUserModal, setEditUserModal } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserSchema),
  });

  const onSubmitFunction = (data: any) => {
    // const data = {
    //   name: "teste",
    //   email: "teste@gmail.com",
    //   cpf: "87988722234",
    //   phone: "03068901060",
    //   description: "descrição editada",
    // };

    editUser(data);
  };

  return (
    <>
      <ModalContainer
        title="Editar Perfil"
        openModal={editUserModal}
        closeModal={() => setEditUserModal(false)}
      >
        <FormAnnouncement onSubmit={handleSubmit(onSubmitFunction)}>
          <SubTitle>Informações pessoais</SubTitle>
          <CreateForm>
            <Input
              type="text"
              label="Nome"
              fieldName="name"
              placeholder="Samuel Leão Silva"
              register={register}
              name="name"
            />
            <Input
              type="email"
              label="Email"
              fieldName="email"
              placeholder="samuel@kenzie.com.br"
              register={register}
              name="email"
            />
            <Input
              type="text"
              label="CPF"
              fieldName="cpf"
              placeholder="900.880.090-00"
              register={register}
              name="cpf"
            />
            <Input
              type="text"
              label="Celular"
              fieldName="phone"
              placeholder="(084) 90909-9092"
              register={register}
              name="phone"
            />
            <DescriptionField>
              <label htmlFor="description">Descrição</label>
              <textarea id="description" placeholder="Digitar descrição" />
            </DescriptionField>

            <Button
              children="Cancelar"
              backgroundColor="#DEE2E6"
              backgroundColorHover="#868E96"
              fontColor="#495057"
              fontColorHover="#FFFFFF"
              onClick={() => setEditUserModal(false)}
              type="button"
            />
            <Button
              children="Salvar Alterações"
              backgroundColor="#B0A6F0"
              backgroundColorHover="#5126EA"
              border="#B0A6F0"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
              type="submit"
            />
          </CreateForm>
        </FormAnnouncement>
      </ModalContainer>
    </>
  );
};
