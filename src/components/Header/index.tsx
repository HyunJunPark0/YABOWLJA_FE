"use client";

import Image from "next/image";
import Logo from "../../../public/야볼자 Logo (400 × 150px).png";
import Link from "next/link";

export default function Header() {
	return (
		<div>
			<div className="flex border border-b-2 items-center justify-center">
				<Link href="/">
					<button>
						<Image className="ml-[20px] my-[18px] h-[48px] w-[150px]" src={Logo} alt="Logo" />
					</button>
				</Link>
				<div className="flex flex-grow justify-between">
					<div className="flex ml-[24px] justify-centers">
						<Link href="/list">
							<button className="h-[40px] text-gray-500 justify-center text-[20px] items-center">볼링공</button>
						</Link>
						<Link href="contents">
							<button className="h-[40px] text-gray-500 justify-center text-[20px] items-center ml-[24px]">
								Contents
							</button>
						</Link>
					</div>
					<div>
						<button className="h-[40px] w-[90px] bg-black text-white rounded-[8px] text-[20px] ml-8 items-center justify-center mr-[24px]">
							Sign up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
