"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Banner from "../../../public/banner.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

export default function BannerCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="BannerSwiper"
      >
        <SwiperSlide>
          <div className="relative w-full justify-center items-center flex">
            <Image src={Banner} alt="Banner" className="block w-2/3 " />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  p-4">
              검색도 비교도
              <br /> 야볼자로 시작하세요!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}
