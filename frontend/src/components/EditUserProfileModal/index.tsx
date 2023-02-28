import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
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
  } = useForm();

  const onSubmitFunction = (data: any) => {
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
              <textarea
                id="description"
                placeholder="Digitar descrição"
                {...register("description")}
              />
            </DescriptionField>

            <div>
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
            </div>
          </CreateForm>
        </FormAnnouncement>
      </ModalContainer>
    </>
  );
};
