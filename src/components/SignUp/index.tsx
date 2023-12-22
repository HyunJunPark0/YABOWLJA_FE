/* eslint-disable no-console */

import { useState, useEffect } from 'react';

import axios from 'axios';
import Link from 'next/link';

import { CheckEmailEP, SignUpEP } from '@/apis/\bapiEndpoints';
import { ISignUpData } from '@/types/user';


export default function SignupForm() {
  const [signUpData, setSignUpData] = useState<ISignUpData>({
    nickname: '',
    password: '',
    email: '',
    posture: '',
    is_right_handed: undefined,
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const postureOptions = ['크랭커', '투핸드', '덤리스', '클래식'];
  const [agree, setAgree] = useState<boolean>(false);

  const checkID = async () => {
    event?.preventDefault();
    try {
      const res = await axios.post(
        CheckEmailEP,
        signUpData.email
        );
        alert(res.data);
      //res가 뭐가 올지 알아야함.
    } catch (error) {
      console.error('failed', error);
    }
  };

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

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    return passwordRegex.test(password);
  };

  const validateNickname = (nickname: string): boolean => {
    const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,10}$/;

    return nicknameRegex.test(nickname);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    //닉네임 유효성 검사
    if (!validateNickname(signUpData.nickname)) {
      console.error(
        '닉네임은 2~10자로 한글, 영문, 숫자로만 이루어져있어야 합니다'
      );
      alert('닉네임은 2~10자로 한글, 영문, 숫자로만 이루어져있어야 합니다');

      return;
      //비밀번호 유효성 검사
    } else if (!validatePassword(signUpData.password)) {
      console.error(
        '비밀번호는 8~16자로 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.'
      );
      alert(
        '비밀번호는 8~16자로 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.'
      );

      return;
      //비밀번호 일치 유효성 검사
    } else if (signUpData.password !== confirmPassword) {
      console.error('비밀번호와 비밀번호확인이 일치하지 않습니다.');
      alert('비밀번호와 비밀번호확인이 일치하지 않습니다.');

      return;
      //사용 손 유효성 검사
    } else if (signUpData.is_right_handed === undefined) {
      console.error('사용하는 손을 클릭해주세요.');
      alert('사용하는 손을 클릭해주세요.');

      return;
      //회원가입 약관 동의 유효성 검사
    } else if (agree === false) {
      console.error('회원가입 약관에 동의해주세요.');
      alert('회원가입 약관에 동의해주세요.');

      return;
      //API
    } else
      try {
        const res = await axios.post(SignUpEP, signUpData);
        console.log('success', res.data);
      } catch (error) {
        console.error('failed', error);
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
            id='email'
            type='email'
            name='email'
            placeholder='이메일'
            value={signUpData.email}
            onChange={handleChange}
            required
          />
          <button
            type='button'
            className='bg-gray-300 text-gray-700 p-2 rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray'
            onClick={checkID}
          >
            중복확인
          </button>
        </div>
        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='nickname'
            type='text'
            name='nickname'
            placeholder='닉네임(2~10자리의 한글/영문/숫자)'
            value={signUpData.nickname}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            className='border p-2 flex-grow'
            id='password'
            type='password'
            name='password'
            placeholder='비밀번호(8~16자리의 영문/숫자/특수문자)'
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
            placeholder='비밀번호(8~16자리의 영문/숫자/특수문자)'
            value={confirmPassword}
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
