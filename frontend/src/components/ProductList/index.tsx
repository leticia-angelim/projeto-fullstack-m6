import React, { useEffect } from "react";
import { useContext } from "react";

import Slider from "../Slider";
import { ProductListDiv } from "./styles";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

export const ProductList = (userId: string) => {
  const { userAnnouncements, listUserAnnouncements } =
    useContext(AnnouncementContext);

  const auction = userAnnouncements.filter(
    (announcement) => announcement.announcement_type == "Leilão"
  );
  const loggedUserId = localStorage.getItem("@user:id");

  const cars = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Carro"
  );
  const motorcycles = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Moto"
  );

  useEffect(() => {
    listUserAnnouncements(userId);
  }, []);

  return userId === loggedUserId ? (
    <ProductListDiv className="products_div">
      <Slider title="Leilão" children={auction} />
      <Slider title="Carros" children={cars} />
      <Slider title="Motos" children={motorcycles} />
    </ProductListDiv>
  ) : (
    <ProductListDiv className="products_div">
      <Slider title="Carros" children={cars} />
      <Slider title="Motos" children={motorcycles} />
    </ProductListDiv>
  );
};
