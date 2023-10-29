"use client"
import React from 'react'

import Image from 'next/image'


import { BallList } from '@/mocks/BallList'


function ProductCard() {

  const FirstBall = BallList[0]

  const Company = FirstBall.company
  const Name = FirstBall.name
  const Weight = FirstBall.spec.weights
  const Thumbnail = FirstBall.image.thumbnail_image

  return (
    <div className='flex items-center justify-center'>
      <div className='border h-[376px] w-[305px] rounded-[10px]'>
        <div className='flex w-[305px] h-[220px] border-b justify-center items-center'>
          <Image src={Thumbnail} alt='Thumbnail' width={200} height={200}>
          </Image>
        </div>
        <div className='text-[16px] ml-[16px] mt-[16px]'>
         {Company} - {Name} / {Weight}파운드
        </div>
        <div>
          데모별점
        </div>        
      </div>
      <div className='border h-[376px] w-[305px] rounded-[10px] ml-[20px]'>
        <div className='flex w-[305px] h-[220px] border-b justify-center items-center'>
          <Image src={Thumbnail} alt='Thumbnail' width={200} height={200}>
          </Image>
        </div>
        <div className='text-[16px] ml-[16px] mt-[16px]'>
         {Company} - {Name} / {Weight}파운드
        </div>
        <div>
          데모별점
        </div>        
      </div>
      <div className='border h-[376px] w-[305px] rounded-[10px] ml-[20px]'>
        <div className='flex w-[305px] h-[220px] border-b justify-center items-center'>
          <Image src={Thumbnail} alt='Thumbnail' width={200} height={200}>
          </Image>
        </div>
        <div className='text-[16px] ml-[16px] mt-[16px]'>
         {Company} - {Name} / {Weight}파운드
        </div>
        <div>
          데모별점
        </div>        
      </div>
      <div className='border h-[376px] w-[305px] rounded-[10px] ml-[20px]'>
        <div className='flex w-[305px] h-[220px] border-b justify-center items-center'>
          <Image src={Thumbnail} alt='Thumbnail' width={200} height={200}>
          </Image>
        </div>
        <div className='text-[16px] ml-[16px] mt-[16px]'>
         {Company} - {Name} / {Weight}파운드
        </div>
        <div>
          데모별점
        </div>        
      </div>
    </div>
  )
}

export default ProductCard