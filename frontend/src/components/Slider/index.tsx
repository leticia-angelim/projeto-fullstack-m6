import React, { useContext, useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/modules/free-mode/free-mode.min.css";

import { Container } from "./styles";
import { ProductCard } from "../ProductCard";
import { ISliderProps } from "../../interfaces/slider";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const Slider = ({ title, children }: ISliderProps) => {
  const { listUserAnnouncements, setAnnouncementId, setEditModal } =
    useContext(AnnouncementContext);

  useEffect(() => {
    listUserAnnouncements("8e0a4dd6-439c-40e8-846a-914c4c5a63b4");
  }, []);

  return (
    <Container>
      <h3 id={title} style={{ paddingLeft: "1rem" }}>
        {title}
      </h3>
      <div>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            485: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {children.map((announcement, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                setAnnouncementId(announcement.id);
                setEditModal(true);
              }}
            >
              {ProductCard(announcement)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Slider;
