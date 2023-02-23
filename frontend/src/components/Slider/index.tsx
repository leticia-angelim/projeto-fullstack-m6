import React, { useContext } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/modules/free-mode/free-mode.min.css";

import { Container } from "./styles";
import { ISliderProps } from "../../interfaces/slider";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { ProductCard } from "../ProductCard";

const Slider = ({ title, children }: ISliderProps) => {
  // const { userAnnouncements, listUserAnnouncements } =
  //   useContext(AnnouncementContext);

  return (
    <Container>
      <h3 style={{ paddingLeft: "1rem" }}>{title}</h3>
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
          <SwiperSlide>{children}</SwiperSlide>
          <SwiperSlide>{children}</SwiperSlide>
          <SwiperSlide>{children}</SwiperSlide>
          <SwiperSlide>{children}</SwiperSlide>
          <SwiperSlide>{children}</SwiperSlide>
          <SwiperSlide>{children}</SwiperSlide>
          <SwiperSlide>{children}</SwiperSlide>

          {/* {userAnnouncements.map((annoucement, index) => (
            <SwiperSlide key={index}>{ProductCard(annoucement)}</SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </Container>
  );
};

export default Slider;
