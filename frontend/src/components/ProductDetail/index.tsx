import React, { useContext } from "react";
import Button from "../../components/Button";
import {
  Aside,
  DivInfos,
  Title,
  Main,
  Photos,
  Container,
  CoverImg,
  Product,
  ProductDetails,
  ProductDescription,
  UserInfos,
} from "./styles";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { useNavigate } from "react-router-dom";
import car from "../../assets/car1.svg";
import nameAbbreviate from "../../util/nameAbbreviate";
import { CommentsList } from "../CommentsList";

const ProductDetail = () => {
  const { userAnnouncements } = useContext(AnnouncementContext);
  const price = 10000000;
  const history = useNavigate();

  return (
    <Main>
      <Container>
        <Product>
          <CoverImg>
            <div>
              <img src={car} alt="Nome do produto" />
            </div>
          </CoverImg>
          <ProductDetails>
            <Title>
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
            </Title>
            <DivInfos>
              <div>
                <div>
                  <span>2023</span>
                  <span>0 KM</span>
                </div>
                <span>
                  {price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <Button
                backgroundColor="#4529E6"
                backgroundColorHover=""
                fontColor="#FFFFFF"
              >
                Comprar
              </Button>
            </DivInfos>
          </ProductDetails>

          <ProductDescription>
            <Title>Descrição</Title>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ProductDescription>
          <CommentsList announcement={""} />
        </Product>
        <Aside>
          {userAnnouncements.length > 0 ? (
            <Photos>
              <Title>Fotos</Title>
              <p>Esse anúncio não possui fotos extras</p>
            </Photos>
          ) : (
            <Photos>
              <Title>Fotos</Title>
              <div>
                <figure>
                  <img src={car} alt="Car Photo" />
                </figure>
                <figure>
                  <img src={car} alt="Car Photo" />
                </figure>
                <figure>
                  <img src={car} alt="Car Photo" />
                </figure>
              </div>
            </Photos>
          )}

          <UserInfos>
            <div>{nameAbbreviate("Thiago Araujo")}</div>
            <span>Thiago Araujo</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Button
              backgroundColor="#0B0D0D"
              backgroundColorHover=""
              fontColor="#FFFFFF"
              onClick={() => history(`/home`)}
            >
              Ver todos anuncios
            </Button>
          </UserInfos>
        </Aside>
      </Container>
      {/* <Product>
        <CommentsList />
      </Product> */}
    </Main>
  );
};

export default ProductDetail;
