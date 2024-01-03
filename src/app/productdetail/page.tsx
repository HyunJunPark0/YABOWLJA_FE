import React from "react";

import Image from "next/image";

import { BallList } from "@/mocks/BallList";

export default function ProductDetail() {
  const Balls = BallList[0];

  const CoverStock = Balls.spec.cover_stock;
  const WeightBlock = Balls.spec.weight_block;
  const FactoryFinish = Balls.spec.factory_finish;
  const Color = Balls.spec.color;
  const FlarePortential = Balls.spec.flare_potential;
  const Fragrance = Balls.spec.fragrance;
  const Weights = Balls.spec.weights;
  const Symmetry = Balls.spec.symmetry;

  const Thumbnail = Balls.image.thumbnail_image;

  return (
    <div>
      <div className="flex">
        <Image src={Thumbnail} alt="Thumbnail" width={400} height={400}></Image>
        <div className="flex flex-col">
          <div>상세정보</div>
          <div>제품설명</div>
        </div>
      </div>
      제품이미지
    </div>
  );
}
