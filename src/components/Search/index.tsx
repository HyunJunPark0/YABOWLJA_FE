'use client';
import { useState } from 'react';

import SelectButton from './Button/SelectButton';
import { RangeSlider } from './Range/RangeSlider';

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

const Pound = ['12', '13', '14', '15', '16'];
const Symmetry = ['대칭', '비대칭'];
const Performance = ['엔트리', '로우미들', '미들', '어퍼미들', '하이'];

export default function Search() {
  // const [searchData, setSearchData] = useState<ISearchData>({

  // })
  const [select, setSelect] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(1000000);
  const [rgMin, setRGMin] = useState<number>(0);
  const [rgMax, setRGMax] = useState<number>(1000000);

  const handleItemSelect = (selectedItems: string[]) => {
    setSelect(selectedItems);
  };

  const handlePriceMinChange = (value: number) => {
    if (value <= priceMax - 10000) {
      setPriceMin(value);
    }
  };

  const handlePriceMaxChange = (value: number) => {
    if (value >= priceMin + 10000) {
      setPriceMax(value);
    }
  };

  const handleRGMinChange = (value: number) => {
    // 추가적인 로직이 필요하다면 여기에 구현
    setRGMin(value);
  };

  const handleRGMaxChange = (value: number) => {
    // 추가적인 로직이 필요하다면 여기에 구현
    setRGMax(value);
  };

  const handleReset = () => {
    setSelect([])
  }

  return (
    <div className='max-w-[80rem] m-auto border border-gray94'>
      <div className=' h-[4.5rem] flex border-b border-gray94'>
        <div className='bg-gray-200 w-40 flex items-center pl-4'>제조회사</div>
        <SelectButton
          items={Companies}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='h-14 flex border-b border-gray94'>
        <div className='bg-gray-200 w-40  flex items-center pl-4'>가격</div>
        <div className=' flex items-center ml-4'>
          <RangeSlider
            label='가격'
            minValue={priceMin}
            maxValue={priceMax}
            onMinChange={handlePriceMinChange}
            onMaxChange={handlePriceMaxChange}
          />
        </div>
      </div>
      <div className='h-10 flex border-b border-gray94'>
        <div className='bg-gray-200 w-40  flex items-center pl-4'>커버스톡</div>
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
        <div className='bg-gray-200 w-40 flex items-center pl-4'>대칭 여부</div>
        <SelectButton
          items={Symmetry}
          selectedItems={select}
          onItemSelect={handleItemSelect}
        />
      </div>
      <div className='h-10 flex border-b border-gray94'>
        <div className='bg-gray-200 w-40 flex items-center pl-4'>퍼포먼스</div>
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
        <div className=' flex items-center ml-4'>
          <RangeSlider
            label='RG'
            minValue={rgMin}
            maxValue={rgMax}
            onMinChange={handleRGMinChange}
            onMaxChange={handleRGMaxChange}
          />
        </div>{' '}
      </div>
      <div className='h-13 flex items-center'>
        {select.map((item) => (
          <span
            key={item}
            className='selected ml-[1rem] flex items-center text-Orange
            '
            onClick={() => {
              handleItemSelect(select.filter((selected) => selected !== item));
            }}
          >
            {item}
            <img src='cancle.png' alt='cancle' />
          </span>
        ))}
        <div className=' grow'></div>
        <button className='flex items-center m-[1.25rem] gap-[0.25rem]' onClick={handleReset}>
          <img src='ArrowClockwise.png' alt='reset'/>
          <span>초기화</span>
        </button>
        <button className='bg-Orange text-white w-[5rem] h-[2.25rem] rounded-l rounded-r mr-[1rem]'>
          검색
        </button>
      </div>
    </div>
  );
}
