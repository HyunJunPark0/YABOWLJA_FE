// next/image 의 Image 대신 img 태그 사용
/* eslint-disable @next/next/no-img-element */

"use client";
import { useEffect, useState } from "react";

import { BowlingBall } from "@/types/ball";

import { getMockProductDetail } from "./api";
import { PRODUCT_PAGE_WIDTH } from "./constant";

export default function ProductDetail() {
  const [ball, setBall] = useState<BowlingBall | null>(null);

  useEffect(() => {
    async function fetchBall() {
      const ball = await getMockProductDetail();
      setBall(ball);
    }
    fetchBall();
  }, []);

  if (!ball) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row mt-4" style={{ width: PRODUCT_PAGE_WIDTH }}>
      <div className="w-1/2 flex justify-center">
        <img src={ball.image.thumbnail_image} alt={ball.name} />
      </div>
      <div className="w-full flex flex-col justify-center ml-4">
        <b>상세정보</b>
        <div className="mt-2">
          <table className="w-full text-left text-black">
            <tbody>
              <tr className="border-t-2 border-b-2">
                <td className="border-r-2 font-bold py-1">Cover Stock</td>
                <td className="border-r-2 px-2 py-1">
                  {ball.spec.cover_stock}
                </td>
                <td className="border-r-2 px-2 font-bold py-1">
                  Weight Block(Core)
                </td>
                <td className="px-2 py-1">{ball.spec.weight_block}</td>
              </tr>
              <tr className="border-b-2">
                <td className="border-r-2 font-bold py-1">Factory Finish</td>
                <td className="border-r-2 px-2 py-1">
                  {ball.spec.factory_finish}
                </td>
                <td className="border-r-2 px-2 font-bold py-1">Color</td>
                <td className="px-2 py-1">{ball.spec.color}</td>
              </tr>
              <tr className="border-b-2">
                <td className="border-r-2 font-bold py-1">Flare Potential</td>
                <td className="border-r-2 px-2 py-1">
                  {ball.spec.flare_potential}
                </td>
                <td className="border-r-2 px-2 font-bold py-1">Fragrance</td>
                <td className="px-2 py-1">{ball.spec.fragrance}</td>
              </tr>
              <tr className="border-b-2">
                <td className="border-r-2 font-bold font-bold py-1">Weights</td>
                <td className="border-r-2 px-2 py-1">{ball.spec.weights}</td>
                <td className="border-r-2 px-2 font-bold py-1">Hook</td>
                <td className="px-2 py-1">{ball.spec.hook}</td>
              </tr>
              <tr className="border-b-2">
                <td className="border-r-2 font-bold py-1">Length</td>
                <td className="border-r-2 px-2 py-1">{ball.spec.length}</td>
                <td className="border-r-2 px-2 font-bold py-1">Performance</td>
                <td className="px-2 py-1">{ball.spec.performance}</td>
              </tr>
              <tr className="border-b-2">
                <td className="border-r-2 font-bold py-1">Lane Condition</td>
                <td className="border-r-2 px-2 py-1">
                  {ball.spec.lane_condition}
                </td>
                <td className=""></td>
                <td className=""></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">Description</div>
        <div className="mt-2">
          야!볼링치자의 준말입니다. 다양한 볼링공을 더 쉽고 편하게 비교,검색하기
          위해 시작된 프로젝트로써 제조사,커버스톡 등 다양한 조건에 맞춰
          검색할수 있습니다.
        </div>
      </div>
    </div>
  );
}
