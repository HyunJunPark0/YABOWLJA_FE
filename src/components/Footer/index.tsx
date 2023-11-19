"use client";
import Image from "next/image";

import TinyBall from "../../../public/TinyBall.svg";

export default function Footer() {
  return (
    <div className="bottom-0 mt-[16px] mx-auto border-t-2 bg-[#F9F9F9] h-[180px] relative transform translateY-0">
      <div className="flex justify-between h-full w-[1280px] items-center mx-auto ">
        <div className="flex-col">
          <div>주식회사 야볼자</div>
          <div>서울시 강남구 역삼동 저기저기 저기 옆집 1층</div>
          <div>Tel : 02-1234-5678</div>
          <div>이 홈페이지의 저작권은 (주)야볼자 에게 있습니다</div>
          <div>문의 : yabowlja@gmail.com</div>
        </div>
        <div className="flex">
          <div className="w-[100px]">
            <div className="flex">
              <Image
                src={TinyBall}
                alt="TinyBall"
                className="w-[20px] h-[20px] mr-1.5"
              />
              한성린
            </div>
            <div>Github</div>
            <div>Blog</div>
          </div>
          <div className="w-[100px]">
            <div className="flex">
              <Image
                src={TinyBall}
                alt="TinyBall"
                className="w-[20px] h-[20px] mr-1.5"
              />
              정석화
            </div>
            <div>Github</div>
            <div>Blog</div>
          </div>
          <div className="">
            <div className="flex">
              <Image
                src={TinyBall}
                alt="TinyBall"
                className="w-[20px] h-[20px] mr-1.5"
              />
              박현준
            </div>
            <div>Github</div>
            <div>Blog</div>
          </div>
        </div>
      </div>
    </div>
  );
}
