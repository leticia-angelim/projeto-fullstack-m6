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
