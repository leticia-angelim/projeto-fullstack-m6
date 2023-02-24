import React, { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import CreateAnnouncementeModal from "../CreateAnnouncemente";
import ModalSuccess from "../ModalSucess";
import { UserInfo } from "./styles";
import Button from "../Button";
import EditAnnouncementModal from "../EditAnnouncementModal";
import DeleteAnnouncementModal from "../DeleteAnnouncementModal";

export const UserProfileInfo = () => {
  const { setAddAdModal } = useContext(AnnouncementContext);

  return (
    <>
      <UserInfo>
        <div className="name_div">
          <p className="name_abbreviate">SL</p>
        </div>
        <div className="username_div">
          <p className="username">Samuel Leão</p>
          <div className="span_div">
            <span className="account">Anunciante</span>
          </div>
        </div>
        <p className="user_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci
          excepturi ratione! Enim iusto, ipsam, commodi distinctio provident
          quidem tempora sint praesentium, veniam voluptatem consectetur ratione
          quas cum at iste.
        </p>

        <Button
          children="Criar anúncio"
          backgroundColor="#FDFDFD"
          backgroundColorHover="#EDEAFD"
          border="#4529E6"
          fontColor="#4529E6"
          onClick={() => setAddAdModal(true)}
        />
      </UserInfo>
      <CreateAnnouncementeModal />
      <ModalSuccess />
      <EditAnnouncementModal />
      <DeleteAnnouncementModal />
    </>
  );
};
