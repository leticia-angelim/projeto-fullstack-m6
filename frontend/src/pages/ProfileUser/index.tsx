import React, { useContext } from "react";

import NavBar from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import stringToColor from "../../util/stringToColor";
import nameAbbreviate from "../../util/nameAbbreviate";
import { UserContext } from "../../contexts/UserContext";
import { ProductList } from "../../components/ProductList";

import { PageContainer } from "../ProfileAdmin/styles";
import { UserInfo } from "../../components/UserProfileInfo/styles";
import nameAbbreviate from "../../util/nameAbbreviate";

const ProfileUser = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <PageContainer>
        <div className="blue_div"></div>
        <UserInfo>
          <div
            className="name_div"
            style={{
              backgroundColor: stringToColor(selectedUser!.name),
            }}
          >
            <p className="name_abbreviate">
              {nameAbbreviate(selectedUser!.name)}
            </p>
          </div>
          <div className="username_div">
            <p className="username">{selectedUser?.name}</p>
            <div className="span_div">
              <span className="account">{selectedUser?.account}</span>
            </div>
          </div>
          <p className="user_description">{selectedUser?.description}</p>
        </UserInfo>
        {ProductList(selectedUser!.id)}
      </PageContainer>
      <Footer />
    </>
  );
};

export default ProfileUser;
