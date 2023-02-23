import React, { useEffect } from "react";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { IAnnouncement } from "../../interfaces/announcements";
import { ProductCard } from "../ProductCard";
import Slider from "../Slider";
import { ProductListDiv } from "./styles";

export const ProductList = () => {
  const { userAnnouncements, listUserAnnouncements } =
    useContext(AnnouncementContext);

  const announcements = userAnnouncements.map((announcement: IAnnouncement) => {
    return ProductCard(announcement);
  });

  const cars = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Carro"
  );
  const motorcycles = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Moto"
  );

  useEffect(() => {
    listUserAnnouncements("38202530-afca-4dd7-b70b-517d2cde3569");
  }, []);

  return (
    <ProductListDiv className="products_div">
      {announcements}

      {/* <Slider title="Carros">{announcements}</Slider> */}

      {/* <Slider title="Carros" children={<ProductCard />} /> */}
    </ProductListDiv>
  );
};
