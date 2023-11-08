'use client';
import { useState } from 'react';

import SelectButton from './Button/SelectButton';

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
  'red',
  'orange',
  'yellow',
  'green',
  'skyblue',
  'blue',
  'purple',
  'black',
  'white',
];
const Pound = ['12', '13', '14', '15', '16'];
const Symmetry = ['대칭', '비대칭'];
const Performance = ['엔트리', '로우미들', '미들', '어퍼미들', '하이'];

export default function Search() {
  // const [searchData, setSearchData] = useState<ISearchData>({

  // })
  const [select, setselect] = useState<string[]>([]);

  const handleItemSelect = (selectedItems: string[]) => {
    setselect(selectedItems);
  };


  return (
    <div className='max-w-[80rem] m-auto border border-gray94'>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[4.5rem] flex items-center pl-[1rem]'>
          제조회사
        </div>
        <SelectButton
          items={Companies}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[3.5rem] flex items-center pl-[1rem]'>
          가격
        </div>
        <div></div>
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[2.5rem] flex items-center pl-[1rem]'>
          커버스톡
        </div>
        <SelectButton
          items={CoverStock}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[2.5rem] flex items-center pl-[1rem]'>
          팩토리 마감
        </div>
        <SelectButton
          items={FactoryFinish}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[2.5rem] flex items-center pl-[1rem]'>
          색상
        </div>
        <SelectButton
          items={Color}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[2.5rem] flex items-center pl-[1rem]'>
          무게(파운드)
        </div>
        <SelectButton
          items={Pound}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[2.5rem] flex items-center pl-[1rem]'>
          대칭 여부
        </div>
        <SelectButton
          items={Symmetry}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[2.5rem] flex items-center pl-[1rem]'>
          퍼포먼스
        </div>
        <SelectButton
          items={Performance}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='flex border-b border-gray94'>
        <div className='bg-gray-200 w-[10rem] h-[3.5rem] flex items-center pl-[1rem]'>
          RG Differntial
        </div>
        <div></div>
      </div>
      <div className='h-[3.25rem] flex items-center'>
        {select.map((item) => (
          <span
            key={item}
            className='selected ml-[1rem] flex items-center'
            onClick={() => {
              handleItemSelect(select.filter((selected) => selected !== item));
            }}
          >
            {item}
            <img src='cancle.png' alt='cancle' />
          </span>
        ))}
        <div className=' grow'></div>
        <button className='flex items-center m-[1.25rem] gap-[0.25rem]' >
          <img src='ArrowClockwise.png' alt='reset' />
          <span>초기화</span>
        </button>
        <button className='bg-orangebutton text-white w-[5rem] h-[2.25rem] rounded-l rounded-r mr-[1rem]'>
          검색
        </button>
      </div>
    </div>
  );
}
