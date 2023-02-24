import React from "react";
import { PageContainer } from "./styles";
import NavBar from "../../components/navBar";
import { Footer } from "../../components/footer";
import { ProductList } from "../../components/ProductList";
import { UserProfileInfo } from "../../components/UserProfileInfo";

const ProfileUser = () => {
  return (
    <>
      <NavBar />
      <PageContainer>
        <div className="blue_div"></div>
        <UserProfileInfo />
        <ProductList />
      </PageContainer>
      <Footer />
    </>
  );
};

export default ProfileUser;

// alterar o product card para que ele receba parâmetros e seja montado em cima deles
// criar uma função que lista todos os cards de um usuário, que chame a função de requisição e passe os parâmetros do usuário em questão
