'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';

import Logo from '../../../public/Logo.svg';

export default function Header() {
  return (
    <div className='mx-auto border-b-2'>
      <div className='h-[64px] w-[1280px] mx-auto flex items-center justify-center'>
        <Link href='/'>
          <button>
            <Image className='h-[28px] w-[160px]' src={Logo} alt='Logo' />
          </button>
        </Link>
        <div className='flex flex-grow justify-between'>
          <div className='flex ml-[24px] justify-centers items-center'>
            <Link href='/productList'>
              <button className='h-[20px] text-gray-500 justify-center text-[16px] items-center'>
                볼링공
              </button>
            </Link>
            <Link href='/contents'>
              <button className='h-[20px] text-gray-500 justify-center text-[16px] items-center ml-[24px]'>
                Contents
              </button>
            </Link>
            <Link href='/compare'>
              <button className='h-[20px] text-gray-500 justify-center text-[16px] items-center ml-[24px]'>
                볼링공 비교
              </button>
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <label className='relative'>
              <input
                className='border w-[240px] h-[36px] rounded-[4px]'
                type='text'
                placeholder={`  볼링공 이름을 입력하세요`}
              ></input>
              <button className='absolute h-[16px] w-[16px] right-2 my-2.5'>
                <BiSearch />
              </button>
            </label>
            <Link href='/login' className='h-[36px] w-[79px] ml-2'>
              <button className='h-[36px] w-[79px] border-solid text-black rounded-[8px] text-[14px] items-center justify-center pr-[8px]'>
                Login
              </button>
            </Link>
            <Link href='/signup' className='h-[36px] w-[79px]'>
              <button className='h-[36px] w-[79px] hover:bg-[#FF8200] bg-[#FF6B00] text-white rounded-[4px] text-[14px]  items-center justify-center'>
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
