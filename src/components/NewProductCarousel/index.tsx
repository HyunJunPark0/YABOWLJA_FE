"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BallList } from "@/mocks/BallList";
import "swiper/css";
import "swiper/css/pagination";

export default function NewProductCarousel() {
  const FirstBall = BallList[0];

  const Company = FirstBall.company;
  const Name = FirstBall.name;
  const Weight = FirstBall.spec.weights;
  const Thumbnail = FirstBall.image.thumbnail_image;

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={19}
        loop={true}
        slidesPerGroup={4}
        loopAddBlankSlides
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            // spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border h-[376px] w-[305px] rounded-[10px]">
            <div className="flex w-[305px] h-[220px] border-b justify-center items-center">
              <Image
                src={Thumbnail}
                alt="Thumbnail"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="text-[16px] ml-[16px] mt-[16px]">
              {Company} - {Name} / {Weight}파운드
            </div>
            <div>데모별점</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-[376px] w-[305px] rounded-[10px]">
            <div className="flex w-[305px] h-[220px] border-b justify-center items-center">
              <Image
                src={Thumbnail}
                alt="Thumbnail"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="text-[16px] ml-[16px] mt-[16px]">
              {Company} - {Name} / {Weight}파운드
            </div>
            <div>데모별점</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-[376px] w-[305px] rounded-[10px]">
            <div className="flex w-[305px] h-[220px] border-b justify-center items-center">
              <Image
                src={Thumbnail}
                alt="Thumbnail"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="text-[16px] ml-[16px] mt-[16px]">
              {Company} - {Name} / {Weight}파운드
            </div>
            <div>데모별점</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-[376px] w-[305px] rounded-[10px]">
            <div className="flex w-[305px] h-[220px] border-b justify-center items-center">
              <Image
                src={Thumbnail}
                alt="Thumbnail"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="text-[16px] ml-[16px] mt-[16px]">
              {Company} - {Name} / {Weight}파운드
            </div>
            <div>데모별점</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
