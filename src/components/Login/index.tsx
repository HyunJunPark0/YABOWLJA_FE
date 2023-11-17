'use client';

import { useState, useEffect } from 'react';

import Link from "next/link";

interface ILoginData {
  id: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginForm() {
  const [loginData, setLoginData] = useState<ILoginData>({
    id: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (loginData.rememberMe) {
      localStorage.setItem('savedId', loginData.id);
    } else {
      localStorage.removeItem('savedId');
    }
  };

  useEffect(() => {
    const savedId = localStorage.getItem('savedId');
    if (savedId) {
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        id: savedId,
        rememberMe: true,
      }));
    }
  }, []);

  return (
    <div className='max-w-[40rem] h-[25rem] flex flex-col items-center justify-center m-auto border mt-[10rem]'>
      <h2 className='text-2xl font-bold mb-4'>회원 로그인</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-md'>
        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='id'
            type='text'
            name='id'
            placeholder='아이디를 입력하세요'
            value={loginData.id}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='password'
            type='password'
            name='password'
            placeholder='비밀번호를 입력하세요'
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            id='rememberMe'
            name='rememberMe'
            checked={loginData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor='rememberMe' className='ml-2'>
            아이디 저장
          </label>
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mr-2'
          >
            로그인
          </button>
          <Link href='/signup'>
          <button
            type='button'
            className='bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray'
            >
            회원가입
          </button>
            </Link>
        </div>
      </form>
    </div>
  );
}
