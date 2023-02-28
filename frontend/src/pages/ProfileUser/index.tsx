import React, { useContext } from "react";

import NavBar from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { UserContext } from "../../contexts/UserContext";
import { ProductList } from "../../components/ProductList";

import { PageContainer } from "../ProfileAdmin/styles";
import { UserInfo } from "../../components/UserProfileInfo/styles";

const ProfileUser = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <PageContainer>
        <div className="blue_div"></div>
        <UserInfo>
          <div className="name_div">
            <p className="name_abbreviate">SL</p>
          </div>
          <div className="username_div">
            <p className="username">{selectedUser?.name}</p>
            <div className="span_div">
              <span className="account">Anunciante</span>
            </div>
          </div>
          <p className="user_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci
            excepturi ratione! Enim iusto, ipsam, commodi distinctio provident
            quidem tempora sint praesentium, veniam voluptatem consectetur
            ratione quas cum at iste.
          </p>
        </UserInfo>
        {ProductList(selectedUser!.id)}
      </PageContainer>
      <Footer />
    </>
  );
};

export default ProfileUser;
