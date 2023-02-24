import React from "react";
import NavBar from "../../components/navBar";
import { Footer } from "../../components/footer";
import { ProductList } from "../../components/ProductList";
import { UserProfileInfo } from "../../components/UserProfileInfo";
import { PageContainer } from "./styles";

const ProfileAdmin = () => {
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

export default ProfileAdmin;
