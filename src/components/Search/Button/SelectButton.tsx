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
    <div className=' w-[70rem] flex items-center flex-wrap'>
      {items.map((item) => (
        <button
          key={item}
          className={` ${
            selectedItems.includes(item)
              ? color
                ? ` mx-2.5 bg-${item} rounded-full w-6 h-6 text-transparent border border-#DFDFDF
`
                : 'mx-1.5 px-2.5 py-1  bg-gray94 rounded-3xl text-white '
              : color
              ? `mx-2.5 bg-${item} rounded-full w-6 h-6 text-transparent border border-#DFDFDF
              `
              : 'mx-1.5 px-2.5 py-1 '
          }`}
          onClick={() => toggleItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
