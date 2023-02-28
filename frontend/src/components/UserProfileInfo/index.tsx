import React, { useContext } from "react";

import Button from "../Button";
import { UserInfo } from "./styles";
import ModalSuccess from "../ModalSucess";
import CreateAnnouncementModal from "../CreateAnnouncement";
import EditAnnouncementModal from "../EditAnnouncementModal";
import DeleteAnnouncementModal from "../DeleteAnnouncementModal";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { UserContext } from "../../contexts/UserContext";
import nameAbbreviate from "../../util/nameAbbreviate";

export const UserProfileInfo = () => {
  const { setAddAdModal } = useContext(AnnouncementContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <UserInfo>
        <div className="name_div">
          <p className="name_abbreviate">{nameAbbreviate(user!.name)}</p>
        </div>
        <div className="username_div">
          <p className="username">{user!.name}</p>
          <div className="span_div">
            <span className="account">{user!.account}</span>
          </div>
        </div>
        <p className="user_description">{user!.description}</p>

        <Button
          children="Criar anúncio"
          backgroundColor="#FDFDFD"
          backgroundColorHover="#EDEAFD"
          border="#4529E6"
          fontColor="#4529E6"
          onClick={() => setAddAdModal(true)}
        />
      </UserInfo>
      <CreateAnnouncementModal />
      <ModalSuccess />
      <EditAnnouncementModal />
      <DeleteAnnouncementModal />
    </>
  );
};
