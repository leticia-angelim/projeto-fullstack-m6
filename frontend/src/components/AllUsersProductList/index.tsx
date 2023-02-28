import React, { useContext, useEffect } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import Slider from "../Slider";

const AllUsersProductList = () => {
  const { allAnnouncements, listAllAnnouncements } =
    useContext(AnnouncementContext);

  const auction = allAnnouncements.filter(
    (announcement) => announcement.announcement_type == "Leilão"
  );
  const cars = allAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Carro"
  );
  const motorcycles = allAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Moto"
  );

  useEffect(() => {
    listAllAnnouncements();
  }, []);

  return (
    <>
      <Slider title="Leilão" children={auction} />
      <Slider title="Carros" children={cars} />
      <Slider title="Motos" children={motorcycles} />
    </>
  );
};

export default AllUsersProductList;
