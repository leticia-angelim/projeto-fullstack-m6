import React, { useEffect } from "react";
import { useContext } from "react";

import Slider from "../Slider";
import { ProductListDiv } from "./styles";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

export const ProductList = () => {
  const { userAnnouncements, listUserAnnouncements } =
    useContext(AnnouncementContext);

  const cars = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Carro"
  );
  const motorcycles = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Moto"
  );

  useEffect(() => {
    listUserAnnouncements("8e0a4dd6-439c-40e8-846a-914c4c5a63b4"); // Esse id deve ser obtido pelo userSelected?
  }, []);

  return (
    <ProductListDiv className="products_div">
      <Slider title="Leilão" children={userAnnouncements} />
      <Slider title="Carros" children={cars} />
      <Slider title="Motos" children={motorcycles} />
    </ProductListDiv>
  );
};
