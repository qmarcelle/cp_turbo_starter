import Image from 'next/image';
import { useEffect, useState } from 'react';
import downIcon from '../../../public/assets/down.svg';
import { Spacer } from './Spacer';

export type SelectItem = {
  label: string;
  value: string;
};

interface DropDownProps {
  items: SelectItem[];
  onSelectCallback: (val: string) => void;
  initialSelectedValue: string;
  icon?: JSX.Element;
}

export const Dropdown = ({
  items,
  initialSelectedValue,
  onSelectCallback,
  icon = <Image src={downIcon} alt="down icon" />,
}: DropDownProps) => {
  const mappedItems = new Map(items.map((item) => [item.value, item.label]));
  const [selectedVal, setSelectedVal] = useState(initialSelectedValue);
  const [showDrop, setShowDrop] = useState(false);

  useEffect(() => {
    setSelectedVal(initialSelectedValue);
  }, [initialSelectedValue]);

  function onSelect(item: SelectItem) {
    setSelectedVal(item.value);
    onSelectCallback(item.value);
    setShowDrop(false);
  }

  return (
    <div className="relative">
      <div
        className="flex flex-row link"
        onClick={() => setShowDrop(!showDrop)}
      >
        <p>{mappedItems.get(selectedVal)}</p>
        <Spacer axis="horizontal" size={8} />
        {icon}
      </div>
      <section
        className="card-elevated py-2 z-20"
        style={{ display: showDrop ? 'block' : 'none', position: 'absolute' }}
      >
        {items.map((item) => (
          <div
            key={item.value}
            onClick={() => onSelect(item)}
            className={`${
              item.value == selectedVal
                ? 'selected-dropdown-item'
                : 'dropdown-item'
            } cursor-pointer`}
          >
            <p className="whitespace-nowrap mx-2">{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
