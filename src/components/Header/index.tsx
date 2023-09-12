"use client";
import Image from "next/image";
import Link from "next/link";
import {BiSearch} from "react-icons/bi"

import Logo from "../../../public/Logo.svg"

export default function Header() {
	return (
		<div>
			<div className="h-[64px] flex border border-b-2 items-center justify-center">
				<Link href="/">
					<button>
						<Image className="ml-[20px] my-[18px] h-[28px] w-[160px]" src={Logo} alt="Logo" />
					</button>
				</Link>
				<div className="flex flex-grow justify-between">
					<div className="flex ml-[24px] justify-centers items-center">
						<Link href="/productlist">
							<button className="h-[20px] text-gray-500 justify-center text-[16px] items-center">볼링공</button>
						</Link>
						<Link href="/contents">
							<button className="h-[20px] text-gray-500 justify-center text-[16px] items-center ml-[24px]">
								Contents
							</button>
						</Link>
						<Link href="/compare">
							<button className="h-[20px] text-gray-500 justify-center text-[16px] items-center ml-[24px]">
								볼링공 비교
							</button>
						</Link>
					</div>
					<div className="flex">
						<div>
							<input className="absolute border w-[240px] h-[36px] rounded-[4px]" type="text" placeholder="볼링공 이름을 입력하세요"></input>
							<button className="relative pl-[215px] justify-center items-center text-[18px] pt-[10px]">
								<BiSearch/>	
							</button>							
						</div>
						<Link href="/login">
							<button className="h-[40px] w-[90px] border-solid text-black rounded-[8px] text-[14px] ml-8 items-center justify-center mr-[8px]">
								Login
							</button>
						</Link>
						<Link href="/signup">
							<button className="h-[36px] w-[79px] hover:bg-[#392f31] bg-[#FF6B00] text-white rounded-[4px] text-[14px]  items-center justify-center mr-[24px]">
								Sign up
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
