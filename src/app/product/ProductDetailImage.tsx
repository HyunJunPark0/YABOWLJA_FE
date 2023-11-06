// next/image 의 Image 대신 img 태그 사용
/* eslint-disable @next/next/no-img-element */

"use client";
import { useEffect, useState } from "react";

import { getMockProductDetail } from "./api";
import { PRODUCT_PAGE_WIDTH } from "./constant";

export default function ProductDetailImage() {
  const [image, setImage] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const ball = await getMockProductDetail();
        const image = ball.image.image;

        setImage(image);
      } catch (e) {
        console.error(e);
      }
    }
    fetchImage();
  }, []);

  return (
    <div
      className="flex flex-col items-center mt-20"
      style={{ width: PRODUCT_PAGE_WIDTH }}
    >
      <img className="w-full" src={image[0]} alt="image"></img>
    </div>
  );
}
