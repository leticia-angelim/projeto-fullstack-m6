import React, { useEffect } from "react";
import { useContext } from "react";

import Slider from "../Slider";
import { ProductListDiv } from "./styles";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

export const ProductList = (userId: string) => {
  const { userAnnouncements, listUserAnnouncements } =
    useContext(AnnouncementContext);

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
      <Slider title="Leilão" children={userAnnouncements} />
      {cars.length < 1 ? (
        <Slider title="Carros" children={cars} />
      ) : (
        <p>Você ainda não possui anúncios</p>
      )}
      {motorcycles.length < 1 ? (
        <Slider title="Motos" children={motorcycles} />
      ) : (
        <p>Você ainda não possui anúncios</p>
      )}
    </ProductListDiv>
  ) : (
    <ProductListDiv className="products_div">
      {cars.length >= 1 ? (
        <Slider title="Carros" children={cars} />
      ) : (
        <p>Este usuário ainda não possui anúncios</p>
      )}
      {motorcycles.length >= 1 ? (
        <Slider title="Motos" children={motorcycles} />
      ) : (
        <p>Este usuário ainda não possui anúncios</p>
      )}
    </ProductListDiv>
  );
};
