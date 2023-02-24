import React from "react";
import { ProductContainer, ProductOwner, ProductDetails } from "./styles";

import nameAbbreviate from "../../util";
import { ThemeTitle } from "../../styles/typography";
import { IAnnouncement } from "../../interfaces/announcements";

export const ProductCard = (annoucement: IAnnouncement) => {
  return (
    // <ProductContainer>
    //   <div className="product-img">
    //     <img src={car} alt="" />
    //   </div>
    //   <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
    //     {" "}
    //     Ferrari Vermelha{" "}
    //   </ThemeTitle>
    //   <p className="product-description">
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
    //     perspiciatis cum quasi ullam dignissimos, nemo amet quaerat.
    //   </p>

    //   <ProductOwner>
    //     <p className="owner-avatar">{nameAbbreviate("Thiago Araujo")}</p>
    //     <span className="owner-name">Thiago Araujo</span>
    //   </ProductOwner>

    //   <ProductDetails>
    //     <div className="product-details">
    //       <p className="product-mileage">0 KM</p>
    //       <p className="product-year">2019</p>
    //     </div>
    //     <span className="product-price">R$ 00.000,00</span>
    //   </ProductDetails>
    // </ProductContainer>

    <ProductContainer>
      <div className="product-img">
        <img src={annoucement.cover_img} alt={annoucement.title} />
      </div>
      <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
        {annoucement.title}
      </ThemeTitle>
      <p className="product-description">{annoucement.description}</p>

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
