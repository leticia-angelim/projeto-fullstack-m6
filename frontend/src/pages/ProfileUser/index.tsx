import React from "react";
import { ProductList } from "../../components/ProductList";
import Slider from "../../components/Slider";
import { UserProfileInfo } from "../../components/UserProfileInfo";
import { PageContainer } from "./styles";

const ProfileUser = () => {
  return (
    <PageContainer>
      <div className="blue_div"></div>
      <UserProfileInfo />
      <ProductList />
    </PageContainer>
  );
};

export default ProfileUser;

// alterar o product card para que ele receba parâmetros e seja montado em cima deles
// criar uma função que lista todos os cards de um usuário, que chame a função de requisição e passe os parâmetros do usuário em questão
