import React from "react";
import Button from "../../components/Button";
import { ProductCard } from "../../components/ProductCard";
import Slider from "../../components/Slider";
import { Buttons, Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <div className="box-container">
        <div className="box">
          <h2>Velocidade e experiência em um lugar feito para você</h2>
          <p>Um ambiente feito para você explorar o seu melhor</p>
        </div>
        <Buttons>
          <Button
            backgroundColor="inherit"
            backgroundColorHover="#FDFDFD"
            border="#FDFDFD"
            fontColorHover=" #0B0D0D"
            children="Carros"
          />
          <Button
            backgroundColor="inherit"
            backgroundColorHover="#FDFDFD"
            border="#FDFDFD"
            fontColorHover=" #0B0D0D"
            children="Motos"
          />
        </Buttons>
      </div>
      <Slider title="Leilão" children={<ProductCard />} />
      <Slider title="Carros" children={<ProductCard />} />
      <Slider title="Motos" children={<ProductCard />} />
    </Container>
  );
};

export default Home;
