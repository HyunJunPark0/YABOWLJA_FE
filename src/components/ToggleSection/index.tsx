import React, { useState } from "react";

import Image from "next/image";
import { FiMinusCircle } from "react-icons/fi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

import TinyBall from "../../../public/TinyBall.svg";

interface ToggleSectionProps {
  title: string;
  content: string;
}

export default function ToggleSection({ title, content }: ToggleSectionProps) {
  const [openQna, setOpenQna] = useState(false);
  const onClickQna = () => {
    setOpenQna((openQna) => !openQna);
  };

  return (
    <div>
      <div className="flex border text-[30px] pl-[16px] mr-[4px] rounded-[8px] my-[24px] items-center justify-between">
        <div className="flex items-center h-[80px]">
          <Image src={TinyBall} alt="TinyBall" className="w-[32px] h-[32px]" />
          <div className="ml-[4px]">{title}</div>
        </div>
        <button className="h-[32px] w-[32px] mr-[32px]" onClick={onClickQna}>
          {openQna ? <FiMinusCircle /> : <MdOutlineAddCircleOutline />}
        </button>
      </div>
      <div className="text-[16px] w-[1208px] mx-auto">{openQna && content}</div>
    </div>
  );
}
