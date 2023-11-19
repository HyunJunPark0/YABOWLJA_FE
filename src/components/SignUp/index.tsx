/* eslint-disable no-console */

import { useState, useEffect } from 'react';

import Link from 'next/link';

interface ISignupData {
  id: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  phoneNumber: string;
  style: string;
  agree: boolean;
}

export default function SignupForm() {
  const styleOptions = ['크랭커', '투핸드', '덤리스', '클래식'];
  const [signupData, setSignupData] = useState<ISignupData>({
    id: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    phoneNumber: '',
    style: '',
    agree: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = event.target;

    setSignupData((prevSignupData) => ({
      ...prevSignupData,
      [name]: type === 'checkbox' ?  checked : value,
    }));
    
  };

  

  const handleSubmit = () => {
    
  };

  useEffect(() => {
    console.log('Signup Data:', signupData);
  }, [signupData]);


  return (
    <div className='max-w-[40rem] h-[40rem] flex flex-col items-center justify-center m-auto border mt-[10rem]'>
      <h2 className='text-2xl font-bold mb-4'>회원 가입</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-md'>
        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='id'
            type='text'
            name='id'
            placeholder='아이디'
            value={signupData.id}
            onChange={handleChange}
          />

          <button
            type='button'
            className='bg-gray-300 text-gray-700 p-2 rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray'
          >
            중복확인
          </button>
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='password'
            type='password'
            name='password'
            placeholder='비밀번호'
            value={signupData.password}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='confirmPassword'
            type='password'
            name='confirmPassword'
            placeholder='비밀번호 확인'
            value={signupData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='nickname'
            type='text'
            name='nickname'
            placeholder='닉네임'
            value={signupData.nickname}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='phoneNumber'
            type='tel'
            name='phoneNumber'
            placeholder='핸드폰번호'
            value={signupData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            투구 스타일 선택
          </label>
          <select
            className='border p-2 w-full'
            id='style'
            name='style'
            value={signupData.style}
            onChange={handleChange}
          >
            <option value=''>투구 스타일 선택</option>
            {styleOptions.map((style, index) => (
              <option key={index} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            id='agree'
            name='agree'
            checked={signupData.agree}
            onChange={handleChange}
          />
          <label htmlFor='agree' className='ml-2'>
            회원가입 약관에 동의합니다.
          </label>
        </div>

        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mr-2'
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
