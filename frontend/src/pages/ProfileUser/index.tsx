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
