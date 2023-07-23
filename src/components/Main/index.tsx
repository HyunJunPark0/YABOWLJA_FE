"use client";

import { useState } from "react";
import Modal from "@/components/Modal/HomeModal";
import Link from "next/link";

export default function Main() {
  const [openModal, setOpenModal] = useState(false);
  const onClickModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <div className="flex-column">
        <div className="flex-column justify-center">
          <div>
            <div className="flex h-[200px] font-bold text-[50px] items-center justify-center">
              야볼자란?
            </div>
            <div className="px-[420px] flex justify-center text-[30px] font-semibold items-center text-[#888888]">
              야!볼링치자의 준말입니다. 다양한 볼링공을 더 쉽고 편하게
              비교,검색하기 위해 시작된 프로젝트로써 제조사,커버스톡 등 다양한
              조건에 맞춰 검색할수 있습니다.
            </div>
          </div>
          <div className="px-[100px] pt-[50px]">
            <div className=" flex h-[200px] font-bold text-[50px]  items-center justify-center">
              걱정마, 야볼자가 찾아준다
            </div>
            <div className="text-[#888888] flex justify-center text-[30px] font-semibold items-center ">
              볼링공 찾기가 어려우신가요? 걱정마세요! 야볼자에서 알려드립니다
              <button
                onClick={onClickModal}
                className="h-[50px] w-[170px] flex bg-[#0219Eb] text-white rounded-[14px] text-[20px] ml-8 items-center justify-center "
              >
                사용법 알아보기
              </button>
              <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
            </div>
          </div>
          <div className="pt-[50px] flex h-[300px] font-bold text-[50px]  items-center justify-center">
            나에게 맞는 볼링공을 찾아보세요!
            <Link href="/list">
              <button className="h-[50px] w-[150px] flex bg-[#0219Eb] text-white rounded-[14px] text-[20px] ml-8 items-center justify-center">
                찾아보러가기
              </button>
            </Link>
          </div>
          <div>
            <div className="flex font-bold text-[50px]  items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
