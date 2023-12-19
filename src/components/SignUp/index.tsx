/* eslint-disable no-console */

import { useState, useEffect } from 'react';

import axios from 'axios';
import Link from 'next/link';

interface ISignUpData {
  nickname: string;
  password: string;
  username: string;
  email: string;
  posture: string;
  is_right_handed: boolean | undefined;
}

export default function SignupForm() {
  const postureOptions = ['크랭커', '투핸드', '덤리스', '클래식'];
  const [signUpData, setSignUpData] = useState<ISignUpData>({
    nickname: '',
    password: '',
    username: '',
    email: '',
    posture: '',
    is_right_handed: undefined,
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState<boolean>(false);
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else if (type === 'checkbox') {
      setAgree(checked);
    } else
      setSignUpData((prev) => ({
        ...prev,
        [name]: value,
      }));
  };



  const checkID = () => {};

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault;
    //유효성검사 추가 필요.
    if (signUpData.is_right_handed !== undefined || agree === true) {
      try {
        const res = await axios.post(
          'http://localhost:8000/user/signup',
          signUpData
        );
        console.log('success', res.data);
      } catch (error) {
        console.error('failed', error);
        
      }
    }
  };

 

  // useEffect(() => {
  //   console.log('Signup Data:', signUpData);
  // }, [signUpData, agree]);

  return (
    <div className='max-w-[40rem] h-[40rem] flex flex-col items-center justify-center m-auto border mt-[10rem]'>
      <h2 className='text-2xl font-bold mb-4'>회원 가입</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-md'>
        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='id'
            type='text'
            name='nickname'
            placeholder='아이디'
            value={signUpData.nickname}
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
            value={confirmPassword}
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
            id='email'
            type='tel'
            name='email'
            placeholder='핸드폰번호'
            value={signUpData.email}
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
          <input
            type='radio'
            name='is_right_handed'
            id='is_right_handed'
            value='true'
            onChange={handleChange}
          />
          오른손
          <input
            type='radio'
            name='is_right_handed'
            id='is_right_handed'
            value='false'
            className='ml-4'
            onChange={handleChange}
          />
          왼손
        </div>

        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            id='agree'
            name='agree'
            checked={agree}
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
