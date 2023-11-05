"use client";


import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Modal from "@/components/Modal/HomeModal";

import Banner from "../../../public/banner.svg"
import CompareIcon from "../../../public/compareIcon.svg"
import SearchIcon from "../../../public/searchIcon.svg"
import YabowljaBG from "../../../public/YabowljaBG.svg"
import YabowljaStrikeImg from "../../../public/YabowljaStrikeImg.svg"
import ProductCard from "../Card/ProductCard";



export default function Main() {
	const [openModal, setOpenModal] = useState(false);
	const onClickModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<div>
			<div className="flex mt-[40px] justify-center items-center">
				<Image src={Banner} alt="Banner" />
				<div className="absolute text-[36px] text-white justify-center items-center text-center">검색도 비교도<br/> 야볼자로 시작하세요!</div>
			</div>
			<div className="flex justify-center items-center gap-[32px] mt-[40px]">
				<Link href="/productlist">
				<button className="flex border h-[124px] w-[624px] rounded-[10px]">
					<Image className="my-[16px] ml-[36px]" src={SearchIcon} alt="SearchIcon" />
					<div className="flex-coulmn ml-[36px]">
						<div className="text-[24px] mt-[33px]">
							내 입맛대로 검색하기
						</div>
						<div className="text-[16px]">
						다양한 조건을 기반으로 공을 검색해 줍니다.
						</div>
					</div>
				</button>
				</Link>
				<Link href="/compare">
				<button className="flex border h-[124px] w-[624px] rounded-[10px]">
					<Image className="my-[16px] ml-[36px]" src={CompareIcon} alt="CompareIcon" />
					<div className="flex-coulmn ml-[36px]">
						<div className="text-[24px] mt-[33px]">
							비교가 쉬워요
						</div>
						<div className="text-[16px]">
						볼링공들끼리 비교도 쉽게 가능합니다.
						</div>
					</div>
				</button>
				
				</Link>
			</div>
			<div className="justify-center items-center w-[1280px] mx-auto">
				<p className="flex items-center text-[30px] font-semibold mt-[80px] mb-[16px]">New Product</p>
				<ProductCard/>
			</div>
			<div className="pt-[60px] relative w-full">
				
					<Image src={YabowljaBG} alt="YabowljaBG" className="absolute z-0 w-[1920px] h-[316px]" />
					<div className="flex w-[1280px] mx-auto justify-between">
						<div className="z-10 mt-[100px]">
							<span className="text-[#FF6B00] text-[30px] font-semibold">야볼자란?</span>
							<br/>
							<span className="text-[white] text-[16px]">야! 볼링치자! 의 준말입니다.<br/>볼링을 좋아하는 개발자들이 모여 "왜 볼링공은 검색이 어려울까?"라는 생각으로<br/>볼링공 정보에 대한 접근성을 높이기 위해 시작된 프로젝트 입니다.<br/>볼링공을 제조사, 커버스톡 등 다양한 조건에 맞춰 검색할 수 있습니다.</span>
						</div>
						<Image src={YabowljaStrikeImg} alt="YabowljaStrikeImg" className="z-10"/>
					</div>
				
			</div>
			<div>제조사 배너</div>
			<div>QnA</div>
			{/* <div className="flex-column">
				<div className="flex-column justify-center px-[230px]">
					<div>
						<div className="flex h-[200px] font-bold text-[50px] items-center justify-center">야볼자란?</div>
						<div className=" flex justify-center text-[30px] font-semibold items-center text-[#888888]">
							야!볼링치자의 준말입니다. 다양한 볼링공을 더 쉽고 편하게 비교,검색하기 위해 시작된 프로젝트로써
							제조사,커버스톡 등 다양한 조건에 맞춰 검색할수 있습니다.
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
								className="h-[50px] w-[170px] flex hover:bg-blue-500 bg-[#2E68C1] text-white rounded-[14px] text-[20px] ml-8 items-center justify-center "
							>
								사용법 알아보기
							</button>
							<Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
						</div>
					</div>
					<div className="pt-[50px] flex h-[300px] font-bold text-[50px]  items-center justify-center">
						나에게 맞는 볼링공을 찾아보세요!
						<Link href="/productlist">
							<button className="h-[50px] w-[150px] flex hover:bg-blue-500 bg-[#2E68C1] text-white rounded-[14px] text-[20px] ml-8 items-center justify-center">
								찾아보러가기
							</button>
						</Link>
					</div>
					<div>
						<div className="flex font-bold text-[50px]  items-center justify-center"></div>
					</div>
				</div>
			</div> */}
		</div>
	);
}
