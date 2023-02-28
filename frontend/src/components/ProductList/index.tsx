import React, { useEffect } from "react";
import { useContext } from "react";

import Slider from "../Slider";
import { ProductListDiv } from "./styles";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { ProductCardAdmin } from "../ProductCardAdmin";
import { ProductCard } from "../ProductCard";

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
    listUserAnnouncements("5cd04f62-4943-46a5-a004-3048cfeefc2f"); // Esse id deve ser obtido pelo userSelected?
  }, []);

  return (
    <ProductListDiv className="products_div">
      <Slider title="Leilão" children={userAnnouncements} />
      <Slider title="Carros" children={cars} />
      <Slider title="Motos" children={motorcycles} />
    </ProductListDiv>
  );
};
