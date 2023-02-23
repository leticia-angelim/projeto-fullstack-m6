import React, { useContext } from "react";
import CreateAnnouncementeModal from "../../components/CreateAnnouncemente";
import ModalSuccess from "../../components/ModalSucess";

import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const Product = () => {
  const { setAddAdModal } = useContext(AnnouncementContext);
  return (
    <>
      <h1>Product</h1>
      <button onClick={() => setAddAdModal(true)}>Criar Anúncio</button>
      <CreateAnnouncementeModal />
      <ModalSuccess />
    </>
  );
};

export default Product;
