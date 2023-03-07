import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../Input";
import Button from "../Button";
import ModalContainer from "../ModalContainer";
import editAnnouncementSchema from "../../schemas/editAnnouncement";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

import {
  CreateForm,
  DescriptionField,
  AddImg,
  FinalButtons,
  ImgButton,
  FormAnnouncement,
  SubTitle,
} from "./styles";
import { FormHelperText } from "@mui/material";

const EditAnnouncementModal = () => {
  const {
    editModal,
    setEditModal,
    setDeleteModal,
    editAnnouncement,
    gallery,
    setGallery,
  } = useContext(AnnouncementContext);

  const [count, setCount] = useState(0);
  const [addImg, setAddImg] = useState<number[]>([]);
  const [type, setType] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<string>("");
  const [published, setPublished] = useState<boolean>(true);
  const [activeAnnouncementTypeBtn, setActiveAnnouncementTypeBtn] =
    useState<number>(0);
  const [activeVehicleTypeBtn, setActiveVehicleTypeBtn] = useState<number>(0);
  const [activePublishedBtn, setactivePublishedBtn] = useState<number>(0);

  const handleVehicleBtnClick = (buttonIndex: number) => {
    setActiveVehicleTypeBtn(buttonIndex);
  };

  const handleAnnouncementBtnClick = (buttonIndex: number) => {
    setActiveAnnouncementTypeBtn(buttonIndex);
  };

  const newInput = () => {
    if (count <= 6 && addImg.length <= 6) {
      setCount((count) => {
        return count + 1;
      });
      setAddImg((prev) => [...prev, count]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editAnnouncementSchema),
  });

  const onSubmitFunction = (data: any) => {
    data.announcement_type = type;
    data.vehicle_type = vehicleType;
    data.is_published = published;

    data.photos = gallery.filter((img) => img !== "");

    editAnnouncement(data);
  };

  return (
    <>
      <ModalContainer
        title="Editar anúncio"
        openModal={editModal}
        closeModal={() => setEditModal(false)}
      >
        <FormAnnouncement onSubmit={handleSubmit(onSubmitFunction)}>
          <SubTitle>Tipo de anuncio</SubTitle>
          <CreateForm>
            <div>
              <Button
                className={
                  activeAnnouncementTypeBtn === 1 ? "button_active" : ""
                }
                children="Venda"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => {
                  setType("Venda");
                  handleAnnouncementBtnClick(1);
                }}
                type="button"
              />
              <Button
                className={
                  activeAnnouncementTypeBtn === 2 ? "button_active" : ""
                }
                children="Leilão"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => {
                  setType("Leilão");
                  handleAnnouncementBtnClick(2);
                }}
                type="button"
              />
            </div>
          </CreateForm>
          <SubTitle>Informações do veículo</SubTitle>
          <Input
            label="Título"
            type="text"
            placeholder="Digitar título"
            fieldName="title"
            name="title"
            register={register}
          />
          <FormHelperText error>{errors.title?.message}</FormHelperText>
          <CreateForm>
            <div>
              <div className="input-errors">
                <Input
                  label="Ano"
                  type="number"
                  placeholder="Digitar ano"
                  fieldName="year"
                  name="year"
                  register={register}
                />
                <FormHelperText error>{errors.year?.message}</FormHelperText>
              </div>
              <div className="input-errors">
                <Input
                  label="Quilometragem"
                  type="number"
                  placeholder="0"
                  fieldName="mileage"
                  name="mileage"
                  register={register}
                />
                <FormHelperText error>{errors.mileage?.message}</FormHelperText>
              </div>

              {type === "Venda" ? (
                <div className="input-errors">
                  <Input
                    label="Preço"
                    type="number"
                    placeholder="Digitar preço"
                    fieldName="price"
                    name="price"
                    register={register}
                  />
                  <FormHelperText error>{errors.price?.message}</FormHelperText>
                </div>
              ) : (
                <div className="input-errors">
                  <Input
                    label="Lance inicial"
                    type="number"
                    placeholder="Digitar lance"
                    fieldName="auction"
                    name="price"
                    register={register}
                  />
                  <FormHelperText error>{errors.price?.message}</FormHelperText>
                </div>
              )}
            </div>
          </CreateForm>
          <DescriptionField>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Digitar descrição"
              {...register("description")}
            />
          </DescriptionField>
          <FormHelperText error>{errors.description?.message}</FormHelperText>
          <SubTitle>Tipo de veículo</SubTitle>
          <CreateForm>
            <div>
              <Button
                className={activeVehicleTypeBtn === 1 ? "button_active" : ""}
                children="Carro"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => {
                  setVehicleType("Carro");
                  handleVehicleBtnClick(1);
                }}
                type="button"
              />
              <Button
                className={activeVehicleTypeBtn === 2 ? "button_active" : ""}
                children="Moto"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => {
                  setVehicleType("Moto");
                  handleVehicleBtnClick(2);
                }}
                type="button"
              />
            </div>
          </CreateForm>
          <SubTitle>Publicado</SubTitle>
          <CreateForm>
            <div>
              <Button
                className={activePublishedBtn === 1 ? "button_active" : ""}
                children="Sim"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => {
                  setPublished(true);
                  setactivePublishedBtn(1);
                }}
                type="button"
              />
              <Button
                className={activePublishedBtn === 2 ? "button_active" : ""}
                children="Não"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => {
                  setPublished(false);
                  setactivePublishedBtn(2);
                }}
                type="button"
              />
            </div>
          </CreateForm>
          <Input
            label="Imagem da capa"
            type="text"
            placeholder="Inserir URL da imagem"
            fieldName="cover_img"
            name="cover_img"
            register={register}
          />
          <FormHelperText error>{errors.cover_img?.message}</FormHelperText>
          <div>
            <AddImg>
              {addImg.map((_, num) => (
                <Input
                  key={num}
                  label={`${num + 1}° Imagem da galeria`}
                  placeholder="Inserir URL da imagem"
                  fieldName="photos"
                  type="text"
                  name={`photos`}
                  register={register}
                  onChange={(event: any) => {
                    const galleryToUpdate = [...gallery];
                    galleryToUpdate[num] = event.target.value;
                    setGallery(galleryToUpdate);
                  }}
                />
              ))}
            </AddImg>
          </div>
          <ImgButton>
            {count <= 5 && addImg.length <= 5 ? (
              <Button
                children="Adicionar campo para imagem da galeria"
                backgroundColor="#EDEAFD"
                backgroundColorHover=""
                fontColor="#4529E6"
                onClick={newInput}
                type="button"
              />
            ) : (
              <Button
                children="Limite de campos atingido"
                backgroundColor="#EDEAFD"
                backgroundColorHover=""
                borderHover="#CD2B31"
                fontColor="#CD2B31"
                type="button"
              />
            )}
          </ImgButton>
          <FinalButtons>
            <div className="final-buttons">
              <Button
                children="Excluir anúncio"
                backgroundColor="#DEE2E6"
                backgroundColorHover="#868E96"
                fontColor="#495057"
                fontColorHover="#FFFFFF"
                onClick={() => setDeleteModal(true)}
                type="button"
              />
              <Button
                children="Salvar alterações"
                backgroundColor="#B0A6F0"
                backgroundColorHover="#5126EA"
                border="#B0A6F0"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                type="submit"
              />
            </div>
          </FinalButtons>
        </FormAnnouncement>
      </ModalContainer>
    </>
  );
};

export default EditAnnouncementModal;
