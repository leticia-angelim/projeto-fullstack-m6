import React, { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import {
  IAnnouncement,
  IAnnouncementAdmin,
} from "../../interfaces/announcements";
import { ThemeTitle } from "../../styles/typography";
import Button from "../Button";
import EditAnnouncementModal from "../EditAnnouncementModal";
import { ProductContainer, ProductDetails } from "../ProductCard/styles";
import { ProductButtons } from "./styles";

export const ProductCardAdmin = (announcement: IAnnouncement) => {
  const { setEditModal } = useContext(AnnouncementContext);

  return (
    <>
      <ProductContainer>
        <div className="product-img">
          <img src={announcement.cover_img} alt={announcement.title} />
        </div>
        <ThemeTitle
          tag="h2"
          className="product-title"
          titleSize="Heading-7-600"
        >
          {announcement.title}
        </ThemeTitle>
        <div className="product-description">
          <p>{announcement.description}</p>
        </div>
        <ProductDetails>
          <div className="product-details">
            <p className="product-mileage">{announcement.mileage} KM</p>
            <p className="product-year">{announcement.year}</p>
          </div>
          <span className="product-price">
            {announcement.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </ProductDetails>
        <ProductButtons>
          <Button
            children={"Editar"}
            backgroundColor={"#ffffff"}
            backgroundColorHover={"#212529"}
            fontColorHover={"#ffffff"}
            fontColor={"#212529"}
            border={"1.5px solid #212529"}
            onClick={() => setEditModal(true)}
          />
          <Button
            children={"Ver como"}
            backgroundColor={"#ffffff"}
            backgroundColorHover={"#212529"}
            fontColorHover={"#ffffff"}
            fontColor={"#212529"}
            border={"1.5px solid #212529"}
          />
        </ProductButtons>
      </ProductContainer>
      <EditAnnouncementModal />
    </>
  );
};
