"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {
	const [openModal, setOpenModal] = useState(false);
	const onClickModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<div>
			<div className="flex-column">
				<div className="flex-column justify-center">
					<div>
						<div className="flex h-[300px] font-bold text-[50px] border border-solid border-gray-500 items-center justify-center">
							야볼자란?
						</div>
						<div className="flex justify-center text-[30px] font-semibold items-center">
							야!볼링치자의 준말입니다. 볼링공을 더 쉽고 편하게 비교,검색하기 위해 시작된 프로젝트...블라블라
						</div>
					</div>
					<div>
						<div className="flex h-[300px] font-bold text-[50px] border border-solid border-gray-500 items-center justify-center">
							걱정마, 야볼자가 찾아준다
						</div>
						<div className="flex justify-center text-[30px] font-semibold items-center ">
							볼링공 찾기가 어려우신가요? 걱정마세요! 야볼자에서 알려드립니다
							<button
								onClick={onClickModal}
								className="h-[50px] w-[170px] flex bg-[#0219Eb] text-white rounded-[14px] text-[20px] ml-8 items-center justify-center"
							>
								사용법 알아보기
							</button>
							<Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
						</div>
					</div>
					<div className="flex h-[300px] font-bold text-[50px]  items-center justify-center">
						나에게 맞는 볼링공을 찾아보세요!
						<button className="h-[50px] w-[150px] flex bg-[#0219Eb] text-white rounded-[14px] text-[20px] ml-8 items-center justify-center">
							찾아보러가기
						</button>
					</div>
					<div>
						<div className="flex font-bold text-[50px]  items-center justify-center"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
