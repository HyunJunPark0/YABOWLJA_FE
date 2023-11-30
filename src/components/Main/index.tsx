"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import CompareIcon from "../../../public/compareIcon.svg";
import SearchIcon from "../../../public/searchIcon.svg";
import YabowljaBG from "../../../public/YabowljaBG.svg";
import YabowljaStrikeImg from "../../../public/YabowljaStrikeImg.svg";
import BannerCarousel from "../BannerCarousel";
import NewProductCarousel from "../NewProductCarousel";
import ToggleSection from "../ToggleSection";
import CompanyCarousel from "../CompanyCarousel";

export default function Main() {
  const [readMore, setReadMore] = useState(false);
  const onClickReadMore = () => {
    setReadMore((readMore) => !readMore);
  };

  return (
    <div>
      {/* <div className="flex mt-[40px] justify-center items-center">
        <Image src={Banner} alt="Banner" />
        <div className="absolute text-[36px] text-white justify-center items-center text-center">
          검색도 비교도
          <br /> 야볼자로 시작하세요!
        </div>
      </div> */}
      <BannerCarousel />
      <div className="flex justify-center items-center gap-[32px] mt-[40px]">
        <Link href="/productList">
          <button className="flex border h-[124px] w-[624px] rounded-[10px]">
            <Image
              className="my-[16px] ml-[36px]"
              src={SearchIcon}
              alt="SearchIcon"
            />
            <div className="flex-coulmn ml-[36px]">
              <div className="text-[24px] mt-[33px]">내 입맛대로 검색하기</div>
              <div className="text-[16px]">
                다양한 조건을 기반으로 공을 검색해 줍니다.
              </div>
            </div>
          </button>
        </Link>
        <Link href="/compare">
          <button className="flex border h-[124px] w-[624px] rounded-[10px]">
            <Image
              className="my-[16px] ml-[36px]"
              src={CompareIcon}
              alt="CompareIcon"
            />
            <div className="flex-coulmn ml-[36px]">
              <div className="text-[24px] mt-[33px]">비교가 쉬워요</div>
              <div className="text-[16px]">
                볼링공들끼리 비교도 쉽게 가능합니다.
              </div>
            </div>
          </button>
        </Link>
      </div>
      <div className="justify-center items-center w-[1280px] mx-auto">
        <p className="flex items-center text-[30px] font-semibold mt-[80px] mb-[16px]">
          New Product
        </p>

        <NewProductCarousel />
      </div>
      <div className="pt-[60px] relative w-full">
        <Image
          src={YabowljaBG}
          alt="YabowljaBG"
          className="absolute z-0 w-[1920px] h-[316px]"
        />
        <div className="flex w-[1280px] mx-auto justify-between">
          <div className="z-10 mt-[100px]">
            <span className="text-[#FF6B00] text-[30px] font-semibold">
              야볼자란?
            </span>
            <br />
            <span className="text-[white] text-[16px]">
              야! 볼링치자! 의 준말입니다.
              <br />
              볼링을 좋아하는 개발자들이 모여 &quot;왜 볼링공은 검색이
              어려울까?&quot;라는 생각으로
              <br />
              볼링공 정보에 대한 접근성을 높이기 위해 시작된 프로젝트 입니다.
              <br />
              볼링공을 제조사, 커버스톡 등 다양한 조건에 맞춰 검색할 수
              있습니다.
            </span>
          </div>
          <Image
            src={YabowljaStrikeImg}
            alt="YabowljaStrikeImg"
            className="z-10"
          />
        </div>
      </div>

      <div>
        <CompanyCarousel />
      </div>
      <div className="justify-center items-center w-[1280px] mx-auto mb-10">
        <div className="flex items-center text-[30px] font-semibold mt-[80px]">
          Q&A
        </div>
        <div>
          <ToggleSection title="aaaa" content="aaa" />
          <ToggleSection title="bbbb" content="bbbbbb" />
          {readMore && <ToggleSection title="ccc" content="cc" />}
          {readMore && <ToggleSection title="ddd" content="ddd" />}
          {readMore && <ToggleSection title="ee" content="ee" />}
          <button
            onClick={onClickReadMore}
            className="mx-auto flex font-semibold border bg-[#FAFAFA] border-[#E0E0E0] h-[48px] w-[130px] justify-center items-center rounded-[4px]"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
