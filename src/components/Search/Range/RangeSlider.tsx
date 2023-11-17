import React from 'react';

interface IRangeSlider {
  label: string;
  minValue: number;
  maxValue: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

export const RangeSlider: React.FC<IRangeSlider> = ({
  label,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <div className='w-[25rem] relative'>
      <div className='mt-1 relative rounded-md shadow-sm flex'>
        <input
          type='range'
          min='0'
          max='1000000'
          step='1'
          value={minValue}
          onChange={(e) => onMinChange(parseInt(e.target.value))}
          className='w-full absolute z-10'
        />
        <span className='w-full absolute z-1'></span>
        <input
          type='range'
          min='0'
          max='1000000'
          step='1'
          value={maxValue}
          onChange={(e) => onMaxChange(parseInt(e.target.value))}
          className='w-full absolute z-10'
        />
      </div>
      <div className='flex justify-between mt-2'>
        <span>{minValue.toLocaleString()}</span>
        <span>{maxValue.toLocaleString()}</span>
      </div>
    </div>
  );
};
