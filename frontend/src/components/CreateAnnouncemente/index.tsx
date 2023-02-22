import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import ModalContainer from "../ModalContainer";
import {
  CreateForm,
  DescriptionField,
  AddImg,
  FinalButtons,
  ImgButton,
} from "./styles";

const CreateAnnouncementeModal = () => {
  const [count, setCount] = useState(2);
  const [addImg, setAddImg] = useState<number[]>([]);

  const newInput = () => {
    setCount(count + 1);

    if (count <= 6 && addImg.length <= 6) {
      setAddImg((prev) => [...prev, count]);
    }
  };

  return (
    <>
      <ModalContainer title="Criar anúncio" openModal closeModal={() => ""}>
        {" "}
        <h4>Tipo de anuncio</h4>
        <CreateForm>
          <div>
            <Button
              children="Venda"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
            />
            <Button
              children="Leilão"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
            />
          </div>
        </CreateForm>
        <h4>Informações do veículo</h4>
        <Input
          label="TÍtulo"
          type="text"
          placeholder="Digitar título"
          fieldName="title"
        />
        <CreateForm>
          <div>
            <Input
              label="Ano"
              type="number"
              placeholder="Digitar ano"
              fieldName="year"
            />
            <Input
              label="Quilometragem"
              type="number"
              placeholder="0"
              fieldName="mileage"
            />
            <Input
              label="Preço"
              type="number"
              placeholder="Preço"
              fieldName="price"
            />
          </div>
        </CreateForm>
        <DescriptionField>
          <Input
            label="Descrição"
            type="text"
            placeholder="Digitar descrição"
            fieldName="description"
          />
        </DescriptionField>
        <h4>Tipo de veículo</h4>
        <CreateForm>
          <div>
            <Button
              children="Carro"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
            />
            <Button
              children="Moto"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
            />
          </div>
        </CreateForm>
        <Input
          label="Imagem da capa"
          type="text"
          placeholder="Inserir URL da imagem"
          fieldName="cover_img"
        />
        <div>
          <Input
            label="1° Imagem da galeria"
            type="text"
            placeholder="Inserir URL da imagem"
            fieldName="url"
          />
          <AddImg>
            {addImg.map((num) => (
              <Input
                key={num}
                label={`${num}° Imagem da galeria`}
                placeholder="Inserir URL da imagem"
                fieldName="img-input"
                type="text"
              />
            ))}
          </AddImg>
        </div>
        <ImgButton>
          <Button
            children="Adicionar campo para imagem da galeria"
            backgroundColor="#EDEAFD"
            backgroundColorHover=""
            fontColor="#4529E6"
            onClick={newInput}
          />
        </ImgButton>
        <FinalButtons>
          <div className="final-buttons">
            <Button
              children="Cancelar"
              backgroundColor="#DEE2E6"
              backgroundColorHover="#868E96"
              fontColor="#495057"
              fontColorHover="#FFFFFF"
              onClick={() => ""}
            />
            <Button
              children="Criar Anúncio"
              backgroundColor="#B0A6F0"
              backgroundColorHover="#5126EA"
              border="#B0A6F0"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
              onClick={() => ""}
            />
          </div>
        </FinalButtons>
      </ModalContainer>
    </>
  );
};

export default CreateAnnouncementeModal;
