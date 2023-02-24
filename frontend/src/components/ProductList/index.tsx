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
    listUserAnnouncements("45c60e9a-b95f-4617-b2cc-710712bd792b");
  }, []);

  return (
    <ProductListDiv className="products_div">
      <Slider title="Leilão" children={userAnnouncements} />
      <Slider title="Carros" children={cars} />
      <Slider title="Motos" children={motorcycles} />
    </ProductListDiv>
  );
};
