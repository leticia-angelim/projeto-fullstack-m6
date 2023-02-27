import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import Input from "../Input";
import Button from "../Button";
import ModalContainer from "../ModalContainer";
import { CreateForm, FinalButtons, FormAnnouncement, SubTitle } from "./styles";
import { UserContext } from "../../contexts/UserContext";

const EditAddressModal = () => {
  const { modalAddress, setModalAddress, editAddress, user } =
    useContext(UserContext);

  console.log(user);
  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data: any) => {
    editAddress(data);
  };

  return (
    <>
      <ModalContainer
        title="Editar endereço"
        openModal={modalAddress}
        closeModal={() => setModalAddress(false)}
      >
        <FormAnnouncement onSubmit={handleSubmit(onSubmitFunction)}>
          <SubTitle>Informações do endereço</SubTitle>
          <Input
            label="CEP"
            type="text"
            placeholder="{user!.address.cep}"
            fieldName="cep"
            name="cep"
            register={register}
          />
          <CreateForm>
            <div>
              <Input
                label="Estado"
                type="text"
                placeholder="{user!.address.state}"
                fieldName="state"
                name="state"
                register={register}
              />
              <Input
                label="Cidade"
                type="text"
                placeholder="{user!.address.city}"
                fieldName="city"
                name="city"
                register={register}
              />
            </div>
          </CreateForm>
          <Input
            label="Rua"
            type="text"
            placeholder="{user!.address.street}"
            fieldName="street"
            name="street"
            register={register}
          />
          <CreateForm>
            <div>
              <Input
                label="Numero"
                type="number"
                placeholder="{user!.address.number}"
                fieldName="number"
                name="number"
                register={register}
              />

              <Input
                label="Complemento"
                type="text"
                placeholder="{user!.address.complement}"
                fieldName="complement"
                name="complement"
                register={register}
              />
            </div>
          </CreateForm>
          <FinalButtons>
            <div className="final-buttons">
              <Button
                children="Cancelar"
                backgroundColor="#DEE2E6"
                backgroundColorHover="#868E96"
                fontColor="#495057"
                fontColorHover="#FFFFFF"
                onClick={() => setModalAddress(false)}
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

export default EditAddressModal;