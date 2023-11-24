'use client';
import { useState } from 'react';

import { Slider } from 'antd';

import SelectButton from './Button/SelectButton';

import type { SliderMarks } from 'antd/es/slider';
import Card from './Card.tsx/Card';

// interface ISearchData {
//   compoanies: [];
//   price: string;
//   coverStock: string;
//   factoryFinish: string;
//   color: string;
//   pound: string;
//   symmetry: string;
//   performance: string;
//   diff: string;
// }

const Companies = [
  '콜롬비아300',
  '에보나이트',
  '스톰',
  '브런스윅',
  '모리찌',
  'AMNF',
  'DV8',
  '레인마스터',
  '핵소우',
  '로드필드',
  '래디컬',
  '트랙',
  '900글로벌',
  '제네시스',
  'PBS',
  '로또그립',
  '햄머',
];
const CoverStock = ['우레탄', '솔리드', '하이브리드', '폴리시드'];
const FactoryFinish = ['500', '1000', '1500', '2400', '4000'];

const Color = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'SkyBlue',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const Pricemarks: SliderMarks = {
  0: '0원',
  100: '~100만원',
};

const Diffmarks: SliderMarks = {
  0.01: '0.01',
  0.08: '0.08',
};

const Pound = ['12', '13', '14', '15', '16'];
const Symmetry = ['대칭', '비대칭'];
const Performance = ['엔트리', '로우미들', '미들', '어퍼미들', '하이'];

export default function Search() {
  // const [searchData, setSearchData] = useState<ISearchData>({

  // })
  const [select, setSelect] = useState<string[]>([]);

  const handleItemSelect = (selectedItems: string[]) => {
    setSelect(selectedItems);
  };

  const handleReset = () => {
    setSelect([]);
  };

  const tipFormatter = (value: number[]) => {
    return `${value}만원`;
  };

  const trackStyle = [{ backgroundColor: 'gray' }, { backgroundColor: 'gray' }];
  const handleStyle = [
    { backgroundColor: 'red', borderColor: 'red' },
    { backgroundColor: 'gray', borderColor: 'gray' },
  ];

  return (
    <div>
      <div className='max-w-[80rem] m-auto border border-gray94'>
        <div className=' h-[4.5rem] flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            제조회사
          </div>
          <SelectButton
            items={Companies}
            selectedItems={select}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className='h-14 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40  flex items-center pl-4'>가격</div>
          <Slider
            range
            marks={Pricemarks}
            className='w-[25rem] ml-4 bg-transparent text-gray94'
            v
            defaultValue={[0, 100]}
            tipFormatter={tipFormatter}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            onChange={(value: number[]) => {
              setSelect([`${value[0]}만원 ~ ${value[1]}만원`]);
            }}
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40  flex items-center pl-4'>
            커버스톡
          </div>
          <SelectButton
            items={CoverStock}
            selectedItems={select}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            팩토리 마감
          </div>
          <SelectButton
            items={FactoryFinish}
            selectedItems={select}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40  flex items-center pl-4'>색상</div>
          <SelectButton
            items={Color}
            selectedItems={select}
            onItemSelect={handleItemSelect}
            color
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            무게(파운드)
          </div>
          <SelectButton
            items={Pound}
            selectedItems={select}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            대칭 여부
          </div>
          <SelectButton
            items={Symmetry}
            selectedItems={select}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            퍼포먼스
          </div>
          <SelectButton
            items={Performance}
            selectedItems={select}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className='h-14 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40  flex items-center pl-4'>
            RG Differntial
          </div>
          <Slider
            range
            min={0.01}
            max={0.08}
            step={0.01}
            marks={Diffmarks}
            className='w-[25rem] ml-4 bg-transparent text-gray94'
            defaultValue={[0.01, 0.08]}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            onChange={(value: number[]) =>
              setSelect([`${value[0]}~${value[1]}`])
            }
          />
        </div>
        <div className='h-13 flex items-center'>
          {select.map((item) => (
            <span
              key={item}
              className='selected ml-[1rem] flex items-center text-Orange
            '
              onClick={() => {
                handleItemSelect(
                  select.filter((selected) => selected !== item)
                );
              }}
            >
              {item}
              <img src='cancle.png' alt='cancle' />
            </span>
          ))}
          <div className=' grow'></div>
          <button
            className='flex items-center m-[1.25rem] gap-[0.25rem]'
            onClick={handleReset}
          >
            <img src='ArrowClockwise.png' alt='reset' />
            <span>초기화</span>
          </button>
          <button className='bg-Orange text-white w-[5rem] h-[2.25rem] rounded-l rounded-r mr-[1rem]'>
            검색
          </button>
        </div>
      </div>
      <div>상품
        <div></div>
        <Card/>
      </div>
      <div>버튼</div>
    </div>
  );
}
