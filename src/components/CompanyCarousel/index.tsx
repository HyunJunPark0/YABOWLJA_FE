"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Global900 from "../../../public/900Global Logo.svg";
import Brunswick from "../../../public/Brunswick Logo.svg";
import Columbia300 from "../../../public/Columbia300 Logo.svg";
import Ebonite from "../../../public/Ebonite Logo.png";
import Storm from "../../../public/Storm Logo.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

export default function CompanyCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="BannerSwiper mt-[40px]"
      >
        <SwiperSlide className="h-[200px] w-[200px]">
          <button>
            <Image alt="Global900" src={Global900} />
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] w-[200px]">
          <button>
            <Image alt="Brunswick" src={Brunswick} />
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] w-[200px]">
          <button>
            <Image alt="Columbia300" src={Columbia300} />
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] w-[200px] bg-white">
          <button>
            <Image alt="Ebonite" src={Ebonite} />
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] w-[200px]">
          <button>
            <Image alt="Storm" src={Storm} />
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
