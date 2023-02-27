import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { UserContext } from "../../contexts/UserContext";
import { userSchema } from "../../schemas/user";

import { Footer } from "../../components/footer";
import NavBar from "../../components/navBar";
import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  CreateForm,
  DescriptionField,
} from "../../components/EditAnnouncementModal/styles";
import { FormHelperText } from "@mui/material";
import { Container } from "./styles";
import ModalSuccessRegister from "../../components/ModalSuccessRegister";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  const [account, setAccount] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmitFunction = (data: any) => {
    const address = {
      cep: data.cep,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };

    data.account = account;
    data.address = address;

    registerUser(data);
  };

  return (
    <>
      <NavBar />
      <Container>
        <div className="box">
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h4>Informações pessoais</h4>
            <Input
              label="Name"
              type="text"
              placeholder="Ex: Samuel Leão"
              fieldName="name"
              name="name"
              register={register}
            />
            <FormHelperText error>{errors.name?.message}</FormHelperText>

            <Input
              label="Email"
              type="email"
              placeholder="Ex: samuel@kenzie.com.br"
              fieldName="email"
              name="email"
              register={register}
            />
            <FormHelperText error>{errors.email?.message}</FormHelperText>

            <Input
              label="CPF"
              type="text"
              placeholder="000.000.000-00"
              fieldName="cpf"
              name="cpf"
              register={register}
            />
            <FormHelperText error>{errors.cpf?.message}</FormHelperText>

            <Input
              label="Celular"
              type="text"
              placeholder="(DDD) 90000-0000"
              fieldName="phone"
              name="phone"
              register={register}
            />
            <FormHelperText error>{errors.phone?.message}</FormHelperText>

            <Input
              label="Data de nascimento"
              type="text"
              placeholder="00/00/00"
              fieldName="birth_date"
              name="birth_date"
              register={register}
            />
            <FormHelperText error>{errors.birth_date?.message}</FormHelperText>

            <DescriptionField>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                placeholder="Digitar descrição"
                {...register("description")}
              />
            </DescriptionField>

            <h4>Informações de endereço</h4>
            <Input
              label="CEP"
              type="text"
              placeholder="00000.000"
              fieldName="cep"
              name="cep"
              register={register}
            />
            <FormHelperText error>{errors.cep?.message}</FormHelperText>

            <CreateForm>
              <div>
                <div className="input-errors">
                  <Input
                    label="Estado"
                    type="text"
                    placeholder="Digitar estado"
                    fieldName="state"
                    name="state"
                    register={register}
                  />
                  <FormHelperText error>{errors.state?.message}</FormHelperText>
                </div>
                <div className="input-errors">
                  <Input
                    label="Cidade"
                    type="text"
                    placeholder="Digitar cidade"
                    fieldName="city"
                    name="city"
                    register={register}
                  />
                  <FormHelperText error>{errors.city?.message}</FormHelperText>
                </div>
              </div>
            </CreateForm>

            <Input
              label="Rua"
              type="text"
              placeholder="Digitar rua"
              fieldName="street"
              name="street"
              register={register}
            />
            <FormHelperText error>{errors.street?.message}</FormHelperText>

            <CreateForm>
              <div>
                <div className="input-errors">
                  <Input
                    label="Número"
                    type="number"
                    placeholder="Digitar número"
                    fieldName="number"
                    name="number"
                    register={register}
                  />
                  <FormHelperText error>
                    {errors.number?.message}
                  </FormHelperText>
                </div>
                <div className="input-errors">
                  <Input
                    label="Complemento"
                    type="text"
                    placeholder="Ex: apart 307"
                    fieldName="complement"
                    name="complement"
                    register={register}
                  />
                  <FormHelperText error>
                    {errors.complement?.message}
                  </FormHelperText>
                </div>
              </div>
            </CreateForm>

            <h4>Tipo de conta</h4>
            <CreateForm>
              <div>
                <Button
                  children="Comprador"
                  backgroundColor="#FFFFFF"
                  backgroundColorHover="#0B0D0D"
                  border="#ADB5BD"
                  fontColor="#0B0D0D"
                  fontColorHover="#FFFFFF"
                  onClick={() => setAccount("Comprador")}
                  type="button"
                />
                <Button
                  children="Anunciante"
                  backgroundColor="#FFFFFF"
                  backgroundColorHover="#0B0D0D"
                  border="#ADB5BD"
                  fontColor="#0B0D0D"
                  fontColorHover="#FFFFFF"
                  onClick={() => setAccount("Anunciante")}
                  type="button"
                />
              </div>
            </CreateForm>

            <Input
              label="Senha"
              type="password"
              placeholder="Digitar senha"
              fieldName="password"
              name="password"
              register={register}
            />
            <FormHelperText error>{errors.password?.message}</FormHelperText>

            <Input
              label="Confirmar Senha"
              type="password"
              placeholder="Digitar senha"
              fieldName="confirm_password"
              name="confirm_password"
              register={register}
            />
            <FormHelperText error>
              {errors.confirm_password?.message}
            </FormHelperText>

            <Button
              children="Finalizar cadastro"
              backgroundColor="#4529E6"
              backgroundColorHover="#5126EA"
              type="submit"
            />
          </form>
        </div>
      </Container>
      <ModalSuccessRegister />
      <Footer />
    </>
  );
};

export default Register;
