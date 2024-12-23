import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Spacer } from '../../foundation/Spacer';
import downIcon from '../../../assets/down.svg';

export type SelectItem = {
  label: string;
  value: string;
};

interface DropDownProps {
  items: SelectItem[];
  onSelectCallback: (val: string) => void;
  defaultValue?: string;
  label?: string;
  className?: string;
}

export const Dropdown = ({
  items,
  onSelectCallback,
  defaultValue,
  label,
  className,
}: DropDownProps) => {
  const [selectedItem, setSelectedItem] = useState<SelectItem>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      const item = items.find((i) => i.value === defaultValue);
      if (item) setSelectedItem(item);
    }
  }, [defaultValue, items]);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <>
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <Spacer size={8} />
        </>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white"
      >
        <span>{selectedItem?.label || 'Select option'}</span>
        <Image src={downIcon} alt="dropdown" width={20} height={20} />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {items.map((item) => (
            <div
              key={item.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedItem(item);
                onSelectCallback(item.value);
                setIsOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};