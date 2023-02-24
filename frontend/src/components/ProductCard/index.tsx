import React from "react";

import nameAbbreviate from "../../util";
import { ThemeTitle } from "../../styles/typography";
import { IAnnouncement } from "../../interfaces/announcements";
import { ProductContainer, ProductOwner, ProductDetails } from "./styles";

export const ProductCard = (announcement: IAnnouncement) => {
  return (
    <ProductContainer>
      <div className="product-img">
        <img src={announcement.cover_img} alt={announcement.title} />
      </div>
      <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
        {announcement.title}
      </ThemeTitle>
      <div className="product-description">
        <p>{announcement.description}</p>
      </div>

      <ProductOwner>
        <p className="owner-avatar">{nameAbbreviate("Thiago Araujo")}</p>
        <span className="owner-name">Thiago Araujo</span>
      </ProductOwner>

      <ProductDetails>
        <div className="product-details">
          <p className="product-mileage">{annoucement.mileage} KM</p>
          <p className="product-year">{annoucement.year}</p>
        </div>
        <span className="product-price">
          {annoucement.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ProductDetails>
    </ProductContainer>
  );
};
