import React from 'react';

interface ICard {
  img?: string;
  sale: boolean;
  name: string;
  pound: string;
  price: string;
  star?: string;
  review?: string;
}

export default function Card({
  img,
  sale,
  name,
  pound,
  price,
  star,
  review,
}: ICard) {
  return (
    <div className='w-[19rem] h-[23.5rem] bg-balck border border-#D9D9D9 rounded-xl'>
      <div className='w-full h-[13.75rem] flex items-center justify-center border-b border-#D9D9D9'>
        {img}img
      </div>
      <div className='w-full h-full ml-4'>
        <div>{sale}</div>
        <div>
          {name}-{pound}
        </div>
        <div>{price}</div>
        <div>
          {star}
          {review}
        </div>
      </div>
    </div>
  );
}
