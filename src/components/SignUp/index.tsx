/* eslint-disable no-console */

import { useState, useEffect } from 'react';

import Link from 'next/link';

interface ISignUpData {
  user_id: string;
  password: string;
  confirmPassword: string;
  username: string;
  phone: string;
  posture: string;
  agree: boolean;
  is_right_handed: boolean;
}

export default function SignupForm() {
  const postureOptions = ['크랭커', '투핸드', '덤리스', '클래식'];
  const [signUpData, setSignUpData] = useState<ISignUpData>({
    user_id: '',
    password: '',
    confirmPassword: '',
    username: '',
    phone: '',
    posture: '',
    agree: false,
    is_right_handed: true,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = event.target;

    setSignUpData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ?  checked : value,
    }));
    
  };

  const checkID  = () => {
    
  }

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault
  };

  useEffect(() => {
    console.log('Signup Data:', signUpData);
  }, [signUpData]);




  return (
    <div className='max-w-[40rem] h-[40rem] flex flex-col items-center justify-center m-auto border mt-[10rem]'>
      <h2 className='text-2xl font-bold mb-4'>회원 가입</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-md'>
        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='id'
            type='text'
            name='user_id'
            placeholder='아이디'
            value={signUpData.user_id}
            onChange={handleChange}
            required
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
            value={signUpData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='confirmPassword'
            type='password'
            name='confirmPassword'
            placeholder='비밀번호 확인'
            value={signUpData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='username'
            type='text'
            name='username'
            placeholder='닉네임'
            value={signUpData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='phone'
            type='tel'
            name='phone'
            placeholder='핸드폰번호'
            value={signUpData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            투구 스타일
          </label>
          <select
            className='border p-2 w-full'
            id='posture'
            name='posture'
            value={signUpData.posture}
            onChange={handleChange}
            required
          >
            <option value=''>투구 스타일 선택</option>
            {postureOptions.map((posture, index) => (
              <option key={index} value={posture}>
                {posture}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            사용하는 손
          </label>
          <input type="radio" name="is_right_handed" id="is_right_handed" value='true' onChange={handleChange} checked/> 오른손
          <input type="radio" name="is_right_handed" id="is_right_handed" value='false' className='ml-4'onChange={handleChange}/> 왼손
        </div>

        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            id='agree'
            name='agree'
            checked={signUpData.agree}
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
