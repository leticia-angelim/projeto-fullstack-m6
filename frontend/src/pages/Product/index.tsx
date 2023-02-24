import React, { useContext } from "react";
import CreateAnnouncementeModal from "../../components/CreateAnnouncemente";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import ModalSuccess from "../../components/ModalSucess";

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
