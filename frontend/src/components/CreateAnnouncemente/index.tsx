import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import Button from "../Button";
import Input from "../Input";
import ModalContainer from "../ModalContainer";
import { FormHelperText } from "@mui/material";
import {
  CreateForm,
  DescriptionField,
  AddImg,
  FinalButtons,
  ImgButton,
  FormAnnouncement,
  SubTitle,
} from "./styles";
import createAnnouncementSchema from "../../schemas/createAnnouncement";

const CreateAnnouncementeModal = () => {
  const { registerAnnouncement, addAdModal, setAddAdModal } =
    useContext(AnnouncementContext);

  const [count, setCount] = useState(2);
  const [addImg, setAddImg] = useState<number[]>([]);
  const [type, setType] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<string>("");

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
    resolver: yupResolver(createAnnouncementSchema),
  });

  const onSubmitFunction = (data: any) => {
    data.announcement_type = type;
    data.vehicle_type = vehicleType;

    data.photos = [
      "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
    ];
    registerAnnouncement(data);
  };

  return (
    <>
      <ModalContainer
        title="Criar anúncio"
        openModal={addAdModal}
        closeModal={() => setAddAdModal(false)}
      >
        <FormAnnouncement onSubmit={handleSubmit(onSubmitFunction)}>
          <SubTitle>Tipo de anuncio</SubTitle>
          <CreateForm>
            <div>
              <Button
                children="Venda"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => setType("Venda")}
                type="button"
              />
              <Button
                children="Leilão"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => setType("Leilão")}
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
                  {...register("year")}
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
                children="Carro"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => setVehicleType("Carro")}
                type="button"
              />
              <Button
                children="Moto"
                backgroundColor="#FFFFFF"
                backgroundColorHover="#0B0D0D"
                border="#ADB5BD"
                fontColor="#0B0D0D"
                fontColorHover="#FFFFFF"
                onClick={() => setVehicleType("Moto")}
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
            <Input
              label="1° Imagem da galeria"
              placeholder="Inserir URL da imagem"
              fieldName="photos"
              type="text"
              name="photos"
              register={register}
            />
            <FormHelperText error>{errors.photos?.message}</FormHelperText>
            <AddImg>
              {addImg.map((num) => (
                <Input
                  key={num}
                  label={`${num}° Imagem da galeria`}
                  placeholder="Inserir URL da imagem"
                  fieldName="photos"
                  type="text"
                  name="photos"
                  register={register}
                />
              ))}
            </AddImg>
          </div>
          <ImgButton>
            {count <= 6 && addImg.length <= 6 ? (
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
                children="Cancelar"
                backgroundColor="#DEE2E6"
                backgroundColorHover="#868E96"
                fontColor="#495057"
                fontColorHover="#FFFFFF"
                onClick={() => setAddAdModal(false)}
                type="button"
              />
              <Button
                children="Criar Anúncio"
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

export default CreateAnnouncementeModal;
