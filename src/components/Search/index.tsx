'use client';
import { useState } from 'react';

import { Slider } from 'antd';
import Image from 'next/image';

import SelectButton from './Button/SelectButton';
import Card from './Card.tsx/Card';
import Reset from '../../../public/ArrowClockwise.svg';
import Cancle from '../../../public/XCircle.svg';

import type { SliderMarks } from 'antd/es/slider';

interface ISelectedItems {
  companies: string[];
  price: string[];
  coverstock: string[];
  factoryfinish: string[];
  color: string[];
  pound: string[];
  symmetry: string[];
  performance: string[];
  diff: string[];
}

const initialState: ISelectedItems = {
  companies: [],
  price: [],
  coverstock: [],
  factoryfinish: [],
  color: [],
  pound: [],
  symmetry: [],
  performance: [],
  diff: [],
};

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
  const [select, setSelect] = useState<ISelectedItems>(initialState);

  //선택항목 State에 저장
  const handleItemSelect = (category: string, selectedItems: string[]) => {
    setSelect((prev) => ({
      ...prev,
      [category]: selectedItems,
    }));
    console.log('Current State:', select);
  };

  const tipFormatter = (value: number[]) => {
    return `${value}만원`;
  };

  //Price diff Event
  const handleSliderChange = (category: string, value: number[]) => {
    setSelect((prevSelect) => ({
      ...prevSelect,
      [category]: value,
    }));
  };

  //선택항목 초기화
  const handleReset = () => {
    setSelect(initialState);
  };

  const handleSubmit = () => {
    axios.get('https://').then((response) => {
      console.log('res', response.data).catch((error) => {
        console.error('에러 발생', error);
      });
    });
  };

  const trackStyle = [{ backgroundColor: 'gray' }, { backgroundColor: 'gray' }];
  const handleStyle = [
    { backgroundColor: 'red', borderColor: 'red' },
    { backgroundColor: 'gray', borderColor: 'gray' },
  ];

  return (
    <div className='max-w-[80rem] m-auto'>
      <div className=' border border-gray94'>
        <div className=' h-[4.5rem] flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            제조회사
          </div>
          <SelectButton
            items={Companies}
            selectedItems={select.companies}
            onItemSelect={(selectedItems) =>
              handleItemSelect('companies', selectedItems)
            }
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
              handleSliderChange('price', value);
            }}
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40  flex items-center pl-4'>
            커버스톡
          </div>
          <SelectButton
            items={CoverStock}
            selectedItems={select.coverstock}
            onItemSelect={(selectedItems) =>
              handleItemSelect('coverstock', selectedItems)
            }
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            팩토리 마감
          </div>
          <SelectButton
            items={FactoryFinish}
            selectedItems={select.factoryfinish}
            onItemSelect={(selectedItems) =>
              handleItemSelect('factoryfinish', selectedItems)
            }
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40  flex items-center pl-4'>색상</div>
          <SelectButton
            items={Color}
            selectedItems={select.color}
            onItemSelect={(selectedItems) =>
              handleItemSelect('color', selectedItems)
            }
            color
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            무게(파운드)
          </div>
          <SelectButton
            items={Pound}
            selectedItems={select.pound}
            onItemSelect={(selectedItems) =>
              handleItemSelect('pound', selectedItems)
            }
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            대칭 여부
          </div>
          <SelectButton
            items={Symmetry}
            selectedItems={select.symmetry}
            onItemSelect={(selectedItems) =>
              handleItemSelect('symmetry', selectedItems)
            }
          />
        </div>
        <div className='h-10 flex border-b border-gray94'>
          <div className='bg-gray-200 w-40 flex items-center pl-4'>
            퍼포먼스
          </div>
          <SelectButton
            items={Performance}
            selectedItems={select.performance}
            onItemSelect={(selectedItems) =>
              handleItemSelect('performance', selectedItems)
            }
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
            onChange={(value: number[]) => {
              handleSliderChange('diff', value);
            }}
          />
        </div>
        <div className='h-13 flex items-center'>
          {Object.entries(select).map(
            ([category, selectedItems]: [string, string[]]) =>
              selectedItems.map((item, index) => {
                if (category === 'price') {
                  const [min, max] = select[category];

                  return (
                    <span
                      key={`${category}-${item}`}
                      className='selected ml-[1rem] flex items-center text-Orange'
                      onClick={() => {
                        handleItemSelect(
                          category,
                          selectedItems.filter((selected) => selected !== item)
                        );
                      }}
                    >
                      {min}만원~{max}만원
                      <Image src={Cancle} alt='cancel' />
                    </span>
                  );
                } else if (category === 'diff') {
                  const [min, max] = select[category];

                  return (
                    <span
                      key={`${category}-${item}`}
                      className='selected ml-[1rem] flex items-center text-Orange'
                      onClick={() => {
                        handleItemSelect(
                          category,
                          selectedItems.filter((selected) => selected !== item)
                        );
                      }}
                    >
                      {min}~{max}
                      <Image src={Cancle} alt='cancel' />
                    </span>
                  );
                } else
                  return (
                    <span
                      key={`${category}-${item}`}
                      className='selected ml-[1rem] flex items-center text-Orange'
                      onClick={() => {
                        handleItemSelect(
                          category,
                          selectedItems.filter((selected) => selected !== item)
                        );
                      }}
                    >
                      {item}
                      <Image src={Cancle} alt='cancel' />
                    </span>
                  );
              })
          )}
          {/* {Object.entries(select).map(
            ([category, selectedItems]: [string, string[]]) =>
              selectedItems.map((item) => (
                <span
                  key={`${category}-${item}`}
                  className='selected ml-[1rem] flex items-center text-Orange'
                  onClick={() => {
                    handleItemSelect(
                      category,
                      selectedItems.filter((selected) => selected !== item)
                    );
                  }}
                >
                  {category !== 'diff' && category !== 'price' && (
                    <>
                      {item}
                      <Image src={Cancle} alt='cancel' />
                    </>
                  )}
                </span>
              ))
          )} */}
          <div className=' grow'></div>
          <button
            className='flex items-center m-[1.25rem] gap-[0.25rem]'
            onClick={handleReset}
          >
            <Image src={Reset} alt='reset' />
            <span>초기화</span>
          </button>
          <button
            className='bg-Orange text-white w-[5rem] h-[2.25rem] rounded-l rounded-r mr-[1rem]'
            onClick={handleSubmit}
          >
            검색
          </button>
        </div>
      </div>

      <div className='w-[80rem] h-[50rem] mt-16'>
        상품
        <div className='flex items-center justify-end'>
          <button>출시일순</button>
          <span
            className=' m-1 left-0 top-1 w-0.1 h-2.5 border border-#d9d9d9'
            content=''
          ></span>
          <button>별점순</button>
          <span
            className=' m-1 left-0 top-1 w-0.1 h-2.5 border border-#d9d9d9'
            content=''
          ></span>
          <button>RG값순</button>
        </div>
        <Card />
      </div>
      <div className='flex items-center justify-center'>버튼</div>
    </div>
  );
}
