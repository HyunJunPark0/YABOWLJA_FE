"use client";

import { useState } from "react";

export default function Chart() {

	const [clickButton,SetClickButton] = useState(false)
	const handleColorChange = () =>{
		SetClickButton(!clickButton)
	
	}
	const buttonClassName = clickButton ? 'bg-white text-black' : 'bg-gray-400 text-white'

	return (
		<div>
			<div className="rounded-[4px] mt-5 mx-[100px] justify-center items-center flex-column border-x-[2px] border-t-[2px] border-solid border-[#2E68C1]">
				<div className="flex h-[40px] border-b-[2px] border-solid border-[#2E68C1]">
					<div className="pl-2 text-[20px] w-[140px] bg-[#2E68C1] text-white justify-center items-center">Company</div>
					<div className="flex gap-6  pl-2 justify-center items-center">
						<button className={`justify-center rounded-[5px] ${buttonClassName} `} onClick={handleColorChange}>Storm</button>
						<button>900Global</button>
						<button>Ebonite</button>
						<button>Rotogrip</button>
						<button>Brunswick</button>
						<button>Hammer</button>
						<button>DV8</button>gj
					</div>
				</div>
				<div className="flex h-[40px] border-b-[2px] border-solid border-[#2E68C1]">
					<div className="px-2 text-[20px] w-[140px] bg-[#2E68C1] text-white">Performance</div>
					<div className="flex gap-6 pl-2">
						<button>엔트리</button>
						<button>로우 미들</button>
						<button>미들</button>
						<button>어퍼 미들</button>
						<button>하이</button>
					</div>
				</div>
				<div className="flex h-[40px] border-b-[2px] border-solid border-[#2E68C1]">
					<div className="pl-2 text-[20px] w-[140px] bg-[#2E68C1] text-white">Cover Stock</div>
					<div className="flex gap-6 pl-2">
						<button>Pearl</button>
						<button>Solid</button>
						<button>Hybrid</button>
						<button>Urethane</button>
					</div>
				</div>
				<div className="flex h-[40px] border-b-[2px] border-solid border-[#2E68C1]">
					<div className="pl-2 text-[20px] w-[140px] bg-[#2E68C1] text-white">Weight</div>
					<div className="flex gap-6 border-b pl-2">
						<button>12</button>
						<button>13</button>
						<button>14</button>
						<button>15</button>
						<button>16</button>
					</div>
				</div>
				<div className="flex h-[40px] border-b-[2px] border-[#2E68C1]">
					<div className="px-2 text-[20px] w-[140px] bg-[#2E68C1] text-white">Core</div>
					<div className="flex gap-6 pl-2">
						<button className="bg-[{activeButton || 'none','bg-gray-500'}]">대칭</button>
						<button>비대칭</button>
					</div>
				</div>
			</div>
			{/* <div className="flex justify-center">
				<input className="rounded-l-[4px] w-[250px] h-[50px] justify-center border-[2px] border-[#2E68C1]" type="text"></input>
				<button className="text-[20px] rounded-r-[4px] w-[70px] border-[2px] border-[#2E68C1] text-white bg-[#2E68C1]">검색</button>
			</div> */}
		</div>
	);
}
						
				
			
