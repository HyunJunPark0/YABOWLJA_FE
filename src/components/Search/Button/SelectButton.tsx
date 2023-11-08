import React from 'react';

type SelectButtonProps = {
  items: string[];
  selectedItems: string[];
  onItemSelect: (selectedItems: string[]) => void;
};

export default function SelectButton({
  items,
  onItemSelect,
  selectedItems,
}: SelectButtonProps) {
  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      onItemSelect(selectedItems.filter((selected) => selected !== item));
    } else {
      onItemSelect([...selectedItems, item]);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <button
          key={item}
          className={`m-2 ${selectedItems.includes(item) ? 'bg-gray94 rounded-xl text-white' : ''}`}
          onClick={() => toggleItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
