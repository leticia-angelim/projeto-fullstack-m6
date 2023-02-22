import React from "react";
import { ProductContainer, ProductOwner, ProductDetails } from "./styles";
import car from "../../assets/car1.svg";
import nameAbbreviate from "../../util";
import { ThemeTitle } from "../../styles/typography";

export const ProductCard = () => {
  return (
    <ProductContainer>
      <div className="product-img">
        <img src={car} alt="" />
      </div>
      <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
        {" "}
        Ferrari Vermelha{" "}
      </ThemeTitle>
      <p className="product-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        perspiciatis cum quasi ullam dignissimos, nemo amet quaerat.
      </p>

      <ProductOwner>
        <p className="owner-avatar">{nameAbbreviate("Thiago Araujo")}</p>
        <span className="owner-name">Thiago Araujo</span>
      </ProductOwner>

      <ProductDetails>
        <div className="product-details">
          <p className="product-mileage">0 KM</p>
          <p className="product-year">2019</p>
        </div>
        <span className="product-price">R$ 00.000,00</span>
      </ProductDetails>
    </ProductContainer>
  );
};
