import React, { useContext } from "react";
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

import PhotoModal from "../PhotoModal";
import Button from "../../components/Button";
import stringToColor from "../../util/stringToColor";
import nameAbbreviate from "../../util/nameAbbreviate";
import { UserContext } from "../../contexts/UserContext";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { useNavigate } from "react-router-dom";
import { CommentsList } from "../CommentsList";

const ProductDetail = () => {
  const { selectedAnnouncement, setPhotoModal, setSelectedPhoto } =
    useContext(AnnouncementContext);
  const { setSelectedUser } = useContext(UserContext);

  const history = useNavigate();

  return (
    <Main>
      <Container>
        <Product>
          <CoverImg>
            <div>
              <img
                src={selectedAnnouncement?.cover_img}
                alt={selectedAnnouncement?.title}
              />
            </div>
          </CoverImg>
          <ProductDetails>
            <Title>{selectedAnnouncement?.title}</Title>
            <DivInfos>
              <div>
                <div>
                  <span>{selectedAnnouncement?.year}</span>
                  <span>{selectedAnnouncement?.mileage} KM</span>
                </div>
                <span>
                  {selectedAnnouncement?.price.toLocaleString("pt-br", {
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

            <p>{selectedAnnouncement?.description}</p>
          </ProductDescription>
          <CommentsList announcement={selectedAnnouncement} />
        </Product>
        <Aside>
          {/* {selectedAnnouncement!.photos! ? (
            <Photos>
              <Title>Fotos</Title>
              <div>
                {selectedAnnouncement!.photos!.map((photo) => (
                  <figure
                    key={photo.id}
                    onClick={() => {
                      setSelectedPhoto(photo);
                      setPhotoModal(true);
                    }}
                  >
                    <img src={photo.url} alt="" />
                  </figure>
                ))}
              </div>
            </Photos>
          ) : ( */}
          <Photos>
            <Title>Fotos</Title>
            <p>Esse anúncio não possui fotos extras</p>
          </Photos>
          {/* )} */}

          <UserInfos>
            <div
            // style={{
            //   backgroundColor: stringToColor(selectedAnnouncement!.user.name),
            // }}
            >
              {nameAbbreviate("selectedAnnouncement!.user.name")}
            </div>
            <span>{selectedAnnouncement?.user.name}</span>

            <p>{selectedAnnouncement?.user.description}</p>

            <Button
              backgroundColor="#0B0D0D"
              backgroundColorHover=""
              fontColor="#FFFFFF"
              onClick={() => {
                setSelectedUser(selectedAnnouncement!.user);
                history("/profileUser");
              }}
            >
              Ver todos anúncios
            </Button>
          </UserInfos>
        </Aside>
      </Container>
      {/* <PhotoModal /> */}
    </Main>
  );
};

export default ProductDetail;
