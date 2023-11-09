import React from 'react';

type SelectButtonProps = {
  items: string[];
  selectedItems: string[];
  onItemSelect: (selectedItems: string[]) => void;
  color?: boolean;
};

export default function SelectButton({
  items,
  onItemSelect,
  selectedItems,
  color = false,
}: SelectButtonProps) {
  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      onItemSelect(selectedItems.filter((selected) => selected !== item));
    } else {
      onItemSelect([...selectedItems, item]);
    }
  };

  return (
    <div className='flex flex-wrap'>
      {items.map((item) => (
        <button
          key={item}
          className={` mx-3 ${
            selectedItems.includes(item)
              ? color
                ? `bg-${item} rounded-full w-6 h-6 text-transparent border border-#DFDFDF
`
                : 'px-2.5 py-1 bg-gray94 rounded-3xl text-white '
              : color
              ? `bg-${item} rounded-full w-6 h-6 text-transparent border border-#DFDFDF
              `
              : ''
          }`}
          onClick={() => toggleItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
