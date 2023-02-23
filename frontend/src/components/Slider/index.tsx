import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/modules/free-mode/free-mode.min.css";

import { Container } from "./styles";
import { ISliderProps } from "../../interfaces/slider";

const Slider = ({ title, children }: ISliderProps) => {
  return (
    <>
      <h2 style={{ paddingLeft: "1rem" }}>{title}</h2>
      <Container>
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
        </Swiper>
      </Container>
    </>
  );
};

export default Slider;
